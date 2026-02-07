'use client';
import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-03-19T09:00:00");

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = TARGET_DATE.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex gap-4 text-center">
            <div>
                <div className="text-2xl font-bold font-mono min-w-[2ch]">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted">Days</div>
            </div>
            <div className="text-2xl font-bold self-start">:</div>
            <div>
                <div className="text-2xl font-bold font-mono min-w-[2ch]">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted">Hrs</div>
            </div>
            <div className="text-2xl font-bold self-start">:</div>
            <div>
                <div className="text-2xl font-bold font-mono min-w-[2ch]">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted">Mins</div>
            </div>
            <div className="text-2xl font-bold self-start">:</div>
            <div>
                <div className="text-2xl font-bold font-mono min-w-[2ch]">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted">Secs</div>
            </div>
        </div>
    );
}
