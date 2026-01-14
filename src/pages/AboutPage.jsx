import { motion } from "framer-motion";
<<<<<<< HEAD
=======
import { Link } from "@tanstack/react-router";
>>>>>>> e20eac0 (Updated Website UI and content)
import { FaHeart, FaHandshake, FaGlobeAmericas, FaBalanceScale, FaCheckCircle, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  return (
<<<<<<< HEAD
    <div className="w-full font-inria">

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-24 bg-zinc-900 text-white text-center px-4 relative overflow-hidden">
        {/* Abstract BG */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 relative z-10"
        >
          About <span className="text-[#FDCF09]">Swastik</span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-zinc-300 text-xl md:text-2xl font-medium relative z-10 leading-relaxed">
          Building a future where every child has a voice, a choice, and a chance to thrive.
        </p>
      </section>

      {/* ================= 1. FOUNDATION INTRO ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black leading-tight">
              A Decade of <br /> Unwavering Commitment.
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Founded in 2013, Swastik Srijan Foundation started with a simple belief: that meaningful change begins at the grassroots. What began as a small volunteer group has grown into a movement touching thousands of lives across India.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We work tirelessly to address the root causes of poverty and inequality—focusing on education, healthcare, and sustainable livelihoods to build resilient communities.
            </p>
          </div>
          <div className="bg-zinc-50 rounded-2xl p-12 relative overflow-hidden text-center border-l-8 border-[#FDCF09]">
            <h4 className="text-8xl font-black text-black/10 absolute top-4 right-4">2013</h4>
            <div className="relative z-10 space-y-2">
              <span className="block text-6xl font-black text-black">10+</span>
              <span className="block text-xl font-bold text-zinc-500 uppercase tracking-widest">Years of Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. VISION & MISSION ================= */}
      <section className="py-24 bg-zinc-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-black"
            >
              <div className="w-16 h-16 bg-[#FDCF09] rounded-full flex items-center justify-center mb-6">
                <FaGlobeAmericas className="text-2xl text-black" />
              </div>
              <h3 className="text-3xl font-black mb-4">Our Vision</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                A society where every individual, regardless of their background, has access to education, healthcare, dignity, and equal opportunities to reach their full potential.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-[#FDCF09]"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <FaHandshake className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-black mb-4">Our Mission</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                To empower underprivileged communities through sustainable, integrated programs in education, health, women empowerment, and skill development, fostering self-reliance and ownership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 3. CORE VALUES ================= */}
      <section className="py-24 bg-zinc-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm mb-4">What Drives Us</h2>
            <h3 className="text-4xl md:text-5xl font-black">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaBalanceScale />, title: "Integrity", desc: "We are transparent, honest, and accountable in every action we take." },
              { icon: <FaHeart />, title: "Compassion", desc: "Empathy is at the heart of our work. We serve with kindness and respect." },
              { icon: <FaUsers />, title: "Inclusion", desc: "We ensure no one is left behind, regardless of caste, creed, or gender." },
              { icon: <FaCheckCircle />, title: "Ownership", desc: "We don't just give aid; we empower communities to own their development." },
            ].map((val, i) => (
              <div key={i} className="bg-zinc-800 p-8 rounded-xl hover:bg-zinc-700 transition-colors duration-300">
                <div className="text-[#FDCF09] text-4xl mb-6">{val.icon}</div>
                <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
=======
    <main className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-[#001529] text-white pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fb8500] opacity-[0.05] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs mb-4 inline-block">
              Our Identity
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight">
              About <span className="text-[#fb8500]">Swastik</span>
            </h1>
            <p className="text-zinc-400 mt-8 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              Building a future where every child has a voice, a choice, and a chance to thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FOUNDATION INTRO ================= */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs">Who We Are</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#002344] leading-tight">
                A Decade of <br /> <span className="text-[#d90429]">Unwavering</span> Commitment.
              </h2>
            </div>

            <div className="space-y-6 text-xl text-zinc-600 font-medium leading-relaxed">
              <p>
                Founded in 2013, Swastik Srijan Foundation started with a simple belief: that meaningful change begins at the grassroots. What began as a small volunteer group has grown into a movement touching thousands of lives across India.
              </p>
              <p>
                We work tirelessly to address the root causes of poverty and inequality—focusing on education, healthcare, and sustainable livelihoods to build resilient communities.
              </p>
            </div>

            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <span className="block text-5xl font-serif font-bold text-[#002344]">10+</span>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Years</span>
              </div>
              <div className="w-px h-16 bg-zinc-100"></div>
              <div className="text-center">
                <span className="block text-5xl font-serif font-bold text-[#fb8500]">120+</span>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Villages</span>
              </div>
              <div className="w-px h-16 bg-zinc-100"></div>
              <div className="text-center">
                <span className="block text-5xl font-serif font-bold text-[#d90429]">5+</span>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">States</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#fb8500]/5 rounded-[3rem] blur-2xl"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white">
              <img
                src="/images/real/office_banner.jpg"
                alt="Swastik Srijan Foundation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002344]/80 via-transparent to-transparent flex items-end p-12">
                <div className="text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#fb8500] mb-2">Established</p>
                  <p className="text-4xl font-serif font-bold">December 2013</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-32 bg-[#f8f9fa] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-16 rounded-[3rem] shadow-xl border-t-8 border-[#fb8500] group transition-all"
          >
            <div className="w-20 h-20 bg-[#fb8500]/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-[#fb8500] transition-colors">
              <FaGlobeAmericas className="text-3xl text-[#fb8500] group-hover:text-white" />
            </div>
            <h3 className="text-4xl font-serif font-bold text-[#002344] mb-6">Our Vision</h3>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed italic">
              "A society where every individual, regardless of their background, has access to education, healthcare, dignity, and equal opportunities to reach their full potential."
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#002344] p-16 rounded-[3rem] shadow-xl border-t-8 border-[#d90429] group transition-all"
          >
            <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-[#d90429] transition-colors">
              <FaHandshake className="text-3xl text-white pointer-events-none" />
            </div>
            <h3 className="text-4xl font-serif font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl text-[#b0c4de] font-medium leading-relaxed">
              To empower underprivileged communities through sustainable, integrated programs in education, health, women empowerment, and skill development, fostering self-reliance and ownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-32 bg-[#001529] text-white px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#fb8500]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs">What Drives Us</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Our Core <span className="text-[#fb8500]">Values</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaBalanceScale />, title: "Integrity", desc: "We are transparent, honest, and accountable in every action we take.", color: "text-[#fb8500]" },
              { icon: <FaHeart />, title: "Compassion", desc: "Empathy is at the heart of our work. We serve with kindness and respect.", color: "text-[#d90429]" },
              { icon: <FaUsers />, title: "Inclusion", desc: "We ensure no one is left behind, regardless of caste, creed, or gender.", color: "text-[#2d6a4f]" },
              { icon: <FaCheckCircle />, title: "Ownership", desc: "We don't just give aid; we empower communities to own their development.", color: "text-[#4361ee]" },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`text-4xl mb-8 ${val.color}`}>{val.icon}</div>
                <h4 className="text-2xl font-serif font-bold mb-4">{val.title}</h4>
                <p className="text-zinc-400 font-medium leading-relaxed">{val.desc}</p>
              </motion.div>
>>>>>>> e20eac0 (Updated Website UI and content)
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ================= 4. ALL-INDIA PRESENCE ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-zinc-50 rounded-xl p-2 flex items-center justify-center border-2 border-dashed border-zinc-200">
            <img src="/images/map.png" alt="Map of India Presence" className="w-full h-full object-contain rounded-lg" />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-[#FDCF09] font-bold tracking-widest uppercase text-sm">Where We Work</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black">All-India Presence</h3>

            <p className="text-xl text-zinc-600 leading-relaxed">
              From the remote villages of rural India to the urban slums of metropolitan cities, Swastik Srijan Foundation is building bridges of hope.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <span className="block text-4xl font-black text-zinc-900 border-b-4 border-[#FDCF09] w-fit mb-2">5+</span>
                <span className="text-zinc-500 font-bold uppercase text-sm">States</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-zinc-900 border-b-4 border-black w-fit mb-2">120+</span>
                <span className="text-zinc-500 font-bold uppercase text-sm">Villages</span>
              </div>
            </div>
=======
      {/* ================= TRUST & TRANSPARENCY ================= */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#002344]">
              Trust & <span className="text-[#fb8500]">Compliance</span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-medium">
              Transparency is the foundation of our work. We are fully compliant with Indian regulations for NGOs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Registered Society", tag: "M.P. Act 1973" },
              { title: "12A Certified", tag: "Income Tax" },
              { title: "80G Compliant", tag: "Donor Benefit" },
              { title: "CSR Compatible", tag: "Industrial Outreach" }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-[#f8f9fa] rounded-3xl border border-zinc-100">
                <p className="text-xl font-serif font-bold text-[#002344] mb-2">{item.title}</p>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{item.tag}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#f8f9fa] rounded-[4rem] p-12 md:p-20 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-serif font-bold text-[#002344]">Official Recognition</h3>
              <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                We are proud to be recognized by national bodies, including the National Commission for Women, confirming our commitment to human rights and dignity.
              </p>
              <div className="pt-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm inline-flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-green-500 text-xl" />
                  </div>
                  <span className="font-bold text-[#002344]">NCW Pledge Certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#fb8500]/5 rounded-[3rem] blur-2xl"></div>
              <img
                src="/images/real/ncw_pledge_certificate.jpg"
                alt="NCW Pledge Certificate"
                className="relative w-full h-auto rounded-[2.5rem] shadow-2xl border-4 border-white"
              />
            </div>
>>>>>>> e20eac0 (Updated Website UI and content)
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ================= TRUST & COMPLIANCE ================= */}
      <section className="py-20 bg-zinc-50 px-4 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 text-zinc-400 uppercase tracking-widest">
            Compliance & Transparency
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-bold text-zinc-600 uppercase tracking-wide">
            <div className="bg-white py-4 rounded-lg shadow-sm">Registered NGO</div>
            <div className="bg-white py-4 rounded-lg shadow-sm">12A Certified</div>
            <div className="bg-white py-4 rounded-lg shadow-sm">80G Compliant</div>
            <div className="bg-white py-4 rounded-lg shadow-sm">CSR Compatible</div>
          </div>
        </div>
      </section>

    </div>
=======
      {/* ================= FINAL CTA ================= */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#002344] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fb8500] opacity-[0.1] rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Join Our Mission</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
              Your support can help us reach more children and families. Let's create a legacy of kindness together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/PartnerWithUs" className="bg-[#fb8500] text-white px-12 py-5 rounded-full font-bold hover:bg-[#ff9500] transition-colors shadow-lg shadow-[#fb8500]/20">
                Partner with Us
              </Link>
              <Link to="/Volunteer" className="bg-white text-[#002344] px-12 py-5 rounded-full font-bold hover:bg-zinc-100 transition-colors">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
>>>>>>> e20eac0 (Updated Website UI and content)
  );
}
