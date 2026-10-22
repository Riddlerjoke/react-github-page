"use client";

import React, { useState } from "react";
import Navbar from "@/components/homepageprops/Navbar";
import Card from "@/components/homepageprops/presentation-card";
import Banner from "@/components/homepageprops/Banner";
import Footer from "@/components/Footer";
import { FolderGit2, Sparkles, Filter } from "lucide-react";

const allProjects = [
  {
    name: "Clever-door (Face-Login System)",
    description:
      "Solution d'authentification biométrique par reconnaissance faciale basée sur le modèle deep learning FaceNet (Keras/TensorFlow), backend Flask et base de données MongoDB pour l'inscription et la connexion sécurisée.",
    link: "https://github.com/Riddlerjoke/Clever-door",
    github: "https://github.com/Riddlerjoke/Clever-door",
    tags: ["Python", "Flask", "Keras", "FaceNet", "MongoDB", "Deep Learning"],
    category: "IA & Vision",
  },
  {
    name: "UK WildlifeTracker DockerEdition",
    description:
      "Application interactive de cartographie et de suivi de la faune sauvage du Royaume-Uni. Développée avec Streamlit et entièrement conteneurisée via Docker pour un déploiement reproductible et portable.",
    link: "https://github.com/Riddlerjoke/UK-WildlifeTracker-DockerEdition",
    github: "https://github.com/Riddlerjoke/UK-WildlifeTracker-DockerEdition",
    tags: ["Streamlit", "Docker", "Python", "Data Viz", "Geospatial"],
    category: "Data & DevOps",
  },
  {
    name: "Test de qualité de l'eau / EDA",
    description:
      "Analyse exploratoire des données (EDA) sur la potabilité de l'eau avec détection des valeurs aberrantes, corrélations physico-chimiques et visualisations graphiques avancées (Seaborn/Matplotlib).",
    link: "https://github.com/Riddlerjoke/WaterQualityEDA",
    github: "https://github.com/Riddlerjoke/WaterQualityEDA",
    tags: ["Python", "Jupyter", "Pandas", "Seaborn", "Data Science"],
    category: "Data Science",
  },
  {
    name: "Générateur de mot de passe sécurisé",
    description:
      "Programme modulaire permettant de générer des mots de passe aléatoires hautement sécurisés avec critères personnalisés (longueur, caractères spéciaux, entropie de mot de passe).",
    link: "https://github.com/Riddlerjoke/password",
    github: "https://github.com/Riddlerjoke/password",
    tags: ["Python", "Sécurité", "Cryptographie", "CLI"],
    category: "Sécurité & Outils",
  },
  {
    name: "Portfolio GitHub Pages (Next.js 14)",
    description:
      "Portfolio personnel conçu avec Next.js 14 (App Router), Tailwind CSS et export statique optimisé pour GitHub Pages, respectant les normes d'accessibilité (WCAG) et de SEO moderne.",
    link: "https://github.com/Riddlerjoke/react-github-page",
    github: "https://github.com/Riddlerjoke/react-github-page",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "GitHub Pages", "a11y"],
    category: "Web & Design",
  },
  {
    name: "Plateforme Analytique & Dashboard UI",
    description:
      "Composants réutilisables et tableaux de bord interactifs pour visualiser des métriques complexes avec filtres dynamiques, mode sombre et animations fluides.",
    link: "https://github.com/Riddlerjoke",
    github: "https://github.com/Riddlerjoke",
    tags: ["React", "TypeScript", "Tailwind", "UI/UX", "Charts"],
    category: "Web & Design",
  },
];

const categories = ["Tous", "IA & Vision", "Data & DevOps", "Data Science", "Web & Design", "Sécurité & Outils"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Banner />
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Réalisations & Projets Open Source</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projets & Travaux
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Découvrez une sélection de projets récents en développement web, analyse de données, modèles d&apos;apprentissage profond et outils de sécurité.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="flex items-center text-xs font-medium text-gray-500 mr-2">
            <Filter className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
            <span>Filtrer :</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-sm font-semibold"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((repo) => (
            <Card
              key={repo.name}
              name={repo.name}
              description={repo.description}
              link={repo.link}
              github={repo.github}
              tags={repo.tags}
              category={repo.category}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            Aucun projet ne correspond à cette catégorie pour le moment.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
