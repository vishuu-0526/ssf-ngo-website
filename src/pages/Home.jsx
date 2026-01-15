

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart, FaHandHoldingHeart, FaChild, FaCheckCircle, FaQuoteLeft, FaArrowRight, FaShieldAlt, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import OptimizedImage from "../components/OptimizedImage";
import ImpactStories from "../components/ImpactStories";

// Import images from public
const heroImage = "/images/real/community-rally-children.jpg";
const educationRealImage = "/images/real/girls-group-learning-close.jpg";

export default function Home() {
  function AnimatedCounter({ value, suffix = "+" }) {
    const motionValue = useMotionValue(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
      const controls = animate(motionValue, value, {
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
          ))}
        </div>
      </section>

      {/* ================= PAN-INDIA PROGRESS TEASER ================= */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-gradient-to-br from-[#002344] to-[#001529] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fb8500] opacity-[0.05] rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs">Our Progress</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                  A Decade of <br /> <span className="text-[#fb8500]">Pan India</span> Initiative.
                </h2>
              </div>
              <p className="text-xl text-zinc-300 font-medium leading-relaxed">
                From 2014 to 2025, we have consistently expanded our reach, starting from mental health awareness to building a nationwide ecosystem of education, nutrition, and technology-driven development.
              </p>
              <div className="pt-4">
                <Link to="/Journey" className="btn-cta bg-white text-[#002344] hover:bg-zinc-100">
                  Explore Our Roadmap (2014 - 2025) <FaArrowRight />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { year: "2014", label: "Kickoff", color: "border-[#fb8500]" },
                { year: "2017", label: "Education Focus", color: "border-[#d90429]" },
                { year: "2020", label: "Resilience", color: "border-[#fb8500]" },
                { year: "2025", label: "Tech Scaling", color: "border-[#d90429]" },
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-3xl border-2 ${item.color} bg-white/5 backdrop-blur-sm text-center`}>
                  <p className="text-3xl font-serif font-bold text-[#fb8500] mb-2">{item.year}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
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

      {/* ================= STORIES OF CHANGE TEASER ================= */}
      <ImpactStories limit={3} />

      {/* ================= VIDEO SPOTLIGHT ================= */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fb8500] opacity-5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#003366] opacity-10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs">
                  <div className="w-10 h-1 bg-[#fb8500]"></div>
                  <span>Watch Us In Action</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">
                  Witness the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb8500] to-[#ffb703]">Real Change.</span>
                </h2>
              </div>

              <p className="text-xl text-zinc-400 leading-relaxed font-light">
                See the smiles, hear the voices, and feel the impact of your support. Our video stories take you directly to the ground zero of transformation.
              </p>

              <div className="flex items-center gap-6 pt-4">
                <Link to="/Media" className="group flex items-center gap-4 text-white hover:text-[#fb8500] transition-colors">
                  <div className="w-14 h-14 rounded-full border border-[#fb8500] flex items-center justify-center group-hover:bg-[#fb8500] group-hover:text-black transition-all">
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                  <span className="font-bold tracking-wider text-sm uppercase">View Full Media Gallery</span>
                </Link>
              </div>
            </div>

            {/* Video Content */}
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="relative w-full max-w-sm h-[500px] md:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 group bg-black">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1089068852856795&show_text=false&t=0"
                  className="w-full h-full border-none"
                  scrolling="no"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
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

      {/* ================= MISSION & VISION TEASER ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-6xl space-y-16">
          <div className="space-y-4">
            <h2 className="text-[#fb8500] font-bold text-xs uppercase tracking-[0.2em]">Purpose & Direction</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344]">Our Campaign</h3>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">Foundational pillars of our movement for social change.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Mission Card */}
            <div className="group p-10 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-[#002344] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-[#002344]/5 rounded-2xl flex items-center justify-center mb-6 text-3xl text-[#002344]">
                <FaHandHoldingHeart />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#002344] mb-4">Our Mission</h4>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                Our mission embodies our commitment to tangible social impact. Through education, health, and sustainable development, we aim to uplift communities and empower individuals to realize their full potential.
              </p>
              <Link to="/Mission" className="text-[#002344] font-bold uppercase text-sm tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                Read Full Mission <FaArrowRight />
              </Link>
            </div>

            {/* Vision Card */}
            <div className="group p-10 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-[#fb8500] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-[#fb8500]/10 rounded-2xl flex items-center justify-center mb-6 text-3xl text-[#fb8500]">
                <FaGlobeAmericas />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#002344] mb-4">Our Vision</h4>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                To build an inclusive, ethical, and empowered society where every individual has access to education, health, and dignity.
              </p>
              <Link to="/Vision" className="text-[#fb8500] font-bold uppercase text-sm tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                See Full Vision <FaArrowRight />
              </Link>
            </div>

            {/* Objectives Card */}
            <div className="group p-10 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-[#d90429] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-[#d90429]/5 rounded-2xl flex items-center justify-center mb-6 text-3xl text-[#d90429]">
                <FaCheckCircle />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#002344] mb-4">Our Objectives</h4>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                To promote holistic development of all sections of society through education, health, and empowerment.
              </p>
              <Link to="/Objectives" className="text-[#d90429] font-bold uppercase text-sm tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                View Objectives <FaArrowRight />
              </Link>
            </div>
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
        </div>
      </section>

    </div>
  );
}

