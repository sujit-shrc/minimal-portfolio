'use client';

import { useState } from 'react';
import { blogPosts } from '@/data/blogs';
import { ExternalLink } from 'lucide-react';

export default function BlogSection() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);
  const list = blogPosts.slice(0, 5);

  const getPlatformDisplay = (platform: string) => {
    switch (platform) {
      case 'dev.to': return 'dev.to';
      case 'medium': return 'medium';
      case 'personal': return 'blog';
      default: return platform;
    }
  };

  return (
    <section id="writing">
      <div className="accent-border mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Writing</h2>
        <p className="text-gray-400 text-base mt-2">thoughts on code, linux, and why my dotfiles are better than yours :p</p>
      </div>

      {/* Numbered minimal headlines */}
      <div className="space-y-1">
        {list.map((post, index) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-md px-3 py-3 hover:bg-amber-500/5 focus-visible:bg-amber-500/10 transition-colors outline-none"
            aria-label={`Read: ${post.title} (${getPlatformDisplay(post.platform)})`}
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <span className="absolute inset-y-1 left-0 w-[2px] rounded bg-amber-400/0 group-hover:bg-amber-400/50 transition-colors" aria-hidden />
            <div className="flex items-center justify-between gap-3 min-w-0">
              <div className="flex items-center gap-3 min-w-0">
                <span className={`inline-flex items-center justify-center h-6 w-8 px-1.5 rounded font-mono text-xs transition-colors text-amber-400 bg-amber-500/10 border border-amber-500/10 group-hover:border-amber-500/40 group-hover:bg-amber-500/15`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="truncate text-white group-hover:text-amber-300 transition-colors">
                  {post.title}
                </span>
                {post.featured && (
                  <span className="text-amber-400 text-xs" title="featured">★</span>
                )}
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="hidden sm:inline text-xs font-mono text-gray-600">{post.readTime}</span>
                <ExternalLink size={16} className={`transition-colors ${hoveredPost === post.id ? 'text-amber-300' : 'text-gray-600'} group-focus-visible:text-amber-300`} />
              </div>
            </div>

            {/* Second line meta */}
            <div className="mt-1 pl-10 sm:pl-12 flex flex-wrap items-center gap-2 text-xs text-gray-600">
              <span className="px-2 py-0.5 rounded border bg-gray-800/40 border-gray-700/40 text-gray-400 group-hover:text-amber-300 group-hover:border-amber-500/30">
                {getPlatformDisplay(post.platform)}
              </span>
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="font-mono text-gray-500">#{tag}</span>
              ))}
              <span className="text-gray-600">{post.publishedDate}</span>
            </div>
          </a>
        ))}
      </div>

      {/* View more */}
      <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-gray-500 text-base">
          <span>more ramblings on</span>
          <a
            href="https://dev.to/sujit-shrc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors underline decoration-green-400/30 hover:decoration-green-300/50"
          >
            dev.to
          </a>
          <span>&</span>
          <a
            href="https://medium.com/@sujit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors underline decoration-gray-300/30 hover:decoration-white/50"
          >
            medium
          </a>
          <span className="text-amber-400">^_^</span>
        </div>
      </div>

      {/* Removed modal to keep blogs distinct from projects */}
    </section>
  );
}