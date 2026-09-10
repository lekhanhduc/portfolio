import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import {
  FaGraduationCap,
  FaRocket,
  FaCode,
  FaServer,
  FaAws,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const titleClass = theme === "dark" ? "text-white" : "text-slate-800";

  const stats = [
    { value: "4+", label: "Production Projects", icon: <FaRocket className="text-orange-500" /> },
    { value: "19+", label: "Microservices Built", icon: <FaServer className="text-orange-500" /> },
    { value: "SAA-C03", label: "AWS Certified Architect", icon: <FaAws className="text-orange-500" /> },
    { value: "3.1", label: "GPA Software Eng.", icon: <FaGraduationCap className="text-orange-500" /> },
  ];

  return (
    <section id="about" className="pt-2 pb-10 sm:pt-4 sm:pb-14 relative flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-mono font-semibold tracking-wider uppercase mb-2.5">
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${titleClass} tracking-tight`}>
            Overview<span className="text-orange-500">.</span>
          </h2>
          <p className="text-secondary text-xs sm:text-sm max-w-xl mt-1.5 leading-relaxed">
            A backend-focused software engineer dedicated to building resilient distributed systems and scalable cloud architectures.
          </p>
        </motion.div>

        {/* Stats Row: Crisp & Squared */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`card-gradient rounded-lg p-3 sm:p-3.5 border flex items-center gap-3 ${
                theme === "dark" ? "border-white/10" : "border-slate-200 shadow-sm"
              }`}
            >
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center text-base shrink-0 border ${
                theme === "dark"
                  ? "bg-slate-800/60 border-white/10"
                  : "bg-orange-500/10 border-orange-500/20 shadow-sm"
              }`}>
                {stat.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className={`text-lg sm:text-xl font-bold tracking-tight leading-tight ${titleClass}`}>{stat.value}</div>
                <div className="text-secondary text-[10px] sm:text-xs font-medium truncate">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details Grid: Balanced & Squared */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className={`lg:col-span-7 h-full card-gradient rounded-lg p-5 border flex flex-col justify-between ${
              theme === "dark" ? "border-white/10" : "border-slate-200 shadow-sm"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-9 h-9 rounded-md bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <FaCode className="text-base" />
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${titleClass}`}>Engineering Background</h3>
                  <p className="text-secondary text-[11px]">Clean architecture, domain-driven design, and high throughput</p>
                </div>
              </div>

              <div className="space-y-2.5 text-secondary text-xs sm:text-sm leading-relaxed">
                <p>
                  I'm a <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Java Backend Engineer</span> with a strong foundation in Software Engineering from <span className="text-orange-500 font-semibold">FPT University Da Nang</span> (GPA 3.1).
                </p>
                <p>
                  Specializing in <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Spring Boot, Microservices, and AWS Cloud</span>, I architect and deploy production-grade applications serving real users—ranging from real-time e-learning platforms to complex 19+ microservices systems.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true }}
            className={`lg:col-span-5 h-full card-gradient rounded-lg p-5 border flex flex-col justify-between ${
              theme === "dark" ? "border-white/10" : "border-slate-200 shadow-sm"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                    <FaGraduationCap className="text-base" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${titleClass}`}>Education</h3>
                    <p className="text-secondary text-[10px]">Software Engineering</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-800 border border-white/10 text-slate-300 shrink-0">
                  GPA: 3.1 / 4.0
                </span>
              </div>

              <div className="space-y-2 mt-2">
                <p className={`text-xs sm:text-sm font-semibold ${titleClass}`}>{personalInfo.university}</p>
                <p className="text-secondary text-xs leading-relaxed">
                  Solid academic foundation in Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, and Distributed Software Architectures.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-secondary text-xs">
              <span className="font-medium">Major: Software Engineering</span>
              <span className="text-orange-500 font-semibold text-[11px] px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                FPT University
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
