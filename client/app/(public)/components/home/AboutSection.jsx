"use client";

import Image from "next/image";
import heroImg from "../../../../assets/images/service-hero.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function AboutSection() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  //  Container (controls stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Each item animation
  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gray-100 py-5 lg:py-10 px-6 md:px-16 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src={heroImg}
            alt="SourceXCloud Team"
            priority={isAboutPage}
            className="rounded-2xl shadow-xl w-full object-cover"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
        </motion.div>

        {/* CONTENT WITH STAGGER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={item}
            className="text-sm tracking-widest text-teal-600 mb-3 uppercase"
          >
            About SourceXCloud
          </motion.p>

          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            One Platform.{" "}
            <span className="text-teal-500">Build, Scale & Learn.</span>
          </motion.h2>

          <motion.p variants={item} className="text-gray-600 mb-4 leading-relaxed">
            At SourceXCloud, we help businesses build reliable and scalable
            digital systems — from modern websites and applications to secure
            cloud infrastructure, email solutions, and enterprise-grade
            servers.
          </motion.p>

          <motion.p variants={item} className="text-gray-600 mb-4 leading-relaxed">
            Our mission is simple: make technology seamless so you can focus
            on growth, innovation, and real impact.
          </motion.p>

          <motion.p variants={item} className="text-gray-600 mb-6 leading-relaxed">
            Beyond services, we empower individuals through practical,
            real-world courses that teach modern technologies and
            industry-ready skills.
          </motion.p>

          {/* EXTRA CONTENT (only on about page) */}
          {isAboutPage && (
            <>
              <motion.p variants={item} className="text-gray-600 mb-4 leading-relaxed">
                We don't just deliver technology — we deeply understand your
                business goals and create solutions that align with your
                long-term vision, ensuring scalability and sustainability.
              </motion.p>

              <motion.p variants={item} className="text-gray-600 mb-6 leading-relaxed">
                Our approach blends real-world experience with continuous
                innovation, allowing us to build impactful systems while also
                empowering individuals with practical, job-ready skills.
              </motion.p>
            </>
          )}

          {/* BUTTON */}
          {!isAboutPage && (
            <motion.div variants={item}>
              <Link href="/about">
                <button className="bg-teal-400 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
                  Read more →
                </button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}