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
        title: "I Spent Weeks Researching Monorepo Tools for My Startup. Here’s What I Learned.",
        description: "A detailed account of exploring different monorepo tools, their pros and cons, and what I learned while evaluating them for my startup.",
        platform: "medium",
        url: "https://medium.com/@sujit.shrc/i-spent-weeks-researching-monorepo-tools-for-my-startup-heres-what-i-learned-bc97818422d9",
        publishedDate: "2025-07-16",
        readTime: "4 min read",
        tags: ["monorepo", "startup", "devtools", "engineering"]
    },
    {
        id: "2",
        title: "Install AppImages on Arch Based Linux",
        description: "Step-by-step guide to installing and running AppImages on Arch Linux.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/install-appimages-on-arch-based-linux-lm2",
        publishedDate: "2025-02-11",
        readTime: "2 min read",
        tags: ["architecture", "appimage", "linux", "installation"]
    },
    {
        id: "3",
        title: "My Go-To File Transfer Tools in Linux: A Terminal Lover's Guide",
        description: "Collection of CLI-based file transfer tools every Linux user should know.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/my-go-to-file-transfer-tools-in-linux-a-terminal-lovers-guide-57ig",
        publishedDate: "2024-08-28",
        readTime: "3 min read",
        tags: ["cli", "terminal", "linux", "linuxtips"]
    },
    {
        id: "4",
        title: "Mastering Conventional Git Commit Messages for Better Collaboration",
        description: "Best practices and conventions for writing effective Git commit messages.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/git-conventional-commit-63k",
        publishedDate: "2024-07-22",
        readTime: "4 min read",
        tags: ["git", "gitconventions"]
    },
    {
        id: "5",
        title: "The FastAPI Deployment Cookbook: Recipe for deploying FastAPI app with Docker and DigitalOcean",
        description: "Hands-on guide to deploying FastAPI applications using Docker on DigitalOcean.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/the-fastapi-deployment-cookbook-recipe-for-deploying-fastapi-app-with-docker-and-digitalocean-4apk",
        publishedDate: "2024-07-01",
        readTime: "4 min read",
        tags: ["fastapi", "deployment", "digitalocean", "fastapideployment"]
    },
    {
        id: "6",
        title: "Goodbye IP Addresses, Say Hello to the Magic of Network Aliases",
        description: "Explaining the power of network aliases and why they matter in modern setups.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/goodbye-ip-addresses-hello-sanity-the-magic-of-network-aliases-1i4j",
        publishedDate: "2024-07-01",
        readTime: "2 min read",
        tags: ["networking", "linux", "devops"]
    },
    {
        id: "7",
        title: "Decoding the Linux Command Line: 75 Indispensable Utilities Explained",
        description: "Overview of 75 essential Linux command line utilities for productivity.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/decoding-the-linux-command-line-52-indispensable-utilities-explained-34kk",
        publishedDate: "2024-06-14",
        readTime: "6 min read",
        tags: ["cmd", "terminal", "linux"]
    },
    {
        id: "8",
        title: "Mastering Git: Tips and Tricks for Efficient Version Control",
        description: "Advanced tips to improve your workflow with Git version control.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/mastering-git-tips-and-tricks-for-efficient-version-control-44cm",
        publishedDate: "2023-11-29",
        readTime: "3 min read",
        tags: ["git", "github", "versioncontrol"]
    },
    {
        id: "9",
        title: "Diving into Data: A Comprehensive Guide to Database Fundamentals",
        description: "Beginner-friendly introduction to relational and NoSQL databases.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/diving-into-data-a-comprehensive-guide-to-database-fundamentals-4lhf",
        publishedDate: "2023-11-11",
        readTime: "4 min read",
        tags: ["database", "mysql", "mariadb", "mongodb"]
    },
    {
        id: "10",
        title: "Mastering Git: A Beginner's Guide to Version Control",
        description: "A complete beginner’s guide to learning Git for version control.",
        platform: "dev.to",
        url: "https://dev.to/sujit-shrc/mastering-git-a-beginners-guide-to-version-control-3j7p",
        publishedDate: "2023-11-05",
        readTime: "2 min read",
        tags: ["git", "githunt", "githack", "versioncontrol"]
    }
];
