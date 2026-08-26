import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo, socials } from "../constants";
import { useTheme } from "../context/ThemeContext";
import type { JSX } from "react";
import { useState, useEffect } from "react";
import HeroBackground from "./canvas/HeroBackground";

const Hero = () => {
  const { theme } = useTheme();

  const roles = ["Backend Developer", "Java Spring Boot Developer", "AWS Cloud Engineer", "Microservices Architect"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {

        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          setTypingSpeed(100 + Math.random() * 100); 
        } else {

          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {

        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {

          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); 
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const socialIcons: Record<string, { icon: JSX.Element; color: string }> = {
    facebook: { icon: <FaFacebook />, color: "text-blue-500" },
    linkedin: { icon: <FaLinkedin />, color: "text-blue-400" },
    instagram: { icon: <FaInstagram />, color: "text-pink-500" },
    youtube: { icon: <FaYoutube />, color: "text-red-500" },
    github: { icon: <FaGithub />, color: theme === "dark" ? "text-white" : "text-gray-800" },
    email: { icon: <FaEnvelope />, color: "text-yellow-400" },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <HeroBackground />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1">
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.p
                initial={{ opacity: 0, y: -20, z: -50 }}
                animate={{ opacity: 1, y: 0, z: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-secondary text-lg mb-2"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 120 }}
                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight whitespace-nowrap"
                style={{ transformStyle: "preserve-3d" }}
              >
                {personalInfo.name.split(" ")[0]}{" "}
                <motion.span
                  initial={{ opacity: 0, x: 50, rotateY: 30 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="gradient-text inline-block"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {personalInfo.name.split(" ").slice(1).join(" ")}
                </motion.span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl lg:text-2xl xl:text-3xl text-secondary mt-4 flex items-center gap-2"
              >
                <span>{displayedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block w-0.5 h-6 lg:h-8 bg-primary"
                />
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30, z: -30 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
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
              style={{ transformStyle: "preserve-3d" }}
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, rotateY: -90 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 15,
                    z: 20,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-xl hover:bg-black-200 transition-all duration-300 border border-primary/20"
                  style={{ transformStyle: "preserve-3d" }}
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
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-violet-500 rounded-xl font-medium hover:bg-violet-600 transition-colors text-white"
                style={{ color: '#ffffff', transformStyle: "preserve-3d" }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-violet-500 rounded-xl text-violet-500 font-medium hover:bg-violet-500/10 transition-colors"
                style={{ transformStyle: "preserve-3d" }}
              >
                View Work
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:flex-1 flex justify-center items-center"
          >
            <div className="relative flex items-center justify-center">

              <div className="absolute w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] lg:w-[370px] lg:h-[370px] rounded-full border border-violet-500/20 animate-spin [animation-duration:30s] pointer-events-none" />
              <div className="absolute w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] lg:w-[410px] lg:h-[410px] rounded-full border border-cyan-500/15 animate-spin [animation-duration:45s] [animation-direction:reverse] pointer-events-none" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >

                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-[3px] bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#fafafa] flex items-center justify-center">
                    <img
                      src="/avatar.jpg"
                      alt="Le Khanh Duc"
                      className="w-full h-full object-contain p-1.5 select-none"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-1 right-2 z-20 px-3.5 py-1.5 bg-violet-600/95 backdrop-blur-md rounded-full shadow-lg border border-violet-400/30 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-xs sm:text-sm text-white tracking-wide">Open to work</span>
              </motion.div>

              {[
                { icon: '⚡', pos: '-left-4 top-1/2 -translate-y-1/2' },
                { icon: '☁️', pos: 'left-1/2 -top-4 -translate-x-1/2' },
                { icon: '🚀', pos: '-right-4 top-1/2 -translate-y-1/2' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute text-2xl z-20 pointer-events-none ${item.pos}`}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 6, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center">
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="text-secondary text-xs tracking-wider group-hover:text-primary transition-colors">Scroll Down</span>
          <motion.div
            className="text-secondary group-hover:text-primary transition-colors"
            whileHover={{ rotateX: 20 }}
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
