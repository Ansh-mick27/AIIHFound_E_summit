'use client';
import { motion } from "framer-motion";

export default function LegacyAllies() {
    const allies = [
        "Starbucks", "SBI", "SIDBI", "Bank of Baroda", "PVR", "Chromepet",
        "JioSaavn", "CoinGape", "The Print", "ICCT", "Hyundai", "Unstop",
        "Wadhwani", "Rightships", "Seekbook", "Utho", "Interview Buddy",
        "GreenSaja", "Fashor", "The Product Folks", "SOS"
    ];

    return (
        <section className="py-24 px-6 bg-bg-secondary border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                        LEGACY & PAST <span className="text-glow-purple">ALLIES</span>
                    </h2>
                    <p className="text-text-muted font-mono-terminal text-sm">
                        // TRUSTED_COLLABORATORS_ARCHIVE
                    </p>
                </motion.div>

                {/* Allies Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {allies.map((ally, index) => (
                        <motion.div
                            key={ally}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card border border-white/10 p-4 rounded-lg hover-scale aspect-square flex items-center justify-center text-center"
                        >
                            <div className="bg-white rounded p-3 w-full h-full flex items-center justify-center">
                                <span className="text-xs font-bold text-gray-800">{ally}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
