import { Link } from "@tanstack/react-router";
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
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-[#fb8500] uppercase tracking-[0.15em] mb-8 text-xs">About SSF</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><Link to="/#about" className="hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link to="/Journey" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/institutional-dna" className="hover:text-white transition-colors">Institutional DNA</Link></li>
                <li><Link to="/Members" className="hover:text-white transition-colors">Strategic Team</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-[#fb8500] uppercase tracking-[0.15em] mb-8 text-xs">Get Involved</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><Link to="/DonateAndSupport" className="hover:text-white transition-colors">Ways to Give</Link></li>
                <li><Link to="/Volunteer" className="hover:text-white transition-colors">Volunteer</Link></li>
                <li><Link to="/Campaign" className="hover:text-white transition-colors">Core Campaigns</Link></li>
                <li><Link to="/UpcomingProjects" className="hover:text-white transition-colors">Project Roadmap</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-[#fb8500] uppercase tracking-[0.15em] mb-8 text-xs">Contact Help</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li className="break-all text-white">swastiksrijanfoundation@gmail.com</li>
                <li className="text-white">+91 97183 46691</li>
                <li>Pune, MH | Rewa, MP</li>
                <li><Link to="/Contact" className="text-[#fb8500] hover:underline transition-colors mt-2 block font-bold">Visit Help Desk →</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="sm:col-span-2 lg:col-span-1">
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
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM: Copyright */}
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
          </div>
        </div>
      </div>
    </footer>
  );
}
