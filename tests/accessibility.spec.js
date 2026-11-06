import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { writeFile } from 'node:fs/promises';

test('main screens meet automated WCAG A/AA checks', async ({ page }) => {
  test.setTimeout(60000);
  const results = {};
  const scan = async name => {
    await page.evaluate(() => Promise.all(document.getAnimations().filter(animation => animation.effect?.getComputedTiming().iterations !== Infinity).map(animation => animation.finished)));
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    results[name] = result.violations;
    await writeFile('test-results/accessibility.json', JSON.stringify(results, null, 2));
  };
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await scan('home');
  await page.getByRole('button', { name: /Comenzar mi primera práctica/ }).click();
  await scan('case');
  await page.getByRole('button', { name: /Prepara tu estrategia/ }).click();
  await scan('preparation');
  await page.getByRole('button', { name: 'Comenzar simulación' }).click();
  await scan('room');
  await page.getByRole('button', { name: /Explorar intereses/ }).click();
  await expect(page.locator('.message-user')).toHaveCount(1);
  await page.getByRole('button', { name: /Proponer un intercambio/ }).click();
  await expect(page.getByText('Propuesta sobre la mesa')).toBeVisible();
  await page.getByRole('button', { name: /Confirmar el acuerdo/ }).click();
  await expect(page.getByRole('heading', { name: /Hagamos una pausa/ })).toBeVisible();
  await scan('review');
  await page.getByRole('navigation').getByRole('button', { name: 'Mi progreso' }).click();
  await scan('progress');
  await page.getByRole('navigation').getByRole('button', { name: 'Biblioteca' }).click();
  await scan('library');
  await page.getByRole('button', { name: 'Explorar los intereses' }).click();
  await scan('lesson');
  await page.getByRole('button', { name: 'Cerrar', exact: true }).click();
  await page.getByLabel('Abrir mi perfil').click();
  await scan('settings');
  await page.getByRole('button', { name: 'Cerrar', exact: true }).click();
  await page.getByRole('button', { name: 'Ayuda y cómo funciona' }).click();
  await scan('help');
  await writeFile('test-results/accessibility.json', JSON.stringify(results, null, 2));
  for (const [screen, violations] of Object.entries(results)) {
    expect(violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), screen).toEqual([]);
  }
});
