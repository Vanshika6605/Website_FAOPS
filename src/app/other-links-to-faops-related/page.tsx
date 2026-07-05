import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Useful Links | FAOPS",
};

const links = [
  {
    title: "World Health Organization (WHO)",
    desc: "Global health data, guidelines, and initiatives for maternal and newborn care.",
    href: "https://www.who.int"
  },
  {
    title: "UNICEF",
    desc: "Information regarding the welfare and rights of children worldwide.",
    href: "https://www.unicef.org"
  },
  {
    title: "World Association of Perinatal Medicine (WAPM)",
    desc: "Our global counterpart promoting the science of perinatal medicine worldwide.",
    href: "https://www.wapm.info"
  },
  {
    title: "FIGO",
    desc: "International Federation of Gynecology and Obstetrics.",
    href: "https://www.figo.org"
  }
];

export default function UsefulLinksPage() {
  return (
    <div data-testid="links-page" className="bg-white">
      <PageHeader
        tag="More"
        title={<>Useful Links.</>}
        intro="A curated collection of resources and allied international organizations."
        crumbs={[
          { label: "Useful Links" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionTag>Resources</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
          Related Organizations
        </h2>

        <div className="mt-8 grid gap-6">
          {links.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-faops-line bg-white p-6 transition hover:-translate-y-1 hover:border-faops-primary hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-faops-navy group-hover:text-faops-primary transition">
                    {link.title}
                  </h3>
                  <p className="mt-2 text-faops-secondary">
                    {link.desc}
                  </p>
                </div>
                <div className="text-faops-line group-hover:text-faops-primary transition shrink-0 ml-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
