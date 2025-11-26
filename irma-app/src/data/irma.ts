export type ProgrammeCategory = "longue" | "courte" | "numerique";

export type Programme = {
  id: string;
  titre: string;
  categorie: ProgrammeCategory;
  description: string;
  duree: string;
  niveau: "Débutant" | "Intermédiaire" | "Avancé";
  objectifs: string[];
  competences: string[];
  debouches: string[];
  prerequis: string;
  modalites: string;
  ouvert: boolean;
  prochaineSession: {
    cycle: "Dec-Jan" | "Jun-Jul";
    inscription: string;
    limite: string;
    debutCours: string;
  };
};

export type Conference = {
  id: string;
  titre: string;
  intervenant: string;
  description: string;
  date: string;
  categorie: "Conférence" | "Masterclass";
};

export type RechercheAxe = {
  id: string;
  titre: string;
  description: string;
};

export type Temoin = {
  id: string;
  nom: string;
  promo: string;
  citation: string;
  photo: string;
};

export const programmes: Programme[] = [
  {
    id: "collection",
    titre: "Création de collection",
    categorie: "longue",
    description:
      "Programme immersif de conception de collections complètes pour les marchés africains.",
    duree: "12 mois",
    niveau: "Intermédiaire",
    objectifs: [
      "Maîtriser le process créatif de la tendance au prototype",
      "Structurer une collection cohérente",
      "Intégrer les spécificités du marché congolais",
    ],
    competences: [
      "Moodboard & storytelling",
      "Gestion de gamme colorée",
      "Pilotage d’atelier",
    ],
    debouches: [
      "Directeur artistique mode",
      "Responsable de collection",
      "Styliste indépendant",
    ],
    prerequis: "Bonne base en stylisme + dossier créatif",
    modalites: "Présentiel, 4 jours/semaine, ateliers IRMA Kinshasa",
    ouvert: true,
    prochaineSession: {
      cycle: "Dec-Jan",
      inscription: "01 déc",
      limite: "25 jan",
      debutCours: "10 fév",
    },
  },
  {
    id: "patronnage",
    titre: "Patronnage & modélisme",
    categorie: "longue",
    description:
      "De la coupe à plat au moulage, maîtrisez les techniques pour des silhouettes contemporaines.",
    duree: "9 mois",
    niveau: "Débutant",
    objectifs: [
      "Comprendre la morphologie",
      "Construire les bases et transformations",
      "Industrialiser les patronages",
    ],
    competences: [
      "CAO/DAO (CLO3D)",
      "Gradation",
      "Fiche technique",
    ],
    debouches: [
      "Modéliste atelier",
      "Technicien patronnage",
      "Consultant production",
    ],
    prerequis: "Savoir coudre et maîtriser les outils de base",
    modalites: "Présentiel, 3 jours/semaine + pratique libre",
    ouvert: true,
    prochaineSession: {
      cycle: "Jun-Jul",
      inscription: "05 jun",
      limite: "10 jul",
      debutCours: "05 aou",
    },
  },
  {
    id: "textile",
    titre: "Design textile",
    categorie: "courte",
    description:
      "Technique de conception de motifs inspirés des patrimoines africains.",
    duree: "8 semaines",
    niveau: "Intermédiaire",
    objectifs: [
      "Créer une banque de motifs originaux",
      "Préparer les fiches techniques",
      "Explorer les procédés d’impression durable",
    ],
    competences: [
      "Illustrator & Procreate",
      "Rapport & raccord",
      "Impression numérique",
    ],
    debouches: [
      "Designer textile",
      "Consultant motifs",
      "Freelance surface pattern designer",
    ],
    prerequis: "Portfolio graphique + notions couleurs",
    modalites: "Hybride, 2 soirs/semaine + workshops weekend",
    ouvert: true,
    prochaineSession: {
      cycle: "Dec-Jan",
      inscription: "15 déc",
      limite: "20 jan",
      debutCours: "03 fév",
    },
  },
  {
    id: "dao",
    titre: "DAO / CLO3D",
    categorie: "numerique",
    description:
      "Digitalisation complète d’une collection via CLO3D et pipeline 3D.",
    duree: "6 semaines",
    niveau: "Avancé",
    objectifs: [
      "Créer des avatars réalistes",
      "Optimiser les prototypes 3D",
      "Exporter des assets pour e-commerce",
    ],
    competences: [
      "Simulation physique",
      "Textures PBR",
      "Animation simple",
    ],
    debouches: [
      "Digital pattern maker",
      "Viz artist mode",
      "Tech pack specialist",
    ],
    prerequis: "Formation patronnage + base en 3D",
    modalites: "100% en ligne, coaching individuel",
    ouvert: false,
    prochaineSession: {
      cycle: "Jun-Jul",
      inscription: "15 jun",
      limite: "05 jul",
      debutCours: "20 jul",
    },
  },
  {
    id: "branding",
    titre: "Management de marque",
    categorie: "courte",
    description:
      "Structurer une marque de mode consciente et prête à l’export.",
    duree: "10 semaines",
    niveau: "Intermédiaire",
    objectifs: [
      "Clarifier le positionnement",
      "Mettre en place un plan commercial",
      "Préparer la distribution omnicanale",
    ],
    competences: [
      "Brand sprint",
      "Pricing & marge",
      "Go-to-market Afrique",
    ],
    debouches: [
      "Brand manager",
      "Responsable showroom",
      "Fondateur marque",
    ],
    prerequis: "Projet de marque ou expérience atelier",
    modalites: "Hybride, 1 bootcamp mensuel",
    ouvert: true,
    prochaineSession: {
      cycle: "Dec-Jan",
      inscription: "10 déc",
      limite: "15 jan",
      debutCours: "28 jan",
    },
  },
  {
    id: "eco",
    titre: "Eco-conception & circularité",
    categorie: "longue",
    description:
      "Intégrer l’économie circulaire dans les ateliers congolais.",
    duree: "6 mois",
    niveau: "Avancé",
    objectifs: [
      "Cartographier l’impact de la chaîne de valeur",
      "Concevoir des matières régénératives",
      "Mettre en place la traçabilité",
    ],
    competences: [
      "Bilan carbone textile",
      "Upcycling industriel",
      "Reporting ESG",
    ],
    debouches: [
      "Responsable RSE",
      "Consultant impact",
      "Chef de projet circularité",
    ],
    prerequis: "Expérience atelier + notions supply chain",
    modalites: "Présentiel + visites terrain + projet collectif",
    ouvert: false,
    prochaineSession: {
      cycle: "Jun-Jul",
      inscription: "01 jun",
      limite: "30 jun",
      debutCours: "15 jul",
    },
  },
];

