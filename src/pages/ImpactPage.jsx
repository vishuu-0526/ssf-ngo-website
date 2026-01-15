import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaHandHoldingHeart, FaStar, FaUserGraduate } from "react-icons/fa";

import ImpactStories from "../components/ImpactStories";

export default function ImpactPage() {

    const volunteerStories = [
        {
            name: "Priya Sharma",
            role: "Volunteer Teacher",
            quote: "I thought I was going to teach them, but these children taught me resilience. Seeing their hunger for knowledge changes you forever.",
        },
        {
            name: "Rahul Verma",
            role: "Community Mentor",
            quote: "Helping a village get clean water access was the proudest moment of my life. SSF gave me the platform to serve real people.",
        }
    ];

    return (
        <div className="w-full font-inria bg-white">

            {/* ================= HERO ================= */}
            <section className="bg-[#001529] text-white pt-48 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/real/ngo_event_2.jpg" alt="Impact" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001529] via-[#001529]/60 to-transparent"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-[#d90429] text-white text-xs font-bold rounded-full mb-6 tracking-[0.2em] uppercase">
                                Real Lives. Real Change.
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                                Impact &{" "}
                                <span className="text-[#fb8500]">
                                    Success Stories.
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-xl text-zinc-300 leading-relaxed font-medium"
                        >
                            Behind every number is a name, a face, and a story of transformation. These are a few of the lives
                            your support has changed forever.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="hidden lg:block glass-effect rounded-[2.5rem] p-10 shadow-2xl"
                    >
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#fb8500] mb-8">
                            Impact Snapshot
                        </p>
                        <div className="grid grid-cols-2 gap-10 text-left">
                            <div className="space-y-2">
                                <p className="text-4xl font-extrabold text-white">15,000+</p>
                                <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">
                                    Children Educated
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-4xl font-extrabold text-white">5,000+</p>
                                <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">
                                    Youth Skilled
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-4xl font-extrabold text-white">50k+</p>
                                <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">
                                    Lives Touched
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-4xl font-extrabold text-white">120+</p>
                                <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">
                                    Villages Reached
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= STORIES OF CHANGE ================= */}
            <ImpactStories />

            {/* ================= 2. VOLUNTEER IMPACT ================= */}
            <section className="py-32 bg-[#001529] text-white px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center space-y-4 mb-20">
                        <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em]">Our Community</p>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold">Volunteer Voices</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        {volunteerStories.map((vol, i) => (
                            <div key={i} className="glass-effect p-10 rounded-[2.5rem] relative group border-white/5">
                                <FaQuoteLeft className="text-5xl text-[#fb8500]/20 absolute top-8 left-8" />
                                <p className="text-2xl font-serif italic font-medium leading-relaxed mb-10 relative z-10">
                                    "{vol.quote}"
                                </p>
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 bg-[#fb8500] text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-[#fb8500]/20">
                                        <FaHandHoldingHeart />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl">{vol.name}</h4>
                                        <p className="text-[#fb8500] text-sm font-bold uppercase tracking-wider">{vol.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= 3. RESULTS & STATS ================= */}
            <section className="py-32 bg-white px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="space-y-4 mb-20">
                        <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em]">Our Track Record</p>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344]">Our Results Speak</h2>
                        <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-medium">Tangible impact delivered over the last decade of dedicated service.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        <div className="p-10 border border-zinc-100 rounded-[2rem] shadow-sm hover:border-[#fb8500]/30 transition-all duration-300">
                            <div className="text-5xl font-black text-[#002344] mb-4">15k+</div>
                            <p className="font-bold text-zinc-500 uppercase tracking-widest text-xs">Children Educated</p>
                        </div>
                        <div className="p-10 border border-zinc-100 rounded-[2rem] shadow-sm hover:border-[#fb8500]/30 transition-all duration-300">
                            <div className="text-5xl font-black text-[#fb8500] mb-4">85%</div>
                            <p className="font-bold text-zinc-500 uppercase tracking-widest text-xs">Exam Pass Rate</p>
                        </div>
                        <div className="p-10 border border-zinc-100 rounded-[2rem] shadow-sm hover:border-[#fb8500]/30 transition-all duration-300">
                            <div className="text-5xl font-black text-[#2d6a4f] mb-4">2000+</div>
                            <p className="font-bold text-zinc-500 uppercase tracking-widest text-xs">Youth Employed</p>
                        </div>
                        <div className="p-10 border border-zinc-100 rounded-[2rem] shadow-sm hover:border-[#fb8500]/30 transition-all duration-300">
                            <div className="text-5xl font-black text-[#d90429] mb-4">50+</div>
                            <p className="font-bold text-zinc-500 uppercase tracking-widest text-xs">Villages Adopted</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 4. MEDIA COVERAGE ================= */}
            <section className="py-32 bg-[#f8f9fa] px-6 border-y border-zinc-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 space-y-8">
                            <div className="space-y-4">
                                <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em]">Recognition</p>
                                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344]">In The News</h2>
                            </div>
                            <p className="text-xl text-zinc-600 leading-relaxed font-medium">
                                Our work has been recognized and featured by leading regional news outlets. From our digital literacy drives to computer donations in rural schools, the media has been a witness to the grassroots change we are driving at the Swastik Srijan Foundation.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-0.5 w-12 bg-[#fb8500]"></div>
                                <span className="text-sm font-bold text-[#002344] uppercase tracking-widest">Featured: Navswadesh News</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl border border-white transform lg:rotate-3 hover:rotate-0 transition duration-700">
                                <img
                                    src="/images/real/news_media_1.jpg"
                                    alt="SSF in Media - Computer donation news"
                                    className="w-full h-auto grayscale hover:grayscale-0 transition duration-700 rounded-2xl"
                                />
                                <p className="mt-6 text-[10px] text-zinc-400 text-center uppercase tracking-[0.3em] font-bold">Newspaper Archive - Rewa Edition</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-32 bg-[#001529] relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
                <div className="container mx-auto px-6 relative z-10 space-y-12">
                    <FaQuoteLeft className="text-7xl text-[#fb8500]/20 mx-auto" />
                    <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white max-w-4xl mx-auto leading-tight">
                        Create More Stories Like <span className="text-[#fb8500]">These.</span>
                    </h2>
                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-medium">
                        Your support writes the next chapter for a child in need. Every contribution brings us closer to a brighter future.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                        <Link to="/DonateAndSupport" className="sm:w-auto">
                            <button className="btn-cta w-full sm:w-auto px-14 py-6 text-xl shadow-[#d90429]/20">
                                Donate Now
                            </button>
                        </Link>
                        <Link to="/Volunteer" className="sm:w-auto">
                            <button className="btn-secondary w-full sm:w-auto px-14 py-6 text-xl border-white text-white hover:bg-white hover:text-[#001529]">
                                Volunteer With Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
