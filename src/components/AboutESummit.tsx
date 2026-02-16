'use client';
import { motion } from 'framer-motion';

export default function AboutESummit() {
    return (
        <section className="relative bg-black text-white py-20 px-8 overflow-hidden">
            {/* Background glow effect */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(0, 102, 255, 0.1) 0%, transparent 70%)'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-50">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl md:text-7xl font-black text-center mb-12"
                    style={{
                        fontFamily: 'var(--font-montserrat)',
                        letterSpacing: '0.05em'
                    }}
                >
                    E-SUMMIT
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-center leading-relaxed mb-16 max-w-6xl mx-auto"
                    style={{
                        fontFamily: 'var(--font-montserrat)',
                        fontWeight: 300
                    }}
                >
                    E-summit serves as a premier bridge between academic research and industrial expertise,
                    empowering visionaries to transform raw ideas into scalable ventures through high-level
                    networking and mentorship. By connecting aspiring founders with industry leaders, it fosters
                    a dynamic ecosystem of growth where strategic innovation meets real-world execution, equipping
                    the next generation to disrupt markets and lead with confidence.
                </motion.p>

                {/* Grid Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {/* Top row - 4 boxes */}
                    {[1, 2, 3, 4].map((index) => (
                        <motion.div
                            key={`top-${index}`}
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square rounded-lg"
                            style={{
                                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 102, 255, 0.05))',
                                border: '1px solid rgba(0, 102, 255, 0.3)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)'
                            }}
                        />
                    ))}

                    {/* Bottom row - 5 boxes */}
                    {[1, 2, 3, 4, 5].map((index) => (
                        <motion.div
                            key={`bottom-${index}`}
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square rounded-lg"
                            style={{
                                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 102, 255, 0.05))',
                                border: '1px solid rgba(0, 102, 255, 0.3)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)'
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
