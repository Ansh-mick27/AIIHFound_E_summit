'use client';

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-blue-dark via-primary-blue to-primary-blue-light">

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="absolute inset-0 dna-pattern opacity-5"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
          {/* Main Title */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide uppercase">
              Summit Acropolis Indore Presents
            </p>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              E-SUMMIT <span className="gradient-text">2026</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-light">
              Where Innovation Meets Execution
            </p>
          </div>

          {/* Date and Countdown */}
          <div className="space-y-8 py-12">
            <div className="text-3xl md:text-4xl font-semibold text-white">
              📅 March 19-20, 2026
            </div>
            <CountdownTimer />
            <p className="text-lg text-gray-300">
              Acropolis Group of Institutions, Indore
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-4xl">↓</div>
        </div>
      </section>

      {/* SolveX Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-bold">
              SOLVE<span className="gradient-text">X</span> 2026
            </h2>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
              National Innovation & Business Model Competition
            </p>
          </div>

          {/* Prize Pool */}
          <div className="inline-block">
            <Card className="px-16 py-10 transform hover:scale-105 transition-transform duration-300">
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">Total Prize Pool</p>
              <p className="text-7xl md:text-8xl font-bold gradient-text mb-4">₹1.2L</p>
              <p className="text-base text-gray-300">Plus Special Awards by FICCI FLO</p>
            </Card>
          </div>

          {/* Tracks */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto pt-8">
            <Card className="p-10 space-y-6 text-center hover:shadow-2xl transition-all duration-300">
              <div className="text-6xl">💡</div>
              <h3 className="text-3xl font-bold text-accent-red">Innovation Track</h3>
              <p className="text-lg text-gray-300">Proof of Concept & Prototype Stage</p>
            </Card>

            <Card className="p-10 space-y-6 text-center hover:shadow-2xl transition-all duration-300">
              <div className="text-6xl">📊</div>
              <h3 className="text-3xl font-bold text-accent-orange">Business Track</h3>
              <p className="text-lg text-gray-300">MVP & Product Stage</p>
            </Card>
          </div>

          {/* Key Dates */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12">
            <div className="space-y-3">
              <div className="text-5xl">📅</div>
              <div className="text-2xl font-bold text-accent-red">Jan 20</div>
              <p className="text-sm text-gray-400">Early Bird Deadline</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl">⏰</div>
              <div className="text-2xl font-bold text-accent-orange">Feb 05</div>
              <p className="text-sm text-gray-400">Final Registration</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl">🎤</div>
              <div className="text-2xl font-bold text-white">Mar 19-20</div>
              <p className="text-sm text-gray-400">Final Pitch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-white/20"></div>

      {/* PitchBiz Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-bold">
              PITCH<span className="gradient-text">BIZ</span> 5.0
            </h2>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
              Investor & Startup Discovery Platform
            </p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 space-y-3 hover:shadow-2xl transition-all duration-300">
              <p className="text-5xl font-bold gradient-text">162</p>
              <p className="text-sm text-gray-400">Startups</p>
            </Card>
            <Card className="p-8 space-y-3 hover:shadow-2xl transition-all duration-300">
              <p className="text-5xl font-bold gradient-text">18</p>
              <p className="text-sm text-gray-400">Investors</p>
            </Card>
            <Card className="p-8 space-y-3 hover:shadow-2xl transition-all duration-300">
              <p className="text-5xl font-bold gradient-text">25+</p>
              <p className="text-sm text-gray-400">Cities</p>
            </Card>
            <Card className="p-8 space-y-3 hover:shadow-2xl transition-all duration-300">
              <p className="text-5xl font-bold gradient-text">15+</p>
              <p className="text-sm text-gray-400">Sectors</p>
            </Card>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto pt-8">
            Live pitch sessions connecting innovative startups with investors who believe in their vision
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-white/20"></div>

      {/* Benefits Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="text-6xl font-bold text-center">
            What You <span className="gradient-text">Gain</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="text-7xl">💰</div>
              <h3 className="text-2xl font-bold">Funding Access</h3>
              <p className="text-gray-400">Connect with CampusFund and investors</p>
            </div>

            <div className="text-center space-y-6">
              <div className="text-7xl">🚀</div>
              <h3 className="text-2xl font-bold">Incubation</h3>
              <p className="text-gray-400">Support at Acropolis Innovation Hub</p>
            </div>

            <div className="text-center space-y-6">
              <div className="text-7xl">👨‍🏫</div>
              <h3 className="text-2xl font-bold">Mentorship</h3>
              <p className="text-gray-400">Guidance from industry experts</p>
            </div>

            <div className="text-center space-y-6">
              <div className="text-7xl">🔧</div>
              <h3 className="text-2xl font-bold">Makerspace</h3>
              <p className="text-gray-400">State-of-the-art facilities</p>
            </div>

            <div className="text-center space-y-6">
              <div className="text-7xl">🌐</div>
              <h3 className="text-2xl font-bold">Visibility</h3>
              <p className="text-gray-400">National platform exposure</p>
            </div>

            <div className="text-center space-y-6">
              <div className="text-7xl">🤝</div>
              <h3 className="text-2xl font-bold">Network</h3>
              <p className="text-gray-400">Connect with founders & investors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-white/20"></div>

      {/* Contact Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <h2 className="text-6xl font-bold">
            Get <span className="gradient-text">Involved</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-12 space-y-6 hover:shadow-2xl transition-all duration-300">
              <div className="text-6xl">🏆</div>
              <h3 className="text-3xl font-bold text-accent-red">SolveX</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm">solvex.edc@acropolis.in</p>
                <p className="text-xs">Aaditya: +91 7899015942</p>
                <p className="text-xs">Abhas: +91 7828959204</p>
              </div>
            </Card>

            <Card className="p-12 space-y-6 hover:shadow-2xl transition-all duration-300">
              <div className="text-6xl">🎤</div>
              <h3 className="text-3xl font-bold text-accent-orange">PitchBiz</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm">pitchbiz@acropolis.in</p>
                <p className="text-xs mt-4">For startup & investor inquiries</p>
              </div>
            </Card>
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-gray-400 text-sm">General Inquiries</p>
            <p className="text-2xl font-semibold text-white">esummit@acropolis.in</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <p className="text-3xl font-bold">
              E-SUMMIT <span className="gradient-text">2026</span>
            </p>
            <p className="text-gray-400">Organized by Acropolis · AIIH · EDC</p>
            <p className="text-sm text-gray-500">Powered by FICCI FLO · Indian Steps · ION · StartLabs</p>
          </div>

          <div className="pt-8 text-sm text-gray-500">
            <p>© 2026 E-Summit Acropolis. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
