'use client';
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CyberpunkCardProps {
    category: string;
    title: string;
    description: string;
    icon: LucideIcon;
    delay?: number;
}

export default function CyberpunkCard({ category, title, description, icon: Icon, delay = 0 }: CyberpunkCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="group relative p-6 rounded-lg glow-border-cobalt glass-card hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col"
        >
            {/* Category Tag */}
            <div className="flex items-start justify-between mb-4">
                <span className="font-mono-terminal text-xs text-[var(--accent-cobalt)] border border-[var(--accent-cobalt)] px-2 py-1 rounded">
                    [{category.toUpperCase()}]
                </span>
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[var(--accent-cobalt)]/20 transition-colors">
                    <Icon className="w-6 h-6 text-white group-hover:text-[var(--accent-cobalt)] transition-colors" />
                </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold uppercase mb-3 text-white group-hover:text-glow-cobalt transition-all">
                {title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            {/* Expand Details Link */}
            <div className="flex items-center gap-2 text-xs font-mono-terminal text-text-muted group-hover:text-[var(--accent-cobalt)] transition-colors mt-auto">
                <span>Know More...</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </motion.div>
    );
}
