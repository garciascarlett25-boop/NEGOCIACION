const KEY = 'pacto-v1';
export const emptyStore = { history: [], active: null, completedLessons: [], name: 'Alex', weeklyGoal: 3 };
const validSession = session => session && typeof session.id === 'string' && typeof session.scenarioId === 'string' && Array.isArray(session.events) && session.events.every(event => typeof event.text === 'string' && typeof event.reply === 'string' && Array.isArray(event.effects)) && Array.isArray(session.messages) && session.messages.every(message => typeof message.text === 'string') && session.preparation && typeof session.trust === 'number' && typeof session.tension === 'number';

export function readStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (!saved || !Array.isArray(saved.history) || !Array.isArray(saved.completedLessons)) return { ...emptyStore };
    return {
      ...emptyStore,
      name: typeof saved.name === 'string' && saved.name.trim() ? saved.name.slice(0, 32) : emptyStore.name,
      weeklyGoal: [1, 2, 3, 4, 5, 7].includes(saved.weeklyGoal) ? saved.weeklyGoal : emptyStore.weeklyGoal,
      completedLessons: saved.completedLessons.filter(id => typeof id === 'string'),
      history: saved.history.filter(s => validSession(s) && s.status === 'finished' && s.finishedAt),
      active: validSession(saved.active) && saved.active.status === 'active' ? saved.active : null,
    };
  } catch { return { ...emptyStore }; }
}

export function writeStore(store) {
  try { localStorage.setItem(KEY, JSON.stringify(store)); return true; } catch { return false; }
}

export function downloadFile(filename, contents, type = 'application/json') {
  const url = URL.createObjectURL(new Blob([contents], { type }));
  const a = document.createElement('a'); a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
