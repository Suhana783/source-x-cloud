import Navbar from "./(public)/components/common/navbar";
import Footer from "./(public)/components/common/footer";
import Hero from "./(public)/components/home/hero";
import AboutSection from "./(public)/components/home/AboutSection"
import WhatWeDo from "./(public)/components/home/WhatWeDo"
import WhyChooseUs from './(public)/components/home/WhyChooseUs'
import CTASection from './(public)/components/home/CTASection'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HEADER */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="grow">
        <Hero />
        <AboutSection />
        <WhatWeDo />
        <WhyChooseUs />
        <CTASection />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}