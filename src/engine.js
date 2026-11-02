import { skills } from './data.js';
import { dialogueTopics, disruptions, impossiblePromises } from './dialogue.js';

export const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const has = (text, pattern) => pattern.test(text);
const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, value));

export function createSession(scenario, preparation = {}, previous = {}) {
  return {
    id: previous.id || crypto.randomUUID(), scenarioId: scenario.id,
    startedAt: previous.startedAt || new Date().toISOString(), preparation,
    turn: 0, trust: 50, tension: 25, discovered: false, heard: false, valued: false,
    conditional: false, bounded: false, offer: null, agreed: false, status: 'active', topics: [], openIssue: false,
    events: [], messages: [{ role: 'person', text: scenario.opening, turn: 0 }],
  };
}

export function detectIntent(text) {
  const t = normalize(text);
  if (has(t, /idiota|inutil|estupid|callate|no me importa|te vas a arrepentir|te voy a despedir|mientes|es tu culpa|no sirves/)) return 'pressure';
  if (has(t, /(?:no puedo|no voy a|no acepto|no estoy de acuerdo|no me parece bien|rechazo|mi limite|no estare|no me es posible|no puedo comprometer|no estoy dispuest|hasta aqui)/)) return 'boundary';
  if (has(t, /(?:si acordamos|si podemos|a cambio|si te|si confirmamos|si mantenemos|si aceptas|si nos|si fijamos|si reducimos|podria.+si |puedo.+si |si .+(?:puedo|podemos|ofrezco|acepto))/)) return 'trade';
  if (/^(?:no|no gracias|prefiero no|eso no)[.!\s]*$/.test(t)) return 'boundary';
  if (/^(?:si|vale|listo|perfecto|ok|aceptado)[.!\s]*$/.test(t)) return 'accept';
  if (has(t, /acepto|de acuerdo|confirmo|cerremos|cerramos|trato hecho|me parece bien|aceptamos/) && !has(t, /(?:no|sin) .{0,20}(?:acept|acuerdo|confirm|cerr|parece bien)/)) return 'accept';
  if (has(t, /entiendo|comprendo|escucho|frustr|lamento|siento que|disculp|reconozco|perdon|te preocupa|tu preocupacion|te importa/)) return 'reflect';
  if (has(t, /\?|¿|que necesitas|cual es|que te|cuales son|cuentame|ayudame a entender|como podriamos|por que|que prioridad|que es lo/)) return 'discover';
  if (has(t, /propongo|ofrezco|podemos acordar|mi propuesta|sugiero|que tal|podriamos|alternativa|hagamos|revisemos|pagar|salario de|precio de|\$|\d[.,]?\d*\s*(?:millones|mil|%)/)) return 'propose';
  if (has(t, /resultado|reduj|mejor|experiencia|coordine|coordin|evidencia|logr|dato|puntual|rubrica|horas|prototipo|impacto|semanas|reuniones|interrump|entrega|costos|ahorro/)) return 'value';
  return 'clarify';
}

export function extractAmount(text) {
  const t = normalize(text);
  const millions = t.match(/(\d+(?:[.,]\d+)?)\s*(?:millones|millon)/);
  if (millions) return Math.round(Number(millions[1].replace(',', '.')) * 1000000);
  const thousands = t.match(/(\d+(?:[.,]\d+)?)\s*mil\b/);
  if (thousands) return Math.round(Number(thousands[1].replace(',', '.')) * 1000);
  const grouped = t.match(/(?:\$\s*)?(\d{1,3}(?:[.,]\d{3})+)(?!\d)/);
  if (grouped) return Number(grouped[1].replace(/[.,]/g, ''));
  const plain = t.match(/\$\s*(\d{3,})|\b(\d{4,})\s*(?:cop|pesos|por unidad|mensuales|al mes)?/);
  return plain ? Number(plain[1] || plain[2]) : null;
}

