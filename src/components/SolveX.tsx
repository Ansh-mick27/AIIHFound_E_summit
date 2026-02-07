'use client';
import { motion } from "framer-motion";

export default function SolveX() {
  return (
    <section className="py-32 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 dark:bg-red-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div>
            <div className="text-red-500 font-bold tracking-widest uppercase mb-2">Competition</div>
            <h2 className="text-6xl md:text-8xl font-black text-foreground">
              SOLVE<span className="text-red-600">X</span>
              <span className="block text-2xl md:text-4xl mt-2 font-normal text-muted">Innovation & Business Model</span>
            </h2>
          </div>
          <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-muted text-sm uppercase tracking-wider mb-2">Total Prize Pool</p>
            <p className="text-5xl md:text-6xl font-black text-foreground">₹1,20,000</p>
            <p className="text-red-500 text-xs mt-2">+ FICCI FLO Women in STEM Awards</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Track 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 bg-card-theme p-8 rounded-3xl hover:border-red-500/50 transition duration-500 group shadow-lg shadow-black/5 dark:shadow-none"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-red-500 transition">Innovation Track</h3>
            <ul className="space-y-3 text-muted text-sm">
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> Proof of Concept</li>
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> Prototype Stage</li>
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> Research Based</li>
            </ul>
          </motion.div>

          {/* Track 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 bg-card-theme p-8 rounded-3xl hover:border-red-500/50 transition duration-500 group shadow-lg shadow-black/5 dark:shadow-none"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-red-500 transition">Business Track</h3>
            <ul className="space-y-3 text-muted text-sm">
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> MVP Stage</li>
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> Product Ready</li>
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> Revenue Generating</li>
            </ul>
          </motion.div>

          {/* Deadlines */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 bg-gradient-to-br from-red-500/10 to-background border border-red-500/20 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Timeline</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm text-muted mb-1">
                  <span>Early Bird Ends</span>
                  <span className="text-foreground font-bold">20 Jan</span>
                </div>
                <div className="w-full bg-foreground/10 h-1 rounded-full"><div className="w-full bg-red-600 h-1 rounded-full opacity-50"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-muted mb-1">
                  <span>Reg Deadline</span>
                  <span className="text-foreground font-bold">05 Feb</span>
                </div>
                <div className="w-full bg-foreground/10 h-1 rounded-full"><div className="w-[80%] bg-red-600 h-1 rounded-full"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-muted mb-1">
                  <span>Final Pitch</span>
                  <span className="text-foreground font-bold">19-20 Mar</span>
                </div>
                <div className="w-full bg-foreground/10 h-1 rounded-full"><div className="w-[40%] bg-red-600 h-1 rounded-full"></div></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-muted border-t border-foreground/10 pt-8">
          <p>Support: CampusFund, Incubation, Mentorship</p>
          <p className="mt-2 md:mt-0">Contact: solvex.edc@acropolis.in</p>
        </div>
      </div>
    </section>
  );
}
