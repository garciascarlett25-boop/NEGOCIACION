# Pacto

Plataforma de práctica en negociación y conversaciones difíciles, completamente en español. Construida con React 19 y Vite; funciona en escritorio y móvil.

## Diseño y movimiento

La identidad combina un fondo marfil, negro tinta, azul eléctrico y tipografía editorial Manrope / Instrument Serif. La portada incluye una escultura 3D original de dos volúmenes entrelazados, renderizada con Three.js e iluminación generada localmente.

- El movimiento se puede pausar sin cambiar la posición de la escultura.
- Se respeta la preferencia del sistema de movimiento reducido.
- El renderizado se detiene cuando la portada queda fuera de pantalla, la pestaña está oculta o hay una ventana abierta.
- Si WebGL no está disponible, se muestra una composición CSS y la plataforma sigue funcionando.
- Tipografías, iconos y materiales se sirven localmente; no se hacen solicitudes a servicios externos para cargar fuentes, iconos ni materiales.

Los textos y la interfaz de las simulaciones, la biblioteca y los análisis comparten la nueva jerarquía de lectura. El historial sigue usando la misma clave local y se conserva entre versiones del sitio.

## Publicar como página web en GitHub Pages

La web preparada para GitHub Pages está en `docs/`, dentro de la rama `main`. No necesita que el usuario descargue archivos ni instale software.

Activación inicial en GitHub, si Pages aún no está habilitado:

1. Abre <https://github.com/garciascarlett25-boop/NEGOCIACION/settings/pages>.
2. En **Build and deployment → Source**, elige **Deploy from a branch**.
3. Elige la rama **main**, carpeta **/docs**, y pulsa **Save**.
4. GitHub mostrará el enlace público cuando termine su despliegue. La dirección prevista es <https://garciascarlett25-boop.github.io/NEGOCIACION/>; no se considera publicada hasta que Pages confirme el despliegue.

Para actualizar la web después de modificar el código:

```bash
npm ci
npm test
npm run build:pages
git add src public index.html package.json package-lock.json docs
git commit -m "Actualizar Pacto"
git push origin main
```

`build:pages` genera las rutas de los recursos con el prefijo `/NEGOCIACION/`. La carpeta `docs/` se versiona intencionalmente para que GitHub Pages publique directamente desde ella, sin tokens adicionales ni instalación en el navegador. `.nojekyll` evita que GitHub transforme los archivos compilados.

Los datos de entrenamiento se guardan en el navegador de cada persona, separados del dominio local y de la versión descargable.

## Abrir sin instalar nada

La vista previa integrada de un chat depende de las capacidades de esa interfaz; un servidor local en el entorno de desarrollo no es una URL pública. Si esa vista previa no está disponible, usa la versión portátil:

1. Descarga `Pacto.html` del paquete portátil y ábrelo con Chrome, Edge, Firefox o Safari.
2. Si descargaste `Pacto-portatil.zip`, extrae sus archivos primero y abre `Pacto.html`.
3. La plataforma incluye código, estilos y fuentes. No necesita Internet ni un servidor.

El historial se guarda en el navegador con el que abras el archivo. Mantén la misma ubicación y navegador para retomarlo; puedes exportarlo desde Configuración.

Para regenerar el archivo después de cambiar el código:

```bash
npm run build:portable
```

El resultado se guarda en `downloads/Pacto.html`. `npx playwright test tests/portable.spec.js` verifica un recorrido completo con el navegador sin conexión.

## Ejecutar

Requisitos: Node.js 22 o posterior y npm. El entorno se verificó con Node.js 24.

```bash
cd /workspace/NEGOCIACION
npm ci
npm run dev -- --port 5173
```

El servidor escucha en todas las interfaces del entorno. Para una compilación de producción:

```bash
npm run build
npm run preview -- --port 4173
```

`dist/` se puede publicar en un servidor de archivos estáticos. No hacen falta credenciales, una base de datos ni servicios externos. Las fuentes e ilustraciones están incluidas localmente.

