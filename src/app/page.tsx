'use client';

import CyberpunkNav from "@/components/CyberpunkNav";
import CyberpunkHero from "@/components/CyberpunkHero";
import AboutESummit from "@/components/AboutESummit";
import EventsGrid from "@/components/EventsGrid";
import PoweredBySection from "@/components/PoweredBySection";
import LegacyAllies from "@/components/LegacyAllies";
import OfficialPartners from "@/components/OfficialPartners";
import EnhancedFooter from "@/components/EnhancedFooter";
import SpiralBackground from "@/components/SpiralBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-white relative">
      <SpiralBackground />
      <CyberpunkNav />
      <CyberpunkHero />
      <AboutESummit />
      <EventsGrid />
      <PoweredBySection />
      <LegacyAllies />
      <OfficialPartners />
      <EnhancedFooter />
    </main>
  );
}