export const conferences: Conference[] = [
  {
    id: "conf-1",
    titre: "Kinshasa Fashion Futures",
    intervenant: "Singa Kalonji",
    description:
      "Décryptage des tendances 2025 et opportunités d’export pour les créateurs congolais.",
    date: "12 oct 2024",
    categorie: "Conférence",
  },
  {
    id: "conf-2",
    titre: "Masterclass textiles intelligents",
    intervenant: "Pr. Nadia Tumba",
    description:
      "Workshop pratique autour des fibres biosourcées et capteurs intégrés.",
    date: "20 nov 2024",
    categorie: "Masterclass",
  },
  {
    id: "conf-3",
    titre: "Construire un label africain durable",
    intervenant: "Collectif Wafrica",
    description:
      "Retour d’expérience sur la certification B-Corp et la structuration internationale.",
    date: "05 déc 2024",
    categorie: "Conférence",
  },
];

export const recherches: RechercheAxe[] = [
  {
    id: "heritage",
    titre: "Héritage textile",
    description:
      "Archivage et digitalisation des motifs Kuba, Kongo et Luba pour inspirer les nouvelles collections.",
  },
  {
    id: "tech",
    titre: "Technologies vestimentaires",
    description:
      "Exploration des wearables, vêtements connectés et capteurs pour la scène culturelle congolaise.",
  },
  {
    id: "circular",
    titre: "Économie circulaire",
    description:
      "Modèles de revalorisation des déchets textiles produits dans les marchés de Kinshasa.",
  },
];

export const temoignages: Temoin[] = [
  {
    id: "tem-1",
    nom: "Aline Mbuyi",
    promo: "Promo 2022 – Création de collection",
    citation:
      "IRMA m’a offert un réseau d’experts et un accompagnement business qui ont transformé mon atelier.",
    photo: "/images/aline.jpg",
  },
  {
    id: "tem-2",
    nom: "Diego Kanku",
    promo: "Promo 2023 – DAO / CLO3D",
    citation:
      "Grâce au module numérique, j’ai réduit de 40% mes coûts prototypes et j’exporte mon travail en ligne.",
    photo: "/images/diego.jpg",
  },
  {
    id: "tem-3",
    nom: "Mado Tshipamba",
    promo: "Promo 2021 – Eco-conception",
    citation:
      "La dimension impact et l’accès aux industriels m’ont permis de sécuriser mes premiers contrats.",
    photo: "/images/mado.jpg",
  },
];

export const admissionsTimeline = [
  {
    cycle: "Rentrée 1",
    periode: "Décembre → Janvier",
    details: [
      "Inscriptions: 1 déc – 25 jan",
      "Tests créativité: 28 jan",
      "Résultats: 05 fév",
    ],
  },
  {
    cycle: "Rentrée 2",
    periode: "Juin → Juillet",
    details: [
      "Inscriptions: 5 jun – 10 jul",
      "Entretiens: 15 jul",
      "Résultats: 25 jul",
    ],
  },
];

export const contactInfo = {
  adresse: "Campus IRMA, Gombe – Kinshasa, RDC",
  email: "contact@irma-school.com",
  phone: "+243 820 555 999",
  socials: [
    { name: "Instagram", url: "https://instagram.com/irma_school" },
    { name: "LinkedIn", url: "https://linkedin.com/company/irma-school" },
    { name: "YouTube", url: "https://youtube.com/@irma-school" },
  ],
};

export const heroStats = [
  { label: "Programmes accrédités", value: "12" },
  { label: "Alumni", value: "450+" },
  { label: "Partenaires industriels", value: "18" },
];

