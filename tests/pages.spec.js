import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

let server;
let url;
test.beforeAll(async () => {
  execFileSync('npm', ['run', 'build:pages'], { timeout: 45000, stdio: 'pipe' });
  const root = resolve('docs');
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
  server = createServer(async (request, response) => {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    if (!pathname.startsWith('/NEGOCIACION/')) { response.writeHead(404).end(); return; }
    const file = resolve(root, decodeURIComponent(pathname.slice('/NEGOCIACION/'.length)) || 'index.html');
    if (!file.startsWith(root + sep)) { response.writeHead(403).end(); return; }
    try {
      const contents = await readFile(file);
      response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
      response.end(contents);
    } catch { response.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  url = `http://127.0.0.1:${server.address().port}/NEGOCIACION/`;
});
test.afterAll(async () => { if (server) await new Promise(resolve => server.close(resolve)); });

test('the production site loads and negotiates under its GitHub Pages path', async ({ page }) => {
  const failed = [], errors = [];
  page.on('response', response => { if (response.status() >= 400) failed.push(response.url()); });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(url);
  await expect(page.getByRole('heading', { name: /Tu próxima conversación/ })).toBeVisible();
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/NEGOCIACION/favicon.svg');
  await page.getByRole('button', { name: /Comenzar mi primera práctica/ }).click();
  await page.getByRole('button', { name: /Prepara tu estrategia/ }).click();
  await page.getByRole('button', { name: 'Comenzar simulación' }).click();
  await page.getByRole('button', { name: /Explorar intereses/ }).click();
  await expect(page.locator('.message-user')).toHaveCount(1);
  await page.getByRole('button', { name: /Proponer un intercambio/ }).click();
  await expect(page.getByText('Propuesta sobre la mesa')).toBeVisible();
  await page.getByRole('button', { name: /Confirmar el acuerdo/ }).click();
  await expect(page.getByRole('heading', { name: 'Un acuerdo para seguir construyendo' })).toBeVisible();
  expect(errors).toEqual([]);
  expect(failed).toEqual([]);
});
