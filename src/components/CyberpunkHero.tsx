'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CyberpunkHero() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2026-03-19T00:00:00');

        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-[800px] h-[800px] bg-gradient-radial from-accent-primary/30 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center px-6 pt-20">
                {/* Level Up Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-secondary bg-accent-secondary/10 mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
                    <span className="text-sm uppercase font-mono-terminal text-accent-secondary">LEVEL UP YOUR FUTURE</span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-7xl md:text-9xl font-black uppercase mb-6"
                >
                    E-SUMMIT
                    <span className="block text-glow-purple">2026</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-text-secondary mb-4"
                >
                    WHERE INNOVATION MEETS EXECUTION
                </motion.p>

                {/* Dates & Venue */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 text-text-muted mb-12"
                >
                    <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        MARCH 19-20, 2026
                    </span>
                    <span className="hidden md:block">|</span>
                    <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        ACROPOLIS INSTITUTE, INDORE
                    </span>
                </motion.div>

                {/* Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center justify-center gap-4 mb-12"
                >
                    {[
                        { value: timeLeft.days, label: 'DAYS' },
                        { value: timeLeft.hours, label: 'HOURS' },
                        { value: timeLeft.minutes, label: 'MINS' },
                        { value: timeLeft.seconds, label: 'SECS' }
                    ].map((item, index) => (
                        <div key={item.label} className="flex flex-col items-center">
                            <div className="glass-card glow-border-purple px-6 py-4 rounded-lg min-w-[80px]">
                                <span className="text-4xl font-black text-glow-purple font-mono-terminal">
                                    {String(item.value).padStart(2, '0')}
                                </span>
                            </div>
                            <span className="text-xs text-text-muted mt-2 font-mono-terminal">{item.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-4 rounded-lg glow-border-cyan text-lg uppercase font-bold hover:bg-accent-secondary/10 transition-all"
                >
                    <span className="flex items-center gap-3">
                        JOIN EVENTS
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </motion.button>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-text-muted font-mono-terminal">SCROLL TO EXPLORE</span>
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
