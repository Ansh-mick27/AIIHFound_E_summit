'use client';

import { useEffect, useState } from 'react';

export default function ParticleBackground() {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

    useEffect(() => {
        const particleCount = 30;
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-white/20 animate-float"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDelay: `${particle.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
