import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms and Conditions | FAOPS",
};

export default function TermsPage() {
  return (
    <div data-testid="terms-page" className="bg-white">
      <PageHeader
        tag="Legal"
        title={<>Terms and Conditions.</>}
        intro="Rules and regulations for the use of the FAOPS website."
        crumbs={[
          { label: "Terms and Conditions" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionTag>Usage Guidelines</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy">
          Website Terms of Use
        </h2>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-faops-secondary">
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use the FAOPS website if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">1. Intellectual Property Rights</h3>
          <p>
            Unless otherwise stated, FAOPS and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from the FAOPS website for your own personal, educational, or non-commercial use subjected to restrictions set in these terms.
          </p>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">2. Medical Disclaimer</h3>
          <p>
            The information provided on this website, including research abstracts and congress materials, is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">3. External Links</h3>
          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled by FAOPS. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
          </p>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">4. Modifications</h3>
          <p>
            FAOPS reserves the right to revise these terms and conditions at any time. By using this website, you are expected to review these terms on a regular basis.
          </p>
        </div>
      </section>
    </div>
  );
}
