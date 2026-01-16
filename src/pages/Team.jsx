import { motion } from "framer-motion";

const governingBody = [
  { role: "Founder & National President", name: "Ramesh Pandey", img: "./Teams_Images/ramesh_pandey.jpg" },
  { role: "Vice President", name: "Preeti Shukla", img: "./Teams_Images/image_19.jpg" },
  { role: "General Secretary", name: "Amit Pandey", img: "./Teams_Images/image_15.jpg" },
  { role: "Treasurer", name: "Divya Sharma", img: "./Teams_Images/divya_sharma.jpg" },
  { role: "Joint Secretary", name: "Kiran Pandey", img: "/images/team/kiran_pandey_temp.jpg" },
  { role: "Board member", name: "Sandeep Tripathi", img: "./Teams_Images/sandeep_tripathi.jpg" },
  { role: "Board member", name: "Prameesh Singh", img: "./Teams_Images/prameesh_singh.jpg" },
  { role: "Board member", name: "Rishi Pandey", img: "./Teams_Images/rishi_pandey.jpg" },
  { role: "Board member", name: "Ritesh Tiwari", img: "./Teams_Images/ritesh_tiwari.jpg" },
];

const managementTeam = [
  { role: "Founder & National President", name: "Ramesh Pandey" },
  { role: "Program Head", name: "Preeti Shukla" },
  { role: "General Secretary & Operations", name: "Amit Pandey" },
  { role: "Chief Finance Officer", name: "Divya Sharma" },
  { role: "Compliance Officer", name: "Kiran Pandey" },
  { role: "Board member", name: "Sandeep Tripathi" },
  { role: "Board member", name: "Prameesh Singh" },
  { role: "Board member", name: "Rishi Pandey" },
  { role: "Board member", name: "Ritesh Tiwari" },
];

const regionalLeadership = [
  { role: "President - Faridabad Wing", name: "Naresh Kumar", img: "./Teams_Images/naresh_kumar.jpg" },
  { role: "President - Pune Wing", name: "Dhiraj Kumar", img: "./Teams_Images/image_4.png" },
];

const advisors = [
  { name: "Kapil Tiwari", role: "Legal Advisor - Compliance", img: "./Teams_Images/kapil_tiwari.jpg" },
  { name: "Adv. Harish Kumar", role: "Legal Advisor (Pan India)", img: "./Teams_Images/harish_kumar.jpg" },
  { name: "Mr. Raji P. Alex", role: "Advisory Board", img: "./Teams_Images/raji_p_alex.jpg" },
  { name: "Mr. Ghanshyam Sharma", role: "Honorable Member & Advisory Board (G.B. Nagar)", img: "./Teams_Images/ghanshyam_sharma.jpg" },
  { name: "Mr. Rajeev Pandey", role: "Volunteer (M.P.)", img: "./Teams_Images/rajeev_pandey.jpg" },
  { name: "Ms. A. Gincy George", role: "Head - Counselling", img: "./Teams_Images/image_1.jpg" },
  { name: "Aayushi Tyagi", role: "Volunteer (GZB)", img: "./Teams_Images/aayushi_tyagi.jpg" },
  { name: "Krishna Kumar", role: "Volunteer", img: "./Teams_Images/krishna_kumar.jpg" },
  { name: "Priya Shukla", role: "Core Member & Volunteer", img: "./Teams_Images/priya_shukla.jpg" },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-[#001529] text-white pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#fb8500] font-bold uppercase tracking-[0.2em] text-xs mb-4 inline-block">
              Dedicated Leadership
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Meet Our <span className="text-[#fb8500]">Team</span> <br />
              <span className="text-2xl md:text-4xl font-sans font-normal opacity-80 underline decoration-[#fb8500]/30">हमारी टीम से मिलें</span>
            </h1>
            <p className="text-zinc-400 mt-6 text-xl font-medium max-w-2xl mx-auto">
              A collective of visionary leaders, expert advisors, and dedicated volunteers driving sustainable change.
            </p>
            <p className="text-zinc-500 mt-2 text-md italic font-hindi">सतत परिवर्तन लाने वाले दूरदर्शी नेताओं, विशेषज्ञ सलाहकारों और समर्पित स्वयंसेवकों का एक समूह।</p>
          </motion.div>
        </div>
      </section>

      {/* ================= GOVERNING BODY ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002344]">
              Governance & Compliance – Official Governing Body | आधिकारिक शासी निकाय
            </h2>
            <div className="w-24 h-1 bg-[#fb8500] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {governingBody.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 border-4 border-zinc-50 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={member.img || "/images/team/placeholder.jpg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002344]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-serif font-bold text-[#002344] group-hover:text-[#fb8500] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MANAGEMENT & OPERATIONS ================= */}
      <section className="py-24 px-6 bg-[#f8f9fa] border-y border-zinc-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002344]">
              Management & Operations | प्रबंधन और संचालन
            </h2>
            <div className="w-24 h-1 bg-[#d90429] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementTeam.map((member, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-zinc-100 flex items-center justify-between hover:border-[#fb8500]/30 transition-all shadow-sm group"
              >
                <div className="space-y-1">
                  <p className="text-[#fb8500] text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
                  <h4 className="text-xl font-serif font-bold text-[#002344] group-hover:text-[#d90429] transition-colors">
                    {member.name}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-300">
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <p className="text-zinc-500 font-medium italic">
              "The CEO leads execution and organizational management as guided by the Governing Body."
            </p>
          </div>
        </div>
      </section>

      {/* ================= REGIONAL LEADERSHIP ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002344]">
              Regional Leadership | क्षेत्रीय नेतृत्व
            </h2>
            <div className="w-24 h-1 bg-[#fb8500] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {regionalLeadership.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4 group"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#002344] group-hover:text-[#fb8500] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADVISORS ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002344]">
              Our Key Advisors & Volunteers | हमारे प्रमुख सलाहकार और स्वयंसेवक
            </h2>
            <div className="w-24 h-1 bg-[#2d6a4f] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {advisors.map((member, i) => (
              <div key={i} className="text-center space-y-4 group">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#002344]">{member.name}</h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
