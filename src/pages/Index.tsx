import { StickyHeader } from "@/components/lander/StickyHeader";
import { HeroSection } from "@/components/lander/HeroSection";
import { ProblemSection } from "@/components/lander/ProblemSection";
import { ExplanationSection } from "@/components/lander/ExplanationSection";
import { TestimonialsSection } from "@/components/lander/TestimonialsSection";
import { FaqSection } from "@/components/lander/FaqSection";
import { Footer } from "@/components/lander/Footer";
import { MobileStickyCta } from "@/components/lander/MobileStickyCta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <ExplanationSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
};

export default Index;
