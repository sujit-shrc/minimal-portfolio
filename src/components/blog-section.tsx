
import { blogPosts } from '@/data/blogs';
import { ExternalLink } from 'lucide-react';

export default function BlogSection() {
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
    <section id="writing" className="mb-12 sm:mb-16">
      <div className="accent-border mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Writing</h2>
        <p className="text-gray-400 text-base sm:text-md mt-2">thoughts on code, linux, and why my dotfiles are better than yours :p</p>
      </div>

      {/* Terminal-style blog list */}
      <div className="space-y-1">
        {list.map((post, index) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-md px-3 py-3 hover:bg-amber-500/5 transition-colors outline-none"
            aria-label={`Read: ${post.title} (${getPlatformDisplay(post.platform)})`}
          >
            <span className="absolute inset-y-1 left-0 w-[2px] rounded bg-amber-400/0 group-hover:bg-amber-400/50 transition-colors" aria-hidden />
            
            <div className="flex flex-col gap-1 min-w-0">
              {/* First line: Number and Title */}
              <div className="flex items-start gap-3">
                <span className="text-amber-400 font-mono text-sm group-hover:text-amber-300 transition-colors flex-shrink-0 mt-0.5 bg-amber-400/10 px-1.5 py-1 rounded">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-gray-300/90 group-hover:text-amber-300 transition-colors text-base">
                      {post.title}
                    </span>
                    
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {post.featured && (
                        <span className="text-amber-400 text-sm sm:text-base">★</span>
                      )}
                      <ExternalLink size={14} className="text-gray-500 group-hover:text-amber-300 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second line: Meta info */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 ml-8">
                <span className="px-1.5 py-0.5 rounded border border-gray-700/50 bg-gray-800/30 text-gray-400 group-hover:text-amber-300 group-hover:border-amber-500/30 transition-colors">
                  {getPlatformDisplay(post.platform)}
                </span>
                <span className="font-mono text-gray-500 group-hover:text-gray-400 transition-colors">{post.readTime} |</span>
                <span className="text-gray-500 group-hover:text-gray-400 transition-colors">{post.publishedDate}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View more */}
      <div className="mt-8 sm:mt-10 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-gray-500 text-base sm:text-md">
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
            href="https://medium.com/@sujit.shrc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors underline decoration-gray-300/30 hover:decoration-white/50"
          >
            medium
          </a>
          <span className="text-amber-400">^_^</span>
        </div>
      </div>
    </section>
  );
}