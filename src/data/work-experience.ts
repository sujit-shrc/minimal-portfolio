export interface WorkExperience {
    id: string;
    role: string;
    company: string;
    logo: string;
    startDate: string;
    endDate: string;
    current?: boolean;
    description?: string;
    achievements?: string[];
    technologies?: string[];
}

export const workExperience: WorkExperience[] = [
    {
        id: "1",
        role: "SDE-1",
        company: "Viral Equation",
        logo: "/viral-equation.jpg",
        startDate: "Oct 2024",
        endDate: "Jun 2025",
        current: true,
        description: "Contributed to a distributed microservices-based platform with modular architecture, real-time features, secure payment processing, and automated deployment pipelines.",
        achievements: [
            "Architected microservices with Turborepo for user management, event handling, payments, and validation modules",
            "Implemented HashiCorp Consul for service discovery and smooth inter-service communication",
            "Containerized all services with Docker for consistent and reliable environments across dev and prod",
            "Configured Nginx as a reverse proxy for request routing and SSL termination with security best practices",
            "Integrated third-party payment gateway and messaging APIs for user notifications and alerts",
            "Used Supabase for authentication and database, with AWS S3 for file storage and calendar ICS support",
            "Built automated CI/CD pipelines and implemented Cloudflare tunnel for DDoS protection and security",
            "Debugged complex inter-service communication issues and optimized API response times by 20%"
        ],
        technologies: ["JavaScript", "TypeScript", "Node.js", "React", "Turborepo", "Docker", "Nginx", "Consul", "Supabase", "AWS S3", "Cloudflare"]
    },
    {
        id: "2",
        role: "SDE-1",
        company: "IBharat",
        logo: "/ibharat.jpeg",
        startDate: "May 2024",
        endDate: "Oct 2024",
        description: "Rebuilt the complete frontend and automated crawling pipeline for search engine platform.",
        achievements: [
            "Redesigned and re-engineered the frontend with Next.js and React, creating an explore section for discovering content similar to Google Search",
            "Automated large-scale crawling from dynamic websites using custom scrapers, parsers, and sitemap processing",
            "Built an advanced admin dashboard for managing sources, indexing, and manual content overrides",
            "Designed and optimized database schema to index, store, and retrieve search results efficiently",
            "Configured cron jobs for continuous crawling, scheduled updates, and daily maintenance tasks",
            "Improved frontend performance to achieve Lighthouse score above 90 using SSR and caching strategies",
            "Containerized applications with Docker and set up CI/CD pipelines through GitHub Actions workflows",
            "Handled complex edge cases in crawling and parsing when external sites updated or broke their HTML structures"
        ],
        technologies: ["Next.js", "React", "Node.js", "Docker", "GitHub Actions", "Custom Scrapers", "Cron Jobs", "SSR", "FastAPI"]
    },
    {
        id: "3",
        role: "Full Stack Developer Intern",
        company: "ProsecDevs (Durbhasi Gurukulam)",
        logo: "/durbhasi-gurukulam.jpeg",
        startDate: "Jun 2023",
        endDate: "Dec 2023",
        description: "Developed backend infrastructure and payment systems for an educational platform with a focus on scalability, security, and performance optimization.",
        achievements: [
            "Implemented Role-Based Access Control (RBAC) system for user permissions and application security",
            "Built rate limiting middleware to prevent API abuse and ensure high system stability",
            "Integrated PhonePe payment gateway for secure and reliable transaction processing",
            "Configured DNS settings and domain management for smooth production deployments",
            "Set up automated deployment pipelines for continuous integration and delivery workflows",
            "Created detailed API documentation and comprehensive testing suites for developers",
            "Optimized database queries and added caching strategies to enhance overall performance",
            "Collaborated closely with cross-functional teams to deliver planned features on schedule"
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "Docker", "AWS", "PhonePe API", "JWT", "Rate Limiting", "RBAC"]
    }
];
