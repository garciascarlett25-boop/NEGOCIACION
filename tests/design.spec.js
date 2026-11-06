import { test, expect } from '@playwright/test';

test('cover movement can be paused and respects reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await expect(page.locator('.sculpture')).toBeVisible();
  await page.getByRole('button', { name: 'Pausar animación' }).click();
  await expect(page.getByRole('button', { name: 'Activar animación' })).toHaveAttribute('aria-pressed', 'true');
  expect(await page.locator('.kinetic-strip > div').evaluate(el => getComputedStyle(el).animationPlayState)).toBe('paused');
  const stillFrame = await page.locator('.sculpture-canvas').screenshot();
  expect(await page.locator('.sculpture-canvas').screenshot()).toEqual(stillFrame);
  await page.getByRole('button', { name: 'Activar animación' }).click();
  await expect(page.getByRole('button', { name: 'Pausar animación' })).toHaveAttribute('aria-pressed', 'false');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.getByRole('button', { name: /Animación desactivada/ })).toBeDisabled();
  expect(await page.evaluate(() => document.getAnimations().some(animation => animation.playState === 'running' && animation.effect?.getComputedTiming().iterations === Infinity))).toBe(false);
});

test('cover remains functional when WebGL is unavailable', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type, ...args) {
      return type === 'webgl' || type === 'webgl2' ? null : original.call(this, type, ...args);
    };
  });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.sculpture-canvas')).toHaveAttribute('data-render-mode', 'css');
  await expect(page.locator('.sculpture-fallback')).toBeVisible();
  await page.getByRole('button', { name: /Comenzar mi primera práctica/ }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  expect(errors).toEqual([]);
});

test('headlines and navigation fit narrow phones, tablets and desktop', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `page width ${width}`).toBe(true);
    const overflow = await page.locator('.premium-home h1, .premium-home h2, .premium-home h3').evaluateAll(headings => headings.flatMap(heading => {
      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      const ranges = [];
      while (walker.nextNode()) {
        const range = document.createRange();
        range.selectNodeContents(walker.currentNode);
        ranges.push(...range.getClientRects());
      }
      return ranges.some(rect => rect.right > window.innerWidth - 8 || rect.left < 0) ? [heading.textContent] : [];
    }));
    expect(overflow, `headline overflow at ${width}px`).toEqual([]);
    if (width === 390 || width === 1440) {
      await page.screenshot({ path: `test-results/pacto-cover-${width === 390 ? 'mobile' : 'desktop'}.png` });
    }
  }
});
