import { Link } from "@tanstack/react-router";
<<<<<<< HEAD
=======
import { motion } from "framer-motion";
>>>>>>> e20eac0 (Updated Website UI and content)
import { FaQuoteLeft, FaHandHoldingHeart, FaStar, FaUserGraduate } from "react-icons/fa";

export default function ImpactPage() {
    const studentStories = [
        {
            name: "Raju Kumar",
            role: "Class 10 Student",
<<<<<<< HEAD
            img: "/images/students_learn1.png",
=======
            img: "/images/real/education_girls.jpg",
>>>>>>> e20eac0 (Updated Website UI and content)
            title: "From Child Labor to Class Topper",
            desc: "Raju was working in a tea shop to support his family. Identifyed during our 2023 survey, he was enrolled in our bridge course. Today, he ranks 1st in his school and dreams of becoming an engineer.",
            tags: ["Education", "Transformation"]
        },
        {
            name: "Sita Kumari",
            role: "Skill Trainee",
            img: "/images/girls.png",
            title: "Breaking Barriers with Code",
            desc: "Coming from a village where girls rarely study past 8th grade, Sita joined our Digital Literacy program. She now works as a data entry operator, supporting her entire family.",
            tags: ["Skills", "Empowerment"]
        },
        {
<<<<<<< HEAD
            name: "Amit & Sumit",
            role: "Scholarship Recipients",
            img: "/images/students.png",
            title: "Brothers in Arms",
            desc: "Both brothers lost their father during COVID. SSF's 'Shiksha Suraksha' sponsorship covered their fees. They recently cleared the polytechnic entrance exam together.",
            tags: ["Scholarship", "Resilience"]
=======
            name: "Rahul & Friends",
            role: "Coaching Center Students",
            img: "/images/real/coaching_center_1.jpg",
            title: "Community Learning Centers",
            desc: "This coaching center in G.B. Nagar (U.P) provides a safe space for children to learn after school. Many of these students are the first in their families to receive formal academic support.",
            tags: ["Coaching", "Community"]
>>>>>>> e20eac0 (Updated Website UI and content)
        }
    ];

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
<<<<<<< HEAD
            <section className="bg-zinc-900 text-white pt-40 pb-20 relative overflow-hidden text-center px-4">
                <div className="max-w-4xl mx-auto relative z-10">
                    <p className="text-[#FDCF09] font-bold tracking-widest uppercase mb-4">Real Lives. Real Change.</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Impact <span className="text-[#FDCF09]">& Success Stories</span>
                    </h1>
                    <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed">
                        Behind every number is a name, a face, and a story of transformation.
                    </p>
=======
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
>>>>>>> e20eac0 (Updated Website UI and content)
                </div>
            </section>

            {/* ================= 1. STUDENT STORIES ================= */}
<<<<<<< HEAD
            <section className="py-24 px-4 bg-zinc-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-black text-black mb-12 text-center">Student Success Stories</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {studentStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group">
                                <div className="h-64 bg-zinc-200 relative overflow-hidden">
                                    <img
                                        src={story.img}
                                        alt={story.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                    <div className="absolute bottom-4 left-4 flex gap-2">
                                        {story.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-black/70 text-white text-xs font-bold rounded-full backdrop-blur-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#FDCF09] transition">{story.title}</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                                        "{story.desc}"
                                    </p>
                                    <div className="flex items-center gap-3 border-t border-zinc-100 pt-4">
                                        <div className="w-10 h-10 bg-[#FDCF09] rounded-full flex items-center justify-center font-bold text-sm">
                                            {story.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{story.name}</h4>
                                            <p className="text-xs text-zinc-500">{story.role}</p>
=======
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-20">
                        <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em]">Our Beneficiaries</p>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344]">Student Success Stories</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {studentStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] border border-zinc-50 group transition-all duration-500 hover:-translate-y-2">
                                <div className="h-72 relative overflow-hidden">
                                    <img
                                        src={story.img}
                                        alt={story.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002344]/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 flex gap-2">
                                        {story.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-[#fb8500] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 space-y-4">
                                    <h3 className="text-xl font-bold text-[#002344] leading-tight group-hover:text-[#fb8500] transition-colors">{story.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                                        "{story.desc}"
                                    </p>
                                    <div className="flex items-center gap-4 pt-6 mt-4 border-t border-zinc-50">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center font-bold text-[#002344]">
                                            {story.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#002344] text-sm">{story.name}</h4>
                                            <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{story.role}</p>
>>>>>>> e20eac0 (Updated Website UI and content)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= 2. VOLUNTEER IMPACT ================= */}
<<<<<<< HEAD
            <section className="py-24 bg-blue-600 text-white px-4 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-3xl font-black mb-12 text-center">Volunteer Voices</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {volunteerStories.map((vol, i) => (
                            <div key={i} className="bg-blue-700/50 p-8 rounded-2xl border border-blue-400/30 backdrop-blur-md relative">
                                <FaQuoteLeft className="text-4xl text-blue-300/40 absolute top-6 left-6" />
                                <p className="text-xl italic font-medium leading-relaxed mb-6 relative z-10">
                                    "{vol.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl">
                                        <FaHandHoldingHeart />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{vol.name}</h4>
                                        <p className="text-blue-200 text-sm">{vol.role}</p>
=======
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
>>>>>>> e20eac0 (Updated Website UI and content)
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= 3. RESULTS & STATS ================= */}
<<<<<<< HEAD
            <section className="py-24 bg-white px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-black mb-4">Our Results Speak</h2>
                    <p className="text-zinc-500 mb-16">Tangible impact delivered over the last decade.</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-6 border border-zinc-100 rounded-2xl shadow-sm hover:border-[#FDCF09] transition">
                            <div className="text-4xl font-black text-[#FDCF09] mb-2">15k+</div>
                            <p className="font-bold text-zinc-800">Children Educated</p>
                        </div>
                        <div className="p-6 border border-zinc-100 rounded-2xl shadow-sm hover:border-[#FDCF09] transition">
                            <div className="text-4xl font-black text-blue-600 mb-2">85%</div>
                            <p className="font-bold text-zinc-800">Exam Pass Rate</p>
                        </div>
                        <div className="p-6 border border-zinc-100 rounded-2xl shadow-sm hover:border-[#FDCF09] transition">
                            <div className="text-4xl font-black text-green-600 mb-2">2000+</div>
                            <p className="font-bold text-zinc-800">Youth Employed</p>
                        </div>
                        <div className="p-6 border border-zinc-100 rounded-2xl shadow-sm hover:border-[#FDCF09] transition">
                            <div className="text-4xl font-black text-red-500 mb-2">50+</div>
                            <p className="font-bold text-zinc-800">Villages Adopted</p>
=======
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
>>>>>>> e20eac0 (Updated Website UI and content)
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
<<<<<<< HEAD
            <section className="py-20 bg-zinc-900 text-white text-center px-4">
                <h2 className="text-3xl font-black mb-4">
                    Create More Stories Like This
                </h2>
                <p className="mb-6 text-zinc-400">
                    Your support writes the next chapter for a child in need.
                </p>
                <Link to="/DonateAndSupport">
                    <button className="bg-[#FDCF09] text-black px-8 py-3 font-bold hover:bg-white transition">
                        Donate Now
                    </button>
                </Link>
=======
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
>>>>>>> e20eac0 (Updated Website UI and content)
            </section>

        </div>
    );
}
