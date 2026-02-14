interface HeaderProps {
  onSubmitClick: () => void;
}

export default function Header({ onSubmitClick }: HeaderProps) {
  return (
    <header className="border-b-4 border-retro-black bg-retro-white accent-stripe">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top nav bar */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-retro-black flex items-center justify-center">
              <div className="w-6 h-6 bg-retro-yellow"></div>
            </div>
            <span className="font-mono text-sm font-bold tracking-wider">VIBE.DIRECTORY</span>
          </div>
          <button
            onClick={onSubmitClick}
            className="retro-button px-6 py-3 text-sm md:text-base"
          >
            Submit Project
          </button>
        </div>

        {/* Main heading */}
        <div className="space-y-6">
          <h1 className="retro-title text-6xl md:text-8xl lg:text-9xl">
            <span className="block">PROJECTS</span>
            <span className="block text-retro-gray-300 -mt-2 md:-mt-4">BUILT ON</span>
            <span className="block -mt-2 md:-mt-4">PURE VIBES</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-1 w-20 bg-retro-black"></div>
            <p className="font-mono text-sm md:text-base uppercase tracking-wider">
              A curated showcase of independently built digital experiences
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