export function advance(session, scenario, text, explicitIntent) {
  if (session.status !== 'active') return session;
  const next = structuredClone(session);
  const intent = explicitIntent || detectIntent(text);
  const t = normalize(text);
  const amount = extractAmount(text);
  const completePackage = t.includes(normalize(scenario.option));
  const topic = (dialogueTopics[scenario.id] || []).find(item => item.pattern.test(t));
  const repeat = session.events.some(e => normalize(e.text) === t);
  const disruption = disruptions[scenario.id];
  next.turn++;
  let reply = '';
  let insight = '';
  let event = null;
  const effects = [];
  const mark = (...names) => effects.push(...names);
  switch (intent) {
    case 'discover':
      reply = !next.discovered ? scenario.discovery : `Mi prioridad sigue siendo ${scenario.person.motivation.charAt(0).toLowerCase() + scenario.person.motivation.slice(1)} ${next.offer ? 'Podemos revisar la propuesta que acabamos de plantear. ¿Qué condición necesitas ajustar?' : 'Con eso en mente, ¿qué alternativa concreta propondrías? No puedo comprometerme sin conocer las condiciones.'}`;
      next.discovered = true; next.trust += 8; next.tension -= 7;
      insight = 'Abriste espacio para conocer los intereses de la otra parte.';
      mark('listening', 'strategy'); break;
    case 'reflect':
      reply = next.heard ? `Gracias por tenerlo en cuenta. ${next.offer ? 'Ahora necesitamos concretar si las condiciones de la propuesta te funcionan.' : scenario.objection}` : `Gracias por reconocerlo. ${scenario.discovery}`;
      next.heard = true; next.discovered = true; next.trust += 10; next.tension -= 12;
      insight = 'Reconociste la perspectiva del interlocutor. Comprender no te obliga a ceder.';
      mark('empathy', 'listening', 'emotion'); break;
    case 'value':
      reply = `${scenario.value} ${next.discovered ? '¿Cómo lo convertirías en una propuesta que podamos cumplir?' : scenario.objection}`;
      next.valued = true; next.trust += 7;
      insight = 'Conectaste tu argumento con información relevante del caso.';
      mark('clarity', 'strategy'); break;
    case 'boundary':
      next.bounded = true;
      if (has(t, /nunca|siempre|es tu problema|arreglatelas/)) {
        reply = `Puedo escuchar tu límite, pero me cuesta avanzar si lo planteas como un reproche. ${scenario.objection}`;
        next.tension += 8; insight = 'El límite es válido; las generalizaciones pueden dificultar que se escuche.';
        mark('assertiveness');
      } else {
        reply = `Entiendo ese límite. ${next.discovered ? scenario.counter : scenario.discovery}`;
        if (next.discovered) next.offer = { text: scenario.option, amount: scenario.ceiling || null, type: 'counter' };
        next.trust += 5; next.tension -= 4;
        insight = 'Hiciste visible una restricción. Ahora puedes explorar opciones dentro de ella.';
        mark('assertiveness', 'emotion');
      }
      break;
    case 'pressure':
      reply = 'No quiero continuar en esos términos. Podemos discrepar sin descalificarnos. Si quieres retomar, necesito que volvamos al problema con respeto.';
      next.trust -= 25; next.tension += 30; next.offer = null;
      insight = 'La presión personal elevó la tensión y retiró las propuestas pendientes.';
      if (session.events.filter(e => e.intent === 'pressure').length >= 1) {
        reply += ' Voy a terminar esta conversación por ahora. Podemos retomarla cuando haya condiciones para hablar.';
        next.status = 'finished'; next.reason = 'relationship';
      }
      break;
    case 'accept':
      if (next.offer && next.trust >= 35) {
        next.agreed = true; next.status = 'finished'; next.reason = 'agreement';
        reply = `De acuerdo. Confirmamos: ${next.offer.text.charAt(0).toLowerCase() + next.offer.text.slice(1)}. Dejemos estas condiciones por escrito y confirmemos quién hace el siguiente paso.`;
        insight = 'Cerraste sobre una propuesta concreta, con condiciones que ambas partes conocen.';
        mark('agreement', 'clarity');
      } else {
        reply = 'Aún no tenemos una propuesta concreta que aceptar. Antes de cerrar, aclaremos qué haría cada parte y en qué condiciones. ¿Qué propones?';
        insight = 'Mostrar disposición ayuda, pero un sí sin condiciones todavía no constituye un acuerdo.';
      }
      break;
    case 'trade':
    case 'propose': {
      if (next.trust < 35) {
        reply = `Antes de negociar condiciones necesito recuperar la confianza en esta conversación. ${scenario.objection}`;
        insight = 'La tensión acumulada impide que la propuesta avance. Reconocer el impacto puede abrir una vía de reparación.';
        break;
      }
      if (amount && scenario.ceiling && ((scenario.floor && amount < scenario.floor) || (!scenario.floor && amount > scenario.ceiling))) {
        reply = `${scenario.objection} ${scenario.counter}`;
        next.offer = { text: scenario.option, amount: scenario.ceiling, type: 'counter' };
        insight = scenario.floor && amount < scenario.floor ? 'El precio propuesto está por debajo de tu mínimo autorizado. La contrapropuesta vuelve a condiciones viables.' : 'La cifra supera el margen disponible. Recibiste una contrapropuesta: aceptarla no equivale a conseguir tu petición original.';
        mark('clarity');
      } else if (!completePackage && amount && scenario.ceiling && !scenario.floor && amount <= scenario.ceiling && amount > scenario.baseline) {
        next.offer = { text: `Una base de $${amount.toLocaleString('es-CO')} ${scenario.unit}. Antes de cerrar quedan por confirmar los plazos y las condiciones complementarias`, amount, type: 'proposal', needsDetail: true };
        reply = `La cifra de $${amount.toLocaleString('es-CO')} ${scenario.unit} está dentro del margen que puedo considerar. ${scenario.objection} Para confirmarla necesitamos concretar también plazos y condiciones.`;
        insight = 'Tu cifra es viable. Falta transformar el precio en un acuerdo con condiciones verificables.';
        mark('clarity');
      } else {
        reply = next.discovered ? scenario.counter : `${scenario.objection} ${scenario.counter}`;
        next.offer = { text: scenario.option, amount: scenario.ceiling || null, type: 'counter' };
        insight = next.discovered ? 'Tu propuesta abrió una negociación sobre varias condiciones.' : 'Propusiste pronto. Hay una contrapropuesta, pero aún puedes explorar por qué esas condiciones importan.';
        mark('clarity', ...(next.discovered ? ['creativity'] : []));
      }
      if (intent === 'trade') { next.conditional = true; next.trust += 7; mark('strategy', 'assertiveness', 'creativity'); }
      next.trust += 3;
      break;
    }
    default:
      reply = `Cuando dices «${text.length > 110 ? text.slice(0, 107) + '…' : text}», necesito entender cómo se conecta con lo que estamos resolviendo. ${next.discovered ? '¿Puedes concretar qué propones o qué condición necesitas aclarar?' : scenario.objection}`;
      insight = 'Tu intervención necesita más precisión. Formula una pregunta, un argumento con evidencia o una propuesta concreta.';
  }
  // A base amount without terms is never treated as a complete agreement.
  if (intent === 'accept' && session.offer?.needsDetail) {
    next.agreed = false; next.status = 'active'; next.reason = null;
    next.offer = { text: scenario.option, amount: scenario.ceiling, type: 'counter' };
    reply = `Antes de cerrarlo, mi propuesta completa es esta: ${scenario.option.charAt(0).toLowerCase() + scenario.option.slice(1)}. Revisa que también te funcionen estas condiciones; podemos confirmarlas o seguir negociando.`;
    insight = 'Una cifra por sí sola no basta: ahora tienes una propuesta completa para revisar.';
  }
  // The same words do not create new evidence, trust, or emotional changes.
  if (repeat && intent !== 'pressure' && next.status === 'active') {
    next.trust = session.trust; next.tension = session.tension;
    effects.length = 0;
    reply = `Eso ya lo planteamos. ${topic?.reply || scenario.objection} Para avanzar, necesito que ajustes o concretes la siguiente decisión.`;
    insight = 'Repetir la misma intervención no añadió información ni generó nueva evidencia de habilidad.';
  } else if (topic && ['discover', 'reflect', 'value', 'clarify'].includes(intent)) {
    reply = `${intent === 'reflect' ? 'Gracias por reconocerlo. ' : ''}${topic.reply}`;
    next.topics = [...new Set([...(session.topics || []), topic.id])];
    if (intent === 'clarify') insight = 'Abordaste una variable del caso. Puedes profundizar con una pregunta o convertirla en una propuesta.';
  }
  if (scenario.level === 3 && !session.discovered && ['propose', 'trade'].includes(intent)) {
    next.offer = null;
    reply = `Antes de ofrecer condiciones, necesito que comprendamos nuestras restricciones. ${scenario.objection}`;
    insight = 'En este caso complejo, proponer sin explorar intereses todavía no abrió una oferta viable.';
    effects.splice(0, effects.length, 'clarity');
  }
  const promise = impossiblePromises[scenario.id];
  if (promise && promise.pattern.test(t) && !/no (?:puedo|voy a|podemos|prometo)/.test(t) && ['propose', 'trade', 'accept'].includes(intent)) {
    next.offer = null; next.agreed = false; next.status = 'active'; next.reason = null;
    reply = promise.response; insight = promise.reason; effects.length = 0; next.trust -= 8;
  }
  if (session.openIssue && intent === 'accept') {
    next.agreed = false; next.status = 'active'; next.reason = null;
    reply = `Antes de confirmar, quedó una condición pendiente: ${scenario.twist} Necesito que acordemos cómo la resolveremos.`;
    insight = 'El cambio de contexto sigue abierto. La aceptación no resuelve por sí sola esa condición.';
    effects.length = 0;
  } else if (session.openIssue && disruption?.pattern.test(t) && !['pressure', 'accept'].includes(intent)) {
    next.openIssue = false;
    reply = disruption.response;
    if (next.offer) next.offer.text = `${next.offer.text}. ${disruption.addition}`;
    else next.offer = { text: `${scenario.option}. ${disruption.addition}`, amount: scenario.ceiling || null, type: 'counter' };
    mark('strategy', 'creativity');
    insight = 'Integraste la nueva restricción en las condiciones. Ahora hay una propuesta actualizada que puedes revisar.';
  }
  if (next.turn === (scenario.level === 3 ? 3 : 4) && next.status === 'active' && intent !== 'pressure') {
    event = scenario.twist;
    next.openIssue = true;
    reply += `\n\nHay algo más que debemos considerar: ${scenario.twist.charAt(0).toLowerCase() + scenario.twist.slice(1)}`;
    next.tension += 6;
  }
  next.trust = clamp(next.trust); next.tension = clamp(next.tension);
  next.messages.push({ role: 'user', text, turn: next.turn });
  next.messages.push({ role: 'person', text: reply, turn: next.turn });
  next.events.push({ turn: next.turn, text, intent, reply, insight, effects: [...new Set(effects)], unexpected: event, risk: promise?.pattern.test(t) && !/no (?:puedo|voy a|podemos|prometo)/.test(t) ? promise.reason : null });
  if (next.turn >= 12 && next.status === 'active') {
    next.status = 'finished'; next.reason = 'time';
    next.messages.push({ role: 'system', text: 'Terminó el tiempo de práctica. Revisemos lo que construiste y lo que aún quedó pendiente.', turn: next.turn });
  }
  if (next.status === 'finished') next.finishedAt = new Date().toISOString();
  return next;
}

