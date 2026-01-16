import { motion } from "framer-motion";

export default function JourneyPage() {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="pt-36 pb-20 bg-zinc-50 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Our Journey & Impact <br />
          <span className="text-3xl md:text-5xl font-sans font-normal opacity-80 underline decoration-[#fb8500]/30">हमारी यात्रा और प्रभाव</span>
        </motion.h1>

        <p className="max-w-2xl mx-auto text-zinc-600 text-lg">
          A journey of commitment, compassion, and measurable change across communities in India.
        </p>
        <p className="text-zinc-400 mt-2 text-md italic font-hindi">
          भारत के विभिन्न समुदायों में प्रतिबद्धता, करुणा और मापने योग्य परिवर्तन की एक यात्रा।
        </p>
      </section>

      {/* ================= HUMANITY FIRST MURAL ================= */}
      <section className="pb-10 px-4">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-zinc-100">
          <img
            src="/images/real/leadership.jpg"
            alt="Swastik Srijan Foundation Leadership and Journey"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ================= IMPACT NUMBERS ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            ["75,000+", "Lives Impacted", "प्रभावित जीवन"],
            ["20,000+", "Beneficiaries", "लाभार्थी"],
            ["100+", "Programs Conducted", "आयोजित कार्यक्रम"],
            ["12+ Years", "Of Service", "सेवा के वर्ष"],
          ].map(([value, label, labelHi], i) => (
            <div key={i} className="border rounded-xl p-8 bg-zinc-50/50 hover:bg-white hover:shadow-lg transition-all">
              <p className="text-4xl font-black text-[#003366] mb-2">{value}</p>
              <p className="text-zinc-600 font-bold text-sm uppercase tracking-wider">{label}</p>
              <p className="text-zinc-400 font-hindi text-xs mt-1">{labelHi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-32 bg-white px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs">Our Roadmap | हमारा रोडमैप</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#002344]">
              Our Growth Over <br /> <span className="text-[#fb8500]">the Years</span>
              <div className="text-2xl md:text-3xl font-sans font-normal text-[#002344]/60 mt-4">वर्षों की हमारी <span className="text-[#fb8500]">प्रगति</span></div>
            </h2>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-20">
              {[
                {
                  year: "2014",
                  title: "Nurturing Community Well-being",
                  desc: "Promoting mental health with community support, strengthening community support systems.",
                  color: "#fb8500"
                },
                {
                  year: "2015",
                  title: "Nurturing Community Well-being",
                  desc: "Expanded early initiatives, strengthened nutrition and preventive support services for vulnerable populations.",
                  color: "#d90429"
                },
                {
                  year: "2016",
                  title: "A Year of Rural Empowerment",
                  desc: "Introduced technology-driven solutions, hosting workshops, and community-led rural development initiatives.",
                  color: "#fb8500"
                },
                {
                  year: "2017",
                  title: "Empowering Through Education",
                  desc: "Started education-focused interventions, fostering learning access to quality resources for underprivileged children.",
                  color: "#d90429"
                },
                {
                  year: "2018",
                  title: "Promoting Health and Hygiene",
                  desc: "Conducted large-scale health camps, hygiene awareness drives, and sanitation programs.",
                  color: "#fb8500"
                },
                {
                  year: "2019",
                  title: "Women's Empowerment in Focus",
                  desc: "Rolled out women-centered initiatives, including skill training, self-help groups and livelihood programs.",
                  color: "#d90429"
                },
                {
                  year: "2020",
                  title: "Navigating Challenges with Resilience",
                  desc: "Provided support amid global crisis, distributed essentials, offering support during pandemic-driven hardships.",
                  color: "#fb8500"
                },
                {
                  year: "2021",
                  title: "Sustaining Momentum",
                  desc: "Strengthened digital learning, digital platforms and changing conditions.",
                  color: "#d90429"
                },
                {
                  year: "2022",
                  title: "Strengthening Communities",
                  desc: "Reinforced efforts with disaster relief, implemented long-term resilience-building initiatives recovering from challenges.",
                  color: "#fb8500"
                },
                {
                  year: "2023",
                  title: "SEP Learning Hub",
                  desc: "Established the SEP Learning Hub, offering structured learning, mentorship, and career guidance.",
                  color: "#d90429"
                },
                {
                  year: "2024",
                  title: "Integrating Learning & Environment",
                  desc: "Launched holistic programs combining environmental education, sustainability practices, and nutrition awareness.",
                  color: "#fb8500"
                },
                {
                  year: "2025",
                  title: "Expanding Grassroots Impact Through Technology",
                  desc: "Scaling community projects across regions with innovative tech solutions, empowering local leaders.",
                  color: "#d90429"
                }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center justify-between md:justify-normal even:md:flex-row-reverse group`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-xl md:-translate-x-1/2 z-20 transition-transform group-hover:scale-125" style={{ backgroundColor: item.color }}></div>

                  {/* Content */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 hover:shadow-2xl transition-all duration-300"
                    >
                      <span className="text-4xl font-black opacity-10 block mb-2" style={{ color: item.color }}>{item.year}</span>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-[#002344] mb-3">{item.title}</h3>
                      <p className="text-zinc-600 leading-relaxed font-medium">{item.desc}</p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-6">
            Why Our Work Matters
          </h2>
          <p className="text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            Every initiative we undertake is designed to create long-term,
            sustainable change. We believe real impact is measured not just
            in numbers, but in transformed lives and stronger communities.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[#003366] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>
        <div className="container mx-auto px-6 text-center relative z-10 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Be a Part of Our Journey.
          </h2>
          <p className="mb-2 text-zinc-300 text-xl max-w-2xl mx-auto">
            Your support helps us continue creating meaningful impact across India.
          </p>
          <a
            href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="btn-cta w-full sm:w-auto px-12 py-5 text-xl bg-white text-[#003366] hover:bg-zinc-200 hover:text-[#003366]">
              Support Our Mission
            </button>
          </a>
        </div>
      </section>

    </div>
  );
}
