import { FaArrowRightLong } from "react-icons/fa6";
import { FaCrown, FaUserShield, FaUserTie, FaUserCheck, FaHandHoldingHeart, FaAward } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import CertificateGenerator from "../components/CertificateGenerator";

const Members = () => {
  const membershipTiers = [
    {
      title: "Guardian Member",
      hindiTitle: "संरक्षक सदस्य",
      price: "₹10,000+",
      freq: "or more (One-time/Yearly)",
      desc: "The person who donates Rs. 10,000 or more in lump sum or twelve instalments in a year to the institution will be the patron member of the committee.",
      icon: <FaCrown />,
      color: "bg-yellow-100 text-yellow-600",
      border: "border-yellow-200",
      highlight: true
    },
    {
      title: "Lifetime Member",
      hindiTitle: "आजीवन सदस्य",
      price: "₹8,000+",
      freq: "One-time Donation",
      desc: "A person who becomes a member of the organization by giving Rs 8000 or more as donation. Any lifetime member can become a patron member by paying Rs. 2000 or more.",
      icon: <FaUserShield />,
      color: "bg-purple-100 text-purple-600",
      border: "border-purple-200",
      highlight: false
    },
    {
      title: "Ordinary Member",
      hindiTitle: "साधारण सदस्य",
      price: "₹100",
      freq: "per month (₹1200/Year)",
      desc: "A person who gives Rs 100 per month (Rs 1200 annually). Membership is valid for the donation period. Termination applies if donation is unpaid for 6 months.",
      icon: <FaUserTie />,
      color: "bg-blue-100 text-blue-600",
      border: "border-blue-200",
      highlight: false
    },
    {
      title: "Honorable Member",
      hindiTitle: "माननीय सदस्य",
      price: "Honorary",
      freq: "By Selection",
      desc: "Selected by the management committee. May attend General Assembly meetings but do not have voting rights.",
      icon: <FaAward />,
      color: "bg-orange-100 text-orange-600",
      border: "border-orange-200",
      highlight: false
    }
  ];

  return (
    <section className="w-full bg-zinc-50 font-inria">

      {/* ================= HERO ================= */}
      <div className="bg-[#002344] text-white pt-36 pb-20 px-4 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="inline-block bg-orange-500/20 text-orange-300 border border-orange-500/30 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
              BECOME A MEMBER • सदस्य बनें
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Join the Family of <br />
              <span className="text-orange-400">Changemakers</span>
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed">
              "Society For the Wellness Of Human Being". Our mission transcends geographical boundaries, encompassing the entire nation. As a member, you embark on a transformative journey.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#tiers" className="px-8 py-3 bg-white text-[#003366] font-bold rounded-full hover:bg-zinc-100 transition shadow-lg">
                View Membership Plans
              </a>
              <a href="#benefits" className="px-8 py-3 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition">
                Benefits
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/real/ssf_event_members.jpg"
              alt="SSF Members"
              className="w-full rounded-3xl shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-24 py-24">

        {/* ================= WHY BECOME A MEMBER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-blue-600 blur-[100px] opacity-10 rounded-full"></div>
            <img
              src="/images/real/women_community_meeting.jpg"
              alt="Community Impact"
              className="w-full rounded-2xl shadow-xl transform md:scale-110 relative z-10"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              Why did you become a member?
            </h2>
            <h3 className="text-xl text-[#003366] font-hindi">सदस्य क्यों बनें?</h3>

            <div className="space-y-4 text-zinc-600 leading-relaxed text-justify">
              <p>
                Welcome to the Society for the Wellness of Human Being. Our mission is to enhance the lives of every citizen.
              </p>
              <p>
                As a member, you contribute to a society where wellness is not just a goal but a shared reality. Join us in shaping the scope of our organization to create a healthier, happier, and more harmonious India.
              </p>
              <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#003366] text-[#003366] font-medium italic">
                "Together, we aspire to make a positive impact on the well-being of every human being."
              </p>
            </div>
          </div>
        </div>

        {/* ================= MEMBERSHIP TIERS ================= */}
        <div id="tiers" className="scroll-mt-32">
          <div className="text-center mb-16">
            <h2 className="text-[#003366] font-bold tracking-widest uppercase text-sm mb-4">Choose Your Impact</h2>
            <h3 className="text-4xl font-black text-zinc-900">Membership Tiers</h3>
            <p className="text-zinc-500 mt-4 font-hindi">अपनी सदस्यता श्रेणी चुनें</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border ${tier.border} relative flex flex-col`}>
                {tier.highlight && (
                  <div className="absolute -top-4 w-full left-0 flex justify-center">
                    <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">Most Popular</span>
                  </div>
                )}

                <div className={`w-14 h-14 ${tier.color} rounded-xl flex items-center justify-center text-2xl mb-6`}>
                  {tier.icon}
                </div>

                <h4 className="text-xl font-bold text-zinc-900">{tier.title}</h4>
                <div className="text-sm text-zinc-400 mb-4 italic">{tier.hindiTitle}</div>

                <div className="mb-4">
                  <span className="text-3xl font-black text-[#003366]">{tier.price}</span>
                  <div className="text-xs text-zinc-500 font-medium">{tier.freq}</div>
                </div>

                <p className="text-sm text-zinc-600 mb-6 flex-grow border-t pt-4 border-dashed border-zinc-200">
                  {tier.desc}
                </p>

                <a
                  href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 text-center rounded-lg font-bold transition-colors ${tier.highlight ? 'bg-[#003366] text-white hover:bg-[#002244]' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'}`}
                >
                  Join Now
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ================= QUALIFICATIONS & RULES ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-zinc-900 flex items-center gap-3">
              <FaUserCheck className="text-[#003366]" /> Qualification Of Members
            </h3>
            <ul className="space-y-4">
              {[
                "Age should not be less than 18 years.",
                "Must be an Indian citizen.",
                "Pledge to follow the rules of the committee.",
                "Be conversant and do not drink alcohol (sober lifestyle preferred).",
                "Must apply in writing via the application form."
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-600">
                  <div className="mt-1 min-w-[20px]">
                    <IoCheckmarkCircleSharp className="text-green-500 text-lg" />
                  </div>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-zinc-900 flex items-center gap-3">
              <FaHandHoldingHeart className="text-[#003366]" /> Membership Termination
            </h3>
            <p className="text-zinc-600">
              Membership of the organization will end in the event of death, resignation, or if a member works against the interest of the society. Non-payment of dues for 6 months without reason also leads to termination.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mt-6">
              <h4 className="font-bold text-[#003366] mb-4">Ready to Apply?</h4>
              <div className="space-y-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3Wb-839SLDzv3A9QkbfpnJt_ORBQZbVByModSfDjQs-JuBQ/viewform"
                  target="_blank"
                  className="flex justify-between items-center bg-white p-3 rounded-lg hover:shadow-md transition text-sm font-bold text-zinc-700 hover:text-[#003366]"
                >
                  <span>Member Application Form (Google Form)</span>
                  <FaArrowRightLong />
                </a>
                <a
                  href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                  target="_blank"
                  className="flex justify-between items-center bg-[#003366] text-white p-3 rounded-lg hover:shadow-md hover:bg-blue-900 transition text-sm font-bold"
                >
                  <span>Pay Membership Fee Online</span>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* ================= CERTIFICATE ================= */}
        <div>
          <CertificateGenerator role="Member" />
        </div>

      </div>
    </section>
  );
};

export default Members;
