import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUser, FaCode, FaBriefcase, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeContext";

const navIcons: Record<string, { icon: JSX.Element; color: string }> = {
  about: { icon: <FaUser />, color: "text-orange-400" },
  skills: { icon: <FaCode />, color: "text-green-400" },
  work: { icon: <FaBriefcase />, color: "text-amber-400" },
  contact: { icon: <FaEnvelope />, color: "text-cyan-400" },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full flex justify-center items-center py-3.5 fixed top-0 z-20 bg-black-100/80 backdrop-blur-md border-b border-white/5">
      <div className="w-full max-w-6xl flex justify-between items-center px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative w-9 h-9">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#fbbf24" />
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
          <p className="text-white text-sm sm:text-base font-bold cursor-pointer">
            Le Khanh Duc <span className="text-secondary text-xs hidden sm:inline font-normal">| Backend Developer</span>
          </p>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="list-none hidden md:flex flex-row gap-5 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-orange-500 font-semibold" : "text-secondary"
                } hover:text-orange-400 text-xs sm:text-sm font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md hover:bg-orange-500/10 transition-colors">
                <span className={`text-xs ${navIcons[link.id].color}`}>{navIcons[link.id].icon}</span>
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-md bg-tertiary flex items-center justify-center text-sm hover:bg-orange-500/20 hover:border-orange-500/40 transition-all border border-primary/20 cursor-pointer"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-orange-500" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-md bg-tertiary flex items-center justify-center text-sm hover:bg-orange-500/20 transition-all border border-primary/20 cursor-pointer"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-orange-500" />
            )}
          </button>
          <button onClick={() => setToggle(!toggle)} className="text-white text-xl p-1 rounded-md hover:bg-white/10">
            {toggle ? <HiX /> : <HiMenu />}
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95 }}
            className={`${!toggle ? "hidden" : "flex"
              } p-4 bg-black-200 absolute top-14 right-4 min-w-[150px] z-10 rounded-lg border border-primary/20 shadow-xl`}
          >
            <ul className="list-none flex flex-col gap-2.5 w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-orange-500 font-semibold" : "text-secondary"
                    } text-xs font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className="flex items-center gap-2 p-1.5 rounded-md hover:bg-orange-500/10">
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
