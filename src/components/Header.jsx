import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setLegalOpen(false);
  };

  /* 🔒 Close dropdown on outside click */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setLegalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

<<<<<<< HEAD
  /* 🔁 Close legal submenu when main dropdown closes */
  useEffect(() => {
    if (!dropdownOpen) setLegalOpen(false);
  }, [dropdownOpen]);

=======
>>>>>>> e20eac0 (Updated Website UI and content)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" onClick={closeAll} className="flex items-center gap-2">
          <img src="/logo.svg" alt="SSF Logo" className="w-12" />
          <span className="font-bold text-xl tracking-tight text-black hidden sm:block">
            Swastik Srijan Foundation
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-base font-bold text-zinc-800">

<<<<<<< HEAD
          <Link to="/" onClick={closeAll} className="hover:text-[#FDCF09] transition-colors">
            Home
          </Link>

          <Link to="/#about" onClick={closeAll} className="hover:text-[#FDCF09] transition-colors">
            About Us
          </Link>

          <Link to="/institutional-dna" onClick={closeAll} className="hover:text-[#FDCF09] transition-colors">
            Institutional DNA
          </Link>

          <Link to="/Campaign" onClick={closeAll} className="hover:text-[#FDCF09] transition-colors">
            Our Work
          </Link>

          <Link to="/#join-us" onClick={closeAll} className="hover:text-[#FDCF09] transition-colors">
=======
          <Link to="/" onClick={closeAll} className="hover:text-[#002344] transition-colors">
            Home
          </Link>

          <Link to="/#about" onClick={closeAll} className="hover:text-[#002344] transition-colors">
            About Us
          </Link>

          <Link to="/institutional-dna" onClick={closeAll} className="hover:text-[#002344] transition-colors">
            Institutional DNA
          </Link>

          <Link to="/Campaign" onClick={closeAll} className="hover:text-[#002344] transition-colors">
            Our Work
          </Link>

          <Link to="/#join-us" onClick={closeAll} className="hover:text-[#002344] transition-colors">
>>>>>>> e20eac0 (Updated Website UI and content)
            Join Us
          </Link>

          {/* MORE DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
<<<<<<< HEAD
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-[#FDCF09] transition-colors"
            >
              More
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
=======
              onClick={() =>
                setDropdownOpen((prev) => {
                  const next = !prev;
                  if (!next) setLegalOpen(false);
                  return next;
                })
              }
              className="flex items-center gap-1 hover:text-[#002344] transition-colors"
            >
              More
              <IoIosArrowDown
                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                  }`}
>>>>>>> e20eac0 (Updated Website UI and content)
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-12 right-0 w-64 bg-white border border-zinc-200 shadow-xl rounded-b-lg overflow-hidden">
                <ul className="flex flex-col text-sm font-semibold">

<<<<<<< HEAD
                  <Link to="/DonateAndSupport" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    Donate & Support
=======
                  <Link to="/Impact" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b flex items-center justify-between group">
                    <span>Impact Stories</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Real Results</span>
>>>>>>> e20eac0 (Updated Website UI and content)
                  </Link>

                  <Link to="/UpcomingProjects" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    Upcoming Projects
                  </Link>

<<<<<<< HEAD
                  <Link to="/Impact" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    Impact Stories
                  </Link>

                  <Link to="/Blog" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    Blog
=======
                  <Link to="/DonateAndSupport" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    Donate and Support
>>>>>>> e20eac0 (Updated Website UI and content)
                  </Link>

                  <Link to="/Media" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    Media Gallery
                  </Link>

<<<<<<< HEAD
                  <Link to="/PartnerWithUs" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
=======
                  <Link to="/Blog" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    News & Blog
                  </Link>

                  <Link to="/PartnerWithUs" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b text-[#003366]">
>>>>>>> e20eac0 (Updated Website UI and content)
                    Partner With Us
                  </Link>

                  <Link to="/Contact" onClick={closeAll} className="px-6 py-4 hover:bg-zinc-50 border-b">
                    Contact Us
                  </Link>

                  {/* LEGAL & POLICIES */}
