import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaArrowRight, FaCheckCircle, FaGlobeAmericas, FaShieldAlt } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import OptimizedImage from "../components/OptimizedImage";

export default function MissionPage() {
    return (
        <div className="w-full bg-white overflow-hidden">
            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#001529] via-[#002344] to-[#003366]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#fb8500] opacity-[0.08] rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d90429] opacity-[0.08] rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center space-y-6"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                                <FaHandHoldingHeart className="text-[#fb8500] text-3xl" />
                            </div>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
                            Our <span className="text-[#fb8500]">Mission</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-zinc-300 font-medium max-w-3xl mx-auto leading-relaxed">
                            Mission Statement
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ================= MISSION STATEMENT ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        {/* Main Mission Statement */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#002344] to-[#003366] rounded-[3rem] overflow-hidden shadow-2xl mb-16"
                        >
                            <div className="grid md:grid-cols-2 lg:gap-8 items-center">
                                <div className="p-12 lg:p-16 text-white">
                                    <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8 text-[#fb8500]">
                                        Our Mission Embodies Our Commitment
                                    </h2>
                                    <p className="text-xl lg:text-2xl leading-relaxed font-medium">
                                        Our mission embodies our commitment to tangible social impact. Through education, health, and sustainable development, we aim to uplift communities and empower individuals to realize their full potential.
                                    </p>
                                </div>
                                <div className="h-full min-h-[400px]">
                                    <img
                                        src="/images/real/children-playing-circle.jpg"
                                        alt="Children playing together in a circle"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Mission Points */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h3 className="text-3xl font-serif font-bold text-[#002344] mb-8 text-center">
                                Our Mission
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { en: "Empower marginalized communities through education, health, and livelihood initiatives.", hi: "शिक्षा, स्वास्थ्य और आजीविका के माध्यम से वंचित व उपेक्षित वर्गों को सशक्त बनाना।" },
                                    { en: "Ensure the protection, development, and dignity of women, children, and senior citizens.", hi: "महिलाओं, बच्चों और वरिष्ठ नागरिकों की सुरक्षा, विकास और सम्मान सुनिश्चित करना।" },
                                    { en: "Promote sustainable development and environmental awareness in rural and urban areas.", hi: "ग्रामीण एवं शहरी क्षेत्रों में सतत विकास और पर्यावरण संरक्षण को बढ़ावा देना।" },
                                    { en: "Collaborate transparently with stakeholders to implement welfare programs effectively.", hi: "जनकल्याणकारी कार्यक्रमों के प्रभावी संचालन हेतु हितधारकों के साथ पारदर्शी सहयोग।" }
                                ].map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 hover:border-[#fb8500] hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#fb8500] flex items-center justify-center shrink-0 mt-1">
                                                <FaCheckCircle className="text-white text-sm" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-lg text-zinc-800 leading-relaxed font-bold">
                                                    {point.en}
                                                </p>
                                                <p className="text-sm text-zinc-500 italic mt-2">
                                                    {point.hi}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Mission in Perspective */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-emerald-50 to-white rounded-[2.5rem] p-12 border border-emerald-100"
                        >
                            <h3 className="text-3xl font-serif font-bold text-[#002344] mb-6 text-center">
                                Mission in Perspective
                            </h3>
                            <p className="text-xl text-zinc-600 leading-relaxed text-center font-medium mb-8">
                                Our Mission is guided by our Vision and implemented through our Core Values.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link to="/About" hash="vision" className="btn-secondary border-[#2d6a4f] text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white">
                                    Explore Our Vision <FaGlobeAmericas />
                                </Link>
                                <Link to="/institutional-dna" className="btn-secondary border-[#d90429] text-[#d90429] hover:bg-[#d90429] hover:text-white">
                                    Explore Our Core Values <FaShieldAlt />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= CALL TO ACTION ================= */}
            <section className="py-24 bg-gradient-to-br from-[#001529] to-[#002344] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fb8500] opacity-[0.08] rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center space-y-8"
                    >
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                            Join Our Mission for Change
                        </h2>
                        <p className="text-xl text-zinc-300 font-medium max-w-2xl mx-auto">
                            If your principles or goals align with our mission, feel free to join us in making a difference.
                        </p>
                        <p className="text-2xl text-[#fb8500] font-bold">
                            Connect with us today — because change starts with a conversation.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                            <Link to="/Contact" className="btn-cta px-12 py-5 text-lg">
                                Contact Us <FaArrowRight />
                            </Link>
                            <Link to="/Volunteer" className="btn-secondary border-white text-white hover:bg-white hover:text-[#001529] px-12 py-5 text-lg">
                                Join Our Mission <FaHandHoldingHeart />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
