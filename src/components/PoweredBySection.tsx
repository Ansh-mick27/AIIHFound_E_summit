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
        <section id="partners" className="relative pt-24 pb-8 bg-black text-white border-t border-white/10">
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

                {/* Sponsor Cards - Row 1 */}
                <div className="grid md:grid-cols-3 gap-8">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-xl text-center cursor-pointer"
                            style={{
                                background: 'linear-gradient(145deg, #f8f9fa, #e9ecef)',
                                padding: '2rem 1.5rem',
                                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                                transition: 'transform 300ms ease-in-out, box-shadow 300ms ease-in-out',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.04) translateY(-6px)';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,71,171,0.6), 0 0 40px rgba(0,71,171,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
                            }}
                        >
                            <div className="h-28 flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-gray-800">{sponsor.name}</span>
                            </div>
                            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                                {sponsor.type}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Sponsor Cards - Row 2 */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
                    {secondRowSponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="rounded-xl text-center cursor-pointer"
                            style={{
                                background: 'linear-gradient(145deg, #f8f9fa, #e9ecef)',
                                padding: '1.25rem 1rem',
                                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                                transition: 'transform 300ms ease-in-out, box-shadow 300ms ease-in-out',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.04) translateY(-6px)';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,71,171,0.6), 0 0 40px rgba(0,71,171,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
                            }}
                        >
                            <div className="h-16 flex items-center justify-center mb-3">
                                <span className="text-base font-bold text-gray-800">{sponsor.name}</span>
                            </div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                                {sponsor.type}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
