import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import * as THREE from 'three';

function studioEnvironment(renderer) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  context.fillStyle = '#aeb8c7';
  context.fillRect(0, 0, 1024, 512);
  const gradient = context.createLinearGradient(0, 0, 0, 512);
  gradient.addColorStop(0, '#fcfaf4');
  gradient.addColorStop(0.5, '#758297');
  gradient.addColorStop(1, '#232a3a');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 1024, 512);
  context.fillStyle = '#ffffff';
  context.fillRect(80, 50, 155, 310);
  context.fillRect(540, 90, 65, 270);
  context.fillStyle = '#d9e7ff';
  context.fillRect(760, 30, 190, 155);
  const texture = new THREE.CanvasTexture(canvas);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  const generator = new THREE.PMREMGenerator(renderer);
  const target = generator.fromEquirectangular(texture);
  texture.dispose();
  generator.dispose();
  return target;
}

function SculptureCanvas({ active }) {
  const hostRef = useRef(null);
  const activeRef = useRef(active);
  const controlRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    let renderer;
    let environment;
    let frame = 0;
    let visible = true;
    let disposed = false;
    const geometries = [];
    const materials = [];
    const textures = [];
    setReady(false);

    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.setAttribute('aria-hidden', 'true');
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.set(0, 0.8, 11.3);
      camera.lookAt(0, 0, 0);
      environment = studioEnvironment(renderer);
      scene.environment = environment.texture;

      scene.add(new THREE.AmbientLight(0xffffff, 1.2));
      const key = new THREE.DirectionalLight(0xffffff, 4.5);
      key.position.set(-4, 7, 6);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xc4d6ff, 3);
      rim.position.set(4, 2, -3);
      scene.add(rim);

      const blue = new THREE.MeshPhysicalMaterial({ color: '#244bff', metalness: 0.4, roughness: 0.19, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 1.2 });
      const chrome = new THREE.MeshPhysicalMaterial({ color: '#d9dfeb', metalness: 1, roughness: 0.16, clearcoat: 1, envMapIntensity: 1.6 });
      materials.push(blue, chrome);
      const firstGeometry = new THREE.TorusGeometry(1.65, 0.49, 40, 144);
      const secondGeometry = new THREE.TorusGeometry(1.65, 0.4, 40, 144);
      geometries.push(firstGeometry, secondGeometry);
      const first = new THREE.Mesh(firstGeometry, blue);
      first.rotation.set(0.65, -0.35, -0.55);
      first.position.set(-0.7, 0.4, 0.2);
      const second = new THREE.Mesh(secondGeometry, chrome);
      second.rotation.set(0.7, 1.2, 0.4);
      second.position.set(0.8, -0.1, -0.25);
      const sculpture = new THREE.Group();
      sculpture.add(first, second);
      sculpture.rotation.z = -0.12;
      scene.add(sculpture);

      const shadowCanvas = document.createElement('canvas');
      shadowCanvas.width = 256;
      shadowCanvas.height = 256;
      const shadowContext = shadowCanvas.getContext('2d');
      const shadowGradient = shadowContext.createRadialGradient(128, 128, 12, 128, 128, 124);
      shadowGradient.addColorStop(0, 'rgba(25, 35, 50, 0.19)');
      shadowGradient.addColorStop(0.45, 'rgba(25, 35, 50, 0.09)');
      shadowGradient.addColorStop(1, 'rgba(25, 35, 50, 0)');
      shadowContext.fillStyle = shadowGradient;
      shadowContext.fillRect(0, 0, 256, 256);
      const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
      textures.push(shadowTexture);
      const groundGeometry = new THREE.PlaneGeometry(7.4, 5);
      const groundMaterial = new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false });
      geometries.push(groundGeometry);
      materials.push(groundMaterial);
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -2.65;
      scene.add(ground);

      let pointerX = 0, pointerY = 0;
      let elapsed = 0;
      let lastTime = performance.now();
      const draw = (now = performance.now()) => {
        frame = 0;
        if (disposed || !visible || document.hidden) return;
        if (activeRef.current) elapsed += Math.min(0.05, Math.max(0, now - lastTime) / 1000);
        lastTime = now;
        const t = elapsed;
        sculpture.rotation.y = Math.sin(t * 0.22) * 0.35 + pointerX;
        sculpture.rotation.x = Math.sin(t * 0.17) * 0.12 + pointerY;
        sculpture.rotation.z = -0.12 + Math.sin(t * 0.19) * 0.08;
        sculpture.position.y = Math.sin(t * 0.65) * 0.14;
        renderer.render(scene, camera);
        if (activeRef.current) frame = requestAnimationFrame(draw);
      };
      const requestDraw = () => { if (!frame && visible && !document.hidden) frame = requestAnimationFrame(draw); };
      controlRef.current = enabled => {
        lastTime = performance.now();
        if (!enabled && frame) { cancelAnimationFrame(frame); frame = 0; }
        requestDraw();
      };
      const resize = new ResizeObserver(() => {
        if (!host.clientWidth || !host.clientHeight) return;
        renderer.setSize(host.clientWidth, host.clientHeight, false);
        camera.aspect = host.clientWidth / host.clientHeight;
        camera.updateProjectionMatrix();
        requestDraw();
      });
      resize.observe(host);
      const intersection = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (!visible && frame) { cancelAnimationFrame(frame); frame = 0; }
        else requestDraw();
      });
      intersection.observe(host);
      const pointer = event => {
        if (!activeRef.current) return;
        const bounds = host.getBoundingClientRect();
        pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.2;
        pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.12;
      };
      const resetPointer = () => { pointerX = 0; pointerY = 0; };
      host.addEventListener('pointermove', pointer);
      host.addEventListener('pointerleave', resetPointer);
      document.addEventListener('visibilitychange', requestDraw);
      renderer.setSize(host.clientWidth || 600, host.clientHeight || 600, false);
      camera.aspect = (host.clientWidth || 600) / (host.clientHeight || 600);
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
      setReady(true);
      requestDraw();

      return () => {
        disposed = true;
        controlRef.current = null;
        cancelAnimationFrame(frame);
        resize.disconnect();
        intersection.disconnect();
        host.removeEventListener('pointermove', pointer);
        host.removeEventListener('pointerleave', resetPointer);
        document.removeEventListener('visibilitychange', requestDraw);
        geometries.forEach(geometry => geometry.dispose());
        materials.forEach(material => material.dispose());
        textures.forEach(texture => texture.dispose());
        environment.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    } catch {
      // The CSS sculpture keeps the cover usable when WebGL is unavailable.
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      textures.forEach(texture => texture.dispose());
      environment?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
    }
  }, []);

  useEffect(() => {
    activeRef.current = active;
    controlRef.current?.(active);
  }, [active]);

  return <div className={`sculpture-canvas ${ready ? 'is-rendered' : ''}`} ref={hostRef} data-render-mode={ready ? 'webgl' : 'css'} aria-hidden="true">
    <div className="sculpture-fallback"><i/><i/><span/></div>
  </div>;
}

