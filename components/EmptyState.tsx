interface EmptyStateProps {
  activeFilter: string;
}

export default function EmptyState({ activeFilter }: EmptyStateProps) {
  return (
    <div className="text-center py-20 px-4">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-2xl font-bold text-white mb-2">
        No projects found
      </h3>
      <p className="text-white/60">
        {activeFilter === 'All'
          ? 'No projects have been submitted yet. Be the first!'
          : `No projects in the ${activeFilter} category yet.`}
      </p>
      {activeFilter !== 'All' && (
        <p className="text-white/40 text-sm mt-2">
          Try selecting a different category or view all projects
        </p>
      )}
    </div>
  );
}
