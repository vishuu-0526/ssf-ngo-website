import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHeartbeat, FaHome, FaLeaf, FaHandHoldingHeart, FaRupeeSign, FaArrowRight, FaUsers } from "react-icons/fa";
import { HiSparkles, HiHeart } from "react-icons/hi2";

export default function Campaigns() {
    const campaigns = [
        {
            id: "education",
            icon: <FaGraduationCap />,
            title: "Education Equality",
            hindiTitle: "शिक्षा समानता - पढ़ेगा इंडिया, बढ़ेगा इंडिया",
            tagline: "Empowering Minds, Creating Futures",
            description: "Our 'Education Equality' campaign aims to bridge the gap in educational access for underprivileged children. We believe that every child deserves quality education, regardless of their socio-economic background. Through this campaign, we provide scholarships, educational resources, and infrastructure support to schools in marginalized areas.",
            impact: "15,000+ Children Impacted",
            donateLabel: "Support Child Education",
            gradient: "from-[#fb8500] to-[#e76f00]",
            bgLight: "bg-orange-50",
            iconBg: "bg-gradient-to-br from-[#fb8500] to-[#e76f00]",
            image: "/images/real/girls-group-learning-close.jpg"
        },
        {
            id: "health",
            icon: <FaHeartbeat />,
            title: "Health for All",
            hindiTitle: "सबके लिए स्वास्थ्य - स्वस्थ भारत, समृद्ध भारत",
            tagline: "Building Healthy Communities, One Step at a Time",
            description: "In our 'Health for All' campaign, we prioritize making healthcare accessible to everyone. We work to establish medical clinics, organize health camps, and provide essential healthcare services to underserved communities. From preventive care to critical treatments, our goal is to improve overall well-being.",
            impact: "50,000+ Lives Touched",
            donateLabel: "Donate for Healthcare",
            gradient: "from-[#d90429] to-[#a00320]",
            bgLight: "bg-red-50",
            iconBg: "bg-gradient-to-br from-[#d90429] to-[#a00320]",
            image: "/images/real/awareness-poster-viewing.jpg"
        },
        {
            id: "rural",
            icon: <FaHome />,
            title: "Rural Development",
            hindiTitle: "ग्रामीण विकास - आत्मनिर्भर गाँव",
            tagline: "Sustainable Growth, Empowered Communities",
            description: "Our 'Rural Development Initiative' is dedicated to empowering rural communities by fostering sustainable development. Through infrastructure projects, skill development programs, and livelihood initiatives, we aim to enhance the socio-economic fabric of these areas.",
            impact: "120+ Villages Covered",
            donateLabel: "Support Rural Growth",
            gradient: "from-[#2d6a4f] to-[#1b4332]",
            bgLight: "bg-emerald-50",
            iconBg: "bg-gradient-to-br from-[#2d6a4f] to-[#1b4332]",
            image: "/images/real/village-community-center.jpg"
        }
    ];

    const additionalInitiatives = [
        {
            title: "Send Child To School",
            hindiTitle: "हर बच्चा स्कूल जाए",
            description: "Ensure every child, regardless of their background, has access to quality education. We enable underprivileged children to attend school with dignity.",
            icon: <FaUsers />,
            color: "text-[#002344]"
        },
        {
            title: "Fund Raising For Poor",
            hindiTitle: "मदद का हाथ, गरीबों के साथ",
            description: "A collective effort to raise funds that directly benefit the impoverished. Every donation goes towards food, shelter, and healthcare for the most vulnerable.",
            icon: <FaHandHoldingHeart />,
            color: "text-[#d90429]"
        },
        {
            title: "Nourishment for Well-being",
            hindiTitle: "पोषण अभियान - कोई भूखा न सोए",
            description: "Ensuring nutritious meals reach those facing food insecurity through food distribution programs and community kitchens.",
            icon: <HiHeart />,
            color: "text-[#fb8500]"
        }
    ];

    return (
        <section className="bg-white font-inria min-h-screen">
            {/* ================= HERO ================= */}
            <div className="bg-gradient-to-br from-[#001529] via-[#002344] to-[#003366] text-white pt-48 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>

                <motion.div
                    className="absolute top-20 right-10 w-72 h-72 bg-[#fb8500]/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="max-w-6xl mx-auto px-6 text-center relative z-10 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em] mb-4">Programs & Initiatives | कार्यक्रम और पहल</p>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
                            Our <span className="text-[#fb8500]">Campaigns</span> <br />
                            <span className="text-3xl md:text-5xl font-sans font-normal opacity-80 underline decoration-[#fb8500]/30">हमारे अभियान</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-serif text-zinc-300 mb-8">
                            Empowering Communities, Transforming Lives | समुदायों का सशक्तिकरण, जीवन का परिवर्तन
                        </h2>
                        <p className="text-zinc-300 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
                            Swastik Srijan Foundation conducts various campaigns to raise awareness, encourage community participation, and address important social, educational, health, and environmental issues.
                        </p>
                    </motion.div>

                    {/* What is Campaigning */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-3xl mx-auto mt-12"
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-left">
                            <h3 className="text-xl font-bold text-[#fb8500] mb-2">What is Campaigning? | अभियान क्या है?</h3>
                            <p className="text-zinc-300 leading-relaxed">
                                A campaign is a strategic effort aimed at achieving a specific goal or result within a set timeframe. It involves coordinated activities to create awareness and drive change.
                            </p>
                            <p className="text-zinc-400 mt-2 text-sm italic">
                                अभियान एक निर्धारित समय सीमा के भीतर एक विशिष्ट लक्ष्य या परिणाम प्राप्त करने के लिए किया गया एक रणनीतिक प्रयास है। इसमें जागरूकता पैदा करने और बदलाव लाने के लिए समन्वित गतिविधियाँ शामिल हैं।
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ================= MAIN CAMPAIGNS ================= */}
            <div className="py-24 bg-gradient-to-b from-white to-zinc-50">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em] mb-4">Our Core Campaigns | हमारे मुख्य अभियान</p>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344] mb-2">
                            Three Impactful Initiatives | तीन प्रभावशाली पहल
                        </h2>
                        <p className="text-xl text-zinc-500 font-medium">
                            Education, Health & Rural Development | शिक्षा, स्वास्थ्य और ग्रामीण विकास
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {campaigns.map((campaign, idx) => (
                            <motion.div
                                key={campaign.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                id={campaign.id}
                                className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image Side */}
                                <div className={`relative ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                        <img
                                            src={campaign.image}
                                            alt={campaign.title}
                                            className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${campaign.gradient} opacity-30`}></div>
                                        <div className={`absolute top-6 left-6 ${campaign.iconBg} p-4 rounded-2xl text-white text-3xl shadow-xl`}>
                                            {campaign.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`space-y-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                    <div className={`inline-flex items-center gap-2 ${campaign.bgLight} px-4 py-2 rounded-full`}>
                                        <span className="text-zinc-600 font-semibold text-sm">{campaign.impact}</span>
                                    </div>

                                    <div>
                                        <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#002344]">
                                            {campaign.title}
                                        </h3>
                                        <p className="text-sm text-zinc-400 mt-1 italic">
                                            {campaign.hindiTitle}
                                        </p>
                                    </div>

                                    <p className={`text-lg font-semibold bg-gradient-to-r ${campaign.gradient} bg-clip-text text-transparent`}>
                                        {campaign.tagline}
                                    </p>

                                    <p className="text-zinc-600 leading-relaxed text-lg">
                                        {campaign.description}
                                    </p>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <a
                                            href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-3 bg-gradient-to-r ${campaign.gradient} text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all`}
                                        >
                                            <FaRupeeSign className="text-lg" />
                                            {campaign.donateLabel}
                                        </a>
                                        <Link
                                            to="/DonateAndSupport"
                                            className="inline-flex items-center gap-2 border-2 border-[#002344] text-[#002344] font-bold px-8 py-4 rounded-full hover:bg-[#002344] hover:text-white transition-all"
                                        >
                                            Learn More <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= ADDITIONAL INITIATIVES ================= */}
            <div className="py-24 bg-[#001529]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em] mb-4">More Ways to Help | मदद करने के और तरीके</p>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-2">
                            Additional Initiatives | अतिरिक्त पहल
                        </h2>
                        <p className="text-xl text-zinc-400 font-medium">
                            Expanding Our Reach, Deepening Our Impact | हमारी पहुँच का विस्तार, हमारे प्रभाव की गहराई
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {additionalInitiatives.map((initiative, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#fb8500]/50 hover:bg-white/10 transition-all group"
                            >
                                <div className={`text-4xl ${initiative.color} mb-6 group-hover:scale-110 transition-transform`}>
                                    {initiative.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{initiative.title}</h3>
                                <p className="text-xs text-zinc-400 mb-4 italic">{initiative.hindiTitle}</p>
                                <p className="text-zinc-400 leading-relaxed mb-6">{initiative.description}</p>
                                <a
                                    href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#fb8500] font-bold hover:gap-3 transition-all"
                                >
                                    Contribute Now <FaArrowRight />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= QUICK DONATE SECTION ================= */}
            <div className="py-24 bg-gradient-to-br from-[#fb8500]/5 via-white to-[#d90429]/5">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <HiSparkles className="text-5xl text-[#fb8500] mx-auto mb-6" />
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344] mb-6">
                            Quick Donate | त्वरित दान
                        </h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
                            Choose a cause and make an instant impact. Every donation, big or small, creates ripples of change.
                        </p>
                        <p className="text-zinc-400 mt-2 text-md">
                            एक कारण चुनें और तत्काल प्रभाव डालें। हर दान, चाहे वह बड़ा हो या छोटा, बदलाव की लहरें पैदा करता है।
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Child Education", icon: <FaGraduationCap />, color: "from-[#fb8500] to-[#e76f00]" },
                            { label: "Healthcare", icon: <FaHeartbeat />, color: "from-[#d90429] to-[#a00320]" },
                            { label: "Rural Development", icon: <FaHome />, color: "from-[#2d6a4f] to-[#1b4332]" },
                            { label: "Environment", icon: <FaLeaf />, color: "from-[#0077b6] to-[#005f92]" }
                        ].map((item, idx) => (
                            <motion.a
                                key={idx}
                                href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-center text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group`}
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.label}</h3>
                                <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                                    <FaRupeeSign /> Donate Now
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= CTA ================= */}
            <div className="py-24 bg-gradient-to-br from-[#002344] to-[#001529] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#fb8500_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                            Every Action <span className="text-[#fb8500]">Counts</span>
                        </h2>
                        <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Our campaigns are designed to inspire action, promote responsible behavior, and create meaningful social impact. Join us in making a difference.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a
                                href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d90429] to-[#b00422] text-white font-bold px-12 py-5 rounded-full text-lg hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1 transition-all"
                            >
                                <FaHandHoldingHeart className="text-xl" />
                                Donate Now
                            </a>
                            <Link
                                to="/Volunteer"
                                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold px-12 py-5 rounded-full text-lg hover:bg-white/20 transition-all"
                            >
                                <FaUsers className="text-xl" />
                                Volunteer With Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
