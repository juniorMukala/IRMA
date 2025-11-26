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
      <div className="flex flex-wrap gap-3 rounded-full border border-slate-200 bg-white p-2 shadow-sm">
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
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
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
            className="group flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-600">
                {programme.duree}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  programme.ouvert
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {programme.ouvert ? "Ouvert" : "Session à venir"}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">
              {programme.titre}
            </h3>
            <p className="text-slate-600">{programme.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <p className="text-slate-400">Niveau</p>
                <p className="font-medium text-slate-900">
                  {programme.niveau}
                </p>
              </div>
              <div>
                <p className="text-slate-400">Prérequis</p>
                <p className="font-medium text-slate-900">
                  {programme.prerequis}
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              {programme.objectifs.slice(0, 3).map((objectif) => (
                <li key={objectif} className="flex gap-2">
                  <span className="mt-[6px] h-1 w-1 rounded-full bg-emerald-500" />
                  {objectif}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="font-semibold uppercase tracking-[0.3em] text-slate-900">
                Session {programme.prochaineSession.cycle}
              </span>
              <span>Inscription: {programme.prochaineSession.inscription}</span>
              <span>Limite: {programme.prochaineSession.limite}</span>
            </div>
            <a
              href="#admissions"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Candidater à cette formation
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

