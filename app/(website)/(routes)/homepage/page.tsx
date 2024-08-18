"use client";

import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import Navbar from '@/components/homepageprops/Navbar';
import Banner from "@/components/homepageprops/Banner";

export default function Home() {
    const router = useRouter();
  return (
    <div>
      <Banner />
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-6xl font-bold mb-8">Welcome to My Portfolio</h1>
        <p className="text-2xl mb-8">Explore my work and get to know me better.</p>
      </main>
    </div>
  );
}