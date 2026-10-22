import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, Instagram, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white">Jay Wayne Fairey</p>
            <p className="text-sm text-gray-400 mt-1">
              Développeur Data, Machine Learning & Solutions Web.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:lardicjeremy@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              aria-label="Envoyer un e-mail à Jay Wayne Fairey"
            >
              <Mail className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>lardicjeremy@gmail.com</span>
            </a>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Riddlerjoke"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                aria-label="Profil GitHub de Jay Wayne Fairey (nouvelle fenêtre)"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/jeremy-lardic/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="Profil LinkedIn de Jay Wayne Fairey (nouvelle fenêtre)"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="https://www.instagram.com/jaywayne_design/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-pink-400 hover:text-pink-300 transition-colors"
                aria-label="Compte Instagram de Jay Wayne Fairey (nouvelle fenêtre)"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Jay Wayne Fairey. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:underline">Accueil</Link>
            <Link href="/about" className="hover:underline">À propos</Link>
            <Link href="/project" className="hover:underline">Projets</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
