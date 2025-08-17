import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sujit Kumar - Software Engineer",
  description: "Software engineer specializing in JavaScript, TypeScript, microservices, and modern web development. Building scalable systems with React, Node.js, and cloud technologies.",
  keywords: ["software engineer", "javascript", "typescript", "react", "node.js", "microservices", "web development"],
  authors: [{ name: "Sujit Kumar" }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Sujit Kumar - Software Engineer",
    description: "Software engineer specializing in modern web development and microservices architecture",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-white selection:bg-gray-700">
        {children}
      </body>
    </html>
  );
}
