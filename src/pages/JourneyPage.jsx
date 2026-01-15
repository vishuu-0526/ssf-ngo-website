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
          Our Journey & Impact
        </motion.h1>

        <p className="max-w-2xl mx-auto text-zinc-600 text-lg">
          A journey of commitment, compassion, and measurable change
          across communities in India.
        </p>
      </section>

      {/* ================= HUMANITY FIRST MURAL ================= */}
      <section className="pb-10 px-4">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-zinc-100">
          <img
            src="/images/real/mural_humanity_first.jpg"
            alt="Swastik Srijan Foundation mural with the message Humanity First, Always"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ================= IMPACT NUMBERS ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            ["50,000+", "Lives Impacted"],
            ["15,000+", "Beneficiaries"],
            ["100+", "Programs Conducted"],
            ["10+ Years", "Of Service"],
          ].map(([value, label], i) => (
            <div key={i} className="border rounded-xl p-8">
              <p className="text-4xl font-black text-[#003366] mb-2">{value}</p>
              <p className="text-zinc-600 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-32 bg-zinc-50 px-6 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fb8500] opacity-5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#003366] opacity-5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs">Our Roadmap</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#002344]">
              Our Growth Over <br /> <span className="text-[#fb8500]">the Years</span>
            </h2>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#fb8500] via-[#003366] to-[#d90429] md:-translate-x-1/2 rounded-full"></div>

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
                  color: "#003366"
                },
                {
                  year: "2017",
                  title: "Empowering Through Education",
                  desc: "Started education-focused interventions, fostering learning access to quality resources for underprivileged children.",
                  color: "#fb8500"
                },
                {
                  year: "2018",
                  title: "Promoting Health and Hygiene",
                  desc: "Conducted large-scale health camps, hygiene awareness drives, and sanitation programs.",
                  color: "#d90429"
                },
                {
                  year: "2019",
                  title: "Women's Empowerment in Focus",
                  desc: "Rolled out women-centered initiatives, including skill training, self-help groups and livelihood programs.",
                  color: "#003366"
                },
                {
                  year: "2020",
                  title: "Navigating Challenges with Resilience",
                  desc: "Provided support amid global crisis, distributed essentials, offering support during pandemic-driven hardships.",
                  color: "#fb8500"
                },
                {
                  year: "2021",
                  title: "Sustaining Momentum and Adapting to New Realities",
                  desc: "Strengthened digital learning, digital platforms and changing conditions.",
                  color: "#d90429"
                },
                {
                  year: "2022",
                  title: "Strengthening Communities in the Face of Adversity",
                  desc: "Reinforced efforts with disaster relief, implemented long-term resilience-building initiatives recovering from challenges.",
                  color: "#003366"
                },
                {
                  year: "2023",
                  title: "SEP Learning Hub - Transforming Lives Through Education",
                  desc: "Established the SEP Learning Hub, offering structured learning, mentorship, and career guidance.",
                  color: "#fb8500"
                },
                {
                  year: "2024",
                  title: "Integrating Learning, Environment & Nutrition for Sustainable Living",
                  desc: "Launched holistic programs combining environmental education, sustainability practices, and nutrition awareness.",
                  color: "#d90429"
                },
                {
                  year: "2025",
                  title: "Expanding Grassroots Impact Through Technology",
                  desc: "Scaling community projects across regions with innovative tech solutions, empowering local leaders.",
                  color: "#003366"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-center gap-12 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-white border-4 md:-translate-x-1/2 rounded-full z-10 shadow-lg" style={{ borderColor: item.color }}></div>

                  {/* Content Card */}
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-16">
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-zinc-100 hover:border-[#fb8500] transition-colors group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-serif font-black" style={{ color: item.color }}>{item.year}</span>
                        <div className="w-12 h-1 bg-zinc-100 group-hover:bg-[#fb8500] transition-colors"></div>
                      </div>
                      <h4 className="text-xl font-serif font-bold text-[#002344] mb-3 leading-tight">{item.title}</h4>
                      <p className="text-zinc-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Empty space for md */}
                  <div className="md:w-1/2"></div>
                </motion.div>
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
