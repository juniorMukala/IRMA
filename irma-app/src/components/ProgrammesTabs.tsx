"use client";

import { useState } from "react";
import type { Programme, ProgrammeCategory } from "@/data/irma";

const categoryLabels: Record<ProgrammeCategory, string> = {
  longue: "Formations longues",
  courte: "Formations courtes",
  numerique: "Modules numériques",
};

type Props = {
  programmes: Programme[];
};

export default function ProgrammesTabs({ programmes }: Props) {
  const [active, setActive] = useState<ProgrammeCategory>("longue");

  const filtered = programmes.filter(
    (programme) => programme.categorie === active,
  );

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-3 rounded-full border border-white/10 bg-white/5 p-2">
        {Object.entries(categoryLabels).map(([key, label]) => {
          const typedKey = key as ProgrammeCategory;
          const isActive = typedKey === active;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActive(typedKey)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-white text-slate-950"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filtered.map((programme) => (
          <article
            key={programme.id}
            className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-teal-200">
                {programme.duree}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  programme.ouvert ? "bg-emerald-200/20" : "bg-yellow-200/20"
                }`}
              >
                {programme.ouvert ? "Ouvert" : "Session à venir"}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-white">
              {programme.titre}
            </h3>
            <p className="text-white/80">{programme.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-white/60">Niveau</p>
                <p className="font-medium">{programme.niveau}</p>
              </div>
              <div>
                <p className="text-white/60">Prérequis</p>
                <p className="font-medium">{programme.prerequis}</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              {programme.objectifs.slice(0, 3).map((objectif) => (
                <li key={objectif} className="flex gap-2">
                  <span className="mt-[6px] h-1 w-1 rounded-full bg-emerald-300" />
                  {objectif}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
              <span className="font-semibold uppercase tracking-[0.3em]">
                Session {programme.prochaineSession.cycle}
              </span>
              <span>Inscription: {programme.prochaineSession.inscription}</span>
              <span>Limite: {programme.prochaineSession.limite}</span>
            </div>
            <a
              href="#admissions"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200"
            >
              Candidater à cette formation
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

