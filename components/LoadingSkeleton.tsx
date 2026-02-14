export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-12">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="glass-card overflow-hidden">
          {/* Screenshot skeleton */}
          <div className="aspect-video w-full bg-dark-lighter shimmer" />

          {/* Content skeleton */}
          <div className="p-6">
            {/* Title skeleton */}
            <div className="h-8 bg-dark-lighter shimmer rounded mb-2 w-3/4" />

            {/* Description skeleton */}
            <div className="h-4 bg-dark-lighter shimmer rounded mb-2 w-full" />
            <div className="h-4 bg-dark-lighter shimmer rounded mb-4 w-2/3" />

            {/* Footer skeleton */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-dark-lighter shimmer" />
                <div className="h-4 bg-dark-lighter shimmer rounded w-20" />
              </div>
              <div className="h-6 bg-dark-lighter shimmer rounded-full w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
