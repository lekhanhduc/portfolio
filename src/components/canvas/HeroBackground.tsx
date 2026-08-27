import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "../../context/ThemeContext";

const Stars = ({ isDark }: { isDark: boolean }) => {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 14;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled>
                <PointMaterial
                    transparent
                    color={isDark ? "#fb923c" : "#ea580c"}
                    size={isDark ? 0.003 : 0.0045}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={isDark ? 0.85 : 0.75}
                />
            </Points>
        </group>
    );
};

const CosmicLayer = ({ isDark }: { isDark: boolean }) => {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(1800), { radius: 0.9 }));

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta / 14;
            ref.current.rotation.y += delta / 18;
        }
    });

    return (
        <group rotation={[0, 0, -Math.PI / 6]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled>
                <PointMaterial
                    transparent
                    color={isDark ? "#f97316" : "#c2410c"}
                    size={isDark ? 0.004 : 0.006}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={isDark ? 0.9 : 0.8}
                />
            </Points>
        </group>
    );
};

const HeroBackground = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars isDark={isDark} />
                    <CosmicLayer isDark={isDark} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default HeroBackground;
