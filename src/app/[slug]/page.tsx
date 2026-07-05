"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Predefined rich content for all FAOPS routes
const pageData: Record<
  string,
  {
    title: string;
    subtitle: string;
    category?: string;
    content: React.ReactNode;
  }
> = {
  "presidents-corner": {
    category: "Office Bearers",
    title: "President's Corner",
    subtitle: "A Message from the FAOPS President",
    content: (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-faops-primary shadow-lg flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-faops-navy to-faops-primary flex items-center justify-center text-white text-4xl font-bold">
              FAOPS
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-faops-navy mb-2">Message from the Desk of the President</h3>
            <p className="text-gray-600 leading-relaxed italic mb-4">
              "Dear Colleagues and Friends, It is my distinct privilege to greet you all as we work collectively to elevate the standards of perinatal care across the Asia-Oceania region. Through collaboration, continuous education, and research, we seek to reduce maternal and neonatal mortality and champion the welfare of mothers and newborns."
            </p>
            <p className="text-gray-800 font-semibold">President, FAOPS (2024-2026)</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-lg text-faops-navy mb-3">Key Focus Areas</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Standardization of perinatal protocols</li>
              <li>Empowering young neonatologists and obstetricians</li>
              <li>Collaborative cross-border clinical research</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-lg text-faops-navy mb-3">Recent Updates</h4>
            <p className="text-gray-600">
              Ongoing preparation for the upcoming Biennial FAOPS Congress, bringing together international speakers, workshops, and research showcases.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  "about-us": {
    category: "About FAOPS",
    title: "About Us",
    subtitle: "Federation of Asia and Oceania Perinatal Societies",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          The Federation of Asia and Oceania Perinatal Societies (FAOPS) is a leading regional organization dedicated to improving the quality of maternal, fetal, and neonatal care. Founded in 1978, FAOPS brings together perinatal societies from across Asia and Oceania to share knowledge, research, and best practices.
        </p>
        <p>
          Our members include obstetricians, neonatologists, pediatricians, midwives, and other perinatal health professionals who are committed to providing the highest standards of care.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="text-3xl font-extrabold text-faops-primary mb-2">19+</div>
            <div className="text-sm font-semibold text-faops-navy">Member Countries</div>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="text-3xl font-extrabold text-faops-primary mb-2">45+</div>
            <div className="text-sm font-semibold text-faops-navy">Years of Excellence</div>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="text-3xl font-extrabold text-faops-primary mb-2">Biennial</div>
            <div className="text-sm font-semibold text-faops-navy">Regional Congress</div>
          </div>
        </div>
      </div>
    ),
  },
  "faops-history-2": {
    category: "About FAOPS",
    title: "History of FAOPS",
    subtitle: "Over Four Decades of Dedicated Perinatal Care",
    content: (
      <div className="space-y-8">
        <p className="text-gray-600 leading-relaxed">
          The concept of a regional perinatal federation in Asia and Oceania took root in 1978 during discussions among passionate pioneers. Since its formal establishment, FAOPS has grown into a major international body championing the health of mothers and newborns.
        </p>
        <div className="relative border-l border-slate-200 pl-6 space-y-6">
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-faops-primary border-4 border-white"></div>
            <h4 className="font-bold text-faops-navy">1978 — The Foundation</h4>
            <p className="text-gray-600 text-sm">Initial meetings and agreements to form a unified regional group for perinatology.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-faops-primary border-4 border-white"></div>
            <h4 className="font-bold text-faops-navy">1980 — Formal Establishment</h4>
            <p className="text-gray-600 text-sm">FAOPS officially chartered with its first member nations hosting the inaugural regional congress.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-faops-primary border-4 border-white"></div>
            <h4 className="font-bold text-faops-navy">Present Day — Scaling Impact</h4>
            <p className="text-gray-600 text-sm">Collaborations with WHO, UNICEF, and other international global health partners to standardize perinatal guidelines.</p>
          </div>
        </div>
      </div>
    ),
  },
  "faops-vision": {
    category: "About FAOPS",
    title: "Our Vision",
    subtitle: "A healthier future for every mother and newborn",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed text-center max-w-2xl mx-auto py-8">
        <div className="w-16 h-16 bg-blue-50 text-faops-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">👁️</div>
        <h3 className="text-2xl font-bold text-faops-navy">Vision Statement</h3>
        <p className="text-lg italic text-gray-700">
          "To achieve the highest attainable standards of perinatal health for all mothers and infants throughout the Asia-Oceania region, ensuring no life is lost to preventable causes."
        </p>
      </div>
    ),
  },
  "faops-mission": {
    category: "About FAOPS",
    title: "Our Mission",
    subtitle: "What we strive for everyday",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p className="text-lg">
          Our mission is to foster collaboration and excellence among perinatal professionals in Asia and Oceania:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 border border-slate-100 rounded-xl shadow-sm">
            <h4 className="font-bold text-faops-navy mb-2">Education & Training</h4>
            <p className="text-sm">Promoting continuous learning, advanced workshops, and dissemination of modern evidence-based practices.</p>
          </div>
          <div className="p-6 border border-slate-100 rounded-xl shadow-sm">
            <h4 className="font-bold text-faops-navy mb-2">Advocacy & Partnerships</h4>
            <p className="text-sm">Partnering with governments and NGOs to influence public health policies in maternal and fetal medicine.</p>
          </div>
        </div>
      </div>
    ),
  },
  "faops-values": {
    category: "About FAOPS",
    title: "Our Values",
    subtitle: "The pillars that guide our actions",
    content: (
      <div className="grid md:grid-cols-3 gap-6 py-6">
        {[
          { title: "Compassion", desc: "Ensuring the utmost respect and care for maternal and infant life." },
          { title: "Excellence", desc: "Upholding peerless clinical guidelines, research and medical standards." },
          { title: "Inclusivity", desc: "Collaborating equally across all diverse regions and backgrounds." },
        ].map((v) => (
          <div key={v.title} className="p-6 bg-slate-50 rounded-xl text-center">
            <h4 className="font-bold text-faops-navy mb-2 text-lg">{v.title}</h4>
            <p className="text-gray-600 text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  "the-council-2": {
    category: "Office Bearers",
    title: "The Council",
    subtitle: "Executive leadership of the Federation",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600">The FAOPS council is composed of distinguished leaders in perinatology from our member countries.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase text-xs">
                <th className="py-3 px-4 font-semibold">Role</th>
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Country</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-gray-700 text-sm">
              <tr>
                <td className="py-3 px-4 font-medium text-faops-navy">President</td>
                <td className="py-3 px-4">Prof. Dr. Tsung-Hsien Lay</td>
                <td className="py-3 px-4">Taiwan</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-faops-navy">President-Elect</td>
                <td className="py-3 px-4">Dr. Ranjan Kumar Pejaver</td>
                <td className="py-3 px-4">India</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-faops-navy">Secretary General</td>
                <td className="py-3 px-4">Prof. Victor Samuel Rajadurai</td>
                <td className="py-3 px-4">Singapore</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-faops-navy">Treasurer</td>
                <td className="py-3 px-4">Dr. Hiroshi Nishida</td>
                <td className="py-3 px-4">Japan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  "committee-chairperson": {
    category: "Office Bearers",
    title: "Committee Chairpersons",
    subtitle: "Leading our specialized divisions",
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { dept: "Education & Scientific Committee", head: "Dr. Karen Simmer (Australia)" },
            { dept: "Research Committee", head: "Dr. Ki Sik Min (South Korea)" },
            { dept: "Publications & Editorial", head: "Dr. Zulfiqar Bhutta (Pakistan)" },
            { dept: "Constitution Committee", head: "Dr. Gerard M. Yerlikaya (Turkey)" },
          ].map((c) => (
            <div key={c.dept} className="p-6 border border-slate-100 rounded-xl shadow-sm">
              <h4 className="font-bold text-faops-navy mb-1">{c.dept}</h4>
              <p className="text-faops-primary text-sm font-medium">{c.head}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  "deputy-secretary-general": {
    category: "Office Bearers",
    title: "Deputy Secretary General",
    subtitle: "Supporting Regional Coordination",
    content: (
      <div className="space-y-6 text-gray-600">
        <p>The Deputy Secretary General supports the Secretary General in executing administrative duties and maintaining active channels of communication with member nations.</p>
        <div className="p-6 bg-slate-50 rounded-xl max-w-md">
          <h4 className="font-bold text-faops-navy text-lg mb-1">Dr. S. Uthaya</h4>
          <p className="text-faops-primary font-medium text-sm mb-4">Deputy Secretary General</p>
          <p className="text-gray-600 text-sm">Working closely to coordinate the biennial general assembly meetings and regional updates.</p>
        </div>
      </div>
    ),
  },
  "advisory-board": {
    category: "Office Bearers",
    title: "Advisory Board",
    subtitle: "Guidance from past leadership and experts",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600">Our Advisory Board consists of eminent former presidents and global leaders who guide the long-term vision of FAOPS.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Prof. Chih-Yao Hsu", "Dr. L. C. Chen", "Dr. Victor Y. H. Yu", "Dr. Naveen Bajaj", "Prof. Suh-Jen Chen"].map((name) => (
            <div key={name} className="p-4 border border-slate-100 rounded-lg text-center shadow-sm">
              <p className="font-semibold text-faops-navy text-sm">{name}</p>
              <p className="text-xs text-gray-500 mt-1">Advisory Board Member</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  events: {
    category: "Programs",
    title: "Events & Conferences",
    subtitle: "Connecting the Perinatal Community",
    content: (
      <div className="space-y-8">
        <p className="text-gray-600">Join our upcoming conferences, workshops, and scientific sessions designed for perinatal health specialists.</p>
        <div className="space-y-4">
          <div className="p-6 border border-slate-100 rounded-xl shadow-sm hover:border-faops-primary transition flex flex-col md:flex-row justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-faops-primary uppercase bg-blue-50 px-2.5 py-1 rounded-full">Congress</span>
              <h4 className="font-bold text-faops-navy text-lg mt-2">23rd Biennial Congress of FAOPS</h4>
              <p className="text-gray-500 text-sm mt-1">Scientific sessions, abstract submissions, and keynotes.</p>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="font-bold text-faops-navy">November 2026</p>
              <p className="text-sm text-gray-500">Taipei, Taiwan</p>
            </div>
          </div>
          <div className="p-6 border border-slate-100 rounded-xl shadow-sm hover:border-faops-primary transition flex flex-col md:flex-row justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-faops-primary uppercase bg-blue-50 px-2.5 py-1 rounded-full">Workshop</span>
              <h4 className="font-bold text-faops-navy text-lg mt-2">FAOPS Neonatal Resuscitation Training</h4>
              <p className="text-gray-500 text-sm mt-1">Hands-on simulation and updates on neonatal care.</p>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <p className="font-bold text-faops-navy">August 18, 2026</p>
              <p className="text-sm text-gray-500">Virtual Event</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  publications: {
    category: "Resources",
    title: "Publications",
    subtitle: "Research, journals, and updates in perinatology",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600">Access peer-reviewed research, congress proceedings, and journals supported by FAOPS.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 rounded-xl">
            <h4 className="font-bold text-faops-navy mb-2">Asia-Oceania Journal of Perinatology</h4>
            <p className="text-sm text-gray-600 mb-4">Official publication showcasing high-impact research papers from regional neonatologists.</p>
            <a href="#" className="text-faops-primary text-sm font-semibold hover:underline">Browse Journal →</a>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl">
            <h4 className="font-bold text-faops-navy mb-2">FAOPS Newsletters</h4>
            <p className="text-sm text-gray-600 mb-4">Regular updates from member societies, board messages, and regional updates.</p>
            <a href="#" className="text-faops-primary text-sm font-semibold hover:underline">Read Newsletters →</a>
          </div>
        </div>
      </div>
    ),
  },
  "organization-chart": {
    category: "About FAOPS",
    title: "Organization Chart",
    subtitle: "Structural hierarchy and reporting within FAOPS",
    content: (
      <div className="space-y-6 text-center">
        <p className="text-gray-600 text-left">The administrative hierarchy that powers our decisions and coordination.</p>
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 max-w-lg mx-auto space-y-4">
          <div className="bg-faops-navy text-white py-3 px-6 rounded-lg font-bold">General Assembly</div>
          <div className="text-gray-400">↓</div>
          <div className="bg-faops-primary text-white py-3 px-6 rounded-lg font-bold">Executive Council</div>
          <div className="text-gray-400">↓</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 text-faops-navy py-2.5 px-4 rounded border border-blue-100 font-semibold text-sm">Secretary General</div>
            <div className="bg-blue-50 text-faops-navy py-2.5 px-4 rounded border border-blue-100 font-semibold text-sm">Treasurer</div>
          </div>
          <div className="text-gray-400">↓</div>
          <div className="bg-slate-200 text-gray-700 py-3 px-6 rounded-lg font-bold text-sm">Standing & Special Committees</div>
        </div>
      </div>
    ),
  },
  "gallery-grid": {
    category: "Media",
    title: "Gallery",
    subtitle: "Snapshots from our congresses and workshops",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://faopsperinatal.org/wp-content/uploads/2023/09/faops-congress-1.jpg",
            "https://faopsperinatal.org/wp-content/uploads/2023/09/faops-congress-2.jpg",
            "https://faopsperinatal.org/wp-content/uploads/2021/06/FAOPS_WB.png",
          ].map((src, i) => (
            <div key={i} className="relative h-60 rounded-xl overflow-hidden shadow-sm group border border-slate-100">
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  "country-wise-society-presidents-representatives": {
    category: "Membership",
    title: "Country Details",
    subtitle: "Presidents & Representatives of Member Societies",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600">Contact information and leadership details of society representatives for each member country.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { country: "Australia & NZ", name: "Prof. Helen Liley", role: "Representative" },
            { country: "India", name: "Dr. Alok Bhandari", role: "President" },
            { country: "Japan", name: "Dr. Tomoaki Ikeda", role: "Representative" },
            { country: "Malaysia", name: "Dr. Boo Nem Yun", role: "President" },
            { country: "Taiwan", name: "Dr. Hung-Chih Lin", role: "President" },
            { country: "Vietnam", name: "Prof. Ngo Minh Xuan", role: "Representative" },
          ].map((item, index) => (
            <div key={index} className="p-5 border border-slate-100 rounded-xl shadow-sm bg-white">
              <span className="text-xs font-bold text-faops-primary uppercase">{item.country}</span>
              <h4 className="font-bold text-faops-navy mt-1">{item.name}</h4>
              <p className="text-gray-500 text-xs mt-1">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  "society-congresses": {
    category: "Events",
    title: "Society Congresses",
    subtitle: "FAOPS Congresses over the years",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600">A historical look at the host nations and themes of the Biennial FAOPS Congresses.</p>
        <div className="divide-y divide-slate-100">
          {[
            { year: "2024", name: "22nd FAOPS Congress", location: "Kuala Lumpur, Malaysia" },
            { year: "2022", name: "21st FAOPS Congress", location: "New Delhi, India" },
            { year: "2018", name: "20th FAOPS Congress", location: "Taipei, Taiwan" },
            { year: "2016", name: "19th FAOPS Congress", location: "Tokyo, Japan" },
          ].map((item, index) => (
            <div key={index} className="py-4 flex justify-between items-center text-sm">
              <div>
                <span className="font-bold text-faops-navy mr-4">{item.year}</span>
                <span className="text-gray-700">{item.name}</span>
              </div>
              <span className="text-gray-500 text-xs">{item.location}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  "faops-constitution": {
    category: "About FAOPS",
    title: "FAOPS Constitution",
    subtitle: "Rules and bylaws governing the Federation",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>The Constitution outlines the organizational structure, election procedures, voting rights, and committees within FAOPS.</p>
        <div className="p-6 bg-slate-50 rounded-xl">
          <h4 className="font-bold text-faops-navy mb-2">Key Constitutional Rules</h4>
          <ul className="list-decimal pl-5 space-y-2 text-sm">
            <li>The official language of the Federation shall be English.</li>
            <li>General Assembly meetings are to be held biennially during the congress.</li>
            <li>Any perinatal society of a country in the Asia-Oceania region is eligible to apply for membership.</li>
          </ul>
        </div>
      </div>
    ),
  },
  "general-assembly-and-council-meetings": {
    category: "About FAOPS",
    title: "General Assembly & Council Meetings",
    subtitle: "Deliberating regional policies and updates",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600">Details of upcoming council meetings, agendas, and historical general assembly resolutions.</p>
        <div className="p-6 border border-slate-100 rounded-xl shadow-sm">
          <h4 className="font-bold text-faops-navy mb-2">Next Scheduled Assembly</h4>
          <p className="text-sm text-gray-600">The next General Assembly meeting will coincide with the 23rd Congress in November 2026.</p>
        </div>
      </div>
    ),
  },
  "other-links-to-faops-related": {
    category: "Resources",
    title: "Useful Links",
    subtitle: "Associated societies and global bodies",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600">Quick links to international neonatal, maternal-fetal, and health organizations.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "World Health Organization (WHO)", url: "https://www.who.int" },
            { name: "UNICEF Child Health", url: "https://www.unicef.org" },
            { name: "World Association of Perinatal Medicine", url: "https://www.wapm.info" },
            { name: "International Federation of Gynecology (FIGO)", url: "https://www.figo.org" },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-slate-100 hover:border-faops-primary rounded-xl shadow-sm text-sm font-semibold text-faops-navy flex justify-between items-center transition"
            >
              {link.name}
              <span>↗</span>
            </a>
          ))}
        </div>
      </div>
    ),
  },
  "contact-us": {
    category: "Contact",
    title: "Contact Us",
    subtitle: "Get in touch with the FAOPS secretariat",
    content: <ContactForm />,
  },
};

// Handle all default fallback for countries
const regionsMapping: Record<string, string> = {
  cambodia: "Central Region",
  indonesia: "Central Region",
  "malaysia-2": "Central Region",
  singapore: "Central Region",
  thailand: "Central Region",
  vietnam: "Central Region",
  afghanistan: "West Region",
  bangladesh: "West Region",
  india: "West Region",
  "nepal-2": "West Region",
  pakistan: "West Region",
  "sri-lanka": "West Region",
  "united-arab-emirates": "West Region",
  japan: "East Region",
  korea: "East Region",
  mangolia: "East Region",
  philippines: "East Region",
  taiwan: "East Region",
  "australia-new-zealand": "Oceania Region",
};

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      // Mock sending, link with backend if needed
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-xl font-bold text-faops-navy mb-4">Secretariat Office</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Federation of Asia and Oceania Perinatal Societies (FAOPS)<br />
          c/o Department of Neonatology, KK Women's and Children's Hospital,<br />
          100 Bukit Timah Road, Singapore 229899
        </p>
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>Email:</strong> secretariat@faopsperinatal.org</p>
          <p><strong>Phone:</strong> +65 6394 1234</p>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-faops-primary"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-faops-primary"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Subject</label>
            <input
              type="text"
              className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-faops-primary"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Message</label>
            <textarea
              rows={4}
              required
              className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-faops-primary"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-faops-navy hover:bg-faops-primary text-white text-sm font-semibold py-2.5 rounded-lg transition"
          >
            {status === "sending" ? "Sending..." : "Submit Inquiry"}
          </button>
          {status === "success" && <p className="text-green-600 text-sm mt-2 font-medium">Inquiry sent successfully!</p>}
          {status === "error" && <p className="text-red-600 text-sm mt-2 font-medium">Please fill all required fields.</p>}
        </form>
      </div>
    </div>
  );
}

export default function DynamicPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  // Find static page content
  let data = pageData[slug];

  // If it's a country page, generate dynamic membership layout
  if (!data && regionsMapping[slug]) {
    const countryName = slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace("2", "")
      .trim();

    data = {
      category: `${regionsMapping[slug]} Membership`,
      title: `${countryName} Perinatal Society`,
      subtitle: `Official Member Society from ${countryName}`,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            The national perinatal society of {countryName} represents obstetrical, fetal, and neonatal medical professionals committed to enhancing local newborn care standards and collaborating regionally through the FAOPS federation.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-slate-50 rounded-xl">
              <h4 className="font-bold text-faops-navy mb-2">Member Benefits</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
                <li>Access to FAOPS biennial congresses at member rates</li>
                <li>Participation in regional scientific workshops</li>
                <li>Representation in the General Assembly</li>
              </ul>
            </div>
            <div className="p-6 border border-slate-100 rounded-xl shadow-sm">
              <h4 className="font-bold text-faops-navy mb-2">Contact Representative</h4>
              <p className="text-sm text-gray-600">
                For applications, memberships, and local queries, please contact the local secretariat of the {countryName} Perinatal Society.
              </p>
              <Link href="/contact-us" className="text-faops-primary text-sm font-semibold hover:underline mt-4 inline-block">
                Get In Touch via FAOPS →
              </Link>
            </div>
          </div>
        </div>
      ),
    };
  }

  // Fallback if page doesn't exist
  if (!data) {
    data = {
      title: "Page Not Found",
      subtitle: "The requested resource could not be found.",
      content: (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-6">We apologize, but this page is currently under construction or does not exist.</p>
          <Link
            href="/"
            className="bg-faops-navy hover:bg-faops-primary text-white px-6 py-2.5 rounded-lg transition text-sm font-semibold"
          >
            Go Back Home
          </Link>
        </div>
      ),
    };
  }

  return (
    <article className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <header className="bg-faops-navy text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('https://faopsperinatal.org/wp-content/uploads/2023/10/bg-pattern_faops.jpg')` }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          {data.category && (
            <span className="text-xs font-semibold text-faops-primary bg-white/10 px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider mb-3 inline-block">
              {data.category}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1">{data.title}</h1>
          <p className="text-slate-300 mt-2 text-sm md:text-base max-w-lg mx-auto">{data.subtitle}</p>
        </div>
      </header>

      {/* CONTENT BODY */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {data.content}
      </section>
    </article>
  );
}
