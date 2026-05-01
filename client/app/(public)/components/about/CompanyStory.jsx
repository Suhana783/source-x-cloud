"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../../assets/images/service-hero.png";

export default function CompanyStory() {
  return (
    <section className="w-full py-5 bg-gray-100 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          
          viewport={{ 
            once: true, 
            amount: 0.4   // triggers when 40% visible
          }}
        >
          <p className="text-sm uppercase tracking-wide text-teal-600 font-semibold">
            Our Story
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            How We Thought About{" "}
            <span className="text-teal-500">Starting This Company</span>
          </h2>

          <p className="mb-4 leading-relaxed">
            SourceX Cloud was started with the idea of solving real-world{" "}
            <span className="font-medium text-gray-900">
              technology problems
            </span>{" "}
            while helping people build strong careers in IT.
          </p>

          <p className="mb-4 leading-relaxed">
            We noticed that many businesses struggle with{" "}
            <span className="text-teal-600 font-medium">
              cloud infrastructure, automation, security,
            </span>{" "}
            and scalable deployments, while students often lack{" "}
            <span className="text-teal-600 font-medium">
              practical industry exposure.
            </span>
          </p>

          <p className="mb-4 leading-relaxed">
            That inspired us to build a company that not only provides{" "}
            <span className="font-medium text-gray-900">
              professional cloud and DevOps solutions
            </span>{" "}
            but also focuses on practical learning and skill development.
          </p>

          <p className="leading-relaxed">
            Our goal is to create a platform where{" "}
            <span className="text-teal-600 font-medium">
              innovation, real-world experience,
            </span>{" "}
            and modern technology come together to support both businesses and
            future IT professionals.
          </p>
        </motion.div>

        {/* RIGHT - IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          
          viewport={{ 
            once: true, 
            amount: 0.4 
          }}
          className="relative"
        >
          <Image
            src={heroImg}
            alt="Team"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}