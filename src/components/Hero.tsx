import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo, socials } from "../constants";
import { useTheme } from "../context/ThemeContext";
import type { JSX } from "react";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Typing animation state
  const roles = ["Backend Developer", "Java Spring Boot Developer", "AWS Cloud Engineer", "Microservices Architect"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          setTypingSpeed(100 + Math.random() * 100); // Variable speed for natural feel
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // Pause before typing next
        }
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);
  
  // 3D Tilt effect for avatar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 100, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  
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
      {/* Animated 3D background effects */}
      <div className="absolute inset-0 perspective-1000">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotateZ: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotateZ: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            z: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" 
        />
        
        {/* 3D Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full mx-auto px-8 sm:px-12 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content with 3D text effect */}
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

          {/* Right content - 3D Avatar */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="lg:flex-1 flex justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div 
              className="relative"
              style={{ 
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
            >
              {/* 3D Ring effects */}
              <motion.div
                className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-primary/30"
                style={{ transform: "translateZ(-40px)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-purple-500/20"
                style={{ transform: "translateZ(-60px) scale(1.1)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-cyan-500/10"
                style={{ transform: "translateZ(-80px) scale(1.2)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating animation for avatar */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div 
                  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/30 to-purple-900/30 flex items-center justify-center p-2"
                  style={{ 
                    transformStyle: "preserve-3d",
                    boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 0 60px rgba(139, 92, 246, 0.1)"
                  }}
                  whileHover={{ 
                    boxShadow: "0 35px 60px -15px rgba(139, 92, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)"
                  }}
                >
                  <img 
                    src="/avatar.jpg" 
                    alt="Le Khanh Duc"
                    className="w-full h-full rounded-full object-cover border-2 border-primary/20"
                    style={{ transform: "translateZ(20px)" }}
                  />
                </motion.div>
              </motion.div>
              
              {/* 3D Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 50, rotateY: -30 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  boxShadow: "0 15px 30px rgba(139, 92, 246, 0.4)"
                }}
                className="absolute -bottom-2 right-0 px-4 py-2 bg-primary rounded-lg shadow-lg"
                style={{ 
                  transform: "translateZ(40px)",
                  transformStyle: "preserve-3d"
                }}
              >
                <span className="font-medium text-sm" style={{ color: '#ffffff' }}>Open to work</span>
              </motion.div>
              
              {/* Floating tech icons around avatar */}
              {['⚡', '☁️', '🚀'].map((icon, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: i === 0 ? '-20px' : i === 1 ? '50%' : 'auto',
                    right: i === 2 ? '-20px' : 'auto',
                    top: i === 1 ? '-20px' : '50%',
                    transform: `translateZ(${30 + i * 10}px)`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down arrow with 3D effect */}
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
