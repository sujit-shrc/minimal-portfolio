'use client';

import { useState } from 'react';

interface TechStackProps {
  technologies: string[];
  className?: string;
}

export default function TechStack({ technologies, className = '' }: TechStackProps) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className={`${className}`}>
      <div className="flex flex-wrap items-center gap-0.5 text-xs font-mono leading-relaxed max-w-full">
        {technologies.map((tech, index) => (
          <div
            key={tech}
            onMouseEnter={() => setHoveredTech(tech)}
            onMouseLeave={() => setHoveredTech(null)}
            className="group relative"
          >
            <span className={`
              transition-all duration-200 cursor-default font-medium
              ${hoveredTech === tech ? 'text-amber-400' : 'text-gray-400'}
              hover:text-amber-400
            `}>
              {tech}
            </span>
            
            {/* Pipe separator */}
            {index < technologies.length - 1 && (
              <span className="text-gray-600 mx-1.5 group-hover:text-gray-500 transition-colors duration-200 font-light">
                |
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
