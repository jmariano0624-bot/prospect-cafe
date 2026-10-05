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
  alt: string;
  category: Exclude<Category, "All">;
}[] = [
  {
    file: "order-1",
    alt: "Cups of coffee and pastries shared across a Cether table",
    category: "Coffee + drinks",
  },
  {
    file: "food-3",
    alt: "Cether lemon herb chicken with rice and lemon",
    category: "From the kitchen",
  },
  {
    file: "drink-1",
    alt: "Cether pistachio cream latte",
    category: "Coffee + drinks",
  },
  {
    file: "food-1",
    alt: "Cether truffle pasta served in a black bowl",
    category: "From the kitchen",
  },
  {
    file: "drink-4",
    alt: "Two Cether cloud tibok lattes on a marble counter",
    category: "Coffee + drinks",
  },
  {
    file: "food-6",
    alt: "Cether banana Nutella waffle",
    category: "From the kitchen",
  },
  {
    file: "drink-2",
    alt: "Cether black tea peach iced tea",
    category: "Coffee + drinks",
  },
  {
    file: "food-2",
    alt: "Cether mushroom soup with toasted bread",
    category: "From the kitchen",
  },
  {
    file: "order-2",
    alt: "Three Cether coffees with a croissant beneath a brass table lamp",
    category: "Coffee + drinks",
  },
  {
    file: "food-4",
    alt: "Cether loco moco with rice, egg, and a side salad",
    category: "From the kitchen",
  },
  {
    file: "drink-3",
    alt: "Cether strawberry basil lemonade",
    category: "Coffee + drinks",
  },
  {
    file: "food-5",
    alt: "Cether truffle pasta photographed on a marble table",
    category: "From the kitchen",
  },
  {
    file: "drink-5",
    alt: "Cether cookies and cream drink topped with a cookie",
    category: "Coffee + drinks",
  },
  {
    file: "food-7",
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
