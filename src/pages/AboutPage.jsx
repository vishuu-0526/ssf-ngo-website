import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FaHeart, FaHandshake, FaGlobeAmericas, FaBalanceScale, FaCheckCircle, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  return (
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
              Our Identity | हमारी पहचान
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight">
              About <span className="text-[#fb8500]">Swastik</span> <br />
              <span className="text-3xl md:text-5xl font-sans font-normal opacity-80">स्वास्तिक के बारे में</span>
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
              <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs">Who We Are | हम कौन हैं</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#002344] leading-tight">
                A Decade of <br /> <span className="text-[#d90429]">Pan India</span> Initiative.
                <div className="text-2xl md:text-3xl font-sans font-normal text-[#002344]/70 mt-4">
                  एक दशक की <span className="text-[#d90429]">अखिल भारतीय</span> पहल।
                </div>
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

      <section className="py-24 bg-[#f8f9fa] px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Vision */}
          <motion.div
            id="vision"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/3">
              <span className="block text-[#fb8500] font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Vision | हमारा दृष्टिकोण</span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#002344]">A Future of <br /> Dignity.</h3>
              <p className="text-xl md:text-2xl font-sans text-[#002344]/60 mt-2">गरिमापूर्ण भविष्य।</p>
              <div className="w-20 h-1 bg-[#fb8500] mt-6"></div>
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl md:text-3xl font-serif text-zinc-600 leading-relaxed italic">
                "A compassionate and responsible society where every individual can thrive with <span className="text-[#fb8500] bg-[#fb8500]/10 px-2">dignity</span>."
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-200"></div>

          {/* Mission */}
          <motion.div
            id="mission"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/3 md:order-2">
              <span className="block text-[#d90429] font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Mission | हमारा लक्ष्य</span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#002344]">Empowerment <br /> in Action.</h3>
              <p className="text-xl md:text-2xl font-sans text-[#002344]/60 mt-2">सशक्तिकरण क्रिया में।</p>
              <div className="w-20 h-1 bg-[#d90429] mt-6"></div>
            </div>
            <div className="md:w-2/3 md:order-1 text-right">
              <p className="text-xl md:text-2xl text-zinc-600 font-medium leading-relaxed">
                To empower communities through education, health, skill development, and sustainable practices, driven by <span className="text-[#002344] font-bold">ethical responsibility</span> and volunteerism.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= UNITY IN ACTION ================= */}
      <section className="py-20 bg-white px-6 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/src/assets/community-unity.png"
              alt="Community Unity"
              className="w-64 h-auto mx-auto drop-shadow-lg"
            />
          </motion.div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#002344]">Unity in <span className="text-[#fb8500]">Action</span> | एकता ही शक्ति</h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              We believe that when people come together with a single purpose, impossible dreams become reality. Our foundation is built on the strength of our collective hands.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INSTITUTIONAL DNA ================= */}
      <section id="values" className="py-32 bg-[#001529] text-white px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#fb8500]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs">Our Foundation | हमारी नींव</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Institutional <span className="text-[#fb8500]">DNA</span> | संस्थागत मूल्य</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaBalanceScale />, title: "Integrity & Ethics", desc: "Every action guided by moral responsibility and honesty.", color: "text-[#fb8500]" },
              { icon: <FaUsers />, title: "Community Participation", desc: "Active involvement of local communities in planning & execution.", color: "text-[#d90429]" },
              { icon: <FaHeart />, title: "Inclusion & Diversity", desc: "Supporting marginalized, differently-abled, and underrepresented groups.", color: "text-[#2d6a4f]" },
              { icon: <FaGlobeAmericas />, title: "Long-term Sustainability", desc: "Programs designed for lasting impact and environmental care.", color: "text-[#4361ee]" },
              { icon: <FaHandshake />, title: "Volunteer-driven", desc: "Initiatives powered by committed individuals, not just funding.", color: "text-[#fb8500]" },
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
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST & TRANSPARENCY ================= */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#002344]">
              Trust & <span className="text-[#fb8500]">Compliance</span> | विश्वास और अनुपालन
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
          </div>
        </div>
      </section>

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
  );
}
