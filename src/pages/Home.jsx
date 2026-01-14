

<<<<<<< HEAD
import childrenImg from "../assets/childrens.svg";
import { easeOut } from "motion/react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart, FaHandHoldingHeart, FaChild } from "react-icons/fa";

export default function Home() {
  function AnimatedCounter({ value }) {
=======
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart, FaHandHoldingHeart, FaChild, FaCheckCircle, FaQuoteLeft, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import OptimizedImage from "../components/OptimizedImage";

// Import images from public
const heroImage = "/images/real/ngo_event_1.jpg";
const educationRealImage = "/images/real/education_girls.jpg";

export default function Home() {
  function AnimatedCounter({ value, suffix = "+" }) {
>>>>>>> e20eac0 (Updated Website UI and content)
    const motionValue = useMotionValue(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
      const controls = animate(motionValue, value, {
<<<<<<< HEAD
        duration: 2.5,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }, [value]);

    return <span>{count.toLocaleString()}</span>;
  }

  return (
    <div className="w-full bg-white font-inria">

      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-black">
              DON'T JUST GIVE. <br />
              <span className="text-[#FDCF09] inline-block mt-2">CHANGE A DESTINY.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-zinc-600 font-medium leading-relaxed max-w-lg"
          >
            Your contribution isn't just a donation. It's a pencil for a student, a vaccine for a toddler, and a voice for the unheard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view" target="_blank" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#FDCF09] text-black font-bold text-lg uppercase tracking-wide hover:bg-[#e5bc08] hover:scale-105 transition-all shadow-lg rounded-lg">
                Start a Ripple Effect
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="pt-2"
          >
            <p className="text-xl md:text-2xl font-black tracking-wider text-black uppercase">
              &mdash; A Non-Profit, Volunteer-Driven Initiative
            </p>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Yellow Abstract Shape */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FDCF09] rounded-full mix-blend-multiply opacity-20 filter blur-3xl animate-pulse"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white z-10">
            <img
              src={childrenImg}
              alt="Happy children"
              className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-[20s]"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            {/* Floating Label */}
            <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-full shadow-lg">
              <p className="font-bold text-sm uppercase tracking-wider text-black flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FDCF09] rounded-full animate-ping"></span>
                Transforming Lives
              </p>
            </div>
          </div>
        </motion.div>
      </section>


      {/* ================= MISSION STATEMENT ================= */}
      <section className="bg-white py-12 px-4 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif italic text-zinc-800 leading-relaxed"
          >
            "To empower underprivileged communities by ensuring access to <span className="text-[#FDCF09] font-bold not-italic">education</span>, <span className="text-[#FDCF09] font-bold not-italic">healthcare</span>, and sustainable <span className="text-[#FDCF09] font-bold not-italic">livelihood</span>."
          </motion.h2>
        </div>
      </section>

      {/* ================= IMPACT BANNER ================= */}
      <section className="bg-black py-16 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#FDCF09_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          {[
            { value: 50000, label: "Lives Touched", icon: <FaHeart className="text-[#FDCF09] text-3xl mb-4 mx-auto" /> },
            { value: 120, label: "Villages Covered", icon: <FaHandHoldingHeart className="text-white text-3xl mb-4 mx-auto" /> },
            { value: 15000, label: "Children Educated", icon: <FaChild className="text-[#FDCF09] text-3xl mb-4 mx-auto" /> }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              {stat.icon}
              <div className="text-5xl lg:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter value={stat.value} />+
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
            </motion.div>
=======
        duration: 2,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }, [value, motionValue]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  }

  return (
    <div className="w-full bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#001529]">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={heroImage}
            alt="Children in rural India supported by Swastik Srijan Foundation"
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001529] via-[#001529]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col gap-4 mb-6">
                <span className="w-fit px-4 py-1.5 bg-[#d90429] text-white text-xs font-bold rounded-full tracking-[0.2em] uppercase">
                  Empowering Dreams
                </span>
                <span className="text-[#fb8500] font-bold uppercase tracking-[0.3em] text-[10px]">
                  A non-profit, volunteer-driven initiative
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] drop-shadow-xl">
                Don't Just Give, <br />
                <span className="text-[#fb8500]">Change a Destiny.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-zinc-300 font-medium leading-relaxed max-w-xl"
            >
              Every child deserves more than just a chance. Swastik Srijan Foundation empowers underprivileged communities through education, healthcare, and sustainable livelihood.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 pt-4"
            >
              <a
                href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                target="_blank"
                rel="noreferrer noopener"
                className="sm:w-auto"
              >
                <button className="btn-cta w-full group py-5 px-10">
                  Donate Now <FaHeart className="group-hover:scale-125 transition-transform" />
                </button>
              </a>
              <Link to="/Impact" className="sm:w-auto btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-[#002344] py-5 px-10">
                Our Impact <FaArrowRight />
              </Link>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 pt-10 border-t border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FaShieldAlt className="text-[#fb8500] text-xl" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-white tracking-wide">Registered NGO</p>
                  <p className="text-zinc-400">Reg No: 11448/13</p>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="text-sm text-zinc-400">
                Helping children since <span className="text-[#fb8500] font-bold">2013</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT NUMBERS ================= */}
      <section className="relative z-20 -mt-20 container mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-10 lg:p-14 grid grid-cols-2 lg:grid-cols-4 gap-12 border border-zinc-50">
          {[
            { value: 15000, label: "Children Educated", icon: <FaChild className="text-[#002344]" />, color: "bg-blue-50" },
            { value: 50, label: "Villages Adopted", icon: <FaHandHoldingHeart className="text-[#2d6a4f]" />, color: "bg-emerald-50" },
            { value: 85, label: "Success Rate", icon: <FaCheckCircle className="text-[#fb8500]" />, color: "bg-amber-50", suffix: "%" },
            { value: 10, label: "Years of Impact", icon: <FaHeart className="text-[#d90429]" />, color: "bg-red-50", suffix: "+" },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-3 group">
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl transition-transform group-hover:scale-110 duration-300`}>
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-[#002344] tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-[0.15em]">{stat.label}</p>
            </div>
>>>>>>> e20eac0 (Updated Website UI and content)
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* ================= THE "DIFFERENT WAY" MESSAGE ================= */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="max-w-5xl mx-auto text-center space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#FDCF09] font-black uppercase tracking-widest text-sm mb-4">Why We Are Different</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              You don't just give money.<br />
              You give <span className="bg-[#FDCF09] px-2 italic">ownership.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Rights, Not Charity", desc: "We don't just distribute aid. We empower communities to demand and access their rights to education and health." },
              { title: "Root Cause Approach", desc: "We tackle the systemic issues—poverty, caste, and gender—that keep children out of school." },
              { title: "Sustainable Change", desc: "We build local leadership so that the change lasts long after we leave." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.2) }}
                className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-black hover:border-[#FDCF09] transition-colors duration-300"
              >
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

=======
      {/* ================= THE RAJU STORY (Emotional Hook) ================= */}
      <section id="about" className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white"
            >
              <OptimizedImage
                src={educationRealImage}
                alt="Student supported by Swastik Srijan Foundation"
                className="w-full h-auto"
              />
              <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-[#002344]/90 via-[#002344]/40 to-transparent text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#fb8500]">Direct Impact</p>
                <h3 className="text-2xl font-serif font-bold italic">"I found a path I never knew existed."</h3>
                <p className="text-zinc-300 mt-2 text-sm">Raju, Class Topper (Batch 2023)</p>
              </div>
            </motion.div>
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#002344] opacity-[0.03] rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-[#d90429] opacity-[0.03] rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em]">A Story of Transformation</h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344] leading-tight">
                From child labor to leading his class.
              </h3>
            </div>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-medium">
              <p>
                Raju was identified during our 2023 survey while working at a village tea stall. His family couldn't afford
                a pencil, let alone a school fee.
              </p>
              <p>
                With the support of donors like you, we enrolled him in our <span className="text-[#002344] font-bold">"Shiksha Suraksha"</span> program. Today, he ranks
                first in his school and dreams of becoming an aerospace engineer.
              </p>
            </div>

            <div className="pt-4">
              <Link to="/DonateAndSupport" className="btn-primary shadow-[#002344]/20">
                Sponsor a Child Like Raju
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SSF NATIONAL ACADEMY HIGHLIGHT ================= */}
      <section className="py-24 bg-[#f8f9fa] border-y border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <OptimizedImage
                  src="/images/academy/academy-banner.jpg"
                  alt="SSF National Academy"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center shrink-0 border border-zinc-50">
                  <OptimizedImage src="/images/academy/academy-seal.jpg" alt="Academy Seal" className="w-14 h-14 rounded-full" objectFit="contain" />
                </div>
                <div>
                  <h2 className="text-[#2d6a4f] font-bold text-xs uppercase tracking-[0.2em] mb-2">Our Flagship Initiative</h2>
                  <h3 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344] leading-tight">
                    SSF National <span className="text-[#2d6a4f]">Academy</span>
                  </h3>
                </div>
              </div>
              <p className="text-xl text-zinc-600 leading-relaxed font-medium">
                Empowering every child for a stronger India. Our academy provides high-quality education, digital literacy, and character building to students in rural and underserved areas.
              </p>

              <ul className="space-y-5">
                {[
                  "Start of classes 9th to 12th in a phased manner",
                  "Establishment of Skill Development Hubs",
                  "Digital Academy for remote learning",
                  "Accessible education in both rural and urban areas"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <FaCheckCircle className="text-[#2d6a4f] text-sm" />
                    </div>
                    <span className="text-zinc-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link to="/UpcomingProjects" className="btn-secondary border-[#2d6a4f] text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white">
                  View Roadmap <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE SSF ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-5xl space-y-20">
          <div className="space-y-4">
            <h2 className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em]">Our Values</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344]">Why Your Donation Matters</h3>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">We don't just provide relief; we build systems that empower generations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "100% Transparency",
                desc: "We are a registered society. Every rupee is audited and reported annually to ensure maximum impact and trust.",
                icon: <FaShieldAlt className="text-[#002344]" />,
                color: "bg-blue-50"
              },
              {
                title: "Sustainable Focus",
                desc: "We focus on education and skills, giving communities the tools they need to lift themselves out of poverty forever.",
                icon: <FaCheckCircle className="text-[#2d6a4f]" />,
                color: "bg-emerald-50"
              },
              {
                title: "Zero Waste Policy",
                desc: "Minimal overhead costs mean your contribution goes directly to ground-level implementation and our beneficiaries.",
                icon: <FaHeart className="text-[#d90429]" />,
                color: "bg-red-50"
              }
            ].map((item, i) => (
              <div key={i} className="premium-card group hover:border-[#002344]/10">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8 text-2xl transition-transform group-hover:scale-110 duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-[#002344]">{item.title}</h4>
                <p className="text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section id="join-us" className="py-32 bg-[#001529] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fb8500] opacity-[0.05] rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#d90429] opacity-[0.05] rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 text-center relative z-10 space-y-12">
          <FaQuoteLeft className="text-7xl text-[#fb8500]/20 mx-auto" />
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white max-w-4xl mx-auto leading-tight">
            The next chapter for a child in need is waiting to be <span className="text-[#fb8500]">written by you.</span>
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-medium">
            Your small act of kindness today can become a lifetime of difference tomorrow. Join us in our mission to build a better Bharat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <a
              href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="btn-cta w-full sm:w-auto px-14 py-6 text-xl shadow-[#d90429]/20">
                Donate Now
              </button>
            </a>
            <Link to="/Volunteer" className="btn-secondary w-full sm:w-auto px-14 py-6 text-xl border-white text-white hover:bg-white hover:text-[#001529]">
              Volunteer with Us
            </Link>
          </div>
>>>>>>> e20eac0 (Updated Website UI and content)
        </div>
      </section>

    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> e20eac0 (Updated Website UI and content)
