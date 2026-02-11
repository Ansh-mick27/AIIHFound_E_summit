'use client';
import { motion } from "framer-motion";

export default function PoweredBySection() {
    const sponsors = [
        { name: "SAGE Group", type: "POWERED BY", logo: "/logos/sage.png" },
        { name: "bNEST", type: "CO-POWERED BY", logo: "/logos/bnest.png" },
        { name: "AIC-RNTU", type: "DIAMOND SPONSOR", logo: "/logos/aic.png" }
    ];

    return (
        <section className="py-24 px-6 bg-bg-primary border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent-secondary"></div>
                        <h2 className="text-sm uppercase font-mono-terminal text-accent-secondary tracking-widest">
                            POWERED & CO-POWERED BY
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent-secondary"></div>
                    </div>
                </motion.div>

                {/* Sponsor Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card glow-border-purple p-8 rounded-lg hover-scale text-center"
                        >
                            <p className="text-xs uppercase font-mono-terminal text-text-muted mb-4">
                                {sponsor.type}
                            </p>
                            <div className="bg-white rounded-lg p-6 mb-4 h-32 flex items-center justify-center">
                                {/* Placeholder for logo - replace with actual logos */}
                                <span className="text-2xl font-bold text-gray-800">{sponsor.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
