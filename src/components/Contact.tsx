'use client';
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, Globe } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-bg-secondary text-white relative border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-4">
                        <span className="text-glow-purple">SYSTEM</span> DIRECTIVES
                    </h2>
                    <p className="text-text-secondary text-lg font-mono-terminal">
                        // INITIATE_CONTACT_PROTOCOL
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-card glow-border-purple p-6 rounded-lg group hover-scale"
                    >
                        <div className="p-3 bg-accent-primary/20 rounded-xl inline-block mb-4 group-hover:bg-accent-primary/30 transition">
                            <MapPin className="w-6 h-6 text-accent-primary" />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2 text-accent">LOCATION</h3>
                        <p className="text-text-secondary text-sm font-mono-terminal">
                            Acropolis Institute<br />
                            Manglia Square, Indore (M.P.)
                        </p>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card glow-border-cyan p-6 rounded-lg group hover-scale"
                    >
                        <div className="p-3 bg-accent-secondary/20 rounded-xl inline-block mb-4 group-hover:bg-accent-secondary/30 transition">
                            <Mail className="w-6 h-6 text-accent-secondary" />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2 text-accent-secondary">EMAIL</h3>
                        <p className="text-text-secondary text-sm font-mono-terminal">
                            ecell@acropolis.in<br />
                            solve.x@acropolis.in
                        </p>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-card glow-border-purple p-6 rounded-lg group hover-scale"
                    >
                        <div className="p-3 bg-accent-primary/20 rounded-xl inline-block mb-4 group-hover:bg-accent-primary/30 transition">
                            <Globe className="w-6 h-6 text-accent-primary" />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2 text-accent">SOCIAL</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-primary/20 hover:text-accent transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent-secondary/20 hover:text-accent-secondary transition">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center pt-8 border-t border-white/10"
                >
                    <p className="text-text-muted text-sm font-mono-terminal">
                        © 2026 E-SUMMIT | POWERED BY AIIH FOUNDATION | ALL RIGHTS RESERVED
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
                            </div >

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
                        </div >

    <div className="flex gap-4 mt-12">
        <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition flex justify-center items-center"><Instagram className="w-5 h-5" /></a>
        <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition flex justify-center items-center"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition flex justify-center items-center"><Globe className="w-5 h-5" /></a>
    </div>
                    </motion.div >

    {/* Right: Map */ }
    < motion.div
initial = {{ opacity: 0, x: 30 }}
whileInView = {{ opacity: 1, x: 0 }}
viewport = {{ once: true }}
className = "h-[500px] w-full bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 relative"
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
                    </motion.div >
                </div >
            </div >
        </section >
    );
}
