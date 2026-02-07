'use client';

import Hero from "@/components/Hero";
import AboutEvents from "@/components/AboutEvents";
import SolveX from "@/components/SolveX";
import PitchBiz from "@/components/PitchBiz";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      {/* Noise Overlay */}
      <div className="bg-noise"></div>

      {/* Components */}
      <Hero />
      <AboutEvents />
      <SolveX />
      <PitchBiz />

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600 text-sm relative z-10 border-t border-white/5 bg-black">
        <div className="mb-4 text-xs font-mono text-gray-700">E-SUMMIT ACROPOLIS INDORE</div>
        <p>© 2026 E-Summit Acropolis. All rights reserved.</p>
        <p className="mt-2">Organized by AIIH & EDC</p>
      </footer>
    </main>
  );
}
