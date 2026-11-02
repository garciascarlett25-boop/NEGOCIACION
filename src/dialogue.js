// Case-specific conversational branches. Each answer reveals a different interest or constraint.
export const dialogueTopics = {
  salario: [
    { id: 'budget', pattern: /presupuesto|margen|banda|finanzas/, reply: 'El margen autorizado este trimestre llega a $3.600.000. Más que la cifra aislada, Finanzas necesita consistencia con las bandas del equipo. Puedo documentar una revisión en 90 días si acordamos indicadores.' },
    { id: 'growth', pattern: /formacion|crecimiento|curso|flexibilidad/, reply: 'Hay $600.000 para formación aplicada al equipo. También podemos revisar un día de trabajo remoto, sujeto a la coordinación del área. ¿Cuál de esas variables tiene más valor para ti?' },
    { id: 'criteria', pattern: /indicador|medir|criterio|revision|resultados/, reply: 'Podemos seguir el tiempo de entrega y la calidad de los procesos, con una revisión a los 90 días. No necesito que prometas un porcentaje que no controlas; sí que definamos cómo medir tu contribución.' },
  ],
  cliente: [
    { id: 'delivery', pattern: /fecha|cuando|plazo|entrega|franja|horario/, reply: 'Puedo recibir la pieza en tres días hábiles, pero necesito una franja horaria confirmada. Mañana no estaré en casa. No quiero perder otra jornada esperando sin saber cuándo llegará.' },
    { id: 'refund', pattern: /reembolso|devolucion|dinero|compensa|envio/, reply: 'La devolución de los $80.000 del envío es justa por el retraso, pero no resuelve el escritorio. Si me devuelven todo, también necesito que organicen la recogida sin otro costo.' },
    { id: 'trust', pattern: /seguimiento|confianza|responsable|contacto|llamada/, reply: 'Quiero un contacto directo y una confirmación escrita hoy. Si mañana me llamas con el estado y la franja de entrega, no tendré que empezar la historia de nuevo con cada persona.' },
  ],
  limites: [
    { id: 'scope', pattern: /esquema|estructura|borrador|ideas/, reply: 'El contenido ya está en el borrador. Si me ayudas a ordenar la introducción y los tres argumentos, podría hacer las diapositivas yo. No necesitas asumir toda la presentación.' },
    { id: 'time', pattern: /viernes|minutos|tiempo|sabado|examen/, reply: 'Entiendo que el examen del lunes es tu prioridad. Los 20 minutos del viernes podrían servirme si nos concentramos solo en el esquema. Yo haría el diseño y el ensayo.' },
    { id: 'alternative', pattern: /equipo|alguien|otra persona|alternativa/, reply: 'Podría pedirle a otra persona del equipo que escuche el ensayo. Me cuesta pedir ayuda porque siento que debería tenerlo todo resuelto, pero eso no debería convertirse en tu responsabilidad.' },
  ],
  entrevista: [
    { id: 'expectation', pattern: /expectativa|exito|prioridad|primeros|necesit/, reply: 'En los primeros tres meses esperamos un mapa de dependencias y alertas tempranas entre tres áreas. No buscamos que sepas todo: necesitamos que preguntes a tiempo y hagas visibles los riesgos.' },
    { id: 'example', pattern: /experiencia|prototipo|universidad|academico/, reply: 'Me interesa el prototipo de seis semanas. ¿Qué decisión tomaste tú cuando hubo un retraso? Quiero distinguir tu contribución de la del equipo, sin restarle mérito a nadie.' },
    { id: 'process', pattern: /prueba|siguiente|proceso|semana/, reply: 'El siguiente paso puede ser una prueba práctica de coordinación y una conversación con la líder la próxima semana. Antes de agendarla, necesito un ejemplo claro de cómo anticipas un bloqueo.' },
  ],
  venta: [
    { id: 'price', pattern: /precio|presupuesto|descuento|caro|650/, reply: 'Los $650.000 son mi referencia, pero un software que nadie puede implementar también sale caro. Si me demuestras ahorro real de tiempo y acompañamiento, puedo evaluar los $900.000.' },
    { id: 'success', pattern: /horas|medir|criterio|exito|ahorro|errores/, reply: 'Hoy perdemos seis horas semanales conciliando. Me serviría reducirlas a tres y registrar menos diferencias de inventario. Eso tendría que comprobarse con mis datos durante la prueba.' },
    { id: 'approval', pattern: /socia|aprobar|decision|implementacion|soporte/, reply: 'Mi socia aprueba el gasto. Yo me ocuparía de la herramienta, pero necesito una sesión de implementación. A ella le llevaría una propuesta con precio, ahorro esperado y cómo cancelar si no funciona.' },
  ],
  companeros: [
    { id: 'cause', pattern: /retras|bloque|paso|prioridad|urgencia/, reply: 'Me asignaron una urgencia de otro proyecto y no sabía qué priorizar. Debí avisarte antes. Si elevamos el choque de prioridades juntos, no tengo que fingir que puedo con todo.' },
    { id: 'repair', pattern: /reunion|delante|publico|respeto|ayer/, reply: 'Lo de ayer frente al equipo me dolió. Prefiero que los bloqueos se hablen en privado y que al resto le comuniquemos el plan, no culpables.' },
    { id: 'tasks', pattern: /modulo|jueves|datos|responsabilidad|plazo/, reply: 'Puedo entregar los datos el jueves a las 12:00 si tú preparas el segundo módulo. A las 15:00 podríamos revisarlos juntos y avisar cualquier bloqueo por un mensaje privado.' },
  ],
  superior: [
    { id: 'scope', pattern: /alcance|diapositiva|presentacion|reunion/, reply: 'Para Comercial bastan tres diapositivas con cifras verificadas. No necesito una presentación extensa. Esa versión ejecutiva toma tres horas, así que habría que ajustar la otra entrega igualmente.' },
    { id: 'priority', pattern: /prioridad|informe|horas|plazo|fecha/, reply: 'La reunión comercial tiene fecha externa. El informe es interno y puede moverse un día, pero debemos avisar hoy a quienes lo esperan. Prefiero una fecha realista a enterarme del retraso mañana.' },
    { id: 'risk', pattern: /cifra|proyeccion|riesgo|valid|dato/, reply: 'Solo quiero cifras validadas. Podemos señalar una proyección como pendiente, explicando qué dato falta y cuándo se confirma. No presentes una estimación como si fuera un resultado.' },
  ],
  proveedor: [
    { id: 'cost', pattern: /costo|insumo|logistica|diseno|materia/, reply: 'Los cambios de diseño y las entregas extraordinarias nos cuestan mucho. Mantener un diseño estándar y fechas quincenales permitiría llegar a $1.100 sin bajar la calidad sanitaria.' },
    { id: 'volume', pattern: /volumen|5000|5.000|meses|compromiso/, reply: 'Con 5.000 unidades al mes durante tres meses puedo planificar compras y producción. Necesito formalizar ese compromiso y el calendario; una intención sin volumen no me da previsión.' },
    { id: 'quality', pattern: /calidad|sanitari|certifica|garantia/, reply: 'No negociamos los controles sanitarios. El diseño estándar cambia la personalización, no el material apto para alimentos. Podemos dejar las especificaciones y los controles por escrito.' },
  ],
  comercial: [
    { id: 'exclusive', pattern: /exclusiv|competidor|ano/, reply: 'Buscamos proteger el lanzamiento frente al competidor directo. No necesitamos bloquear todos tus clientes durante un año. Una exclusividad limitada al piloto podría ser suficiente.' },
    { id: 'payment', pattern: /anticipo|pago|caja|30|90/, reply: 'Nuestra política es pagar a 90 días, pero se pueden aprobar anticipos del 30 % para pilotos con hitos verificables. Necesitaría un alcance y un calendario claros para pedir esa excepción.' },
    { id: 'scope', pattern: /alcance|piloto|semanas|funcion|plazo/, reply: 'El lanzamiento requiere una prueba en cuatro semanas. Podemos reducir funciones para ese piloto y presupuestar el resto en una segunda fase. No conviene fingir que seis semanas caben en cuatro.' },
  ],
  desacuerdo: [
    { id: 'criteria', pattern: /criterio|rubrica|compar|just/, reply: 'Propongo que ambos usemos la misma rúbrica: evidencia original, viabilidad e impacto. Podemos puntuar por separado y después revisar las diferencias, sin diseñar criterios para favorecer una idea.' },
    { id: 'sources', pattern: /fuente|entrevista|tiempo|semanas|viable/, reply: 'Tenemos tres fuentes locales y solo dos semanas. El tema global necesitaría más datos secundarios; podríamos usar esos datos como marco y aportar evidencia local propia.' },
    { id: 'participation', pattern: /equipo|particip|tarea|repart/, reply: 'Quien no pueda entrevistar puede analizar fuentes o preparar la visualización. Quiero que todas las contribuciones se reconozcan y que el reparto quede definido hoy.' },
  ],
  alquiler: [
    { id: 'stability', pattern: /vacio|puntual|estab|renov|meses/, reply: 'Renovar doce meses y seguir recibiendo el pago puntualmente me da estabilidad. Evitar un periodo vacío puede compensar una parte de la diferencia que pedía.' },
    { id: 'comparison', pattern: /anuncio|mercado|precio|1600|1.600/, reply: 'Los anuncios son una referencia, pero no sabemos a cuánto se cerraron. Si comparas tamaño, ubicación y estado, podemos revisar juntos si $1.600.000 es una cifra razonable.' },
    { id: 'repair', pattern: /filtra|repar|estructural|manten/, reply: 'La filtración requiere una revisión técnica a mi cargo. Podemos separar ese compromiso de la renovación y dejar por escrito las responsabilidades de mantenimiento sin trasladarte la reparación estructural.' },
  ],
  feedback: [
    { id: 'facts', pattern: /hecho|reunion|interrump|ejemplo/, reply: 'Si hablamos de las interrupciones en esas tres reuniones, puedo revisar una conducta concreta. Me cuesta más entenderlo si se resume en que «soy dominante». ¿Qué pauta quieres que probemos?' },
    { id: 'privacy', pattern: /quien|quejo|dijo|confidencial|nombre/, reply: 'Me gustaría saber quién lo dijo, pero puedo trabajar con los hechos que tú observaste sin pedirte nombres. Quiero poder responder a ejemplos concretos.' },
    { id: 'urgent', pattern: /riesgo|alerta|urgente|cliente|senal/, reply: 'Podría anotar las observaciones y esperar el turno. Para un riesgo inmediato al cliente acordemos una señal breve, expliquemos el motivo y después devolvamos la palabra a quien hablaba.' },
  ],
};

