import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Vision | FAOPS",
};

export default function VisionPage() {
  return (
    <div data-testid="vision-page" className="bg-white">
      <PageHeader
        tag="Vision"
        title={<>A healthier start, across a region.</>}
        intro="Our vision is to be the leading platform for perinatal science and cooperation across Asia and Oceania — improving outcomes for every mother, fetus, and newborn."
        crumbs={[
          {
            label: "About Us",
            href: "/about-us",
          },
          {
            label: "Vision",
          },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionTag>Looking Forward</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
          Empowering the Future of Perinatal Care
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-faops-secondary">
          <p>
            At the Federation of Asia-Oceania Perinatal Societies (FAOPS), our vision stretches beyond the immediate clinical setting. We envision a future where every pregnancy and childbirth across the vast expanses of Asia and Oceania is supported by the highest standards of perinatal care, irrespective of geographical or economic boundaries.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 mt-8 mb-12">
            <div className="rounded-2xl border border-faops-line bg-faops-bg p-8">
              <h3 className="mb-3 text-xl font-semibold text-faops-navy">Regional Equality</h3>
              <p className="text-base">
                Bridging the healthcare disparity gap across our diverse 19 member nations by standardizing care protocols and ensuring access to life-saving research.
              </p>
            </div>
            <div className="rounded-2xl border border-faops-line bg-faops-bg p-8">
              <h3 className="mb-3 text-xl font-semibold text-faops-navy">Innovation Hub</h3>
              <p className="text-base">
                Fostering a dynamic environment where the latest breakthroughs in perinatology are freely shared, debated, and implemented to save lives.
              </p>
            </div>
          </div>

          <p>
            By cultivating a robust network of medical professionals, researchers, and policymakers, we aim to translate this vision into tangible reality. We believe that by providing a healthier start for our youngest and most vulnerable, we lay the foundation for healthier societies across the globe.
          </p>
        </div>
      </section>
    </div>
  );
}
