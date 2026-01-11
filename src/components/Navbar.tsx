import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUser, FaCode, FaBriefcase, FaEnvelope, FaSun, FaMoon, FaFacebook, FaGithub } from "react-icons/fa";
import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeContext";

const navIcons: Record<string, { icon: JSX.Element; color: string }> = {
  about: { icon: <FaUser />, color: "text-cyan-400" },
  skills: { icon: <FaCode />, color: "text-green-400" },
  work: { icon: <FaBriefcase />, color: "text-yellow-400" },
  contact: { icon: <FaEnvelope />, color: "text-pink-400" },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full flex justify-center items-center py-4 fixed top-0 z-20 bg-black-100/80 backdrop-blur-sm">
      <div className="w-full max-w-6xl flex justify-between items-center px-8 sm:px-12 lg:px-16">
        <a
          href="#"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative w-10 h-10">
            {/* Hexagon with gradient border */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <polygon 
                points="50,2 95,25 95,75 50,98 5,75 5,25" 
                fill="none" 
                stroke="url(#hexGradient)" 
                strokeWidth="4"
              />
              <text 
                x="50" 
                y="62" 
                textAnchor="middle" 
                fill="url(#hexGradient)" 
                fontSize="42" 
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                Đ
              </text>
            </svg>
          </div>
          <p className="text-white text-base font-bold cursor-pointer">
            Le Khanh Duc
          </p>
        </a>

        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-sm font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="flex items-center gap-2">
                <span className={`text-xs ${navIcons[link.id].color}`}>{navIcons[link.id].icon}</span>
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100028989917543"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20"
              title="Facebook"
            >
              <FaFacebook className="text-blue-500" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lekhanhduc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20"
              title="GitHub"
            >
              <FaGithub className={theme === "dark" ? "text-white" : "text-gray-800"} />
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20"
              style={{ cursor: 'pointer' }}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-violet-500" />
              )}
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20 cursor-pointer"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-violet-500" />
            )}
          </button>
          <a
            href="https://www.facebook.com/profile.php?id=100028989917543"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20"
          >
            <FaFacebook className="text-blue-500" />
          </a>
          <a
            href="https://github.com/lekhanhduc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20"
          >
            <FaGithub className={theme === "dark" ? "text-white" : "text-gray-800"} />
          </a>
          <button onClick={() => setToggle(!toggle)} className="text-white text-xl">
            {toggle ? <HiX /> : <HiMenu />}
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.8 }}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-5 bg-black-200 absolute top-16 right-4 min-w-[140px] z-10 rounded-xl border border-primary/20`}
          >
            <ul className="list-none flex flex-col gap-3">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-sm font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className="flex items-center gap-2">
                    <span className={`text-xs ${navIcons[link.id].color}`}>{navIcons[link.id].icon}</span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
