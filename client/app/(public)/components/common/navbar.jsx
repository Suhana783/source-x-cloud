"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { formatServices } from "../../lib/formatServices";
import { fetchServices } from "../../lib/api";

export default function Navbar() {
  const [servicesData, setServicesData] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        const formatted = formatServices(data);
        setServicesData(formatted);
      } catch (err) {
        console.error("Error loading services", err);
      }
    };

    loadServices();
  }, []);

  return (
    <nav className="w-full bg-gray-100 border-b relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-[#2d7fa3] text-white px-2 py-1 rounded-md text-sm font-bold">
            {"</>"}
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            SourceXCloud
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-gray-700">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("services")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span className="cursor-pointer flex items-center gap-1">
              Services ▾
            </span>

            {activeMenu === "services" && (
              <div className="absolute top-full right-0 bg-white shadow-xl rounded-md w-[320px] py-3 z-50">

                {servicesData.map((service, i) => (
                  <div key={i} className="relative group">

                    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-gray-700 hover:text-blue-600 w-full"
                      >
                        {service.title}
                      </Link>

                      {service.children && (
                        <span className="text-gray-400 group-hover:text-black">+</span>
                      )}
                    </div>

                    {service.children && (
                      <div className="absolute top-0 left-full ml-1 hidden group-hover:block bg-white shadow-xl rounded-md w-[260px] py-3">

                        {service.children.map((sub, j) => (
                          <Link
                            key={j}
                            // href={`/services/${service.slug}/${sub.slug}`}
                            href={`/services/${sub.slug}`} 
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          >
                            {sub.title}
                          </Link>
                        ))}

                      </div>
                    )}
                  </div>
                ))}

              </div>
            )}
          </div>

          <Link href="/courses">Courses</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3 text-gray-700">

          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>

          {/* MOBILE SERVICES */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() =>
                setMobileServiceOpen(
                  mobileServiceOpen === "services" ? null : "services"
                )
              }
            >
              <span>Services</span>
              <span>{mobileServiceOpen === "services" ? "-" : "+"}</span>
            </div>

            {mobileServiceOpen === "services" && (
              <div className="mt-2 pl-3 space-y-2">

                {servicesData.map((service, i) => (
                  <div key={i}>

                    <div
                      className="flex justify-between cursor-pointer"
                      onClick={() =>
                        setMobileServiceOpen(
                          mobileServiceOpen === i ? null : i
                        )
                      }
                    >
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>

                      {service.children && <span>+</span>}
                    </div>

                    {mobileServiceOpen === i && service.children && (
                      <div className="pl-4 mt-1 space-y-1">
                        {service.children.map((sub, j) => (
                          <Link
                            key={j}
                            href={`/services/${service.slug}/${sub.slug}`}
                            className="block text-sm text-gray-600"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

              </div>
            )}
          </div>

          <Link href="/courses" className="block">Courses</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}