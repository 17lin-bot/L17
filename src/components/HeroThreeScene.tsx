import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 3, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8a2be2, 3, 50);
    pointLight2.position.set(-5, -4, 3);
    scene.add(pointLight2);

    // Centerpiece 3D Abstract Sculpture (Icosahedron with wireframe + inner glowing sphere)
    const group = new THREE.Group();

    const geom = new THREE.IcosahedronGeometry(2.2, 1);
    const mat = new THREE.MeshPhongMaterial({
      color: 0x111319,
      emissive: 0x0a1020,
      specular: 0x00f0ff,
      shininess: 100,
      flatShading: true,
      transparent: true,
      opacity: 0.85,
    });
    const mesh = new THREE.Mesh(geom, mat);
    group.add(mesh);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(geom, wireMat);
    wireMesh.scale.set(1.002, 1.002, 1.002);
    group.add(wireMesh);

    // Floating kinetic particle rings
    const ringGeom = new THREE.TorusGeometry(3.2, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8a2be2, transparent: true, opacity: 0.6 });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.6, 0.015, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.4 })
    );
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    scene.add(group);

    // Mouse parallax interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y += 0.006;
      group.rotation.x += 0.003;
      ring.rotation.z += 0.008;
      ring2.rotation.x -= 0.005;

      group.rotation.y += targetX * 0.02;
      group.rotation.x += targetY * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geom.dispose();
      mat.dispose();
      wireMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] bg-transparent block select-none">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};
