import { FaChalkboardTeacher, FaLaptopCode, FaHandHoldingHeart, FaBullhorn, FaUserCheck, FaHandsHelping } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import CertificateGenerator from "../components/CertificateGenerator";

export default function Volunteer() {
  const roles = [
    {
      title: "Teaching Volunteer | शिक्षण स्वयंसेवक",
      icon: <FaChalkboardTeacher />,
      desc: "Teach subjects like Math, Science, or English at our centers. 2-3 hours/week commitment.",
      descHi: "हमारे केंद्रों पर गणित, विज्ञान या अंग्रेजी जैसे विषय पढ़ाएं। सप्ताह में 2-3 घंटे का समय।",
      color: "text-[#003366]",
      bg: "bg-[#003366]/10"
    },
    {
      title: "Skill Mentor | कौशल संरक्षक",
      icon: <FaLaptopCode />,
      desc: "Train youth in computer skills, coding, or vocational crafts. Weekend batches available.",
      descHi: "युवाओं को कंप्यूटर कौशल, कोडिंग या व्यावसायिक शिल्प में प्रशिक्षित करें। सप्ताहांत बैच उपलब्ध।",
      color: "text-[#003366]",
      bg: "bg-[#003366]/10"
    },
    {
      title: "Field Volunteer | फील्ड स्वयंसेवक",
      icon: <FaHandHoldingHeart />,
      desc: "Assist in food drives, health camps, and community surveys. Ground-level impact.",
      descHi: "भोजन वितरण, स्वास्थ्य शिविर और सामुदायिक सर्वेक्षणों में सहायता करें। जमीनी स्तर पर प्रभाव।",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      title: "Social Media Advocate | सोशल मीडिया एडवोकेट",
      icon: <FaBullhorn />,
      desc: "Amplify our voice online. Create content, write blogs, and manage campaigns from home.",
      descHi: "ऑनलाइन हमारी आवाज़ बुलंद करें। घर से कंटेंट बनाएं, ब्लॉग लिखें और अभियान प्रबंधित करें।",
      color: "text-purple-600",
      bg: "bg-purple-100"
    }
  ];

  return (
    <div className="w-full font-inria bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#003366] text-white pt-40 pb-20 relative overflow-hidden text-center px-4">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm font-semibold tracking-wider mb-2 border border-white/20">
            JOIN THE MOVEMENT • बदलाव का हिस्सा बनें
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Volunteer <span className="text-orange-400">With Us</span>
          </h1>
          <p className="text-zinc-200 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            "Your time and skills can light up a life. Join us to create a compassionate, inclusive, and sustainable world."
          </p>
          <p className="text-orange-300 font-hindi text-lg">
            समाज में सकारात्मक परिवर्तन लाने के लिए हमारे साथ जुड़ें।
          </p>
        </div>
      </section>

      {/* ================= WHY VOLUNTEER (Content from Google Site) ================= */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
            <img
              src="/images/real/ngo_event_1.jpg"
              alt="Volunteers working together"
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#003366]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border-l-4 border-orange-500 max-w-xs hidden md:block z-20">
              <p className="text-zinc-600 font-medium italic">
                "Volunteering is a conscious decision to be part of something larger than oneself."
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-orange-600 font-bold uppercase tracking-wider text-sm">Why Join Us?</h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#003366]">A Choice for Impact</h2>
              <h3 className="text-2xl text-zinc-400 font-hindi">सेवा और समर्पण का मार्ग</h3>
            </div>

            <div className="prose prose-lg text-zinc-600 leading-relaxed text-justify">
              <p>
                Choosing to become a volunteer with our organization stems from a shared commitment to creating meaningful change. As a volunteer, you embrace the opportunity to be a driving force behind positive initiatives that uplift communities, empower individuals, and contribute to a brighter future.
              </p>
              <div className="flex justify-center my-8">
                <img
                  src="/src/assets/community-unity.png"
                  alt="Community Unity Illustration"
                  className="w-48 h-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <p>
                Your decision reflects a dedication to making a tangible impact, one that transcends personal boundaries and resonates with the collective goal of fostering positive transformations. Volunteering offers a unique avenue to connect with like-minded individuals, share skills, and contribute to the well-being of those in need.
              </p>
              <p className="font-medium text-[#003366]">
                By becoming our volunteer, you join a dynamic community where each effort, no matter how small, plays a pivotal role in creating lasting change. Together, we forge a path towards a more compassionate, inclusive, and sustainable world.
              </p>
            </div>

            <a href="#apply" className="inline-flex items-center gap-2 px-8 py-3 bg-[#003366] text-white font-bold rounded-full hover:bg-[#002344] transition-all shadow-lg hover:shadow-xl">
              <FaHandsHelping /> Become a Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* ================= ROLES ================= */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#003366] font-bold tracking-widest uppercase text-sm mb-4">Opportunities | अवसर</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black">Available Roles | उपलब्ध भूमिकाएँ</h3>
            <p className="mt-4 text-zinc-500 max-w-2xl mx-auto">
              Find a role that fits your skills and schedule. Whether you have 2 hours a week or 2 hours a day, we have a place for you.
            </p>
            <p className="text-sm text-zinc-400 mt-2 italic font-hindi">अपनी कुशलता और समय के अनुसार भूमिका चुनें।</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-zinc-100 group">
                <div className={`w-16 h-16 ${role.bg} ${role.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {role.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-black group-hover:text-[#003366] transition-colors">{role.title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{role.desc}</p>
                <p className="text-xs text-zinc-400 mt-2 font-hindi">{role.descHi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO CAN JOIN & VALUES ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-4xl font-black text-black mb-6">Who Can Join?</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              You don't need to be an expert to make a difference. We welcome anyone with a heart to serve.
              <br />
              <span className="font-hindi text-zinc-500">सेवा करने के लिए विशेषज्ञ होने की आवश्यकता नहीं है, बस सेवा भाव होना चाहिए।</span>
            </p>

            <ul className="space-y-4">
              {[
                "College Students (Internships available)",
                "Working Professionals (Weekend volunteering)",
                "Retired Seniors (Mentorship roles)",
                "Homemakers (Teaching & Coordination)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 bg-zinc-50 p-4 rounded-xl border border-zinc-100 hover:border-orange-200 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <IoCheckmarkCircleSharp />
                  </div>
                  <span className="font-bold text-zinc-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-full min-h-[500px] group shadow-2xl order-1 md:order-2">
            <img
              src="/images/volunteer_work.png"
              alt="Volunteers engaging children in park activities"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/60 to-transparent opacity-90 p-10 flex flex-col justify-end text-white">
              <FaUserCheck className="text-5xl mb-6 text-orange-400" />
              <h3 className="text-3xl font-black mb-4">Values We Look For</h3>
              <div className="space-y-4 text-zinc-200">
                <p>• <span className="text-white font-bold">Commitment (समर्पण):</span> Consistency matters more than hours.</p>
                <p>• <span className="text-white font-bold">Empathy (सहानुभूति):</span> Treating every beneficiary with dignity.</p>
                <p>• <span className="text-white font-bold">Teamwork (सहयोग):</span> Working together for a common goal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATION & CTA ================= */}
      <section id="apply" className="py-24 bg-[#003366] text-white px-4 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-8">Ready to Start Your Journey? | क्या आप तैयार हैं?</h2>
          <div className="bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-white">Simple Application Process | सरल आवेदन प्रक्रिया</h3>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              {[
                { step: "1", title: "Fill Form", desc: "Online Application" },
                { step: "2", title: "Intro Call", desc: "Brief Discussion" },
                { step: "3", title: "Orientation", desc: "Welcome to Family" }
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-500/30">
                    {s.step}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">{s.title}</div>
                    <div className="text-sm text-zinc-400">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScYeeXqB6nOsRqFD1OVXHa9-yALZ953k5i6IjuhAdaucaxDSg/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-12 py-5 text-xl font-bold bg-white text-[#003366] rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-xl">
                APPLY TO VOLUNTEER NOW
              </button>
            </a>
            <p className="mt-6 text-zinc-400 text-sm">Takes only 2 minutes • 2 मिनट का समय लगेगा</p>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATE ================= */}
      <section className="py-20 bg-zinc-50 px-4">
        <CertificateGenerator role="Volunteer" />
      </section>

      {/* Official Foundation Banner */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white p-2 rounded-3xl shadow-xl overflow-hidden border border-zinc-200">
          <img
            src="/images/real/foundation_banner.jpg"
            alt="Swastik Srijan Foundation Official"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>

    </div>
  );
}
