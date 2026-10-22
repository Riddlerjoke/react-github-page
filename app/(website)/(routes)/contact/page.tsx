"use client";

import React, { useState } from "react";
import Navbar from "@/components/homepageprops/Navbar";
import Banner from "@/components/homepageprops/Banner";
import Footer from "@/components/Footer";
import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  Send,
  CheckCircle,
  MessageSquare,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation / mailto trigger
    const mailtoUrl = `mailto:lardicjeremy@gmail.com?subject=${encodeURIComponent(
      formState.subject || "Prise de contact portfolio"
    )}&body=${encodeURIComponent(
      `Nom: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Banner />
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Contact & Échanges</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Me contacter
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Une opportunité professionnelle, un projet technique ou une simple question ? Écrivez-moi ou retrouvez-moi sur les réseaux.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Informations directes & réseaux */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Coordonnées & Réseaux
              </h2>

              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:lardicjeremy@gmail.com"
                    className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 text-gray-800 hover:text-emerald-700 border border-gray-100 transition-colors group"
                    aria-label="Envoyer un e-mail à lardicjeremy@gmail.com"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">E-mail</p>
                      <p className="text-sm font-semibold">lardicjeremy@gmail.com</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/jeremy-lardic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-blue-50 text-gray-800 hover:text-blue-700 border border-gray-100 transition-colors group"
                    aria-label="Profil LinkedIn de Jeremy Lardic (nouvelle fenêtre)"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">LinkedIn</p>
                      <p className="text-sm font-semibold">Jeremy Lardic</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/Riddlerjoke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 hover:text-gray-900 border border-gray-100 transition-colors group"
                    aria-label="Profil GitHub de Riddlerjoke (nouvelle fenêtre)"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-200 text-gray-700 flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                      <Github className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">GitHub</p>
                      <p className="text-sm font-semibold">@Riddlerjoke</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/jaywayne_design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-pink-50 text-gray-800 hover:text-pink-700 border border-gray-100 transition-colors group"
                    aria-label="Compte Instagram Jay Wayne Design (nouvelle fenêtre)"
                  >
                    <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                      <Instagram className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Instagram</p>
                      <p className="text-sm font-semibold">@jaywayne_design</p>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100 space-y-3 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" aria-hidden="true" />
                  <span>France – Disponible en distanciel & déplacements</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" aria-hidden="true" />
                  <span>Réponse habituelle sous 24 à 48h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de message */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Envoyer un message
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Remplissez les informations ci-dessous pour m&apos;adresser un message directement.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-base mb-1">Message prêt à être envoyé</h3>
                    <p className="text-sm">
                      Votre client de messagerie a été sollicité avec votre message. Si la fenêtre ne s&apos;est pas ouverte, vous pouvez m&apos;écrire directement à <a href="mailto:lardicjeremy@gmail.com" className="underline font-semibold">lardicjeremy@gmail.com</a>.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                        Votre nom / Société
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="ex. Alex Martin"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                        Votre e-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@exemple.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1">
                      Objet
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Proposition de projet, opportunité, renseignement..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Détaillez votre demande ou votre projet..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow transition-colors"
                  >
                    <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
