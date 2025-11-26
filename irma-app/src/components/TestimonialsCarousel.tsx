"use client";

import { useState } from "react";
import type { Temoin } from "@/data/irma";

type Props = {
  temoignages: Temoin[];
};

export default function TestimonialsCarousel({ temoignages }: Props) {
  const [index, setIndex] = useState(0);
  const current = temoignages[index];

  const next = () => setIndex((prev) => (prev + 1) % temoignages.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + temoignages.length) % temoignages.length);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">
          Témoignages
        </p>
        <blockquote className="text-2xl font-semibold text-white">
          “{current.citation}”
        </blockquote>
        <div>
          <p className="text-lg font-semibold text-white">{current.nom}</p>
          <p className="text-sm text-white/70">{current.promo}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
        <button
          type="button"
          onClick={prev}
          className="rounded-full border border-white/20 px-3 py-1 transition hover:bg-white/10"
        >
          ← Précédent
        </button>
        <button
          type="button"
          onClick={next}
          className="rounded-full border border-white/20 px-3 py-1 transition hover:bg-white/10"
        >
          Suivant →
        </button>
        <span className="ml-auto text-xs tracking-[0.4em]">
          {index + 1}/{temoignages.length}
        </span>
      </div>
    </div>
  );
}

