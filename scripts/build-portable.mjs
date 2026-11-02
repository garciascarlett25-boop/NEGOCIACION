import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { basename, resolve } from 'node:path';

// Produce a real offline application, including its fonts, rather than an HTML
// entry point that still depends on the development server.
const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
let html = await readFile(resolve(dist, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/g)];
const styles = [...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g)];
if (scripts.length !== 1 || styles.length !== 1) throw new Error('Expected one bundled script and stylesheet.');

const script = await readFile(resolve(dist, 'assets', basename(scripts[0][1])), 'utf8');
let css = await readFile(resolve(dist, 'assets', basename(styles[0][1])), 'utf8');
for (const match of [...css.matchAll(/url\(["']?([^\s)"']+)["']?\)/g)]) {
  if (match[1].startsWith('data:')) continue;
  const filename = basename(match[1]);
  if (!filename.endsWith('.woff2')) throw new Error(`Unsupported external CSS asset: ${filename}`);
  const contents = await readFile(resolve(dist, 'assets', filename));
  css = css.replaceAll(match[0], `url(data:font/woff2;base64,${contents.toString('base64')})`);
}

const icon = await readFile(resolve(dist, 'favicon.svg'), 'utf8');
html = html.replace(scripts[0][0], () => `<script type="module">${script.replace(/<\/script/gi, '<\\/script')}</script>`);
html = html.replace(styles[0][0], () => `<style>${css}</style>`);
html = html.replace('href="/favicon.svg"', () => `href="data:image/svg+xml;base64,${Buffer.from(icon).toString('base64')}"`);
await mkdir(resolve(root, 'downloads'), { recursive: true });
await writeFile(resolve(root, 'downloads', 'Pacto.html'), html);
console.log('Created downloads/Pacto.html. Open directly in a browser; no server or network required.');
