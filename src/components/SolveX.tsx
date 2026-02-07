'use client';
import { motion } from "framer-motion";

export default function SolveX() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="text-red-500 font-bold tracking-widest uppercase mb-2">Competition</div>
            <h2 className="text-6xl md:text-8xl font-black text-white">
              SOLVE<span className="text-red-600">X</span>
              <span className="block text-2xl md:text-4xl mt-2 font-normal text-gray-400">Innovation & Business Model</span>
            </h2>
          </div>
          <div className="bg-red-900/20 border border-red-500/30 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Total Prize Pool</p>
            <p className="text-5xl md:text-6xl font-black text-white">₹1,20,000</p>
            <p className="text-red-400 text-xs mt-2">+ FICCI FLO Women in STEM Awards</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Track 1 */}
          <div className="col-span-1 bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-red-500/50 transition duration-500 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition">Innovation Track</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> Proof of Concept</li>
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> Prototype Stage</li>
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> Research Based</li>
            </ul>
          </div>

          {/* Track 2 */}
          <div className="col-span-1 bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-red-500/50 transition duration-500 group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition">Business Track</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> MVP Stage</li>
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> Product Ready</li>
              <li className="flex items-center gap-2"><span className="text-red-500">●</span> Revenue Generating</li>
            </ul>
          </div>

          {/* Deadlines */}
          <div className="col-span-1 bg-gradient-to-br from-red-900/20 to-black border border-red-500/30 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Timeline</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>Early Bird Ends</span>
                  <span className="text-white font-bold">20 Jan</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full"><div className="w-full bg-red-600 h-1 rounded-full opacity-50"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>Reg Deadline</span>
                  <span className="text-white font-bold">05 Feb</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full"><div className="w-[80%] bg-red-600 h-1 rounded-full"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>Final Pitch</span>
                  <span className="text-white font-bold">19-20 Mar</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full"><div className="w-[40%] bg-red-600 h-1 rounded-full"></div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-zinc-800 pt-8">
          <p>Support: CampusFund, Incubation, Mentorship</p>
          <p className="mt-2 md:mt-0">Contact: solvex.edc@acropolis.in</p>
        </div>
      </div>
    </section>
  );
}
