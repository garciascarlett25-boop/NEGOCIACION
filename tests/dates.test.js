import test from 'node:test';
import assert from 'node:assert/strict';
import { dateKey, weekStartKey } from '../src/dates.js';

test('Sunday night in Bogotá is not counted as the next Monday in UTC', () => {
  assert.equal(dateKey('2026-11-02T01:00:00Z'), '2026-11-01');
  assert.equal(weekStartKey('2026-11-02T01:00:00Z'), '2026-10-26');
  assert.equal(weekStartKey('2026-11-02T05:00:00Z'), '2026-11-02');
});
