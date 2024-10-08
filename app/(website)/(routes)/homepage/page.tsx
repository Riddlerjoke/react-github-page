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
      <main className="flex flex-col items-center mt-24 min-h-screen bg-white text-black">
        <h1 className="text-6xl font-bold mt-2 ">Welcome to My Portfolio</h1>
        <p className="text-2xl mt-2 ">Explore my work and get to know me better.</p>
      </main>
    </div>
  );
}