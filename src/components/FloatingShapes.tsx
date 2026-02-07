'use client';
import { motion } from "framer-motion";

export default function FloatingShapes() {
    const shapes = [
        // Circle top-left
        {
            type: "circle",
            width: 400,
            height: 400,
            top: "-10%",
            left: "-10%",
            className: "border border-slate-500/10 rounded-full",
            animate: { rotate: 360 },
            duration: 60
        },
        // Cross center-right
        {
            type: "cross",
            top: "40%",
            right: "-5%",
            className: "text-slate-500/10",
            animate: { rotate: -360 },
            duration: 40
        },
        // Dashed Circle bottom-left
        {
            type: "circle",
            width: 300,
            height: 300,
            bottom: "10%",
            left: "5%",
            className: "border border-dashed border-slate-500/10 rounded-full",
            animate: { rotate: 360 },
            duration: 80
        }
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {shapes.map((shape, i) => (
                <motion.div
                    key={i}
                    className={`absolute flex items-center justify-center ${shape.className || ''}`}
                    style={{
                        width: shape.width,
                        height: shape.height,
                        top: shape.top,
                        left: shape.left,
                        right: shape.right,
                        bottom: shape.bottom,
                    }}
                    animate={shape.animate}
                    transition={{ repeat: Infinity, duration: shape.duration, ease: "linear" }}
                >
                    {shape.type === 'cross' && (
                        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-[300px] h-[300px] opacity-20 dark:opacity-10">
                            <line x1="50" y1="0" x2="50" y2="100" />
                            <line x1="0" y1="50" x2="100" y2="50" />
                        </svg>
                    )}
                </motion.div>
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-slate-500/5 to-transparent rounded-full blur-3xl" />
        </div>
    );
}
