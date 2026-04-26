"use client";

export default function Hero() {
  return (
    <section
      className="w-full min-h-[60vh] flex items-center 
      bg-linear-to-r from-[#053947] via-[#1a4b5a] to-[#1e5e73] text-white px-6"
    >
      <div className="max-w-3xl">

        {/* HEADING */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Build, Launch & Scale <br />
          Your Business with{" "}
          <span className="bg-linear-to-r from-[#08b4c0] via-[#95daf0] to-[#2ac0c8]
                 bg-clip-text text-transparent font-extrabold italic">
            Technology
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
          Learn, Build, and Scale with SourceXCloud — a unified platform for world-class
          <br />
          tech education and enterprise-grade IT services.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap">

          {/* GREEN BUTTON (DARKER + GLOW) */}
          <button className="px-6 py-3 rounded-lg font-semibold 
          bg-green-500 hover:bg-green-600 
          shadow-lg shadow-green-500/40 
          hover:shadow-green-400/60 
          transition duration-300">
            Explore Courses →
          </button>

          {/* SECOND BUTTON */}
          <button className="px-6 py-3 rounded-lg font-medium 
          border border-white/30 hover:bg-white/10 transition duration-300">
            Get IT Services
          </button>

        </div>

      </div>
    </section>
  );
}