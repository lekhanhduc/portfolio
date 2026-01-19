import { motion } from "framer-motion";
import {
  SiSpring, SiPostgresql, SiMysql, SiRedis, SiElasticsearch,
  SiDocker, SiJenkins, SiApachekafka, SiPrometheus, SiGrafana,
  SiReact, SiNextdotjs, SiGit, SiPostman,
  SiSwagger, SiSonarqube, SiJsonwebtokens, SiSocketdotio,
  SiAmazonec2, SiAwselasticloadbalancing, SiAwslambda, SiAmazons3, SiAmazoniam,
  SiSharp, SiDotnet
} from "react-icons/si";
import { FaJava, FaAws, FaShieldAlt, FaKey, FaCloud, FaDatabase, FaRobot, FaCode } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import SkillsSphere from "./canvas/SkillsSphere";

const Skills = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: "Backend (Java)",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Java", icon: <FaJava />, iconColor: "text-orange-500" },
        { name: "Spring Boot", icon: <SiSpring />, iconColor: "text-green-500" },
        { name: "Spring Data JPA", icon: <FaDatabase />, iconColor: "text-green-500" },
        { name: "Spring Security", icon: <FaShieldAlt />, iconColor: "text-green-500" },
        { name: "Spring Cloud", icon: <FaCloud />, iconColor: "text-green-500" },
        { name: "Spring AI", icon: <FaRobot />, iconColor: "text-green-500" },
        { name: "WebSocket", icon: <SiSocketdotio />, iconColor: theme === "dark" ? "text-gray-300" : "text-gray-700" },
        { name: "JWT", icon: <SiJsonwebtokens />, iconColor: "text-pink-500" },
      ],
    },
    {
      title: "Backend (.NET)",
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "C#", icon: <SiSharp />, iconColor: "text-purple-600" },
        { name: "ASP.NET Core", icon: <SiDotnet />, iconColor: "text-purple-500" },
        { name: "ASP.NET Web API", icon: <SiDotnet />, iconColor: "text-purple-500" },
        { name: "Entity Framework", icon: <FaDatabase />, iconColor: "text-purple-400" },
        { name: "LINQ", icon: <FaCode />, iconColor: "text-blue-400" },
        { name: "Async/Await", icon: <FaCode />, iconColor: theme === "dark" ? "text-yellow-400" : "text-yellow-600" },
      ],
    },
    {
      title: "Message Broker",
      color: "from-gray-500 to-slate-600",
      skills: [
        { name: "Kafka", icon: <SiApachekafka />, iconColor: theme === "dark" ? "text-gray-300" : "text-gray-700" },
      ],
    },
    {
      title: "Authentication & Authorization",
      color: "from-blue-400 to-indigo-500",
      skills: [
        { name: "Keycloak", icon: <FaKey />, iconColor: "text-blue-400" },
      ],
    },
    {
      title: "Database",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, iconColor: "text-blue-400" },
        { name: "MySQL", icon: <SiMysql />, iconColor: "text-orange-400" },
        { name: "Redis", icon: <SiRedis />, iconColor: "text-red-500" },
        { name: "Elasticsearch", icon: <SiElasticsearch />, iconColor: "text-yellow-400" },
      ],
    },
    {
      title: "Cloud (AWS)",
      color: "from-orange-400 to-yellow-500",
      skills: [
        { name: "IAM", icon: <SiAmazoniam />, iconColor: "text-orange-400" },
        { name: "EC2", icon: <SiAmazonec2 />, iconColor: "text-orange-400" },
        { name: "S3", icon: <SiAmazons3 />, iconColor: "text-green-500" },
        { name: "CloudFront", icon: <FaAws />, iconColor: "text-purple-400" },
        { name: "Lambda", icon: <SiAwslambda />, iconColor: "text-orange-500" },
        { name: "API Gateway", icon: <FaAws />, iconColor: "text-purple-500" },
        { name: "Cognito", icon: <FaAws />, iconColor: "text-red-400" },
        { name: "SNS", icon: <FaAws />, iconColor: "text-pink-500" },
        { name: "SES", icon: <FaAws />, iconColor: "text-blue-400" },
        { name: "Elastic Beanstalk", icon: <SiAwselasticloadbalancing />, iconColor: "text-orange-400" },
        { name: "CodeCommit", icon: <FaAws />, iconColor: "text-blue-500" },
        { name: "CodeBuild", icon: <FaAws />, iconColor: "text-green-400" },
        { name: "CodeDeploy", icon: <FaAws />, iconColor: "text-blue-400" },
        { name: "CodePipeline", icon: <FaAws />, iconColor: "text-teal-400" },
      ],
    },
    {
      title: "DevOps",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Docker", icon: <SiDocker />, iconColor: "text-sky-400" },
        { name: "Jenkins", icon: <SiJenkins />, iconColor: "text-red-400" },
        { name: "Prometheus", icon: <SiPrometheus />, iconColor: "text-orange-500" },
        { name: "Grafana", icon: <SiGrafana />, iconColor: "text-orange-400" },
      ],
    },
    {
      title: "Frontend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", icon: <SiReact />, iconColor: "text-cyan-400" },
        { name: "Next.js", icon: <SiNextdotjs />, iconColor: theme === "dark" ? "text-white" : "text-gray-800" },
      ],
    },
    {
      title: "Tools",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git", icon: <SiGit />, iconColor: "text-orange-500" },
        { name: "Postman", icon: <SiPostman />, iconColor: "text-orange-500" },
        { name: "Swagger", icon: <SiSwagger />, iconColor: "text-green-500" },
        { name: "SonarQube", icon: <SiSonarqube />, iconColor: "text-sky-400" },
      ],
    },
  ];

  const titleClass = theme === "dark" ? "text-white" : "text-slate-800";

  return (
    <section id="skills" className="py-24 relative flex justify-center">
      <div className="w-full max-w-6xl px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-secondary text-base uppercase tracking-wider">What I know</p>
          <h2 className={`text-3xl lg:text-4xl font-bold mt-2 ${titleClass}`}>Tech Stack.</h2>
        </motion.div>

        <div className="mb-12">
          <SkillsSphere />
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-base font-semibold mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="skill-item px-4 py-2.5 rounded-lg border border-primary/20 flex items-center gap-2 hover:border-primary/40 transition-all cursor-pointer"
                  >
                    <span className={`${skill.iconColor} text-lg`}>{skill.icon}</span>
                    <span className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-slate-700"}`}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
