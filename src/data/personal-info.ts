export interface Skill {
  name: string;
  highlight?: boolean;
}

export const personalInfo = {
  name: "Sujit Kumar",
  intro: "Hello, I'm Sujit Kumar",
  about: [
    "i'm a software developer who fell in love with code when i realized it could solve real problems. what started as curiosity about javascript turned into building web apps, browser extensions, and mobile experiences that people actually use.",
    "these days, i architect microservices that don't fall apart under pressure. i use turborepo to keep things organized, docker to make deployments predictable, and consul so services can find each other without drama. i've wired up payment systems like cashfree and built admin dashboards that actually make sense.",
    "my journey with linux started with debian, but arch became home. there's something satisfying about optimizing nginx configs until they purr, writing custom scrapers that never break. ^_^"
  ],
  topics: [
    "microservices",
    "web development",
    "linux",
    "performance optimization",
    "devops",
    "technical writing"
  ],
  skills: {
    "Languages": [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Bash", highlight: true }
    ],
    "Frontend": [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "React Native", highlight: true }
    ],
    "Backend": [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" }
    ],
    "DevOps": [
      { name: "Docker" },
      { name: "NGINX" },
      { name: "Consul", highlight: true },
      { name: "AWS (EC2, S3)" },
      { name: "Cloudflare", highlight: true }
    ],
    "Tools": [
      { name: "Git" },
      { name: "GitHub Actions", highlight: true },
      { name: "PM2" },
      { name: "Arch Linux" },
      { name: "Debian" },
      { name: "Neovim" },
      { name: "Supabase" }
    ]
  } as Record<string, Skill[]>,
  social: {
    github: "https://github.com/sujit-shrc",
    linkedin: "https://linkedin.com/in/sujit-shrc",
    twitter: "https://twitter.com/sujit_shrc",
    email: "sujit.shrc@gmail.com"
  }
};