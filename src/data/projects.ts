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
        title: "logger (npm pkg)",
        description: "Built a comprehensive logging package with Pino integration and framework-specific middleware for consistent logging across microservices.",
        longDescription: "Developed a shared logger package using Pino for structured JSON logging with built-in middleware for Hono, GraphQL Yoga, and ongoing Express support. Features include configurable sampling rates, child loggers for context propagation, and environment-specific formatting (pretty-printed for development, JSON for production).",
        image: "/projects/logger-system.jpg",
        technologies: ["TypeScript", "Pino", "Pino-pretty", "Hono", "GraphQL Yoga", "Express", "Tsup", "Monorepo"],
        achievements: [
            "Implemented structured logging with Pino for consistent JSON-formatted logs across all services",
            "Built framework-specific middleware for Hono and GraphQL Yoga with automatic request logging",
            "Currently working on Express middleware integration for broader framework support",
            "Added configurable sampling rates to handle high-traffic scenarios while preserving error logs",
            "Created child logger functionality for context propagation and trace ID tracking",
            "Developed environment-aware formatting (pretty-printed for dev, JSON for production)",
            "Integrated with monorepo architecture using workspace dependencies and TypeScript"
        ],
        githubUrl: "https://github.com/sujit-shrc/application/tree/main/packages/logger",
        featured: true,
        status: "completed",
        startDate: "Jul 2024",
        endDate: "Jul 2024"
    },
    {
        id: "2",
        title: "error-handler (npm pkg)",
        description: "Created a unified error handling system with framework-specific handlers for consistent error management across different APIs.",
        longDescription: "Built a centralized error handling package that provides unified error management across Hono, GraphQL Yoga, and ongoing Express support. Features include standardized AppError class with static factory methods, framework-specific error handlers, and consistent error response formats for REST and GraphQL APIs.",
        image: "/projects/error-platform.jpg",
        technologies: ["TypeScript", "Hono", "GraphQL Yoga", "Express", "Tsup", "Monorepo"],
        achievements: [
            "Designed AppError class with static factory methods for consistent error creation across services",
            "Built framework-specific error handlers for Hono and GraphQL Yoga",
            "Currently working on Express error handling middleware for REST APIs",
            "Implemented standardized error response formats for REST and GraphQL protocols",
            "Created comprehensive HTTP status code mapping (400, 401, 403, 404, 409, 422, 429, 500, 503)",
            "Integrated with logger package for automatic error logging and context propagation",
            "Developed as a monorepo package with proper TypeScript types and workspace dependencies"
        ],
        githubUrl: "https://github.com/sujit-shrc/application/tree/main/packages/errors",
        featured: true,
        status: "completed",
        startDate: "Jul 2024",
        endDate: "Jul 2024"
    },    
    {
        id: "3",
        title: "rnr (npm pkg)",
        description: "A CLI tool to instantly detect and run project scripts across multiple frameworks and package managers.",
        longDescription: "Created a developer-friendly CLI that simplifies running projects by automatically detecting the framework and package manager. Supports Next.js, Vite, Express, React, Vue, Nuxt, and monorepos. Provides a one-command start experience and allows customization via a `.rnr.rc` configuration file.",
        image: "/projects/rnr-cli.jpg",
        technologies: ["TypeScript", "Node.js", "CLI", "npm"],
        achievements: [
            "Built a CLI to detect project type and package manager (Bun, pnpm, Yarn, npm)",
            "Enabled one-command project launch with automatic script detection",
            "Supported multiple frameworks: Next.js, Vite, Express, React, Vue, Nuxt, Monorepos",
            "Implemented configuration support with `.rnr.rc` for flexible setup"
        ],
        githubUrl: "https://github.com/sujit-shrc/rnr",
        featured: true,
        status: "completed",
        startDate: "Aug 2024",
        endDate: "Aug 2024"
    }, 
    {
        id: "4",
        title: "pzr (npm pkg)",
        description: "A CLI tool to scaffold web projects with support for Next.js, Express.js, and Vite React.",
        longDescription: "Developed a CLI tool for scaffolding JavaScript and TypeScript projects. Features include automatic detection of project type and configuration, generation of pages, routes, components, controllers, and models. Designed for both global and local usage, and published as an npm package for developer productivity.",
        image: "/projects/pzr-cli.jpg",
        technologies: ["TypeScript", "Node.js", "CLI", "npm"],
        achievements: [
            "Built CLI for scaffolding Next.js, Express.js, and Vite React projects",
            "Implemented automatic project type and config detection (JS/TS, app/src, routers)",
            "Added generators for pages, routes, components, controllers, and models",
            "Published to npm registry with support for both global and project-local usage"
        ],
        githubUrl: "https://github.com/sujit-shrc/pzr",
        featured: true,
        status: "completed",
        startDate: "Aug 2024",
        endDate: "Aug 2024"
    }, 
    {
        id: "5",
        title: "Gmail Auto-Reply App",
        description: "A Node.js application that automates sending polite, colorful auto-replies to new emails in Gmail using the Gmail API.",
        longDescription: "Built a Gmail automation tool that checks for new emails, identifies first-time threads, and sends custom HTML-based auto-replies. The app adds labels for organization, avoids duplicate replies, and runs at random intervals to simulate real-world response patterns. Uses Gmail API for mailbox interactions, with modern async/await and promises for clean code. Fully customizable HTML templates allow branded and stylish responses.",
        image: "/projects/gmail-autoreply.jpg",
        technologies: ["Node.js", "Gmail API", "OAuth2", "JavaScript", "dotenv"],
        achievements: [
            "Automated Gmail replies with stylish HTML email templates",
            "Ensured replies are only sent once per email thread",
            "Added labeling system for better email organization",
            "Implemented random interval checks (45–120s) to mimic natural replies",
            "Used async/await for clean, maintainable code",
            "Allowed customization via `.env` and editable HTML templates"
        ],
        githubUrl: "https://github.com/mnamesujit/mailbox",
        featured: true,
        status: "completed",
        startDate: "Sept 2024",
        endDate: "Sept 2024"
    },    
    {
        id: "6",
        title: "Kimmane Resorts Website",
        description: "Created a responsive resort website with smooth animations, a custom image slider, and contact form integration with Google Sheets.",
        longDescription: "Contributed to the development of a modern website for Kimmane Resorts during an internship. Built with Next.js and Tailwind CSS, focusing on pixel-perfect design, responsiveness, and smooth animations. Implemented a custom auto-sliding swiper/slider and integrated the contact form with Google Sheets using Google Apps Script for data storage. The project emphasized frontend polish and seamless user interaction.",
        image: "/projects/kimmane-resorts.jpg",
        technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Google Apps Script"],
        achievements: [
            "Built a responsive layout with pixel-perfect design using Next.js and Tailwind CSS",
            "Created a custom auto-sliding swiper/slider with smooth transitions",
            "Implemented animations and interactive UI with Framer Motion",
            "Integrated contact form submissions into Google Sheets via Apps Script"
        ],
        liveUrl: "https://kimmane.vercel.app",
        featured: false,
        status: "in-progress",
        startDate: "Aug 2024",
        endDate: "Sep 2024"
    }
    
    
];