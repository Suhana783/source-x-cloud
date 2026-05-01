"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../../assets/images/service-hero.png";

export default function MissionVision() {
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission: {
      title: "Company Mission",
      text: `At SourceX Cloud, our mission is to empower businesses and individuals
with modern cloud, DevOps, and digital solutions that are simple, scalable,
and future-ready. We aim to bridge the gap between technology and real-
world business needs by delivering reliable IT services, practical training,
and innovative cloud solutions.`,
    },
    vision: {
      title: "Company Vision",
      text: `Our vision is to become a globally trusted technology partner that helps
startups, businesses, and learners grow through cloud computing,
automation, cybersecurity, and next-generation digital infrastructure. We
want to create a future where technology is accessible, affordable, and
impactful for everyone.`,
    },
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TOGGLE */}
        <div className="flex justify-center mb-12">
          <div className="bg-white shadow-md rounded-full p-1 flex">
            {["mission", "vision"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-teal-500 text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {tab === "mission" ? "Our Mission" : "Our Vision"}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={heroImg}
                alt="SourceX Cloud Team"
                className="w-full object-cover"
              />
            </div>

            {/* subtle design element */}
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-teal-100 rounded-full blur-2xl opacity-60"></div>
          </motion.div>

          {/* TEXT */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {content[activeTab].title}
                </h2>

                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {content[activeTab].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}