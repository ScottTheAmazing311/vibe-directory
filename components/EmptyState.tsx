interface EmptyStateProps {
  activeFilter: string;
}

export default function EmptyState({ activeFilter }: EmptyStateProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 grid-pattern">
      <div className="retro-card p-12 text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-retro-gray-200 border-3 border-retro-black flex items-center justify-center">
          <div className="text-5xl">∅</div>
        </div>
        <h3 className="retro-title text-4xl mb-4">
          NO PROJECTS FOUND
        </h3>
        <p className="font-mono text-retro-gray-800 mb-2">
          {activeFilter === 'All'
            ? 'No projects have been submitted yet. Be the first!'
            : `No projects in the ${activeFilter} category yet.`}
        </p>
        {activeFilter !== 'All' && (
          <p className="font-mono text-sm text-retro-gray-800 mt-4">
            → Try selecting a different category
          </p>
        )}
      </div>
    </div>
  );
}
