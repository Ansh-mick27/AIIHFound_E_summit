'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function CyberpunkNav() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-border-primary bg-bg-primary/80 backdrop-blur-lg"
        >
            <div className="px-6 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="/images/AIIH-LOGO.png"
                            alt="AIIH Logo"
                            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src="/images/EDC-LOGO.png"
                            alt="EDC Logo"
                            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                        />
                    </Link>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#about" className="text-sm uppercase tracking-wide hover:text-accent transition-colors">
                            About
                        </Link>
                        <Link href="#events" className="text-sm uppercase tracking-wide hover:text-accent transition-colors">
                            Events
                        </Link>
                        <Link href="#timeline" className="text-sm uppercase tracking-wide hover:text-accent transition-colors">
                            Timeline
                        </Link>
                        <Link href="#partners" className="text-sm uppercase tracking-wide hover:text-accent transition-colors">
                            Partners
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <button className="px-4 py-2 rounded-lg glow-border-cyan text-sm uppercase font-semibold hover:bg-accent-secondary/10 transition-all">
                        <span className="flex items-center gap-2">
                            JOIN EVENTS
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
