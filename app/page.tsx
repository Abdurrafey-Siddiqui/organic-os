import HeroSection from "@/components/HeroSection";
import MetricsStrip from "@/components/MetricsStrip";
import PainAgitationSolutionSection from "@/components/PainAgitationSolutionSection";
import SocialProofSection from "@/components/SocialProofSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MetricsStrip />
      <PainAgitationSolutionSection />
      <SocialProofSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
