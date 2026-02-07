'use client';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-foreground/10 bg-card-theme overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              var(--accent-primary),
              transparent 80%
            )
          `,
                    opacity: 0.15
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
}

export default function AboutUs() {
    return (
        <section className="py-8 px-6 bg-background relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">Who We Are</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Organized by the visionaries at Acropolis Institute of Technology & Research.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    <SpotlightCard className="rounded-3xl p-8 hover:border-blue-500/50 transition duration-500">
                        <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-2xl">🏛️</div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Acropolis</h3>
                        <p className="text-muted leading-relaxed">
                            A premier institute in Central India, fostering excellence in education and innovation since its inception.
                            Synonymous with quality and discipline.
                        </p>
                    </SpotlightCard>

                    <SpotlightCard className="rounded-3xl p-8 hover:border-orange-500/50 transition duration-500">
                        <div className="h-12 w-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6 text-2xl">💡</div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">AIIH</h3>
                        <p className="text-muted leading-relaxed">
                            Acropolis Innovation & Incubation Hub. A dedicated ecosystem for nurturing startups, providing mentorship,
                            and transforming ideas into viable businesses.
                        </p>
                    </SpotlightCard>

                    <SpotlightCard className="rounded-3xl p-8 hover:border-purple-500/50 transition duration-500">
                        <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-2xl">🚀</div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">EDC</h3>
                        <p className="text-muted leading-relaxed">
                            Entrepreneurship Development Cell. The student-driven body that fuels the entrepreneurial spirit
                            on campus through workshops, talks, and summits.
                        </p>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
