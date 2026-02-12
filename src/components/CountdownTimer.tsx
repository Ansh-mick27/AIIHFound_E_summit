'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

// 3x5 grid patterns for digits 0-9
const digitPatterns: { [key: string]: boolean[] } = {
    '0': [
        true, true, true,
        true, false, true,
        true, false, true,
        true, false, true,
        true, true, true
    ],
    '1': [
        false, true, false,
        true, true, false,
        false, true, false,
        false, true, false,
        true, true, true
    ],
    '2': [
        true, true, true,
        false, false, true,
        true, true, true,
        true, false, false,
        true, true, true
    ],
    '3': [
        true, true, true,
        false, false, true,
        true, true, true,
        false, false, true,
        true, true, true
    ],
    '4': [
        true, false, true,
        true, false, true,
        true, true, true,
        false, false, true,
        false, false, true
    ],
    '5': [
        true, true, true,
        true, false, false,
        true, true, true,
        false, false, true,
        true, true, true
    ],
    '6': [
        true, true, true,
        true, false, false,
        true, true, true,
        true, false, true,
        true, true, true
    ],
    '7': [
        true, true, true,
        false, false, true,
        false, true, false,
        false, true, false,
        false, true, false
    ],
    '8': [
        true, true, true,
        true, false, true,
        true, true, true,
        true, false, true,
        true, true, true
    ],
    '9': [
        true, true, true,
        true, false, true,
        true, true, true,
        false, false, true,
        true, true, true
    ],
};

const DotMatrixDigit = ({ digit }: { digit: string }) => {
    const pattern = digitPatterns[digit] || digitPatterns['0'];

    return (
        <div className="grid grid-cols-3 gap-1.5">
            {pattern.map((isActive, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0.1
                    }}
                    transition={{
                        duration: 0.3,
                        delay: index * 0.02,
                        ease: "easeOut"
                    }}
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm"
                    style={{
                        backgroundColor: isActive ? '#0066FF' : 'transparent',
                        boxShadow: isActive
                            ? '0 0 10px rgba(0, 102, 255, 0.8), 0 0 20px rgba(0, 102, 255, 0.4)'
                            : 'none',
                    }}
                />
            ))}
        </div>
    );
};

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

    const TimeUnit = ({ value, label }: { value: number; label: string }) => {
        const digits = value.toString().padStart(2, '0').split('');

        return (
            <div className="flex flex-col items-center gap-3">
                {/* Digits Container */}
                <div
                    className="relative px-4 py-5 rounded-lg flex gap-3"
                    style={{
                        background: 'rgba(0, 102, 255, 0.05)',
                        border: '1px solid rgba(0, 102, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 0 20px rgba(0, 102, 255, 0.15)',
                    }}
                >
                    {digits.map((digit, index) => (
                        <DotMatrixDigit key={`${label}-${index}-${digit}`} digit={digit} />
                    ))}
                </div>

                {/* Label */}
                <motion.div
                    className="text-xs sm:text-sm uppercase tracking-widest font-bold"
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
        <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center flex-wrap">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
}
