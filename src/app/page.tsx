'use client';

import CyberpunkNav from "@/components/CyberpunkNav";
import CyberpunkHero from "@/components/CyberpunkHero";
import EventsGrid from "@/components/EventsGrid";
import SolveX from "@/components/SolveX";
import PitchBiz from "@/components/PitchBiz";
import PoweredBySection from "@/components/PoweredBySection";
import LegacyAllies from "@/components/LegacyAllies";
import OfficialPartners from "@/components/OfficialPartners";
import EnhancedFooter from "@/components/EnhancedFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-white relative">
      <CyberpunkNav />
      <CyberpunkHero />
      <EventsGrid />
      <SolveX />
      <PitchBiz />
      <PoweredBySection />
      <LegacyAllies />
      <OfficialPartners />
      <EnhancedFooter />
    </main>
  );
}
