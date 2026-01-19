import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt, FaAws } from "react-icons/fa";
import {
  SiSpring, SiPostgresql, SiApachekafka, SiDocker, SiElasticsearch,
  SiRedis, SiNextdotjs, SiSocketdotio, SiKubernetes, SiAwslambda, SiReact
} from "react-icons/si";
import { TbApi, TbCreditCard } from "react-icons/tb";
import { BsStars, BsDatabase } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import type { JSX } from "react";

// Custom SVG Icons for projects
const ServerlessIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16">
    <defs>
      <linearGradient id="serverlessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF9900" />
        <stop offset="100%" stopColor="#FF6600" />
      </linearGradient>
    </defs>
    <rect x="8" y="20" width="48" height="8" rx="2" fill="url(#serverlessGrad)" opacity="0.9" />
    <rect x="8" y="32" width="48" height="8" rx="2" fill="url(#serverlessGrad)" opacity="0.7" />
    <rect x="8" y="44" width="48" height="8" rx="2" fill="url(#serverlessGrad)" opacity="0.5" />
    <circle cx="50" cy="14" r="8" fill="#232F3E" />
    <path d="M47 14l2 2 4-4" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M16 12l4 4-4 4" stroke="#232F3E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 12l-4 4 4 4" stroke="#232F3E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ELearningIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16">
    <defs>
      <linearGradient id="elearningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
    </defs>
    <rect x="6" y="12" width="52" height="32" rx="3" fill="#1E293B" />
    <rect x="10" y="16" width="44" height="24" rx="2" fill="url(#elearningGrad)" />
    <polygon points="26,22 26,34 38,28" fill="white" />
    <rect x="22" y="46" width="20" height="3" rx="1" fill="#475569" />
    <rect x="18" y="50" width="28" height="4" rx="2" fill="#334155" />
    <circle cx="50" cy="10" r="6" fill="#10B981" />
    <path d="M48 10l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

const RentalIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16">
    <defs>
      <linearGradient id="rentalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0891B2" />
      </linearGradient>
    </defs>
    <path d="M32 8L6 28h8v24h36V28h8L32 8z" fill="url(#rentalGrad)" />
    <rect x="26" y="36" width="12" height="16" rx="1" fill="#1E293B" />
    <circle cx="35" cy="44" r="1.5" fill="#FCD34D" />
    <rect x="14" y="32" width="8" height="8" rx="1" fill="#1E293B" />
    <rect x="42" y="32" width="8" height="8" rx="1" fill="#1E293B" />
    <rect x="15" y="33" width="6" height="6" fill="#7DD3FC" />
    <rect x="43" y="33" width="6" height="6" fill="#7DD3FC" />
    <circle cx="52" cy="14" r="7" fill="#F472B6" />
    <path d="M49 14h6M52 11v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ExamIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16">
    <defs>
      <linearGradient id="examGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <rect x="12" y="6" width="40" height="52" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="2" />
    <rect x="18" y="14" width="20" height="3" rx="1" fill="url(#examGrad)" />
    <rect x="18" y="22" width="28" height="2" rx="1" fill="#CBD5E1" />
    <rect x="18" y="28" width="24" height="2" rx="1" fill="#CBD5E1" />
    <rect x="18" y="34" width="26" height="2" rx="1" fill="#CBD5E1" />
    <circle cx="20" cy="44" r="3" fill="#10B981" />
    <path d="M18.5 44l1 1 2-2" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" />
    <rect x="26" y="42" width="16" height="2" rx="1" fill="#CBD5E1" />
    <circle cx="20" cy="52" r="3" fill="#10B981" />
    <path d="M18.5 52l1 1 2-2" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" />
    <rect x="26" y="50" width="12" height="2" rx="1" fill="#CBD5E1" />
    <circle cx="50" cy="50" r="10" fill="url(#examGrad)" />
    <text x="50" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">A+</text>
  </svg>
);

const projectIcons: Record<string, JSX.Element> = {
  "Serverless Blog Platform": <ServerlessIcon />,
  "E-Learning Platform": <ELearningIcon />,
  "Rental Platform & Roommate Finder": <RentalIcon />,
  "FPT-EXAM System": <ExamIcon />,
};

