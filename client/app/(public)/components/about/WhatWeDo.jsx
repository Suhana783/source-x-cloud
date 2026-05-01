"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../../assets/images/service-hero.png";
import { CheckCircle } from "lucide-react";

export default function WhatWeDo() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  const services = [
    "Build websites and web applications",
    "Develop mobile apps",
    "Set up cloud and servers",
    "Provide business email solutions",
    "Secure your data with backup systems",
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl shadow-md">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={item}
              className="text-sm uppercase tracking-widest text-teal-600 mb-3 font-semibold"
            >
              What We Do
            </motion.p>

            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Solutions Built for{" "}
              <span className="text-teal-500">Modern Businesses</span>
            </motion.h2>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle className="text-teal-500 mt-1 group-hover:scale-110 transition" size={20} />
                  <p className="text-gray-700 leading-relaxed">
                    {service}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={heroImg}
                alt="SourceX Cloud Services"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative element (unique touch) */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-full blur-2xl opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}