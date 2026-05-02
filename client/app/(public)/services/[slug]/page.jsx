"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchServiceBySlug, fetchServices } from "../../lib/api";
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer";
import HeroSection from "../../components/services/HeroSection";
import IntroductionSection from "../../components/services/IntroductionSection.jsx";
import FeaturesSection from "../../components/services/FeaturesSection";
import IndustriesSection from "../../components/services/IndustriesSection";
import WhySection from "../../components/services/WhySection";
import BottomSection from "../../components/services/BottomSection";
import ServicesTabs from "../../components/services/ServicesTabs";
import { formatServices } from "../../lib/formatServices.js";

export default function ServicePage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [singleService, all] = await Promise.all([
          fetchServiceBySlug(slug),
          fetchServices(),
        ]);

        setService(singleService);
        setAllServices(formatServices(all));
      } catch (err) {
        console.error(err);
      }
    };

    if (slug) {
      loadData();
    }
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

      {/* SERVICES TABS */}
      <ServicesTabs services={allServices} />

      <div className="grid grid-cols-3 gap-6 px-10">
        {/* LEFT EMPTY SPACE */}
        <div></div>

        <div className="col-span-2 space-y-10">
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
        </div>
      </div>
      {/* BOTTOM */}
      {service.sections
        ?.filter((sec) => sec.type === "bottom")
        .map((sec, i) => (
          <BottomSection key={i} section={sec} />
        ))}

      <Footer />
    </div>
  );
}
