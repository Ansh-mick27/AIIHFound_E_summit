'use client';
import { motion } from "framer-motion";

export default function LegacyAllies() {
    // Split allies into 3 rows
    const row1 = ["Starbucks", "SBI", "SIDBI", "Bank of Baroda", "PVR", "Chromepet", "JioSaavn"];
    const row2 = ["CoinGape", "The Print", "ICCT", "Hyundai", "Unstop", "Wadhwani", "Rightships"];
    const row3 = ["Seekbook", "Utho", "Interview Buddy", "GreenSaja", "Fashor", "The Product Folks", "SOS"];

    // Duplicate items for infinite scroll effect
    const createInfiniteArray = (arr: string[]) => [...arr, ...arr, ...arr];

    return (
        <section className="py-24 px-6 bg-bg-secondary border-t border-white/10 overflow-hidden">
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

                {/* Scrolling Rows */}
                <div className="space-y-4">
                    {/* Row 1 - Scroll Left */}
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex gap-4"
                            animate={{
                                x: [0, -1920]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear"
                                }
                            }}
                        >
                            {createInfiniteArray(row1).map((ally, index) => (
                                <div
                                    key={`row1-${index}`}
                                    className="glass-card border border-white/10 p-4 rounded-lg hover-scale flex-shrink-0"
                                    style={{ width: '160px', height: '120px' }}
                                >
                                    <div className="bg-white rounded p-3 w-full h-full flex items-center justify-center">
                                        <span className="text-xs font-bold text-gray-800">{ally}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2 - Scroll Right */}
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex gap-4"
                            animate={{
                                x: [-1920, 0]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear"
                                }
                            }}
                        >
                            {createInfiniteArray(row2).map((ally, index) => (
                                <div
                                    key={`row2-${index}`}
                                    className="glass-card border border-white/10 p-4 rounded-lg hover-scale flex-shrink-0"
                                    style={{ width: '160px', height: '120px' }}
                                >
                                    <div className="bg-white rounded p-3 w-full h-full flex items-center justify-center">
                                        <span className="text-xs font-bold text-gray-800">{ally}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 3 - Scroll Left */}
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex gap-4"
                            animate={{
                                x: [0, -1920]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear"
                                }
                            }}
                        >
                            {createInfiniteArray(row3).map((ally, index) => (
                                <div
                                    key={`row3-${index}`}
                                    className="glass-card border border-white/10 p-4 rounded-lg hover-scale flex-shrink-0"
                                    style={{ width: '160px', height: '120px' }}
                                >
                                    <div className="bg-white rounded p-3 w-full h-full flex items-center justify-center">
                                        <span className="text-xs font-bold text-gray-800">{ally}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
