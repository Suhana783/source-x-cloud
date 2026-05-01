import {
  Globe,
  Smartphone,
  Cloud,
  Mail,
  DatabaseBackup,
  Server,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    title: "Website & Web Application Development",
    desc: "We build fast, scalable, and modern websites and web apps tailored to your business needs.",
    icon: Globe,
  },
  {
    title: "Cloud Setup & Deployment",
    desc: "Deploy and manage your applications on AWS, Azure, or GCP with optimized performance.",
    icon: Cloud,
  },
  {
    title: "Business Email Solutions",
    desc: "Professional and secure email systems for smooth communication and collaboration.",
    icon: Mail,
  },
  {
    title: "Backup & Data Protection",
    desc: "Protect your data with automated backups, recovery systems, and security practices.",
    icon: DatabaseBackup,
  },
  {
    title: "Server Management",
    desc: "Reliable server setup, monitoring, and maintenance for uninterrupted performance.",
    icon: Server,
  },
  {
    title: "Practical Tech Courses",
    desc: "Learn real-world technologies with hands-on training designed for career growth.",
    icon: GraduationCap,
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-gray-100 py-5 lg:10 px-6 md:px-16">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-teal-600 tracking-widest uppercase mb-2">
          What We Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Solutions That Help You{" "}
          <span className="text-teal-600">Build & Grow</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 mb-4">
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* CTA */}
              <button className="mt-4 text-sm text-teal-600 font-medium hover:underline">
                Learn more →
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}