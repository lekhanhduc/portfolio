import { motion } from "framer-motion";
import { personalInfo, currentlyLearning } from "../constants";
import { FaGraduationCap, FaLightbulb, FaBolt, FaRocket, FaCode } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const highlightClass = theme === "dark" ? "text-white font-medium" : "text-slate-800 font-semibold";
  const titleClass = theme === "dark" ? "text-white" : "text-slate-800";

  return (
    <section id="about" className="py-16 relative flex justify-center">
      <div className="w-full max-w-6xl px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-base uppercase tracking-wider">Introduction</p>
          <h2 className={`text-3xl lg:text-4xl font-bold mt-2 ${titleClass}`}>Overview.</h2>
        </motion.div>

        {/* About Me Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card-gradient p-8 rounded-2xl border border-primary/20 mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <FaCode className="text-primary text-xl" />
            </div>
            <h3 className={`text-xl font-semibold ${titleClass}`}>About Me</h3>
          </div>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              I'm a passionate <span className={highlightClass}>Java Backend Engineer</span> with a strong focus on building scalable, reliable, and secure systems. Graduated in Software Engineering from <span className="text-primary font-medium">FPT University Da Nang</span> with GPA 3.1.
            </p>
            <p>
              With hands-on experience in <span className={highlightClass}>Spring Boot, Microservices Architecture, and Cloud Technologies</span>, I've successfully deployed multiple production-ready applications serving real users. My projects range from e-learning platforms to complex rental management systems with 19+ microservices.
            </p>
            <p>
              I'm particularly interested in <span className={highlightClass}>System Design, Distributed Systems, and AWS Cloud Architecture</span>. I believe in writing clean, maintainable code and following best practices to deliver high-quality software solutions.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-gradient p-6 rounded-2xl border border-primary/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <FaGraduationCap className="text-primary text-xl" />
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${titleClass}`}>Education</h3>
                <p className="text-secondary text-sm">Software Engineering</p>
              </div>
            </div>
            <p className="text-secondary">{personalInfo.university}</p>
            <p className="text-secondary text-sm mt-2">GPA: 3.1</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="card-gradient p-6 rounded-2xl border border-primary/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <FaRocket className="text-primary text-xl" />
              </div>
              <h3 className={`text-lg font-semibold ${titleClass}`}>What I Do</h3>
            </div>
            <ul className="space-y-2 text-secondary text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Design & build RESTful APIs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Develop microservices architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                Deploy applications on AWS/GCP
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Integrate AI & real-time features
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="card-gradient p-6 rounded-2xl border border-primary/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <FaLightbulb className="text-primary text-xl" />
              </div>
              <h3 className={`text-lg font-semibold ${titleClass}`}>Currently Improving</h3>
            </div>
            <ul className="space-y-2">
              {currentlyLearning.map((item, index) => (
                <li key={index} className="text-secondary text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="card-gradient p-6 rounded-2xl border border-primary/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <FaBolt className="text-primary text-xl" />
              </div>
              <h3 className={`text-lg font-semibold ${titleClass}`}>Fun Fact</h3>
            </div>
            <blockquote className="text-secondary italic border-l-4 border-primary pl-4 text-sm">
              "{personalInfo.quote}"
            </blockquote>
            <div className="mt-4 pt-4 border-t border-primary/10">
              <p className="text-sm text-secondary">Open to:</p>
              <span className="inline-block mt-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-medium text-sm">
                {personalInfo.openTo}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
