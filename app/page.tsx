import Hero from "@/components/sections/Hero";
import SchoolReferences from "@/components/sections/SchoolReferences";
import WhyEnoksis from "@/components/sections/WhyEnoksis";
import PlatformShowcase from "@/components/sections/PlatformShowcase";
import WhoIsItFor from "@/components/sections/WhoIsItFor";
import EnrehetSection from "@/components/sections/EnrehetSections";
import TemperamentSection from "@/components/sections/TemperamentSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <SchoolReferences />
      <WhyEnoksis />
      <PlatformShowcase />
      <WhoIsItFor />
      <EnrehetSection />
      <TemperamentSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}