export function finishSession(session) {
  return { ...session, status: 'finished', reason: 'manual', finishedAt: new Date().toISOString() };
}

export function rewind(session, scenario, turn) {
  let next = createSession(scenario, session.preparation);
  for (const event of session.events.slice(0, turn - 1)) next = advance(next, scenario, event.text, event.intent);
  return next;
}

export function suggestions(session, scenario) {
  const options = [];
  if (session.openIssue) return [
    { intent: 'trade', label: 'Integrar la nueva condición', text: `Revisemos la nueva información antes de cerrar. Propongo incorporar esta condición: ${disruptions[scenario.id].addition}` },
    { intent: 'discover', label: 'Explorar el cambio', text: `¿Cómo cambia nuestra propuesta con esta nueva restricción? Quiero entender qué podemos mantener antes de confirmar.` },
    { intent: 'boundary', label: 'Volver a mis límites', text: `${scenario.starter} Necesito revisar las nuevas condiciones antes de aceptar.` },
  ];
  if (!session.discovered) options.push({ intent: 'discover', label: 'Explorar intereses', text: 'Antes de proponer algo, ¿qué es lo más importante para ti y qué restricciones debemos tener en cuenta?' });
  if (!session.heard) options.push({ intent: 'reflect', label: 'Reconocer su perspectiva', text: `Entiendo que esta situación también tiene un costo para ti. Quiero comprender tu preocupación antes de buscar una solución.` });
  if (!session.valued && !session.offer) options.push({ intent: 'value', label: 'Argumentar con hechos', text: `Quiero poner un dato sobre la mesa: ${scenario.facts[0].charAt(0).toLowerCase() + scenario.facts[0].slice(1)} Creo que es relevante para encontrar una solución viable.` });
  if (session.discovered && !session.offer) options.push({ intent: 'trade', label: 'Proponer un intercambio', text: `Si encontramos condiciones que cuiden lo importante para ambos, propongo: ${scenario.option.charAt(0).toLowerCase() + scenario.option.slice(1)}. ¿Qué necesitarías ajustar?` });
  if (session.offer) {
    options.push({ intent: 'accept', label: session.offer.needsDetail ? 'Completar las condiciones' : 'Confirmar el acuerdo', text: session.offer.needsDetail ? 'La base me funciona. Antes de confirmar, ¿qué plazos y condiciones complementarias quedarían acordados?' : `Confirmo que me funcionan estas condiciones: ${session.offer.text}. ¿Dejamos el acuerdo y el siguiente paso por escrito?` });
    options.push({ intent: 'discover', label: 'Verificar antes de cerrar', text: '¿Qué podría impedir que cumplamos estas condiciones y cómo lo revisaríamos a tiempo?' });
  }
  if (session.discovered) options.push({ intent: 'boundary', label: 'Expresar un límite', text: `${scenario.starter} Quiero buscar una solución dentro de ese límite.` });
  return options.slice(0, 3);
}

