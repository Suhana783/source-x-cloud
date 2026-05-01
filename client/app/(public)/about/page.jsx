import Navbar from "../components/common/navbar";
import AboutSection from "../components/home/AboutSection";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import WhatWeDo from "../components/about/WhatWeDo";
import CTASection from "../components/home/CTASection"
import Footer from "../components/common/footer"

export default function AboutPage() {
  return (
	<>
	  <Navbar />
	  <AboutSection />
	  <CompanyStory />
	  <MissionVision />
	  <WhatWeDo />
	  <CTASection />
	  <Footer />
	</>
  );
}

