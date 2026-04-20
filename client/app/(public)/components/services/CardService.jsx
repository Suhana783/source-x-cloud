"use client";

import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import ServiceFilters from "./ServiceFilters";

const categories = ["All", "Development", "Infrastructure", "Consulting", "IT Services"];

export default function CardService() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/public/services");
        const data = await res.json();
        console.log("API response:", data);

        setServices(data?.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  if (loading) return <p className="text-center py-10">Loading services...</p>;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <ServiceFilters
          categories={categories}
          active={activeCategory}
          setActive={setActiveCategory}
        />

        <p className="text-sm text-gray-500 mb-6">
          Showing {filteredServices?.length || 0} of {services?.length || 0} services
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}