export default function Sculpture({ paused, onToggle, reducedMotion }) {
  return <figure className={`sculpture ${paused ? 'motion-paused' : ''}`}>
    <div className="sculpture-meta"><span>EL PUNTO DE ENCUENTRO</span><span>FIG. 01 — PACTO</span></div>
    <div className="sculpture-orbit orbit-one" aria-hidden="true"/>
    <div className="sculpture-orbit orbit-two" aria-hidden="true"/>
    <SculptureCanvas active={!paused}/>
    <span className="sculpture-label label-listen"><i/>Escucha</span>
    <span className="sculpture-label label-connect"><i/>Conecta</span>
    <span className="sculpture-label label-advance"><i/>Avanza</span>
    <figcaption><span>Dos perspectivas. Nuevas posibilidades.</span><button type="button" className="motion-toggle" onClick={onToggle} disabled={reducedMotion} aria-label={reducedMotion ? 'Animación desactivada por tu preferencia de movimiento reducido' : paused ? 'Activar animación' : 'Pausar animación'} aria-pressed={paused}>{paused ? <Play size={12}/> : <Pause size={12}/>}<span>{reducedMotion ? 'Movimiento reducido' : paused ? 'Activar movimiento' : 'Pausar movimiento'}</span></button></figcaption>
  </figure>;
}
