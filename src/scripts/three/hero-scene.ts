import * as THREE from "three";

export interface HeroSceneOptions {
  canvas: HTMLCanvasElement;
  primaryColor?: number;
}

export function initHeroScene({
  canvas,
  primaryColor = 0x6366f1,
}: HeroSceneOptions) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });

  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
  const material = new THREE.MeshStandardMaterial({
    color: primaryColor,
    metalness: 0.7,
    roughness: 0.2,
    wireframe: true,
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const pointLight = new THREE.PointLight(0xec4899, 1);
  pointLight.position.set(5, 5, 5);
  scene.add(ambientLight, pointLight);

  camera.position.z = 5;

  let mouseX = 0;
  let mouseY = 0;
  let animationId: number;
  let isVisible = true;

  const onMouseMove = (e: MouseEvent) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  const onResize = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  const animate = () => {
    if (!isVisible) return;
    animationId = requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
    mesh.position.x += (mouseX * 0.5 - mesh.position.x) * 0.05;
    mesh.position.y += (mouseY * 0.5 - mesh.position.y) * 0.05;
    renderer.render(scene, camera);
  };

  document.addEventListener("mousemove", onMouseMove);
  window.addEventListener("resize", onResize);

  const observer = new IntersectionObserver(
    (entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) animate();
    },
    { threshold: 0 }
  );
  observer.observe(canvas);

  animate();

  return () => {
    isVisible = false;
    cancelAnimationFrame(animationId);
    document.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onResize);
    observer.disconnect();
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
