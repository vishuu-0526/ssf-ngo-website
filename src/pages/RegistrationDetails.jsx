import { useEffect, useState } from "react";
import { FaBuilding, FaIdCard, FaBalanceScale, FaBullseye, FaAward, FaEnvelope } from "react-icons/fa";
<<<<<<< HEAD
=======
import { motion } from "framer-motion";
>>>>>>> e20eac0 (Updated Website UI and content)

export default function RegistrationDetails() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "overview",
      icon: <FaBuilding />,
<<<<<<< HEAD
      title: "1. Organization Overview",
      content:
        "Swastik Srijan Foundation (SSF) is a legally registered non-profit organization committed to education, health, social welfare, environment, and cultural development across India.",
      extra: (
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li><strong>Full Name:</strong> Swastik Srijan Foundation</li>
          <li><strong>Type:</strong> Non-Governmental Organization (NGO)</li>
          <li>
            <strong>Scope:</strong> Nationwide activities covering education,
            health, women & child welfare, rural development, and environmental sustainability
=======
      title: "Organization Overview",
      content:
        "Swastik Srijan Foundation (SSF) is a legally registered non-profit organization committed to education, health, social welfare, environment, and cultural development across India.",
      extra: (
        <ul className="list-disc pl-6 mt-3 space-y-1 font-medium">
          <li><strong>Full Name:</strong> Swastik Srijan Foundation Samiti</li>
          <li><strong>Type:</strong> Non-Governmental Organization (NGO)</li>
          <li>
            <strong>Scope:</strong> Nationwide activities covering education,
            health, women & child welfare.
>>>>>>> e20eac0 (Updated Website UI and content)
          </li>
        </ul>
      ),
    },
    {
      id: "registration",
      icon: <FaIdCard />,
<<<<<<< HEAD
      title: "2. Legal Registration",
      content: null,
      extra: (
        <ul className="list-disc pl-6 space-y-2">
=======
      title: "Legal Registration",
      content: null,
      extra: (
        <ul className="list-disc pl-6 space-y-2 font-medium">
>>>>>>> e20eac0 (Updated Website UI and content)
          <li><strong>Registered Under:</strong> Madhya Pradesh Societies Registration Act, 1973</li>
          <li><strong>Registration Number:</strong> 11448/13</li>
          <li><strong>Date of Registration:</strong> 30/12/2013</li>
          <li>
<<<<<<< HEAD
            <strong>Registered Office:</strong><br />
            Ward No 1, Village Dadar, Post Rahat,<br />
            Rewa – 486001, Madhya Pradesh, India
=======
            <strong>Registered Office:</strong> Village Dadar, Post Rahat, Rewa – 486001, M.P.
>>>>>>> e20eac0 (Updated Website UI and content)
          </li>
        </ul>
      ),
    },
    {
      id: "governance",
      icon: <FaBalanceScale />,
<<<<<<< HEAD
      title: "3. Compliance & Governance",
      content:
        "Swastik Srijan Foundation operates in full compliance with Indian laws and regulations applicable to non-profit organizations.",
      extra: (
        <>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Maintains transparency through annual filings, audits, and statutory reporting</li>
            <li>Governed by an Executive Committee consisting of:</li>
          </ul>
          <ul className="list-disc pl-10 mt-2 space-y-1">
            <li>President</li>
            <li>Vice-President</li>
            <li>Secretary</li>
            <li>Joint Secretary</li>
            <li>Treasurer</li>
            <li>Members</li>
=======
      title: "Compliance & Governance",
      content:
        "SSF operates in full compliance with Indian laws and regulations applicable to non-profit organizations.",
      extra: (
        <>
          <ul className="list-disc pl-6 mt-3 space-y-1 font-medium">
            <li>Maintains transparency through annual filings and audits.</li>
            <li>Governed by an Executive Committee (President, Secretary, Treasurer).</li>
>>>>>>> e20eac0 (Updated Website UI and content)
          </ul>
        </>
      ),
    },
    {
      id: "purpose",
      icon: <FaBullseye />,
<<<<<<< HEAD
      title: "4. Purpose of Registration",
      content: null,
      extra: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Legal recognition as a charitable organization</li>
          <li>Authority to conduct nationwide welfare programs</li>
          <li>Compliance with statutory taxation, reporting, and governance norms</li>
          <li>Transparency and trust for donors, volunteers, and beneficiaries</li>
        </ul>
      ),
    },
    {
      id: "trust",
      icon: <FaAward />,
      title: "5. Institutional Trust & Recognition",
      content: null,
      extra: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Enhances credibility and accountability of SSF’s initiatives</li>
          <li>Enables receipt of donations, grants, and institutional support</li>
          <li>
            Forms the foundation for governance frameworks including Memorandum,
            Rules, Terms & Conditions, and Privacy Policy
          </li>
=======
      title: "Purpose & Trust",
      content: null,
      extra: (
        <ul className="list-disc pl-6 space-y-2 font-medium">
          <li>Legal recognition as a charitable organization</li>
          <li>Authority to conduct nationwide welfare programs</li>
          <li>Transparency and trust for donors & beneficiaries</li>
>>>>>>> e20eac0 (Updated Website UI and content)
        </ul>
      ),
    },
  ];

  return (
<<<<<<< HEAD
    <div className="w-full bg-zinc-50 font-inria">

      {/* ================= HERO ================= */}
      <section className="bg-zinc-900 text-white pt-40 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Registration <span className="text-[#FDCF09]">Details</span>
          </h1>
          <p className="text-zinc-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Legal registration and governance information of Swastik Srijan Foundation.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto py-16 px-4">

        {/* ================= INTRO CARD ================= */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border-l-8 border-[#FDCF09]">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900">
            Legal Identity & Compliance
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
=======
    <div className="w-full bg-[#f8f9fa] font-inria min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-[#001529] text-white pt-48 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em] mb-4">Organizational Trust</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Registration <span className="text-[#fb8500]">Details.</span>
            </h1>
            <p className="text-zinc-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Official legal registration and governance information of Swastik Srijan Foundation.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-32 px-6">

        {/* ================= INTRO CARD ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-10 md:p-16 mb-20 border-l-8 border-[#002344] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#002344]/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700"></div>
          <h2 className="text-4xl font-serif font-bold mb-8 text-[#002344]">
            Legal Identity & Compliance
          </h2>
          <p className="text-xl text-zinc-500 leading-relaxed font-medium">
>>>>>>> e20eac0 (Updated Website UI and content)
            This page provides official registration and governance details of Swastik
            Srijan Foundation to ensure transparency, trust, and compliance with
            applicable laws and regulations.
          </p>
<<<<<<< HEAD
        </div>

        {/* ================= SECTIONS GRID ================= */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#FDCF09] group"
              onMouseEnter={() => setActiveSection(section.id)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 p-3 rounded-full text-xl transition-colors duration-300 ${
                    activeSection === section.id
                      ? "bg-[#FDCF09] text-black"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
=======
        </motion.div>

        {/* ================= SECTIONS GRID ================= */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] shadow-sm p-10 hover:shadow-xl hover:bg-[#002344] transition-all duration-500 border border-zinc-100 group"
              onMouseEnter={() => setActiveSection(section.id)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="flex flex-col gap-6">
                <div
                  className={`w-16 h-16 rounded-2xl text-2xl flex items-center justify-center transition-all duration-500 ${activeSection === section.id
                    ? "bg-[#fb8500] text-white"
                    : "bg-blue-50 text-[#002344]"
                    }`}
>>>>>>> e20eac0 (Updated Website UI and content)
                >
                  {section.icon}
                </div>

<<<<<<< HEAD
                <div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-[#FDCF09] transition-colors">
=======
                <div className="space-y-4">
                  <h3 className={`text-2xl font-serif font-bold transition-colors duration-500 ${activeSection === section.id ? 'text-white' : 'text-[#002344]'}`}>
>>>>>>> e20eac0 (Updated Website UI and content)
                    {section.title}
                  </h3>

                  {section.content && (
<<<<<<< HEAD
                    <p className="text-zinc-600 leading-relaxed mb-3">
=======
                    <p className={`leading-relaxed transition-colors duration-500 ${activeSection === section.id ? 'text-blue-100' : 'text-zinc-500'}`}>
>>>>>>> e20eac0 (Updated Website UI and content)
                      {section.content}
                    </p>
                  )}

                  {section.extra && (
<<<<<<< HEAD
                    <div className="text-zinc-600 leading-relaxed">
=======
                    <div className={`leading-relaxed transition-colors duration-500 ${activeSection === section.id ? 'text-blue-200' : 'text-zinc-600'}`}>
>>>>>>> e20eac0 (Updated Website UI and content)
                      {section.extra}
                    </div>
                  )}
                </div>
              </div>
<<<<<<< HEAD
            </div>
=======
            </motion.div>
>>>>>>> e20eac0 (Updated Website UI and content)
          ))}
        </div>

        {/* ================= CONTACT SECTION ================= */}
<<<<<<< HEAD
        <div className="bg-zinc-900 rounded-2xl shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDCF09] opacity-10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>

          <div className="p-10 md:p-16 text-center relative z-10">
            <div className="w-16 h-16 bg-[#FDCF09] text-black rounded-full mx-auto flex items-center justify-center text-3xl mb-6">
              <FaEnvelope />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Need official clarification?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              For any verification or compliance-related queries, feel free to
              contact Swastik Srijan Foundation.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 inline-block">
              <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
                Email Us
              </p>
              <a
                href="mailto:swastiksrijanfoundation@gmail.com"
                className="text-white font-bold text-lg hover:text-[#FDCF09] transition-colors"
=======
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#001529] rounded-[3rem] shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fb8500] opacity-[0.05] rounded-full translate-x-1/3 -translate-y-1/3 blur-[120px]"></div>

          <div className="p-12 md:p-20 text-center relative z-10 space-y-8">
            <div className="w-20 h-20 bg-[#fb8500] text-white rounded-[1.5rem] mx-auto flex items-center justify-center text-3xl shadow-lg shadow-[#fb8500]/20">
              <FaEnvelope />
            </div>
            <h2 className="text-4xl font-serif font-bold text-white">
              Need official clarification?
            </h2>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto font-medium lead">
              For any legal verification or compliance-related queries, feel free to
              reach our administrative head.
            </p>

            <div className="bg-white/5 backdrop-blur-md px-10 py-6 rounded-2xl border border-white/10 inline-block group hover:bg-white/10 transition-all">
              <p className="text-xs text-[#fb8500] uppercase tracking-[0.2em] font-bold mb-2">
                Official Email
              </p>
              <a
                href="mailto:swastiksrijanfoundation@gmail.com"
                className="text-white font-serif font-bold text-2xl hover:text-[#fb8500] transition-colors"
>>>>>>> e20eac0 (Updated Website UI and content)
              >
                swastiksrijanfoundation@gmail.com
              </a>
            </div>
          </div>
<<<<<<< HEAD
        </div>
=======
        </motion.div>
>>>>>>> e20eac0 (Updated Website UI and content)

      </div>
    </div>
  );
}
