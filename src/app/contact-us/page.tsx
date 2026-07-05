"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import PageHeader from "@/components/PageHeader";
import { SectionTag, ArrowRight } from "@/components/ui";

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: FormEvent) {
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
    <div data-testid="contact-page" className="bg-white">
      <PageHeader
        tag="Contact"
        title={<>Get in touch with FAOPS.</>}
        intro="For general enquiries, partnerships or membership questions, reach out to the FAOPS secretariat."
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12">
        {/* Contact Details */}
        <div className="lg:col-span-5">
          <SectionTag>Reach out</SectionTag>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-faops-navy md:text-3xl">
            We're here to help.
          </h2>

          <div className="mt-10 space-y-6">
            {/* Phone */}
            <a
              href="tel:+919822096280"
              data-testid="contact-page-phone"
              className="group flex items-start gap-4 transition hover:text-faops-primary"
            >
              <IconContainer>
                <PhoneIcon />
              </IconContainer>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-faops-text">
                  Phone
                </p>

                <p className="mt-0.5 text-sm text-faops-navy">
                  (+91) 98220 96280
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@faopsperinatal.org"
              data-testid="contact-page-email"
              className="group flex items-start gap-4 transition hover:text-faops-primary"
            >
              <IconContainer>
                <MailIcon />
              </IconContainer>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-faops-text">
                  Email
                </p>

                <p className="mt-0.5 text-sm text-faops-navy">
                  info@faopsperinatal.org
                </p>
              </div>
            </a>

            {/* Address */}
            <div
              data-testid="contact-page-address"
              className="flex items-start gap-4"
            >
              <IconContainer>
                <LocationIcon />
              </IconContainer>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-faops-text">
                  Address
                </p>

                <p className="mt-0.5 text-sm leading-relaxed text-faops-navy">
                  78, Railway Lines,
                  <br />
                  Near St. Joseph High School Main Gate,
                  <br />
                  Solapur, Maharashtra 413001,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <form
            data-testid="contact-page-form"
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
                testid="cp-input-name"
              />

              <Field
                label="Phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                testid="cp-input-phone"
              />
            </div>

            <div className="mt-4">
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                testid="cp-input-email"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-faops-navy">
                Message
              </label>

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                data-testid="cp-input-message"
                placeholder="Tell us more..."
                className="w-full resize-none rounded-lg border border-faops-line bg-white px-4 py-3 text-sm text-faops-navy transition placeholder:text-faops-text/60 focus:border-faops-primary focus:outline-none focus:ring-2 focus:ring-faops-primary/20"
              />
            </div>

            {status === "error" && (
              <p
                data-testid="cp-form-error"
                className="mt-4 text-sm text-red-600"
              >
                Please fill in your name, email, and message.
              </p>
            )}

            {status === "sent" && (
              <p
                data-testid="cp-form-success"
                className="mt-4 text-sm text-emerald-600"
              >
                Thanks — your message has been recorded.
              </p>
            )}

            <button
              type="submit"
              data-testid="cp-submit-btn"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-faops-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-faops-primary"
            >
              Send Message
              <ArrowRight />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  testid?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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

function IconContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-faops-navy/5 text-faops-navy">
      {children}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 4.11 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 5 5l1.27-1.27a2 2 0 0 1 2.11-.45 12.7 12.7 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M22 6l-10 7L2 6"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}