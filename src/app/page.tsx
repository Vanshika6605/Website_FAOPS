"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const stats = [
  {
    value: "1978",
    label: "Founded",
    icon: "calendar",
  },
  {
    value: "1980",
    label: "Established as FAOPS",
    icon: "shield",
  },
  {
    value: "19",
    label: "Member countries",
    icon: "globe",
  },
  {
    value: "Biennial",
    label: "Regional congress",
    icon: "users",
  },
];

const objectives = [
  "Promote the science and art of perinatology.",
  "Promote maternal, fetal and neonatal welfare.",
  "Maintain liaison and cooperation with other perinatal organizations.",
  "Provide expert advice to governmental and other bodies.",
  "Promote research and training in perinatology.",
  "Hold a biennial congress among member countries.",
  "Support perinatal workshops among sub-regions.",
  "Encourage young investigators and FAOPS participation.",
];

const focusAreas = [
  {
    title: "Science of Perinatology",
    desc: "Advancing the discipline through research, education and evidence-based practice.",
    icon: "microscope",
  },
  {
    title: "Maternal & Neonatal Welfare",
    desc: "Championing outcomes for mothers, fetuses and newborns across our region.",
    icon: "heart",
  },
  {
    title: "Regional Collaboration",
    desc: "Uniting 19 member countries through congresses, workshops and joint research.",
    icon: "network",
  },
];

