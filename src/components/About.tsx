import { motion } from "framer-motion";
import { personalInfo, currentlyLearning } from "../constants";
import {
  FaGraduationCap,
  FaLightbulb,
  FaRocket,
  FaCode,
  FaServer,
  FaAws,
  FaCheckCircle,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const titleClass = theme === "dark" ? "text-white" : "text-slate-800";

  const stats = [
    { value: "4+", label: "Production Projects", icon: <FaRocket className="text-orange-400" /> },
    { value: "19+", label: "Microservices Built", icon: <FaServer className="text-cyan-400" /> },
    { value: "AWS", label: "Cloud-Native Deploy", icon: <FaAws className="text-amber-400" /> },
    { value: "3.1", label: "GPA Software Eng.", icon: <FaGraduationCap className="text-emerald-400" /> },
  ];

  const highlights = [
    "Architect & build scalable RESTful APIs with Spring Boot & .NET",
    "Design distributed microservices with Kafka, gRPC & Redis caching",
    "Deploy serverless & cloud-native infrastructures on AWS (Lambda, API Gateway, DynamoDB, Cognito, S3)",
    "Implement robust authentication with Keycloak, JWT & Spring Security",
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

        {/* Details Grid: Squared & Crisp */}
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

            <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="text-emerald-400 text-xs mt-0.5 shrink-0" />
                  <span className="text-secondary text-xs leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-4 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              viewport={{ once: true }}
              className={`flex-1 card-gradient rounded-lg p-4 sm:p-5 border flex flex-col justify-between ${
                theme === "dark" ? "border-white/10" : "border-slate-200 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <FaGraduationCap className="text-base" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold ${titleClass}`}>Education</h3>
                      <p className="text-secondary text-[10px]">Software Engineering</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                    GPA: 3.1 / 4.0
                  </span>
                </div>
                <p className={`text-xs font-semibold mt-1 ${titleClass}`}>{personalInfo.university}</p>
                <p className="text-secondary text-xs mt-1 leading-relaxed">
                  Solid foundation in Data Structures, Algorithms, OOP, Database Systems & Distributed Architectures.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              viewport={{ once: true }}
              className={`flex-1 card-gradient rounded-lg p-4 sm:p-5 border flex flex-col justify-between ${
                theme === "dark" ? "border-white/10" : "border-slate-200 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <FaLightbulb className="text-base" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${titleClass}`}>Continuous Learning</h3>
                    <p className="text-secondary text-[10px]">Advancing technical depth</p>
                  </div>
                </div>
                <div className="space-y-1.5 mt-1">
                  {currentlyLearning.map((item, index) => (
                    <div
                      key={index}
                      className={`px-2.5 py-1.5 rounded-md text-xs flex items-center gap-2 border ${
                        theme === "dark" ? "bg-slate-900/50 border-white/5 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-sm bg-orange-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
