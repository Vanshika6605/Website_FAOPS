"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/faopsperinatal" },
  { name: "Twitter", href: "https://twitter.com/faopsperinatal" },
  { name: "YouTube", href: "https://www.youtube.com/@faopsperinatal" },
  { name: "Instagram", href: "https://www.instagram.com/faopsperinatal" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/faopsperinatal" },
];

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      data-testid="site-footer"
      className="mt-24 bg-faops-navy text-white"
    >
      <div className="max-w-6xl mx-auto grid gap-12 px-6 py-16 md:grid-cols-12">
        {/* Logo & About */}
        <div className="md:col-span-5">
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Federation of Asia-Oceania Perinatal Societies — dedicated to
            improving perinatal care across 19 member countries.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs transition hover:border-faops-primary hover:text-faops-primary"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div className="md:col-span-3">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-faops-primary">
            Explore
          </h3>

          <div className="flex flex-col gap-2.5 text-sm text-white/70">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/about-us" className="transition hover:text-white">
              About Us
            </Link>

            <Link href="/events" className="transition hover:text-white">
              Events
            </Link>

            <Link
              href="/publications"
              className="transition hover:text-white"
            >
              Publications
            </Link>

            <Link href="/contact-us" className="transition hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-faops-primary">
            Get in touch
          </h3>

          <p className="text-sm leading-relaxed text-white/70">
            78, Railway Lines,
            <br />
            Near St. Joseph High School Main Gate,
            <br />
            Solapur, Maharashtra 413001,
            <br />
            India
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <a
              href="tel:+919822096280"
              className="block text-white/80 transition hover:text-faops-primary"
            >
              (+91) 98220 96280
            </a>

            <a
              href="mailto:info@faopsperinatal.org"
              className="block text-white/80 transition hover:text-faops-primary"
            >
              info@faopsperinatal.org
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/50 md:flex-row">
          <p>
            © {year} FAOPS · All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/cookie-policy-eu"
              className="transition hover:text-white"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}