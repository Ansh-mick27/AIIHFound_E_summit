'use client';
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Youtube, ArrowUp } from "lucide-react";

export default function EnhancedFooter() {

    return (
        <footer className="bg-bg-secondary border-t border-white/10">
            {/* E-CELL MANIT Contact Form Section */}
            <div className="border-b border-white/10 py-16 px-6">
                <div className="max-w-7xl mx-auto relative z-50">
                    {/* E-CELL Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-black uppercase mb-6">
                            E-CELL <span className="text-glow-purple">ACROPOLIS</span>
                        </h3>
                        <div className="font-mono-terminal text-sm text-text-secondary space-y-2 mb-6">
                            <p className="text-accent-secondary">// Indore's Hub for entrepreneurial excellence.</p>
                            <p className="text-accent-secondary">   Equipping founders and changemakers with the</p>
                            <p className="text-accent-secondary">   dream to redefine the rules of the arena.</p>
                        </div>
                        <div className="space-y-3 font-mono-terminal text-sm">
                            <div>
                                <span className="text-accent-primary">LOC:</span>
                                <span className="text-white ml-2">Acropolis Institute, Indore (M.P.)</span>
                            </div>
                            <div>
                                <span className="text-accent-primary">MAIL:</span>
                                <span className="text-white ml-2">ecell@acropolis.in</span>
                            </div>
                            <div>
                                <span className="text-accent-primary">Student Coordinators:</span>
                            </div>
                            <div>
                                <span className="text-white">Keshav Banger (9399148486)</span>
                            </div>
                            <div>
                                <span className="text-white">Pradhyumn Mehta (8770527096)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="py-12 px-6">
                <div className="max-w-7xl mx-auto relative z-50">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm uppercase font-bold mb-4 text-accent">QUICK LINKS</h4>
                        <p className="font-mono-terminal text-sm text-text-secondary hover:text-white transition cursor-pointer">Website</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6 px-6">
                <div className="max-w-7xl mx-auto px-6 relative z-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-xs font-mono-terminal text-center">
                        © 2026 E-Cell ACROPOLIS • All Rights Reserved
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-xs uppercase font-mono-terminal text-accent-secondary hover:text-accent transition"
                    >
                        BACK TO TOP
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
