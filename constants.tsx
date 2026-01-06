
import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Alex Rivera",
  role: "Senior Full-Stack Software Engineer",
  location: "San Francisco, CA",
  email: "alex.rivera@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  bio: "Passionate Full-Stack Engineer with 6+ years of experience building scalable distributed systems and beautiful user interfaces. Expert in React, Node.js, and Cloud Infrastructure. Driven by solving complex problems and delivering high-impact products."
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux / Recoil", level: 85 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 93 },
      { name: "Python / FastAPI", level: 88 },
      { name: "PostgreSQL / MongoDB", level: 90 },
      { name: "GraphQL", level: 85 }
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS / GCP", level: 85 },
      { name: "Docker / Kubernetes", level: 82 },
      { name: "CI/CD (GitHub Actions)", level: 88 },
      { name: "Terraform", level: 75 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "TechScale Innovations",
    role: "Senior Software Engineer",
    period: "2021 - Present",
    description: [
      "Led the architecture and development of a high-traffic microservices-based SaaS platform serving 500k+ users.",
      "Optimized database queries reducing latency by 45% using Redis caching and PostgreSQL indexing strategies.",
      "Mentored a team of 5 junior engineers and implemented rigorous code review standards.",
      "Spearheaded the migration from a monolithic architecture to a modern distributed system."
    ],
    technologies: ["React", "Node.js", "AWS", "Kubernetes", "PostgreSQL"]
  },
  {
    company: "CloudFlow Systems",
    role: "Full-Stack Engineer",
    period: "2018 - 2021",
    description: [
      "Developed a real-time data visualization dashboard for cloud infrastructure monitoring.",
      "Implemented OAuth2.0 and JWT-based authentication systems for improved security.",
      "Collaborated with UX designers to build a custom component library used across multiple product lines.",
      "Reduced build times by 60% through custom Webpack and CI/CD optimizations."
    ],
    technologies: ["Vue.js", "Python", "GCP", "Docker", "D3.js"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "EcoTrack AI",
    description: "An AI-powered application that tracks carbon footprints using real-time spending data and suggests sustainable alternatives.",
    tags: ["Next.js", "Python", "OpenAI", "Prisma"],
    image: "https://picsum.photos/800/500?random=1",
    github: "https://github.com"
  },
  {
    title: "Pulse Messenger",
    description: "End-to-end encrypted real-time messaging platform with support for large file sharing and group calls.",
    tags: ["React Native", "Socket.io", "Redis", "WebRTC"],
    image: "https://picsum.photos/800/500?random=2",
    github: "https://github.com"
  },
  {
    title: "Nexus Dashboard",
    description: "Comprehensive admin dashboard for managing multi-tenant Kubernetes clusters with integrated monitoring.",
    tags: ["TypeScript", "Go", "Kubernetes API", "Grafana"],
    image: "https://picsum.photos/800/500?random=3",
    github: "https://github.com"
  }
];
