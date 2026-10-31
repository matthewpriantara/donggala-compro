import { PatternDivider } from "@/components/ui/pattern-divider";
import { TENUN_DIVIDER_IMAGE } from "@/constants/helper";
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
      <PatternDivider imageUrl={TENUN_DIVIDER_IMAGE} />
      <ServicesSection />
      <PatternDivider imageUrl={TENUN_DIVIDER_IMAGE} />
      <JourneySection />
      <CultureSection />
      <ContactSection />
    </>
  );
}
