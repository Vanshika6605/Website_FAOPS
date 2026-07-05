import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Program | FAOPS",
};

export default function ProgramPage() {
  return (
    <div data-testid="program-page" className="bg-white">
      <PageHeader
        tag="Program"
        title={<>Initiatives and activities.</>}
        intro="FAOPS conducts a variety of programs aimed at continuous medical education, research collaboration, and regional advocacy."
        crumbs={[
          {
            label: "About Us",
            href: "/about-us",
          },
          {
            label: "Program",
          },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionTag>Our Initiatives</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
          Fostering Excellence Through Action
        </h2>

        <div className="mt-8 space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-faops-navy">Biennial Congresses</h3>
            <p className="mt-4 text-lg leading-relaxed text-faops-secondary">
              The cornerstone of our program is the FAOPS Biennial Congress. Held every two years in a different member country, these congresses gather thousands of delegates, renowned experts, and young researchers to share groundbreaking findings, discuss challenging cases, and forge lifelong professional relationships.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-faops-navy">Sub-Regional Workshops</h3>
            <p className="mt-4 text-lg leading-relaxed text-faops-secondary">
              To address specific local challenges, FAOPS supports and organizes targeted workshops within our Central, East, West, and Oceania sub-regions. These events offer hands-on training and specialized knowledge tailored to the unique demographic and healthcare infrastructure of the host nations.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-faops-navy">Young Investigator Awards</h3>
            <p className="mt-4 text-lg leading-relaxed text-faops-secondary">
              We strongly encourage the participation of young minds in the field of perinatology. Our Young Investigator awards recognize outstanding research contributions by emerging scientists, providing them with funding, recognition, and the opportunity to present their work on an international stage.
            </p>
          </div>
          
          <div className="rounded-2xl border border-faops-line bg-faops-primary/5 p-8 text-center">
            <h4 className="text-xl font-semibold text-faops-navy">Get Involved</h4>
            <p className="mx-auto mt-3 max-w-2xl text-faops-secondary">
              Are you interested in participating in our programs, attending a workshop, or presenting your research? Connect with your local member society or contact the FAOPS secretariat for upcoming opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
