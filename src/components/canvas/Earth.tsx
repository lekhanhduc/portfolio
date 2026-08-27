import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";

const Earth = ({ isLight }: { isLight: boolean }) => {
  const earthRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.2;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.28;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <group ref={earthRef} scale={1.55}>
      {/* Main Core Earth Sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color={isLight ? "#1e293b" : "#0d1428"}
          roughness={0.4}
          metalness={0.5}
        />
      </mesh>

      {/* Continents / Tech Landmass Wireframe */}
      <mesh>
        <sphereGeometry args={[1.006, 32, 32]} />
        <meshStandardMaterial
          color={isLight ? "#0284c7" : "#00cea8"}
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Atmospheric Cloud Glow */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.03, 32, 32]} />
        <meshStandardMaterial
          color={isLight ? "#f97316" : "#fb923c"}
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Planetary Orbit Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[1.25, 1.35, 64]} />
        <meshStandardMaterial
          color={isLight ? "#ea580c" : "#f97316"}
          side={THREE.DoubleSide}
          transparent
          opacity={0.7}
          emissive={isLight ? "#ea580c" : "#f97316"}
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* Orbiting Satellites */}
      {[0, 2.1, 4.2].map((angle, idx) => (
        <mesh
          key={idx}
          position={[
            Math.cos(angle) * 1.3,
            Math.sin(angle) * 0.45,
            Math.sin(angle) * 1.3,
          ]}
        >
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial
            color={idx === 0 ? "#00cea8" : "#f97316"}
            emissive={idx === 0 ? "#00cea8" : "#f97316"}
            emissiveIntensity={2.0}
          />
        </mesh>
      ))}
    </group>
  );
};

export const EarthCanvas = ({ isLight = false }: { isLight?: boolean }) => {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{
        fov: 38,
        near: 0.1,
        far: 200,
        position: [0, 0.4, 5.8],
      }}
      className="w-full h-full cursor-grab active:cursor-grabbing"
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.8}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 2 - 0.1}
        />
        <ambientLight intensity={isLight ? 0.9 : 0.7} />
        <directionalLight position={[5, 4, 5]} intensity={2.0} color="#ffffff" />
        <pointLight position={[-4, -2, -4]} intensity={1.8} color="#f97316" />
        <pointLight position={[3, 4, 2]} intensity={1.8} color="#00cea8" />
        <Earth isLight={isLight} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
