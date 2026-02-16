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

                {/* Animated Rows Section */}
                <div className="flex flex-col gap-8 overflow-hidden py-8">
                    {/* Top Row - Scroll Right */}
                    <div className="flex overflow-hidden relative w-full">
                        <motion.div
                            className="flex gap-6 whitespace-nowrap"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                }
                            }}
                            style={{ width: "max-content" }}
                        >
                            {[...Array(10)].map((_, index) => (
                                <div
                                    key={`top-${index}`}
                                    className="w-48 h-48 rounded-lg flex-shrink-0"
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

                    {/* Bottom Row - Scroll Left */}
                    <div className="flex overflow-hidden relative w-full">
                        <motion.div
                            className="flex gap-6 whitespace-nowrap"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                }
                            }}
                            style={{ width: "max-content" }}
                        >
                            {[...Array(10)].map((_, index) => (
                                <div
                                    key={`bottom-${index}`}
                                    className="w-48 h-48 rounded-lg flex-shrink-0"
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
                </div>
            </div>
        </section>
    );
}
