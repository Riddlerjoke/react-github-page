"use client";

import React from 'react';
import Navbar from '@/components/homepageprops/Navbar';
import Banner from '@/components/homepageprops/Banner';

export default function Contact() {
  return (
    <div>
      <Banner />
      <Navbar />
      <main className="flex flex-col items-center min-h-screen p-24 bg-white text-black">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <p className="text-xl mb-8">Feel free to reach out to me via any of the following platforms:</p>
        <ul className="list-none">
          <li className="mb-4">
            <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li className="mb-4">
            <a href="https://www.instagram.com/yourprofile" className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li className="mb-4">
            <a href="https://github.com/yourusername" className="text-gray-500 hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className="mb-4">
            <a href="mailto:youremail@example.com" className="text-green-500 hover:underline">
              Email
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
