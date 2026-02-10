'use client';
import { motion } from "framer-motion";
import { Lightbulb, Building2, Landmark } from "lucide-react";

export default function TripleHelixAnimation() {
    const helixData = [
        {
            icon: Lightbulb,
            label: "Academia",
            color: "#3b82f6", // blue-500
            description: "Research & Knowledge",
            offset: 0,
        },
        {
            icon: Building2,
            label: "Industry",
            color: "#a855f7", // purple-500
            description: "Innovation & Market",
            offset: 120,
        },
        {
            icon: Landmark,
            label: "Government",
            color: "#22c55e", // green-500
            description: "Policy & Support",
            offset: 240,
        },
    ];

    // Generate helix points
    const numPoints = 50;
    const helixHeight = 500;
    const helixRadius = 100;

    return (
        <section className="py-32 px-6 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[600px] h-[600px] bg-gradient-radial from-accent-primary/30 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6">
                        The Triple Helix
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-green-500">
                            Innovation Ecosystem
                        </span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Three intertwined forces driving innovation forward
                    </p>
                </motion.div>

                {/* DNA Helix Container */}
                <div className="relative flex items-center justify-center gap-12 min-h-[600px]">
                    {/* SVG Helix Strands */}
                    <div className="relative w-full max-w-lg">
                        <svg
                            viewBox="0 0 300 500"
                            className="w-full h-[500px] mx-auto"
                            style={{ overflow: 'visible' }}
                        >
                            {helixData.map((helix, helixIndex) => {
                                const points = [];
                                for (let i = 0; i < numPoints; i++) {
                                    const t = (i / numPoints) * Math.PI * 3; // 3 full rotations
                                    const angle = t + (helix.offset * Math.PI / 180);
                                    const x = 150 + helixRadius * Math.cos(angle);
                                    const y = (i / numPoints) * helixHeight;
                                    const z = helixRadius * Math.sin(angle);
                                    const scale = 0.6 + (z / helixRadius) * 0.4; // depth effect
                                    points.push({ x, y, scale, angle: t });
                                }

                                return (
                                    <g key={helixIndex}>
                                        {/* Helix Smooth Curve */}
                                        <motion.path
                                            d={`M ${points.map((p, i) => `${i === 0 ? '' : 'L '}${p.x},${p.y}`).join(' ')}`}
                                            stroke={helix.color}
                                            strokeWidth="4"
                                            fill="none"
                                            strokeLinecap="round"
                                            opacity="0.7"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 0.7 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, delay: helixIndex * 0.3, ease: "easeInOut" }}
                                        />

                                        {/* Helix Nodes */}
                                        {points.filter((_, i) => i % 5 === 0).map((point, i) => (
                                            <motion.circle
                                                key={i}
                                                cx={point.x}
                                                cy={point.y}
                                                r={5 * point.scale}
                                                fill={helix.color}
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: 0.5 + i * 0.04 + helixIndex * 0.3,
                                                    type: "spring",
                                                    damping: 10
                                                }}
                                            />
                                        ))}
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* Legend Cards with Icons */}
                    <div className="hidden md:flex flex-col gap-8">
                        {helixData.map((helix, index) => {
                            const Icon = helix.icon;
                            return (
                                <motion.div
                                    key={helix.label}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.2 }}
                                    whileHover={{ scale: 1.05, x: -10 }}
                                    className="bg-card-theme backdrop-blur-sm p-5 rounded-2xl border-2 cursor-pointer shadow-xl hover:shadow-2xl transition-all"
                                    style={{ borderColor: helix.color }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="p-4 rounded-xl"
                                            style={{ backgroundColor: `${helix.color}20` }}
                                        >
                                            <Icon className="w-8 h-8" style={{ color: helix.color }} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground text-lg">{helix.label}</h3>
                                            <p className="text-xs text-muted mt-1">{helix.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Legend */}
                <div className="md:hidden grid grid-cols-1 gap-4 mt-12 max-w-md mx-auto">
                    {helixData.map((helix, index) => {
                        const Icon = helix.icon;
                        return (
                            <motion.div
                                key={helix.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.2 }}
                                className="bg-card-theme backdrop-blur-sm p-4 rounded-xl border-2 shadow-lg"
                                style={{ borderColor: helix.color }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ backgroundColor: `${helix.color}20` }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: helix.color }} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground">{helix.label}</h3>
                                        <p className="text-xs text-muted">{helix.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                    className="text-center mt-16 max-w-3xl mx-auto"
                >
                    <p className="text-muted leading-relaxed">
                        Just as DNA strands intertwine to create life, these three forces spiral together to create
                        a thriving innovation ecosystem. <span className="text-accent-primary font-semibold">E-Summit 2026</span> serves
                        as the nexus where academia's research, industry's entrepreneurship, and government's support converge.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
