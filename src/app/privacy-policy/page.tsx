import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | FAOPS",
};

export default function PrivacyPolicyPage() {
  return (
    <div data-testid="privacy-page" className="bg-white">
      <PageHeader
        tag="Legal"
        title={<>Privacy Policy.</>}
        intro="How FAOPS collects, uses, and protects your personal information."
        crumbs={[
          { label: "Privacy Policy" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionTag>Data Protection</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy">
          Your Privacy is Important to Us
        </h2>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-faops-secondary">
          <p>
            The Federation of Asia-Oceania Perinatal Societies (FAOPS) is committed to protecting the privacy of our members, congress attendees, and website visitors. This Privacy Policy explains our data practices.
          </p>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">1. Information We Collect</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you register for a congress, submit research abstracts, subscribe to our newsletters, or contact us. This may include your name, email address, professional affiliation, and contact details.
          </p>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">2. How We Use Your Information</h3>
          <p>
            We use the information we collect primarily to facilitate our core mission: organizing scientific congresses, managing society memberships, and distributing relevant educational materials. We do not sell your personal data to third parties.
          </p>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">3. Data Security</h3>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">4. Your Rights</h3>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, or delete the personal data we hold about you. If you wish to exercise these rights, please contact the FAOPS secretariat.
          </p>

          <div className="mt-12 rounded-xl border border-faops-line bg-faops-bg p-6 text-sm">
            <p className="font-semibold text-faops-navy">Contacting Us Regarding Privacy</p>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, please contact us at info@faopsperinatal.org.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
