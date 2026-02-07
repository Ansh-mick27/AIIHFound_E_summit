'use client';
import { motion } from "framer-motion";

const events = [
  { title: "Founders Talk", count: "3 Sessions", icon: "🎤", desc: "Hear from the builders of tomorrow." },
  { title: "Panel Discussions", count: "Influence & Investment", icon: "💬", desc: "Debating the future of tech and capital." },
  { title: "Masterclasses", count: "Inv. Ready & GTM", icon: "🧠", desc: "Deep dive into scaling strategies." },
  { title: "Mentoring Circle", count: "Exclusive Access", icon: "🤝", desc: "1-on-1 time with industry veterans." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function AboutEvents() {
  return (
    <section className="py-24 px-6 bg-background relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-foreground">
              More Than <br />
              Just A <span className="text-accent">Summit</span>.
            </h2>
            <p className="text-xl text-muted">
              E-Summit 2026 is a convergence of ideas, capital, and execution.
              We don't just talk about startups; we build the ecosystem.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {events.map((event, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="bg-card-theme p-6 rounded-2xl hover:border-accent-primary/50 transition-colors shadow-sm dark:shadow-none"
              >
                <div className="text-4xl mb-4">{event.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm font-medium text-accent mb-2">{event.count}</p>
                <p className="text-xs text-muted">{event.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
