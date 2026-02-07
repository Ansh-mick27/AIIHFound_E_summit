'use client';
import { motion } from "framer-motion";

const events = [
  { title: "Founders Talk", count: "3 Sessions", icon: "🎤", desc: "Hear from the builders of tomorrow." },
  { title: "Panel Discussions", count: "Influence & Investment", icon: "💬", desc: "Debating the future of tech and capital." },
  { title: "Masterclasses", count: "Inv. Ready & GTM", icon: "🧠", desc: "Deep dive into scaling strategies." },
  { title: "Mentoring Circle", count: "Exclusive Access", icon: "🤝", desc: "1-on-1 time with industry veterans." },
];

export default function AboutEvents() {
  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              More Than <br />
              Just A <span className="text-purple-500">Summit</span>.
            </h2>
            <p className="text-xl text-gray-400">
              E-Summit 2026 is a convergence of ideas, capital, and execution.
              We don't just talk about startups; we build the ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {events.map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-800 transition-colors"
              >
                <div className="text-4xl mb-4">{event.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                <p className="text-sm font-medium text-purple-400 mb-2">{event.count}</p>
                <p className="text-xs text-gray-500">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
