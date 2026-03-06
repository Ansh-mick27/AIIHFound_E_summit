'use client';
import { motion } from "framer-motion";

export default function PoweredBySection() {
    const sponsors = [
        { name: "Kimirica", logo: "/logos/kimirica.png" },
        { name: "Tap Onn", logo: "/logos/taponn.png" },
        { name: "Carragreen", logo: "/logos/carragreen.png" },
        { name: "Shri Agrawal Sweets", logo: "/logos/agrawal.png" }
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


                {/* Sponsor Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                            <div className="h-28 flex items-center justify-center p-2">
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    style={{
                                        maxHeight: '70%',
                                        maxWidth: '90%',
                                        width: 'auto',
                                        height: 'auto',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
