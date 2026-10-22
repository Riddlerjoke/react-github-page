"use client";

import React, { useState } from "react";
import Navbar from "@/components/homepageprops/Navbar";
import Card from "@/components/homepageprops/presentation-card";
import Banner from "@/components/homepageprops/Banner";
import Footer from "@/components/Footer";
import { FolderGit2, Sparkles, Filter } from "lucide-react";

const allProjects = [
  {
    name: "Prédiction de Consommation Énergétique des Bâtiments",
    description:
      "Modélisation prédictive en Machine Learning supervisé (Scikit-Learn, Poetry) pour estimer la consommation énergétique des bâtiments (Site EUI normalisé météo), avec pipeline complet d'ingestion/feature engineering, API FastAPI et déploiement conteneurisé Docker Compose.",
    link: "https://github.com/Riddlerjoke/ML-project-anticipate-building-consumption",
    github: "https://github.com/Riddlerjoke/ML-project-anticipate-building-consumption",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "FastAPI", "Docker", "Poetry"],
    category: "Machine Learning & IA",
  },
  {
    name: "Forecast 2.0 – ELT Weather Data Pipeline",
    description:
      "Pipeline d'ingénierie de données industriel pour ingérer, transformer, valider et exposer des flux de données météorologiques destinées aux modèles de prévision de la demande en électricité.",
    link: "https://github.com/Riddlerjoke/forecast-project",
    github: "https://github.com/Riddlerjoke/forecast-project",
    tags: ["Python", "Data Engineering", "ELT Pipeline", "Data Validation", "Docker"],
    category: "Data Engineering & BDD",
  },
  {
    name: "Restored Database – FastAPI, Polars & Cluster MongoDB",
    description:
      "Plateforme d'ingestion et d'analyse statistique haute performance (Polars) connectée à MongoDB. Gestion d'architectures Docker avancées : instance simple, replica set et cluster shardé.",
    link: "https://github.com/Riddlerjoke/restored-database",
    github: "https://github.com/Riddlerjoke/restored-database",
    tags: ["FastAPI", "MongoDB", "Polars", "Docker Sharding", "ReplicaSet", "Python"],
    category: "Data Engineering & BDD",
  },
  {
    name: "Cluster NoSQL Cassandra & API FastAPI",
    description:
      "Mise en place et orchestration sous Docker d'un cluster Apache Cassandra distribué à deux nœuds répliqués, interfacé avec des endpoints REST FastAPI pour les opérations et requêtes CQL.",
    link: "https://github.com/Riddlerjoke/API-Cassandra-Docker",
    github: "https://github.com/Riddlerjoke/API-Cassandra-Docker",
    tags: ["Apache Cassandra", "NoSQL", "Docker", "FastAPI", "Python", "CQL"],
    category: "Data Engineering & BDD",
  },
  {
    name: "UK WildlifeTracker – Visualisation Géospatiale & FastAPI",
    description:
      "Application interactive de cartographie et d'analyse spatio-temporelle de la faune sauvage. Architecture découplée associant un backend FastAPI et une interface de visualisation Streamlit sous conteneur Docker.",
    link: "https://github.com/Riddlerjoke/UK-WildlifeTracker-DockerEdition",
    github: "https://github.com/Riddlerjoke/UK-WildlifeTracker-DockerEdition",
    tags: ["Streamlit", "FastAPI", "Docker", "Python", "Data Viz", "Geospatial"],
    category: "Data Viz & Web",
  },
  {
    name: "Qualité de l'Eau – EDA & Modèles IA Supervisés",
    description:
      "Exploration approfondie (EDA) de jeux de données physico-chimiques sur la potabilité de l'eau, analyse des corrélations et entraînement de modèles de classification supervisée avec Scikit-Learn et Pandas.",
    link: "https://github.com/Riddlerjoke/WaterQualityEDA",
    github: "https://github.com/Riddlerjoke/WaterQualityEDA",
    tags: ["Python", "Pandas", "Seaborn", "Jupyter", "Scikit-Learn", "EDA"],
    category: "Machine Learning & IA",
  },
  {
    name: "DataSoluTech – Migration & Ingestion Santé vers MongoDB",
    description:
      "Chaîne d'ingestion reproductible sous Docker pour le traitement et la migration de volumétries de données de santé synthétiques vers une base documentaire MongoDB.",
    link: "https://github.com/Riddlerjoke/DataSoluTech",
    github: "https://github.com/Riddlerjoke/DataSoluTech",
    tags: ["Python", "MongoDB", "Docker", "Data Pipeline", "ETL"],
    category: "Data Engineering & BDD",
  },
  {
    name: "SuperSmartMarket – Plateforme d'Analyse Retail",
    description:
      "Analyse décisionnelle et exploration statistique des métriques de vente et des comportements d'achat pour une chaîne de supermarchés moderne.",
    link: "https://github.com/Riddlerjoke/audit-supersmartmarket",
    github: "https://github.com/Riddlerjoke/audit-supersmartmarket",
    tags: ["Python", "Data Analytics", "Pandas", "Retail BI", "Statistics"],
    category: "Data Viz & Web",
  },
  {
    name: "Music Similarity SaaS – Milvus Vector DB & AWS",
    description:
      "Architecture de recommandation musicale par similarité d'embeddings audio, utilisant la base de données vectorielle Milvus, des conteneurs Docker, AWS et une interface front-end dédiée.",
    link: "https://github.com/Riddlerjoke/music_similarity-front-design",
    github: "https://github.com/Riddlerjoke/music_similarity-front-design",
    tags: ["Milvus", "Vector DB", "Embeddings", "AWS", "Python", "Docker"],
    category: "Machine Learning & IA",
  },
  {
    name: "Portfolio Next.js 14 & GitHub Actions",
    description:
      "Site portfolio statique conçu avec Next.js 14 (App Router), Tailwind CSS et export statique automatisé pour GitHub Pages, respectant les normes d'accessibilité (WCAG) et de SEO moderne.",
    link: "https://github.com/Riddlerjoke/react-github-page",
    github: "https://github.com/Riddlerjoke/react-github-page",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "GitHub Pages", "a11y"],
    category: "Data Viz & Web",
  },
  {
    name: "Amplify React Graph – Visualisation de Relations",
    description:
      "Interface web moderne développée avec React et AWS Amplify pour explorer graphiquement des jeux de données interconnectés et des relations complexes.",
    link: "https://github.com/Riddlerjoke/amplify-react-graph",
    github: "https://github.com/Riddlerjoke/amplify-react-graph",
    tags: ["React", "AWS Amplify", "GraphQL", "Data Viz", "JavaScript"],
    category: "Data Viz & Web",
  },
  {
    name: "Discord Bot Automation",
    description:
      "Bot Python asynchrone interagissant avec l'API Discord pour l'automatisation de tâches, la modération et la gestion d'événements communautaires.",
    link: "https://github.com/Riddlerjoke/bot-discord",
    github: "https://github.com/Riddlerjoke/bot-discord",
    tags: ["Python", "Discord API", "Asyncio", "Automation", "Bot"],
    category: "Outils & Backend",
  },
  {
    name: "Générateur de Mot de Passe Cryptographique",
    description:
      "Application modulaire en Python pour la génération d'identifiants robustes et sécurisés, avec analyse de l'entropie et respect des règles de complexité de sécurité.",
    link: "https://github.com/Riddlerjoke/password",
    github: "https://github.com/Riddlerjoke/password",
    tags: ["Python", "Sécurité", "Cryptographie", "Algorithmique"],
    category: "Outils & Backend",
  },
  {
    name: "Binomotron – Algorithme d'Équipes & BDD MySQL",
    description:
      "Application de génération automatisée d'équipes et de binômes de travail optimisés à partir d'une base de données relationnelle MySQL.",
    link: "https://github.com/Riddlerjoke/binomotron",
    github: "https://github.com/Riddlerjoke/binomotron",
    tags: ["Python", "MySQL", "Algorithmique", "SQL"],
    category: "Outils & Backend",
  },
];

const categories = ["Tous", "Data Engineering & BDD", "Machine Learning & IA", "Data Viz & Web", "Outils & Backend"];

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
            Découvrez mes réalisations concrètes : pipelines de données ELT, bases NoSQL & clusters distribués, modèles de Machine Learning supervisés, APIs FastAPI et applications web interactives.
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
