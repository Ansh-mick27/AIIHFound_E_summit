'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutESummit() {
    // Row 1 — 10 speaker images
    const topRowImages = [
        '/images/speakers/dhruv-rathod.png',
        '/images/speakers/anshu-jain.png',
        '/images/speakers/ashish-gangrade.png',
        '/images/speakers/farheen-rangwala.png',
        '/images/speakers/jignesh-kenia.png',
        '/images/speakers/manish-johari.png',
        '/images/speakers/sanjeevv-khanna.png',
        '/images/speakers/suraj-doshi.png',
        '/images/speakers/tushar-pal.png',
        '/images/speakers/yagnesh-sanghrajka.png',
    ];

    // Row 2 — 9 speaker images
    const bottomRowImages = [
        '/images/speakers/aaditya-jain.png',
        '/images/speakers/abhishek-kakkar.png',
        '/images/speakers/dravisha-katoch.png',
        '/images/speakers/lavanya-manmotra.png',
        '/images/speakers/ravi-eshwarapu.png',
        '/images/speakers/siddharth-rajhans.png',
        '/images/speakers/sushanto-mitra.png',
        '/images/speakers/utpal-doshi.png',
        '/images/speakers/vibhuti-aggarwal.png',
    ];

    const renderImageBox = (key: string, src: string) => (
        <div
            key={key}
            className="h-48 rounded-lg flex-shrink-0 overflow-hidden"
            style={{
                width: '314px',
                border: '1px solid rgba(0, 102, 255, 0.3)',
                boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)'
            }}
        >
            <Image
                src={src}
                alt="Speaker"
                width={655}
                height={400}
                className="w-full h-full object-cover"
            />
        </div>
    );

    return (
        <section id="about" className="relative bg-black text-white py-20 px-8 overflow-hidden">
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

                {/* Esteemed Guest Heading */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl md:text-5xl font-black text-center mb-12 uppercase"
                    style={{
                        fontFamily: 'var(--font-montserrat)',
                        letterSpacing: '0.05em'
                    }}
                >
                    ESTEEMED <span className="text-glow-cobalt">GUEST</span>
                </motion.h3>

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
                            {topRowImages.map((src, i) =>
                                renderImageBox(`top-a-${i}`, src)
                            )}
                            {/* Set 2 (duplicate for seamless loop) */}
                            {topRowImages.map((src, i) =>
                                renderImageBox(`top-b-${i}`, src)
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
                            {bottomRowImages.map((src, i) =>
                                renderImageBox(`bottom-a-${i}`, src)
                            )}
                            {/* Set 2 (duplicate for seamless loop) */}
                            {bottomRowImages.map((src, i) =>
                                renderImageBox(`bottom-b-${i}`, src)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

