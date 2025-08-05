export interface BlogPost {
    id: string;
    title: string;
    description: string;
    platform: 'dev.to' | 'medium' | 'personal';
    url: string;
    publishedDate: string;
    readTime: string;
    tags: string[];
    featured?: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Building Microservices with Turborepo: Lessons from a Booking Platform",
        description: "Real-world experience building a booking platform with microservices, service discovery, and Docker containerization.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/building-microservices-turborepo",
        publishedDate: "Jan 2025",
        readTime: "8 min",
        tags: ["microservices", "turborepo", "docker", "consul"],
        featured: true
    },
    {
        id: "2", 
        title: "Optimizing Next.js for News Aggregation: Getting 90+ Lighthouse Score",
        description: "How I re-engineered ibharat.org to achieve excellent performance with SSR, caching, and smart optimization techniques.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/nextjs-optimization-lighthouse-90",
        publishedDate: "Nov 2024",
        readTime: "7 min",
        tags: ["nextjs", "performance", "ssr", "lighthouse"],
        featured: true
    },
    {
        id: "3",
        title: "Custom Web Scrapers: Handling Dynamic Content and Edge Cases",
        description: "Building robust scrapers that work when websites change their structure, with sitemap parsing and error recovery.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/custom-web-scrapers-dynamic-content",
        publishedDate: "Sep 2024",
        readTime: "6 min",
        tags: ["web-scraping", "automation", "nodejs", "edge-cases"]
    },
    {
        id: "4",
        title: "From Debian to Arch Linux: My Development Environment Evolution",
        description: "Why I switched to Arch Linux and how it improved my development workflow with better package management and customization.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/debian-to-arch-development-environment",
        publishedDate: "Aug 2024",
        readTime: "5 min",
        tags: ["linux", "arch", "development", "productivity"],
        featured: true
    },
    {
        id: "5",
        title: "Docker + Nginx + SSL: Production-Ready Deployment Setup",
        description: "Step-by-step guide to containerizing applications with proper SSL termination and security best practices.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/docker-nginx-ssl-production-setup",
        publishedDate: "Jul 2024",
        readTime: "9 min",
        tags: ["docker", "nginx", "ssl", "deployment", "devops"]
    },
    {
        id: "6",
        title: "GitHub Actions CI/CD: Automated Deployment Pipelines That Actually Work",
        description: "Setting up reliable CI/CD pipelines with GitHub Actions, including testing, building, and deployment automation.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/github-actions-cicd-deployment",
        publishedDate: "Jun 2024",
        readTime: "8 min",
        tags: ["github-actions", "cicd", "automation", "deployment"]
    },
    {
        id: "7",
        title: "Neovim Configuration for Full-Stack Development",
        description: "My complete Neovim setup for JavaScript, TypeScript, and Python development with LSP, debugging, and productivity plugins.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/neovim-fullstack-development",
        publishedDate: "May 2024",
        readTime: "10 min",
        tags: ["neovim", "javascript", "typescript", "productivity"]
    },
    {
        id: "8",
        title: "Cron Jobs and Automation: Keeping Your Applications Running Smoothly",
        description: "Practical guide to setting up cron jobs for content updates, maintenance tasks, and automated workflows.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/cron-jobs-automation-guide",
        publishedDate: "Apr 2024",
        readTime: "6 min",
        tags: ["cron", "automation", "linux", "maintenance"]
    }
];