export function evaluate(session) {
  const events = session.events;
  const pressure = events.filter(e => e.intent === 'pressure').length;
  const preparation = Object.values(session.preparation).filter(v => typeof v === 'string' && v.trim().length >= 12).length;
  const evidence = Object.fromEntries(skills.map(([key]) => [key, events.filter(e => e.effects.includes(key))]));
  const score = {};
  for (const [key] of skills) {
    const count = evidence[key].length;
    score[key] = clamp(count ? 50 + Math.min(count, 3) * 12 : 24, 0, 95);
  }
  score.preparation = Math.min(95, 25 + preparation * 23);
  score.emotion = clamp(pressure ? 35 - pressure * 12 + evidence.emotion.length * 12 : events.length ? 65 + Math.min(evidence.emotion.length, 2) * 12 : 24);
  score.agreement = session.agreed ? clamp(62 + (session.discovered ? 10 : 0) + (session.conditional ? 8 : 0) + (session.bounded ? 8 : 0), 0, 95) : session.offer ? 43 : 20;
  if (pressure) { score.empathy = clamp(score.empathy - pressure * 15); score.strategy = clamp(score.strategy - pressure * 10); }
  const average = Math.round(Object.values(score).reduce((a, b) => a + b, 0) / skills.length);
  const sorted = skills.filter(([key]) => key !== 'agreement').slice().sort((a, b) => score[a[0]] - score[b[0]]);
  return { scores: score, evidence, average, weakest: sorted.slice(0, 2), strongest: sorted.slice(-2).reverse(), pressure, preparation };
}

