'use client';
import { motion } from "framer-motion";
import Image from "next/image";

const brochures = [
    "/assets/brochures/brochure-1.jpg",
    "/assets/brochures/brochure-2.jpg",
    "/assets/brochures/brochure-3.png",
    "/assets/brochures/brochure-4.jpg",
    "/assets/brochures/brochure-5.png",
];

export default function BrochureColumn() {
    return (
        <section className="py-24 px-6 bg-background relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Official Posters</h2>
                    <p className="text-muted">Explore the official announcements and details.</p>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {brochures.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg shadow-black/10 dark:shadow-none border border-foreground/5 bg-card-theme"
                        >
                            <Image
                                src={src}
                                alt={`Brochure ${index + 1}`}
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover group-hover:brightness-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                                <p className="text-white font-medium">View Poster</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
