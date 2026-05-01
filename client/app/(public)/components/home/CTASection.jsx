import { ArrowRight, MessageCircle, BookOpen } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-5 lg:py-20 px-6 md:px-16 bg-gray-100">
      <div className="max-w-6xl mx-auto rounded-2xl bg-gradient-to-r from-[#0c3f52] to-[#0a2c3a] p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="text-sm text-teal-300 tracking-widest uppercase mb-3">
            Get Started
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Ready to build and grow with technology?
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            We build powerful systems for businesses and share the same expertise
            through practical, real-world courses.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
            <p>✔ Scalable solutions</p>
            <p>✔ Real-world learning</p>
            <p>✔ Expert support</p>
            <p>✔ Future-ready tech</p>
          </div>
        </div>

        {/* RIGHT CTA BUTTONS */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
           {/* /contact */}
          <button className="flex items-center justify-center gap-2 bg-teal-400 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
            Start Your Project <ArrowRight size={18} />
          </button>

          <button className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 px-6 py-3 rounded-lg hover:bg-white/20 transition">
            Explore Courses <BookOpen size={18} />  
          </button>
            {/* /whatsApp link */}
          <button className="flex items-center justify-center gap-2 border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition shadow-[0_0_20px_rgba(45,212,191,0.4)]">
            Talk to Us <MessageCircle size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}