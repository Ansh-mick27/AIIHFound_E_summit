'use client';
import { motion } from "framer-motion";
import { Lightbulb, Building2, Landmark } from "lucide-react";

export default function TripleHelixAnimation() {
    const helixData = [
        {
            icon: Lightbulb,
            label: "Academia",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/30",
            description: "Research & Knowledge Creation",
            angle: 0,
        },
        {
            icon: Building2,
            label: "Industry",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/30",
            description: "Innovation & Commercialization",
            angle: 120,
        },
        {
            icon: Landmark,
            label: "Government",
            color: "text-green-500",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/30",
            description: "Policy & Infrastructure",
            angle: 240,
        },
    ];

    return (
        <section className="py-32 px-6 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-[800px] h-[800px] bg-gradient-radial from-accent-primary/20 to-transparent rounded-full blur-3xl" />
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
                            Innovation Model
                        </span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        E-Summit 2026 bridges Academia, Industry, and Government to foster collaborative innovation
                    </p>
                </motion.div>

                {/* Triple Helix Visualization */}
                <div className="relative flex items-center justify-center min-h-[600px]">
                    {/* Center Core - AIIH Logo */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                        className="absolute z-20 w-32 h-32 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-2xl"
                    >
                        <span className="text-white font-black text-2xl">AIIH</span>
                    </motion.div>

                    {/* Orbiting Circles */}
                    {helixData.map((helix, index) => {
                        const Icon = helix.icon;
                        const radius = 250; // Distance from center
                        const angleRad = (helix.angle * Math.PI) / 180;
                        const x = Math.cos(angleRad) * radius;
                        const y = Math.sin(angleRad) * radius;

                        return (
                            <motion.div
                                key={helix.label}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.2, type: "spring" }}
                                whileHover={{ scale: 1.15, rotate: 360 }}
                                style={{
                                    position: "absolute",
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                    transform: "translate(-50%, -50%)",
                                }}
                                className="group cursor-pointer"
                            >
                                {/* Connection Line to Center */}
                                <svg
                                    className="absolute top-1/2 left-1/2 pointer-events-none"
                                    style={{
                                        width: Math.abs(x) * 2,
                                        height: Math.abs(y) * 2,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                    <motion.line
                                        x1="50%"
                                        y1="50%"
                                        x2={x > 0 ? "0%" : "100%"}
                                        y2={y > 0 ? "0%" : "100%"}
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        className={helix.color}
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 0.3 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 + index * 0.2, duration: 1 }}
                                    />
                                </svg>

                                {/* Circle */}
                                <div
                                    className={`w-40 h-40 rounded-full ${helix.bgColor} border-2 ${helix.borderColor} flex flex-col items-center justify-center gap-3 backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl`}
                                >
                                    <Icon className={`w-12 h-12 ${helix.color}`} />
                                    <div className="text-center">
                                        <h3 className={`font-bold text-lg ${helix.color}`}>{helix.label}</h3>
                                        <p className="text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                                            {helix.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Rotating Ring Animation */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="absolute w-[550px] h-[550px] border border-foreground/5 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        className="absolute w-[600px] h-[600px] border border-foreground/5 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
}
