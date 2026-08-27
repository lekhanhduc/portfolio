import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload, Html } from "@react-three/drei";
import {
  SiSpring, SiPostgresql, SiMysql, SiRedis, SiElasticsearch,
  SiDocker, SiApachekafka, SiReact, SiNextdotjs, SiGit, SiKubernetes,
  SiDotnet, SiSharp
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import type { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  java: <FaJava className="text-2xl sm:text-3xl" />,
  spring: <SiSpring className="text-2xl sm:text-3xl" />,
  dotnet: <SiDotnet className="text-2xl sm:text-3xl" />,
  csharp: <SiSharp className="text-2xl sm:text-3xl" />,
  aws: <FaAws className="text-2xl sm:text-3xl" />,
  docker: <SiDocker className="text-2xl sm:text-3xl" />,
  kafka: <SiApachekafka className="text-2xl sm:text-3xl" />,
  postgresql: <SiPostgresql className="text-2xl sm:text-3xl" />,
  mysql: <SiMysql className="text-2xl sm:text-3xl" />,
  redis: <SiRedis className="text-2xl sm:text-3xl" />,
  elasticsearch: <SiElasticsearch className="text-2xl sm:text-3xl" />,
  kubernetes: <SiKubernetes className="text-2xl sm:text-3xl" />,
  react: <SiReact className="text-2xl sm:text-3xl" />,
  nextjs: <SiNextdotjs className="text-2xl sm:text-3xl" />,
  git: <SiGit className="text-2xl sm:text-3xl" />,
};

const Ball = ({ icon, color, isLight }: { icon: string; color: string; isLight: boolean }) => {
  const renderedIcon = useMemo(() => iconMap[icon] || <FaJava className="text-3xl" />, [icon]);

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <ambientLight intensity={isLight ? 0.9 : 0.6} />
      <directionalLight position={[0, 0, 0.05]} intensity={isLight ? 1.5 : 1} />

      {/* 3D Core Crystal */}
      <mesh scale={2.4}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={isLight ? "#ffffff" : "#1a120b"}
          roughness={isLight ? 0.15 : 0.2}
          metalness={isLight ? 0.05 : 0.8}
        />
      </mesh>

      {/* Outer Hologram Wireframe Grid in Orange Accent */}
      <mesh scale={2.48}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={isLight ? "#f97316" : "#fb923c"}
          emissive={isLight ? "#ea580c" : "#f97316"}
          emissiveIntensity={isLight ? 0.5 : 0.8}
          wireframe
          transparent
          opacity={isLight ? 0.45 : 0.65}
        />
      </mesh>

      {/* Floating Center Brand Icon */}
      <Html position={[0, 0, 0]} center className="pointer-events-none">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center select-none transition-all duration-300 ${isLight
              ? "bg-white/95 border-orange-200 shadow-md shadow-orange-500/10"
              : "bg-[#0b0805]/90 border-white/20 shadow-xl shadow-black/80"
            }`}
          style={{ color: icon === "nextjs" && isLight ? "#0f172a" : color }}
        >
          {renderedIcon}
        </div>
      </Html>
    </Float>
  );
};

export const BallCanvas = ({ icon, color, isLight = false }: { icon: string; color: string; isLight?: boolean }) => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "low-power" }}
      className="w-24 h-24 sm:w-28 sm:h-28 cursor-grab active:cursor-grabbing"
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <Ball icon={icon} color={color} isLight={isLight} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
