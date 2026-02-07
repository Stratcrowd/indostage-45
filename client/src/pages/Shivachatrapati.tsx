import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Star } from "lucide-react";
import { Link } from "wouter";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const galleryImages = [
    "https://i.ibb.co/twk4MRfR/Whats-App-Image-2026-02-06-at-10-06-19-PM.jpg",
    "https://i.ibb.co/RGGhtDmT/Whats-App-Image-2026-02-06-at-10-06-25-PM.jpg",
    "https://i.ibb.co/HTV6YX5P/Whats-App-Image-2026-02-06-at-10-06-38-PM.jpg",
    "https://i.ibb.co/mrs2YwxQ/Whats-App-Image-2026-02-06-at-10-06-18-PM-1.jpg",
    "https://i.ibb.co/whDWSR3R/Whats-App-Image-2026-02-06-at-10-06-40-PM.jpg",
    "https://i.ibb.co/GQzpL62k/Whats-App-Image-2026-02-06-at-10-06-31-PM.jpg",
];

export default function Shivachatrapati() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://i.ibb.co/tpZbH5p2/Whats-App-Image-2026-02-06-at-10-06-19-PM-2.jpg)` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase mb-4">
                            A Grand Historical Musical
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                            Shivachatrapati <br />
                            <span className="text-primary">Varasa Shauryacha</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/90 mb-10 font-light">
                            "The Legacy of Bravery" — An Epic Saga of Maratha Valor
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                                Book Tickets Now
                                <ArrowRight className="ml-2" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About The Program */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold mb-6 text-foreground">
                            Relive History
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
                            "Shivachatrapati Varasa Shauryacha" is a magnificent musical drama that brings to life the inspiring journey of Chhatrapati Shivaji Maharaj. Through powerful storytelling, stirring music, and spectacular performances, we celebrate the courage, wisdom, and indomitable spirit of the great Maratha warrior.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Witness the grandeur of the Maratha empire, the strategic brilliance of its battles, and the cultural renaissance that defined an era. This production uses state-of-the-art stagecraft to transport you back in time.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Star size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">World-Class Production</h3>
                                    <p className="text-muted-foreground">Featuring over 50 artists and live musicians.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Touring Across India</h3>
                                    <p className="text-muted-foreground">Coming to Mumbai, Pune, and Nagpur soon.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://i.ibb.co/LhYtnZzy/Whats-App-Image-2026-02-06-at-10-06-24-PM.jpg"
                                alt="Performance Still 1"
                                className="rounded-xl shadow-lg w-full h-64 object-cover mt-12"
                            />
                            <img
                                src="https://i.ibb.co/DmBMmXK/Whats-App-Image-2026-02-06-at-10-06-29-PM.jpg"
                                alt="Performance Still 2"
                                className="rounded-xl shadow-lg w-full h-64 object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Glimpses of Glory</h2>
                        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                            Capturing the essence of the performance — the emotions, the energy, and the grandeur.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-80"
                            >
                                <img
                                    src={img}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
                                        <Star className="text-white w-8 h-8" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 container mx-auto px-4 text-center">
                <div className="bg-primary text-primary-foreground rounded-3xl p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Experience the Legacy Live</h2>
                        <p className="text-lg md:text-xl opacity-90 mb-10">
                            Don't miss this opportunity to witness history unfold on stage. Secure your seats for an unforgettable evening.
                        </p>
                        <Button size="lg" variant="secondary" className="text-primary font-bold px-10 py-6 text-lg">
                            Check Show Dates
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
