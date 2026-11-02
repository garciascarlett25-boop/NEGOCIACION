import { test, expect } from '@playwright/test';

test('desktop home, filtering, library and profile work', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Tu próxima conversación/ })).toBeVisible();
  await page.screenshot({ path: 'test-results/pacto-desktop.png', fullPage: true });
  await page.getByRole('navigation').getByRole('button', { name: /Simulaciones/ }).click();
  await expect(page.locator('.scenario-card')).toHaveCount(12);
  await page.getByRole('button', { name: 'Conflictos', exact: true }).click();
  await expect(page.locator('.scenario-card')).toHaveCount(3);
  await page.getByLabel('Filtrar por dificultad').selectOption('3');
  await expect(page.locator('.scenario-card')).toHaveCount(1);
  await page.getByRole('navigation').getByRole('button', { name: 'Biblioteca' }).click();
  await page.getByRole('button', { name: 'Explorar los intereses' }).click();
  await page.getByRole('button', { name: 'Marcar como leída' }).click();
  await expect(page.getByRole('button', { name: 'Lección leída' })).toBeDisabled();
  await page.keyboard.press('Escape');
  await expect(page.getByText('1 de 8 lecciones leídas')).toBeVisible();
  await page.getByLabel('Abrir mi perfil').click();
  await page.getByLabel('¿Cómo te llamamos?').fill('Scarlett');
  await page.getByRole('button', { name: /Guardar preferencias/ }).click();
  await page.reload();
  await expect(page.getByText('Tu espacio, Scarlett')).toBeVisible();
  expect(errors).toEqual([]);
});

test('a full written conversation saves its review, resumes and branches', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Comenzar mi primera práctica/ }).click();
  await page.getByRole('button', { name: /Prepara tu estrategia/ }).click();
  const fields = page.locator('.preparation-form textarea');
  await fields.nth(0).fill('Quiero llegar a un paquete sostenible de salario y formación.');
  await fields.nth(1).fill('Si no hay acuerdo pediré una revisión en noventa días.');
  await fields.nth(2).fill('No prometo resultados que no puedo controlar.');
  await page.getByRole('button', { name: 'Comenzar simulación' }).click();
  await page.getByLabel('Tu intervención').fill('¿Qué restricciones de presupuesto debemos tener en cuenta?');
  await page.getByLabel('Enviar intervención').click();
  await expect(page.locator('.message-person').last()).toContainText('Finanzas');
  await page.getByRole('button', { name: 'Guardar y salir' }).click();
  await page.reload();
  await page.getByRole('button', { name: 'Retomar', exact: true }).click();
  await expect(page.locator('.message-user')).toHaveCount(1);
  await page.getByLabel('Tu intervención').fill('Entiendo que la equidad del equipo es importante para ti.');
  await page.getByLabel('Enviar intervención').click();
  await expect(page.locator('.message-user')).toHaveCount(2);
  await page.getByLabel('Tu intervención').fill('Si acordamos una revisión en 90 días, puedo comprometer indicadores concretos.');
  await page.getByLabel('Enviar intervención').click();
  await expect(page.getByText('Propuesta sobre la mesa')).toBeVisible();
  await page.screenshot({ path: 'test-results/pacto-conversation.png', fullPage: true });
  await page.getByRole('button', { name: /Confirmar el acuerdo/ }).click();
  await expect(page.getByRole('heading', { name: 'Un acuerdo para seguir construyendo' })).toBeVisible();
  await page.screenshot({ path: 'test-results/pacto-review.png', fullPage: true });
  await page.getByRole('button', { name: 'Conversación y alternativas' }).click();
  await page.getByRole('button', { name: 'Probar otra respuesta desde aquí' }).nth(1).click();
  await page.getByRole('button', { name: 'Explorar alternativa' }).click();
  await expect(page.locator('.message-user')).toHaveCount(1);
  await page.getByRole('button', { name: 'Guardar y salir' }).click();
  await page.getByRole('navigation').getByRole('button', { name: 'Mi progreso' }).click();
  await expect(page.locator('.history-row')).toHaveCount(1);
  await expect(page.getByRole('img', { name: /Mapa de habilidades/ })).toBeVisible();
});

