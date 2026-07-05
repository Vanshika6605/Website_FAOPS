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
  "absolute top-full left-0 mt-1 bg-white text-faops-secondary shadow-[0_20px_60px_-20px_rgba(41,68,129,0.25)] border border-faops-line p-3 flex flex-col gap-1 min-w-[220px] rounded-xl";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkCls = "text-sm font-medium text-faops-navy/80 hover:text-faops-navy transition whitespace-nowrap";

  const dropdownItem =
    "text-sm text-faops-secondary hover:text-faops-primary hover:bg-faops-bg rounded-md px-3 py-1.5 transition";

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 bg-white/85 backdrop-blur border-b border-faops-line z-50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link
          href="/"
          data-testid="nav-logo"
          className="flex items-center gap-2 shrink-0"
        >
          <Image
            src="https://faopsperinatal.org/wp-content/uploads/2021/06/FAOPS_WB.png"
            alt="FAOPS Logo"
            width={110}
            height={44}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-7 items-center relative">
          <Link
            href="/"
            className={linkCls}
            data-testid="nav-home"
          >
            Home
          </Link>

          <Link
            href="/presidents-corner"
            className={linkCls}
          >
            President&apos;s Corner
          </Link>

          {/* About */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("about")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`${linkCls} inline-flex items-center gap-1`}
            >
              About Us
              <Chevron />
            </button>

            {openMenu === "about" && (
              <div className={dropdownPanel}>
                <Link href="/about-us" className={dropdownItem}>
                  About Us
                </Link>

                <Link href="/faops-history-2" className={dropdownItem}>
                  History
                </Link>

                <Link href="/faops-vision" className={dropdownItem}>
                  Vision
                </Link>

                <Link href="/faops-mission" className={dropdownItem}>
                  Mission
                </Link>

                <Link href="/faops-values" className={dropdownItem}>
                  Values
                </Link>

                <Link href="/program" className={dropdownItem}>
                  Program
                </Link>
              </div>
            )}
          </div>
                    {/* Office Bearers */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("office")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`${linkCls} inline-flex items-center gap-1`}
            >
              Office Bearers
              <Chevron />
            </button>

            {openMenu === "office" && (
              <div className={`${dropdownPanel} min-w-[240px]`}>
                <Link
                  href="/the-council-2"
                  className={dropdownItem}
                >
                  The Council
                </Link>

                <Link
                  href="/committee-chairperson"
                  className={dropdownItem}
                >
                  Committee Chairperson
                </Link>

                <Link
                  href="/deputy-secretary-general"
                  className={dropdownItem}
                >
                  Deputy Secretary General
                </Link>

                <Link
                  href="/advisory-board"
                  className={dropdownItem}
                >
                  Advisory Board
                </Link>
              </div>
            )}
          </div>

          {/* Membership */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("membership")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`${linkCls} inline-flex items-center gap-1`}
            >
              Membership
              <Chevron />
            </button>

            {openMenu === "membership" && (
              <div
                className={`${dropdownPanel} flex-row gap-8 p-6 min-w-[680px]`}
              >
                {Object.entries(membership).map(
                  ([region, countries]) => (
                    <div key={region}>
                      <p className="text-[11px] uppercase tracking-widest text-faops-primary mb-2 font-semibold">
                        {region}
                      </p>

                      <div className="flex flex-col gap-1">
                        {countries.map((country) => (
                          <Link
                            key={country.href}
                            href={country.href}
                            className="text-sm text-faops-secondary hover:text-faops-primary transition"
                          >
                            {country.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <Link
            href="/events"
            className={linkCls}
          >
            Events
          </Link>

          <Link
            href="/publications"
            className={linkCls}
          >
            Publications
          </Link>

          {/* More */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("others")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`${linkCls} inline-flex items-center gap-1`}
            >
              More
              <Chevron />
            </button>

            {openMenu === "others" && (
              <div className={`${dropdownPanel} min-w-[240px]`}>
                <Link
                  href="/organization-chart"
                  className={dropdownItem}
                >
                  Organization Chart
                </Link>

                <Link
                  href="/gallery-grid"
                  className={dropdownItem}
                >
                  Gallery
                </Link>

                <Link
                  href="/country-wise-society-presidents-representatives"
                  className={dropdownItem}
                >
                  Country Details
                </Link>

                <Link
                  href="/society-congresses"
                  className={dropdownItem}
                >
                  Society Congresses
                </Link>

                <Link
                  href="/faops-constitution"
                  className={dropdownItem}
                >
                  Constitution
                </Link>

                <Link
                  href="/general-assembly-and-council-meetings"
                  className={dropdownItem}
                >
                  Meetings
                </Link>

                <Link
                  href="/other-links-to-faops-related"
                  className={dropdownItem}
                >
                  Useful Links
                </Link>
              </div>
            )}
          </div>
        </nav>
                {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              data-testid="nav-search"
              className="bg-faops-bg border border-faops-line text-sm text-faops-navy placeholder:text-faops-text/70 rounded-full pl-9 pr-4 py-1.5 w-40 focus:outline-none focus:border-faops-primary focus:ring-2 focus:ring-faops-primary/20 transition"
            />

            <svg
              className="absolute left-3 top-2 text-faops-text"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>

          <Link
            href="/contact-us"
            data-testid="nav-contact-btn"
            className="inline-flex items-center gap-1 rounded-full bg-faops-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-faops-primary"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden -mr-2 p-2 text-faops-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {mobileOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-faops-line bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {[
              ["/", "Home"],
              ["/presidents-corner", "President's Corner"],
              ["/about-us", "About Us"],
              ["/the-council-2", "The Council"],
              ["/events", "Events"],
              ["/publications", "Publications"],
              ["/gallery-grid", "Gallery"],
              ["/contact-us", "Contact Us"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href as string}
                className="py-2 text-faops-navy transition hover:text-faops-primary"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
function Chevron() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200 group-hover:rotate-180"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}