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
                        <h3 className="text-3xl font-black uppercase mb-6">
                            <span className="text-glow-purple">AIIH</span>
                        </h3>
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
                                <span className="text-accent-primary">PH:</span>
                                <span className="text-white ml-2">+91 731 4303900</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="py-12 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 relative z-50">
                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm uppercase font-bold mb-4 text-accent">NAVIGATION</h4>
                        <ul className="space-y-2 font-mono-terminal text-sm text-text-secondary">
                            <li className="hover:text-white transition cursor-pointer">+ HOME</li>
                            <li className="hover:text-white transition cursor-pointer">+ EVENTS</li>
                            <li className="hover:text-white transition cursor-pointer">+ GALLERY</li>
                            <li className="hover:text-white transition cursor-pointer">+ TEAM</li>
                            <li className="hover:text-white transition cursor-pointer">+ SPONSOR US</li>
                            <li className="hover:text-white transition cursor-pointer">+ CONTACT</li>
                        </ul>
                    </div>

                    {/* System Directives */}
                    <div>
                        <h4 className="text-sm uppercase font-bold mb-4 text-accent-secondary">SYSTEM DIRECTIVES</h4>
                        <div className="font-mono-terminal text-sm text-text-secondary space-y-2">
                            <p className="text-green-500">root@ecell:~$ ./innovate.sh</p>
                            <p className="text-text-muted">1. DISRUPT MARKETS</p>
                            <p className="text-text-muted">2. BUILD SCALABLE</p>
                            <p className="text-text-muted">3. DEPLOY FAST</p>
                            <p className="text-green-500 flex items-center gap-2">
                                <span className="animate-pulse">█</span>
                                AWAITING INPUT...
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm uppercase font-bold mb-4 text-accent">QUICK LINKS</h4>
                        <ul className="space-y-2 font-mono-terminal text-sm text-text-secondary">
                            <li className="hover:text-white transition cursor-pointer">▸ E-CELL</li>
                            <li className="hover:text-white transition cursor-pointer">▸ Startup Expo</li>
                            <li className="hover:text-white transition cursor-pointer">▸ Campus Ambassadors</li>
                            <li className="hover:text-white transition cursor-pointer">▸ Freshers' Representative</li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm uppercase font-bold mb-4 text-accent-secondary">CONNECT</h4>
                        <div className="flex gap-3 mb-6">
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-primary/20 hover:text-accent transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-secondary/20 hover:text-accent-secondary transition">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-primary/20 hover:text-accent transition">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-secondary/20 hover:text-accent-secondary transition">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="font-mono-terminal text-xs space-y-1">
                            <p className="text-text-muted">SERVER:</p>
                            <p className="text-green-500">ONLINE</p>
                            <p className="text-text-muted">LATENCY:</p>
                            <p className="text-green-500">42ms</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6 px-6">
                <div className="max-w-7xl mx-auto px-6 relative z-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono-terminal">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-green-500">SYSTEM ONLINE</span>
                    </div>
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
