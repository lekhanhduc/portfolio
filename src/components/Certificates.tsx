import { motion } from "framer-motion";
import {
  FaAward,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaCloud,
  FaLock,
  FaSyncAlt,
  FaTachometerAlt,
  FaDollarSign,
} from "react-icons/fa";
import { SiAmazonwebservices } from "react-icons/si";
import { certifications } from "../constants";
import { useTheme } from "../context/ThemeContext";

const domainIcons = [
  <FaLock className="text-orange-400" />,
  <FaSyncAlt className="text-orange-400" />,
  <FaTachometerAlt className="text-orange-400" />,
  <FaDollarSign className="text-orange-400" />,
];

// Clean, Professional Badge Image Component
const AwsBadgeImage = ({ image, title }: { image: string; title: string }) => (
  <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center select-none">
    <img
      src={image}
      alt={title}
      width={144}
      height={144}
      loading="eager"
      className="w-full h-full object-contain relative z-10 drop-shadow-md transition-transform duration-200 pointer-events-none"
    />
  </div>
);

const Certificates = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const titleClass = isDark ? "text-white" : "text-slate-900";

  return (
    <section id="certifications" className="py-10 sm:py-14 relative flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-mono font-semibold tracking-wider uppercase mb-2.5">
            <FaAward className="text-xs" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${titleClass} tracking-tight`}>
            Certifications<span className="text-orange-500">.</span>
          </h2>
          <p className="text-secondary text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
            Industry-recognized certifications validating high-availability cloud architecture, distributed systems design, and enterprise cloud engineering standards.
          </p>
        </motion.div>

        {/* Certifications Showcase Card */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg p-5 sm:p-7 border relative overflow-hidden transition-all duration-200 ${
                isDark
                  ? "bg-slate-900/90 border-white/10 hover:border-slate-700 shadow-sm"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 relative z-10">
                {/* Left: AWS Badge Showcase */}
                <div className="flex flex-col items-center justify-center shrink-0">
                  <div className="transition-transform duration-200 hover:scale-105">
                    <AwsBadgeImage image={cert.image || "/ssa-c03.webp"} title={cert.title} />
                  </div>

                  {/* Verified Credly tag */}
                  <div className={`mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border ${
                    isDark ? "bg-slate-800/90 border-white/10 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Verified on Credly</span>
                  </div>
                </div>

                {/* Right: Detailed Content */}
                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    {/* Header Row: Title & Badges */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2.5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-orange-500/10 text-orange-500 border border-orange-500/20">
                            {cert.code}
                          </span>
                          <span className="text-xs text-secondary font-medium flex items-center gap-1">
                            <SiAmazonwebservices className="text-orange-500 text-sm" />
                            {cert.issuer}
                          </span>
                        </div>
                        <h3 className={`text-lg sm:text-xl font-bold ${titleClass} leading-snug`}>
                          {cert.title}
                        </h3>
                      </div>

                      {/* Level Tag */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/10 text-slate-300 text-xs font-medium shrink-0">
                        <FaShieldAlt className="text-xs text-orange-400" />
                        <span>Associate Level</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Well-Architected Domains Grid */}
                    <div className="mb-4">
                      <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}>
                        <FaCloud className="text-orange-500 text-xs" />
                        <span>Core Architectural Domains (Well-Architected):</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {cert.domains.map((domain, i) => (
                          <div
                            key={i}
                            className={`p-2.5 rounded-md border flex items-start gap-2.5 transition-colors ${
                              isDark
                                ? "bg-slate-950/50 border-white/5"
                                : "bg-slate-50 border-slate-200"
                            }`}
                          >
                            <div className="mt-0.5 shrink-0 text-sm">{domainIcons[i]}</div>
                            <div className="min-w-0">
                              <p className={`text-xs font-semibold leading-tight ${titleClass}`}>
                                {domain.title}
                              </p>
                              <p className="text-secondary text-[11px] leading-snug mt-0.5">
                                {domain.details}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architectural Skills Badges */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-2 py-0.5 rounded-md text-[11px] font-medium border ${
                              isDark
                                ? "bg-slate-950/70 border-white/10 text-slate-300"
                                : "bg-slate-100 border-slate-200 text-slate-700"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Credential Verification Button */}
                  <div className={`pt-3.5 border-t flex items-center justify-end ${
                    isDark ? "border-white/10" : "border-slate-200"
                  }`}>
                    <a
                      href={cert.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xs font-semibold transition-all duration-150 shadow-sm cursor-pointer w-full sm:w-auto"
                      style={{ color: "#ffffff" }}
                    >
                      <FaExternalLinkAlt className="text-[11px]" />
                      <span>Verify on Credly</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
