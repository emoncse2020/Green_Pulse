import { HeroSection } from "@/components/home/HeroSection";
import { ImpactStatsSection } from "@/components/home/ImpactStatsSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CoreFeaturesSection } from "@/components/home/CoreFeaturesSection";
import { FeaturedIdeasSection } from "@/components/home/FeaturedIdeasSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <div className="bg-[#f4f1ea] dark:bg-[#07140f]">
      <HeroSection />
      <ImpactStatsSection />
      <CategoriesSection />
      <FeaturedIdeasSection />
      <HowItWorksSection />
      <CoreFeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <NewsletterSection />
    </div>
  );
}
