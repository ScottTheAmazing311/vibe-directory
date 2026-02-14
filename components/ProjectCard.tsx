import type { Project } from '@/lib/types';
import { getCategoryColor, getCreatorInitial } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-card card-hover-glow overflow-hidden">
      {/* Screenshot */}
      <div className="aspect-video w-full overflow-hidden bg-dark-lighter">
        <img
          src={project.screenshotUrl}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Project name - clickable */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold text-white hover:text-electric-blue transition-colors duration-200 block mb-2"
        >
          {project.name}
        </a>

        {/* Description */}
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Footer: Creator and Category */}
        <div className="flex items-center justify-between">
          {/* Creator with initial avatar */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue to-accent-purple flex items-center justify-center text-white text-sm font-bold">
              {getCreatorInitial(project.creator)}
            </div>
            <span className="text-white/70 text-sm">{project.creator}</span>
          </div>

          {/* Category badge */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(
              project.category
            )}`}
          >
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
}
