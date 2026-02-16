'use client';
import { motion } from "framer-motion";
import CyberpunkCard from "./CyberpunkCard";
import Link from "next/link";
import { Rocket, Briefcase, Settings, Palette, Trophy, TrendingUp, Mic, Lightbulb } from "lucide-react";

export default function EventsGrid() {
    interface EventItem {
        slug: string;
        category: string;
        title: string;
        description: string;
        icon: any;
    }

    const events: EventItem[] = [
        {
            slug: "founders-talk",
            category: "SESSION", // Renamed from SPEAKER
            title: "FOUNDERS TALK",
            description: "Startup Expo, the flagship event of E-Summit, provides a dynamic platform for early-stage startups to pitch their ideas to investors and industry leaders.",
            icon: Rocket
        },
        {
            slug: "solvex",
            category: "COMPETITION",
            title: "SOLVEX",
            description: "Business Plan Competition is an exclusive event for students to compete and showcase their entrepreneurial skills through innovative business proposals.",
            icon: Briefcase
        },
        {
            slug: "pitchbiz",
            category: "INVESTMENT", // Renamed from LOGIC
            title: "PITCHBIZ 5.0",
            description: "The Case Study competition is a game of strategy that forces participants to challenge conventions and think outside the box to solve real-world problems.",
            icon: Settings
        },
        {
            slug: "creators-connect",
            category: "PANEL", // Renamed from CREATIVE
            title: "CREATORS CONNECT 2.0",
            description: "The Creator's Camp hosts a variety of influential creators and artists who share their journey to success and insights on building a creative career.",
            icon: Palette
        },
        {
            slug: "ama",
            category: "PANEL", // Renamed from STRATEGY
            title: "AMA",
            description: "Experience the thrill of sports business in our IPL Auction simulation where strategy meets excitement in building the perfect team within budget constraints.",
            icon: Trophy
        },
        {
            slug: "masterclass",
            category: "SESSION", // Renamed from SIMULATION
            title: "MASTERCLASS",
            description: "Test your market skills in a high-stakes stock trading simulation where quick decisions and market analysis determine your success in the virtual market.",
            icon: TrendingUp
        },
        {
            slug: "speed-mentoring",
            category: "MENTORSHIP", // Renamed from SPEAKER (Speed Mentoring)
            title: "SPEED MENTORING",
            description: "Hear from industry veterans and successful entrepreneurs as they share their insights, experiences, and lessons learned on the path to innovation.",
            icon: Mic
        }
    ];

    return (
        <section id="events" className="relative py-32 px-6 bg-bg-primary">
            <div className="max-w-7xl mx-auto relative z-50">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-secondary bg-accent-secondary/10 mb-6" // Increased padding for "a little" larger size perception
                    >
                        <span
                            className="text-lg uppercase text-accent-secondary" // Increased text size from text-sm to text-lg
                            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600 }} // Added Montserrat font and bold weight
                        >
                            JOIN EVENTS
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black uppercase mb-6"
                    >
                        WHAT'S WAITING <span className="text-glow-cobalt">FOR YOU?</span> {/* Changed text */}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-text-secondary max-w-3xl mx-auto"
                    >
                        Turn effort into achievement. Select an event and take the first step.
                    </motion.p>
                </div>

                {/* Events Grid - Changed to Flexbox for centering last row of 3 */}
                <div className="flex flex-wrap justify-center gap-6">
                    {events.map((event, index) => (
                        <div key={event.title} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-h-[340px]">
                            <Link href={`/events/${event.slug}`} className="block h-full">
                                <CyberpunkCard
                                    category={event.category}
                                    title={event.title}
                                    description={event.description}
                                    icon={event.icon}
                                    delay={index * 0.1}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
