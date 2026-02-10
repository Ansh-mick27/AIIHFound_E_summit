'use client';

import Hero from "@/components/Hero";
import AboutEvents from "@/components/AboutEvents";
import SolveX from "@/components/SolveX";
import PitchBiz from "@/components/PitchBiz";
import BrochureColumn from "@/components/BrochureColumn";
import { ThemeToggle } from "@/components/ThemeToggle";
import FloatingShapes from "@/components/FloatingShapes";
import CustomCursor from "@/components/CustomCursor";
import VelocityScroll from "@/components/VelocityScroll";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import PartnerLogos from "@/components/PartnerLogos";
import TripleHelixAnimation from "@/components/TripleHelixAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <ScrollProgress />
      <PartnerLogos />
      <div className="bg-noise"></div>
      <FloatingShapes />
      <CustomCursor />

      <Hero />
      <VelocityScroll />
      <AboutUs />
      <TripleHelixAnimation />
      <AboutEvents />
      <SolveX />
      <PitchBiz />
      <BrochureColumn />
      <Contact />
      <ThemeToggle />
    </main>
  );
}