const galleryImages = [
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2023/10/faops-1-1-300x300.jpg",
    alt: "FAOPS Congress",
    tag: "Congress",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2025/09/HSK_2023_1_1-1-scaled.jpg",
    alt: "President Han-Suk Kim",
    tag: "Leadership",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2021/06/FAOPS_WB.png",
    alt: "FAOPS Logo",
    tag: "Federation",
  },
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sent" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sent");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  }

  return (
    <div
      data-testid="home-page"
      className="bg-white"
    >
            {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative overflow-hidden bg-white"
      >
        <div
          className="absolute inset-0 faops-grid-bg opacity-70"
          aria-hidden
        />

        <div
          className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-faops-primary/10 blur-3xl"
          aria-hidden
        />

        <div
          className="absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-faops-navy/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-20 lg:pb-36 lg:pt-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-faops-line bg-white/70 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-faops-navy backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-faops-primary" />
              Federation of Asia-Oceania Perinatal Societies · Est. 1978
            </div>

            <h1
              data-testid="hero-title"
              className="mt-6 text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-faops-navy md:text-[3.75rem] md:leading-[1.05]"
            >
              Dedicated to improving
              <span className="block">
                perinatal care in the{" "}
                <span className="relative inline-block text-faops-primary">
                  Asia-Oceania
                  <span className="absolute bottom-0 left-0 h-1 w-full rounded-full bg-faops-primary/30" />
                </span>{" "}
                region.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faops-secondary">
              FAOPS advances the science and art of perinatology while
              supporting maternal, fetal and neonatal welfare through research,
              education and collaboration across 19 member countries.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about-us"
                data-testid="hero-explore-btn"
                className="group inline-flex items-center gap-2 rounded-full bg-faops-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-faops-primary"
              >
                Explore FAOPS
                <ArrowRight />
              </Link>

              <Link
                href="/society-congresses"
                data-testid="hero-congress-btn"
                className="inline-flex items-center gap-2 rounded-full border border-faops-line bg-white px-6 py-3 text-sm font-medium text-faops-navy transition hover:border-faops-primary"
              >
                View Congresses
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div
            data-testid="stats-strip"
            className="mt-20 grid max-w-5xl grid-cols-2 divide-x divide-faops-line/70 border-y border-faops-line md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-testid={`stat-${stat.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={`px-5 py-6 faops-fade-up faops-delay-${index + 1}`}
              >
                <div className="flex items-center gap-2 text-faops-primary">
                  <StatIcon type={stat.icon} />
                </div>

                <p className="mt-3 text-2xl font-semibold tracking-tight text-faops-navy md:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-faops-text">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus */}
      <section
        data-testid="focus-section"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionTag>Our Focus</SectionTag>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
              Three pillars, one shared mission.
            </h2>
          </div>

          <p className="max-w-md text-faops-secondary">
            The work of the Federation is anchored in perinatal science,
            maternal and neonatal welfare, and regional collaboration.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <article
              key={area.title}
              data-testid={`focus-card-${index}`}
              className="group rounded-2xl border border-faops-line bg-white p-8 transition hover:-translate-y-1 hover:border-faops-primary hover:shadow-[0_20px_60px_-30px_rgba(41,68,129,0.35)]"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-faops-primary/10 text-faops-primary">
                <FocusIcon type={area.icon} />
              </div>

              <h3 className="text-lg font-semibold text-faops-navy">
                {area.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-faops-secondary">
                {area.desc}
              </p>

              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-faops-primary opacity-0 transition group-hover:opacity-100">
                Learn More
                <ArrowRight small />
              </div>
            </article>
          ))}
        </div>
      </section>
            {/* ABOUT + OBJECTIVES */}
      <section
        data-testid="about-section"
        className="border-y border-faops-line bg-faops-bg"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <SectionTag>About FAOPS</SectionTag>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
              A community, four decades in the making.
            </h2>

            <div className="mt-6 space-y-4 leading-relaxed text-faops-secondary">
              <p>
                Established in 1980 following the Alma Ata Declaration of 1978,
                the Federation of Asia-Oceania Perinatal Societies held its
                first congress in 1979 in Singapore.
              </p>

              <p>
                Across more than four decades, FAOPS has grown into a vibrant
                community of clinicians, researchers and educators dedicated to
                advancing perinatal care throughout Asia and Oceania.
              </p>
            </div>

            <Link
              href="/about-us"
              data-testid="about-more-btn"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-faops-navy transition hover:text-faops-primary"
            >
              Learn More
              <ArrowRight small />
            </Link>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-faops-line bg-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-faops-primary/10 text-faops-primary">
                  <BulletIcon />
                </div>

                <h3 className="text-lg font-semibold text-faops-navy">
                  FAOPS Objectives
                </h3>
              </div>

              <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {objectives.map((objective, index) => (
                  <li
                    key={objective}
                    data-testid={`objective-${index}`}
                    className="flex gap-3 text-sm text-faops-secondary"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-faops-primary/10 text-faops-primary">
                      <CheckSmall />
                    </span>

                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRESIDENT'S CORNER */}
      <section
        data-testid="president-section"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-faops-bg">
              <Image
                src="https://faopsperinatal.org/wp-content/uploads/2025/09/HSK_2023_1_1-1-scaled.jpg"
                alt="Han-Suk Kim"
                fill
                sizes="(max-width:1024px) 100vw,40vw"
                className="object-cover"
              />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-faops-line bg-white/95 px-4 py-3 backdrop-blur">
                <p className="text-xs uppercase tracking-wider text-faops-text">
                  President
                </p>

                <p className="text-sm font-semibold text-faops-navy">
                  Han-Suk Kim, M.D., Ph.D.
                </p>

                <p className="text-xs text-faops-secondary">
                  Republic of Korea
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <SectionTag>President's Corner</SectionTag>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
              A message from the President.
            </h2>

            <blockquote className="mt-6 space-y-4 border-l-2 border-faops-primary/40 pl-6 leading-relaxed text-faops-secondary">
              <p>
                Dear Colleagues, Friends and Visitors, welcome to the official
                website of the Federation of Asia-Oceania Perinatal Societies.
              </p>

              <p>
                FAOPS has long served as a vital platform for collaboration
                among perinatal health professionals across our diverse region,
                promoting research, education and policy advancement.
              </p>

              <p>
                Our mission is to bridge healthcare gaps, facilitate knowledge
                exchange and encourage innovations that benefit mothers,
                newborns and families throughout Asia and Oceania.
              </p>
            </blockquote>

            <Link
              href="/presidents-corner"
              data-testid="president-read-more"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-faops-navy transition hover:text-faops-primary"
            >
              Read Full Message
              <ArrowRight small />
            </Link>
          </div>
        </div>
      </section>
            {/* GALLERY */}
      <section
        data-testid="gallery-section"
        className="border-y border-faops-line bg-faops-bg"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionTag>Gallery</SectionTag>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
                FAOPS in view.
              </h2>

              <p className="mt-3 max-w-md text-faops-secondary">
                Moments from recent congresses and events across the
                Asia-Oceania region.
              </p>
            </div>

            <Link
              href="/gallery-grid"
              data-testid="gallery-all-btn"
              className="inline-flex items-center gap-2 text-sm font-medium text-faops-navy transition hover:text-faops-primary"
            >
              View All
              <ArrowRight small />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={`${image.tag}-${index}`}
                data-testid={`gallery-item-${index}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-faops-line bg-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width:768px)100vw,33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-faops-navy/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                <span className="absolute left-3 top-3 rounded-full border border-faops-line bg-white/90 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-faops-navy">
                  {image.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        data-testid="contact-section"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <SectionTag>Contact</SectionTag>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
              Get in touch with FAOPS.
            </h2>

            <p className="mt-4 max-w-md text-faops-secondary">
              For general enquiries, partnerships or membership questions,
              reach out to our secretariat.
            </p>

            <div className="mt-10 space-y-6">
              <ContactItem
                icon={<PhoneIcon />}
                label="Phone"
                value="(+91) 98220 96280"
                href="tel:+919822096280"
                testid="contact-phone"
              />

              <ContactItem
                icon={<MailIcon />}
                label="Email"
                value="info@faopsperinatal.org"
                href="mailto:info@faopsperinatal.org"
                testid="contact-email"
              />

              <ContactItem
                icon={<PinIcon />}
                label="Address"
                value="78, Railway Lines, Near St. Joseph High School Main Gate, Solapur, Maharashtra, India 413001"
                testid="contact-address"
              />
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <form
              data-testid="contact-form"
              onSubmit={handleSubmit}
              className="rounded-2xl border border-faops-line bg-white p-8"
            >
              <h3 className="text-lg font-semibold text-faops-navy">
                Send us a message
              </h3>

              <p className="mb-6 mt-1 text-sm text-faops-secondary">
                We'll get back to you as soon as possible.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  testid="input-name"
                />

                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  testid="input-phone"
                />
              </div>

              <div className="mt-4">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  testid="input-email"
                />
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-faops-navy">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  data-testid="input-message"
                  placeholder="Tell us more..."
                  className="w-full resize-none rounded-lg border border-faops-line bg-white px-4 py-3 text-sm text-faops-navy transition placeholder:text-faops-text/60 focus:border-faops-primary focus:outline-none focus:ring-2 focus:ring-faops-primary/20"
                />
              </div>

              {status === "error" && (
                <p
                  data-testid="form-error"
                  className="mt-4 text-sm text-red-600"
                >
                  Please fill in your name, email and message.
                </p>
              )}

              {status === "sent" && (
                <p
                  data-testid="form-success"
                  className="mt-4 text-sm text-emerald-600"
                >
                  Thanks — your message has been recorded.
                </p>
              )}

              <button
                type="submit"
                data-testid="submit-btn"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-faops-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-faops-primary"
              >
                Send Message
                <ArrowRight />
              </button>
            </form>
          </div>
        </div>
      </section>
          </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Helper Components                             */
/* -------------------------------------------------------------------------- */

function SectionTag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-faops-primary">
      <span className="h-px w-6 bg-faops-primary" />
      {children}
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  testid?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  testid,
}: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-faops-navy">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        data-testid={testid}
        className="w-full rounded-lg border border-faops-line bg-white px-4 py-3 text-sm text-faops-navy transition placeholder:text-faops-text/60 focus:border-faops-primary focus:outline-none focus:ring-2 focus:ring-faops-primary/20"
      />
    </div>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  testid?: string;
}

function ContactItem({
  icon,
  label,
  value,
  href,
  testid,
}: ContactItemProps) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-faops-navy/5 text-faops-navy">
        {icon}
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-widest text-faops-text">
          {label}
        </p>

        <p className="mt-0.5 text-sm leading-relaxed text-faops-navy">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        data-testid={testid}
        className="flex items-start gap-4 transition hover:text-faops-primary"
      >
        {content}
      </a>
    );
  }

  return (
    <div
      data-testid={testid}
      className="flex items-start gap-4"
    >
      {content}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Icons                                    */
/* -------------------------------------------------------------------------- */

function ArrowRight({
  small = false,
}: {
  small?: boolean;
}) {
  const size = small ? 14 : 16;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition group-hover:translate-x-0.5"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function CheckSmall() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function BulletIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 4.11 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 5 5l1.27-1.27a2 2 0 0 1 2.11-.45 12.7 12.7 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function StatIcon({
  type,
}: {
  type: string;
}) {
  const iconClassName = "h-4 w-4";

  switch (type) {
    case "calendar":
      return <CalendarIcon className={iconClassName} />;
    case "shield":
      return <ShieldIcon className={iconClassName} />;
    case "globe":
      return <GlobeIcon className={iconClassName} />;
    case "users":
      return <UsersIcon className={iconClassName} />;
    default:
      return <SparklesIcon className={iconClassName} />;
  }
}

function FocusIcon({
  type,
}: {
  type: string;
}) {
  switch (type) {
    case "microscope":
      return <MicroscopeIcon className="h-5 w-5" />;
    case "heart":
      return <HeartIcon className="h-5 w-5" />;
    case "network":
      return <NetworkIcon className="h-5 w-5" />;
    default:
      return <SparklesIcon className="h-5 w-5" />;
  }
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function MicroscopeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 18h8" />
      <path d="M6 3v5l-2 2" />
      <path d="M6 8h2" />
      <path d="M14 3v5l2 2" />
      <path d="M14 8h-2" />
      <path d="M12 13a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 20s-7-4.35-7-10a4.5 4.5 0 0 1 7.5-3.2A4.5 4.5 0 0 1 19 10c0 5.65-7 10-7 10Z" />
    </svg>
  );
}

function NetworkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="7" r="3" />
      <circle cx="18" cy="7" r="3" />
      <circle cx="12" cy="17" r="3" />
      <path d="M8.6 9.5 10.8 15" />
      <path d="M15.4 9.5 13.2 15" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3 1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3Z" />
      <path d="m19 15 0.6 2.4L22 18l-2.4 0.6L19 21l-0.6-2.4L16 18l2.4-0.6L19 15Z" />
    </svg>
  );
}