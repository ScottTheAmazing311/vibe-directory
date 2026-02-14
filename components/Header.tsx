interface HeaderProps {
  onSubmitClick: () => void;
}

export default function Header({ onSubmitClick }: HeaderProps) {
  return (
    <header className="text-center py-12 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
        Vibe Directory
      </h1>
      <p className="text-xl md:text-2xl text-white/60 mb-8">
        the best things built on vibes
      </p>
      <button
        onClick={onSubmitClick}
        className="px-8 py-3 bg-electric-blue/20 border border-electric-blue/50 rounded-full text-electric-blue font-semibold hover:bg-electric-blue/30 hover:shadow-glow-blue transition-all duration-300"
      >
        Submit a Project
      </button>
    </header>
  );
}