<<<<<<< HEAD
                  <li className="border-b">
                    <button
                      onClick={() => setLegalOpen(!legalOpen)}
                      className="w-full flex items-center justify-between px-6 py-4 hover:bg-zinc-50"
                    >
                      Legal & Policies
                      <IoIosArrowDown
                        className={`transition-transform duration-300 ${
                          legalOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {legalOpen && (
  <div className="bg-zinc-50">
    <Link
      to="/TermsAndConditions"
      onClick={closeAll}
      className="block px-10 py-3 hover:bg-zinc-100"
    >
      Terms & Conditions
    </Link>

    <Link
      to="/RegistrationDetails"
      onClick={closeAll}
      className="block px-10 py-3 hover:bg-zinc-100"
    >
      Registration Details
    </Link>

    <Link
      to="/PrivacyPolicy"
      onClick={closeAll}
      className="block px-10 py-3 hover:bg-zinc-100"
    >
      Privacy Policy
    </Link>

    <Link
      to="/MemorandomAndRules"
      onClick={closeAll}
      className="block px-10 py-3 hover:bg-zinc-100"
    >
      Memorandum & Rules
    </Link>

  </div>
)}


=======
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
                          { name: "Registration Details", path: "/RegistrationDetails" },
                          { name: "Privacy Policy", path: "/PrivacyPolicy" },
                          { name: "Memorandum & Rules", path: "/MemorandumAndRules" },
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
>>>>>>> e20eac0 (Updated Website UI and content)
                  </li>

                </ul>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
            target="_blank"
<<<<<<< HEAD
            rel="noreferrer"
          >
            <button className="btn-cry-primary">
=======
            rel="noreferrer noopener"
          >
            <button className="px-8 py-3 bg-[#d90429] text-white font-bold rounded-full hover:bg-[#b00422] transition-all shadow-lg shadow-red-500/20 active:scale-95">
>>>>>>> e20eac0 (Updated Website UI and content)
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
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto pb-20">
          <nav className="flex flex-col p-6 text-lg font-bold text-zinc-800 divide-y divide-zinc-100">
            <Link to="/" onClick={closeAll} className="py-4">Home</Link>
            <Link to="/#about" onClick={closeAll} className="py-4">About Us</Link>
            <Link to="/institutional-dna" onClick={closeAll} className="py-4">
              Institutional DNA
            </Link>
            <Link to="/Campaign" onClick={closeAll} className="py-4">Our Work</Link>
            <Link to="/#join-us" onClick={closeAll} className="py-4">Join Us</Link>
<<<<<<< HEAD
            <Link to="/DonateAndSupport" onClick={closeAll} className="py-4">Donate & Support</Link>
            <Link to="/UpcomingProjects" onClick={closeAll} className="py-4">Upcoming Projects</Link>
            <Link to="/Blog" onClick={closeAll} className="py-4">Blog</Link>
            <Link to="/Media" onClick={closeAll} className="py-4">Media Gallery</Link>
            <Link to="/Contact" onClick={closeAll} className="py-4">Contact Us</Link>
            <Link to="/TermsAndConditions" onClick={closeAll} className="py-4">
              Terms & Conditions
            </Link>
=======

            {/* More section items (mirror desktop dropdown) */}
            <Link to="/DonateAndSupport" onClick={closeAll} className="py-4">
              Donate and Support
            </Link>
            <Link to="/UpcomingProjects" onClick={closeAll} className="py-4">
              Upcoming Projects
            </Link>
            <Link to="/Impact" onClick={closeAll} className="py-4">
              Impact Stories
            </Link>
            <Link to="/Blog" onClick={closeAll} className="py-4">
              Blog
            </Link>
            <Link to="/Media" onClick={closeAll} className="py-4">
              Media Gallery
            </Link>
            <Link to="/PartnerWithUs" onClick={closeAll} className="py-4">
              Partner With Us
            </Link>
            <Link to="/Contact" onClick={closeAll} className="py-4">
              Contact Us
            </Link>

            {/* Legal & Policies items */}
            <Link to="/TermsAndConditions" onClick={closeAll} className="py-4">
              Terms & Conditions
            </Link>
            <Link to="/RegistrationDetails" onClick={closeAll} className="py-4">
              Registration Details
            </Link>
            <Link to="/PrivacyPolicy" onClick={closeAll} className="py-4">
              Privacy Policy
            </Link>
            <Link to="/MemorandumAndRules" onClick={closeAll} className="py-4">
              Memorandum & Rules
            </Link>
            <Link to="/CookiePolicy" onClick={closeAll} className="py-4">
              Cookie Policy
            </Link>
>>>>>>> e20eac0 (Updated Website UI and content)

            <div className="pt-6">
              <a
                href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                target="_blank"
                rel="noreferrer"
              >
<<<<<<< HEAD
                <button className="w-full btn-cry-primary">
=======
                <button className="w-full py-4 bg-[#e63946] text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg">
>>>>>>> e20eac0 (Updated Website UI and content)
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
