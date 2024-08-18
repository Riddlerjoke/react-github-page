import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">
            <a>MyPortfolio</a>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <a className="text-gray-300 hover:text-white">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-300 hover:text-white">About</a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-300 hover:text-white">Projects</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-300 hover:text-white">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