## Qué incluye

- 12 escenarios: salario, entrevista, ventas, atención a clientes, proveedores, alianzas, prioridades con superiores, compañeros, feedback, desacuerdos, alquiler y límites personales.
- Tres niveles de dificultad, filtros por tema y duración, y búsqueda de escenarios.
- Preparación privada: objetivos, alternativa y límites, con un contexto e información específica de cada caso.
- Diálogos mediante sugerencias o texto libre, con personajes que reaccionan a preguntas, argumentos, reconocimiento, límites, intercambios, presión y aceptación.
- Ramas de conversación por tema, propuestas y contrapropuestas, límites presupuestarios y restricciones que cambian durante la conversación.
- En los escenarios avanzados aparece una nueva condición antes del cierre. Tiene que incorporarse en la propuesta antes de confirmar un acuerdo.
- Evaluación orientativa de nueve habilidades, con evidencias por intervención, oportunidades, riesgos y ejemplos de alternativas.
- Repetición desde un turno anterior, conservando el intento original.
- Historial, evolución, mapa de habilidades, objetivo semanal y recomendaciones.
- Ocho lecciones con ejemplos y una práctica asociada.
- Pausa y recuperación de conversaciones, perfil personal, exportación y eliminación de datos locales con confirmación.

## Cómo funciona la simulación

El motor es **local y determinista**: clasifica intenciones en español, reconoce temas y cifras, y actualiza confianza, tensión, restricciones y ofertas. Sus respuestas están redactadas para cada personaje y dependen de las decisiones y del estado de la conversación. No es una integración con un modelo de lenguaje ni interpreta todos los matices del texto libre. Esta limitación también se explica dentro de la aplicación.

Los indicadores reflejan comportamientos detectados por el motor. No son un diagnóstico, una medición validada de emociones ni una certificación de competencias. Un acuerdo confirmado no garantiza un buen resultado: la revisión muestra sus condiciones y las compara con la referencia del caso cuando corresponde.

Los datos se almacenan en `localStorage` con la clave `pacto-v1`. No hay cuentas ni sincronización entre dispositivos. Si el navegador impide guardar, la aplicación muestra un aviso; puedes exportar la sesión desde Configuración. Los escenarios monetarios usan pesos colombianos (COP).

## Verificación

```bash
npm test
npx playwright test
```

Las pruebas de navegador usan Chromium en `/usr/bin/chromium`. Puedes especificar otro ejecutable con `CHROMIUM_PATH`. Playwright inicia y detiene el servidor de pruebas automáticamente; reutiliza uno existente cuando no se ejecuta en CI.

- `tests/engine.test.js`: los 12 casos, presupuestos, acuerdos, restricciones nuevas, promesas inviables, repetición, reconstrucción de conversaciones y lectura de intenciones.
- `tests/ui.spec.js`: recorrido de escritorio y móvil, filtros, lecciones, preferencias, pausa, persistencia, acuerdo, análisis y alternativas.
- `tests/design.spec.js`: pausa del movimiento, preferencias de accesibilidad, alternativa sin WebGL y titulares en cinco tamaños de pantalla.
- `tests/accessibility.spec.js`: comprobaciones automáticas WCAG A/AA en las pantallas principales con axe-core. No sustituyen una revisión manual de accesibilidad.

Los resultados y capturas se escriben en `test-results/` y no se incluyen en Git.

## Estructura

- `src/data.js`: escenarios, objetivos, personajes y lecciones.
- `src/dialogue.js`: ramas por tema, cambios inesperados y restricciones.
- `src/engine.js`: transiciones del diálogo, sugerencias y evaluación.
- `src/App.jsx`: navegación, entrenamiento, análisis, biblioteca y progreso.
- `src/storage.js`: persistencia y exportación.
- `src/styles.css`: identidad visual, diseño adaptable y estilos accesibles.

Usa el checkout existente. Cada tarea en la nube ya está aislada; no es necesario crear un worktree adicional.
