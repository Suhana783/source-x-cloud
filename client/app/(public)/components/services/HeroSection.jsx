import Image from "next/image";
import heroImg from "../../../../assets/images/service-hero.png";

export default function HeroSection({ section }) {
  if (!section) return null;

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Services Hero"
          fill
          priority
          className="object-cover object-center "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Dynamic Content from Backend */}
      <div className="relative z-10 px-6 md:px-16 max-w-5xl py-20">
        
        <p className="text-sm tracking-widest text-teal-400 uppercase mb-4">
          {section.tagline || "Our Service"}
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          {section.title}
        </h1>

        <p className="text-lg text-gray-200 max-w-2xl">
          {section.subtitle}
        </p>

      </div>

    </section>
  );
}