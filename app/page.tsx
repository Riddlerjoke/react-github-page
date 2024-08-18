import Image from 'next/image';
import Link from 'next/link';
import Card  from '@/components/homepageprops/presentation-card';

const repositories = [
  {
    name: 'Repo 1',
    description: 'Description of Repo 1',
    link: 'https://github.com/username/repo1',
  },
  {
    name: 'Repo 2',
    description: 'Description of Repo 2',
    link: 'https://github.com/username/repo2',
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
