'use client';

import { useState } from 'react';
import { workExperience } from '@/data/work-experience';
import { Calendar, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import TechStack from './tech-stack';

export default function WorkExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(workExperience.filter(work => work.current).map(work => work.id))
  );

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const formatDate = (dateStr: string) => {
    // Keep professional format - just return as is
    return dateStr;
  };

  return (
    <section id="experience" className="mb-12 sm:mb-16 lg:mb-20">
      <div className="accent-border mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Career Journey</h2>
        <p className="text-gray-400 text-sm sm:text-base mt-2">places that trusted me with their codebase :p</p>
      </div>

      <div className="space-y-1">
        {workExperience.map((work, index) => {
          const isExpanded = expandedItems.has(work.id);
          const contentId = `work-${work.id}-content`;

          return (
            <div key={work.id} className="group relative">
              {/* Terminal-style experience entry */}
              <div
                role="button"
                aria-expanded={isExpanded}
                aria-controls={contentId}
                tabIndex={0}
                onClick={() => toggleExpanded(work.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpanded(work.id);
                  }
                }}
                className="relative flex items-start sm:items-center gap-2 sm:gap-3 px-1 py-2 sm:px-3 cursor-pointer select-none transition-all duration-300 hover:bg-amber-500/5 rounded-md focus:outline-none focus:bg-amber-500/5 group"
              >
                <span className="absolute inset-y-1 left-0 w-[2px] rounded bg-amber-400/0 group-hover:bg-amber-400/50 transition-all duration-300 pointer-events-none" aria-hidden />
                {/* Terminal prompt */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-green-400 font-mono text-sm">$</span>
                  <span className="text-amber-400 font-mono text-sm">cd</span>
                </div>

                {/* Company logo */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-6 h-6 rounded-md border overflow-hidden transition-all duration-300 ${work.current
                    ? 'border-green-400/50 bg-green-400/10 shadow-sm shadow-green-400/20 animate-pulse'
                    : 'border-gray-700/50 bg-gray-900/50'
                    }`}>
                    <Image
                      src={work.logo}
                      alt={`${work.company} logo`}
                      width={24}
                      height={24}
                      className="w-full h-full object-contain p-0.5"
                    />
                  </div>

                  {/* Status indicator for current positions */}
                  {work.current && (
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse border border-gray-900" />
                  )}
                </div>

                {/* Enhanced terminal content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <div className="flex items-center gap-1.5 min-w-0 flex-1">
                      <span className="text-cyan-400 font-mono text-sm group-hover:text-cyan-300 transition-colors truncate">
                        {work.company.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
                      </span>
                      <span className="text-gray-500 font-mono text-sm">/</span>
                      <span className="text-purple-400 font-mono text-sm group-hover:text-purple-300 transition-colors truncate">
                        {work.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-gray-500 font-mono hidden sm:inline">
                        {formatDate(work.startDate)} - {formatDate(work.endDate)}
                      </span>
                      <div className={`p-1 rounded transition-all duration-300 ${isExpanded
                        ? 'text-amber-400 bg-amber-500/10 rotate-90'
                        : 'text-gray-500 group-hover:text-amber-400 group-hover:bg-amber-500/5'
                        }`}>
                        <ChevronRight size={10} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center sm:hidden mt-1">
                    <span className="text-xs text-gray-500 font-mono">
                      {formatDate(work.startDate)} - {formatDate(work.endDate)}
                    </span>
                  </div>


                </div>
              </div>

              {/* Connection line */}
              {index < workExperience.length - 1 && (
                <div className="ml-2 sm:ml-4 w-px h-2 bg-gradient-to-b from-amber-400/30 via-amber-400/20 to-transparent" />
              )}

              {/* Expandable content */}
              {isExpanded && (
                <div id={contentId} className="ml-2 sm:ml-4 mb-4 animate-in fade-in duration-300">
                  <div className="border-l-2 border-amber-400/30 pl-3 sm:pl-6 space-y-6">
                    {work.description && (
                      <p className="text-gray-300 leading-relaxed">
                        {work.description}
                      </p>
                    )}

                    {work.achievements && work.achievements.length > 0 && (
                      <div>
                        <h4 className="text-base font-semibold text-amber-400 mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 bg-amber-400 rounded-full"></span>
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {work.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-400 flex items-start gap-3 hover:text-gray-300 transition-colors duration-200"
                            >
                              <span className="text-amber-400 mt-1 text-xs font-bold">▸</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {work.technologies && work.technologies.length > 0 && (
                      <div>
                        <h4 className="text-base font-semibold text-amber-400 mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 bg-amber-400 rounded-full"></span>
                          Tech Stack
                        </h4>
                        <TechStack technologies={work.technologies} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}