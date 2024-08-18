"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/homepageprops/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-6xl font-bold mb-8">Welcome to My Portfolio</h1>
        <p className="text-2xl mb-8">Explore my work and get to know me better.</p>
        <Link href="/project">
          <div className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">
            View My Projects
          </div>
        </Link>
      </main>
    </div>
  );
}