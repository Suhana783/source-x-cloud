import { CheckCircle, Shield, Zap, LifeBuoy } from "lucide-react";

const features = [
  {
    title: "Simple & Clear Approach",
    desc: "We simplify complex technology into clear, actionable solutions that are easy to understand and implement.",
    icon: CheckCircle,
  },
  {
    title: "Performance & Security",
    desc: "Every solution is designed for speed, stability, and strong security to ensure reliable operations.",
    icon: Shield,
  },
  {
    title: "Real-World Solutions",
    desc: "We build practical systems that solve real business challenges, not just theoretical features.",
    icon: Zap,
  },
  {
    title: "Long-Term Support",
    desc: "We stay with you after delivery, offering ongoing support, updates, and improvements.",
    icon: LifeBuoy,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-5 lg:20 px-6 md:px-16 text-black">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <p className="text-sm text-teal-600 tracking-widest uppercase mb-2">
          Why Choose Us
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Built for Performance, Designed for Growth
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We combine technical expertise with real-world experience to deliver solutions that actually work and scale with your business.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl bg-[#174a5c] text-white border border-white/10 hover:bg-white/10 transition hover:text-black"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-teal-400/10 text-teal-500">
                <Icon size={22} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed hover:text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}