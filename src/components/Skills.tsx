import { motion } from "framer-motion";
import { HiLightningBolt } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas/Ball";

const Skills = () => {
  const { theme } = useTheme();
  const titleClass = theme === "dark" ? "text-white" : "text-slate-800";
  const isLight = theme === "light";

  return (
    <section id="skills" className="py-10 sm:py-14 relative flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-mono font-semibold tracking-wider uppercase mb-2.5">
            <HiLightningBolt className="text-xs" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${titleClass} tracking-tight`}>
            Technologies<span className="text-orange-500">.</span>
          </h2>
          <p className="text-secondary text-xs sm:text-sm max-w-2xl mt-2 leading-relaxed">
            Interactive 3D representation of backend frameworks, databases, messaging queues, and cloud tools I engineer production systems with.
          </p>
        </motion.div>

        {/* 3D Ball Canvases Grid */}
        <div className="flex flex-row flex-wrap justify-center gap-8 sm:gap-10">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 group cursor-grab active:cursor-grabbing"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                <BallCanvas icon={tech.icon} color={tech.color} isLight={isLight} />
              </div>
              <span
                className={`text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isLight
                    ? "text-slate-700 group-hover:text-orange-500"
                    : "text-slate-300 group-hover:text-orange-400"
                } group-hover:scale-105`}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
