'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutESummit() {
    // Images for the top row boxes — index maps to image path, undefined = gradient placeholder
    const topRowImages: Record<number, string> = {
        0: '/images/speakers/dhruv-rathod.png',
    };

    // Base set of items for each row (will be duplicated for seamless loop)
    const topRowCount = 8;
    const bottomRowCount = 8;

    const renderBox = (key: string, imageMap: Record<number, string>, baseIndex: number) => {
        const hasImage = !!imageMap[baseIndex];
        return (
            <div
                key={key}
                className={`h-48 rounded-lg flex-shrink-0 overflow-hidden`}
                style={{
                    width: hasImage ? '314px' : '192px',
                    background: hasImage ? 'transparent' : 'linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 102, 255, 0.05))',
                    border: '1px solid rgba(0, 102, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)'
                }}
            >
                {hasImage && (
                    <Image
                        src={imageMap[baseIndex]}
                        alt="Speaker"
                        width={653}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
        );
    };

    return (
        <section className="relative bg-black text-white py-20 px-8 overflow-hidden">
            {/* Seamless marquee keyframes */}
            <style jsx>{`
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                @keyframes scrollLeft {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

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
                    {/* Top Row - Seamless Scroll Right */}
                    <div className="flex overflow-hidden relative w-full">
                        <div
                            className="flex gap-6"
                            style={{
                                width: 'max-content',
                                animation: 'scrollRight 30s linear infinite',
                            }}
                        >
                            {/* Set 1 */}
                            {[...Array(topRowCount)].map((_, i) =>
                                renderBox(`top-a-${i}`, topRowImages, i)
                            )}
                            {/* Set 2 (duplicate for seamless loop) */}
                            {[...Array(topRowCount)].map((_, i) =>
                                renderBox(`top-b-${i}`, topRowImages, i)
                            )}
                        </div>
                    </div>

                    {/* Bottom Row - Seamless Scroll Left */}
                    <div className="flex overflow-hidden relative w-full">
                        <div
                            className="flex gap-6"
                            style={{
                                width: 'max-content',
                                animation: 'scrollLeft 30s linear infinite',
                            }}
                        >
                            {/* Set 1 */}
                            {[...Array(bottomRowCount)].map((_, i) =>
                                renderBox(`bottom-a-${i}`, {}, i)
                            )}
                            {/* Set 2 (duplicate for seamless loop) */}
                            {[...Array(bottomRowCount)].map((_, i) =>
                                renderBox(`bottom-b-${i}`, {}, i)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

