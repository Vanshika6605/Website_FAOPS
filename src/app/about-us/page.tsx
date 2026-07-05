import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SectionTag, Card, ArrowRight } from "@/components/ui";

export const metadata = {
  title: "About Us · FAOPS",
};

const pillars = [
  {
    tag: "History",
    title: "Founded on the Alma Ata Declaration",
    body: "Established in 1980 following the Alma Ata Declaration of 1978, the Federation of Asia-Oceania Perinatal Societies held its first congress in 1979 in Singapore.",
    href: "/faops-history-2",
  },
  {
    tag: "Vision",
    title: "A healthier start, across a region",
    body: "To be the leading platform for perinatal science and cooperation across Asia and Oceania — improving outcomes for every mother, fetus and newborn.",
    href: "/faops-vision",
  },
  {
    tag: "Mission",
    title: "Science, welfare, and collaboration",
    body: "Advance the science and art of perinatology, promote maternal, fetal and neonatal welfare, and foster cooperation across member societies.",
    href: "/faops-mission",
  },
  {
    tag: "Values",
    title: "Rooted in professionalism",
    body: "Scientific integrity, equity of access, regional cooperation and mentorship of the next generation of perinatal leaders.",
    href: "/faops-values",
  },
];

const highlights = [
  { value: "45+", label: "Years of federation" },
  { value: "19", label: "Member countries" },
  { value: "4", label: "Sub-regions" },
  { value: "Biennial", label: "Regional congress" },
];

export default function AboutUs() {
  return (
    <div data-testid="about-us-page" className="bg-white">
      <PageHeader
        tag="About FAOPS"
        title={<>A community, four decades in the making.</>}
        intro="The Federation of Asia-Oceania Perinatal Societies unites 19 member countries under a shared mission — to advance perinatal science and improve outcomes across our diverse region."
        crumbs={[{ label: "About Us" }]}
      >
        <div className="grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              data-testid={`about-highlight-${highlight.label
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="rounded-xl border border-faops-line bg-white/70 px-4 py-3 backdrop-blur"
            >
              <p className="text-xl font-semibold text-faops-navy">
                {highlight.value}
              </p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wider text-faops-text">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>
      </PageHeader>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTag>Overview</SectionTag>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-faops-navy">
            Governed by council, driven by community.
          </h2>

          <div className="mt-6 space-y-4 leading-relaxed text-faops-secondary">
            <p>
              FAOPS is governed by the FAOPS Constitution and By-Laws. Its
              operations are led by a Council composed of the Immediate Past
              President, President, President-Elect, Treasurer, Secretary
              General and three Deputy Secretary Generals representing the
              Eastern, Western and Central regions.
            </p>

            <p>
              Across forty-five years, the Federation has grown into a vibrant
              network of researchers, clinicians and educators connected by
              shared standards, congresses, workshops and mentorship.
            </p>
          </div>

          <Link
            href="/the-council-2"
            data-testid="about-council-link"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-faops-navy transition hover:text-faops-primary"
          >
            Meet the Council
            <ArrowRight small />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {pillars.map((pillar, index) => (
            <Card
              key={pillar.tag}
              className="group"
              data-testid={`pillar-${pillar.tag.toLowerCase()}`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-faops-primary">
                {pillar.tag}
              </p>

              <h3 className="mt-3 text-lg font-semibold leading-snug text-faops-navy">
                {pillar.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-faops-secondary">
                {pillar.body}
              </p>

              <Link
                href={pillar.href}
                data-testid={`pillar-link-${index}`}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-faops-primary opacity-0 transition group-hover:opacity-100"
              >
                Learn more
                <ArrowRight small />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-faops-line bg-faops-bg">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <SectionTag>Join us</SectionTag>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
            Interested in FAOPS membership or research collaboration?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-faops-secondary">
            Reach out to our secretariat — we welcome enquiries from societies,
            researchers and public health institutions.
          </p>

          <Link
            href="/contact-us"
            data-testid="about-contact-cta"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-faops-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-faops-primary"
          >
            Contact FAOPS
            <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}