'use client';
import { motion } from "framer-motion";

export default function OfficialPartners() {
    const partners = [
        { name: "Herrmann", category: "PV PARTNER" },
        { name: "Versailles Partner", category: "VERSAILLES PARTNER" },
        { name: "BestCare", category: "HEALTHCARE PARTNER" },
        { name: "MetalSpace", category: "ENERGY PARTNER" },
        { name: "K", category: "FINTECH PARTNER" },
        { name: "IIE Indore", category: "STARTUP PARTNER" },
        { name: "Utho", category: "OFFICIAL CLOUD PARTNER" },
        { name: "2L", category: "BOOKKEEP PARTNER" },
        { name: "Stack", category: "SUPPORTING NETWORKING EXPO" },
        { name: "Sheetal", category: "GIFTING PARTNER" },
        { name: "JoltRaid", category: "GIFTING PARTNER" },
        { name: "Decentchandler", category: "MERCHANDISE PARTNER" }
    ];

    return (
        <section className="relative z-50 bg-black text-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                        OFFICIAL <span className="text-glow-cyan">PARTNERS</span>
                    </h2>
                    <p className="text-text-muted font-mono-terminal text-sm">
                        // VERIFIED_ALLIANCE_NETWORK
                    </p>
                </motion.div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card glow-border-cyan p-6 rounded-lg hover-scale"
                        >
                            <div className="bg-white rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
                                <span className="text-xl font-bold text-gray-800">{partner.name}</span>
                            </div>
                            <p className="text-xs uppercase font-mono-terminal text-accent-secondary text-center">
                                {partner.category}
                            </p>
                        </motion.div>
                    ))}

                    {/* Partner With Us Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: partners.length * 0.05 }}
                        className="glass-card border border-dashed border-accent-primary p-6 rounded-lg hover-scale cursor-pointer flex flex-col items-center justify-center min-h-[160px]"
                    >
                        <div className="text-5xl text-accent-primary mb-2">+</div>
                        <p className="text-sm uppercase font-mono-terminal text-accent-primary">
                            Partner With Us
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
