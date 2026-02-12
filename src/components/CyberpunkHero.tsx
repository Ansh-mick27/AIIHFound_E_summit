'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function CyberpunkHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-8 pt-8 bg-black text-white overflow-hidden">
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

            {/* Blue Glow Background Effect */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(0, 102, 255, 0.15) 0%, transparent 70%)'
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

            <div className="relative z-10 text-center max-w-6xl">
                {/* E-SUMMIT Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-black uppercase leading-none mb-1"
                    style={{
                        fontSize: '11rem',
                        letterSpacing: '0.05em',
                        fontFamily: 'var(--font-montserrat)'
                    }}
                >
                    E-SUMMIT
                </motion.h1>

                {/* 2026 in Blue with Glow Background */}
                <div className="relative inline-block mb-0" style={{ marginTop: '-3rem' }}>
                    {/* Bluish Glow Background Behind 2026 - More Prominent */}
                    <div
                        className="absolute inset-0 blur-3xl -z-10"
                        style={{
                            background: 'radial-gradient(ellipse, rgba(0, 102, 255, 0.7) 0%, rgba(0, 102, 255, 0.4) 50%, transparent 80%)',
                            transform: 'scale(2)'
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-black"
                        style={{
                            fontSize: '11rem',
                            color: '#0066FF',
                            textShadow: '0 0 40px rgba(0, 102, 255, 0.8), 0 0 80px rgba(0, 102, 255, 0.5)',
                            letterSpacing: '0.1em',
                            fontFamily: 'var(--font-montserrat)'
                        }}
                    >
                        2026
                    </motion.div>
                </div>

                {/* Tagline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-2"
                    style={{
                        letterSpacing: '0.1em',
                        fontFamily: 'var(--font-montserrat)'
                    }}
                >
                    FROM WHAT IF TO <span style={{
                        color: '#FF0040',
                        textShadow: '0 0 20px rgba(255, 0, 64, 0.5)'
                    }}>WHY NOT</span>
                </motion.h2>

                {/* Date */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl lg:text-2xl font-medium mb-4"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    18th - 20th March 2026
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="#agenda">
                        <button
                            className="px-10 py-4 font-bold uppercase text-sm md:text-base tracking-widest transition-all hover:scale-105 rounded-sm"
                            style={{
                                backgroundColor: '#0066FF',
                                color: '#FFF',
                                boxShadow: '0 0 30px rgba(0, 102, 255, 0.5)',
                                minWidth: '150px'
                            }}
                        >
                            AGENDA
                        </button>
                    </Link>
                    <Link href="#register">
                        <button
                            className="px-10 py-4 font-bold uppercase text-sm md:text-base tracking-widest transition-all hover:scale-105 rounded-sm"
                            style={{
                                backgroundColor: '#FF4500',
                                color: '#FFF',
                                boxShadow: '0 0 30px rgba(255, 69, 0, 0.5)',
                                minWidth: '150px'
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
