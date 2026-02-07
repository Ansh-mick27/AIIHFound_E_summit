'use client';

import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      {/* Hero Section - Full Screen Centered */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-5xl w-full mx-auto text-center space-y-16">

          {/* Main Title */}
          <div className="space-y-8">
            <div className="text-sm md:text-base text-purple-300 uppercase tracking-[0.3em] font-light">
              Acropolis Indore Presents
            </div>

            <h1 className="text-8xl md:text-9xl font-black tracking-tighter">
              E-SUMMIT
              <span className="block text-7xl md:text-8xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                2026
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-2xl mx-auto">
              Innovation · Execution · Excellence
            </p>
          </div>

          {/* Date Card */}
          <div className="inline-block">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl">
              <div className="text-5xl font-bold mb-6">March 19-20, 2026</div>
              <div className="text-lg text-gray-400">Acropolis, Indore</div>
            </div>
          </div>

          {/* Countdown */}
          <div className="pt-8">
            <CountdownTimer />
          </div>

          {/* Scroll Hint */}
          <div className="pt-16 animate-bounce">
            <div className="text-5xl text-purple-400">↓</div>
          </div>
        </div>
      </section>

      {/* SolveX Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-black/20">
        <div className="max-w-6xl w-full mx-auto text-center space-y-20">

          <div className="space-y-6">
            <h2 className="text-7xl md:text-8xl font-black">
              SOLVE<span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">X</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
              National Innovation Competition
            </p>
          </div>

          {/* Prize */}
          <div className="inline-block">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-16 shadow-2xl transform hover:scale-105 transition">
              <div className="text-xl text-orange-100 mb-4">Prize Pool</div>
              <div className="text-8xl md:text-9xl font-black">₹1.2L</div>
              <div className="text-lg text-orange-100 mt-4">+ FICCI FLO Awards</div>
            </div>
          </div>

          {/* Tracks */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 hover:bg-white/20 transition">
              <div className="text-6xl mb-6">💡</div>
              <div className="text-3xl font-bold mb-4">Innovation</div>
              <div className="text-gray-400">Proof of Concept</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 hover:bg-white/20 transition">
              <div className="text-6xl mb-6">📊</div>
              <div className="text-3xl font-bold mb-4">Business</div>
              <div className="text-gray-400">MVP & Product</div>
            </div>
          </div>

          {/* Dates */}
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="bg-white/5 rounded-2xl p-8 min-w-[160px]">
              <div className="text-4xl mb-3">📅</div>
              <div className="text-3xl font-bold text-orange-400">Jan 20</div>
              <div className="text-sm text-gray-500 mt-2">Early Bird</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 min-w-[160px]">
              <div className="text-4xl mb-3">⏰</div>
              <div className="text-3xl font-bold text-red-400">Feb 05</div>
              <div className="text-sm text-gray-500 mt-2">Final Date</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 min-w-[160px]">
              <div className="text-4xl mb-3">🎤</div>
              <div className="text-3xl font-bold">Mar 19-20</div>
              <div className="text-sm text-gray-500 mt-2">Finals</div>
            </div>
          </div>
        </div>
      </section>

      {/* PitchBiz Section */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-6xl w-full mx-auto text-center space-y-20">

          <div className="space-y-6">
            <h2 className="text-7xl md:text-8xl font-black">
              PITCH<span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">BIZ</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
              Startup-Investor Platform
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10">
              <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">162</div>
              <div className="text-sm text-gray-400 mt-3">Startups</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10">
              <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">18</div>
              <div className="text-sm text-gray-400 mt-3">Investors</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10">
              <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">25+</div>
              <div className="text-sm text-gray-400 mt-3">Cities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10">
              <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-gray-400 mt-3">Sectors</div>
            </div>
          </div>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connecting startups with investors through live pitch sessions
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-black/20">
        <div className="max-w-7xl w-full mx-auto text-center space-y-20">

          <h2 className="text-7xl font-black">
            What You <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Get</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-3xl p-12 hover:bg-white/10 transition">
              <div className="text-7xl mb-6">💰</div>
              <div className="text-2xl font-bold mb-3">Funding</div>
              <div className="text-gray-400">CampusFund & Investors</div>
            </div>

            <div className="bg-white/5 rounded-3xl p-12 hover:bg-white/10 transition">
              <div className="text-7xl mb-6">🚀</div>
              <div className="text-2xl font-bold mb-3">Incubation</div>
              <div className="text-gray-400">AIIH Support</div>
            </div>

            <div className="bg-white/5 rounded-3xl p-12 hover:bg-white/10 transition">
              <div className="text-7xl mb-6">👨‍🏫</div>
              <div className="text-2xl font-bold mb-3">Mentorship</div>
              <div className="text-gray-400">Industry Experts</div>
            </div>

            <div className="bg-white/5 rounded-3xl p-12 hover:bg-white/10 transition">
              <div className="text-7xl mb-6">🔧</div>
              <div className="text-2xl font-bold mb-3">Makerspace</div>
              <div className="text-gray-400">Premium Facilities</div>
            </div>

            <div className="bg-white/5 rounded-3xl p-12 hover:bg-white/10 transition">
              <div className="text-7xl mb-6">🌐</div>
              <div className="text-2xl font-bold mb-3">Visibility</div>
              <div className="text-gray-400">National Platform</div>
            </div>

            <div className="bg-white/5 rounded-3xl p-12 hover:bg-white/10 transition">
              <div className="text-7xl mb-6">🤝</div>
              <div className="text-2xl font-bold mb-3">Network</div>
              <div className="text-gray-400">Founders & Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-5xl w-full mx-auto text-center space-y-20">

          <h2 className="text-7xl font-black">Connect</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-14">
              <div className="text-6xl mb-6">🏆</div>
              <div className="text-4xl font-bold mb-6 text-orange-400">SolveX</div>
              <div className="space-y-3 text-gray-300">
                <div className="text-lg">solvex.edc@acropolis.in</div>
                <div className="text-sm opacity-75">Aaditya: +91 7899015942</div>
                <div className="text-sm opacity-75">Abhas: +91 7828959204</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-14">
              <div className="text-6xl mb-6">🎤</div>
              <div className="text-4xl font-bold mb-6 text-blue-400">PitchBiz</div>
              <div className="space-y-3 text-gray-300">
                <div className="text-lg">pitchbiz@acropolis.in</div>
                <div className="text-sm opacity-75 mt-4">Startup & Investor Queries</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-10 max-w-2xl mx-auto">
            <div className="text-sm text-gray-500 mb-3">General Inquiries</div>
            <div className="text-3xl font-bold">esummit@acropolis.in</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-white/10 bg-black/40">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-4xl font-black">
            E-SUMMIT <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">2026</span>
          </div>
          <div className="text-gray-400 space-y-2">
            <div>Acropolis • AIIH • EDC</div>
            <div className="text-sm text-gray-600">FICCI FLO • Indian Steps • ION • StartLabs</div>
          </div>
          <div className="text-sm text-gray-600 pt-8">
            © 2026 E-Summit Acropolis
          </div>
        </div>
      </footer>

    </main>
  );
}
