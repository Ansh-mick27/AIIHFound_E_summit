'use client';
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, Globe } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-bg-secondary text-white relative border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-4">
                        <span className="text-glow-purple">SYSTEM</span> DIRECTIVES
                    </h2>
                    <p className="text-text-secondary text-lg font-mono-terminal">
                        // INITIATE_CONTACT_PROTOCOL
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-card glow-border-purple p-6 rounded-lg group hover-scale"
                    >
                        <div className="p-3 bg-accent-primary/20 rounded-xl inline-block mb-4 group-hover:bg-accent-primary/30 transition">
                            <MapPin className="w-6 h-6 text-accent-primary" />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2 text-accent">LOCATION</h3>
                        <p className="text-text-secondary text-sm font-mono-terminal">
                            Acropolis Institute<br />
                            Manglia Square, Indore (M.P.)
                        </p>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card glow-border-cyan p-6 rounded-lg group hover-scale"
                    >
                        <div className="p-3 bg-accent-secondary/20 rounded-xl inline-block mb-4 group-hover:bg-accent-secondary/30 transition">
                            <Mail className="w-6 h-6 text-accent-secondary" />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2 text-accent-secondary">EMAIL</h3>
                        <p className="text-text-secondary text-sm font-mono-terminal">
                            ecell@acropolis.in<br />
                            solve.x@acropolis.in
                        </p>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-card glow-border-purple p-6 rounded-lg group hover-scale"
                    >
                        <div className="p-3 bg-accent-primary/20 rounded-xl inline-block mb-4 group-hover:bg-accent-primary/30 transition">
                            <Globe className="w-6 h-6 text-accent-primary" />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2 text-accent">SOCIAL</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-primary/20 hover:text-accent transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-secondary/20 hover:text-accent-secondary transition">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center pt-8 border-t border-white/10"
                >
                    <p className="text-text-muted text-sm font-mono-terminal">
                        © 2026 E-SUMMIT | POWERED BY AIIH FOUNDATION | ALL RIGHTS RESERVED
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
