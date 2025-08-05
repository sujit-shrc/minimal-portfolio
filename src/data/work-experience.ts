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
        description: "Built a microservices-based web application with real-time features, payment processing, and automated deployment pipelines.",
        achievements: [
            "Architected microservices with Turborepo for user management, event handling, payments, and validation services",
            "Implemented HashiCorp Consul for service discovery and seamless inter-service communication",
            "Containerized all services with Docker for consistent development and production environments",
            "Configured Nginx for request routing and SSL termination with security best practices",
            "Integrated third-party payment gateway and messaging services for user notifications",
            "Set up Supabase for authentication and database with AWS S3 for file storage",
            "Built automated deployment pipelines and implemented Cloudflare tunnel for DDoS protection",
            "Optimized API response times by 20% through debugging complex inter-service communication issues"
        ],
        technologies: ["JavaScript", "TypeScript", "Node.js", "React", "Turborepo", "Docker", "Nginx", "HashiCorp Consul", "Supabase", "AWS S3", "Cloudflare"]
    },
    {
        id: "2",
        role: "SDE-1",
        company: "Ibharat.org",
        logo: "/ibharat.jpeg",
        startDate: "May 2024",
        endDate: "Oct 2024",
        description: "Re-engineered ibharat.org's frontend and built a comprehensive news aggregation platform with automated content management and search functionality.",
        achievements: [
            "Re-engineered ibharat.org's frontend with Next.js and React, creating an explore section similar to Google News",
            "Automated news crawling from dynamic sources using custom scrapers and sitemap parsing",
            "Built comprehensive admin dashboard for content management and manual overrides",
            "Designed efficient database schema for storing and searching news articles at scale",
            "Configured cron jobs for automatic content updates and daily maintenance tasks",
            "Achieved Lighthouse score over 90 through SSR optimization and strategic caching",
            "Containerized applications with Docker and established CI/CD pipelines via GitHub Actions",
            "Handled edge cases in news parsing when sources changed HTML structure unexpectedly"
        ],
        technologies: ["Next.js", "React", "Node.js", "Docker", "GitHub Actions", "Custom Scrapers", "Cron Jobs", "SSR", "Database Design"]
    },
    {
        id: "3",
        role: "Full Stack Developer Intern",
        company: "ProsecDevs (Durbhasi Gurukulam)",
        logo: "/durbhasi-gurukulam.jpeg",
        startDate: "Jun 2023",
        endDate: "Dec 2023",
        description: "Developed backend infrastructure and payment systems for educational platform with focus on security and scalability.",
        achievements: [
            "Implemented Role-Based Access Control (RBAC) system for user permissions and security",
            "Built rate limiting middleware to prevent API abuse and ensure system stability",
            "Integrated PhonePe payment gateway for secure transaction processing",
            "Managed DNS configuration and domain setup for production deployments",
            "Developed automated deployment pipelines for continuous integration and delivery",
            "Created comprehensive API documentation and testing suites",
            "Optimized database queries and implemented caching strategies for better performance",
            "Collaborated with cross-functional teams to deliver features on schedule"
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "Docker", "AWS", "PhonePe API", "JWT", "Rate Limiting", "RBAC"]
    }
];