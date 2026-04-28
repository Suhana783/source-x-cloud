import Image from "next/image";
import heroImg from "../../../../assets/images/service-hero.png";

export default function HeroSercices() {
  return (
    <section className="relative bg-gradient-to-r from-[#1f5f7a] to-[#2d7fa3] text-white py-20 px-6 md:px-16 flex overflow-hidden">
      
      {/* Content */}
      <div className="max-w-5xl z-10">
        
        <p className="text-sm tracking-widest text-teal-500 uppercase mb-4">
          IT Services Marketplace
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Enterprise-grade engineering, on demand.
        </h1>

        <p className="text-lg text-gray-200 max-w-2xl">
          Browse our service catalog and engage a senior team to ship outcomes —
          from cloud migration to AI deployment.
        </p>

      </div>

      {/* Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src={heroImg}
          alt="Services Hero"
          className="w-full h-full object-cover object-top"
        />
      </div>

    </section>
  );
}