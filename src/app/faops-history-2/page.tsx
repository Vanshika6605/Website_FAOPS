import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "History | FAOPS",
};

export default function HistoryPage() {
  return (
    <div data-testid="history-page" className="bg-white">
      <PageHeader
        tag="History"
        title={<>A legacy rooted in the Alma Ata Declaration.</>}
        intro="Founded on the principles of health for all, the Federation of Asia-Oceania Perinatal Societies began its journey in the late 1970s."
        crumbs={[
          {
            label: "About Us",
            href: "/about-us",
          },
          {
            label: "History",
          },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionTag>Our Origins</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
          The Genesis of FAOPS
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-faops-secondary">
          <p>
            The Federation of Asia-Oceania Perinatal Societies (FAOPS) was formally established in 1980, inspired by the historical Alma Ata Declaration of 1978. The declaration, which highlighted primary health care as the key to attaining the goal of "Health for All," served as a powerful catalyst for leaders in perinatology across the region.
          </p>
          <p>
            Even prior to its formal establishment, the groundwork for FAOPS was laid when the first regional congress took place in Singapore in 1979. This inaugural gathering brought together visionaries who recognized the critical need for a unified body to address maternal, fetal, and neonatal welfare across the diverse landscapes of Asia and Oceania.
          </p>
          <p>
            Since those early days, the Federation has expanded its reach, growing to encompass 19 member countries divided across four primary sub-regions: Central, East, West, and Oceania. 
          </p>
          
          <div className="my-12 rounded-2xl border-l-4 border-faops-primary bg-faops-bg p-8">
            <h3 className="mb-4 text-xl font-semibold text-faops-navy">Milestones of Progress</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-semibold text-faops-primary">1978</span>
                <span>The Alma Ata Declaration sets the global health foundation.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-faops-primary">1979</span>
                <span>First regional perinatal congress held in Singapore.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-faops-primary">1980</span>
                <span>Official formalization and establishment of FAOPS.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-faops-primary">Present</span>
                <span>Growing into a massive collaborative network of 19 member nations organizing biennial congresses and regional workshops.</span>
              </li>
            </ul>
          </div>
          
          <p>
            Today, FAOPS continues to honor its roots by steadfastly promoting the science and art of perinatology, bridging the gap between advanced research and practical clinical application in some of the most dynamic and rapidly developing health sectors in the world.
          </p>
        </div>
      </section>
    </div>
  );
}
