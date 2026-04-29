"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#011C26] px-4 sm:px-8 py-16 md:py-20">
    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#025959_0%,_#011C26_80%)] opacity-100" />
      
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[#0F8C8C]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.05)_0%,_transparent_50%)] pointer-events-none" />

      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#0F8C8C 0.8px, transparent 0.8px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Build Your Future <br />
            with{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#20e3b2] via-[#a5f3e1] to-[#20e3b2] bg-clip-text text-transparent italic font-extrabold">
                Technology
              </span>
            
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path d="M4 9C40 4.5 150 2 296 9" stroke="url(#under_grad)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="under_grad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#20e3b2" /><stop offset="50%" stopColor="#a5f3e1" /><stop offset="100%" stopColor="#20e3b2" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="text-lg text-slate-300/90 leading-relaxed max-w-lg mx-auto md:mx-0">
            Learn, Build, and Scale with <span className="text-white font-semibold">SourceXCloud</span> — a unified platform for world-class tech education and enterprise-grade IT services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-[#00df81] text-[#011C26] hover:bg-[#00f08b] transition-all shadow-lg shadow-green-500/20 active:scale-95">
              Explore Courses →
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold border border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md transition-all">
              Get IT Services
            </button>
          </div>
        </div>

        <div className="relative hidden md:flex justify-end">
          
       
          <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 shadow-[0_0_60px_rgba(255,255,255,0.03)] w-full max-w-[440px] aspect-square flex flex-col justify-between">
            
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 shadow-sm"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 shadow-sm"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 shadow-sm"></div>
              </div>
              <div className="ml-4 flex-grow h-[1px] bg-white/5"></div>
              <span className="text-[10px] font-mono text-white/20 tracking-widest">SOURCE X CLOUD</span>
            </div>

            <div className="flex-grow flex flex-col justify-center space-y-6">
        
               <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0F8C8C]/20 flex items-center justify-center border border-[#0F8C8C]/30 text-[#0F8C8C]">
                        ⚡
                    </div>
                    <p className="text-white font-bold">Devops Engineering</p>
                    <span className="ml-auto text-[10px] text-[#20e3b2]">68%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#20e3b2] to-[#0F8C8C] h-full w-[68%] rounded-full" />
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/5 flex flex-col justify-center min-h-[140px]">
                    <p className="text-[10px] font-bold text-[#20e3b2] uppercase tracking-widest mb-2">Next Live Session</p>
                    <p className="text-sm font-bold text-white leading-tight">Start your career today</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/5 flex flex-col justify-center min-h-[140px]">
                    <p className="text-xs font-bold text-white leading-tight opacity-90">Build Your Online Presence with SourceXCloud</p>
                  </div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}