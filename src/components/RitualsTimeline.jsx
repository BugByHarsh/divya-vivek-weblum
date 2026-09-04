import SectionHead from "./SectionHead";
import TimelineItem from "./TimelineItem";

import fere from "../assets/fere.webp";
import jaimala from "../assets/jaimala.webp";
import bless from "../assets/bless.webp";
import pooja from "../assets/pooja.webp";
import vidai from "../assets/vidai.webp";

const RITUALS = [
  {
    number: "01",
    title: "The Garland Exchange",
    description:
      "With smiles, laughter, and flower garlands, we exchanged the Jaimala — a beautiful promise of choosing each other, today and always.",
    image: jaimala,
    reverse: false,
  },

  {
    number: "02",
    title: "Family Blessings",
    description:
      "With the love and blessings of our family, especially Mom, we stepped into this new chapter surrounded by the people who mean the most to us.",
    image: bless,
    reverse: true,
  },

  {
    number: "03",
    title: "Sacred Prayers",
    description:
      "With prayers and devotion, we sought divine blessings for a life filled with love, happiness, peace, and togetherness.",
    image: pooja,
    reverse: false,
  },

  {
    number: "04",
    title: "Seven Vows",
    description:
      "Around the sacred fire, we took our seven vows and began a new journey together — hand in hand, for a lifetime.",
    image: fere,
    reverse: true,
  },

  {
    number: "05",
    title: "A New Beginning",
    description:
      "A bittersweet farewell, filled with tears, love, and countless memories — the beginning of a beautiful new journey together.",
    image: vidai,
    reverse: false,
  },
];


export default function RitualsTimeline() {
  return (
    <section className="px-[6vw] py-12">

      <SectionHead
        kicker="Moments That Became Memories"
        title="Our Wedding Story"
      />

      <div
        className="relative max-w-[900px] mx-auto before:content-[''] before:absolute before:left-[24px] md:before:left-1/2
          before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-gold before:to-blush-2 md:before:-translate-x-1/2
        ">
        {RITUALS.map((ritual) => (
          <TimelineItem
            key={ritual.number}
            {...ritual}
          />
        ))}

      </div>

    </section>
  );
}