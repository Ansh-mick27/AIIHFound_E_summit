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
                    {/* All Logos Combined */}
                    <Link href="/" className="flex items-center">
                        <img
                            src="/images/ALL-LOGO.png"
                            alt="All Logos"
                            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                        />
                    </Link>

                    {/* Nav Links - Moved to Right */}
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
                </div>
            </div>
        </motion.nav>
    );
}
