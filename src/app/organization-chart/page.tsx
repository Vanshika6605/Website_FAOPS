import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Organization Chart | FAOPS",
};

export default function OrganizationChartPage() {
  return (
    <div data-testid="org-chart-page" className="bg-white">
      <PageHeader
        tag="More"
        title={<>Organization Chart.</>}
        intro="The structural hierarchy of the Federation of Asia-Oceania Perinatal Societies."
        crumbs={[
          { label: "Organization Chart" },
        ]}
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col items-center">
          
          {/* General Assembly */}
          <div className="w-64 rounded-xl border-2 border-faops-primary bg-faops-primary/10 p-4 text-center font-bold text-faops-navy">
            General Assembly
          </div>
          
          <div className="h-8 w-0.5 bg-faops-line"></div>
          
          {/* Executive Council */}
          <div className="w-64 rounded-xl border border-faops-navy bg-white p-4 text-center font-semibold text-faops-navy shadow-sm">
            Executive Council
          </div>
          
          <div className="h-8 w-0.5 bg-faops-line"></div>
          
          {/* Branching */}
          <div className="flex w-full max-w-3xl justify-between border-t-2 border-faops-line">
            
            {/* Committees */}
            <div className="relative flex flex-col items-center pt-8">
              <div className="absolute -top-[2px] h-8 w-0.5 bg-faops-line"></div>
              <div className="w-48 rounded-xl border border-faops-line bg-faops-bg p-4 text-center font-semibold text-faops-navy">
                Committees
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="w-48 rounded border border-faops-line bg-white p-2 text-center text-sm text-faops-secondary">Scientific</div>
                <div className="w-48 rounded border border-faops-line bg-white p-2 text-center text-sm text-faops-secondary">Education</div>
                <div className="w-48 rounded border border-faops-line bg-white p-2 text-center text-sm text-faops-secondary">Membership</div>
                <div className="w-48 rounded border border-faops-line bg-white p-2 text-center text-sm text-faops-secondary">Finance</div>
              </div>
            </div>

            {/* Secretariat */}
            <div className="relative flex flex-col items-center pt-8">
              <div className="absolute -top-[2px] h-8 w-0.5 bg-faops-line"></div>
              <div className="w-48 rounded-xl border border-faops-line bg-faops-bg p-4 text-center font-semibold text-faops-navy">
                Secretariat
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="w-48 rounded border border-faops-line bg-white p-2 text-center text-sm text-faops-secondary">Secretary General</div>
                <div className="w-48 rounded border border-faops-line bg-white p-2 text-center text-sm text-faops-secondary">Deputy SG (East)</div>
                <div className="w-48 rounded border border-faops-line bg-white p-2 text-center text-sm text-faops-secondary">Deputy SG (West)</div>
                <div className="w-48 rounded border border-faops-line bg-white p-2 text-center text-sm text-faops-secondary">Deputy SG (Central)</div>
              </div>
            </div>

            {/* Advisory Board */}
            <div className="relative flex flex-col items-center pt-8">
              <div className="absolute -top-[2px] h-8 w-0.5 bg-faops-line"></div>
              <div className="w-48 rounded-xl border border-faops-line bg-faops-bg p-4 text-center font-semibold text-faops-navy">
                Advisory Board
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="w-48 rounded border border-faops-line bg-white p-2 text-center text-sm text-faops-secondary">Past Presidents</div>
                <div className="w-48 rounded border border-faops-line bg-white p-2 text-center text-sm text-faops-secondary">Senior Advisors</div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
