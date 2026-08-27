import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaAws, FaRocket } from "react-icons/fa";
import {
  SiSpring, SiPostgresql, SiMysql, SiApachekafka, SiDocker, SiElasticsearch,
  SiRedis, SiNextdotjs, SiSocketdotio, SiKubernetes, SiAwslambda, SiReact,
  SiAmazonec2
} from "react-icons/si";
import { TbApi, TbCreditCard } from "react-icons/tb";
import { BsStars, BsDatabase } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import type { JSX } from "react";

const ServerlessIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <defs>
      <linearGradient id="serverlessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF9900" />
        <stop offset="100%" stopColor="#FF6600" />
      </linearGradient>
    </defs>
    <rect x="8" y="20" width="48" height="8" rx="1" fill="url(#serverlessGrad)" opacity="0.9" />
    <rect x="8" y="32" width="48" height="8" rx="1" fill="url(#serverlessGrad)" opacity="0.7" />
    <rect x="8" y="44" width="48" height="8" rx="1" fill="url(#serverlessGrad)" opacity="0.5" />
    <circle cx="50" cy="14" r="7" fill="#232F3E" />
    <path d="M47 14l2 2 4-4" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M16 12l3 3-3 3" stroke="#232F3E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 12l-3 3 3 3" stroke="#232F3E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ELearningIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <defs>
      <linearGradient id="elearningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
    </defs>
    <rect x="8" y="14" width="48" height="28" rx="2" fill="#1E293B" />
    <rect x="12" y="18" width="40" height="20" rx="1" fill="url(#elearningGrad)" />
    <polygon points="28,23 28,33 38,28" fill="white" />
    <rect x="22" y="44" width="20" height="2.5" rx="1" fill="#475569" />
    <rect x="18" y="48" width="28" height="3" rx="1" fill="#334155" />
    <circle cx="48" cy="12" r="5" fill="#10B981" />
    <path d="M46.5 12l1 1 2.5-2.5" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>
);

const RentalIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <defs>
      <linearGradient id="rentalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>
    <path d="M32 10L8 28h7v22h34V28h7L32 10z" fill="url(#rentalGrad)" />
    <rect x="27" y="35" width="10" height="15" rx="1" fill="#1E293B" />
    <circle cx="34" cy="42" r="1.2" fill="#FCD34D" />
    <rect x="16" y="32" width="6" height="6" rx="1" fill="#1E293B" />
    <rect x="42" y="32" width="6" height="6" rx="1" fill="#1E293B" />
    <rect x="17" y="33" width="4" height="4" fill="#7DD3FC" />
    <rect x="43" y="33" width="4" height="4" fill="#7DD3FC" />
    <circle cx="50" cy="14" r="6" fill="#F472B6" />
    <path d="M47.5 14h5M50 11.5v5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const ExamIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <defs>
      <linearGradient id="examGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <rect x="14" y="8" width="36" height="48" rx="2" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
    <rect x="20" y="16" width="18" height="2.5" rx="0.5" fill="url(#examGrad)" />
    <rect x="20" y="23" width="24" height="1.8" rx="0.5" fill="#CBD5E1" />
    <rect x="20" y="28" width="20" height="1.8" rx="0.5" fill="#CBD5E1" />
    <rect x="20" y="33" width="22" height="1.8" rx="0.5" fill="#CBD5E1" />
    <circle cx="22" cy="42" r="2.5" fill="#10B981" />
    <path d="M21 42l1 1 1.5-1.5" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" />
    <rect x="27" y="41" width="14" height="1.8" rx="0.5" fill="#CBD5E1" />
    <circle cx="46" cy="46" r="8" fill="url(#examGrad)" />
    <text x="46" y="50" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">A+</text>
  </svg>
);

const projectIcons: Record<string, JSX.Element> = {
  "Serverless Blog Platform": <ServerlessIcon />,
  "E-Learning Platform (Java Builder)": <ELearningIcon />,
  "E-Learning Platform": <ELearningIcon />,
  "Rental Platform & Roommate Finder": <RentalIcon />,
  "FPT-EXAM System": <ExamIcon />,
};

