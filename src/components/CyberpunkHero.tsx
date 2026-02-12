'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";

export default function CyberpunkHero() {
    return (
        <section className="relative min-h-screen flex items-start justify-center px-8 pt-32 bg-black text-white overflow-hidden">
            {/* Spiral Staircase Background - Right Side */}
            <div
                className="absolute top-0 right-0 bottom-0 w-[30vw] -z-0 pointer-events-none"
                style={{
                    backgroundImage: 'url(/images/spiral-stairs.png)',
                    backgroundRepeat: 'repeat-y',
                    backgroundPosition: 'right center',
                    backgroundSize: 'contain',
                    opacity: 1.0,
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
                        background-position: right 100%;
                    }
                    100% {
                        background-position: right 0%;
                    }
                }
            `}</style>

            <div className="relative z-10 text-center max-w-6xl">
                {/* Main Tagline - FROM WHAT IF TO WHY NOT - Largest */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-black uppercase leading-none mb-6"
                    style={{
                        fontSize: '8rem',
                        letterSpacing: '0.05em',
                        fontFamily: 'var(--font-montserrat)',



                    }}
                >
                    <span style={{ color: '#ffffff' }}>FROM WHAT IF TO </span>
                    <span style={{ color: '#c61a0b', textShadow: '0 0 20px rgba(198, 26, 11, 0.5)' }}>WHY NOT</span>
                </motion.h1>

                {/* Secondary Text - Medium Size */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-semibold mb-8"
                    style={{
                        fontSize: '2rem',
                        lineHeight: '1.4',
                        color: '#ffffff',
                        fontFamily: 'var(--font-montserrat)',
                        maxWidth: '900px',
                        margin: '0 auto 2rem auto'
                    }}
                >
                    A room full of people who refuse to play safe.<br />
                    Stories that sound like yours.
                </motion.div>

                {/* E-SUMMIT Logo - Reduced Size */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-6"
                >
                    <img
                        src="/images/esummit-logo.png"
                        alt="E-Summit 2026"
                        style={{
                            height: '5rem',
                            width: 'auto',
                            filter: 'drop-shadow(0 0 20px rgba(0, 102, 255, 0.3))'
                        }}
                    />
                </motion.div>

                {/* Starting Line Text - Smaller */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-medium mb-8"
                    style={{
                        fontSize: '1.5rem',
                        color: '#00BFFF',
                        fontFamily: 'var(--font-montserrat)',
                        textShadow: '0 0 10px rgba(0, 191, 255, 0.5)'
                    }}
                >
                    This could be your starting line
                </motion.div>

                {/* Date */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl lg:text-2xl font-medium mb-4"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    18th - 20th March 2026
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
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
                                backgroundColor: '#c61a0b',
                                color: '#FFF',
                                boxShadow: '0 0 30px rgba(198, 26, 11, 0.5)',
                                minWidth: '150px'
                            }}
                        >
                            REGISTER
                        </button>
                    </Link>
                </motion.div>

                {/* Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <CountdownTimer />
                </motion.div>
            </div>
        </section>
    );
}
