"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchServiceBySlug } from "../../lib/api";
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer";
import HeroSection from "../../components/services/HeroSection";
import IntroductionSection from "../../components/services/IntroductionSection.jsx";
import FeaturesSection from "../../components/services/FeaturesSection";
import IndustriesSection from "../../components/services/IndustriesSection";
import WhySection from "../../components/services/WhySection";
import BottomSection from "../../components/services/BottomSection";

export default function ServicePage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const loadService = async () => {
      try {
        const data = await fetchServiceBySlug(slug);
        setService(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (slug) loadService();
  }, [slug]);

  if (!service) return <div className="p-10">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

        {/* HERO */}
      {service.sections
        ?.filter((sec) => sec.type === "hero")
        .map((sec, i) => (
          <HeroSection key={i} section={sec} />
        ))}


    <div className="px-10 space-y-10">

    
      {/* INTRO */}
      {service.sections
        ?.filter((sec) => sec.type === "introduction")
        .map((sec, i) => (
          <IntroductionSection key={i} section={sec} />
        ))}


      {/* FEATURES */}
      {service.sections
        ?.filter((sec) => sec.type === "features")
        .map((sec, i) => (
          <FeaturesSection key={i} section={sec} />
        ))}

      {/* INDUSTRIES */}
      {service.sections
        ?.filter((sec) => sec.type === "industries")
        .map((sec, i) => (
          <IndustriesSection key={i} section={sec} />
        ))}

      {/* WHY */}
      {service.sections
        ?.filter((sec) => sec.type === "why")
        .map((sec, i) => (
          <WhySection key={i} section={sec} />
        ))}

      {/* BOTTOM */}
      {service.sections
        ?.filter((sec) => sec.type === "bottom")
        .map((sec, i) => (
          <BottomSection key={i} section={sec} />
        ))}

    </div>
      <Footer />
    </div>
  );
}