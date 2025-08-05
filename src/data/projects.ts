export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: string[];
    achievements?: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
    status: 'completed' | 'in-progress' | 'planned';
    startDate: string;
    endDate?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Booking Platform (Microservices)",
        description: "Built a comprehensive booking platform similar to Booking.com using microservices architecture with Turborepo and modern DevOps practices.",
        longDescription: "Developed separate services for user management, event handling, payments, and validation that communicate seamlessly. Used HashiCorp Consul for service discovery, Docker for containerization, and Nginx for secure request routing with SSL.",
        image: "/projects/booking-platform.jpg",
        technologies: ["Turborepo", "Node.js", "React", "HashiCorp Consul", "Docker", "Nginx", "Cashfree", "Supabase", "AWS S3", "Cloudflare"],
        achievements: [
            "Architected microservices with Turborepo for user management, event handling, payments, and validation services",
            "Implemented HashiCorp Consul for service discovery and seamless inter-service communication",
            "Containerized all services with Docker for consistent development and production environments",
            "Configured Nginx for request routing and SSL termination with security best practices",
            "Integrated Cashfree payment gateway and messaging services for user notifications",
            "Set up Supabase for authentication and database with AWS S3 for file storage"
        ],
        githubUrl: "https://github.com/sujit-shrc/booking-platform",
        featured: true,
        status: "completed",
        startDate: "Oct 2024",
        endDate: "Feb 2025"
    },
    {
        id: "2",
        title: "ibharat.org News Platform",
        description: "Re-engineered news aggregation platform with automated crawling, admin dashboard, and Google News-like explore section.",
        longDescription: "Built custom scrapers for dynamic news sources, automated content updates with cron jobs, and achieved Lighthouse score over 90 using SSR and caching. Includes comprehensive admin dashboard for content management.",
        image: "/projects/ibharat-news.jpg",
        technologies: ["Next.js", "React", "Custom Scrapers", "Sitemap Parsing", "Docker", "GitHub Actions", "SSR", "Caching"],
        achievements: [
            "Re-engineered frontend with Next.js creating an explore section similar to Google News",
            "Automated news crawling from dynamic sources using custom scrapers and sitemap parsing",
            "Built comprehensive admin dashboard for content management and manual overrides",
            "Achieved Lighthouse score over 90 through SSR optimization and strategic caching",
            "Containerized applications with Docker and established CI/CD pipelines via GitHub Actions",
            "Handled edge cases in news parsing when sources changed HTML structure unexpectedly"
        ],
        githubUrl: "https://github.com/sujit-shrc/ibharat-platform",
        liveUrl: "https://ibharat.org",
        featured: true,
        status: "completed",
        startDate: "May 2024",
        endDate: "Oct 2024"
    },
    {
        id: "3",
        title: "Linux Dotfiles",
        description: "Comprehensive development environment setup for Arch Linux and macOS with Neovim, shell customizations, and window manager configs.",
        longDescription: "Put together my complete development environment including Neovim configuration, shell customizations, and window manager settings. Made it public so other developers can use parts of it for their own setups.",
        image: "/projects/dotfiles.jpg",
        technologies: ["Bash", "Lua", "Neovim", "i3wm", "tmux", "Arch Linux", "macOS", "Git"],
        achievements: [
            "Complete Neovim configuration with LSP, debugging, and productivity plugins for full-stack development",
            "Custom shell aliases and functions that speed up daily development workflow",
            "i3 window manager setup with custom keybindings and workspace management",
            "Automated installation scripts for quick environment setup on new machines",
            "Cross-platform compatibility between Arch Linux and macOS systems"
        ],
        githubUrl: "https://github.com/sujit-shrc/dotfiles",
        liveUrl: "https://dotfiles.sujit-shrc.dev",
        featured: true,
        status: "in-progress",
        startDate: "2022",
        endDate: "Present"
    },
    {
        id: "4",
        title: "Note-Taking App (Hackathon)",
        description: "Built a collaborative note-taking application in 72 hours using HTML, CSS, and JavaScript. Achieved runner-up position out of 50+ teams.",
        longDescription: "Developed during DevSnest hackathon with a team of 3 developers. Focused on quick prototyping and learned valuable lessons about rapid development and team collaboration under time constraints.",
        image: "/projects/note-app.jpg",
        technologies: ["HTML", "CSS", "JavaScript", "Local Storage", "Responsive Design"],
        githubUrl: "https://github.com/sujit-shrc/hackathon-notes",
        liveUrl: "https://notes-hackathon.vercel.app",
        status: "completed",
        startDate: "DevSnest Hackathon",
        endDate: "72 hours"
    },
    {
        id: "5",
        title: "Technical Blog Articles",
        description: "Wrote 15+ articles about web development and Linux topics, sharing solutions to real problems encountered in frontend projects and deployments.",
        longDescription: "Covered CLI tools, Git tricks, Next.js optimizations, and Linux configurations that actually helped in day-to-day development. Focused on practical solutions rather than theoretical concepts.",
        image: "/projects/tech-writing.jpg",
        technologies: ["Technical Writing", "Web Development", "Linux", "CLI Tools", "Git", "Next.js"],
        liveUrl: "https://dev.to/sujit-shrc",
        status: "in-progress",
        startDate: "Nov 2022",
        endDate: "Present"
    },
    {
        id: "6",
        title: "Portfolio Website",
        description: "Modern portfolio website built with Next.js, featuring real-time GitHub integration, responsive design, and optimized performance.",
        longDescription: "Built this portfolio with focus on performance, accessibility, and user experience. Includes live GitHub activity, project showcases, and technical blog integration. Optimized for all device sizes.",
        image: "/projects/portfolio.jpg",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub API", "Vercel"],
        githubUrl: "https://github.com/sujit-shrc/portfolio",
        liveUrl: "https://sujit-shrc.vercel.app",
        status: "in-progress",
        startDate: "Feb 2025",
        endDate: "Present"
    }
];