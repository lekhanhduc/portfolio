import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo, socials } from "../constants";
import { useTheme } from "../context/ThemeContext";
import type { JSX } from "react";
import { useState, useEffect } from "react";
import HeroBackground from "./canvas/HeroBackground";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [isFlipped, setIsFlipped] = useState(false);

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

  useEffect(() => {
    const autoFlipTimer = setTimeout(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);

    return () => clearTimeout(autoFlipTimer);
  }, [isFlipped]);

  const socialIcons: Record<string, { icon: JSX.Element; color: string }> = {
    facebook: { icon: <FaFacebook />, color: "text-blue-500" },
    linkedin: { icon: <FaLinkedin />, color: "text-blue-400" },
    instagram: { icon: <FaInstagram />, color: "text-pink-500" },
    youtube: { icon: <FaYoutube />, color: "text-red-500" },
    github: { icon: <FaGithub />, color: isDark ? "text-white" : "text-gray-800" },
    email: { icon: <FaEnvelope />, color: "text-orange-400" },
  };

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20 pb-4 sm:pt-24 sm:pb-8">
      <HeroBackground />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column */}
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
                className="text-secondary text-base sm:text-lg mb-2 font-medium"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 120 }}
                className={`text-5xl lg:text-6xl xl:text-7xl font-black leading-tight whitespace-nowrap ${isDark ? "text-white" : "text-slate-900"
                  }`}
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
                    textShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
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
                className="text-lg lg:text-2xl text-secondary mt-3 flex items-center gap-2 font-medium"
              >
                <span>{displayedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block w-0.5 h-5 lg:h-7 bg-orange-500"
                />
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30, z: -30 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-secondary text-xs sm:text-sm max-w-md mt-4 leading-relaxed font-normal"
              style={{ transformStyle: "preserve-3d" }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex gap-3 mt-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, rotateY: -30 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 15,
                    boxShadow: "0 10px 25px rgba(249, 115, 22, 0.25)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center text-base transition-all duration-200 border ${isDark
                      ? "bg-slate-900/80 border-white/10 hover:border-orange-500/50 hover:bg-slate-800"
                      : "bg-white border-slate-200 hover:border-orange-400 hover:bg-slate-50 shadow-sm"
                    }`}
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
              className="flex gap-3 sm:gap-4 mt-8 sm:mt-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(249, 115, 22, 0.35)",
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-md font-semibold transition-all text-white shadow-md shadow-orange-500/25 cursor-pointer text-xs sm:text-sm"
                style={{ color: '#ffffff', transformStyle: "preserve-3d" }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(249, 115, 22, 0.15)",
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-2.5 border-2 border-orange-500 rounded-md font-semibold hover:bg-orange-500/10 transition-colors text-xs sm:text-sm cursor-pointer ${isDark ? "text-orange-400" : "text-orange-600"
                  }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                View Work
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: 3D Flip Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:flex-1 flex justify-center items-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer Orbit Rings */}
              <div className="absolute w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] lg:w-[370px] lg:h-[370px] rounded-full border border-orange-500/25 animate-spin [animation-duration:30s] pointer-events-none" />
              <div className="absolute w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] lg:w-[410px] lg:h-[410px] rounded-full border border-amber-500/20 animate-spin [animation-duration:45s] [animation-direction:reverse] pointer-events-none" />

              {/* Interactive 3D Flip Card Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 cursor-pointer group select-none"
                onClick={() => setIsFlipped(!isFlipped)}
                title="Click to flip avatar!"
                style={{ perspective: 1200 }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.65, type: "spring", stiffness: 180, damping: 18 }}
                  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-[3px] bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400 shadow-xl relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Face: avatar.jpg */}
                  <div
                    className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center absolute inset-0 transition-colors ${isDark ? "bg-slate-900" : "bg-slate-50"
                      }`}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <img
                      src="/avatar.jpg"
                      alt="Le Khanh Duc - Main"
                      width={320}
                      height={320}
                      loading="eager"
                      decoding="sync"
                      fetchPriority="high"
                      className="w-full h-full object-contain p-1.5 pointer-events-none"
                    />
                  </div>

                  {/* Back Face: avatar1.jpg */}
                  <div
                    className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center absolute inset-0 transition-colors ${isDark ? "bg-slate-900" : "bg-slate-50"
                      }`}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src="/avatar1.jpg"
                      alt="Le Khanh Duc - Alternative"
                      width={320}
                      height={320}
                      loading="eager"
                      decoding="sync"
                      className="w-full h-full object-contain p-1.5 pointer-events-none"
                    />
                  </div>
                </motion.div>

                {/* Click to Flip hint badge on hover */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none px-2.5 py-1 bg-black/85 backdrop-blur-md rounded-md text-[10px] font-semibold text-orange-400 border border-orange-500/30 whitespace-nowrap shadow-xl flex items-center gap-1">
                  <span>Click to flip</span>
                  <span className="text-xs">↺</span>
                </div>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-1 right-2 z-20 px-3 py-1.5 bg-orange-600/95 backdrop-blur-md rounded-md shadow-lg border border-orange-400/30 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-xs text-white tracking-wide">Open to work</span>
              </motion.div>

              {/* Floating Orbiting Emojis */}
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
    </section>
  );
};

export default Hero;
