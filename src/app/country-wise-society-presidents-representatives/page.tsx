import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Country Details | FAOPS",
};

const regions = [
  {
    name: "Central Region",
    countries: ["Cambodia", "Indonesia", "Malaysia", "Singapore", "Thailand", "Vietnam"]
  },
  {
    name: "West Region",
    countries: ["Afghanistan", "Bangladesh", "India", "Nepal", "Pakistan", "Sri Lanka", "United Arab Emirates"]
  },
  {
    name: "East Region",
    countries: ["Japan", "Korea", "Mongolia", "Philippines", "Taiwan"]
  },
  {
    name: "Oceania Region",
    countries: ["Australia & New Zealand"]
  }
];

export default function CountryDetailsPage() {
  return (
    <div data-testid="country-details-page" className="bg-white">
      <PageHeader
        tag="More"
        title={<>Country-Wise Society Presidents.</>}
        intro="An overview of the member societies representing the 19 nations within the FAOPS network."
        crumbs={[
          { label: "Country Details" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionTag>Member Societies</SectionTag>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-faops-navy md:text-3xl">
              Our Regional Network.
            </h2>
          </div>
          <p className="max-w-md text-faops-secondary">
            Each member nation is represented by their respective national perinatal society president or appointed representative.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {regions.map((region) => (
            <div key={region.name}>
              <h3 className="mb-4 border-b border-faops-line pb-2 text-lg font-semibold text-faops-primary uppercase tracking-widest">
                {region.name}
              </h3>
              <ul className="space-y-3">
                {region.countries.map((country) => (
                  <li key={country} className="flex items-center justify-between rounded-xl border border-faops-line bg-faops-bg px-4 py-3">
                    <span className="font-semibold text-faops-navy">{country}</span>
                    <span className="text-xs text-faops-secondary uppercase tracking-wider bg-white px-2 py-1 rounded border border-faops-line">View Rep</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-sm italic text-faops-text text-center">
          Note: Detailed contact information for individual society presidents is maintained in the internal FAOPS directory.
        </p>
      </section>
    </div>
  );
}
