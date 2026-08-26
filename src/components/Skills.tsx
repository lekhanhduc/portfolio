import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiSpring, SiPostgresql, SiMysql, SiRedis, SiElasticsearch,
  SiDocker, SiJenkins, SiApachekafka, SiPrometheus, SiGrafana,
  SiReact, SiNextdotjs, SiGit, SiPostman,
  SiSwagger, SiSonarqube, SiJsonwebtokens, SiSocketdotio,
  SiAmazonec2, SiAwselasticloadbalancing, SiAwslambda, SiAmazons3, SiAmazoniam,
  SiSharp, SiDotnet
} from "react-icons/si";
import { FaJava, FaAws, FaShieldAlt, FaKey, FaCloud, FaDatabase, FaRobot, FaCode, FaServer, FaLayerGroup } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", name: "All Stack", icon: <FaLayerGroup /> },
    { id: "backend", name: "Java & .NET", icon: <FaServer /> },
    { id: "cloud", name: "AWS Cloud", icon: <FaAws /> },
    { id: "database", name: "Database", icon: <FaDatabase /> },
    { id: "devops", name: "DevOps & Kafka", icon: <SiDocker /> },
    { id: "tools", name: "Tools & UI", icon: <FaCode /> },
  ];

  const skillGroups = [
    {
      categoryId: "backend",
      title: "Backend (Java & Spring Ecosystem)",
      badge: "Primary Expertise",
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
      description: "Building robust, scalable distributed enterprise applications with Spring Boot ecosystem.",
      skills: [
        { name: "Java", icon: <FaJava />, color: "#ea580c" },
        { name: "Spring Boot", icon: <SiSpring />, color: "#22c55e" },
        { name: "Spring Data JPA", icon: <FaDatabase />, color: "#16a34a" },
        { name: "Spring Security", icon: <FaShieldAlt />, color: "#10b981" },
        { name: "Spring Cloud", icon: <FaCloud />, color: "#059669" },
        { name: "Spring AI", icon: <FaRobot />, color: "#34d399" },
        { name: "WebSocket", icon: <SiSocketdotio />, color: "#010101" },
        { name: "JWT", icon: <SiJsonwebtokens />, color: "#ec4899" },
      ],
    },
    {
      categoryId: "backend",
      title: "Backend Engineering (.NET)",
      badge: "Frameworks",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      description: "Developing high-performance RESTful Web APIs and microservices with C# & .NET.",
      skills: [
        { name: "C#", icon: <SiSharp />, color: "#9333ea" },
        { name: "ASP.NET Core", icon: <SiDotnet />, color: "#7c3aed" },
        { name: "ASP.NET Web API", icon: <SiDotnet />, color: "#8b5cf6" },
        { name: "Entity Framework", icon: <FaDatabase />, color: "#a855f7" },
        { name: "LINQ", icon: <FaCode />, color: "#60a5fa" },
        { name: "Async/Await", icon: <FaCode />, color: "#eab308" },
      ],
    },
    {
      categoryId: "cloud",
      title: "Cloud Infrastructure (Amazon Web Services)",
      badge: "Cloud Architecture",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      description: "Architecting resilient, serverless, and cloud-native solutions on AWS.",
      skills: [
        { name: "EC2", icon: <SiAmazonec2 />, color: "#f97316" },
        { name: "S3", icon: <SiAmazons3 />, color: "#22c55e" },
        { name: "AWS Lambda", icon: <SiAwslambda />, color: "#f97316" },
        { name: "API Gateway", icon: <FaAws />, color: "#a855f7" },
        { name: "CloudFront", icon: <FaAws />, color: "#c084fc" },
        { name: "IAM", icon: <SiAmazoniam />, color: "#fb923c" },
        { name: "Cognito", icon: <FaAws />, color: "#f87171" },
        { name: "SNS / SES", icon: <FaAws />, color: "#f472b6" },
        { name: "Elastic Beanstalk", icon: <SiAwselasticloadbalancing />, color: "#f97316" },
        { name: "CI/CD Pipeline", icon: <FaAws />, color: "#2dd4bf" },
      ],
    },
    {
      categoryId: "database",
      title: "Databases, Caching & Search",
      badge: "Data Management",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      description: "Relational, NoSQL databases and in-memory caches optimized for high throughput.",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#3b82f6" },
        { name: "MySQL", icon: <SiMysql />, color: "#f97316" },
        { name: "Redis", icon: <SiRedis />, color: "#ef4444" },
        { name: "Elasticsearch", icon: <SiElasticsearch />, color: "#eab308" },
      ],
    },
    {
      categoryId: "devops",
      title: "DevOps, Messaging & Security",
      badge: "Infrastructure & Auth",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description: "Containerization, CI/CD automation, distributed message streaming and SSO security.",
      skills: [
        { name: "Apache Kafka", icon: <SiApachekafka />, color: "#94a3b8" },
        { name: "Keycloak", icon: <FaKey />, color: "#38bdf8" },
        { name: "Docker", icon: <SiDocker />, color: "#38bdf8" },
        { name: "Jenkins", icon: <SiJenkins />, color: "#f87171" },
        { name: "Prometheus", icon: <SiPrometheus />, color: "#f97316" },
        { name: "Grafana", icon: <SiGrafana />, color: "#fb923c" },
      ],
    },
    {
      categoryId: "tools",
      title: "Frontend & Development Tools",
      badge: "Tools & UI",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      description: "Modern UI frameworks, API documentation, testing, and code quality tools.",
      skills: [
        { name: "React", icon: <SiReact />, color: "#22d3ee" },
        { name: "Next.js", icon: <SiNextdotjs />, color: theme === "dark" ? "#ffffff" : "#0f172a" },
        { name: "Git", icon: <SiGit />, color: "#f97316" },
        { name: "Postman", icon: <SiPostman />, color: "#f97316" },
        { name: "Swagger / OpenAPI", icon: <SiSwagger />, color: "#84cc16" },
        { name: "SonarQube", icon: <SiSonarqube />, color: "#38bdf8" },
      ],
    },
  ];

  const filteredGroups = activeTab === "all"
    ? skillGroups
    : skillGroups.filter(g => g.categoryId === activeTab);

  const titleClass = theme === "dark" ? "text-white" : "text-slate-800";

  return (
    <section id="skills" className="py-10 sm:py-14 relative flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <p className="text-secondary text-[11px] sm:text-xs uppercase tracking-widest mb-1.5 font-semibold">SKILLS & CAPABILITIES</p>
          <h2 className={`text-3xl sm:text-4xl font-bold ${titleClass}`}>Tech Stack.</h2>
          <p className="text-secondary text-xs sm:text-sm max-w-xl mx-auto mt-2">
            Core technologies and tools I utilize to architect, build, and deploy reliable cloud-native backend systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-8 sm:mb-10">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`h-10 sm:h-11 px-2.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer border whitespace-nowrap ${
                  isActive
                    ? "bg-violet-600 text-white border-violet-500 shadow-md shadow-violet-500/20"
                    : theme === "dark"
                    ? "bg-slate-900/70 text-slate-300 border-white/5 hover:border-violet-500/40 hover:bg-slate-800"
                    : "bg-white text-slate-700 border-slate-200 hover:border-violet-500/40 hover:bg-slate-50 shadow-sm"
                }`}
              >
                <span className={isActive ? "text-white" : "text-violet-400"}>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <AnimatePresence>
            {filteredGroups.map((group, index) => (
              <motion.div
                key={group.title}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`card-gradient rounded-2xl p-4 sm:p-6 border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                  theme === "dark"
                    ? "border-white/10 hover:border-violet-500/40 hover:shadow-violet-500/10"
                    : "border-slate-200 hover:border-violet-400 hover:shadow-violet-500/10"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className={`text-base sm:text-lg font-bold leading-snug ${titleClass}`}>
                      {group.title}
                    </h3>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap shrink-0 ${group.badgeColor}`}>
                      {group.badge}
                    </span>
                  </div>
                  <p className="text-secondary text-xs leading-relaxed mb-5">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className={`px-3 py-2 rounded-xl border flex items-center gap-2.5 cursor-default transition-all duration-200 ${
                        theme === "dark"
                          ? "bg-slate-900/80 border-white/5 hover:border-violet-500/40 hover:bg-slate-800"
                          : "bg-slate-50 border-slate-200 hover:border-violet-400 hover:bg-white shadow-sm"
                      }`}
                    >
                      <span className="text-xl" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                      <span className={`text-xs font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
