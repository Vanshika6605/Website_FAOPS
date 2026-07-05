import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cookie Policy | FAOPS",
};

export default function CookiePolicyPage() {
  return (
    <div data-testid="cookie-page" className="bg-white">
      <PageHeader
        tag="Legal"
        title={<>Cookie Policy (EU).</>}
        intro="Information about how we use cookies and similar technologies."
        crumbs={[
          { label: "Cookie Policy" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionTag>Tracking Technologies</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy">
          How We Use Cookies
        </h2>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-faops-secondary">
          <p>
            This Cookie Policy explains what cookies are, how we use them on the FAOPS website, and your choices regarding their use.
          </p>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">What Are Cookies?</h3>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
          </p>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">Types of Cookies We Use</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-faops-navy">Strictly Necessary Cookies:</strong> These are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.
            </li>
            <li>
              <strong className="text-faops-navy">Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works.
            </li>
            <li>
              <strong className="text-faops-navy">Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.
            </li>
          </ul>

          <h3 className="pt-4 text-xl font-semibold text-faops-navy">Managing Cookies</h3>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>
        </div>
      </section>
    </div>
  );
}
