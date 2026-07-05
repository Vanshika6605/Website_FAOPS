"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const stats = [
  { value: "1978", label: "Founded", icon: "calendar" },
  { value: "1980", label: "Established as FAOPS", icon: "shield" },
  { value: "19", label: "Member countries", icon: "globe" },
  { value: "Biennial", label: "Regional congress", icon: "users" },
];

const objectives = [
  "Promote the science and art of perinatology.",
  "Promote maternal, fetal and neonatal welfare.",
  "Maintain liaison and promote co-operation and goodwill with other perinatal organization.",
  "Provide expert advice to governmental and other bodies pertaining to perinatology.",
  "Promote research and training in perinatology.",
  "Hold a biennial congress among member countries.",
  "Support perinatal workshops among sub-regions.",
  "Encourage young investigators and FAOPS participation in country perinatal meetings.",
];

const galleryImages = [
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2023/09/faops-congress-1.jpg",
    alt: "FAOPS Congress delegates",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2023/09/faops-congress-2.jpg",
    alt: "FAOPS Congress delegates",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2021/06/FAOPS_WB.png",
    alt: "FAOPS logo",
  },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    // Wire this to your API route (e.g. /api/contact) once backend is ready
    setStatus("sent");
    setForm({ name: "", phone: "", email: "", message: "" });
  }

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-faops-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://faopsperinatal.org/wp-content/uploads/2023/10/bg-pattern_faops.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/10 border border-white/20 text-sm px-4 py-1.5 rounded-full mb-6">
              Founded in 1978
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Dedicated to Improve Perinatal Care in the Asia Oceania Region
            </h1>
            <p className="text-gray-200 mb-8 max-w-lg">
              The Federation of Asia and Oceania Perinatal Societies promotes
              the science and art of perinatology, maternal, fetal and
              neonatal welfare, and advances in newborn care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about-us"
                className="bg-faops-primary hover:bg-white hover:text-faops-navy text-white px-6 py-3 rounded-md font-medium transition flex items-center gap-2"
              >
                Explore FAOPS
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/society-congresses"
                className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-md font-medium transition"
              >
                View Congresses
              </Link>
            </div>
          </div>

          <div className="bg-white/95 text-faops-secondary rounded-xl p-8 shadow-xl">
            <h3 className="font-bold text-lg mb-1">Mission Focus</h3>
            <p className="text-sm text-faops-text mb-6">
              A concise view of the work already reflected across the current
              FAOPS website.
            </p>
            <ul className="space-y-3">
              {[
                "The science and art of perinatology",
                "Maternal, fetal and neonatal welfare",
                "Advances in newborn care",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 text-sm font-medium"
                >
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4"
            >
              <div className="bg-blue-50 text-faops-primary rounded-lg w-12 h-12 flex items-center justify-center shrink-0">
                <StatIcon type={s.icon} />
              </div>
              <div>
                <p className="text-2xl font-bold text-faops-secondary">{s.value}</p>
                <p className="text-sm text-faops-text">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + OBJECTIVES */}
      <section className="bg-gray-50 mt-16 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase text-sm tracking-wide text-faops-primary font-semibold mb-2">
              About FAOPS
            </p>
            <h2 className="text-3xl font-bold text-faops-secondary mb-6">
              Welcome to the FAOPS
            </h2>
            <p className="text-faops-text mb-4 leading-relaxed">
              The Federation of Asia and Oceania Perinatal Societies was
              established in 1980 following the Alma Ata Declaration of
              1978, and the first congress held in 1979 in Singapore.
            </p>
            <p className="text-faops-text mb-4 leading-relaxed">
              In its forty-five (45) years of existence, FAOPS has evolved
              into a vibrant community of leaders, researchers and experts
              in the field of Perinatology. It is governed by the FAOPS
              Constitution and By-Laws and has upheld the tenets of
              professionalism and cooperation among member countries.
            </p>
            <p className="text-faops-text leading-relaxed">
              Its operation is maintained by a Council of executive officers
              composed of the Immediate Past President, President,
              President-Elect, Treasurer, Secretary General and three
              Deputy Secretary Generals representing the Eastern, Western
              and Central regions of Asia and Oceania.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="font-bold text-xl text-faops-secondary mb-1">
              FAOPS Objectives
            </h3>
            <p className="text-sm text-faops-text mb-6">
              Existing organizational objectives presented for faster
              reading.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {objectives.map((item) => (
                <div key={item} className="flex gap-3">
                  <HeartIcon />
                  <p className="text-sm text-faops-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRESIDENT'S CORNER */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-blue-50 rounded-xl p-4">
          <Image
            src="https://faopsperinatal.org/wp-content/uploads/2023/09/han-suk-kim.jpg"
            alt="Han-Suk Kim, President of FAOPS"
            width={600}
            height={700}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div>
          <p className="uppercase text-sm tracking-wide text-faops-primary font-semibold mb-2">
            President&apos;s Corner
          </p>
          <h2 className="text-3xl font-bold text-faops-secondary mb-2">
            Message from the President
          </h2>
          <p className="text-faops-text mb-6">
            Han-Suk Kim, M.D., Ph.D., Republic of Korea
          </p>
          <div className="space-y-4 text-faops-text leading-relaxed">
            <p>
              Dear Colleagues, Friends, and Visitors, welcome to the official
              website of the Federation of Asia-Oceania Perinatal Societies
              (FAOPS)!
            </p>
            <p>
              FAOPS has long served as a vital platform for collaboration
              among perinatal health professionals across our diverse
              region, promoting research, education, and policy advancement
              in maternal and neonatal care.
            </p>
            <p>
              The Asia-Oceania region presents both unique challenges and
              significant opportunities in the field of perinatal medicine.
              Our mission is to bridge these gaps, facilitate the exchange
              of knowledge, and foster innovations that benefit mothers,
              infants, and families in all member countries.
            </p>
            <p className="font-semibold text-faops-secondary">
              President, Federation of Asia-Oceania Perinatal Societies
              (FAOPS)
            </p>
          </div>
          <Link
            href="/presidents-corner"
            className="inline-block mt-6 text-faops-primary font-medium hover:text-faops-navy transition"
          >
            Read Full Message →
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <p className="uppercase text-sm tracking-wide text-faops-primary font-semibold mb-2">
            Gallery
          </p>
          <h2 className="text-3xl font-bold text-faops-secondary mb-2">
            FAOPS in View
          </h2>
          <p className="text-faops-text">
            A look at recent congresses and events across the region.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-white"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={375}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="uppercase text-sm tracking-wide text-faops-primary font-semibold mb-2">
            Contact Us
          </p>
          <h2 className="text-3xl font-bold text-faops-secondary mb-4">
            Connect with FAOPS
          </h2>
          <p className="text-faops-text mb-8">
            The same public FAOPS contact information, organized for fast
            scanning and mobile use.
          </p>
          <div className="space-y-4">
            <a href="tel:+919822096280" className="flex items-center gap-3 text-faops-text hover:text-faops-primary transition">
              <PhoneCircleIcon /> (+91) 98220 96280
            </a>
            <a href="mailto:info@faopsperinatal.org" className="flex items-center gap-3 text-faops-text hover:text-faops-primary transition">
              <MailCircleIcon /> info@faopsperinatal.org
            </a>
            <p className="flex items-start gap-3 text-faops-text">
              <PinIcon />
              78, Railway Lines, Near St. Joseph High School Main Gate,
              Solapur, Maharashtra, India 413001
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
        >
          <h3 className="font-bold text-xl text-faops-secondary mb-1">
            Contact Form
          </h3>
          <p className="text-sm text-faops-text mb-6">
            Accessible fields styled for the modernized website system.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-faops-primary"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-faops-primary"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-faops-primary"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-faops-primary resize-none"
          />

          {status === "error" && (
            <p className="text-red-500 text-sm mb-3">
              Please fill in your name, email, and message.
            </p>
          )}
          {status === "sent" && (
            <p className="text-green-600 text-sm mb-3">
              Thanks — your message has been recorded. (Connect this form to
              a real API route to actually send it.)
            </p>
          )}

          <button
            type="submit"
            className="bg-faops-navy hover:bg-faops-primary text-white font-medium px-6 py-3 rounded-md transition w-full sm:w-auto"
          >
            Submit Message
          </button>
        </form>
      </section>
    </div>
  );
}

/* --- Icons --- */
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-faops-primary shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-faops-primary shrink-0 mt-0.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function PhoneCircleIcon() {
  return (
    <span className="bg-blue-50 text-faops-primary rounded-full w-9 h-9 flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </span>
  );
}
function MailCircleIcon() {
  return (
    <span className="bg-blue-50 text-faops-primary rounded-full w-9 h-9 flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    </span>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-faops-primary shrink-0 mt-0.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function StatIcon({ type }: { type: string }) {
  const props = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 };
  if (type === "calendar")
    return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
  if (type === "shield")
    return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>;
  if (type === "globe")
    return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" /></svg>;
  return <svg {...props}><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" /><circle cx="17" cy="7" r="3" /></svg>;
}