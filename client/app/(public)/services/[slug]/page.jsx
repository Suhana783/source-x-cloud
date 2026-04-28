"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchServiceBySlug } from "../../lib/api";
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer";
import HeroSercices from "../../components/services/heroSercices.jsx";

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
      <HeroSercices />

    <div className="p-10 space-y-10">

      {/* HERO */}
      {service.sections
        ?.filter((sec) => sec.type === "hero")
        .map((sec, i) => (
          <div key={i}>
            <h1 className="text-4xl font-bold">{sec.title}</h1>
            <p className="text-lg text-gray-600">{sec.subtitle}</p>
            <p className="text-sm text-gray-500">{sec.tagline}</p>
          </div>
        ))}

      {/* INTRO */}
      {service.sections
        ?.filter((sec) => sec.type === "introduction")
        .map((sec, i) => (
          <div key={i}>
            <h2 className="text-2xl font-semibold">{sec.title}</h2>
            <p>{sec.content}</p>
          </div>
        ))}

      {/* FEATURES */}
      {service.sections
        ?.filter((sec) => sec.type === "features")
        .map((sec, i) => (
          <div key={i}>
            <h2 className="text-2xl font-semibold">{sec.title}</h2>
            <ul className="list-disc ml-5">
              {sec.items?.map((item, j) => (
                <li key={j}>{item.text}</li>
              ))}
            </ul>
          </div>
        ))}

    </div>
      <Footer />
    </div>
  );
}