'use client';

import { useState, useEffect } from 'react';

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

    const TimeUnit = ({ value, label }: { value: number; label: string }) => {
        return (
            <div className="flex flex-col items-center">
                <div
                    className="px-6 py-4 min-w-[80px] sm:min-w-[100px] rounded-lg"
                    style={{
                        background: 'rgba(0, 102, 255, 0.1)',
                        border: '1px solid rgba(0, 102, 255, 0.3)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)',
                    }}
                >
                    <div
                        className="text-3xl sm:text-4xl md:text-5xl font-bold"
                        style={{
                            color: '#0066FF',
                            textShadow: '0 0 20px rgba(0, 102, 255, 0.8)',
                            fontFamily: 'var(--font-montserrat)',
                        }}
                    >
                        {value.toString().padStart(2, '0')}
                    </div>
                </div>
                <div
                    className="text-xs sm:text-sm text-gray-300 mt-2 uppercase tracking-wider"
                    style={{
                        fontFamily: 'var(--font-montserrat)',
                    }}
                >
                    {label}
                </div>
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
