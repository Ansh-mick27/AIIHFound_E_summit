'use client';
import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";

export default function SolveX() {
  return (
    <section id="solvex" className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div>
            <div className="font-mono-terminal text-accent-primary text-sm tracking-widest uppercase mb-3 border border-accent-primary px-3 py-1 rounded inline-block">
              [COMPETITION]
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase">
              SOLVE<span className="text-glow-purple">X</span>
              <span className="block text-2xl md:text-4xl mt-3 font-normal text-text-secondary">
                Innovation & Business Model
              </span>
            </h2>
          </div>

          <div className="glass-card glow-border-purple p-8 rounded-xl">
            <p className="text-text-muted text-xs uppercase tracking-wider mb-2 font-mono-terminal">
              // TOTAL_PRIZE_POOL
            </p>
            <p className="text-5xl md:text-6xl font-black text-glow-purple">₹1,20,000</p>
            <p className="text-accent-secondary text-xs mt-2">+ FICCI FLO Women in STEM Awards</p>
          </div>
        </motion.div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Track 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card glow-border-purple p-6 rounded-lg hover-scale group"
          >
            <h3 className="text-xl font-bold uppercase mb-4 text-accent">
              Innovation Track
            </h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-center gap-2 font-mono-terminal">
                <span className="text-accent-primary">▸</span> Proof of Concept
              </li>
              <li className="flex items-center gap-2 font-mono-terminal">
                <span className="text-accent-primary">▸</span> Prototype Stage
              </li>
              <li className="flex items-center gap-2 font-mono-terminal">
                <span className="text-accent-primary">▸</span> Research Based
              </li>
            </ul>
          </motion.div>

          {/* Track 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card glow-border-purple p-6 rounded-lg hover-scale group"
          >
            <h3 className="text-xl font-bold uppercase mb-4 text-accent">
              Business Track
            </h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-center gap-2 font-mono-terminal">
                <span className="text-accent-primary">▸</span> MVP Stage
              </li>
              <li className="flex items-center gap-2 font-mono-terminal">
                <span className="text-accent-primary">▸</span> Product Ready
              </li>
              <li className="flex items-center gap-2 font-mono-terminal">
                <span className="text-accent-primary">▸</span> Revenue Generating
              </li>
            </ul>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card border border-accent-secondary p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold uppercase mb-6 text-accent-secondary">Timeline</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-text-muted mb-2 font-mono-terminal">
                  <span>EARLY_BIRD</span>
                  <span className="text-white">20 Jan</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full">
                  <div className="w-full bg-accent-primary h-1 rounded-full opacity-50"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-text-muted mb-2 font-mono-terminal">
                  <span>REG_DEADLINE</span>
                  <span className="text-white">05 Feb</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full">
                  <div className="w-[80%] bg-accent-primary h-1 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-text-muted mb-2 font-mono-terminal">
                  <span>FINAL_PITCH</span>
                  <span className="text-white">19-20 Mar</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full">
                  <div className="w-[40%] bg-accent-primary h-1 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card glow-border-cyan p-6 rounded-lg flex items-center gap-6 group"
          >
            <div className="p-4 bg-accent-secondary/20 rounded-xl group-hover:bg-accent-secondary/30 transition-colors">
              <Users className="w-8 h-8 text-accent-secondary" />
            </div>
            <div>
              <h4 className="text-lg font-bold uppercase">Support & Incubation</h4>
              <p className="text-text-secondary text-sm font-mono-terminal">
                CampusFund | Mentorship | Networking
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass-card glow-border-purple p-6 rounded-lg flex items-center gap-6 group"
          >
            <div className="p-4 bg-accent-primary/20 rounded-xl group-hover:bg-accent-primary/30 transition-colors">
              <Mail className="w-8 h-8 text-accent-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold uppercase">Contact Team</h4>
              <p className="text-text-secondary text-sm font-mono-terminal">
                solvex.edc@acropolis.in
              </p>
              <p className="text-text-muted text-xs mt-1 font-mono-terminal">+91 99887 76655</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
