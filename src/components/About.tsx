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
    { value: "4+", label: "Production Projects", icon: <FaRocket className="text-violet-400" /> },
    { value: "19+", label: "Microservices Built", icon: <FaServer className="text-cyan-400" /> },
    { value: "AWS", label: "Cloud-Native Deploy", icon: <FaAws className="text-orange-400" /> },
    { value: "3.1", label: "GPA Software Eng.", icon: <FaGraduationCap className="text-emerald-400" /> },
  ];

  const highlights = [
    "Architect & build scalable RESTful APIs with Spring Boot & .NET",
    "Design distributed microservices with Kafka, gRPC & Redis caching",
    "Deploy serverless & cloud-native infrastructures on AWS (Lambda, API Gateway, DynamoDB, Cognito, S3)",
    "Implement robust authentication with Keycloak, JWT & Spring Security",
  ];

  return (
    <section id="about" className="py-10 sm:py-14 relative flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <p className="text-secondary text-[11px] sm:text-xs uppercase tracking-widest mb-1.5 font-semibold">GET TO KNOW ME</p>
          <h2 className={`text-3xl sm:text-4xl font-bold ${titleClass}`}>Overview.</h2>
          <p className="text-secondary text-xs sm:text-sm max-w-xl mx-auto mt-2">
            A backend-focused software engineer dedicated to building resilient distributed systems and scalable cloud architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`card-gradient rounded-2xl p-3.5 sm:p-4 border flex items-center gap-3 sm:gap-4 ${
                theme === "dark" ? "border-white/10" : "border-slate-200 shadow-sm"
              }`}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-center text-lg shrink-0">
                {stat.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className={`text-xl sm:text-2xl font-bold tracking-tight leading-tight ${titleClass}`}>{stat.value}</div>
                <div className="text-secondary text-[11px] sm:text-xs font-medium truncate">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`lg:col-span-7 h-full card-gradient rounded-2xl p-5 sm:p-6 border flex flex-col justify-between ${
              theme === "dark" ? "border-white/10" : "border-slate-200 shadow-sm"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                  <FaCode className="text-lg" />
                </div>
                <div>
                  <h3 className={`text-base sm:text-lg font-bold ${titleClass}`}>Engineering Background</h3>
                  <p className="text-secondary text-[11px] sm:text-xs">Passion for clean code and high availability</p>
                </div>
              </div>

              <div className="space-y-3 text-secondary text-xs sm:text-sm leading-relaxed">
                <p>
                  I'm a <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Java Backend Engineer</span> with a strong foundation in Software Engineering from <span className="text-violet-400 font-semibold">FPT University Da Nang</span> (GPA 3.1).
                </p>
                <p>
                  Specializing in <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>Spring Boot, Microservices, and AWS Cloud</span>, I architect and deploy production-grade applications serving real users—ranging from real-time e-learning platforms to complex 19+ microservices systems.
                </p>
                <p>
                  I believe in writing clean, well-tested, and maintainable software that stands the test of traffic spikes and evolving business needs.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="text-emerald-400 text-xs sm:text-sm mt-0.5 shrink-0" />
                  <span className="text-secondary text-xs leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-5 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className={`flex-1 card-gradient rounded-2xl p-5 sm:p-6 border flex flex-col justify-between ${
                theme === "dark" ? "border-white/10" : "border-slate-200 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <FaGraduationCap className="text-lg" />
                    </div>
                    <div>
                      <h3 className={`text-base font-bold ${titleClass}`}>Education</h3>
                      <p className="text-secondary text-[11px] sm:text-xs">Software Engineering</p>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                    GPA: 3.1 / 4.0
                  </span>
                </div>
                <p className={`text-xs sm:text-sm font-semibold mt-2 ${titleClass}`}>{personalInfo.university}</p>
                <p className="text-secondary text-xs mt-1.5 leading-relaxed">
                  Solid foundation in Data Structures, Algorithms, OOP, Database Systems & Distributed Architectures.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex-1 card-gradient rounded-2xl p-5 sm:p-6 border flex flex-col justify-between ${
                theme === "dark" ? "border-white/10" : "border-slate-200 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <FaLightbulb className="text-lg" />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold ${titleClass}`}>Continuous Learning</h3>
                    <p className="text-secondary text-[11px] sm:text-xs">Advancing technical depth</p>
                  </div>
                </div>
                <div className="space-y-2 mt-1">
                  {currentlyLearning.map((item, index) => (
                    <div
                      key={index}
                      className={`px-3 py-2 rounded-xl text-xs flex items-center gap-2.5 border ${
                        theme === "dark" ? "bg-slate-900/50 border-white/5 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
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
