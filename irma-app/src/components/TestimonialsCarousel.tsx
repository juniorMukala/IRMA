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
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
          Témoignages
        </p>
        <blockquote className="text-2xl font-semibold text-slate-900">
          “{current.citation}”
        </blockquote>
        <div>
          <p className="text-lg font-semibold text-slate-900">{current.nom}</p>
          <p className="text-sm text-slate-500">{current.promo}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
        <button
          type="button"
          onClick={prev}
          className="rounded-full border border-slate-200 px-3 py-1 transition hover:bg-slate-50"
        >
          ← Précédent
        </button>
        <button
          type="button"
          onClick={next}
          className="rounded-full border border-slate-200 px-3 py-1 transition hover:bg-slate-50"
        >
          Suivant →
        </button>
        <span className="ml-auto text-xs tracking-[0.4em] text-slate-400">
          {index + 1}/{temoignages.length}
        </span>
      </div>
    </div>
  );
}

