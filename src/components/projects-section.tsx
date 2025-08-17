'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import { personalInfo } from '@/data/personal-info';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import TechStack from './tech-stack';

export default function ProjectsSection() {
  const visibleProjects = useMemo(() => projects.slice(0, 6), []);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(visibleProjects.length > 0 ? [visibleProjects[0].id] : [])
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



  return (
    <section id="projects" className="mb-12 sm:mb-16">
      <div className="accent-border mb-8 sm:mb-10">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Selected Work</h2>
          <div className="hidden sm:flex items-center gap-1 text-sm sm:text-base font-mono text-gray-500 bg-gray-900/40 px-2 py-1 rounded">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            <span>{visibleProjects.length} active</span>
          </div>
        </div>
        <p className="text-gray-400 text-base sm:text-md mt-2">things I&#39;ve built that don&#39;t completely suck :p</p>
      </div>

      {/* Projects list in terminal ls format */}
      <div className="space-y-1">
        {visibleProjects.map((project, index) => {
          const isExpanded = expandedItems.has(project.id);
          const contentId = `project-${project.id}-content`;

          return (
            <div key={project.id} className="group relative">
              <div
                role="button"
                aria-expanded={isExpanded}
                aria-controls={contentId}
                tabIndex={0}
                onClick={() => toggleExpanded(project.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpanded(project.id);
                  }
                }}
                className="relative flex items-center gap-2 sm:gap-3 px-1 py-2 sm:px-3 cursor-pointer select-none transition-all duration-300 hover:bg-amber-500/5 rounded-md focus:outline-none focus:bg-amber-500/5"
              >
                <span className="absolute inset-y-1 left-0 w-[2px] rounded bg-amber-400/0 group-hover:bg-amber-400/50 transition-all duration-300 pointer-events-none" aria-hidden />
                {/* Terminal prompt */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-green-400 font-mono text-base sm:text-md">$</span>
                  <span className="text-amber-400 font-mono text-base sm:text-md">z</span>
                </div>

                {/* Project content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-cyan-400 font-mono text-base sm:text-md group-hover:text-cyan-300 transition-colors truncate">
                      {project.title.toLowerCase()}
                    </span>
                    {project.featured && (
                      <span className="text-amber-400 text-sm sm:text-base">★</span>
                    )}
                    {/* Status indicator after title/featured */}
                    <div className={`w-2 h-2 rounded-full ${project.status === 'completed' ? 'bg-green-400' :
                      project.status === 'in-progress' ? 'bg-amber-400 animate-pulse' :
                        'bg-blue-400'
                      }`} />
                  </div>
                </div>

                {/* Date and expand button - always on the right */}
                <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
                  <span className="text-xs sm:text-sm text-gray-500 font-mono hidden sm:inline">
                    {project.startDate} - {project.endDate || 'Present'}
                  </span>
                  <div className={`p-1 rounded transition-all duration-300 ${isExpanded
                    ? 'text-amber-400 bg-amber-500/10 rotate-90'
                    : 'text-gray-500 group-hover:text-amber-400 group-hover:bg-amber-500/5'
                    }`}>
                    <ChevronRight size={10} />
                  </div>
                </div>
              </div>

              {/* Mobile date display */}
              <div className="flex items-center sm:hidden mt-1 ml-8">
                <span className="text-xs sm:text-sm text-gray-500 font-mono">
                  {project.startDate} - {project.endDate || 'Present'}
                </span>
              </div>

              {/* Expanded content right below */}
              {isExpanded && (
                <div id={contentId} className="ml-2 sm:ml-4 mb-6 animate-in fade-in duration-300">
                  <div className="border-l-2 border-amber-400/30 pl-3 sm:pl-6 space-y-6">
                    {/* Project description */}
                    {project.description && (
                      <p className="text-gray-300 leading-relaxed text-base sm:text-md">
                        {project.description}
                      </p>
                    )}

                    {/* Key Features/Achievements */}
                    {project.achievements && project.achievements.length > 0 && (
                      <div>
                        <h4 className="text-md sm:text-xl font-semibold text-amber-400 mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 bg-amber-400 rounded-full"></span>
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {project.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-base sm:text-md text-gray-400 flex items-start gap-3 hover:text-gray-300 transition-colors duration-200"
                            >
                              <span className="text-amber-400 mt-1 text-sm sm:text-base font-bold">▸</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div>
                        <h4 className="text-md sm:text-xl font-semibold text-amber-400 mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 bg-amber-400 rounded-full"></span>
                          Tech Stack
                        </h4>
                        <TechStack technologies={project.technologies} />
                      </div>
                    )}

                    {/* Project Links */}
                    {(project.githubUrl || project.liveUrl) && (
                      <div className="flex items-center gap-4 pt-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-base sm:text-md text-gray-400 hover:text-amber-300 transition-colors"
                          >
                            <Github size={14} />
                            <span>View Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-base sm:text-md text-gray-400 hover:text-amber-300 transition-colors"
                          >
                            <ExternalLink size={14} />
                            <span>View Live</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Connection line */}
              {index < visibleProjects.length - 1 && (
                <div className="ml-2 sm:ml-4 w-px h-2 bg-gradient-to-b from-amber-400/30 via-amber-400/20 to-transparent" />
              )}
            </div>
          );
        })}
      </div>

      {/* Enhanced view more */}
      <div className="mt-8 sm:mt-10 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-gray-500 text-base sm:text-md group">
          <span>more experiments on</span>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-all duration-200 underline decoration-amber-400/30 hover:decoration-amber-300/50 hover:scale-105"
          >
            <Github size={14} />
            <span>github</span>
          </a>
          <span>& scattered across the internet</span>
          <span className="text-amber-400 group-hover:animate-bounce">^_^</span>
        </div>
      </div>
    </section>
  );
}