const projects = [
  {
    title: "Serverless Blog Platform",
    description: "Modern serverless blog platform on AWS with microservices architecture. Features user auth via Cognito, Markdown support, comments, and email notifications.",
    tags: ["AWS Lambda", "API Gateway", "S3", "CloudFront", "DynamoDB", "CloudWatch", "Secrets Manager", "SNS", "Cognito", "Brevo", "React"],
    github: "https://github.com/lekhanhduc/serverless-blog-platform",
    demo: "https://blog.javabuilder.online",
    image: "📰",
  },
  {
    title: "E-Learning Platform",
    description: "Full-featured online learning platform with course management, video streaming, payment integration, and real-time notifications. Deployed in production.",
    tags: ["Spring Boot", "Next.js", "PostgreSQL", "Redis", "WebSocket", "PayOS", "AWS"],
    github: "https://github.com/lekhanhduc",
    demo: "https://javabuilder.online",
    image: "🎓",
  },
  {
    title: "Rental Platform & Roommate Finder",
    description: "19 microservices system for room rental and roommate matching. Features AI chatbot, eKYC verification, fraud detection, real-time chat, and recommendation engine.",
    tags: ["Spring Boot", "Next.js", "gRPC", "Kafka", "Elasticsearch", "Qdrant", "AI", "GKE"],
    github: "https://github.com/lekhanhduc/rental-platform",
    demo: "https://rmms.vercel.app",
    image: "🏠",
  },
  {
    title: "FPT-EXAM System",
    description: "Online examination system for FPT University with exam management, auto-grading, proctoring features, and result analytics. Deployed in production.",
    tags: ["Spring Boot", "Next.js", "PostgreSQL", "Redis", "WebSocket", "AWS"],
    github: "https://github.com/lekhanhduc/fpt-exam-sync-backend",
    demo: "https://www.khaothifudn.org",
    image: "📝",
  },
];

const Work = () => {
  const { theme } = useTheme();

  // Brand colors and icons for each technology
  const techConfig: Record<string, { icon: JSX.Element; color: string }> = {
    "Spring Boot": { icon: <SiSpring />, color: "text-green-500" },
    "Next.js": { icon: <SiNextdotjs />, color: theme === "dark" ? "text-white" : "text-gray-800" },
    "PostgreSQL": { icon: <SiPostgresql />, color: "text-blue-400" },
    "Kafka": { icon: <SiApachekafka />, color: theme === "dark" ? "text-gray-300" : "text-gray-700" },
    "Docker": { icon: <SiDocker />, color: "text-sky-400" },
    "gRPC": { icon: <TbApi />, color: "text-teal-400" },
    "Elasticsearch": { icon: <SiElasticsearch />, color: "text-yellow-400" },
    "Qdrant": { icon: <BsDatabase />, color: "text-purple-400" },
    "AI": { icon: <BsStars />, color: "text-pink-400" },
    "Redis": { icon: <SiRedis />, color: "text-red-500" },
    "WebSocket": { icon: <SiSocketdotio />, color: theme === "dark" ? "text-gray-300" : "text-gray-700" },
    "PayOS": { icon: <TbCreditCard />, color: "text-green-400" },
    "AWS": { icon: <FaAws />, color: "text-orange-400" },
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
  const titleClass = theme === "dark" ? "text-white" : "text-slate-800";
  const tagBgClass = theme === "dark" ? "bg-slate-800/50 border-slate-600/50" : "bg-slate-100 border-slate-300";
  const tagTextClass = theme === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <section id="work" className="py-20 relative flex justify-center">
      <div className="w-full max-w-6xl px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary text-xs uppercase tracking-widest mb-2">MY WORK</p>
          <h2 className={`text-3xl lg:text-4xl font-bold ${titleClass}`}>Projects.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card-gradient rounded-xl border border-primary/10 overflow-hidden group hover:border-primary/30 transition-all flex flex-col"
            >
              <div className={`h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ${theme === "dark" ? "bg-tertiary/50" : "bg-slate-100"}`}>
                {projectIcons[project.title] || <span className="text-4xl">{project.image}</span>}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-base font-semibold ${titleClass}`}>{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition-colors"
                    title="GitHub"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
                <p className="text-secondary text-xs leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => {
                    const tech = techConfig[tag] || { icon: null, color: "text-slate-300" };
                    return (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-medium border flex items-center gap-1.5 ${tagBgClass}`}
                      >
                        <span className={tech.color}>{tech.icon}</span>
                        <span className={tagTextClass}>{tag}</span>
                      </span>
                    );
                  })}
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-violet-500 rounded-lg text-xs font-medium hover:bg-violet-600 transition-colors w-full justify-center"
                  style={{ color: '#ffffff' }}
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/lekhanhduc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            style={{ color: '#ffffff' }}
          >
            <FaGithub />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
