'use client';
import { motion } from "framer-motion";

export default function LegacyAllies() {
    const partners = [
        { name: "247VC", logo: "/partners/247vc.png" },
        { name: "Headstart", logo: "/partners/headstart.png" },
        { name: "I am Startup Community", logo: "/partners/iamstartup.png" },
        { name: "Open Network", logo: "/partners/opennetwork.png" },
        { name: "ISBA", logo: "/partners/isba.png" },
        { name: "SAAply", logo: "/partners/saaply.png" },
        { name: "Indore Entrepreneurs Network", logo: "/partners/ien.png" },
    ];

    // Row 2 partners
    const partnersRow2 = [
        { name: "Cunomial", logo: "/partners/cunomial.png" },
        { name: "StartupNews.fyi", logo: "/partners/startupnews.png" },
        { name: "StartLabs", logo: "/partners/startlabs.png" },
        { name: "WEneurs", logo: "/partners/weneurs.png" },
        { name: "Campus Fund", logo: "/partners/campusfund.png" },
        { name: "Wadhwani Foundation", logo: "/partners/wadhwani.png" },
        { name: "IIMB", logo: "/partners/iimb.png" },
    ];

    // Row 3 partners
    const partnersRow3 = [
        { name: "Vadodara Innovation Council", logo: "/partners/vic.png" },
        { name: "Think Startup", logo: "/partners/thinkstartup.png" },
        { name: "NSRCEL", logo: "/partners/nsrcel.png" },
        { name: "Savishkar", logo: "/partners/savishkar.png" },
    ];

    const renderCard = (key: string, partner: { name: string; logo: string }) => (
        <div
            key={key}
            className="glass-card border border-white/10 p-4 rounded-lg flex-shrink-0 cursor-pointer"
            style={{
                width: '160px',
                height: '120px',
                transition: 'transform 300ms ease-in-out, box-shadow 300ms ease-in-out',
                boxShadow: '0 0 10px rgba(0, 102, 255, 0.15)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 102, 255, 0.5), 0 0 50px rgba(0, 102, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 102, 255, 0.15)';
            }}
        >
            <div className="bg-white rounded p-3 w-full h-full flex items-center justify-center">
                <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                        maxHeight: '70%',
                        maxWidth: '90%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </div>
        </div>
    );

    return (
        <section className="relative bg-black text-white pt-8 pb-24 overflow-hidden">
            {/* Seamless marquee keyframes */}
            <style jsx>{`
                @keyframes alliesScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes alliesScrollReverse {
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
                    <h2 className="text-lg font-black uppercase mb-4">
                        OUR <span className="text-glow-cobalt">PARTNERS</span>
                    </h2>
                </motion.div>

                {/* Scrolling Rows */}
                <div className="space-y-6">
                    {/* Row 1 — Scrolls Left */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-4"
                            style={{
                                width: 'max-content',
                                animation: 'alliesScroll 20s linear infinite',
                            }}
                        >
                            {partners.map((partner, i) => renderCard(`r1a-${i}`, partner))}
                            {partners.map((partner, i) => renderCard(`r1b-${i}`, partner))}
                        </div>
                    </div>

                    {/* Row 2 — Scrolls Right (reverse) */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-4"
                            style={{
                                width: 'max-content',
                                animation: 'alliesScrollReverse 20s linear infinite',
                            }}
                        >
                            {partnersRow2.map((partner, i) => renderCard(`r2a-${i}`, partner))}
                            {partnersRow2.map((partner, i) => renderCard(`r2b-${i}`, partner))}
                        </div>
                    </div>

                    {/* Row 3 — Scrolls Left (same as Row 1) */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-4"
                            style={{
                                width: 'max-content',
                                animation: 'alliesScroll 20s linear infinite',
                            }}
                        >
                            {partnersRow3.map((partner, i) => renderCard(`r3a-${i}`, partner))}
                            {partnersRow3.map((partner, i) => renderCard(`r3b-${i}`, partner))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
