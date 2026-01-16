import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";

import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [governanceOpen, setGovernanceOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const aboutRef = useRef(null);
  const governanceRef = useRef(null);
  const programsRef = useRef(null);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setAboutOpen(false);
    setGovernanceOpen(false);
    setProgramsOpen(false);
    setGetInvolvedOpen(false);
    setLegalOpen(false);
  };

  /* 🔒 Close dropdown on outside click */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setLegalOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
      if (governanceRef.current && !governanceRef.current.contains(e.target)) {
        setGovernanceOpen(false);
      }
      if (programsRef.current && !programsRef.current.contains(e.target)) {
        setProgramsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" onClick={closeAll} className="flex items-center gap-2">
          <img
            src="/images/home-logo.png"
            alt="SSF Logo"
            className="w-12 rounded-full"
          />
          <span className="font-bold text-xl tracking-tight text-black hidden sm:block">
            Swastik Srijan Foundation
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-4 text-sm lg:text-base font-bold text-zinc-800">

          <Link to="/" onClick={closeAll} className="hover:text-[#002344] transition-colors">
            Home
          </Link>

          {/* ABOUT US DROPDOWN */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() =>
                setAboutOpen((prev) => {
                  const next = !prev;
                  if (next) {
                    setDropdownOpen(false);
                    setGovernanceOpen(false);
                    setProgramsOpen(false);
                    setLegalOpen(false);
                  }
                  return next;
                })
              }
              className="flex items-center gap-1 hover:text-[#002344] transition-colors"
            >
              About Us
              <IoIosArrowDown
                className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {aboutOpen && (
              <div className="absolute top-12 left-0 w-56 bg-white border border-zinc-200 shadow-xl rounded-b-lg overflow-hidden flex flex-col z-[60]">
                <Link to="/About" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                  About Us
                </Link>
                <Link to="/Mission" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                  Mission
                </Link>
                <Link to="/Vision" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                  Vision
                </Link>
                <Link to="/Objectives" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                  Objective
                </Link>
                <Link to="/Team" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                  Our Team
                </Link>
              </div>
            )}
          </div>

          {/* GOVERNANCE DROPDOWN (New) -> Renamed to Transparency & Reports */}
          <div className="relative" ref={governanceRef}>
            <button
              onClick={() =>
                setGovernanceOpen((prev) => {
                  const next = !prev;
                  if (next) {
                    setDropdownOpen(false);
                    setAboutOpen(false);
                    setProgramsOpen(false);
                    setLegalOpen(false);
                  }
                  return next;
                })
              }
              className="flex items-center gap-1 hover:text-[#002344] transition-colors"
            >
              Transparency & Reports
              <IoIosArrowDown
                className={`transition-transform duration-300 ${governanceOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {governanceOpen && (
              <div className="absolute top-12 left-0 w-64 bg-white border border-zinc-200 shadow-xl rounded-b-lg overflow-hidden flex flex-col z-[60]">
                <Link to="/Transparency" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                  Overview & Compliance
                </Link>
                <Link to="/RegistrationDetails" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                  Registration Details
                </Link>
                <Link to="/MemorandumAndRules" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                  Memorandum & Rules
                </Link>
              </div>
            )}
          </div>

          {/* PROGRAMS & INITIATIVES DROPDOWN */}
          <div className="relative" ref={programsRef}>
            <button
              onClick={() =>
                setProgramsOpen((prev) => {
                  const next = !prev;
                  if (next) {
                    setDropdownOpen(false);
                    setGovernanceOpen(false);
                    setAboutOpen(false);
                    setLegalOpen(false);
                  }
                  return next;
                })
              }
              className="flex items-center gap-1 hover:text-[#002344] transition-colors"
            >
              Programs
              <IoIosArrowDown
                className={`transition-transform duration-300 ${programsOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {programsOpen && (
              <div className="absolute top-12 left-0 w-72 bg-white border border-zinc-200 shadow-xl rounded-b-lg overflow-hidden flex flex-col z-[60]">
                <Link to="/SSFNationalAcademy" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344] flex items-center justify-between">
                  <span>SSF National Academy</span>
                  <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">
                    <HiSparkles className="text-xs" /> In Progress
                  </span>
                </Link>
                <Link to="/LearningHub" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344] flex items-center justify-between">
                  <span>SSF Learning Hub</span>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">Active</span>
                </Link>
                <Link to="/Campaigns" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                  Campaigns
                </Link>
                <Link to="/Campaign" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                  Health & Social Programs
                </Link>
                <Link to="/UpcomingProjects" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 text-sm font-semibold hover:text-[#002344]">
                  Upcoming Projects
                </Link>
              </div>
            )}
          </div>

          <Link to="/Blog" onClick={closeAll} className="hover:text-[#002344] transition-colors">
            Blog
          </Link>

          {/* GET INVOLVED DROPDOWN (Replaces "Join Us") */}
          <div className="relative group/get-involved">
            <button
              className="flex items-center gap-1 hover:text-[#002344] transition-colors"
            >
              Get Involved
              <IoIosArrowDown className="group-hover/get-involved:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-12 left-0 w-64 bg-white border border-zinc-200 shadow-xl rounded-b-lg overflow-hidden flex flex-col z-[60] max-h-0 opacity-0 group-hover/get-involved:max-h-96 group-hover/get-involved:opacity-100 transition-all duration-300">
              <Link to="/Volunteer" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#003366]">
                Volunteer for India
              </Link>
              <Link to="/Members" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                Become a Member
              </Link>
              <Link to="/DonateAndSupport" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#002344]">
                Donate & Support
              </Link>
              <Link to="/PartnerWithUs" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-sm font-semibold hover:text-[#003366]">
                Partner With Us
              </Link>
            </div>
          </div>


          {/* MORE DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() =>
                setDropdownOpen((prev) => {
                  const next = !prev;
                  if (next) {
                    setLegalOpen(false);
                    setAboutOpen(false);
                    setGovernanceOpen(false);
                  }
                  return next;
                })
              }
              className="flex items-center gap-1 hover:text-[#002344] transition-colors"
            >
              More
              <IoIosArrowDown
                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-12 right-0 w-64 bg-white border border-zinc-200 shadow-xl rounded-b-lg overflow-hidden">
                <ul className="flex flex-col text-sm font-semibold">

                  <Link to="/Impact" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b flex items-center justify-between group">
                    <span>Impact Stories</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Real Results</span>
                  </Link>

                  <Link to="/Media" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    Media Gallery
                  </Link>

                  <Link to="/CSRPartnership" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    CSR Partnership
                  </Link>

                  <Link to="/Contact" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    Contact Us
                  </Link>

                  {/* LEGAL & POLICIES */}
                  {/* LEGAL & POLICIES */}
                  <li className="border-b border-zinc-100">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLegalOpen((prev) => !prev);
                      }}
                      className={`w-full flex items-center justify-between px-6 py-4 transition-colors group ${legalOpen ? "bg-zinc-50 text-[#003366]" : "hover:bg-zinc-50"}`}
                    >
                      <span className="font-semibold">Legal & Policies</span>
                      <IoIosArrowDown
                        className={`transition-transform duration-300 text-zinc-400 group-hover:text-[#003366] ${legalOpen ? "rotate-180 text-[#003366]" : ""}`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${legalOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="bg-zinc-50/50 pb-2">
                        {[
                          { name: "Terms & Conditions", path: "/TermsAndConditions" },
                          { name: "Privacy Policy", path: "/PrivacyPolicy" },
                          { name: "Cookie Policy", path: "/CookiePolicy" }
                        ].map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={closeAll}
                            className="flex items-center gap-3 px-8 py-2.5 text-sm text-zinc-500 hover:text-[#003366] hover:bg-zinc-100 transition-colors border-l-[3px] border-transparent hover:border-[#003366]"
                          >
                            <span className="w-1 h-1 rounded-full bg-zinc-400"></span>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="px-8 py-3 bg-[#d90429] text-white font-bold rounded-full hover:bg-[#b00422] transition-all shadow-lg shadow-red-500/20 active:scale-95">
              Donate Now
            </button>
          </a>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl text-zinc-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto pb-20 animate-in slide-in-from-right duration-300">
          <nav className="flex flex-col p-6 text-lg font-bold text-zinc-800 divide-y divide-zinc-100">
            <Link to="/" onClick={closeAll} className="py-4">Home</Link>

            {/* Mobile About Dropdown */}
            <div className="py-4">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between text-left font-bold"
              >
                <span>About Us</span>
                <IoIosArrowDown className={`transition-transform duration-300 ${aboutOpen ? "rotate-180 text-[#003366]" : "text-zinc-400"}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${aboutOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <div className="bg-zinc-50 rounded-xl p-4 space-y-3 border border-zinc-100">
                  <Link to="/About" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    About Us
                  </Link>
                  <Link to="/Mission" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Mission
                  </Link>
                  <Link to="/Vision" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Vision
                  </Link>
                  <Link to="/Objectives" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Objective
                  </Link>
                  <Link to="/Team" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Our Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Transparency & Reports Dropdown */}
            <div className="py-4">
              <button
                onClick={() => setGovernanceOpen(!governanceOpen)}
                className="w-full flex items-center justify-between text-left font-bold"
              >
                <span>Transparency & Reports</span>
                <IoIosArrowDown className={`transition-transform duration-300 ${governanceOpen ? "rotate-180 text-[#003366]" : "text-zinc-400"}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${governanceOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <div className="bg-zinc-50 rounded-xl p-4 space-y-3 border border-zinc-100">
                  <Link to="/Transparency" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Overview & Compliance
                  </Link>
                  <Link to="/RegistrationDetails" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Registration Details
                  </Link>
                  <Link to="/MemorandumAndRules" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Memorandum & Rules
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/institutional-dna" onClick={closeAll} className="py-4">
              Institutional DNA
            </Link>

            {/* Mobile Programs & Initiatives Dropdown */}
            <div className="py-4">
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="w-full flex items-center justify-between text-left font-bold"
              >
                <span>Programs & Initiatives</span>
                <IoIosArrowDown className={`transition-transform duration-300 ${programsOpen ? "rotate-180 text-[#003366]" : "text-zinc-400"}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${programsOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <div className="bg-zinc-50 rounded-xl p-4 space-y-3 border border-zinc-100">

                  <Link to="/SSFNationalAcademy" onClick={closeAll} className="flex items-center justify-between text-base text-zinc-600 hover:text-[#003366]">
                    <span>SSF National Academy</span>
                    <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">
                      <HiSparkles className="text-xs" /> In Progress
                    </span>
                  </Link>
                  <Link to="/LearningHub" onClick={closeAll} className="flex items-center justify-between text-base text-zinc-600 hover:text-[#003366]">
                    <span>SSF Learning Hub</span>
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">Active</span>
                  </Link>
                  <Link to="/Campaigns" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Campaigns
                  </Link>
                  <Link to="/Campaign" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Health & Social Programs
                  </Link>
                  <Link to="/UpcomingProjects" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Upcoming Projects
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Blog Link */}
            <Link to="/Blog" onClick={closeAll} className="py-4 block font-bold text-lg">
              Blog
            </Link>

            {/* Mobile Get Involved Dropdown */}
            <div className="py-4">
              <button
                onClick={() => setGetInvolvedOpen(!getInvolvedOpen)}
                className="w-full flex items-center justify-between text-left font-bold"
              >
                <span>Get Involved</span>
                <IoIosArrowDown className={`transition-transform duration-300 ${getInvolvedOpen ? "rotate-180 text-[#003366]" : "text-zinc-400"}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${getInvolvedOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <div className="bg-zinc-50 rounded-xl p-4 space-y-3 border border-zinc-100">
                  <Link to="/Volunteer" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Volunteer for India
                  </Link>
                  <Link to="/Members" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Become a Member
                  </Link>
                  <Link to="/DonateAndSupport" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Donate & Support
                  </Link>
                  <Link to="/PartnerWithUs" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Partner With Us
                  </Link>
                </div>
              </div>
            </div>

            {/* More section items */}
            <Link to="/Impact" onClick={closeAll} className="py-4">
              Impact Stories
            </Link>
            <Link to="/Media" onClick={closeAll} className="py-4">
              Media Gallery
            </Link>

            <Link to="/CSRPartnership" onClick={closeAll} className="py-4">
              CSR Partnership
            </Link>
            <Link to="/Contact" onClick={closeAll} className="py-4">
              Contact Us
            </Link>

            {/* Legal & Policies Collapsible */}
            <div className="py-4">
              <button
                onClick={() => setLegalOpen(!legalOpen)}
                className="w-full flex items-center justify-between text-left font-bold"
              >
                <span>Legal & Policies</span>
                <IoIosArrowDown className={`transition-transform duration-300 ${legalOpen ? "rotate-180 text-[#003366]" : "text-zinc-400"}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${legalOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <div className="bg-zinc-50 rounded-xl p-4 space-y-3 border border-zinc-100">
                  <Link to="/TermsAndConditions" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Terms & Conditions
                  </Link>
                  <Link to="/PrivacyPolicy" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Privacy Policy
                  </Link>
                  <Link to="/CookiePolicy" onClick={closeAll} className="block text-base text-zinc-600 hover:text-[#003366]">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-full py-4 bg-[#e63946] text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg">
                  Donate Now
                </button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
