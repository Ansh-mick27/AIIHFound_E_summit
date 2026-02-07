import Card from "@/components/ui/Card";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-primary-blue-dark via-primary-blue to-primary-blue-light">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        About E-SUMMIT <span className="gradient-text">2026</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        India's Premier Entrepreneurship Summit
                    </p>
                </div>
            </section>

            {/* Vision */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold text-center">Our Vision</h2>
                    <Card className="p-8 space-y-4 text-center">
                        <p className="text-lg text-gray-300">
                            E-Summit 2026 is designed to ignite the entrepreneurial spirit in students, innovators, and aspiring founders across India. We bring together a vibrant ecosystem of startups, investors, mentors, and industry leaders to foster innovation, collaboration, and growth.
                        </p>
                        <p className="text-base text-gray-400">
                            From "What If" to "Why Not" - we inspire participants to transform their ideas into impactful ventures that shape the future.
                        </p>
                    </Card>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-16 px-6 bg-primary-blue-light">
                <div className="max-w-6xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">What E-Summit Offers</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="space-y-4 p-6">
                            <div className="text-5xl text-center">🏆</div>
                            <h3 className="text-2xl font-bold text-center text-accent-red">Competitions</h3>
                            <p className="text-sm text-gray-400 text-center">
                                SolveX - National Innovation & Business Model Competition with ₹1,20,000 prize pool
                            </p>
                        </Card>

                        <Card className="space-y-4 p-6">
                            <div className="text-5xl text-center">🎤</div>
                            <h3 className="text-2xl font-bold text-center text-accent-orange">Pitching Platform</h3>
                            <p className="text-sm text-gray-400 text-center">
                                PitchBiz 5.0 - Connect startups with investors through live pitch sessions
                            </p>
                        </Card>

                        <Card className="space-y-4 p-6">
                            <div className="text-5xl text-center">💡</div>
                            <h3 className="text-2xl font-bold text-center text-white">Founder Talks</h3>
                            <p className="text-sm text-gray-400 text-center">
                                Learn from successful entrepreneurs who've built impactful businesses
                            </p>
                        </Card>

                        <Card className="space-y-4 p-6">
                            <div className="text-5xl text-center">👥</div>
                            <h3 className="text-2xl font-bold text-center text-accent-red">Panel Discussions</h3>
                            <p className="text-sm text-gray-400 text-center">
                                Expert panels on investment, innovation, and entrepreneurship trends
                            </p>
                        </Card>

                        <Card className="space-y-4 p-6">
                            <div className="text-5xl text-center">📚</div>
                            <h3 className="text-2xl font-bold text-center text-accent-orange">Masterclasses</h3>
                            <p className="text-sm text-gray-400 text-center">
                                Investment readiness and go-to-market strategy workshops
                            </p>
                        </Card>

                        <Card className="space-y-4 p-6">
                            <div className="text-5xl text-center">🤝</div>
                            <h3 className="text-2xl font-bold text-center text-white">Networking</h3>
                            <p className="text-sm text-gray-400 text-center">
                                Mentory circles and roundtable discussions with industry leaders
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Organizers */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-6xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">Organized By</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-8 space-y-4 text-center">
                            <h3 className="text-2xl font-bold">Acropolis</h3>
                            <p className="text-sm text-gray-400">
                                Acropolis Group of Institutions - Enlightening Wisdom
                            </p>
                            <p className="text-xs text-gray-500">
                                Premier educational institution committed to fostering innovation and entrepreneurship
                            </p>
                        </Card>

                        <Card className="p-8 space-y-4 text-center">
                            <h3 className="text-2xl font-bold">AIIH</h3>
                            <p className="text-sm text-gray-400">
                                Acropolis Innovation & Incubation Hub
                            </p>
                            <p className="text-xs text-gray-500">
                                State-of-the-art incubation facility supporting early-stage startups
                            </p>
                        </Card>

                        <Card className="p-8 space-y-4 text-center">
                            <h3 className="text-2xl font-bold">EDC</h3>
                            <p className="text-sm text-gray-400">
                                Entrepreneurship Development Cell
                            </p>
                            <p className="text-xs text-gray-500">
                                Student-driven cell promoting entrepreneurial culture on campus
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-16 px-6 bg-primary-blue-light">
                <div className="max-w-6xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">Our Partners</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 text-center space-y-2">
                            <h3 className="text-lg font-bold">FICCI FLO</h3>
                            <p className="text-xs text-gray-400">FICCI Ladies Organisation</p>
                        </Card>

                        <Card className="p-6 text-center space-y-2">
                            <h3 className="text-lg font-bold">Indian Steps</h3>
                            <p className="text-xs text-gray-400">Business Incubators Association</p>
                        </Card>

                        <Card className="p-6 text-center space-y-2">
                            <h3 className="text-lg font-bold">ION</h3>
                            <p className="text-xs text-gray-400">Indore Network of Entrepreneurs</p>
                        </Card>

                        <Card className="p-6 text-center space-y-2">
                            <h3 className="text-lg font-bold">StartLabs</h3>
                            <p className="text-xs text-gray-400">Startup Support Platform</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Event Details */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold text-center">Event Details</h2>

                    <Card className="p-8 space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-accent-red">📅 When</h3>
                                <p className="text-gray-300">March 19-20, 2026</p>
                                <p className="text-sm text-gray-400">Two days of innovation and inspiration</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-accent-orange">📍 Where</h3>
                                <p className="text-gray-300">Acropolis Group of Institutions</p>
                                <p className="text-sm text-gray-400">Indore, Madhya Pradesh, India</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white">👥 Who</h3>
                                <p className="text-gray-300">Students, Entrepreneurs, Investors</p>
                                <p className="text-sm text-gray-400">Open to all innovation enthusiasts</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-accent-red">💡 What</h3>
                                <p className="text-gray-300">Summit + Competition + Networking</p>
                                <p className="text-sm text-gray-400">Full entrepreneurship experience</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
