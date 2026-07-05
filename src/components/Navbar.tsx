"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const membership = {
  "Central Region": [
    { name: "Cambodia", href: "/cambodia" },
    { name: "Indonesia", href: "/indonesia" },
    { name: "Malaysia", href: "/malaysia-2" },
    { name: "Singapore", href: "/singapore" },
    { name: "Thailand", href: "/thailand" },
    { name: "Vietnam", href: "/vietnam" },
  ],
  "West Region": [
    { name: "Afghanistan", href: "/afghanistan" },
    { name: "Bangladesh", href: "/bangladesh" },
    { name: "India", href: "/india" },
    { name: "Nepal", href: "/nepal-2" },
    { name: "Pakistan", href: "/pakistan" },
    { name: "Sri Lanka", href: "/sri-lanka" },
    { name: "United Arab Emirates", href: "/united-arab-emirates" },
  ],
  "East Region": [
    { name: "Japan", href: "/japan" },
    { name: "Korea", href: "/korea" },
    { name: "Mongolia", href: "/mangolia" },
    { name: "Philippines", href: "/philippines" },
    { name: "Taiwan", href: "/taiwan" },
  ],
  "Oceania Region": [
    { name: "Australia & New Zealand", href: "/australia-new-zealand" },
  ],
};

const dropdownPanel =
  "absolute top-full left-0 bg-white text-faops-secondary shadow-lg p-4 flex flex-col gap-2 min-w-[200px] rounded-b-md";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-faops-navy text-white z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src="https://faopsperinatal.org/wp-content/uploads/2021/06/FAOPS_WB.png"
            alt="FAOPS Logo"
            width={140}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 items-center relative text-sm font-medium">
          <Link href="/" className="hover:text-faops-primary transition">
            Home
          </Link>
          <Link href="/presidents-corner" className="hover:text-faops-primary transition">
            President&apos;s Corner
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("about")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="hover:text-faops-primary transition">About Us</button>
            {openMenu === "about" && (
              <div className={dropdownPanel}>
                <Link href="/about-us" className="hover:text-faops-primary">About Us</Link>
                <Link href="/faops-history-2" className="hover:text-faops-primary">History</Link>
                <Link href="/faops-vision" className="hover:text-faops-primary">Vision</Link>
                <Link href="/faops-mission" className="hover:text-faops-primary">Mission</Link>
                <Link href="/faops-values" className="hover:text-faops-primary">Values</Link>
                <Link href="/program" className="hover:text-faops-primary">Program</Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("office")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="hover:text-faops-primary transition">Office Bearers</button>
            {openMenu === "office" && (
              <div className={`${dropdownPanel} min-w-[220px]`}>
                <Link href="/the-council-2" className="hover:text-faops-primary">The Council</Link>
                <Link href="/committee-chairperson" className="hover:text-faops-primary">Committee Chairperson</Link>
                <Link href="/deputy-secretary-general" className="hover:text-faops-primary">Deputy Secretary General</Link>
                <Link href="/advisory-board" className="hover:text-faops-primary">Advisory Board</Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("membership")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="hover:text-faops-primary transition">Membership</button>
            {openMenu === "membership" && (
              <div className={`${dropdownPanel} flex-row gap-8 p-6 min-w-[650px]`}>
                {Object.entries(membership).map(([region, countries]) => (
                  <div key={region}>
                    <p className="font-semibold mb-2 text-faops-navy">{region}</p>
                    <div className="flex flex-col gap-1">
                      {countries.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="text-sm text-faops-text hover:text-faops-primary"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/events" className="hover:text-faops-primary transition">
            Events
          </Link>
          <Link href="/publications" className="hover:text-faops-primary transition">
            Publications
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("others")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="hover:text-faops-primary transition">Others</button>
            {openMenu === "others" && (
              <div className={`${dropdownPanel} min-w-[230px]`}>
                <Link href="/organization-chart" className="hover:text-faops-primary">Organization Chart</Link>
                <Link href="/gallery-grid" className="hover:text-faops-primary">Gallery</Link>
                <Link href="/country-wise-society-presidents-representatives" className="hover:text-faops-primary">Country Details</Link>
                <Link href="/society-congresses" className="hover:text-faops-primary">Society Congresses</Link>
                <Link href="/faops-constitution" className="hover:text-faops-primary">Constitution</Link>
                <Link href="/general-assembly-and-council-meetings" className="hover:text-faops-primary">Meetings</Link>
                <Link href="/other-links-to-faops-related" className="hover:text-faops-primary">Useful Links</Link>
                <Link href="/contact-us" className="hover:text-faops-primary">Contact Us</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>
     <div className="hidden lg:flex items-center gap-3">
  <div className="relative">
    <input
      type="text"
      placeholder="Search"
      className="bg-white text-faops-secondary text-sm rounded-full pl-9 pr-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-faops-primary"
    />
    <svg
      className="absolute left-3 top-2.5 text-gray-400"
      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  </div>
  <Link
    href="/contact-us"
    className="bg-faops-navy hover:bg-faops-primary text-white text-sm font-medium px-5 py-2.5 rounded-md transition"
  >
    Contact
  </Link>
</div>
      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white text-faops-secondary px-6 py-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/presidents-corner" onClick={() => setMobileOpen(false)}>President&apos;s Corner</Link>
          <Link href="/about-us" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/faops-history-2" onClick={() => setMobileOpen(false)}>History</Link>
          <Link href="/faops-vision" onClick={() => setMobileOpen(false)}>Vision</Link>
          <Link href="/faops-mission" onClick={() => setMobileOpen(false)}>Mission</Link>
          <Link href="/faops-values" onClick={() => setMobileOpen(false)}>Values</Link>
          <Link href="/the-council-2" onClick={() => setMobileOpen(false)}>The Council</Link>
          <Link href="/events" onClick={() => setMobileOpen(false)}>Events</Link>
          <Link href="/publications" onClick={() => setMobileOpen(false)}>Publications</Link>
          <Link href="/gallery-grid" onClick={() => setMobileOpen(false)}>Gallery</Link>
          <Link href="/contact-us" onClick={() => setMobileOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}