'use client';
import { motion } from "framer-motion";
import CyberpunkCard from "./CyberpunkCard";
import { Rocket, Briefcase, Settings, Palette, Trophy, TrendingUp, Mic, Lightbulb } from "lucide-react";

export default function EventsGrid() {
    const events = [
        {
            category: "EXHIBITION",
            title: "STARTUP EXPO",
            description: "Startup Expo, the flagship event of E-Summit, provides a dynamic platform for early-stage startups to pitch their ideas to investors and industry leaders.",
            icon: Rocket
        },
        {
            category: "COMPETITION",
            title: "BUSINESS PLAN",
            description: "Business Plan Competition is an exclusive event for students to compete and showcase their entrepreneurial skills through innovative business proposals.",
            icon: Briefcase
        },
        {
            category: "LOGIC",
            title: "CASE STUDY",
            description: "The Case Study competition is a game of strategy that forces participants to challenge conventions and think outside the box to solve real-world problems.",
            icon: Settings
        },
        {
            category: "CREATIVE",
            title: "CREATOR'S CAMP",
            description: "The Creator's Camp hosts a variety of influential creators and artists who share their journey to success and insights on building a creative career.",
            icon: Palette
        },
        {
            category: "STRATEGY",
            title: "IPL AUCTION",
            description: "Experience the thrill of sports business in our IPL Auction simulation where strategy meets excitement in building the perfect team within budget constraints.",
            icon: Trophy
        },
        {
            category: "SIMULATION",
            title: "STOCK TRADING",
            description: "Test your market skills in a high-stakes stock trading simulation where quick decisions and market analysis determine your success in the virtual market.",
            icon: TrendingUp
        },
        {
            category: "SPEAKER",
            title: "KEYNOTE SESSION",
            description: "Hear from industry veterans and successful entrepreneurs as they share their insights, experiences, and lessons learned on the path to innovation.",
            icon: Mic
        },
        {
            category: "INDUSTRY",
            title: "INNOVATION CONCLAVE",
            description: "Join the Innovation Conclave to explore cutting-edge technologies, disruptive business models, and the future of entrepreneurship with industry experts.",
            icon: Lightbulb
        }
    ];

    return (
        <section id="events" className="relative z-50 py-32 px-6 bg-bg-primary">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-secondary bg-accent-secondary/10 mb-6"
                    >
                        <span className="text-sm uppercase font-mono-terminal text-accent-secondary">JOIN EVENTS</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black uppercase mb-6"
                    >
                        WHAT'S IN THE <span className="text-glow-purple">BOX?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-text-secondary max-w-3xl mx-auto"
                    >
                        Unlock new skills, earn rewards, and level up your portfolio. Select an event to view details.
                    </motion.p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <CyberpunkCard
                            key={event.title}
                            category={event.category}
                            title={event.title}
                            description={event.description}
                            icon={event.icon}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
