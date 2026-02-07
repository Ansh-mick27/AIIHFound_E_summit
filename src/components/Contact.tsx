'use client';
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, Linkedin, Globe, Smartphone } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-24 px-6 bg-neutral-950 text-white relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Left: Get in Touch */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-black mb-8">Get In Touch</h2>
                        <p className="text-neutral-400 mb-12 text-lg">
                            Have questions about the summit, competitions, or sponsorships? Reach out to us.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    className="p-3 bg-white/5 rounded-xl group-hover:bg-blue-600/20 group-hover:text-blue-500 transition cursor-pointer"
                                >
                                    <MapPin className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                                    <p className="text-neutral-400">
                                        Acropolis Institute of Technology & Research<br />
                                        Bypass Road, Manglia Square, Indore (M.P.)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -10 }}
                                    className="p-3 bg-white/5 rounded-xl group-hover:bg-green-600/20 group-hover:text-green-500 transition cursor-pointer"
                                >
                                    <Mail className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Email</h3>
                                    <p className="text-neutral-400">ecell@acropolis.in</p>
                                    <p className="text-neutral-400">solve.x@acropolis.in</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-600/20 group-hover:text-purple-500 transition cursor-pointer"
                                >
                                    <Smartphone className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Mobile</h3>
                                    <p className="text-neutral-400">+91 98765 43210 (Student Head)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -10 }}
                                    className="p-3 bg-white/5 rounded-xl group-hover:bg-orange-600/20 group-hover:text-orange-500 transition cursor-pointer"
                                >
                                    <Phone className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Landline</h3>
                                    <p className="text-neutral-400">0731 4730000 (Campus)</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition flex justify-center items-center"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition flex justify-center items-center"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition flex justify-center items-center"><Globe className="w-5 h-5" /></a>
                        </div>
                    </motion.div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-[500px] w-full bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 relative"
                    >
                        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-500">
                            {/* Placeholder for iframe to avoid heavy load in preview, real iframe acts same */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.358727142646!2d75.93278557595304!3d22.751689328222622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963038d1e34e557%3A0x679075727c95610b!2sAcropolis%20Institute%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1707297825595!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition duration-700"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
