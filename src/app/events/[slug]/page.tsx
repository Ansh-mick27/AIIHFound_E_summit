'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { eventsData } from '@/data/eventsData';
import SpiralBackground from '@/components/SpiralBackground';
import CyberpunkNav from '@/components/CyberpunkNav';
import EnhancedFooter from '@/components/EnhancedFooter';
import Link from 'next/link';

export default function EventPage() {
    const params = useParams();
    const slug = params.slug as string;
    const event = eventsData[slug as keyof typeof eventsData];

    if (!event) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <h1 className="text-4xl font-mono-terminal text-glow-cobalt">EVENT NOT FOUND</h1>
            </div>
        );
    }

    const Icon = event.icon;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent-cobalt selection:text-white overflow-x-hidden">
            <SpiralBackground />
            <CyberpunkNav /> // Navbar is already z-100

            <div className="relative z-50 pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <Link href="/#events" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-cobalt transition-colors mb-8 font-mono-terminal">
                    &lt; BACK_TO_EVENTS
                </Link>

                {/* 1. Event Logo / Title Section */}
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 rounded-full border-2 border-accent-cobalt/30 bg-accent-cobalt/5 mb-6 shadow-[0_0_50px_rgba(0,102,255,0.2)]"
                    >
                        <Icon className="w-24 h-24 text-accent-cobalt" />
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="font-mono-terminal text-accent-cobalt text-sm tracking-widest border border-accent-cobalt px-3 py-1 rounded-full mb-4 inline-block">
                            {event.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black uppercase text-white drop-shadow-[0_0_15px_rgba(0,102,255,0.5)]">
                            {event.title}
                        </h1>
                    </motion.div>
                </div>

                {/* 2. Event Details Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                >
                    {/* Main Description */}
                    <div className="md:col-span-2 glass-card p-8 rounded-xl glow-border-cobalt">
                        <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <span className="w-2 h-8 bg-accent-cobalt rounded-sm"></span>
                            ABOUT THE EVENT
                        </h3>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            {event.longDescription}
                        </p>
                    </div>

                    {/* Key Details */}
                    <div className="glass-card p-8 rounded-xl border border-white/10 h-fit">
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2">
                            TRANSMISSION DATA
                        </h3>
                        <div className="space-y-4">
                            {event.details.map((detail, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="text-text-muted font-mono-terminal text-sm">{detail.label}:</span>
                                    <span className="text-white font-medium">{detail.value}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 bg-accent-cobalt hover:bg-blue-600 text-white font-bold py-3 rounded transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] font-mono-terminal uppercase">
                            REGISTER NOW
                        </button>
                    </div>
                </motion.div>

                {/* 3. Event Posters Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-3xl font-black mb-10 text-center uppercase">
                        EVENT <span className="text-glow-cobalt">VISUALS</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {event.posters.map((poster, index) => (
                            <div
                                key={index}
                                className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10 bg-white/5"
                            >
                                {/* Placeholder for Poster Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-text-muted group-hover:text-accent-cobalt transition-colors">
                                    <span className="font-mono-terminal text-xs">POSTER_SlOT_{index + 1}</span>
                                </div>
                                <div className="absolute inset-0 bg-accent-cobalt/0 group-hover:bg-accent-cobalt/10 transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <EnhancedFooter />
        </main>
    );
}
