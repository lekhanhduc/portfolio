import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo, socials } from "../constants";
import { useTheme } from "../context/ThemeContext";
import type { JSX } from "react";

const Hero = () => {
  const { theme } = useTheme();
  
  const socialIcons: Record<string, { icon: JSX.Element; color: string }> = {
    facebook: { icon: <FaFacebook />, color: "text-blue-500" },
    instagram: { icon: <FaInstagram />, color: "text-pink-500" },
    tiktok: { icon: <FaTiktok />, color: theme === "dark" ? "text-white" : "text-gray-800" },
    youtube: { icon: <FaYoutube />, color: "text-red-500" },
    github: { icon: <FaGithub />, color: theme === "dark" ? "text-white" : "text-gray-800" },
    email: { icon: <FaEnvelope />, color: "text-yellow-400" },
  };
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="max-w-6xl w-full mx-auto px-8 sm:px-12 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-secondary text-lg mb-2"
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 120 }}
                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight whitespace-nowrap"
              >
                {personalInfo.name.split(" ")[0]}{" "}
                <motion.span 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="gradient-text"
                >
                  {personalInfo.name.split(" ").slice(1).join(" ")}
                </motion.span>
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl lg:text-2xl xl:text-3xl text-secondary mt-4"
              >
                {personalInfo.role}
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-secondary text-base lg:text-lg max-w-md mt-6"
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex gap-4 mt-10"
            >
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-xl hover:bg-black-200 transition-all duration-300 border border-primary/20"
                >
                  <span className={socialIcons[social.icon].color}>
                    {socialIcons[social.icon].icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex gap-5 mt-[4rem]"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-violet-500 rounded-xl font-medium hover:bg-violet-600 transition-colors text-white"
                style={{ color: '#ffffff' }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-violet-500 rounded-xl text-violet-500 font-medium hover:bg-violet-500/10 transition-colors"
              >
                View Work
              </motion.a>
            </motion.div>
          </div>

          {/* Right content - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="lg:flex-1 flex justify-center"
          >
            <motion.div 
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/30 to-purple-900/30 flex items-center justify-center glow p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/avatar.jpg" 
                  alt="Le Khanh Duc"
                  className="w-full h-full rounded-full object-cover border-2 border-primary/20"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-2 right-0 px-4 py-2 bg-primary rounded-lg shadow-lg"
              >
                <span className="font-medium text-sm" style={{ color: '#ffffff' }}>Open to work</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-secondary text-xs tracking-wider group-hover:text-primary transition-colors">Scroll Down</span>
          <motion.div
            className="text-secondary group-hover:text-primary transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