test('mobile layout fits and navigation opens', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.screenshot({ path: 'test-results/pacto-mobile.png', fullPage: true });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.getByLabel('Abrir menú').click();
  await page.getByRole('navigation').getByRole('button', { name: /Simulaciones/ }).click();
  await expect(page.locator('.scenario-card')).toHaveCount(12);
  await page.locator('.scenario-card').first().click();
  await expect(page.getByRole('dialog')).toBeVisible();
  expect(await page.getByRole('dialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
  await page.getByRole('button', { name: /Prepara tu estrategia/ }).click();
  await page.getByRole('button', { name: 'Comenzar simulación' }).click();
  await page.getByLabel('Tu intervención').fill('¿Qué es lo más importante para ti?');
  await page.getByLabel('Enviar intervención').click();
  await expect(page.locator('.message-user')).toHaveCount(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('an advanced case requires addressing the new condition before agreement', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Buscar simulaciones').fill('Socios');
  await page.locator('.scenario-card').click();
  await page.getByRole('button', { name: /Prepara tu estrategia/ }).click();
  await page.getByRole('button', { name: 'Comenzar simulación' }).click();
  for (const [index, text] of ['¿Qué necesitas para proteger el lanzamiento?', 'Entiendo tu preocupación por el riesgo.', 'Si acordamos el piloto, puedo reservar capacidad.'].entries()) {
    await page.getByLabel('Tu intervención').fill(text);
    await page.getByLabel('Enviar intervención').click();
    await expect(page.locator('.message-user')).toHaveCount(index + 1);
  }
  await expect(page.getByText('El contexto cambió.', { exact: false })).toBeVisible();
  await page.getByLabel('Tu intervención').fill('Acepto.');
  await page.getByLabel('Enviar intervención').click();
  await expect(page.locator('.message-user')).toHaveCount(4);
  await expect(page.locator('.message-person').last()).toContainText('condición pendiente');
  await page.getByRole('button', { name: /Integrar la nueva condición/ }).click();
  await expect(page.locator('.message-user')).toHaveCount(5);
  await page.getByRole('button', { name: /Confirmar el acuerdo/ }).click();
  await expect(page.getByRole('heading', { name: 'Un acuerdo para seguir construyendo' })).toBeVisible();
  await expect(page.locator('.outcome-banner')).toContainText('segunda fase');
});

test('ending without agreement, exporting and erasing local history work', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Comenzar mi primera práctica/ }).click();
  await page.getByRole('button', { name: /Prepara tu estrategia/ }).click();
  await page.getByRole('button', { name: 'Comenzar simulación' }).click();
  await page.getByRole('button', { name: /Explorar intereses/ }).click();
  await expect(page.locator('.message-user')).toHaveCount(1);
  await page.getByRole('button', { name: 'Finalizar y analizar' }).click();
  await page.getByRole('button', { name: 'Ver mi análisis' }).click();
  await expect(page.getByText('SIN ACUERDO CONFIRMADO', { exact: true })).toBeVisible();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Exportar análisis' }).click();
  expect((await downloadPromise).suggestedFilename()).toBe('pacto-salario-analisis.json');
  await page.getByLabel('Abrir mi perfil').click();
  await page.getByRole('button', { name: 'Borrar todos mis datos' }).click();
  await page.getByRole('button', { name: 'Sí, borrar mis datos' }).click();
  await expect(page.getByRole('heading', { name: /Tu próxima conversación/ })).toBeVisible();
  await page.reload();
  await page.getByRole('navigation').getByRole('button', { name: 'Mi progreso' }).click();
  await expect(page.getByRole('heading', { name: 'Tu recorrido empieza con una conversación' })).toBeVisible();
});
