import { Link } from "@tanstack/react-router";
<<<<<<< HEAD
=======
import { motion } from "framer-motion";
>>>>>>> e20eac0 (Updated Website UI and content)
import { FaBuilding, FaHeartbeat, FaMicrochip, FaMapMarkedAlt } from "react-icons/fa";

export default function UpcomingProjects() {
    return (
        <div className="w-full font-inria bg-white">

            {/* ================= HERO ================= */}
<<<<<<< HEAD
            <section className="bg-black text-white pt-40 pb-20 relative overflow-hidden text-center px-4">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Building The <span className="text-[#FDCF09]">Future</span>
                    </h1>
                    <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed">
                        Our vision for 2026 and beyond. Expanding our footprint, embracing technology, and deepening our impact.
                    </p>
=======
            <section className="bg-[#001529] text-white pt-48 pb-24 relative overflow-hidden text-center px-6">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(#fb8500_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fb8500] opacity-[0.03] rounded-full blur-[100px]"></div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
                            Building The <span className="text-[#fb8500]">Future</span>
                        </h1>
                        <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium">
                            Our vision for 2026 and beyond. Expanding our footprint, embracing technology, and deepening our impact across Bharat.
                        </p>
                    </motion.div>
>>>>>>> e20eac0 (Updated Website UI and content)
                </div>
            </section>

            {/* ================= 1. NEW ACADEMIES & HUBS ================= */}
<<<<<<< HEAD
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="w-16 h-16 bg-[#FDCF09] text-black rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg">
                            <FaMapMarkedAlt />
                        </div>
                        <h2 className="text-4xl font-black text-black mb-6">New Centers & Hubs</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                            We are aggressively expanding our physical presence to reach the most remote corners of Bihar and Uttar Pradesh.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 text-2xl text-blue-600"><FaBuilding /></div>
                                <div>
                                    <h4 className="text-xl font-bold">5 New Academies</h4>
                                    <p className="text-zinc-500">Scheduled for Q3 2025: Patna, Gaya, Muzaffarpur, Varanasi, and Gorakhpur.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-2xl text-green-600"><FaMicrochip /></div>
                                <div>
                                    <h4 className="text-xl font-bold">10 Digital Learning Hubs</h4>
                                    <p className="text-zinc-500">Solar-powered, internet-enabled micro-hubs in deep rural villages.</p>
=======
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="w-20 h-20 bg-blue-50 text-[#002344] rounded-[2rem] flex items-center justify-center text-3xl shadow-sm border border-blue-100">
                            <FaMapMarkedAlt />
                        </div>
                        <div className="space-y-4">
                            <p className="text-[#2d6a4f] font-bold text-xs uppercase tracking-[0.2em]">Scale of Impact</p>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344]">New Centers & Hubs</h2>
                        </div>
                        <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                            We are aggressively expanding our physical presence to reach the most remote corners of Madhya Pradesh and Uttar Pradesh.
                        </p>

                        <div className="space-y-8 pt-4">
                            <div className="flex gap-6 group">
                                <div className="p-4 bg-emerald-50 text-[#2d6a4f] rounded-2xl h-fit transition-transform group-hover:scale-110">
                                    <FaBuilding className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#002344]">5 New Academies</h4>
                                    <p className="text-zinc-500 font-medium mt-1">Scheduled for Q3 2025: Patna, Gaya, Muzaffarpur, Varanasi, and Gorakhpur.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group">
                                <div className="p-4 bg-blue-50 text-[#002344] rounded-2xl h-fit transition-transform group-hover:scale-110">
                                    <FaMicrochip className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#002344]">10 Digital Learning Hubs</h4>
                                    <p className="text-zinc-500 font-medium mt-1">Solar-powered, internet-enabled micro-hubs in deep rural villages.</p>
>>>>>>> e20eac0 (Updated Website UI and content)
                                </div>
                            </div>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="bg-zinc-100 rounded-2xl p-2 h-full min-h-[400px] flex items-center justify-center border-2 border-dashed border-zinc-300">
                        <img
                            src="/images/map.png"
                            alt="Map of Future Sites"
                            className="w-full h-full object-contain rounded-xl"
                        />
=======
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#2d6a4f]/5 rounded-[3rem] blur-2xl"></div>
                        <div className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl border border-zinc-100 overflow-hidden">
                            <img
                                src="/images/academy/academy-expansion.jpg"
                                alt="Map of Future Sites - Rewa & Satna Expansion"
                                className="w-full h-full object-cover rounded-[1.5rem]"
                            />
                        </div>
>>>>>>> e20eac0 (Updated Website UI and content)
                    </div>
                </div>
            </section>

            {/* ================= SSF YOUTH CAREER NETWORK ================= */}
<<<<<<< HEAD
<section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="bg-zinc-100 rounded-2xl p-4 shadow-lg">
            <img
                src="/images/ssf-youth-career.png"
                alt="SSF Youth Career Network"
                className="w-full h-full object-contain rounded-xl"
            />
        </div>

        {/* RIGHT CONTENT */}
        <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-bold text-black bg-[#FDCF09] rounded-full">
                Free Registration
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                SSF Youth <br />
                <span className="text-[#FDCF09]">Career Network</span>
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                A Pan-India initiative by Swastik Srijan Foundation to empower students and youth with
                career-ready skills, confidence, and expert mentorship.
            </p>

            {/* BENEFITS LIST */}
            <ul className="space-y-4 mb-10">
                {[
                    "Free Interview Preparation",
                    "Communication & Public Speaking Training",
                    "Career Counselling & Mentorship",
                    "Confidence Building & Personality Development",
                    "Resume & LinkedIn Profile Improvement",
                    "Live Workshops & Online Training Sessions",
                    "Skill Development & Professional Growth",
                    "Direct Guidance from Industry Experts"
                ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <div className="w-3 h-3 mt-2 bg-[#FDCF09] rounded-full"></div>
                        <span className="text-zinc-700 font-medium">{item}</span>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 items-center">
                <a
                    href="https://wa.me/919718346691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FDCF09] text-black px-8 py-3 font-bold hover:bg-black hover:text-white transition rounded-md"
                >
                    Register on WhatsApp
                </a>

                <span className="text-zinc-500 font-semibold">
                    📞 +91 97183 46691
                </span>
            </div>
        </div>
    </div>
</section>


            {/* ================= 2. HEALTH CAMPS (TARGETED) ================= */}
            <section className="py-24 bg-zinc-900 text-white px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-block p-4 bg-red-600 rounded-full text-3xl mb-6 text-white shadow-lg shadow-red-600/20">
                        <FaHeartbeat />
                    </div>
                    <h2 className="text-4xl font-black mb-4">Mega Health Camps</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
                        Moving beyond basic checkups. We are launching specialized camps for targeted interventions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-zinc-800 p-8 rounded-xl border-t-4 border-red-500 hover:bg-zinc-750 transition">
                            <h4 className="text-2xl font-bold mb-2">Maternal Health</h4>
                            <p className="text-zinc-400 mb-4">100+ Camps</p>
                            <p className="text-sm text-zinc-500">Focusing on anemia detection and nutrition for pregnant women in tribal belts.</p>
                        </div>
                        <div className="bg-zinc-800 p-8 rounded-xl border-t-4 border-blue-500 hover:bg-zinc-750 transition">
                            <h4 className="text-2xl font-bold mb-2">Eye Care & Surgery</h4>
                            <p className="text-zinc-400 mb-4">Vision 2026</p>
                            <p className="text-sm text-zinc-500">Free cataract surgeries and spectacle distribution for 5,000 elderly citizens.</p>
                        </div>
                        <div className="bg-zinc-800 p-8 rounded-xl border-t-4 border-green-500 hover:bg-zinc-750 transition">
                            <h4 className="text-2xl font-bold mb-2">Child Immunity</h4>
                            <p className="text-zinc-400 mb-4">Zero Disease</p>
                            <p className="text-sm text-zinc-500">Deworming and vitamin supplementation drives for school children.</p>
=======
            <section className="py-32 px-6 bg-[#f8f9fa] border-y border-zinc-100">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="bg-white rounded-[3rem] p-6 shadow-2xl border border-zinc-50 transform -rotate-2 hover:rotate-0 transition duration-700">
                            <img
                                src="/images/ssf-youth-career.png"
                                alt="SSF Youth Career Network"
                                className="w-full h-full object-contain rounded-[2rem]"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#fb8500]/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <span className="inline-block px-4 py-1.5 bg-[#002344] text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg shadow-blue-900/20">
                            Free Registration
                        </span>

                        <h2 className="text-4xl lg:text-6xl font-serif font-bold text-[#002344] leading-tight">
                            SSF Youth <br />
                            <span className="text-[#fb8500]">Career Network</span>
                        </h2>

                        <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                            A Pan-India initiative by Swastik Srijan Foundation to empower students and youth with
                            career-ready skills, confidence, and expert mentorship.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            {[
                                "Interview Prep",
                                "Public Speaking",
                                "Career Mentorship",
                                "Personality Dev",
                                "LinkedIn / Resume",
                                "Live Workshops",
                                "Skill Training",
                                "Industry Guidance"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-zinc-50 shadow-sm">
                                    <div className="w-2 h-2 bg-[#fb8500] rounded-full"></div>
                                    <span className="text-zinc-700 font-bold text-sm tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-8 items-center pt-8">
                            <a
                                href="https://wa.me/919718346691"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn-primary px-10 py-5">
                                    Register on WhatsApp
                                </button>
                            </a>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[#002344] font-bold text-lg">
                                    +91 97183 46691
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= 2. HEALTH CAMPS (TARGETED) ================= */}
            <section className="py-32 bg-[#001529] text-white px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#d90429] opacity-[0.03] rounded-full blur-[120px]"></div>
                <div className="max-w-6xl mx-auto text-center space-y-16">
                    <div className="space-y-4">
                        <div className="inline-block p-5 bg-[#d90429] rounded-2xl text-4xl text-white shadow-xl shadow-[#d90429]/20 mb-4">
                            <FaHeartbeat />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold italic">Mega Health Camps</h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
                            Moving beyond basic checkups. We are launching specialized camps for targeted medical interventions in rural belts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                title: "Maternal Health",
                                val: "100+ Camps",
                                desc: "Focusing on anemia detection and nutrition for pregnant women in tribal belts of Rewa and Satna.",
                                borderColor: "border-[#d90429]",
                                accent: "text-[#d90429]"
                            },
                            {
                                title: "Eye Care & Surgery",
                                val: "Vision 2026",
                                desc: "Free cataract surgeries and spectacle distribution for 5,000 elderly citizens across Central India.",
                                borderColor: "border-[#002344]",
                                accent: "text-[#fb8500]"
                            },
                            {
                                title: "Child Immunity",
                                val: "Zero Disease",
                                desc: "Deworming and vitamin supplementation drives for school children integrated with our academies.",
                                borderColor: "border-[#2d6a4f]",
                                accent: "text-[#2d6a4f]"
                            }
                        ].map((item, i) => (
                            <div key={i} className={`glass-effect p-10 rounded-[2rem] border-t-4 ${item.borderColor} hover:bg-white/5 transition duration-500`}>
                                <h4 className="text-2xl font-bold mb-2 font-serif">{item.title}</h4>
                                <p className={`text-base font-bold uppercase tracking-widest ${item.accent} mb-4`}>{item.val}</p>
                                <p className="text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SSF National Academy ROADMAP ================= */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-20">
                        <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em]">Our Flagship Roadmap</p>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344]">Knowledge Hub for Future Leaders</h2>
                        <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-medium">Our comprehensive roadmap for the SSF National Academy excellence centers.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#f8f9fa] p-10 rounded-[3rem] border border-zinc-100 shadow-sm">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/images/academy/academy-roadmap.jpg"
                                alt="SSF National Academy Future Roadmap"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/images/academy/academy-mission-hindi.jpg"
                                alt="SSF National Academy Mission"
                                className="w-full h-auto"
                            />
>>>>>>> e20eac0 (Updated Website UI and content)
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 3. TECHNOLOGY VISION ================= */}
<<<<<<< HEAD
            <section className="py-24 bg-zinc-50 text-zinc-900 px-4 relative overflow-hidden">
                {/* Abstract Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDCF09]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm mb-4">Innovation</h2>
                        <h3 className="text-4xl md:text-5xl font-black mb-6">Technology Vision</h3>
                        <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                            We are building the "SSF Connect" App — a unified platform to track student progress, manage donations transparently, and connect volunteers in real-time.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#FDCF09] rounded-full"></div>
                                <span className="font-bold text-zinc-800">Real-time Impact Dashboard for Donors</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#FDCF09] rounded-full"></div>
                                <span className="font-bold text-zinc-800">AI-Driven Learning Paths for Students</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#FDCF09] rounded-full"></div>
                                <span className="font-bold text-zinc-800">Blockchain for Fund Transparency</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <FaMicrochip className="text-4xl text-[#FDCF09]" />
                            <h4 className="text-2xl font-bold">Smart Classrooms</h4>
                        </div>
                        <p className="text-zinc-600">
                            By 2026, every SSF Academy will be a "Smart Classroom" equipped with interactive panels and gigabit internet, connecting rural students to the world's best teachers.
=======
            <section className="py-32 bg-[#f8f9fa] text-zinc-900 px-6 relative overflow-hidden border-y border-zinc-100">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#002344]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em]">Innovation</p>
                            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344]">Technology Vision</h3>
                        </div>
                        <p className="text-xl text-zinc-600 leading-relaxed font-medium">
                            We are building the "SSF Connect" App — a unified platform to track student progress, manage donations transparently, and connect volunteers in real-time.
                        </p>
                        <ul className="space-y-5">
                            <li className="flex items-center gap-4 group">
                                <div className="w-3 h-3 bg-[#fb8500] rounded-full group-hover:scale-125 transition-transform"></div>
                                <span className="text-lg font-bold text-[#002344]">Real-time Impact Dashboard for Donors</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-3 h-3 bg-[#fb8500] rounded-full group-hover:scale-125 transition-transform"></div>
                                <span className="text-lg font-bold text-[#002344]">AI-Driven Learning Paths for Students</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-3 h-3 bg-[#fb8500] rounded-full group-hover:scale-125 transition-transform"></div>
                                <span className="text-lg font-bold text-[#002344]">Blockchain for Fund Transparency</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-12 rounded-[2.5rem] border border-zinc-100 shadow-2xl space-y-6">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-blue-50 rounded-2xl">
                                <FaMicrochip className="text-4xl text-[#002344]" />
                            </div>
                            <h4 className="text-2xl font-bold text-[#002344]">Smart Classrooms</h4>
                        </div>
                        <p className="text-lg text-zinc-500 font-medium leading-relaxed">
                            By 2026, every SSF Academy will be a "Smart Classroom" equipped with interactive panels and gigabit internet, connecting rural students to the world's best digital resources.
>>>>>>> e20eac0 (Updated Website UI and content)
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
<<<<<<< HEAD
            <section className="py-20 bg-black text-white text-center px-4">
                <h2 className="text-3xl font-black mb-4">
                    Invest in Our Future
                </h2>
                <p className="mb-6 text-zinc-400">
                    Partner with us to build these new centers.
                </p>
                <Link to="/Contact">
                    <button className="bg-[#FDCF09] text-black px-8 py-3 font-bold hover:bg-white transition">
                        Become a Vision Partner
                    </button>
                </Link>
=======
            <section className="py-32 bg-[#001529] text-white text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#fb8500_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
                <div className="max-w-4xl mx-auto space-y-10 relative z-10">
                    <h2 className="text-4xl lg:text-6xl font-serif font-bold">
                        Invest in Our <span className="text-[#fb8500]">Future</span>
                    </h2>
                    <p className="text-xl text-zinc-400 font-medium max-w-2xl mx-auto">
                        Your partnership today builds the infrastructure for tomorrow's leaders. Join us as a Vision Partner.
                    </p>
                    <div className="pt-8">
                        <Link to="/Contact">
                            <button className="btn-cta px-14 py-6 text-xl shadow-[#d90429]/20">
                                Become a Vision Partner
                            </button>
                        </Link>
                    </div>
                </div>
>>>>>>> e20eac0 (Updated Website UI and content)
            </section>

        </div>
    );
}
