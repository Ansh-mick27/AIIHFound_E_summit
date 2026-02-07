'use client';
import { motion } from "framer-motion";

export default function PitchBiz() {
    return (
        <section className="py-32 bg-blue-950/20 relative">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                        INVESTMENT PLATFORM
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-white">
                        PITCH<span className="text-blue-500">BIZ</span> 5.0
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Connecting 162+ Startups with 18+ Investors across 25+ Cities.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-12">
                    {[
                        { label: "Startups", val: "162" },
                        { label: "Investors", val: "18" },
                        { label: "Cities", val: "25+" },
                        { label: "Live Pitches", val: "12" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center hover:bg-zinc-800 transition group cursor-default">
                            <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition duration-300">{stat.val}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-3xl p-12 text-center backdrop-blur-md">
                    <h3 className="text-3xl font-bold text-white mb-8">Registration Deadlines</h3>
                    <div className="flex flex-col md:flex-row justify-center gap-12">
                        <div className="space-y-2">
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Startups Apply By</p>
                            <p className="text-4xl font-black text-white">10 FEB</p>
                        </div>
                        <div className="hidden md:block w-px bg-blue-500/30"></div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Investors Join By</p>
                            <p className="text-4xl font-black text-white">25 JAN</p>
                        </div>
                    </div>
                    <div className="mt-10 pt-10 border-t border-white/5 mx-auto max-w-3xl">
                        <p className="text-sm text-gray-400 mb-4">Supported By</p>
                        <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition duration-500 text-sm">
                            {/* Partners from brochure */}
                            <span className="hover:text-blue-400 transition">Indian Steps</span> •
                            <span className="hover:text-blue-400 transition">ISBA</span> •
                            <span className="hover:text-blue-400 transition">Open Network</span> •
                            <span className="hover:text-blue-400 transition">Iam Startup</span> •
                            <span className="hover:text-blue-400 transition">StartLabs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
