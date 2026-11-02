import test from 'node:test';
import assert from 'node:assert/strict';
import { readStore, writeStore } from '../src/storage.js';
import { createSession, finishSession } from '../src/engine.js';
import { scenarios } from '../src/data.js';

test('corrupt or structurally invalid browser data falls back safely', () => {
  globalThis.localStorage = { getItem: () => '{broken' };
  assert.deepEqual(readStore().history, []);
  globalThis.localStorage = { getItem: () => JSON.stringify({ history: [{}], completedLessons: [], name: null, weeklyGoal: -4, active: {} }) };
  const restored = readStore();
  assert.equal(restored.name, 'Alex');
  assert.equal(restored.weeklyGoal, 3);
  assert.equal(restored.active, null);
  assert.deepEqual(restored.history, []);
});

test('a real active session and finished history survive a round trip', () => {
  let serialized;
  globalThis.localStorage = { getItem: () => serialized, setItem: (_, data) => serialized = data };
  const active = createSession(scenarios[0]);
  const ended = finishSession(createSession(scenarios[1]));
  assert.equal(writeStore({ name: 'Scarlett', weeklyGoal: 3, active, history: [ended], completedLessons: ['escucha'] }), true);
  const restored = readStore();
  assert.equal(restored.active.id, active.id);
  assert.equal(restored.history[0].id, ended.id);
  assert.equal(restored.name, 'Scarlett');
  assert.deepEqual(restored.completedLessons, ['escucha']);
});

test('browser storage failures are surfaced to the application', () => {
  globalThis.localStorage = { setItem: () => { throw new Error('quota'); } };
  assert.equal(writeStore({}), false);
});
