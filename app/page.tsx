import { HeroSection } from "@/modules/hero";
import { AboutSection } from "@/modules/about";
import { ServicesSection } from "@/modules/services";
import { JourneySection } from "@/modules/journey/journey-section";
import { CultureSection } from "@/modules/culture/culture-section";
import { ContactSection } from "@/modules/contact";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <JourneySection />
      <CultureSection />
      <ContactSection />
    </>
  );
}
