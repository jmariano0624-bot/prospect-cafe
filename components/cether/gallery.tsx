"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

type Category = "All" | "Coffee + drinks" | "From the kitchen";
const categories: Category[] = ["All", "Coffee + drinks", "From the kitchen"];
const moments: {
  file: string;
  label: string;
  alt: string;
  category: Exclude<Category, "All">;
}[] = [
  {
    file: "order-1",
    label: "Better together",
    alt: "Cups of coffee and pastries shared across a Cether table",
    category: "Coffee + drinks",
  },
  {
    file: "food-3",
    label: "From the kitchen",
    alt: "Cether lemon herb chicken with rice and lemon",
    category: "From the kitchen",
  },
  {
    file: "drink-1",
    label: "Something a little different",
    alt: "Cether pistachio cream latte",
    category: "Coffee + drinks",
  },
  {
    file: "food-1",
    label: "Stay for a plate",
    alt: "Cether truffle pasta served in a black bowl",
    category: "From the kitchen",
  },
  {
    file: "drink-4",
    label: "Your coffee moment",
    alt: "Two Cether cloud tibok lattes on a marble counter",
    category: "Coffee + drinks",
  },
  {
    file: "food-6",
    label: "A sweet pause",
    alt: "Cether banana Nutella waffle",
    category: "From the kitchen",
  },
  {
    file: "drink-2",
    label: "A refreshing change",
    alt: "Cether black tea peach iced tea",
    category: "Coffee + drinks",
  },
  {
    file: "food-2",
    label: "Comfort in a bowl",
    alt: "Cether mushroom soup with toasted bread",
    category: "From the kitchen",
  },
  {
    file: "order-2",
    label: "Take a little moment",
    alt: "Three Cether coffees with a croissant beneath a brass table lamp",
    category: "Coffee + drinks",
  },
  {
    file: "food-4",
    label: "Settle in",
    alt: "Cether loco moco with rice, egg, and a side salad",
    category: "From the kitchen",
  },
  {
    file: "drink-3",
    label: "A brighter sip",
    alt: "Cether strawberry basil lemonade",
    category: "Coffee + drinks",
  },
  {
    file: "food-5",
    label: "Made for the table",
    alt: "Cether truffle pasta photographed on a marble table",
    category: "From the kitchen",
  },
  {
    file: "drink-5",
    label: "A little indulgence",
    alt: "Cether cookies and cream drink topped with a cookie",
    category: "Coffee + drinks",
  },
  {
    file: "food-7",
    label: "Good food, good company",
    alt: "A Cether chicken dish with bread on a black plate",
    category: "From the kitchen",
  },
];

export function Gallery() {
  const [category, setCategory] = useState<Category>("All");
  const [expanded, setExpanded] = useState(false);
  const filtered = moments.filter(
    (item) => category === "All" || item.category === category,
  );
  const visible = expanded ? filtered : filtered.slice(0, 6);
  return (
    <>
      <div className="gallery-toolbar">
        <div
          className="gallery-filters"
          role="group"
          aria-label="Filter food and drink highlights"
        >
          {categories.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="filter-button"
              aria-pressed={item === category}
              onClick={() => {
                setCategory(item);
                setExpanded(false);
              }}
            >
              {item}
            </Button>
          ))}
        </div>
        <span className="gallery-count" aria-live="polite">
          {String(filtered.length).padStart(2, "0")} moments to savour
        </span>
      </div>
      <div className="editorial-gallery" id="gallery-images">
        {visible.map((item, index) => (
          <Reveal
            key={item.file}
            className="gallery-item"
            delay={(index % 3) * 0.06}
          >
            <a
              href={`/cether/${item.file}.jpg`}
              target="_blank"
              rel="noreferrer"
              className="gallery-image image-hover"
              aria-label={`View full image: ${item.alt} (opens in a new tab)`}
            >
              <Image
                src={`/cether/${item.file}.jpg`}
                alt={item.alt}
                fill
                sizes="(max-width: 599px) 100vw, (max-width: 900px) 50vw, 36vw"
                className="media-cover"
              />
              <span className="image-open">
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </a>
            <div className="gallery-caption">
              <span>{item.label}</span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          </Reveal>
        ))}
      </div>
      {filtered.length > 6 && (
        <div className="gallery-more">
          <Button
            variant="ghost"
            className="text-link"
            aria-expanded={expanded}
            aria-controls="gallery-images"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded
              ? "Show fewer moments"
              : `Explore all ${filtered.length} moments`}
            <ArrowDown
              size={16}
              className={expanded ? "rotate-180" : ""}
              aria-hidden="true"
            />
          </Button>
        </div>
      )}
    </>
  );
}
