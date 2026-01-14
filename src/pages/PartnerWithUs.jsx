import { Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { FaBuilding, FaHandshake, FaUniversity, FaChalkboardTeacher, FaGlobeAsia } from "react-icons/fa";
=======
import { motion } from "framer-motion";
import { FaBuilding, FaHandshake, FaUniversity, FaChalkboardTeacher, FaGlobeAsia, FaArrowRight } from "react-icons/fa";
>>>>>>> e20eac0 (Updated Website UI and content)
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function PartnerWithUs() {
    return (
<<<<<<< HEAD
        <div className="w-full font-inria bg-white">

            {/* ================= HERO ================= */}
            <section className="bg-zinc-900 text-white pt-40 pb-20 relative overflow-hidden text-center px-4">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Partner <span className="text-[#FDCF09]">With Us</span>
                    </h1>
                    <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed">
                        Alone we can do so little; together we can do so much. Join forces with SSF to amplify impact.
                    </p>
                </div>
            </section>

            {/* ================= 1. CSR COLLABORATION ================= */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <div className="order-2 md:order-1">
                        <div className="w-16 h-16 bg-[#FDCF09] text-black rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                            <FaBuilding />
                        </div>
                        <h2 className="text-4xl font-black text-black mb-6">CSR Partnerships</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                            We help corporates fulfill their social responsibility goals with transparent, continuous, and measurable impact projects.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-zinc-50 p-4 border-l-4 border-black">
                                <h4 className="font-bold text-lg">Compliance Ready</h4>
                                <p className="text-zinc-500 text-sm">We are 12A, 80G, and CSR-1 certified.</p>
                            </div>
                            <div className="bg-zinc-50 p-4 border-l-4 border-[#FDCF09] ">
                                <h4 className="font-bold text-lg">Impact Reporting</h4>
                                <p className="text-zinc-500 text-sm">Quarterly detailed reports with financial transparency.</p>
                            </div>
                            <div className="bg-zinc-50 p-4 border-l-4 border-blue-600">
                                <h4 className="font-bold text-lg">Employee Engagement</h4>
                                <p className="text-zinc-500 text-sm">Volunteering opportunities for your workforce.</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 bg-zinc-100 rounded-2xl h-[400px] flex items-center justify-center">
                        <div className="text-center">
                            <FaHandshake className="text-8xl text-zinc-300 mx-auto mb-4" />
                            <h3 className="text-3xl font-black text-zinc-400">CORPORATE</h3>
=======
        <main className="w-full bg-white min-h-screen">

            {/* ================= HERO SECTION (Premium Heritage Blue) ================= */}
            <section className="bg-[#002344] text-white pt-48 pb-32 relative overflow-hidden px-6">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fb8500] opacity-[0.05] rounded-full blur-[100px]"></div>

                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <span className="text-[#fb8500] font-bold uppercase tracking-[0.3em] text-xs">
                            Strategic Collaboration
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight">
                            Partner <span className="text-[#fb8500]">With Us</span>
                        </h1>
                        <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
                            "Alone we can do so little; together we can do so much." Join forces with SSF to amplify social impact and reach the last mile.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ================= CSR PARTNERSHIPS ================= */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="inline-flex items-center gap-4 text-[#fb8500]">
                            <div className="w-12 h-12 bg-[#fb8500]/10 rounded-2xl flex items-center justify-center text-xl">
                                <FaBuilding />
                            </div>
                            <span className="font-bold uppercase tracking-widest text-sm">Corporate Social Responsibility</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#002344] leading-tight">
                            Transforming Corporate <br /> Vision into Social Reality.
                        </h2>

                        <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                            We help corporates fulfill their CSR goals with transparent, scalable, and measurable impact projects that align with UN Sustainable Development Goals.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "12A/80G Certified", desc: "Full tax benefits for all contributions." },
                                { title: "CSR-1 Registered", desc: "Compliant with Ministry of Corporate Affairs." },
                                { title: "Quarterly Reports", desc: "Transparent financial and impact reporting." },
                                { title: "Volunteer Drifts", desc: "Involve your employees in direct fieldwork." }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#f8f9fa] p-6 rounded-3xl border border-zinc-100 hover:border-[#fb8500]/20 transition-all">
                                    <h4 className="font-bold text-[#002344] mb-2">{item.title}</h4>
                                    <p className="text-zinc-500 text-sm font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-zinc-100 aspect-square flex items-center justify-center">
                            <div className="text-center space-y-4 opacity-30">
                                <FaHandshake className="text-9xl mx-auto text-[#002344]" />
                                <p className="font-black tracking-[0.3em] text-[#002344]">PARTNERSHIP HUB</p>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fb8500] opacity-5 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            </section>

            {/* ================= ECOSYSTEM MODELS ================= */}
            <section className="py-32 bg-[#002344] text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-6">
                        <h2 className="text-[#fb8500] font-bold tracking-[0.3em] uppercase text-xs">The SSF Ecosystem</h2>
                        <h3 className="text-4xl md:text-6xl font-serif font-bold">Collaboration Models</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <FaUniversity />,
                                title: "Institutions",
                                color: "border-[#fb8500]",
                                desc: "Schools, colleges, and training institutes can partner for student exchange, internships, and research projects.",
                                points: ["Campus Chapters", "Resource Sharing"]
                            },
                            {
                                icon: <FaChalkboardTeacher />,
                                title: "Expert Mentors",
                                color: "border-[#d90429]",
                                desc: "Subject matter experts can join as guest faculty or curriculum advisors for our National Academy projects.",
                                points: ["Guest Lectures", "Curriculum Design"]
                            },
                            {
                                icon: <FaGlobeAsia />,
                                title: "NGO Partners",
                                color: "border-[#2d6a4f]",
                                desc: "Grassroot organizations can collaborate to implement our models in new geographies. Let's scale together.",
                                points: ["Joint Implementation", "Scaling Impact"]
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 hover:border-white/20 transition-all group`}
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl mb-8 group-hover:bg-[#fb8500] group-hover:text-white transition-all`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-serif font-bold mb-4">{item.title}</h4>
                                <p className="text-zinc-400 font-medium leading-relaxed mb-8">{item.desc}</p>
                                <ul className="space-y-3">
                                    {item.points.map((p, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm font-bold opacity-80">
                                            <IoCheckmarkCircleSharp className="text-[#fb8500]" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA SECTION (Polished) ================= */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#f8f9fa] rounded-[4rem] p-12 md:p-24 text-center space-y-12 relative overflow-hidden border border-zinc-100 shadow-xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#fb8500] opacity-[0.03] rounded-full blur-[100px] -mr-32 -mt-32"></div>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-serif font-bold text-[#002344]"
                        >
                            Become a <span className="text-[#fb8500]">Partner.</span>
                        </motion.h2>

                        <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
                            Join our roadmap to social transformation. Reach out to our partnership team to explore collaboration opportunities.
                        </p>

                        <div className="pt-8">
                            <Link to="/Contact">
                                <button className="btn-primary px-16 py-6 text-xl">
                                    Contact Partnership Team
                                </button>
                            </Link>
>>>>>>> e20eac0 (Updated Website UI and content)
                        </div>
                    </div>
                </div>
            </section>

<<<<<<< HEAD
            {/* ================= 2. OTHER PARTNERSHIPS ================= */}
            <section className="py-24 bg-zinc-900 text-white px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm mb-4">Ecosystem</h2>
                        <h3 className="text-4xl md:text-5xl font-black">Collaboration Models</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-black">
                        {/* Institutions */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-blue-600">
                            <FaUniversity className="text-4xl text-blue-600 mb-6" />
                            <h4 className="text-2xl font-bold mb-4">Institutions</h4>
                            <p className="text-zinc-600 mb-6">
                                Schools, colleges, and training institutes can partner with us for student exchange, internship programs, and knowledge sharing.
                            </p>
                            <ul className="text-sm font-bold text-zinc-700 space-y-2">
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-blue-600" /> Campus Chapters</li>
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-blue-600" /> Research Projects</li>
                            </ul>
                        </div>

                        {/* Trainers */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-[#FDCF09]">
                            <FaChalkboardTeacher className="text-4xl text-[#FDCF09] mb-6" />
                            <h4 className="text-2xl font-bold mb-4">Expert Trainers</h4>
                            <p className="text-zinc-600 mb-6">
                                Subject matter experts and industry veterans can join as guest faculty or curriculum advisors for our National Academy.
                            </p>
                            <ul className="text-sm font-bold text-zinc-700 space-y-2">
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-[#FDCF09]" /> Guest Lectures</li>
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-[#FDCF09]" /> Curriculum Design</li>
                            </ul>
                        </div>

                        {/* NGOs */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-green-600">
                            <FaGlobeAsia className="text-4xl text-green-600 mb-6" />
                            <h4 className="text-2xl font-bold mb-4">NGO Partners</h4>
                            <p className="text-zinc-600 mb-6">
                                Grassroot organizations can collaborate to implement our models in new geographies. Let's scale impact together.
                            </p>
                            <ul className="text-sm font-bold text-zinc-700 space-y-2">
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-green-600" /> Joint Implementation</li>
                                <li className="flex items-center gap-2"><IoCheckmarkCircleSharp className="text-green-600" /> Resource Sharing</li>
                            </ul>
                        </div>
=======
            {/* ================= BOTTOM BANNER ================= */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002344]/60 to-transparent z-10"></div>
                    <img
                        src="/images/real/foundation_banner.jpg"
                        alt="SSF Strategic Partnership"
                        className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute bottom-12 left-0 w-full z-20 text-center px-12">
                        <p className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-2 drop-shadow-md">
                            Empowering Lives, Building Futures
                        </p>
                        <p className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg">
                            Together for a better Bharat.
                        </p>
>>>>>>> e20eac0 (Updated Website UI and content)
                    </div>
                </div>
            </section>

<<<<<<< HEAD
            {/* ================= CTA ================= */}
            <section className="py-20 bg-[#FDCF09] text-black text-center px-4">
                <h2 className="text-3xl font-black mb-4">
                    Become a Partner
                </h2>
                <p className="mb-6 text-zinc-800 text-lg">
                    Reach out to our partnership team today.
                </p>
                <Link to="/Contact">
                    <button className="bg-black text-white px-8 py-3 font-bold hover:bg-white hover:text-black transition border-2 border-black">
                        Contact Partnership Team
                    </button>
                </Link>
            </section>

        </div>
=======
        </main>
>>>>>>> e20eac0 (Updated Website UI and content)
    );
}
