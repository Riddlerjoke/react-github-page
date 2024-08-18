import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/homepageprops/Navbar';

export default function About() {
  return (
    <div>
      <main className="flex flex-col items-center min-h-screen p-24 bg-black text-white">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-xl mb-8">
          I am a passionate developer with experience in various technologies...
        </p>
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">My Professional Journey</h2>
          <Image src="/path-to-your-infographic.png" alt="Infographic" width={800} height={600} />
        </div>
      </main>
    </div>
  );
}
