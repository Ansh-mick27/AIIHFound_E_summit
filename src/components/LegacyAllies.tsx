'use client';
import { motion } from "framer-motion";

export default function LegacyAllies() {
    const row1 = ["Starbucks", "SBI", "SIDBI", "Bank of Baroda", "PVR", "Chromepet", "JioSaavn"];
    const row2 = ["CoinGape", "The Print", "ICCT", "Hyundai", "Unstop", "Wadhwani", "Rightships"];
    const row3 = ["Seekbook", "Utho", "Interview Buddy", "GreenSaja", "Fashor", "The Product Folks", "SOS"];

    const renderCard = (key: string, name: string) => (
        <div
            key={key}
            className="glass-card border border-white/10 p-4 rounded-lg flex-shrink-0"
            style={{ width: '160px', height: '120px' }}
        >
            <div className="bg-white rounded p-3 w-full h-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-800">{name}</span>
            </div>
        </div>
    );

    return (
        <section className="relative bg-black text-white py-24 overflow-hidden">
            {/* Seamless marquee keyframes */}
            <style jsx>{`
                @keyframes alliesScrollLeft {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes alliesScrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
            `}</style>

            <div className="max-w-7xl mx-auto relative z-50">
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

                {/* Scrolling Rows — reduced spacing */}
                <div className="space-y-6">
                    {/* Row 1 - Scroll Left */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-4"
                            style={{
                                width: 'max-content',
                                animation: 'alliesScrollLeft 25s linear infinite',
                            }}
                        >
                            {row1.map((ally, i) => renderCard(`r1a-${i}`, ally))}
                            {row1.map((ally, i) => renderCard(`r1b-${i}`, ally))}
                        </div>
                    </div>

                    {/* Row 2 - Scroll Right */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-4"
                            style={{
                                width: 'max-content',
                                animation: 'alliesScrollRight 25s linear infinite',
                            }}
                        >
                            {row2.map((ally, i) => renderCard(`r2a-${i}`, ally))}
                            {row2.map((ally, i) => renderCard(`r2b-${i}`, ally))}
                        </div>
                    </div>

                    {/* Row 3 - Scroll Left */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-4"
                            style={{
                                width: 'max-content',
                                animation: 'alliesScrollLeft 25s linear infinite',
                            }}
                        >
                            {row3.map((ally, i) => renderCard(`r3a-${i}`, ally))}
                            {row3.map((ally, i) => renderCard(`r3b-${i}`, ally))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

