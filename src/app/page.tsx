'use client';

import CyberpunkNav from "@/components/CyberpunkNav";
import CyberpunkHero from "@/components/CyberpunkHero";
import EventsGrid from "@/components/EventsGrid";
import SolveX from "@/components/SolveX";
import PitchBiz from "@/components/PitchBiz";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-white relative">
      <div className="bg-noise"></div>

      <CyberpunkNav />
      <CyberpunkHero />
      <EventsGrid />
      <SolveX />
      <PitchBiz />
      <Contact />
    </main>
  );
}
