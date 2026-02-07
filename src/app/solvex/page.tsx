import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function SolveXPage() {
    return (
        <div className="relative min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-primary-blue-dark via-primary-blue to-primary-blue-light">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        SOLVE<span className="gradient-text">X</span> 2026
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300">
                        National Innovation & Business Model Competition
                    </p>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Where ideas meet execution. Where innovation turns real.
                    </p>
                </div>
            </section>

            {/* Prize Pool */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="glass-card px-10 py-8 inline-block">
                        <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">Total Prize Pool</p>
                        <p className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                            ₹1,20,000
                        </p>
                        <p className="text-sm text-gray-300">Plus special awards for Women in STEM by FICCI FLO</p>
                    </div>
                </div>
            </section>

            {/* Competition Tracks */}
            <section className="py-16 px-6 bg-primary-blue-light">
                <div className="max-w-6xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">Competition Tracks</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="space-y-6 p-8">
                            <div className="space-y-3">
                                <h3 className="text-3xl font-bold text-accent-red">Innovation Track</h3>
                                <p className="text-lg text-gray-300">Proof of Concept & Prototype Stage</p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-white">Ideal For:</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>✓ Early-stage innovators with working prototypes</li>
                                    <li>✓ Students and researchers with proof of concept</li>
                                    <li>✓ Entrepreneurs testing new technologies</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-white">What You'll Showcase:</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>✓ Problem-solution fit demonstration</li>
                                    <li>✓ Technical feasibility and innovation</li>
                                    <li>✓ Market potential and impact</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="space-y-6 p-8">
                            <div className="space-y-3">
                                <h3 className="text-3xl font-bold text-accent-orange">Business Model Track</h3>
                                <p className="text-lg text-gray-300">MVP, Product & Business Model Stage</p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-white">Ideal For:</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>✓ Startups with minimum viable product (MVP)</li>
                                    <li>✓ Businesses with established revenue models</li>
                                    <li>✓ Companies ready for scaling</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-white">What You'll Present:</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>✓ Business model viability</li>
                                    <li>✓ Market traction and revenue</li>
                                    <li>✓ Growth strategy and scalability</li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-6xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">Why Participate in SolveX?</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="text-center space-y-4 p-6">
                            <div className="text-5xl">💰</div>
                            <h3 className="text-xl font-bold">Funding Opportunities</h3>
                            <p className="text-sm text-gray-400">
                                Access to CampusFund and direct investor connections for promising ventures
                            </p>
                        </Card>

                        <Card className="text-center space-y-4 p-6">
                            <div className="text-5xl">🏆</div>
                            <h3 className="text-xl font-bold">Cash Prize Pool</h3>
                            <p className="text-sm text-gray-400">
                                ₹1,20,000 in total prizes plus special awards for women entrepreneurs
                            </p>
                        </Card>

                        <Card className="text-center space-y-4 p-6">
                            <div className="text-5xl">🚀</div>
                            <h3 className="text-xl font-bold">Incubation Support</h3>
                            <p className="text-sm text-gray-400">
                                Pre-incubation and incubation facilities at Acropolis Innovation Hub
                            </p>
                        </Card>

                        <Card className="text-center space-y-4 p-6">
                            <div className="text-5xl">👨‍🏫</div>
                            <h3 className="text-xl font-bold">Expert Mentorship</h3>
                            <p className="text-sm text-gray-400">
                                One-on-one guidance from successful entrepreneurs and industry leaders
                            </p>
                        </Card>

                        <Card className="text-center space-y-4 p-6">
                            <div className="text-5xl">🔧</div>
                            <h3 className="text-xl font-bold">Makerspace Access</h3>
                            <p className="text-sm text-gray-400">
                                Use state-of-the-art facilities at Acropolis Makerspace
                            </p>
                        </Card>

                        <Card className="text-center space-y-4 p-6">
                            <div className="text-5xl">🌐</div>
                            <h3 className="text-xl font-bold">National Visibility</h3>
                            <p className="text-sm text-gray-400">
                                Showcase your innovation on a national platform with media coverage
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 px-6 bg-primary-blue-light">
                <div className="max-w-5xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">Important Dates</h2>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <Card className="text-center space-y-4 p-8">
                            <div className="text-4xl mb-2">📅</div>
                            <h3 className="text-2xl font-bold text-accent-red">Jan 20, 2026</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Early Bird Deadline</p>
                            <p className="text-xs text-gray-500">Get special benefits for early registration</p>
                        </Card>

                        <Card className="text-center space-y-4 p-8">
                            <div className="text-4xl mb-2">⏰</div>
                            <h3 className="text-2xl font-bold text-accent-orange">Feb 05, 2026</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Final Registration</p>
                            <p className="text-xs text-gray-500">Last date to submit applications</p>
                        </Card>

                        <Card className="text-center space-y-4 p-8">
                            <div className="text-4xl mb-2">🎤</div>
                            <h3 className="text-2xl font-bold text-white">Mar 19-20, 2026</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Final Pitch & Demo</p>
                            <p className="text-xs text-gray-500">Live presentations at E-Summit</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold text-center">Who Should Apply?</h2>

                    <Card className="p-8 space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-accent-red">Eligible Participants:</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>✓ Students (Undergraduate & Postgraduate)</li>
                                    <li>✓ Innovators and Researchers</li>
                                    <li>✓ Faculty Members</li>
                                    <li>✓ Aspiring Entrepreneurs</li>
                                    <li>✓ Early-Stage Founders</li>
                                    <li>✓ Women in STEM</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4 text-accent-orange">Team Requirements:</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>✓ Individual or team participation (max 4 members)</li>
                                    <li>✓ At least one team member must attend final pitch</li>
                                    <li>✓ Cross-institutional teams welcome</li>
                                    <li>✓ Mentors can guide but not present</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 px-6 bg-primary-blue-light">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold">Ready to Innovate?</h2>
                    <p className="text-lg text-gray-300">
                        Have questions about SolveX 2026? Get in touch with us.
                    </p>

                    <div className="space-y-4">
                        <Button size="lg">Contact Us</Button>

                        <div className="pt-6 space-y-2">
                            <p className="text-sm text-gray-400">For queries:</p>
                            <p className="text-white font-semibold">solvex.edc@acropolis.in</p>
                            <div className="flex justify-center gap-4 text-sm text-gray-400 pt-2">
                                <p>Aaditya Singh: +91 7899015942</p>
                                <span>|</span>
                                <p>Abhas Jaiswal: +91 7828959204</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
