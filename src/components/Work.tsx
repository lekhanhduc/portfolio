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
    tags: ["Spring Boot", "Next.js", "PostgreSQL", "Redis", "WebSocket", "PayOS", "AWS"],
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
              <div className={`h-32 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300 ${theme === "dark" ? "bg-tertiary/50" : "bg-slate-100"}`}>
                {project.image}
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