export const intentLabels = { discover: 'Exploración de intereses', reflect: 'Escucha y reconocimiento', value: 'Argumento con evidencia', boundary: 'Expresión de un límite', pressure: 'Presión personal', accept: 'Verificación y cierre', propose: 'Propuesta', trade: 'Intercambio condicionado', clarify: 'Intervención por precisar' };

export function feedbackFor(event, scenario) {
  if (event.intent === 'pressure') return { title: 'Separa a la persona del problema', better: `Quiero encontrar una solución, pero necesito que revisemos los hechos y las condiciones con respeto. ¿Qué es lo más importante para ti aquí?` };
  if (event.intent === 'clarify') return { title: 'Haz visible lo que necesitas', better: `Mi objetivo es ${scenario.objective.charAt(0).toLowerCase() + scenario.objective.slice(1)} ¿Qué necesitarías para explorar una propuesta en esa dirección?` };
  if (event.intent === 'propose' && !event.effects.includes('creativity')) return { title: 'Explora antes de anclar la negociación', better: `Antes de hablar de condiciones, ¿qué te preocupa más y qué margen tenemos para ajustar otras variables?` };
  if (event.intent === 'accept') return { title: 'Cierra con responsabilidades y seguimiento', better: `Recapitulemos las condiciones, quién se encarga de cada paso y cuándo revisaremos el cumplimiento. Si surge un bloqueo, ¿cómo nos avisamos?` };
  if (event.intent === 'value') return { title: 'Conecta la evidencia con su interés', better: `${scenario.facts[0]} ¿Cómo podríamos usar ese dato para resolver tu preocupación principal?` };
  if (event.intent === 'boundary') return { title: 'Añade una opción dentro de tu límite', better: `${scenario.starter} ¿Podemos construir una alternativa que respete ese límite y atienda tu prioridad?` };
  return { title: 'Profundiza y comprueba tu interpretación', better: `Si te entendí bien, tu prioridad es ${scenario.person.motivation.charAt(0).toLowerCase() + scenario.person.motivation.slice(1)} ¿Qué condición sería imprescindible y cuál podríamos ajustar?` };
}
