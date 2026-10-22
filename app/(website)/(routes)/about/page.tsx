"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/homepageprops/Navbar";
import Banner from "@/components/homepageprops/Banner";
import Footer from "@/components/Footer";
import {
  Briefcase,
  GraduationCap,
  Code,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "2023 - Présent",
    role: "Développeur Full-Stack & Solutions Data",
    company: "Projets Indépendants & Open Source",
    description:
      "Conception d'architectures applicatives modernes, intégration de modèles d'IA et de systèmes de reconnaissance biométrique, déploiement conteneurisé.",
    highlights: [
      "Développement d'interfaces Next.js / TypeScript réactives et accessibles",
      "Implémentation de pipelines de Computer Vision et FaceNet avec Flask/Keras",
      "Conteneurisation d'applications de visualisation avec Docker et Streamlit",
    ],
  },
  {
    period: "2021 - 2023",
    role: "Designer UI/UX & Intégrateur Web",
    company: "Création Numérique & Conseil",
    description:
      "Accompagnement de projets dans la définition de chartes graphiques, ergonomie des parcours utilisateurs et intégration front-end responsive.",
    highlights: [
      "Conception de design systems modulaires et évolutifs",
      "Intégration HTML5/CSS3/Tailwind respectant les standards WCAG",
      "Optimisation des performances et du SEO technique",
    ],
  },
];

const technicalSkills = [
  {
    category: "Front-End & UI",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Back-End & Data",
    skills: ["Python", "Flask", "Node.js", "MongoDB", "Pandas", "Streamlit", "REST APIs"],
  },
  {
    category: "IA & Machine Learning",
    skills: ["Keras", "FaceNet", "Computer Vision", "EDA / Data Analysis", "Jupyter"],
  },
  {
    category: "Outils & DevOps",
    skills: ["Git & GitHub", "Docker", "GitHub Actions", "Vercel", "Figma", "Linux/Bash"],
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Banner />
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-gray-900 border-2 border-gray-200 shadow-md flex-shrink-0">
              <Image
                src="/logojwfwhite1.png"
                alt="Jay Wayne Fairey"
                fill
                className="object-contain p-3"
                priority
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Designer & Développeur</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Jay Wayne Fairey
              </h1>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                Passionné par l&apos;intersection entre design d&apos;interface et ingénierie logicielle, je conçois des outils interactifs, des solutions d&apos;intelligence artificielle et des plateformes web centrées sur l&apos;utilisateur.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Mon approche repose sur la clarté visuelle, la rigueur du code, l&apos;accessibilité et la performance.
              </p>
            </div>
          </div>
        </section>

        {/* Parcours professionnel */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-6 h-6 text-blue-600" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Parcours & Expériences
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-500 mb-3">{exp.company}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{exp.description}</p>
                
                <ul className="space-y-1.5 border-t border-gray-100 pt-3">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compétences techniques */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-8">
            <Code className="w-6 h-6 text-blue-600" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Compétences & Stack
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {technicalSkills.map((tech) => (
              <div
                key={tech.category}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Intéressé par une collaboration ?</h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Découvrez l&apos;ensemble de mes projets ou prenez contact directement pour échanger.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/project"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors"
            >
              <span>Voir les projets</span>
              <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 font-medium text-sm transition-colors"
            >
              <span>Me contacter</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}