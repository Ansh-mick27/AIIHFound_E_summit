'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />

      <div className="relative z-10 text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium tracking-widest text-gray-400 uppercase"
        >
          Acropolis Group of Institutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600"
        >
          E-SUMMIT
          <br />
          <span className="text-purple-500">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl text-gray-400 font-light max-w-2xl mx-auto"
        >
          Where <span className="text-blue-400 font-semibold">Innovation</span> Meets <span className="text-purple-400 font-semibold">Execution</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8"
        >
          <div className="text-center px-8 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <div className="text-sm text-gray-500 uppercase tracking-widest">Date</div>
            <div className="text-2xl font-bold text-white">Mar 19-20</div>
          </div>
          <div className="text-center px-8 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <div className="text-sm text-gray-500 uppercase tracking-widest">Venue</div>
            <div className="text-2xl font-bold text-white">Indore</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
}
