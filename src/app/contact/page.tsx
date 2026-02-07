import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
    return (
        <div className="relative min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-primary-blue-dark via-primary-blue to-primary-blue-light">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Have questions? We're here to help!
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-6xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">Contact Information</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-8 space-y-6">
                            <div className="text-5xl text-center">🏆</div>
                            <h3 className="text-2xl font-bold text-center text-accent-red">SolveX Competition</h3>
                            <div className="space-y-4 text-center">
                                <div>
                                    <p className="text-sm text-gray-400 mb-2">Email</p>
                                    <p className="text-white font-semibold">solvex.edc@acropolis.in</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-2">Contact Persons</p>
                                    <p className="text-gray-300 text-sm">Aaditya Singh: +91 7899015942</p>
                                    <p className="text-gray-300 text-sm">Abhas Jaiswal: +91 7828959204</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8 space-y-6">
                            <div className="text-5xl text-center">🎤</div>
                            <h3 className="text-2xl font-bold text-center text-accent-orange">PitchBiz 5.0</h3>
                            <div className="space-y-4 text-center">
                                <div>
                                    <p className="text-sm text-gray-400 mb-2">Email</p>
                                    <p className="text-white font-semibold">pitchbiz@acropolis.in</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-2">For Queries</p>
                                    <p className="text-gray-300 text-sm">Write to us for startup and investor inquiries</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Venue */}
            <section className="py-16 px-6 bg-primary-blue-light">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold text-center">Venue</h2>

                    <Card className="p-8 space-y-6">
                        <div className="text-center space-y-4">
                            <div className="text-5xl">📍</div>
                            <h3 className="text-2xl font-bold">Acropolis Group of Institutions</h3>
                            <p className="text-gray-300">Indore, Madhya Pradesh</p>
                            <p className="text-sm text-gray-400">March 19-20, 2026</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-6 bg-primary-blue">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>

                    <div className="space-y-6">
                        <Card className="p-6 space-y-3">
                            <h3 className="text-xl font-bold text-accent-red">What is E-Summit 2026?</h3>
                            <p className="text-sm text-gray-400">
                                E-Summit 2026 is a two-day entrepreneurship summit organized by Acropolis featuring SolveX competition, PitchBiz platform, founder talks, panel discussions, masterclasses, and networking opportunities.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-3">
                            <h3 className="text-xl font-bold text-accent-orange">Who can participate?</h3>
                            <p className="text-sm text-gray-400">
                                Students, innovators, researchers, faculty, aspiring entrepreneurs, early-stage founders, and women in STEM are all welcome to participate in SolveX and PitchBiz.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-3">
                            <h3 className="text-xl font-bold text-white">How do I register?</h3>
                            <p className="text-sm text-gray-400">
                                Registration is done through separate platforms. Check the SolveX and PitchBiz pages for specific application details. QR codes for registration are available at the event venue and in promotional materials.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-3">
                            <h3 className="text-xl font-bold text-accent-red">What is the prize pool?</h3>
                            <p className="text-sm text-gray-400">
                                SolveX offers a total prize pool of ₹1,20,000 plus special awards for Women in STEM by FICCI FLO. Specific prize distribution will be announced during the event.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-3">
                            <h3 className="text-xl font-bold text-accent-orange">What are the important dates?</h3>
                            <p className="text-sm text-gray-400">
                                <strong>SolveX:</strong> Early Bird - Jan 20, Final Registration - Feb 05, Final Pitch - Mar 19-20<br />
                                <strong>PitchBiz:</strong> Investor Panel - Jan 25, Startup Applications - Feb 10, Live Pitches - Mar 19-20
                            </p>
                        </Card>

                        <Card className="p-6 space-y-3">
                            <h3 className="text-xl font-bold text-white">Can I participate in both SolveX and PitchBiz?</h3>
                            <p className="text-sm text-gray-400">
                                Yes! If you have an innovative idea or startup, you can participate in SolveX. If you're ready to pitch for funding, you can also apply for PitchBiz. The programs complement each other.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-3">
                            <h3 className="text-xl font-bold text-accent-red">What kind of support do participants get?</h3>
                            <p className="text-sm text-gray-400">
                                Participants get access to funding opportunities, incubation support at AIIH, expert mentorship, Acropolis Makerspace facilities, national visibility, and networking with investors and entrepreneurs.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-3">
                            <h3 className="text-xl font-bold text-accent-orange">Is there an entry fee?</h3>
                            <p className="text-sm text-gray-400">
                                Please check the respective SolveX and PitchBiz pages or contact us directly for information about registration fees and participation costs.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-primary-blue-light">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold">Still Have Questions?</h2>
                    <p className="text-lg text-gray-300">
                        Reach out to us directly - we're happy to help!
                    </p>

                    <div className="space-y-4">
                        <p className="text-sm text-gray-400">General Inquiries</p>
                        <p className="text-white font-semibold text-lg">esummit@acropolis.in</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
