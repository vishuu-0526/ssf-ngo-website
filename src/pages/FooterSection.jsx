import { Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="w-full bg-zinc-900 text-white mt-0 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP: Newsletter & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-zinc-800 pb-12">

          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              {/* Using text logo if image not optimized for dark mode, or filter it */}
              <div className="text-2xl font-bold tracking-tighter text-white">
                SWASTIK <span className="text-[#FDCF09]">SRIJAN</span>
              </div>
            </Link>
            <p className="text-zinc-400 leading-relaxed">
              Ensuring that every child has a happy, healthy, and creative childhood. Join the movement to change lives today.
            </p>

            {/* Socials */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaYoutube, href: "#" }
              ].map((Item, i) => (
                <a key={i} href={Item.href} className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-[#FDCF09] hover:text-black transition-all">
                  <Item.icon size={16} />
=======
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#001529] text-white mt-0 pt-32 pb-12 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP: Newsletter & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="text-3xl font-serif font-bold tracking-tight text-white group-hover:text-[#fb8500] transition-colors">
                SWASTIK <span className="text-[#fb8500]">SRIJAN</span>
              </div>
            </Link>
            <p className="text-zinc-400 leading-relaxed font-medium text-lg">
              Empowering communities and ensuring every child has access to quality education, health, and a creative childhood.
            </p>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
                { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" }
              ].map((Item, i) => (
                <a
                  key={i}
                  href={Item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={Item.label}
                  className="w-12 h-12 flex items-center justify-center rounded-[1rem] bg-white/5 text-white hover:bg-[#fb8500] hover:text-white hover:-translate-y-1 transition-all border border-white/10"
                >
                  <Item.icon size={18} />
>>>>>>> e20eac0 (Updated Website UI and content)
                </a>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-[#FDCF09] uppercase tracking-wider mb-6 text-sm">About Us</h4>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li><Link to="/#about" className="hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link to="/Journey" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/Members" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/Media" className="hover:text-white transition-colors">Media Centre</Link></li>
=======
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-[#fb8500] uppercase tracking-[0.15em] mb-8 text-xs">About SSF</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><Link to="/#about" className="hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link to="/Journey" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/institutional-dna" className="hover:text-white transition-colors">Institutional DNA</Link></li>
                <li><Link to="/Members" className="hover:text-white transition-colors">Strategic Team</Link></li>
>>>>>>> e20eac0 (Updated Website UI and content)
              </ul>
            </div>

            <div>
<<<<<<< HEAD
              <h4 className="font-bold text-[#FDCF09] uppercase tracking-wider mb-6 text-sm">Get Involved</h4>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li><Link to="/DonateAndSupport" className="hover:text-white transition-colors">Donate</Link></li>
                <li><Link to="/Volunteer" className="hover:text-white transition-colors">Volunteer</Link></li>
                <li><Link to="/Campaign" className="hover:text-white transition-colors">Campaigns</Link></li>
                <li><Link to="/Contact" className="hover:text-white transition-colors">Contact Us</Link></li>
=======
              <h4 className="font-serif font-bold text-[#fb8500] uppercase tracking-[0.15em] mb-8 text-xs">Get Involved</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><Link to="/DonateAndSupport" className="hover:text-white transition-colors">Ways to Give</Link></li>
                <li><Link to="/Volunteer" className="hover:text-white transition-colors">Volunteer</Link></li>
                <li><Link to="/Campaign" className="hover:text-white transition-colors">Core Campaigns</Link></li>
                <li><Link to="/UpcomingProjects" className="hover:text-white transition-colors">Project Roadmap</Link></li>
>>>>>>> e20eac0 (Updated Website UI and content)
              </ul>
            </div>

            <div>
<<<<<<< HEAD
              <h4 className="font-bold text-[#FDCF09] uppercase tracking-wider mb-6 text-sm">Legal</h4>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li><Link to="/TermsAndConditions" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link to="/PrivacyPolicy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/CookiePolicy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
=======
              <h4 className="font-serif font-bold text-[#fb8500] uppercase tracking-[0.15em] mb-8 text-xs">Contact Help</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li className="break-all text-white">swastiksrijanfoundation@gmail.com</li>
                <li className="text-white">+91 97183 46691</li>
                <li>Pune, MH | Rewa, MP</li>
                <li><Link to="/Contact" className="text-[#fb8500] hover:underline transition-colors mt-2 block font-bold">Visit Help Desk →</Link></li>
>>>>>>> e20eac0 (Updated Website UI and content)
              </ul>
            </div>

            {/* Newsletter */}
            <div className="sm:col-span-2 lg:col-span-1">
<<<<<<< HEAD
              <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-sm">Subscribe</h4>
              <p className="text-zinc-500 text-xs mb-4">Latest updates on our work.</p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-2 rounded focus:outline-none focus:border-[#FDCF09] text-sm"
                />
                <button
                  onClick={() => alert("Thank you for subscribing!")}
                  className="w-full bg-[#FDCF09] text-black font-bold uppercase text-xs py-2 rounded hover:bg-white transition-colors"
                >
                  Sign Up
=======
              <h4 className="font-serif font-bold text-[#fb8500] uppercase tracking-[0.15em] mb-8 text-xs">Updates</h4>
              <p className="text-zinc-500 text-xs mb-6 font-medium">Join our mailing list for quarterly impact reports.</p>
              <div className="space-y-3">
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-[#fb8500]/50 transition-colors text-sm"
                  />
                </div>
                <button
                  className="w-full bg-[#d90429] text-white font-bold uppercase text-xs py-4 rounded-2xl hover:bg-[#b00422] transition-all shadow-lg shadow-red-500/10"
                >
                  Stay Connected
>>>>>>> e20eac0 (Updated Website UI and content)
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM: Copyright */}
<<<<<<< HEAD
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Swastik Srijan Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Registered NGO</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> 80G Compliant</span>
=======
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-500 font-medium italic">
            © {new Date().getFullYear()} Swastik Srijan Foundation. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            A Commitment to Grassroots Governance.
          </p>
          <div className="flex flex-wrap gap-8 justify-center group">
            <span className="flex items-center gap-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
              Registered NGO
            </span>
            <span className="flex items-center gap-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <div className="w-2 h-2 rounded-full bg-[#fb8500] shadow-[0_0_10px_rgba(251,133,0,0.3)]"></div>
              Transparency First
            </span>
>>>>>>> e20eac0 (Updated Website UI and content)
          </div>
        </div>
      </div>
    </footer>
  );
}
