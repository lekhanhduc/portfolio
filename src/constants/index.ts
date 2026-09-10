export const navLinks = [
  { id: "about", title: "About" },
  { id: "certifications", title: "Certifications" },
  { id: "skills", title: "Skills" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const personalInfo = {
  name: "Le Khanh Duc",
  role: "Java Backend Engineer",
  university: "FPT University Danang",
  description: "Backend-focused engineer passionate about scalable, reliable, and secure systems. Strong expertise in Java, Spring Boot, and RESTful API development.",
  quote: "Backend is the invisible engine that powers seamless user experiences.",
  openTo: "Backend Developer",
};

export const socials = [
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100028989917543", icon: "facebook" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/lekhanhduc212003/", icon: "linkedin" },
  { name: "Instagram", url: "https://instagram.com/02_10_003/", icon: "instagram" },
  { name: "YouTube", url: "https://www.youtube.com/@javabuilder.online", icon: "youtube" },
  { name: "Email", url: "mailto:lekhanhduc212003@gmail.com", icon: "email" },
  { name: "GitHub", url: "https://github.com/lekhanhduc", icon: "github" },
];

export const skills = {
  backend: [
    { name: "Java", icon: "java" },
    { name: "Spring Boot", icon: "spring" },
    { name: ".NET", icon: "dotnet" },
    { name: "Hibernate", icon: "hibernate" },
  ],
  database: [
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
    { name: "SQL Server", icon: "sqlserver" },
    { name: "Redis", icon: "redis" },
    { name: "Elasticsearch", icon: "elasticsearch" },
  ],
  devops: [
    { name: "Docker", icon: "docker" },
    { name: "Jenkins", icon: "jenkins" },
    { name: "Kafka", icon: "kafka" },
    { name: "Prometheus", icon: "prometheus" },
    { name: "Grafana", icon: "grafana" },
  ],
  frontend: [
    { name: "React", icon: "react" },
    { name: "Angular", icon: "angular" },
    { name: "MUI", icon: "mui" },
    { name: "Bootstrap", icon: "bootstrap" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "Postman", icon: "postman" },
    { name: "Swagger", icon: "swagger" },
    { name: "SonarQube", icon: "sonarqube" },
  ],
};

export const certifications = [
  {
    id: "aws-saa-c03",
    title: "AWS Certified Solutions Architect – Associate",
    code: "SAA-C03",
    issuer: "Amazon Web Services (AWS)",
    image: "/ssa-c03.webp",
    badgeUrl: "https://www.credly.com/earner/earned/badge/9f9b7ac4-845d-46cb-a2d5-277e0f0c7baf",
    badgeId: "9f9b7ac4-845d-46cb-a2d5-277e0f0c7baf",
    description: "Validates technical expertise in designing secure, resilient, high-performing, and cost-optimized architectures on AWS following the Well-Architected Framework.",
    skills: [
      "VPC & Networking",
      "High Availability & Auto Scaling",
      "IAM & Cloud Security",
      "Serverless & Lambda",
      "RDS & DynamoDB",
      "S3 & CloudFront",
      "Decoupled Architecture (SQS/SNS)",
      "Cost Optimization",
    ],
    domains: [
      {
        title: "Design Secure Architectures",
        details: "IAM least-privilege, KMS encryption, VPC security groups, Network ACLs, AWS WAF & Secrets Manager.",
      },
      {
        title: "Design Resilient Architectures",
        details: "Multi-AZ high availability, Auto Scaling Groups, SQS/SNS decoupling, Route 53 failover & disaster recovery.",
      },
      {
        title: "Design High-Performing Architectures",
        details: "Optimized EC2, ECS, Lambda serverless compute, Aurora/RDS caching with ElastiCache & CloudFront CDN.",
      },
      {
        title: "Design Cost-Optimized Architectures",
        details: "S3 storage lifecycle tiering, right-sized compute, Savings Plans, AWS Cost Explorer & FinOps practices.",
      },
    ],
  },
];

export const currentlyLearning = [
  "System Design",
  "Cloud-native & Distributed Systems",
  "Advanced AWS Solutions & Kubernetes",
];

export const technologies = [
  { name: "Java", icon: "java", color: "#ea580c" },
  { name: "Spring Boot", icon: "spring", color: "#22c55e" },
  { name: ".NET", icon: "dotnet", color: "#7c3aed" },
  { name: "AWS", icon: "aws", color: "#f97316" },
  { name: "Docker", icon: "docker", color: "#38bdf8" },
  { name: "Kafka", icon: "kafka", color: "#cbd5e1" },
  { name: "PostgreSQL", icon: "postgresql", color: "#3b82f6" },
  { name: "MySQL", icon: "mysql", color: "#f97316" },
  { name: "Redis", icon: "redis", color: "#ef4444" },
  { name: "Elasticsearch", icon: "elasticsearch", color: "#eab308" },
  { name: "Kubernetes", icon: "kubernetes", color: "#3b82f6" },
  { name: "React", icon: "react", color: "#22d3ee" },
  { name: "Next.js", icon: "nextjs", color: "#ffffff" },
  { name: "Git", icon: "git", color: "#f97316" },
];

