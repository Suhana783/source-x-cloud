"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Smartphone,
  Cloud,
  Mail,
  Database,
  Server,
  Briefcase,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

//  Map backend string → icon component
const iconMap = {
  globe: Globe,
  code: Code2,
  mobile: Smartphone,
  cloud: Cloud,
  mail: Mail,
  database: Database,
  server: Server,
  consulting: Briefcase,
  ecommerce: ShoppingCart,
};

export default function ServiceCard({ service }) {
  //  Get correct icon or fallback
  const Icon = iconMap[service.icon?.toLowerCase()] || Globe;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative bg-white border border-gray-300 rounded-xl p-5 transition-all duration-300 hover:shadow-lg group"
    >
      {/* Hover corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-teal-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition"></div>

      {/* Icon */}
      <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#1f5f7a] to-[#2d7fa3] text-white mb-4">
        <Icon size={20} />
      </div>

      {/* Title + Tag */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-800">
          {service.title}
        </h3>

        <span className="text-[10px] px-2 py-[2px] rounded-full bg-teal-100 text-teal-900 font-medium">
          {service.tag}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 mb-4">
        {service.description}
      </p>

      {/* CTA */}
      <Link
        href={`/services/${service.slug}`}
        className="text-xs text-blue-600 font-medium hover:underline flex items-center"
      >
        View Service <span className="ml-1"><ArrowRight size={14} /></span>
      </Link>
    </motion.div>
  );
}       