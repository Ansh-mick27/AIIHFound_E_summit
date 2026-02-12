'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownTimer() {
    const targetDate = new Date('2026-03-19T00:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const AnimatedDigit = ({ value }: { value: string }) => (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="inline-block"
                style={{
                    fontFamily: 'var(--font-montserrat)',
                    fontWeight: 900
                }}
            >
                {value}
            </motion.div>
        </AnimatePresence>
    );

    const TimeUnit = ({ value, label }: { value: number; label: string }) => {
        const digits = value.toString().padStart(2, '0').split('');

        return (
            <div className="flex flex-col items-center">
                <div
                    className="relative px-6 py-4 min-w-[100px] sm:min-w-[120px] rounded-lg overflow-hidden"
                    style={{
                        background: 'rgba(0, 102, 255, 0.1)',
                        border: '1px solid rgba(0, 102, 255, 0.3)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 0 20px rgba(0, 102, 255, 0.2), inset 0 0 20px rgba(0, 102, 255, 0.1)',
                    }}
                >
                    {/* Glow effect overlay */}
                    <div
                        className="absolute inset-0 opacity-30 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.3) 0%, transparent 70%)',
                        }}
                    />

                    <div
                        className="relative text-4xl sm:text-5xl md:text-6xl font-black flex justify-center gap-1"
                        style={{
                            color: '#0066FF',
                            textShadow: '0 0 20px rgba(0, 102, 255, 0.8), 0 0 40px rgba(0, 102, 255, 0.4)',
                        }}
                    >
                        {digits.map((digit, index) => (
                            <AnimatedDigit key={`${label}-${index}`} value={digit} />
                        ))}
                    </div>
                </div>
                <motion.div
                    className="text-xs sm:text-sm mt-3 uppercase tracking-widest font-bold"
                    style={{
                        color: '#0066FF',
                        fontFamily: 'var(--font-montserrat)',
                        textShadow: '0 0 10px rgba(0, 102, 255, 0.5)',
                    }}
                    animate={{
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {label}
                </motion.div>
            </div>
        );
    };

    return (
        <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
}
