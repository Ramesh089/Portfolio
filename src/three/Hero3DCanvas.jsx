import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Rotating Cyber Sphere with Outer Wireframe Shell & Orbital Rings
function CyberCore({ mousePos }) {
  const outerRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Smooth mouse tilt
    const targetX = (mousePos.current.x * Math.PI) / 8;
    const targetY = (mousePos.current.y * Math.PI) / 8;

    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.4;
      outerRef.current.rotation.x = THREE.MathUtils.lerp(outerRef.current.rotation.x, targetY, 0.05);
      outerRef.current.rotation.z = THREE.MathUtils.lerp(outerRef.current.rotation.z, -targetX * 0.5, 0.05);
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.6;
      innerRef.current.rotation.x += delta * 0.3;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.5;
      ring1Ref.current.rotation.x = Math.sin(t * 0.5) * 0.4 + targetY * 0.8;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.4;
      ring2Ref.current.rotation.y = Math.cos(t * 0.5) * 0.4 + targetX * 0.8;
    }
  });

  return (
    <group>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={outerRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          emissive="#0284c7"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Distorted Glowing Core */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={innerRef} scale={1.15}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={2.5}
            roughness={0.15}
            metalness={0.9}
            emissive="#1e1b4b"
            emissiveIntensity={0.8}
          />
        </mesh>
      </Float>

      {/* Primary Cyan Orbital Ring */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.03, 16, 100]} />
        <meshBasicMaterial color="#22d3ee" wireframe={false} />
      </mesh>

      {/* Secondary Violet Orbital Ring */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.9, 0.02, 16, 100]} />
        <meshBasicMaterial color="#a855f7" wireframe={false} />
      </mesh>

      {/* Glowing Energy Orbiting Nodes */}
      <group rotation={[0, 0, Math.PI / 6]}>
        <OrbitalNode radius={2.5} speed={1.2} color="#06b6d4" size={0.08} />
        <OrbitalNode radius={2.9} speed={-0.9} color="#c084fc" size={0.09} />
        <OrbitalNode radius={2.1} speed={1.8} color="#38bdf8" size={0.06} />
      </group>
    </group>
  );
}

function OrbitalNode({ radius, speed, color, size }) {
  const nodeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (nodeRef.current) {
      nodeRef.current.position.x = Math.cos(t) * radius;
      nodeRef.current.position.y = Math.sin(t) * radius;
    }
  });

  return (
    <mesh ref={nodeRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

// Particle Constellation Cloud
function ParticleSystem({ count = 1200 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color('#06b6d4');
    const color2 = new THREE.Color('#8b5cf6');
    const color3 = new THREE.Color('#3b82f6');

    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const r = 3 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

// Fallback when WebGL is not available
function FallbackCanvas() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-spin-slow" />
        <div className="absolute inset-4 rounded-full border border-violet-500/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-violet-600/30 blur-xl animate-pulse" />
        <div className="relative z-10 text-cyan-300 font-mono text-sm tracking-wider uppercase bg-slate-900/80 px-4 py-2 rounded-full border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
          3D Core Active
        </div>
      </div>
    </div>
  );
}

export default function Hero3DCanvas() {
  const mousePos = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    // Normalize coordinates from -1 to 1
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mousePos.current = { x, y };
  };

  const handlePointerLeave = () => {
    mousePos.current = { x: 0, y: 0 };
  };

  return (
    <div
      className="w-full h-[450px] md:h-[550px] lg:h-[650px] relative cursor-grab active:cursor-grabbing select-none"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <React.Suspense fallback={<FallbackCanvas />}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#38bdf8" />
          <pointLight position={[-10, -5, -5]} intensity={1.5} color="#8b5cf6" />
          <pointLight position={[0, 0, 4]} intensity={0.8} color="#22d3ee" />

          <CyberCore mousePos={mousePos} />
          <ParticleSystem count={900} />
        </Canvas>
      </React.Suspense>
    </div>
  );
}
