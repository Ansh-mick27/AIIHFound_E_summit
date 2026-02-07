import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Navigation from "@/components/Navigation";

export default function PitchBizPage() {
    return (
        <div className="relative min-h-screen">
            <Navigation />
            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-primary-blue-dark via-primary-blue to-primary-blue-light">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        PITCH<span className="gradient-text">BIZ</span> 5.0
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300">
                        An Investor & Startup Discovery Platform
                    </p>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Connecting innovative startups with investors who believe in their vision
                    </p>
                </div>
            </section>

            {/* Success Stats */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="text-center space-y-3">
                        <h2 className="text-4xl font-bold">Building on PitchBiz 4.0 Success</h2>
                        <p className="text-gray-300">Our platform has already made significant impact</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center space-y-3 p-8">
                            <p className="text-5xl font-bold gradient-text">162</p>
                            <p className="text-sm text-gray-400">Startup Applications</p>
                        </Card>
                        <Card className="text-center space-y-3 p-8">
                            <p className="text-5xl font-bold gradient-text">18</p>
                            <p className="text-sm text-gray-400">Investors Engaged</p>
                        </Card>
                        <Card className="text-center space-y-3 p-8">
                            <p className="text-5xl font-bold gradient-text">25+</p>
                            <p className="text-sm text-gray-400">Cities Reached</p>
                        </Card>
                        <Card className="text-center space-y-3 p-8">
                            <p className="text-5xl font-bold gradient-text">15+</p>
                            <p className="text-sm text-gray-400">Sectors Covered</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What is PitchBiz */}
            <section className="py-16 px-6 bg-primary-blue-light">
                <div className="max-w-5xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">What is PitchBiz 5.0?</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="space-y-6 p-8">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold text-accent-red">For Startups</h3>
                            <p className="text-gray-300">
                                A platform to showcase your innovation, pitch to real investors, and get funding opportunities
                            </p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>✓ Live pitch sessions with investors</li>
                                <li>✓ Direct investor feedback and connections</li>
                                <li>✓ Exposure to 18+ active investors</li>
                                <li>✓ Media coverage and visibility</li>
                                <li>✓ Networking with fellow entrepreneurs</li>
                            </ul>
                        </Card>

                        <Card className="space-y-6 p-8">
                            <div className="text-5xl mb-4">💼</div>
                            <h3 className="text-2xl font-bold text-accent-orange">For Investors</h3>
                            <p className="text-gray-300">
                                Discover high-potential startups across sectors and connect with founders ready to scale
                            </p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>✓ Curated startup deal flow</li>
                                <li>✓ Live pitch presentations</li>
                                <li>✓ Networking with co-investors</li>
                                <li>✓ Access to diverse sectors (15+)</li>
                                <li>✓ Express interest in promising ventures</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-6xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">How PitchBiz Works</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="space-y-4 p-8 text-center">
                            <div className="text-4xl mb-2">1️⃣</div>
                            <h3 className="text-xl font-bold">Apply & Get Selected</h3>
                            <p className="text-sm text-gray-400">
                                Startups and investors apply through QR codes. Promising ventures and relevant investors are shortlisted
                            </p>
                        </Card>

                        <Card className="space-y-4 p-8 text-center">
                            <div className="text-4xl mb-2">2️⃣</div>
                            <h3 className="text-xl font-bold">Live Pitch Sessions</h3>
                            <p className="text-sm text-gray-400">
                                Selected startups present 12 live pitches before investor panel during E-Summit 2026
                            </p>
                        </Card>

                        <Card className="space-y-4 p-8 text-center">
                            <div className="text-4xl mb-2">3️⃣</div>
                            <h3 className="text-xl font-bold">Connect & Grow</h3>
                            <p className="text-sm text-gray-400">
                                Investors express interest, startups get feedback, and meaningful connections are formed for future growth
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 px-6 bg-primary-blue-light">
                <div className="max-w-6xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">Why PitchBiz?</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="text-center space-y-4 p-6">
                            <div className="text-4xl">🎯</div>
                            <h3 className="text-xl font-bold">Curated Matching</h3>
                            <p className="text-sm text-gray-400">We carefully match startups with relevant investors based on sector and stage</p>
                        </Card>

                        <Card className="text-center space-y-4 p-6">
                            <div className="text-4xl">🎤</div>
                            <h3 className="text-xl font-bold">12 Live Pitches</h3>
                            <p className="text-sm text-gray-400">Selected startups get prime time slots to pitch before investor audience</p>
                        </Card>

                        <Card className="text-center space-y-4 p-6">
                            <div className="text-4xl">📊</div>
                            <h3 className="text-xl font-bold">51 Expressions</h3>
                            <p className="text-sm text-gray-400">Previous edition saw 51 expressions of interest from investors</p>
                        </Card>

                        <Card className="text-center space-y-4 p-6">
                            <div className="text-4xl">🤝</div>
                            <h3 className="text-xl font-bold">Direct Connections</h3>
                            <p className="text-sm text-gray-400">Post-pitch networking sessions for deeper investor conversations</p>
                        </Card>

                        <Card className="text-center space-y-4 p-6">
                            <div className="text-4xl">📍</div>
                            <h3 className="text-xl font-bold">National Reach</h3>
                            <p className="text-sm text-gray-400">Startups and investors from 25+ cities across India participate</p>
                        </Card>

                        <Card className="text-center space-y-4 p-6">
                            <div className="text-4xl">🏆</div>
                            <h3 className="text-xl font-bold">Expert Panel</h3>
                            <p className="text-sm text-gray-400">Evaluation by seasoned VCs, angel investors, and industry leaders</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-5xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">Important Dates</h2>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <Card className="text-center space-y-4 p-8">
                            <div className="text-4xl mb-2">👥</div>
                            <h3 className="text-2xl font-bold text-accent-red">Jan 25, 2026</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Investor Panel Deadline</p>
                            <p className="text-xs text-gray-500">Last date to join investor panel</p>
                        </Card>

                        <Card className="text-center space-y-4 p-8">
                            <div className="text-4xl mb-2">🚀</div>
                            <h3 className="text-2xl font-bold text-accent-orange">Feb 10, 2026</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Startup Applications Close</p>
                            <p className="text-xs text-gray-500">Final date for startup submissions</p>
                        </Card>

                        <Card className="text-center space-y-4 p-8">
                            <div className="text-4xl mb-2">🎤</div>
                            <h3 className="text-2xl font-bold text-white">Mar 19-20, 2026</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Live Pitch Event</p>
                            <p className="text-xs text-gray-500">During E-Summit 2026</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-16 px-6 bg-primary-blue-light">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold text-center">Our Partners</h2>

                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                        <Card className="p-6 space-y-2">
                            <h3 className="font-bold">Indian Steps</h3>
                            <p className="text-xs text-gray-400">Business Incubators Association - ISBA</p>
                        </Card>
                        <Card className="p-6 space-y-2">
                            <h3 className="font-bold">ION</h3>
                            <p className="text-xs text-gray-400">Indore Network of Entrepreneurs</p>
                        </Card>
                        <Card className="p-6 space-y-2">
                            <h3 className="font-bold">StartLabs</h3>
                            <p className="text-xs text-gray-400">Startup Support Platform</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold">Join PitchBiz 5.0</h2>
                    <p className="text-lg text-gray-300">
                        Whether you're a startup seeking investment or an investor looking for opportunities
                    </p>

                    <div className="space-y-4">
                        <Button size="lg">Get More Information</Button>

                        <div className="pt-6 space-y-3">
                            <p className="text-sm text-gray-400">For queries:</p>
                            <p className="text-white font-semibold">pitchbiz@acropolis.in</p>
                            <div className="pt-4 text-xs text-gray-500">
                                <p className="mb-2">Scan QR codes (available at venue) to:</p>
                                <div className="flex justify-center gap-8">
                                    <p>• Apply as Startup</p>
                                    <p>• Join as Investor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