const projects = [
  {
    title: "E-Learning Platform (Java Builder)",
    description: "Full-featured online learning platform with course management, video streaming, payment integration, and real-time notifications. Deployed in production.",
    tags: ["Spring Boot", "Next.js", "RDS MySQL", "Redis", "WebSocket", "PayOS", "EC2", "S3", "CloudFront"],
    github: "https://github.com/lekhanhduc",
    demo: "https://javabuilder.online",
    image: "🎓",
  },
  {
    title: "FPT-EXAM System",
    description: "Online examination system for FPT University with exam management, auto-grading, proctoring features, and result analytics. Deployed in production.",
    tags: ["Spring Boot", "Next.js", "PostgreSQL", "Redis", "WebSocket", "AWS"],
    github: "https://github.com/lekhanhduc/fpt-exam-sync-backend",
    demo: "https://www.khaothifudn.org",
    image: "📝",
  },
  {
    title: "Serverless Blog Platform",
    description: "Modern serverless blog platform on AWS with microservices architecture. Features user auth via Cognito, Markdown support, comments, and email notifications.",
    tags: ["AWS Lambda", "API Gateway", "S3", "CloudFront", "DynamoDB", "Cognito", "React"],
    github: "https://github.com/lekhanhduc/serverless-blog-platform",
    demo: "https://blog.javabuilder.online",
    image: "📰",
  },
  {
    title: "Rental Platform & Roommate Finder",
    description: "19 microservices system for room rental and roommate matching. Features AI chatbot, eKYC verification, fraud detection, real-time chat, and recommendation engine.",
    tags: ["Spring Boot", "Next.js", "gRPC", "Kafka", "Elasticsearch", "Qdrant", "AI", "GKE"],
    github: "https://github.com/lekhanhduc/rental-platform",
    demo: "https://rmms.vercel.app",
    image: "🏠",
  },
];

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const techConfig: Record<string, { icon: JSX.Element; color: string }> = {
    "Spring Boot": { icon: <SiSpring />, color: "text-green-500" },
    "Next.js": { icon: <SiNextdotjs />, color: isDark ? "text-white" : "text-gray-800" },
    "PostgreSQL": { icon: <SiPostgresql />, color: "text-blue-400" },
    "RDS MySQL": { icon: <SiMysql />, color: "text-orange-400" },
    "MySQL": { icon: <SiMysql />, color: "text-orange-400" },
    "Kafka": { icon: <SiApachekafka />, color: isDark ? "text-gray-300" : "text-gray-700" },
    "Docker": { icon: <SiDocker />, color: "text-sky-400" },
    "gRPC": { icon: <TbApi />, color: "text-teal-400" },
    "Elasticsearch": { icon: <SiElasticsearch />, color: "text-yellow-400" },
    "Qdrant": { icon: <BsDatabase />, color: "text-purple-400" },
    "AI": { icon: <BsStars />, color: "text-pink-400" },
    "Redis": { icon: <SiRedis />, color: "text-red-500" },
    "WebSocket": { icon: <SiSocketdotio />, color: isDark ? "text-gray-300" : "text-gray-700" },
    "PayOS": { icon: <TbCreditCard />, color: "text-green-400" },
    "AWS": { icon: <FaAws />, color: "text-orange-400" },
    "EC2": { icon: <SiAmazonec2 />, color: "text-orange-400" },
    "GKE": { icon: <SiKubernetes />, color: "text-blue-500" },
    "AWS Lambda": { icon: <SiAwslambda />, color: "text-orange-500" },
    "API Gateway": { icon: <FaAws />, color: "text-purple-500" },
    "DynamoDB": { icon: <FaAws />, color: "text-blue-500" },
    "Cognito": { icon: <FaAws />, color: "text-red-400" },
    "React": { icon: <SiReact />, color: "text-cyan-400" },
    "SNS": { icon: <FaAws />, color: "text-pink-500" },
    "Brevo": { icon: <FaAws />, color: "text-blue-400" },
    "S3": { icon: <FaAws />, color: "text-green-500" },
    "CloudFront": { icon: <FaAws />, color: "text-purple-400" },
    "CloudWatch": { icon: <FaAws />, color: "text-orange-400" },
    "Secrets Manager": { icon: <FaAws />, color: "text-red-500" },
  };

  const titleClass = isDark ? "text-white" : "text-slate-900";
  const tagBgClass = isDark ? "bg-slate-950/80 border-white/10" : "bg-slate-100 border-slate-200/80";
  const tagTextClass = isDark ? "text-slate-300" : "text-slate-700";

  return (
    <section id="work" className="py-10 sm:py-14 relative flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-mono font-semibold tracking-wider uppercase mb-2.5">
            <FaRocket className="text-xs" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${titleClass} tracking-tight`}>
            Projects<span className="text-orange-500">.</span>
          </h2>
          <p className="text-secondary text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
            Real-world enterprise systems, microservices architectures, and fullstack cloud solutions I've engineered.
          </p>
        </motion.div>

        {/* Projects Grid: Crisp, Compact & Squared */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className={`rounded-lg border overflow-hidden group transition-all duration-200 flex flex-col justify-between ${
                isDark
                  ? "bg-slate-900/85 backdrop-blur-md border-white/10 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10"
                  : "bg-white border-slate-200 hover:border-orange-400 hover:shadow-md hover:shadow-orange-500/10 shadow-sm"
              }`}
            >
              <div>
                {/* Compact Thumbnail Header */}
                <div className={`h-24 sm:h-28 flex items-center justify-center transition-colors ${
                  isDark ? "bg-slate-950/70 border-b border-white/5" : "bg-slate-50 border-b border-slate-100"
                }`}>
                  <div className="group-hover:scale-105 transition-transform duration-200">
                    {projectIcons[project.title] || <span className="text-3xl">{project.image}</span>}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 pb-2">
                  <div className="flex justify-between items-start mb-1.5 gap-2">
                    <h3 className={`text-sm sm:text-base font-bold leading-snug ${titleClass}`}>
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-orange-500 transition-colors p-0.5"
                      title="View GitHub Repository"
                    >
                      <FaGithub className="text-base" />
                    </a>
                  </div>
                  <p className="text-secondary text-xs leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Badges: Squared & Clean */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => {
                      const tech = techConfig[tag] || { icon: null, color: "text-slate-300" };
                      return (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-medium border flex items-center gap-1 ${tagBgClass}`}
                        >
                          <span className={tech.color}>{tech.icon}</span>
                          <span className={tagTextClass}>{tag}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Button: Squared & Professional */}
              <div className="p-4 sm:p-5 pt-0">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-md text-xs font-semibold transition-all duration-150 w-full justify-center shadow-sm shadow-orange-500/20 hover:shadow-md hover:shadow-orange-500/30 cursor-pointer"
                  style={{ color: '#ffffff' }}
                >
                  <FaExternalLinkAlt className="text-[11px]" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA: Squared & Sleek */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/lekhanhduc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-md text-xs sm:text-sm font-semibold transition-all duration-150 shadow-md shadow-orange-500/25 cursor-pointer"
            style={{ color: '#ffffff' }}
          >
            <FaGithub className="text-sm" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
