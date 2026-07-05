import type { Metadata } from "next";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import { SectionTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery | FAOPS",
};

const images = [
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2023/10/faops-1-1-300x300.jpg",
    tag: "Congress",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2025/09/HSK_2023_1_1-1-scaled.jpg",
    tag: "Leadership",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2021/06/FAOPS_WB.png",
    tag: "Federation",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2023/10/faops-1-1-300x300.jpg",
    tag: "Delegates",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2025/09/HSK_2023_1_1-1-scaled.jpg",
    tag: "Panel",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2021/06/FAOPS_WB.png",
    tag: "Community",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2023/10/faops-1-1-300x300.jpg",
    tag: "Workshop",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2025/09/HSK_2023_1_1-1-scaled.jpg",
    tag: "Keynote",
  },
  {
    src: "https://faopsperinatal.org/wp-content/uploads/2021/06/FAOPS_WB.png",
    tag: "FAOPS",
  },
];

const aspects = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[16/10]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
];

export default function GalleryPage() {
  return (
    <div data-testid="gallery-page" className="bg-white">
      <PageHeader
        tag="Gallery"
        title={<>Moments from across the Federation.</>}
        intro="Faces, sessions and gatherings from FAOPS congresses, workshops and community events across Asia and Oceania."
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <SectionTag>Snapshots</SectionTag>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {images.map((image, index) => (
            <div
              key={`${image.tag}-${index}`}
              data-testid={`gallery-tile-${index}`}
              className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-faops-line bg-faops-bg ${aspects[index % aspects.length]}`}
            >
              <Image
                src={image.src}
                alt={image.tag}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-faops-navy/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

              <span className="absolute left-3 top-3 rounded-full border border-faops-line bg-white/90 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-faops-navy">
                {image.tag}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}