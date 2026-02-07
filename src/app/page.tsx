'use client';

import Button from "@/components/ui/Button";
import CountdownTimer from "@/components/CountdownTimer";
import Navigation from "@/components/Navigation";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <Navigation />

      {/* Main Grid Container */}
      <main className="bento-grid pt-24">

        {/* 1. Hero Title - Large Block */}
        <div className="bento-card col-span-4 md:col-span-2 row-span-2 justify-center py-12 px-8 bg-gradient-to-br from-indigo-900 to-slate-900 border-indigo-500/30">
          <p className="text-indigo-400 font-medium tracking-wider mb-2">MARCH 19-20, 2026</p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-4">
            E-SUMMIT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">2026</span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-md">
            The largest entrepreneurship summit in Central India. Where ideas collide with execution.
          </p>
          <div className="flex gap-4">
            <Link href="/solvex" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition">
              Explore SolveX
            </Link>
            <Link href="/pitchbiz" className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition">
              Pitch Your Idea
            </Link>
          </div>
        </div>

        {/* 2. Countdown Timer */}
        <div className="bento-card col-span-4 md:col-span-2 justify-center items-center bg-slate-900">
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-4">Time Remaining</p>
          <CountdownTimer />
        </div>

        {/* 3. Stats Block 1 */}
        <div className="bento-card col-span-2 md:col-span-1 justify-center items-center bg-slate-900 hover:border-orange-500/50">
          <p className="text-4xl font-black text-orange-500">₹1.2L</p>
          <p className="text-slate-400 text-sm mt-1">Prize Pool</p>
        </div>

        {/* 4. Stats Block 2 */}
        <div className="bento-card col-span-2 md:col-span-1 justify-center items-center bg-slate-900 hover:border-cyan-500/50">
          <p className="text-4xl font-black text-cyan-500">25+</p>
          <p className="text-slate-400 text-sm mt-1">Cities</p>
        </div>

        {/* 5. SolveX Feature */}
        <Link href="/solvex" className="bento-card col-span-4 md:col-span-2 row-span-2 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-slate-900 transition group-hover:from-orange-900/40"></div>
          <div className="relative z-10 p-4">
            <div className="flex justify-between items-start mb-8">
              <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">COMPETITION</div>
              <span className="text-2xl group-hover:translate-x-1 transition">→</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">SOLVEX 2026</h3>
            <p className="text-slate-300 text-sm mb-6">National Innovation & Business Model Competition</p>

            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-orange-400 font-bold">Innovation Track</p>
                <p className="text-slate-400 text-xs">For Prototypes</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-orange-400 font-bold">Business Track</p>
                <p className="text-slate-400 text-xs">For MVPs</p>
              </div>
            </div>
          </div>
        </Link>

        {/* 6. PitchBiz Feature */}
        <Link href="/pitchbiz" className="bento-card col-span-4 md:col-span-2 lg:col-span-2 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900 transition group-hover:from-blue-900/40"></div>
          <div className="relative z-10 p-4">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">INVESTMENT</div>
              <span className="text-2xl group-hover:translate-x-1 transition">→</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">PITCHBIZ 5.0</h3>
            <p className="text-slate-300 text-sm">Investor & Startup Discovery Platform</p>
            <div className="flex gap-4 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">162</p>
                <p className="text-xs text-slate-400">Startups</p>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">18</p>
                <p className="text-xs text-slate-400">Investors</p>
              </div>
            </div>
          </div>
        </Link>

        {/* 7. Benefits Grid (Compact) */}
        <div className="bento-card col-span-4 justify-between bg-slate-900">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center w-full">
            <div className="p-2 hover:bg-slate-800 rounded-lg transition">
              <div className="text-2xl mb-1">💰</div>
              <div className="text-xs font-bold text-slate-300">Funding</div>
            </div>
            <div className="p-2 hover:bg-slate-800 rounded-lg transition">
              <div className="text-2xl mb-1">🚀</div>
              <div className="text-xs font-bold text-slate-300">Incubation</div>
            </div>
            <div className="p-2 hover:bg-slate-800 rounded-lg transition">
              <div className="text-2xl mb-1">👨‍🏫</div>
              <div className="text-xs font-bold text-slate-300">Mentorship</div>
            </div>
            <div className="p-2 hover:bg-slate-800 rounded-lg transition">
              <div className="text-2xl mb-1">🔧</div>
              <div className="text-xs font-bold text-slate-300">Makerspace</div>
            </div>
            <div className="p-2 hover:bg-slate-800 rounded-lg transition">
              <div className="text-2xl mb-1">🌐</div>
              <div className="text-xs font-bold text-slate-300">Network</div>
            </div>
            <div className="p-2 hover:bg-slate-800 rounded-lg transition">
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-xs font-bold text-slate-300">Awards</div>
            </div>
          </div>
        </div>

        {/* 8. Venue & Contact Info */}
        <div className="bento-card col-span-4 md:col-span-2 bg-gradient-to-r from-slate-800 to-slate-900">
          <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Venue</h4>
          <p className="text-white font-medium text-lg">Acropolis Group of Institutions</p>
          <p className="text-slate-400 text-sm">Indore, Madhya Pradesh</p>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-xs text-slate-500">Contact: esummit@acropolis.in</p>
          </div>
        </div>

        {/* 9. Footer Links */}
        <div className="bento-card col-span-4 md:col-span-2 items-center justify-center bg-slate-900">
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <Link href="/about" className="hover:text-white transition">About Us</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
            <Link href="/solvex" className="hover:text-white transition">SolveX</Link>
            <Link href="/pitchbiz" className="hover:text-white transition">PitchBiz</Link>
          </div>
        </div>

      </main>
    </div>
  );
}
