export const timeZone = 'America/Bogota';

export function dateKey(value = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value));
}

export function dateLabel(value, options = {}) {
  return new Intl.DateTimeFormat('es-CO', { timeZone, ...options }).format(new Date(value));
}

export function weekStartKey(value = new Date()) {
  const date = new Date(`${dateKey(value)}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 6) % 7);
  return date.toISOString().slice(0, 10);
}
