'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PartnerLogos() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute top-6 left-6 z-50 pointer-events-none"
            >
                <div className="relative h-12 w-48 pointer-events-auto">
                    <Image
                        src="/assets/logos/acropolis.png"
                        alt="Acropolis Institute"
                        fill
                        className="object-contain object-left brightness-0 invert dark:invert-0 opacity-90"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute top-6 right-6 z-50 text-right pointer-events-none"
            >
                <div className="pointer-events-auto">
                    {/* Placeholder for AIIH Logo if image fails, styled to look like a logo */}
                    <div className="flex flex-col items-end">
                        <span className="text-2xl font-black tracking-tighter leading-none text-foreground/90">AIIH</span>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent-primary">Innovation Hub</span>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
