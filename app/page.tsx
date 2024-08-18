import Image from 'next/image';
import Link from 'next/link';
import Card  from '@/components/homepageprops/presentation-card';

const repositories = [
  {
    name: 'Création d&apos;un générateur de mot de passe en python',
    description: 'ce programme permet de générer des mots de passe aléatoires en python.',
    link: 'https://github.com/Riddlerjoke/password',
  },
  {
    name: 'UK WildlifeTracker DockerEdition',
    description: 'Un projet de suivi de la faune sauvage du Royaume-Uni, réalisé avec streamlit et Docker.',
    link: 'https://github.com/Riddlerjoke/UK-WildlifeTracker-DockerEdition',
  },
  // Ajoutez d'autres repositories ici
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">My GitHub Repositories</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        {repositories.map((repo) => (
          <Card key={repo.name} name={repo.name } description={repo.description} link={repo.link} />
        ))}
      </div>
    </main>
  );
}
