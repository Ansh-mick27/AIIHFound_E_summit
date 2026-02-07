import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CountdownTimer from "@/components/CountdownTimer";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-blue-dark via-primary-blue to-primary-blue-light opacity-95"></div>
        <div className="dna-pattern opacity-5"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
              Summit Acropolis Indore Presents
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              E-SUMMIT <span className="gradient-text">2026</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold">
              From <span className="text-white">WHAT IF</span> to <span className="gradient-text">WHY NOT</span>
            </p>
            <p className="text-base md:text-lg text-gray-300">
              A room full of people who refuse to play safe. Stories that sound like yours.
            </p>
          </div>

          {/* Event Date */}
          <div className="space-y-6 py-8">
            <p className="text-xl md:text-2xl font-semibold text-gray-200">
              📅 March 19-20, 2026
            </p>
            <CountdownTimer />
            <p className="text-sm text-gray-400 mt-4">
              Acropolis Group of Institutions, Indore, Madhya Pradesh
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/about">
              <Button size="lg" className="min-w-[200px]">
                Learn More
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Partners */}
          <div className="pt-12 text-sm text-gray-400">
            <p>Powered by: Acropolis · AIIH · FICCI FLO</p>
          </div>
        </div>
      </section>

      {/* SolveX Section */}
      <section className="py-20 px-6 bg-primary-blue">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">
              SOLVE<span className="gradient-text">X</span> 2026
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              National Innovation & Business Model Competition
            </p>
          </div>

          {/* Prize Pool */}
          <div className="text-center">
            <div className="inline-block glass-card px-8 py-6">
              <p className="text-sm text-gray-400 mb-2">PRIZE POOL</p>
              <p className="text-4xl md:text-5xl font-bold gradient-text">
                ₹1,20,000
              </p>
            </div>
          </div>

          {/* Competition Tracks */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="space-y-4">
              <h3 className="text-2xl font-bold text-accent-red">Innovation Track</h3>
              <p className="text-gray-300">
                Proof of Concept & Prototype Stage
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Transform ideas into reality</li>
                <li>✓ Showcase working prototypes</li>
                <li>✓ Expert validation & feedback</li>
              </ul>
            </Card>

            <Card className="space-y-4">
              <h3 className="text-2xl font-bold text-accent-orange">Business Model Track</h3>
              <p className="text-gray-300">
                MVP, Product & Business Model Stage
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Pitch your business model</li>
                <li>✓ Connect with investors</li>
                <li>✓ Scale your startup</li>
              </ul>
            </Card>
          </div>

          {/* Important Dates */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="glass-card p-6 text-center space-y-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Early Bird</p>
              <p className="text-xl font-bold text-accent-red">Jan 20</p>
            </div>
            <div className="glass-card p-6 text-center space-y-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Registration Closes</p>
              <p className="text-xl font-bold text-accent-orange">Feb 05</p>
            </div>
            <div className="glass-card p-6 text-center space-y-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Final Pitch</p>
              <p className="text-xl font-bold text-white">Mar 19-20</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link href="/solvex">
              <Button size="lg">Learn More About SolveX</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PitchBiz Section */}
      <section className="py-20 px-6 bg-primary-blue-light">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">
              PITCH<span className="gradient-text">BIZ</span> 5.0
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Investor & Startup Discovery Platform
            </p>
          </div>

          {/* Stats */}
          <Card className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8 text-center py-4">
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold gradient-text">162</p>
                <p className="text-sm text-gray-400">Startups</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold gradient-text">18</p>
                <p className="text-sm text-gray-400">Investors</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold gradient-text">25+</p>
                <p className="text-sm text-gray-400">Cities</p>
              </div>
            </div>
          </Card>

          {/* Description */}
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-gray-300">
              Selected startups pitch live before investors during the summit
            </p>
            <p className="text-sm text-gray-400">
              Building on PitchBiz 4.0's reach across 25+ cities with 162 startups from 15+ sectors
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-primary-blue">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Why Participate?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center space-y-3 p-8">
              <div className="text-4xl">💰</div>
              <h3 className="text-xl font-bold">Funding</h3>
              <p className="text-sm text-gray-400">CampusFund access & investor connections</p>
            </Card>
            <Card className="text-center space-y-3 p-8">
              <div className="text-4xl">🚀</div>
              <h3 className="text-xl font-bold">Incubation</h3>
              <p className="text-sm text-gray-400">Pre-incubation & incubation support</p>
            </Card>
            <Card className="text-center space-y-3 p-8">
              <div className="text-4xl">👨‍🏫</div>
              <h3 className="text-xl font-bold">Mentorship</h3>
              <p className="text-sm text-gray-400">Guidance from industry experts</p>
            </Card>
            <Card className="text-center space-y-3 p-8">
              <div className="text-4xl">🏆</div>
              <h3 className="text-xl font-bold">Visibility</h3>
              <p className="text-sm text-gray-400">National platform showcase</p>
            </Card>
            <Card className="text-center space-y-3 p-8">
              <div className="text-4xl">🔧</div>
              <h3 className="text-xl font-bold">Makerspace</h3>
              <p className="text-sm text-gray-400">Access to Acropolis facilities</p>
            </Card>
            <Card className="text-center space-y-3 p-8">
              <div className="text-4xl">🤝</div>
              <h3 className="text-xl font-bold">Networking</h3>
              <p className="text-sm text-gray-400">Connect with entrepreneurs</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-primary-blue-light">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              This Could Be Your <span className="gradient-text">Starting Line</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Where ideas meet execution. Where innovation turns real.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="min-w-[200px]">Contact Us</Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="min-w-[200px]">Event Details</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-primary-blue-dark border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-gray-400 text-sm">
            © 2026 E-Summit Acropolis Indore. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Contact: solvex.edc@acropolis.in | pitchbiz@acropolis.in
          </p>
        </div>
      </footer>
    </div>
  );
}

