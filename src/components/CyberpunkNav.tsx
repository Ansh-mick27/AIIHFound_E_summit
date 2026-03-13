'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function CyberpunkNav() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-[100] border-b border-border-primary bg-bg-primary/80 backdrop-blur-lg"
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
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-sm uppercase tracking-wide hover:text-accent transition-colors cursor-pointer"
                        >
                            About
                        </a>
                        <a
                            href="/#events"
                            onClick={(e) => {
                                const el = document.getElementById('events');
                                if (el) {
                                    e.preventDefault();
                                    el.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="text-sm uppercase tracking-wide hover:text-accent transition-colors cursor-pointer"
                        >
                            Events
                        </a>

                        <a
                            href="#partners"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-sm uppercase tracking-wide hover:text-accent transition-colors cursor-pointer"
                        >
                            Partners
                        </a>
                        <Link href="https://forms.gle/nqHj9CqaVEudivcdA" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-accent-cobalt hover:bg-blue-600 text-white rounded font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,102,255,0.4)] text-sm ml-4">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
