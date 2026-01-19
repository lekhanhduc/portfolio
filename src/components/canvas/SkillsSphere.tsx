import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";

import {
    SiSpring, SiPostgresql, SiMysql, SiRedis, SiElasticsearch,
    SiDocker, SiJenkins, SiApachekafka,
    SiReact, SiNextdotjs,
    SiAwslambda,
    SiSharp
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";



const Tag = ({ position, icon, name }: { position: [number, number, number], icon: React.ReactNode, name: string }) => {
    const [hovered, setHovered] = useState(false);
    const { theme } = useTheme();

    const bgClass = theme === "dark" ? "bg-slate-900/90 border-white/10" : "bg-white/90 border-black/10";
    const textClass = theme === "dark" ? "text-white" : "text-slate-800";
    const shadowClass = theme === "dark" ? "shadow-xl" : "shadow-lg shadow-gray-200";

    return (
        <Html position={position} center>
            <div
                className={`flex flex-col items-center gap-2 select-none transition-all duration-300 cursor-pointer ${hovered ? 'scale-125 z-50' : 'hover:scale-110'}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className={`${bgClass} backdrop-blur-md p-3 rounded-xl border ${shadowClass} flex items-center justify-center ${hovered ? 'border-primary/50 shadow-primary/20' : ''}`}>
                    <div className="text-3xl">
                        {icon}
                    </div>
                </div>
                <div className={`px-2 py-1 rounded-md ${bgClass} backdrop-blur-md border text-xs font-bold ${textClass} whitespace-nowrap overflow-hidden transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none absolute'}`}>
                    {name}
                </div>
            </div>
        </Html>
    );
}

const Cloud = ({ radius = 20, skills }: { radius?: number, skills: any[] }) => {
    // Create a spherical distribution of points
    const words = useMemo(() => {
        const temp = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

        for (let i = 0; i < skills.length; i++) {
            const y = 1 - (i / (skills.length - 1)) * 2; // y goes from 1 to -1
            const r = Math.sqrt(1 - y * y); // radius at y

            const theta = phi * i; // golden angle increment

            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;

            temp.push([x * radius, y * radius, z * radius]);
        }
        return temp;
    }, [radius]);

    const ref = useRef<THREE.Group>(null);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.1;
            ref.current.rotation.x += delta * 0.05;
        }
    });

    return (
        <group ref={ref}>
            {words.map((pos, i) => (
                <Tag
                    key={i}
                    position={pos as [number, number, number]}
                    icon={skills[i].icon}
                    name={skills[i].name}
                />
            ))}
        </group>
    )
}

const SkillsSphere = () => {
    const { theme } = useTheme();
    const fogColor = theme === "dark" ? "#202025" : "#f8fafc"; // Using slate-50 for light mode background match

    const skills = useMemo(() => [
        { name: "Java", icon: <FaJava color="#ea580c" /> },
        { name: "Spring", icon: <SiSpring color="#22c55e" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#3b82f6" /> },
        { name: "MySQL", icon: <SiMysql color="#f97316" /> },
        { name: "Redis", icon: <SiRedis color="#ef4444" /> },
        { name: "Elastic", icon: <SiElasticsearch color="#eab308" /> },
        { name: "Docker", icon: <SiDocker color="#38bdf8" /> },
        { name: "Jenkins", icon: <SiJenkins color="#f87171" /> },
        { name: "Kafka", icon: <SiApachekafka color="#94a3b8" /> },
        { name: "React", icon: <SiReact color="#22d3ee" /> },
        { name: "Next.js", icon: <SiNextdotjs color={theme === "dark" ? "#ffffff" : "#000000"} /> },
        { name: "AWS", icon: <FaAws color="#f97316" /> },
        { name: "C#", icon: <SiSharp color="#9333ea" /> },
        { name: "Lambda", icon: <SiAwslambda color="#f97316" /> },
    ], [theme]);

    return (
        <div className="w-full h-[450px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 45], fov: 60 }}>
                <fog attach="fog" args={[fogColor, 0, 80]} />
                <Cloud radius={22} skills={skills} />
            </Canvas>
        </div>
    );
};

export default SkillsSphere;
