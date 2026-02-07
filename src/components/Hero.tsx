'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Parallax Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-50 dark:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] dark:bg-blue-600/20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] dark:bg-purple-600/20" />
      </motion.div>

      <motion.div style={{ opacity: opacityText }} className="relative z-10 text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block border border-foreground/10 bg-foreground/5 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium tracking-widest text-muted uppercase"
        >
          Acropolis Group of Institutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-black tracking-tighter text-foreground dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:via-gray-200 dark:to-gray-500 pb-2"
        >
          E-SUMMIT
          <br />
          <span className="text-accent-primary">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl text-muted font-light max-w-2xl mx-auto"
        >
          Where <span className="text-blue-500 font-semibold dark:text-blue-400">Innovation</span> Meets <span className="text-purple-500 font-semibold dark:text-purple-400">Execution</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8"
        >
          <div className="text-center px-8 py-4 bg-card-theme rounded-2xl backdrop-blur-sm hover:translate-y-[-2px] transition-transform shadow-lg shadow-black/5 dark:shadow-none">
            <div className="text-sm text-muted uppercase tracking-widest">Date</div>
            <div className="text-2xl font-bold text-foreground">Mar 19-20</div>
          </div>
          <div className="text-center px-8 py-4 bg-card-theme rounded-2xl backdrop-blur-sm hover:translate-y-[-2px] transition-transform shadow-lg shadow-black/5 dark:shadow-none">
            <div className="text-sm text-muted uppercase tracking-widest">Venue</div>
            <div className="text-2xl font-bold text-foreground">Indore</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
}
