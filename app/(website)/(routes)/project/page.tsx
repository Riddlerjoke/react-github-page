"use client";

import React from 'react';
import Navbar from '@/components/homepageprops/Navbar';
import Card from '@/components/homepageprops/presentation-card';
import Banner from "@/components/homepageprops/Banner";

const repositories = [
  {
    name: 'Création d\'un générateur de mot de passe en python',
    description: 'Ce programme permet de générer des mots de passe aléatoires en python.',
    link: 'https://github.com/Riddlerjoke/password',
  },
  {
    name: 'Test de qualité de l\'eau / EDA',
    description: 'Ce projet est un test de qualité de l\'eau réalisé avec Python et Jupyter Notebook pour l\'analyse exploratoire des données.',
    link: 'https://github.com/Riddlerjoke/WaterQualityEDA',
  },
  {
    name: 'Clever-door',
    description: 'Face-Login System, une solution innovante de connexion et d\'inscription basée sur la reconnaissance faciale pour l\'authentification des utilisateurs. Ce projet utilise le puissant modèle d\'apprentissage profond FaceNet implémenté avec le framework Flask pour exécuter le modèle neuronal Keras, ainsi que MongoDB comme base de données backend.',
    link: 'https://github.com/Riddlerjoke/Clever-door',
  },
  {
    name: 'UK WildlifeTracker DockerEdition',
    description: 'Un projet de suivi de la faune sauvage du Royaume-Uni, réalisé avec streamlit et Docker.',
    link: 'https://github.com/Riddlerjoke/UK-WildlifeTracker-DockerEdition',
  }
];

export default function Projects() {
  return (
    <div>
      <Banner />
      <Navbar />
      <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-white text-black">
        <h1 className="text-4xl font-bold mb-8">My GitHub Repositories</h1>
        <div className="grid gap-6 lg:grid-cols-3">
          {repositories.map((repo) => (
            <Card key={repo.name} name={repo.name} description={repo.description} link={repo.link} />
          ))}
        </div>
      </main>
    </div>
  );
}
