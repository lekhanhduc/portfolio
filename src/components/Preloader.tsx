import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCode, FaUser, FaGithub } from "react-icons/fa";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const img1 = new Image();
    img1.src = "/avatar.jpg";
    const img2 = new Image();
    img2.src = "/avatar1.jpg";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  const icons = [
    { Icon: FaCode, delay: 0, label: "Code" },
    { Icon: FaUser, delay: 0.15, label: "Developer" },
    { Icon: FaGithub, delay: 0.3, label: "Projects" },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0604] via-[#140c06] to-[#0a0604]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          {icons.map(({ Icon, delay, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: delay,
                type: "spring",
                stiffness: 200,
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: delay,
                }}
                className="absolute inset-0 bg-orange-500/25 rounded-lg blur-xl"
              />

              <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-lg border border-orange-500/30 shadow-lg shadow-orange-500/10">
                <Icon className="text-2xl text-orange-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-6"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
            Welcome To My
          </h1>
          <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Portfolio Website
          </h2>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "240px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative"
        >
          <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>

          <div className="text-center mt-2.5 text-orange-400/90 text-xs font-mono font-medium">
            {progress}%
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
