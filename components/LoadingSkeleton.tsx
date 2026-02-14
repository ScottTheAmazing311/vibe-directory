export default function LoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid-pattern">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="retro-card overflow-hidden animate-pulse">
            {/* Screenshot skeleton */}
            <div className="aspect-video w-full bg-retro-gray-200 border-b-3 border-retro-black" />

            {/* Content skeleton */}
            <div className="p-6 bg-retro-white">
              {/* Title skeleton */}
              <div className="h-8 bg-retro-gray-200 border-2 border-retro-gray-300 mb-3 w-3/4" />

              {/* Description skeleton */}
              <div className="h-4 bg-retro-gray-200 border border-retro-gray-300 mb-2 w-full" />
              <div className="h-4 bg-retro-gray-200 border border-retro-gray-300 mb-4 w-2/3" />

              {/* Footer skeleton */}
              <div className="flex items-center gap-3 pt-4 border-t-2 border-retro-gray-200">
                <div className="w-10 h-10 bg-retro-gray-300 border-2 border-retro-black" />
                <div className="flex-1">
                  <div className="h-3 bg-retro-gray-200 border border-retro-gray-300 mb-1 w-20" />
                  <div className="h-4 bg-retro-gray-200 border border-retro-gray-300 w-24" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
