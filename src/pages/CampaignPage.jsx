import { Link } from "@tanstack/react-router";
import { FaBook, FaStethoscope, FaTools, FaBalanceScale, FaUsers, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Campaign() {
  const programs = [
    {
      id: "education",
      title: "Education excellence",
      icon: <FaBook />,
      image: "/images/real/education_girls.jpg",
      description: "We believe education is the key to breaking the cycle of poverty. Our initiatives focus on providing quality education, digital literacy, and scholarship support to underprivileged children.",
      stats: "15,000+ Children Impacted",
      borderColor: "border-[#fb8500]",
      accent: "text-[#fb8500]",
      bg: "bg-orange-50/50"
    },
    {
      id: "skills",
      title: "Livelihood & Skills",
      icon: <FaTools />,
      image: "/images/real/women_community_meeting.jpg",
      description: "Empowering youth and women with industry-relevant skills. From vocational training to soft skills workshops, we prepare them for sustainable and dignified livelihoods.",
      stats: "5,000+ Youth Trained",
      borderColor: "border-[#002344]",
      accent: "text-[#002344]",
      bg: "bg-blue-50/50"
    },
    {
      id: "health",
      title: "Health & Nutrition",
      icon: <FaStethoscope />,
      image: "/images/real/nutrition_program.jpg",
      description: "Ensuring access to basic healthcare and adequate nutrition. We organize regular medical camps, awareness drives, and provide nutritional support to mothers and children.",
      stats: "50,000+ Lives Touched",
      borderColor: "border-[#d90429]",
      accent: "text-[#d90429]",
      bg: "bg-red-50/50"
    },
    {
      id: "legal",
      title: "Legal Rights Awareness",
      icon: <FaBalanceScale />,
      image: "/images/real/scholarship_distribution.jpg",
      description: "Democratizing justice by spreading legal awareness. We educate communities about their rights, entitlements, and provide support for handling legal grievances.",
      stats: "100+ Awareness Camps",
      borderColor: "border-purple-500",
      accent: "text-purple-600",
      bg: "bg-purple-50/50"
    },
    {
      id: "community",
      title: "Community Growth",
      icon: <FaUsers />,
      image: "/images/real/tree_plantation.jpg",
      description: "Building resilient communities through infrastructure support, water conservation projects, and local leadership development programs.",
      stats: "120+ Villages Covered",
      borderColor: "border-[#2d6a4f]",
      accent: "text-[#2d6a4f]",
      bg: "bg-emerald-50/50"
    },
  ];

  return (
    <section className="bg-white font-inria min-h-screen">
      {/* ================= HERO ================= */}
      <div className="bg-[#001529] text-white pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em] mb-4">Our Core Mission</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Driving Holistic <span className="text-[#fb8500]">Change.</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
              We focus on five key pillars of development to transform lives and empower communities in the heart of rural Bharat.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= PROGRAMS GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              id={program.id}
              className={`bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] border border-zinc-50 flex flex-col group hover:-translate-y-2 transition-all duration-500`}
            >
              <div className="w-full h-64 overflow-hidden relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002344]/60 to-transparent"></div>
                <div className={`absolute bottom-6 left-6 p-4 ${program.bg} backdrop-blur-md rounded-2xl shadow-xl border border-white/20`}>
                  <div className={`text-2xl ${program.accent}`}>{program.icon}</div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-[#002344] group-hover:text-[#fb8500] transition-colors leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed font-medium text-sm">
                    {program.description}
                  </p>
                </div>

                <div className="pt-8 mt-auto border-t border-zinc-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${program.accent.replace('text-', 'bg-')}`}></div>
                    <span className="font-bold text-[#002344] text-xs uppercase tracking-wider">{program.stats}</span>
                  </div>
                  <Link
                    to="/Contact"
                    className={`inline-flex items-center gap-2 ${program.accent} font-bold text-sm hover:gap-3 transition-all`}
                  >
                    Partner Us <FaArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="py-32 bg-[#001529] relative overflow-hidden text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(#fb8500_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
            Want to <span className="text-[#fb8500]">support</span> these programs?
          </h2>
          <p className="text-zinc-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Your contribution provides the fuel for these initiatives to reach more villages and change more destinies. Join our mission today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Link to="/DonateAndSupport" className="sm:w-auto">
              <button className="btn-cta w-full px-14 py-6 text-xl shadow-[#d90429]/20">
                Donate Now
              </button>
            </Link>
            <Link to="/Volunteer" className="sm:w-auto">
              <button className="btn-secondary w-full px-14 py-6 text-xl border-white text-white hover:bg-white hover:text-[#001529]">
                Volunteer with Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
