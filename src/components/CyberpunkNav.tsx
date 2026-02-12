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

                    {/* Nav Links - Positioned to align About with 2 in 2026 */}
                    <div className="hidden md:flex items-center gap-8" style={{ marginLeft: 'auto', marginRight: 'auto', paddingLeft: '2rem' }}>
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

                    {/* Register Button */}
                    <Link href="#register">
                        <button className="hidden md:block px-6 py-2 bg-accent text-white rounded hover:scale-105 transition-transform">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
