import test from 'node:test';
import assert from 'node:assert/strict';
import { scenarios } from '../src/data.js';
import { createSession, advance, rewind, evaluate, extractAmount, detectIntent, finishSession, suggestions } from '../src/engine.js';

test('every scenario supports exploration, a conditional proposal and a confirmed outcome', () => {
  for (const scenario of scenarios) {
    let session = createSession(scenario, { objective: scenario.objective, alternative: scenario.starter, limit: scenario.constraints[0] });
    session = advance(session, scenario, '¿Qué es lo más importante para ti?');
    assert.equal(session.discovered, true);
    assert.ok(session.messages.at(-1).text.includes(scenario.discovery));
    session = advance(session, scenario, 'Entiendo tu preocupación y quiero que encontremos una solución.');
    session = advance(session, scenario, 'Si acordamos las condiciones, puedo ofrecer un compromiso claro.');
    assert.ok(session.offer);
    if (session.openIssue) {
      const option = suggestions(session, scenario)[0];
      session = advance(session, scenario, option.text, option.intent);
      assert.equal(session.openIssue, false);
    }
    session = advance(session, scenario, 'Confirmo, estoy de acuerdo con la propuesta.');
    assert.equal(session.agreed, true, scenario.id);
    assert.equal(session.status, 'finished');
    assert.ok(evaluate(session).scores.preparation > 80);
    assert.match(session.messages.at(-1).text, /Confirmamos/);
  }
});

test('agreement cannot be fabricated by accepting before a proposal', () => {
  const s = scenarios[0];
  const session = advance(createSession(s), s, 'De acuerdo.');
  assert.equal(session.agreed, false);
  assert.equal(session.offer, null);
  assert.equal(session.status, 'active');
});

test('aggressive behavior withdraws offers and a repeated attack ends a conversation', () => {
  const s = scenarios[0];
  let session = advance(createSession(s), s, 'Propongo que revisemos el salario.');
  assert.ok(session.offer);
  session = advance(session, s, 'No me importa lo que dices.');
  assert.equal(session.offer, null);
  assert.ok(session.trust < 35);
  session = advance(session, s, 'Eres una idiota.');
  assert.equal(session.status, 'finished');
  assert.equal(session.reason, 'relationship');
  assert.equal(session.agreed, false);
});

test('above-budget proposals yield the actual counteroffer and not the requested amount', () => {
  const s = scenarios[0];
  let session = advance(createSession(s), s, 'Propongo un salario de $3.800.000.');
  assert.equal(session.offer.amount, 3600000);
  session = advance(session, s, 'Acepto la contrapropuesta.');
  assert.equal(session.agreed, true);
  assert.equal(session.offer.amount, 3600000);
});

test('a figure without terms requires a full proposal and another confirmation', () => {
  const s = scenarios[0];
  let session = advance(createSession(s), s, 'Propongo $3.500.000.');
  assert.equal(session.offer.needsDetail, true);
  session = advance(session, s, 'Acepto.');
  assert.equal(session.status, 'active');
  assert.equal(session.agreed, false);
  assert.ok(session.offer.text.includes('90 días'));
});

test('a complete suggested package already contains its non-financial terms', () => {
  const s = scenarios[0];
  let session = advance(createSession(s), s, '¿Qué necesitas?');
  const option = suggestions(session, s).find(option => option.intent === 'trade');
  session = advance(session, s, option.text, option.intent);
  assert.ok(session.offer);
  assert.equal(session.offer.needsDetail, undefined);
  session = advance(session, s, 'Confirmo las condiciones.');
  assert.equal(session.agreed, true);
});

test('rewinding deterministically reconstructs previous state without changing original', () => {
  const s = scenarios[1];
  let session = createSession(s);
  session = advance(session, s, '¿Qué necesitas?');
  const previousTrust = session.trust;
  session = advance(session, s, 'No me importa.');
  const branch = rewind(session, s, 2);
  assert.notEqual(branch.id, session.id);
  assert.equal(branch.turn, 1);
  assert.equal(branch.trust, previousTrust);
  assert.equal(branch.discovered, true);
  assert.equal(session.turn, 2);
});

test('the fourth turn brings new constraints, and finishing without acceptance stays open', () => {
  const s = scenarios[5];
  let session = createSession(s);
  for (let i = 0; i < 4; i++) session = advance(session, s, '¿Qué necesitas?');
  assert.equal(session.events.at(-1).unexpected, s.twist);
  const ended = finishSession(session);
  assert.equal(ended.agreed, false);
  assert.equal(ended.status, 'finished');
});

test('Spanish monetary values and intent variants are parsed', () => {
  assert.equal(extractAmount('Propongo 3,8 millones'), 3800000);
  assert.equal(extractAmount('Puedo ofrecer $3.800.000 COP'), 3800000);
  assert.equal(extractAmount('810 mil al mes'), 810000);
  assert.equal(extractAmount('1100 por unidad'), 1100);
  assert.equal(detectIntent('No acepto esas condiciones'), 'boundary');
  assert.equal(detectIntent('No estoy de acuerdo'), 'boundary');
  assert.equal(detectIntent('Si confirmamos el volumen, puedo ajustar el plazo.'), 'trade');
  assert.equal(detectIntent('Comprendo que esto es frustrante.'), 'reflect');
});

test('new constraints must be integrated before an advanced agreement can close', () => {
  const s = scenarios.find(s => s.id === 'comercial');
  let session = createSession(s);
  session = advance(session, s, '¿Qué necesitas?');
  session = advance(session, s, 'Entiendo tu preocupación.');
  session = advance(session, s, 'Si acordamos un piloto, puedo reservar capacidad.');
  assert.equal(session.openIssue, true);
  session = advance(session, s, 'Confirmo las condiciones.');
  assert.equal(session.agreed, false);
  assert.equal(session.status, 'active');
  const option = suggestions(session, s)[0];
  session = advance(session, s, option.text, option.intent);
  assert.equal(session.openIssue, false);
  assert.ok(session.offer.text.includes('segunda fase'));
  session = advance(session, s, 'Acepto el acuerdo actualizado.');
  assert.equal(session.agreed, true);
});

test('context-specific questions reveal different information and repeated text does not inflate trust', () => {
  const s = scenarios[0];
  let session = advance(createSession(s), s, '¿Qué opciones de formación hay?');
  assert.match(session.messages.at(-1).text, /600.000/);
  session = advance(session, s, '¿Qué indicadores podemos medir?');
  assert.match(session.messages.at(-1).text, /calidad/);
  const trust = session.trust;
  session = advance(session, s, '¿Qué indicadores podemos medir?');
  assert.equal(session.trust, trust);
  assert.deepEqual(session.events.at(-1).effects, []);
});

test('an impossible delivery promise does not create a viable offer', () => {
  const s = scenarios.find(s => s.id === 'cliente');
  const session = advance(createSession(s), s, 'Propongo entregar la pieza hoy.');
  assert.equal(session.offer, null);
  assert.ok(session.events.at(-1).risk);
  assert.match(session.messages.at(-1).text, /tres días/);
});

test('all suggested responses remain applicable and sessions have a bounded length', () => {
  const s = scenarios[0];
  let session = createSession(s);
  assert.equal(suggestions(session, s).length, 3);
  for (let i = 0; i < 12; i++) session = advance(session, s, '¿Qué condición es importante?');
  assert.equal(session.status, 'finished');
  assert.equal(session.reason, 'time');
  assert.equal(session.agreed, false);
  assert.equal(advance(session, s, 'Otra respuesta'), session);
});
