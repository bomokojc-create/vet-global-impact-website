import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedBanner from "@/components/FeaturedBanner";
import MissionSection from "@/components/MissionSection";
import ImpactSection from "@/components/ImpactSection";
import ProgramsPreview from "@/components/ProgramsPreview";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedBanner />
        <MissionSection />
        <ProgramsPreview />
        <ImpactSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
