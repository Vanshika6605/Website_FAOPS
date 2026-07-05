const fs = require('fs');
const path = require('path');

const regions = {
  "Central Region": ["cambodia", "indonesia", "malaysia-2", "singapore", "thailand", "vietnam"],
  "West Region": ["afghanistan", "bangladesh", "india", "nepal-2", "pakistan", "sri-lanka", "united-arab-emirates"],
  "East Region": ["japan", "korea", "mangolia", "philippines", "taiwan"],
  "Oceania Region": ["australia-new-zealand"]
};

function formatName(slug) {
  if (slug === 'malaysia-2') return 'Malaysia';
  if (slug === 'nepal-2') return 'Nepal';
  if (slug === 'mangolia') return 'Mongolia'; // Note spelling in route
  if (slug === 'australia-new-zealand') return 'Australia & New Zealand';
  if (slug === 'united-arab-emirates') return 'United Arab Emirates';
  if (slug === 'sri-lanka') return 'Sri Lanka';
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

const baseDir = path.join(__dirname, '..', 'src', 'app');

for (const [regionName, slugs] of Object.entries(regions)) {
  for (const slug of slugs) {
    const countryName = formatName(slug);
    const dirPath = path.join(baseDir, slug);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const componentName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('').replace(/[0-9]/g, '');

    const code = `import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "${countryName} | FAOPS",
};

export default function ${componentName}Page() {
  return (
    <div data-testid="${slug}-page" className="bg-white">
      <PageHeader
        tag="Membership"
        title={<>${countryName}.</>}
        intro="Representing the perinatal community of ${countryName} within the ${regionName}."
        crumbs={[
          { label: "${countryName}" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionTag>National Society</SectionTag>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-faops-navy md:text-4xl">
          Perinatal Society of ${countryName}
        </h2>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-faops-secondary">
          <p>
            The national society of ${countryName} is a proud member of the Federation of Asia-Oceania Perinatal Societies (FAOPS). Working together with the federation, the society aims to advance the science and art of perinatology within the nation.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 mt-8 mb-12">
            <div className="rounded-2xl border border-faops-line bg-faops-bg p-8">
              <h3 className="mb-3 text-xl font-semibold text-faops-navy">President / Representative</h3>
              <p className="text-base font-semibold">TBA</p>
              <p className="text-sm">President of the National Society</p>
            </div>
            <div className="rounded-2xl border border-faops-line bg-faops-bg p-8">
              <h3 className="mb-3 text-xl font-semibold text-faops-navy">Contact Information</h3>
              <p className="text-base">Details regarding the society's secretariat, website, and direct contact information are maintained in the internal FAOPS directory.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
`;
    fs.writeFileSync(path.join(dirPath, 'page.tsx'), code);
  }
}
console.log("Created all 19 pages successfully!");
