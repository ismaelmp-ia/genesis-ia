import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FounderSection from "@/components/FounderSection";
import Results from "@/components/Results";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <SectionDivider />
    <VideoSection />
    <SectionDivider />
    <PainPoints />
    <SectionDivider />
    <Services />
    <SectionDivider />
    <HowItWorks />
    <SectionDivider />
    <FounderSection />
    <SectionDivider />
    <Results />
    <SectionDivider />
    <CtaSection />
    <SectionDivider />
    <Faq />
    <SectionDivider />
    <Footer />
  </>
);

export default Index;
