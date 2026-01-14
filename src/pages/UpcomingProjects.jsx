import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaBuilding, FaHeartbeat, FaMicrochip, FaMapMarkedAlt } from "react-icons/fa";

export default function UpcomingProjects() {
    return (
        <div className="w-full font-inria bg-white">

            {/* ================= HERO ================= */}
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
                </div>
            </section>

            {/* ================= 1. NEW ACADEMIES & HUBS ================= */}
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#2d6a4f]/5 rounded-[3rem] blur-2xl"></div>
                        <div className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl border border-zinc-100 overflow-hidden">
                            <img
                                src="/images/academy/academy-expansion.jpg"
                                alt="Map of Future Sites - Rewa & Satna Expansion"
                                className="w-full h-full object-cover rounded-[1.5rem]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SSF YOUTH CAREER NETWORK ================= */}
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
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 3. TECHNOLOGY VISION ================= */}
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
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
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
            </section>

        </div>
    );
}
