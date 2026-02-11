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
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                        <span className="text-white font-black text-lg">AI</span>
                    </div>
                    <span className="text-xl font-black uppercase tracking-tight">
                        E-SUMMIT <span className="text-accent">2026</span>
                    </span>
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
        </motion.nav>
    );
}
