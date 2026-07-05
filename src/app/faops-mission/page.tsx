import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mission | FAOPS",
};

export default function MissionPage() {
  return (
    <div data-testid="mission-page" className="bg-white">
      <PageHeader
        tag="Mission"
        title={<>Science, welfare, and collaboration.</>}
        intro="To advance the science and art of perinatology, promote maternal, fetal, and neonatal welfare, and foster cooperation across member societies."
        crumbs={[
          {
            label: "About Us",
            href: "/about-us",
          },
          {
            label: "Mission",
          },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionTag>Our Core Directives</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
          Advancing Perinatal Science Together
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-faops-secondary">
          <p>
            The mission of FAOPS is multifaceted, driven by a commitment to elevate the standard of care for mothers and their newborns throughout the Asia-Oceania region. 
          </p>

          <ul className="my-8 space-y-4">
            <li className="flex items-start gap-4 rounded-xl border border-faops-line p-6 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-faops-primary/10 text-faops-primary">
                1
              </div>
              <div>
                <h3 className="font-semibold text-faops-navy">Promote Science and Art</h3>
                <p className="mt-1 text-base">We strive to advance the scientific discipline and clinical practice of perinatology through continuous education and research dissemination.</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 rounded-xl border border-faops-line p-6 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-faops-primary/10 text-faops-primary">
                2
              </div>
              <div>
                <h3 className="font-semibold text-faops-navy">Maternal and Neonatal Welfare</h3>
                <p className="mt-1 text-base">We advocate vigorously for policies and practices that champion the health and welfare of mothers, fetuses, and newborns.</p>
              </div>
            </li>

            <li className="flex items-start gap-4 rounded-xl border border-faops-line p-6 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-faops-primary/10 text-faops-primary">
                3
              </div>
              <div>
                <h3 className="font-semibold text-faops-navy">Regional Cooperation</h3>
                <p className="mt-1 text-base">We serve as a liaison connecting various perinatal organizations, fostering a spirit of mutual support and shared knowledge across our 19 member nations.</p>
              </div>
            </li>
          </ul>

          <p>
            Through our biennial congresses, regional workshops, and active support for young investigators, we are actively working every day to fulfill these directives and build a stronger, healthier future.
          </p>
        </div>
      </section>
    </div>
  );
}
