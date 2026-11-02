import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

test.beforeAll(() => {
  execFileSync('npm', ['run', 'build:portable'], { cwd: resolve('.'), timeout: 45000, stdio: 'pipe' });
});

test('self-contained HTML supports a negotiation offline without asset requests', async ({ page }) => {
  const errors = [];
  const networkRequests = [];
  page.on('pageerror', error => errors.push(error.message));
  // The managed test browser blocks file:// navigation by policy. Fulfill only
  // the document in memory at a local origin; all real network remains offline.
  const documentUrl = 'http://127.0.0.1:5173/portable-test.html';
  const html = await readFile(resolve('downloads/Pacto.html'), 'utf8');
  await page.route(documentUrl, route => route.fulfill({ contentType: 'text/html', body: html }));
  page.on('request', request => { if (/^https?:/.test(request.url()) && request.url() !== documentUrl) networkRequests.push(request.url()); });
  await page.context().setOffline(true);
  await page.goto(documentUrl);
  await expect(page.getByRole('heading', { name: /Tu próxima conversación/ })).toBeVisible();
  await page.getByRole('button', { name: /Comenzar mi primera práctica/ }).click();
  await page.getByRole('button', { name: /Prepara tu estrategia/ }).click();
  await page.getByRole('button', { name: 'Comenzar simulación' }).click();
  await page.getByRole('button', { name: /Explorar intereses/ }).click();
  await expect(page.locator('.message-user')).toHaveCount(1);
  await page.getByRole('button', { name: /Proponer un intercambio/ }).click();
  await expect(page.getByText('Propuesta sobre la mesa')).toBeVisible();
  await page.getByRole('button', { name: /Confirmar el acuerdo/ }).click();
  await expect(page.getByRole('heading', { name: 'Un acuerdo para seguir construyendo' })).toBeVisible();
  await page.reload();
  await page.getByRole('navigation').getByRole('button', { name: 'Mi progreso' }).click();
  await expect(page.locator('.history-row')).toHaveCount(1);
  expect(errors).toEqual([]);
  expect(networkRequests).toEqual([]);
});
