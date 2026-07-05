import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-faops-navy text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-3 text-faops-primary">Contact Us</h3>
          <p className="text-sm text-gray-300">
            78, Railway Lines, Near St. Joseph High School Main Gate, Solapur,
            Maharashtra, India 413001
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Phone:{" "}
            <a href="tel:919822096280" className="hover:text-faops-primary">
              (+91) 9822096280
            </a>
          </p>
          <p className="text-sm text-gray-300">
            Email:{" "}
            <a href="mailto:info@faopsperinatal.org" className="hover:text-faops-primary">
              info@faopsperinatal.org
            </a>
          </p>
          <div className="flex gap-3 mt-3 text-sm text-gray-300">
            <a href="https://www.facebook.com/faopsperinatal" className="hover:text-faops-primary">
              Facebook
            </a>
            <a href="https://twitter.com/faopsperinatal" className="hover:text-faops-primary">
              Twitter
            </a>
            <a href="https://www.youtube.com/@faopsperinatal" className="hover:text-faops-primary">
              Youtube
            </a>
            <a href="https://www.instagram.com/faopsperinatal" className="hover:text-faops-primary">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/faopsperinatal" className="hover:text-faops-primary">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-faops-primary">Quick Links</h3>
          <div className="flex flex-col gap-1 text-sm text-gray-300">
            <Link href="/" className="hover:text-faops-primary">Home</Link>
            <Link href="/about-us" className="hover:text-faops-primary">About Us</Link>
            <Link href="/events" className="hover:text-faops-primary">Events</Link>
            <Link href="/publications" className="hover:text-faops-primary">Publications</Link>
            <Link href="/contact-us" className="hover:text-faops-primary">Contact Us</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-faops-primary">Legal</h3>
          <div className="flex flex-col gap-1 text-sm text-gray-300">
            <Link href="/privacy-policy" className="hover:text-faops-primary">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-faops-primary">Terms & Conditions</Link>
            <Link href="/cookie-policy-eu" className="hover:text-faops-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-10 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} All rights reserved FAOPS.
      </p>
    </footer>
  );
}