'use client';

import Hero from "@/components/Hero";
import AboutEvents from "@/components/AboutEvents";
import SolveX from "@/components/SolveX";
import PitchBiz from "@/components/PitchBiz";
import BrochureColumn from "@/components/BrochureColumn";
import { ThemeToggle } from "@/components/ThemeToggle";
import FloatingShapes from "@/components/FloatingShapes";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <div className="bg-noise"></div>
      <FloatingShapes />
      <CustomCursor />

      <Hero />
      <AboutEvents />
      <SolveX />
      <PitchBiz />
      <BrochureColumn />
      <ThemeToggle />

      <footer className="py-12 text-center text-muted text-sm relative z-10 border-t border-white/5 dark:border-white/5 border-black/5">
        <div className="mb-4 text-xs font-mono opacity-50">E-SUMMIT ACROPOLIS INDORE</div>
        <p>© 2026 E-Summit Acropolis. All rights reserved.</p>
        <p className="mt-2">Organized by AIIH & EDC</p>
      </footer>
    </main>
  );
}
