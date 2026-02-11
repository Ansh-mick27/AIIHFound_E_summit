'use client';
import { motion } from "framer-motion";

export default function PitchBiz() {
    return (
        <section id="pitchbiz" className="py-32 bg-bg-primary relative">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 space-y-4"
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-accent-secondary bg-accent-secondary/10 text-accent-secondary text-sm font-mono-terminal uppercase mb-4">
                        [INVESTMENT_PLATFORM]
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black uppercase">
                        PITCH<span className="text-glow-cyan">BIZ</span> <span className="text-5xl md:text-7xl">5.0</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Connecting 162+ Startups with 18+ Investors across 25+ Cities.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-4 mb-16">
                    {[
                        { label: "STARTUPS", val: "162" },
                        { label: "INVESTORS", val: "18" },
                        { label: "CITIES", val: "25+" },
                        { label: "LIVE_PITCHES", val: "12" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card glow-border-cyan p-8 rounded-lg text-center hover-scale group"
                        >
                            <div className="text-4xl font-black text-glow-cyan mb-2 font-mono-terminal group-hover:scale-110 transition duration-300">
                                {stat.val}
                            </div>
                            <div className="text-sm text-text-muted uppercase tracking-widest font-mono-terminal">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Deadlines Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card glow-border-cyan rounded-xl p-12 text-center"
                >
                    <h3 className="text-3xl font-bold uppercase mb-8 text-accent-secondary">
                        REGISTRATION DEADLINES
                    </h3>
                    <div className="flex flex-col md:flex-row justify-center gap-12">
                        <div className="space-y-2">
                            <p className="text-sm text-text-muted uppercase tracking-wider font-mono-terminal">
                                // STARTUPS_APPLY_BY
                            </p>
                            <p className="text-5xl font-black text-glow-cyan font-mono-terminal">10 FEB</p>
                        </div>
                        <div className="hidden md:block w-px bg-accent-secondary/30"></div>
                        <div className="space-y-2">
                            <p className="text-sm text-text-muted uppercase tracking-wider font-mono-terminal">
                                // INVESTORS_JOIN_BY
                            </p>
                            <p className="text-5xl font-black text-glow-cyan font-mono-terminal">25 JAN</p>
                        </div>
                    </div>

                    {/* Partners */}
                    <div className="mt-10 pt-10 border-t border-white/10 mx-auto max-w-3xl">
                        <p className="text-sm text-text-muted mb-4 uppercase font-mono-terminal">// SUPPORTED_BY</p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary font-mono-terminal">
                            <span className="hover:text-accent-secondary transition">IndianSteps</span>
                            <span className="text-accent-primary">▸</span>
                            <span className="hover:text-accent-secondary transition">ISBA</span>
                            <span className="text-accent-primary">▸</span>
                            <span className="hover:text-accent-secondary transition">OpenNetwork</span>
                            <span className="text-accent-primary">▸</span>
                            <span className="hover:text-accent-secondary transition">IamStartup</span>
                            <span className="text-accent-primary">▸</span>
                            <span className="hover:text-accent-secondary transition">StartLabs</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
