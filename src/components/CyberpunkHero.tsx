'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function CyberpunkHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-start px-8 md:px-16 pt-20 bg-black text-white overflow-hidden">
            {/* Spiral Staircase Background - Right Side */}
            <div
                className="absolute top-0 right-0 bottom-0 w-[30vw] -z-0 pointer-events-none"
                style={{
                    backgroundImage: 'url(/images/spiral-stairs.png)',
                    backgroundRepeat: 'repeat-y',
                    backgroundPosition: 'right center',
                    backgroundSize: 'contain',
                    opacity: 0.5,
                    animation: 'spiralScroll 20s linear infinite'
                }}
            />

            <style jsx>{`
                @keyframes spiralScroll {
                    0% {
                        background-position: right 0%;
                    }
                    100% {
                        background-position: right 100%;
                    }
                }
            `}</style>

            <div className="relative z-10 max-w-4xl">
                {/* E-SUMMIT Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl md:text-9xl font-black uppercase leading-none mb-4"
                >
                    E-SUMMIT
                </motion.h1>

                {/* 2026 in Neon Cyan */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-7xl md:text-9xl font-black mb-8"
                    style={{
                        color: '#00F0FF',
                        textShadow: '0 0 20px #00F0FF, 0 0 40px #00F0FF'
                    }}
                >
                    2026
                </motion.div>

                {/* Tagline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold uppercase mb-8"
                >
                    FROM WHAT IF TO <span style={{
                        color: '#FF006E',
                        textShadow: '0 0 20px #FF006E, 0 0 40px #FF006E'
                    }}>WHY NOT</span>
                </motion.h2>

                {/* Description with Neon Cyan Border */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-l-4 pl-6 mb-12"
                    style={{
                        borderColor: '#00F0FF',
                        boxShadow: '-4px 0 20px rgba(0, 240, 255, 0.3)'
                    }}
                >
                    <p className="text-base md:text-lg leading-relaxed">
                        Enter a new era of innovation with E-Summit'26, uniting ambitious minds and bold strategists. Each level is a new challenge to overcome in every battlefield of games.
                    </p>
                </motion.div>

                {/* Date */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl font-semibold mb-6"
                >
                    18th - 20th March 2025
                </motion.div>

                {/* Action Buttons with Neon Glow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex gap-4"
                >
                    <Link href="#agenda">
                        <button
                            className="px-8 py-3 font-bold uppercase text-sm tracking-wider transition-all hover:scale-105"
                            style={{
                                backgroundColor: '#00F0FF',
                                color: '#000',
                                boxShadow: '0 0 20px #00F0FF, 0 0 40px #00F0FF'
                            }}
                        >
                            AGENDA
                        </button>
                    </Link>
                    <Link href="#register">
                        <button
                            className="px-8 py-3 font-bold uppercase text-sm tracking-wider transition-all hover:scale-105"
                            style={{
                                backgroundColor: '#00F0FF',
                                color: '#000',
                                boxShadow: '0 0 20px #00F0FF, 0 0 40px #00F0FF'
                            }}
                        >
                            REGISTER
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
