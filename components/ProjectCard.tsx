import type { Project } from '@/lib/types';
import { getCategoryColor, getCreatorInitial } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="retro-card overflow-hidden group">
      {/* Category badge - top corner */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`px-3 py-1 text-xs font-mono font-bold uppercase border-2 border-retro-black ${getCategoryColor(
            project.category
          )} text-retro-black`}
        >
          {project.category}
        </span>
      </div>

      {/* Screenshot */}
      <div className="aspect-video w-full overflow-hidden bg-retro-gray-200 border-b-3 border-retro-black relative">
        <img
          src={project.screenshotUrl}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-retro-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 bg-retro-white">
        {/* Project name - clickable */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-3 group/link"
        >
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover/link:translate-x-1 transition-transform duration-200">
            {project.name}
            <span className="inline-block ml-2 text-retro-yellow group-hover/link:translate-x-1 transition-transform duration-200">→</span>
          </h3>
        </a>

        {/* Description */}
        <p className="text-retro-gray-800 text-sm md:text-base mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Footer: Creator */}
        <div className="flex items-center gap-3 pt-4 border-t-2 border-retro-gray-200">
          <div className="w-10 h-10 bg-retro-black flex items-center justify-center">
            <span className="text-retro-yellow font-mono font-bold text-sm">
              {getCreatorInitial(project.creator)}
            </span>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-retro-gray-800">
              Created by
            </p>
            <p className="font-bold text-sm">
              {project.creator}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
