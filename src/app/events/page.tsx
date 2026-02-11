'use client';

import CyberpunkNav from "@/components/CyberpunkNav";
import SolveX from "@/components/SolveX";
import PitchBiz from "@/components/PitchBiz";
import EnhancedFooter from "@/components/EnhancedFooter";
import SpiralBackground from "@/components/SpiralBackground";

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-bg-primary text-white relative">
            <SpiralBackground />
            <CyberpunkNav />

            {/* Page Header */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-4">
                        <span className="text-glow-purple">FLAGSHIP</span> EVENTS
                    </h1>
                    <p className="text-text-secondary font-mono-terminal text-lg">
            // PRIME_COMPETITIONS_INITIALIZED
                    </p>
                </div>
            </section>

            {/* SolveX Section */}
            <SolveX />

            {/* PitchBiz Section */}
            <PitchBiz />

            <EnhancedFooter />
        </main>
    );
}