export const disruptions = {
  salario: { pattern: /finanzas|banda|90|indicador|revision/, response: 'Entonces dejemos la revisión de los 90 días con indicadores y responsables. Cualquier aumento posterior al margen actual sigue sujeto a Finanzas.', addition: 'Revisión en 90 días; cualquier aumento posterior queda sujeto a aprobación de Finanzas.' },
  cliente: { pattern: /franja|horario|tres dias|3 dias|no estar|contact|confirm/, response: 'Con una franja confirmada y seguimiento personal mañana sí puedo organizarme. La pieza llegará en tres días hábiles, no mañana.', addition: 'Confirmación escrita hoy, contacto de seguimiento mañana y franja horaria acordada para la entrega.' },
  limites: { pattern: /20|veinte|limite|viernes|no|ensayo|equipo/, response: 'Está bien: mantengamos los 20 minutos del viernes solo para el esquema. El ensayo se lo pediré a otra persona.', addition: 'La ayuda termina a los 20 minutos y no incluye ensayo ni trabajo el fin de semana.' },
  entrevista: { pattern: /riesgo|depend|alerta|avis|fecha|prioridad|verific/, response: 'Eso es lo que queremos comprobar: avisar el riesgo, verificar las dependencias y acordar la fecha antes de prometer. Lo incluiremos en la prueba práctica.', addition: 'La prueba incluye comunicar un cambio de fecha entre áreas sin prometer una entrega no validada.' },
  venta: { pattern: /socia|ahorro|propuesta|cancel|aproba|medir/, response: 'Llevaré la propuesta a mi socia con precio, criterio de ahorro y salida sin contratación si la prueba no cumple. La prueba no equivale aún a una venta.', addition: 'La contratación queda pendiente de resultados de la prueba y aprobación de la socia; se explican las condiciones de cancelación.' },
  companeros: { pattern: /prioridad|jefe|elevar|juntos|bloque|avis/, response: 'Elevemos hoy el conflicto de prioridades con el mismo mensaje. Si no liberan mi tiempo, revisamos el reparto antes de comprometer una entrega imposible.', addition: 'Elevan juntos el conflicto de prioridades y revisan el reparto si no se libera la capacidad necesaria.' },
  superior: { pattern: /valid|proyeccion|dato|riesgo|pendiente|estim/, response: 'Dejemos la proyección como pendiente de validar, con el dato que falta y una fecha para revisarla. La presentación llevará solo cifras verificadas.', addition: 'Solo se presentan cifras verificadas y se identifican las proyecciones pendientes con su fecha de validación.' },
  proveedor: { pattern: /calendario|quincen|extraord|fij|logistica|plan/, response: 'Con calendario quincenal fijo y entregas extraordinarias cotizadas por separado podemos sostener los $1.100 y la calidad acordada.', addition: 'Calendario quincenal fijo; cualquier entrega extraordinaria se cotiza y autoriza por separado.' },
  comercial: { pattern: /alcance|fase|presupuest|funcion|excluir|cambio/, response: 'La funcionalidad adicional irá a una segunda fase, con presupuesto y fecha por aprobar. El piloto conserva el alcance original de cuatro semanas.', addition: 'La nueva funcionalidad queda fuera del piloto y requiere alcance, presupuesto y fecha propios para una segunda fase.' },
  desacuerdo: { pattern: /fuente|anal|visual|tarea|repart|particip/, response: 'Asignemos análisis de fuentes a quien no puede entrevistar. Todas las tareas tendrán responsable, fecha y el mismo reconocimiento en la entrega.', addition: 'Quien no pueda entrevistar realiza análisis de fuentes; se registran responsables y fechas para todas las tareas.' },
  alquiler: { pattern: /filtra|repar|estructural|separ|manten|escrito/, response: 'La revisión de la filtración corre por mi cuenta y quedará separada del alquiler. No te estoy trasladando una reparación estructural por renovar.', addition: 'La propietaria gestiona la revisión técnica de la filtración; no se traslada una reparación estructural a la persona arrendataria.' },
  feedback: { pattern: /senal|riesgo|alerta|urgente|turno|cliente/, response: 'Acordemos una señal para un riesgo inmediato al cliente, con explicación breve y devolución de la palabra. No se usará para cualquier desacuerdo técnico.', addition: 'Se acuerda una señal de alerta solo para riesgos inmediatos y se devuelve la palabra después de explicarlos.' },
};

export const impossiblePromises = {
  cliente: { pattern: /(?:entreg|reemplaz|resuelv).{0,30}(?:hoy|manana|24 horas)/, response: 'El almacén necesita tres días hábiles. Si me prometes una entrega hoy o mañana, vuelves a ofrecer una fecha que no puedes cumplir. Prefiero una solución verificable.', reason: 'La entrega prometida contradice el plazo mínimo de tres días hábiles.' },
  proveedor: { pattern: /(?:baj|reduc|sacrific|elimin).{0,25}(?:calidad|sanitari|control)/, response: 'No podemos reducir los estándares sanitarios. Podemos ajustar el diseño, la previsión y la logística, pero no la seguridad del empaque.', reason: 'Reducir los estándares sanitarios cruza una restricción explícita del caso.' },
  comercial: { pattern: /(?:acepto|ofrezco|propongo).{0,35}exclusividad.{0,20}(?:ano|general|total)/, response: 'Una exclusividad general de un año bloquearía tu capacidad de atender a otros clientes. Antes de aceptarla revisemos si necesitas limitarla al piloto o al competidor directo.', reason: 'La exclusividad general contradice el límite de autonomía de tu negocio.' },
};
