"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/homepageprops/Navbar";
import Banner from "@/components/homepageprops/Banner";
import Footer from "@/components/Footer";
import Card from "@/components/homepageprops/presentation-card";
import avatarImg from "@/public/logojwfwhite1.png";
import {
  ArrowRight,
  Code2,
  Palette,
  Terminal,
  Layers,
  Sparkles,
  Github,
  Mail,
  ExternalLink,
} from "lucide-react";

const featuredProjects = [
  {
    name: "Prédiction de Consommation Énergétique des Bâtiments",
    description:
      "Modélisation prédictive en Machine Learning supervisé (Scikit-Learn, Poetry) pour estimer la consommation énergétique des bâtiments, avec pipeline complet d'ingestion/feature engineering, API FastAPI et déploiement conteneurisé Docker Compose.",
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
      "Exploration approfondie (EDA) de données physico-chimiques sur la potabilité de l'eau, analyse des corrélations et entraînement de modèles de classification supervisée avec Scikit-Learn et Pandas.",
    link: "https://github.com/Riddlerjoke/WaterQualityEDA",
    github: "https://github.com/Riddlerjoke/WaterQualityEDA",
    tags: ["Python", "Pandas", "Seaborn", "Jupyter", "Scikit-Learn", "EDA"],
    category: "Machine Learning & IA",
  },
];

const skills = [
  {
    icon: Terminal,
    title: "Data Engineering & BDD",
    desc: "Pipelines ELT/ETL, Apache Cassandra (cluster NoSQL), MongoDB (ReplicaSet & Sharding), Polars, Pandas",
  },
  {
    icon: Sparkles,
    title: "Machine Learning & IA",
    desc: "Scikit-Learn, modélisation supervisée & classification, Milvus (Vector DB & embeddings), analyses exploratoires (EDA)",
  },
  {
    icon: Layers,
    title: "Backend, APIs & DevOps",
    desc: "FastAPI, Flask, Python, Docker & Docker Compose, Poetry, GitHub Actions CI/CD, Git",
  },
  {
    icon: Code2,
    title: "Frontend & Visualisation Web",
    desc: "React, Next.js 14, TypeScript, Tailwind CSS, Streamlit, ergonomie UI et accessibilité (a11y)",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs sm:text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>Disponible pour de nouveaux projets et collaborations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Jay Wayne Fairey
            </h1>

            <p className="text-lg sm:text-2xl text-gray-300 font-light max-w-3xl mb-8 leading-relaxed">
              <span className="text-blue-400 font-medium">Développeur Data, Machine Learning & Solutions Web</span>. Passionné par l&apos;ingénierie des données, les architectures distribuées et l&apos;IA appliquée.
            </p>

            <p className="text-gray-400 max-w-2xl mb-10 text-base sm:text-lg">
              Je conçois des pipelines de données fiables (ELT, clusters Cassandra / MongoDB), des modèles prédictifs (Scikit-Learn) et des applications web modernes (FastAPI, Docker, Next.js).
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/project"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                <span>Découvrir mes projets</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 font-medium transition-all duration-200"
              >
                <span>Me contacter</span>
              </Link>

              <a
                href="https://github.com/Riddlerjoke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 transition-all duration-200"
                aria-label="Voir le profil GitHub de Jay Wayne Fairey"
              >
                <Github className="w-5 h-5 mr-2" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Sélection de projets
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl">
                Une sélection de réalisations concrètes : pipelines de données, modèles de Machine Learning, clusters de bases de données et interfaces interactives.
              </p>
            </div>
            <Link
              href="/project"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mt-4 md:mt-0 group"
            >
              <span>Voir tous les projets</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((proj) => (
              <Card
                key={proj.name}
                name={proj.name}
                description={proj.description}
                link={proj.link}
                github={proj.github}
                tags={proj.tags}
                category={proj.category}
              />
            ))}
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Compétences
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                Domaines d&apos;expertise
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Technologies et savoir-faire mobilisés sur mes réalisations.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.title}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Teaser Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 flex-shrink-0 bg-gray-700">
              <Image
                src={avatarImg}
                alt="Portrait / Logo de Jay Wayne Fairey"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                À propos de mon parcours
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Curieux et polyvalent, j&apos;allie une approche rigoureuse du développement logiciel à une sensibilité esthétique pour concevoir des produits numériques fiables et intuitifs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 group"
                >
                  <span>En savoir plus sur mon parcours</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="py-16 bg-blue-600 text-white text-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Vous avez un projet ou une opportunité ?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              N&apos;hésitez pas à me contacter pour discuter de vos besoins techniques, d&apos;une mission ou d&apos;une opportunité de collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-lg bg-white text-blue-900 font-bold hover:bg-blue-50 shadow-lg transition-colors"
              >
                Prendre contact
              </Link>
              <a
                href="mailto:lardicjeremy@gmail.com"
                className="inline-flex items-center px-6 py-3.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>lardicjeremy@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
