'use client';
import { motion } from "framer-motion";

export default function PoweredBySection() {
    const sponsors = [
        { name: "SAGE Group", type: "POWERED BY", logo: "/logos/sage.png" },
        { name: "bNEST", type: "CO-POWERED BY", logo: "/logos/bnest.png" },
        { name: "AIC-RNTU", type: "DIAMOND SPONSOR", logo: "/logos/aic.png" }
    ];

    const secondRowSponsors = [
        { name: "Sponsor 4", type: "SPONSOR" },
        { name: "Sponsor 5", type: "SPONSOR" },
        { name: "Sponsor 6", type: "SPONSOR" },
        { name: "Sponsor 7", type: "SPONSOR" },
        { name: "Sponsor 8", type: "SPONSOR" },
        { name: "Sponsor 9", type: "SPONSOR" },
    ];

    return (
        <section className="relative pt-24 pb-8 bg-black text-white overflow-hidden border-t border-white/10">
            <div className="max-w-7xl mx-auto relative z-50">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-black text-center mb-16 uppercase"
                    style={{
                        fontFamily: 'var(--font-montserrat)',
                        letterSpacing: '0.05em'
                    }}
                >
                    In Alliance <span className="text-glow-cobalt">With</span>
                </motion.h2>

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
                            className="glass-card glow-border-cobalt p-8 rounded-lg hover-scale text-center"
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

                {/* Second Row - 6 Sponsor Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8">
                    {secondRowSponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card glow-border-cobalt p-6 rounded-lg hover-scale text-center"
                        >
                            <p className="text-xs uppercase font-mono-terminal text-text-muted mb-3">
                                {sponsor.type}
                            </p>
                            <div className="bg-white rounded-lg p-4 mb-3 h-24 flex items-center justify-center">
                                <span className="text-lg font-bold text-gray-800">{sponsor.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
