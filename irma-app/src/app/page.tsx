import Link from "next/link";
import ProgrammesTabs from "@/components/ProgrammesTabs";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import {
  programmes,
  conferences,
  recherches,
  temoignages,
  admissionsTimeline,
  contactInfo,
  heroStats,
} from "@/data/irma";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "L’institut", href: "#institut" },
  { label: "Programmes", href: "#programmes" },
  { label: "Admissions", href: "#admissions" },
  { label: "Conférences", href: "#conferences" },
  { label: "Recherche", href: "#recherche" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  {
    titre: "Incubateur",
    description:
      "Coaching stratégique pour lancer son label en moins de 12 mois.",
  },
  {
    titre: "Exposition",
    description: "Showroom permanent relié aux Fashion Weeks africaines.",
  },
  {
    titre: "R&D textile",
    description: "Laboratoire matériaux biosourcés et design circulaire.",
  },
];

const applicant = {
  nom: "Mukala Junior",
  email: "juniormukala96@gmail.com",
  mentor: "Attes AGNIMEL",
  mentorEmail: "attes@kobo-hub.com",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <p className="text-lg font-semibold tracking-widest">
            IRMA — MVP Platform
          </p>
          <nav className="hidden gap-4 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#admissions"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200"
          >
            Candidater
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16">
        <section
          id="hero"
          className="grid gap-10 rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:grid-cols-[2fr,1fr]"
        >
          <div className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Institut Régional de la Mode — IRMA
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              L’école de la création textile qui accélère les talents
              congolais.
            </h1>
            <p className="text-lg text-white/80">
              Programmes immersifs, masterclass internationales et parcours
              d’innovation pour connecter Kinshasa aux hubs mondiaux de la mode.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#programmes"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200"
              >
                Découvrir nos programmes
              </a>
              <a
                href="#recherche"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
              >
                Explorer nos recherches
              </a>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/5 p-4">
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Candidat.e du jour
            </p>
            <div>
              <p className="text-2xl font-semibold">{applicant.nom}</p>
              <p className="text-sm text-white/70">{applicant.email}</p>
            </div>
            <div className="rounded-2xl bg-slate-900/60 p-4 text-sm text-white/80">
              <p>Mentor: {applicant.mentor}</p>
              <p>Email: {applicant.mentorEmail}</p>
            </div>
            <p className="text-sm text-white/70">
              Objectif: intégrer un programme long en création textile et
              construire un parcours d’entrepreneur culturel.
            </p>
            <Link
              href="#admissions"
              className="text-center text-sm font-semibold text-emerald-300 underline-offset-4 hover:underline"
            >
              Préparer sa candidature →
            </Link>
          </div>
        </section>

        <section id="institut" className="space-y-8">
          <header className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Présentation
            </p>
            <h2 className="text-3xl font-semibold">
              IRMA, incubateur, exposition, recherche
            </h2>
            <p className="text-white/70">
              Une plateforme unique qui relie formation, accompagnement business
              et innovation textile.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.titre}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold">{item.titre}</h3>
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
                <Link
                  href="#contact"
                  className="mt-4 inline-flex text-sm font-semibold text-emerald-300 underline-offset-4 hover:underline"
                >
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="programmes" className="space-y-8">
          <header className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Programmes académiques
            </p>
            <h2 className="text-3xl font-semibold">6 parcours pour se former</h2>
            <p className="text-white/70">
              Catalogue mock respectant les règles métiers: catégories, dates
              d’ouverture, objectifs pédagogiques et CTA candidature.
            </p>
          </header>
          <ProgrammesTabs programmes={programmes} />
          <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
            <div>
              <p className="text-lg font-semibold text-white">
                Télécharger la brochure
              </p>
              <p>Structure détaillée des modules, frais et enseignants.</p>
            </div>
            <a
              href="#admissions"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200"
            >
              Télécharger (mock)
            </a>
            <a
              href="#admissions"
              className="rounded-full border border-white/20 px-5 py-2 font-semibold text-white transition hover:border-white"
            >
              Voir toutes les formations
            </a>
          </div>
        </section>

        <section id="conferences" className="space-y-8">
          <header className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Conférences & Masterclass
            </p>
            <h2 className="text-3xl font-semibold">
              Agenda des rencontres professionnelles
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {conferences.map((event) => (
              <article
                key={event.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  {event.categorie}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{event.titre}</h3>
                <p className="text-sm text-white/70">{event.description}</p>
                <div className="mt-4 text-sm text-white/60">
                  <p>Intervenant: {event.intervenant}</p>
                  <p>Date: {event.date}</p>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex text-sm font-semibold text-emerald-300 underline-offset-4 hover:underline"
                >
                  Voir le calendrier complet →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="recherche"
          className="grid gap-8 rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:grid-cols-[1.1fr,0.9fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Recherche & innovation
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              3 axes pour connecter héritage, technologies et économie
              circulaire.
            </h2>
            <p className="mt-3 text-white/70">
              Les projets déposés disposent d’un accompagnement scientifique,
              d’un accès au laboratoire matière et d’un réseau de financeurs.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200"
            >
              Proposer un projet
            </a>
          </div>
          <div className="space-y-4">
            {recherches.map((axe) => (
              <article
                key={axe.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-xl font-semibold">{axe.titre}</h3>
                <p className="mt-2 text-sm text-white/70">{axe.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="temoignages" className="space-y-8">
          <header className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Témoignages
            </p>
            <h2 className="text-3xl font-semibold">
              Alumni — carousel mock interactif
            </h2>
            <p className="text-white/70">
              Photos, promo et citations clés illustrent le parcours IRMA.
            </p>
          </header>
          <TestimonialsCarousel temoignages={temoignages} />
        </section>

        <section
          id="admissions"
          className="grid gap-8 rounded-[40px] border border-white/10 bg-white/5 p-8 md:grid-cols-2"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Admissions
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Deux cycles, règles métiers et calendrier sécurisé.
            </h2>
            <p className="mt-3 text-white/70">
              Validation automatique des dossiers: programme sélectionné,
              champs requis, pièces justificatives et respect des dates limites.
            </p>
            <div className="mt-6 space-y-4">
              {admissionsTimeline.map((timeline) => (
                <div
                  key={timeline.cycle}
                  className="rounded-3xl border border-white/10 bg-slate-950/40 p-5"
                >
                  <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                    {timeline.cycle}
                  </p>
                  <p className="text-lg font-semibold">{timeline.periode}</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {timeline.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-emerald-300" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Formulaire mock
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Déposer une candidature
            </h3>
            <form className="mt-4 space-y-4 text-sm">
              <label className="block">
                <span className="text-white/70">Programme visé*</span>
                <select className="mt-1 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white focus:border-white/40 focus:outline-none">
                  {programmes.map((programme) => (
                    <option key={programme.id} value={programme.id} className="text-slate-900">
                      {programme.titre}
                    </option>
                  ))}
                </select>
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-white/70">Nom complet*</span>
                  <input
                    defaultValue={applicant.nom}
                    className="mt-1 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 focus:border-white/40 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-white/70">Email*</span>
                  <input
                    type="email"
                    defaultValue={applicant.email}
                    className="mt-1 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 focus:border-white/40 focus:outline-none"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-white/70">Lettre de motivation (résumé)</span>
                <textarea
                  rows={4}
                  placeholder="Décrivez votre projet, votre niveau et vos motivations."
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 focus:border-white/40 focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-white/70">Disponibilité pour entretien</span>
                <input
                  type="date"
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 focus:border-white/40 focus:outline-none [color-scheme:dark]"
                />
              </label>
              <button
                type="button"
                className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200"
              >
                Soumettre (mock)
              </button>
              <p className="text-xs text-white/60">
                Données stockées conformément aux exigences RGPD-like. Validation
                admin avant revue pédagogique.
              </p>
            </form>
          </div>
        </section>

        <section id="contact" className="space-y-8">
          <header className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Contact & footer
            </p>
            <h2 className="text-3xl font-semibold">
              Une porte d’entrée unique pour rejoindre IRMA
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Adresse</p>
              <p className="text-lg font-semibold">{contactInfo.adresse}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-lg font-semibold text-emerald-300"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Téléphone</p>
              <p className="text-lg font-semibold">{contactInfo.phone}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {contactInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white"
              >
                {social.name}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} IRMA — MVP mock by Mukala Junior.</p>
          <p>Stack: Next.js 15, TailwindCSS, data mocks statiques.</p>
        </div>
      </footer>
    </div>
  );
}
