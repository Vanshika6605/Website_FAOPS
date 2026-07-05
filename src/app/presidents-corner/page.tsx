import Image from "next/image";
import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import { SectionTag, ArrowRight } from "@/components/ui";

export const metadata = {
  title: "President's Corner · FAOPS",
};

const paragraphs = [
  "Dear Colleagues, Friends, and Visitors, welcome to the official website of the Federation of Asia-Oceania Perinatal Societies (FAOPS).",
  "FAOPS has long served as a vital platform for collaboration among perinatal health professionals across our diverse region — promoting research, education, and policy advancement in maternal and neonatal care.",
  "The Asia-Oceania region presents both unique challenges and significant opportunities in the field of perinatal medicine. From rapidly evolving healthcare systems to disparities in resources and outcomes, our mission is to bridge these gaps, facilitate the exchange of knowledge, and foster innovations that ultimately benefit mothers, infants, and families in all member countries.",
  "As the President, I am committed to strengthening our collective voice and expanding FAOPS's presence within the global perinatal community. We will continue to support academic congresses, practical workshops, and educational initiatives that empower healthcare providers throughout the region.",
  "I warmly invite you to explore our website, engage with colleagues across borders, and join us in our shared mission to improve perinatal health outcomes in Asia and Oceania.",
];

export default function PresidentsCorner() {
  return (
    <div data-testid="president-page" className="bg-white">
      <PageHeader
        tag="President's Corner"
        title={<>A message from the President.</>}
        intro="A note from Han-Suk Kim, M.D., Ph.D. — President of the Federation of Asia-Oceania Perinatal Societies."
        crumbs={[{ label: "President's Corner" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12">
        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-faops-bg">
              <Image
                src="https://faopsperinatal.org/wp-content/uploads/2025/09/HSK_2023_1_1-1-scaled.jpg"
                alt="Han-Suk Kim, President of FAOPS"
                fill
                sizes="(max-width:1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="mt-4 rounded-xl border border-faops-line p-5">
              <p className="text-[11px] uppercase tracking-widest text-faops-text">
                President
              </p>

              <h3 className="mt-1 text-lg font-semibold text-faops-navy">
                Han-Suk Kim, M.D., Ph.D.
              </h3>

              <p className="text-sm text-faops-secondary">
                Republic of Korea
              </p>

              <p className="mt-3 text-xs leading-relaxed text-faops-secondary">
                President,
                <br />
                Federation of Asia-Oceania Perinatal Societies (FAOPS)
              </p>
            </div>
          </div>
        </aside>

        {/* Content */}
        <article className="lg:col-span-8">
          <SectionTag>Message</SectionTag>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-faops-navy md:text-3xl">
            Bridging gaps, sharing knowledge, advancing care.
          </h2>

          <div
            data-testid="president-message"
            className="mt-8 space-y-5 leading-relaxed text-faops-secondary"
          >
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="border-t border-faops-line pt-4">
              <p className="font-semibold text-faops-navy">
                Warm regards,
                <br />
                Han-Suk Kim, M.D., Ph.D.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/about-us"
              data-testid="president-about-cta"
              className="group inline-flex items-center gap-2 rounded-full bg-faops-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-faops-primary"
            >
              About FAOPS
              <ArrowRight />
            </Link>

            <Link
              href="/the-council-2"
              data-testid="president-council-cta"
              className="inline-flex items-center gap-2 rounded-full border border-faops-line bg-white px-6 py-3 text-sm font-medium text-faops-navy transition hover:border-faops-navy"
            >
              Meet the Council
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}