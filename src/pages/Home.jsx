

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart, FaHandHoldingHeart, FaChild, FaCheckCircle, FaQuoteLeft, FaArrowRight, FaShieldAlt, FaGlobeAmericas, FaHandshake } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import OptimizedImage from "../components/OptimizedImage";
import ImpactStories from "../components/ImpactStories";
import FloatingTicker from "../components/FloatingTicker";
import OfficialOverview from "../components/OfficialOverview";
import CorePhilosophy from "../components/CorePhilosophy";
import ImpactTimeline from "../components/ImpactTimeline";

// Import images from public
const heroImage = "/images/hero_children.png";
const educationRealImage = "/images/classroom-session.png";

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
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 overflow-hidden bg-[#001529]">
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
                  Empowering Dreams | सपनों को उड़ान
                </span>
                <span className="text-[#fb8500] font-bold uppercase tracking-[0.3em] text-[10px]">
                  A non-profit, volunteer-driven initiative | एक गैर-लाभकारी, स्वयंसेवक संचालित पहल
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] drop-shadow-xl">
                Don't Just Give, <br />
                <span className="text-[#fb8500]">Change a Destiny.</span>
                <div className="text-2xl lg:text-3xl mt-4 font-sans font-normal opacity-80">
                  केवल दान न करें, <span className="text-[#fb8500]">भाग्य बदलें।</span>
                </div>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-zinc-300 font-medium leading-relaxed max-w-xl"
            >
              Every child deserves more than just a chance. Swastik Srijan Foundation empowers underprivileged communities through education, healthcare, and sustainable livelihood.
              <p className="mt-2 text-lg text-zinc-400">
                हर बच्चा सिर्फ एक मौके से ज्यादा का हकदार है। स्वास्तिक सृजन फाउंडेशन शिक्षा, स्वास्थ्य और सतत आजीविका के माध्यम से वंचित समुदायों को सशक्त बनाता है।
              </p>
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
                  Donate Now | अब दान करें <FaHeart className="group-hover:scale-125 transition-transform" />
                </button>
              </a>
              <Link to="/Impact" className="sm:w-auto btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-[#002344] py-5 px-10">
                Our Impact | हमारा प्रभाव <FaArrowRight />
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

      {/* ================= FLOATING TICKER ================= */}
      <FloatingTicker />

      {/* ================= IMPACT NUMBERS ================= */}
      <section className="relative z-20 mt-12 container mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-10 lg:p-14 grid grid-cols-2 lg:grid-cols-4 gap-12 border border-zinc-50">
          {[
            { value: 20000, label: "Children Educated", labelHi: "शिक्षित बच्चे", icon: <FaChild className="text-[#002344]" />, color: "bg-blue-50" },
            { value: 100, label: "Villages Adopted", labelHi: "अपनाए गए गांव", icon: <FaHandHoldingHeart className="text-[#2d6a4f]" />, color: "bg-emerald-50" },
            { value: 92, label: "Impact Rate", labelHi: "प्रभाव दर", icon: <FaCheckCircle className="text-[#fb8500]" />, color: "bg-amber-50", suffix: "%" },
            { value: 12, label: "Years of Impact", labelHi: "प्रभाव के वर्ष", icon: <FaHeart className="text-[#d90429]" />, color: "bg-red-50", suffix: "+" },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-3 group">
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl transition-transform group-hover:scale-110 duration-300`}>
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-[#002344] tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-[0.15em]">{stat.label}</p>
              <p className="text-zinc-400 font-medium text-[10px] uppercase tracking-[0.1em] -mt-2">{stat.labelHi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OFFICIAL OVERVIEW ================= */}
      <OfficialOverview />

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#fb8500] opacity-[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d90429] opacity-[0.03] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
            <div className="space-y-4">
              <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs">About Us | हमारे बारे में</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#002344]">Who We Are | हम कौन हैं</h2>
            </div>
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-medium text-center max-w-3xl mx-auto">
              We are a registered non-profit bridging the gap between privilege and poverty through education, healthcare, and sustainable livelihoods to build a stronger, inclusive Bharat.
            </p>
            <div className="pt-4 flex justify-center">
              <Link to="/About" className="btn-secondary inline-flex border-[#002344] text-[#002344] hover:bg-[#002344] hover:text-white px-10">
                Know More About Us | हमारे बारे में और जानें <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER'S MESSAGE ================= */}
      <section className="py-12 bg-gradient-to-br from-zinc-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,35,68,0.1)] p-8 lg:p-10 border border-zinc-100 overflow-hidden">
              {/* Decorative Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#002344] via-[#003366] to-[#fb8500] rounded-l-[2rem]"></div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-6 opacity-5">
                <FaQuoteLeft className="text-7xl text-[#002344]" />
              </div>

              <div className="relative z-10 pl-6 flex flex-col lg:flex-row lg:items-center lg:gap-10">
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#002344] mb-3">
                    Founder's Message
                  </h3>

                  <p className="text-base lg:text-lg text-zinc-600 leading-relaxed font-medium">
                    At Swastik Srijan Foundation, we believe unity, education, and compassion are the pillars of a better society. Together, we create opportunities, inspire hope, and bring lasting change to lives across India.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:border-l lg:border-t-0 border-t border-zinc-100 lg:pl-10 mt-4 lg:mt-0 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#002344] to-[#003366] flex items-center justify-center">
                    <FaHeart className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-bold text-[#002344] text-sm lg:text-base">Swastik Srijan Foundation</p>
                    <p className="text-xs lg:text-sm text-zinc-500">Building a Stronger Bharat</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE PHILOSOPHY (VISION, MISSION, VALUES) ================= */}
      <CorePhilosophy />

      {/* ================= IMPACT JOURNEY / TIMELINE ================= */}
      <ImpactTimeline />

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
                src="/images/real/student-leadership-recitation.jpg"
                alt="Student success story - Swastik Srijan Foundation"
                className="w-full h-auto"
              />
              <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-[#002344]/90 via-[#002344]/40 to-transparent text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-[#fb8500]">Long-Term Impact</p>
                <h3 className="text-2xl font-serif font-bold italic">"I found a path I never knew existed."</h3>
                <p className="text-zinc-300 mt-2 text-sm">Raju, One of our first success stories (Batch 2014-15)</p>
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
                Raju was identified during our grassroots survey in 2014-15 while working at a village tea stall. Like hundreds of other children we encounter, his family couldn't afford a pencil, let alone a school fee.
              </p>
              <p>
                With the support of donors, we enrolled him in our <span className="text-[#002344] font-bold">"Shiksha Suraksha"</span> program. Today, Raju represents thousands of children who have replaced tools with textbooks and are now dreaming of becoming engineers and leaders.
              </p>
            </div>

            <div className="pt-4">
              <Link to="/DonateAndSupport" className="btn-primary shadow-[#002344]/20">
                Sponsor a Needy Child
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


      {/* ================= CSR PARTNERSHIP TEASER ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#fb8500] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#002344] opacity-[0.03] rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-zinc-50 to-white rounded-[3rem] p-10 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col lg:flex-row gap-16 items-center">

            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#002344]/5 border border-[#002344]/10">
                <FaHandshake className="text-[#fb8500]" />
                <span className="text-[#002344] font-bold text-xs uppercase tracking-widest">CSR Partnership</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002344] leading-tight">
                Corporate Social <br /> <span className="text-[#fb8500]">Responsibility.</span>
              </h2>

              <div className="space-y-4 text-lg text-zinc-600 font-medium">
                <p>
                  Partner with us to create sustainable impact. Your CSR initiatives can transform lives through education, health, and skill development.
                </p>
                <p className="text-zinc-500 font-medium">
                  Join us in building an empowered and self-reliant India through meaningful Corporate Social Responsibility initiatives.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/CSRPartnership" className="btn-primary flex items-center gap-3">
                  Explore Opportunities <FaArrowRight />
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <OptimizedImage
                  src="/images/csr-hero.png"
                  alt="CSR Partners collaborating for social impact"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[2rem] border-2 border-[#fb8500]/20 -z-10 bg-[#f8f9fa]"></div>
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
          <div className="flex justify-center py-8">
            <img
              src="/images/real/boys-group-photo.jpg"
              alt="Community Children"
              className="w-full max-w-2xl h-64 object-cover rounded-[2rem] shadow-2xl opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>
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

    </div >
  );
}

