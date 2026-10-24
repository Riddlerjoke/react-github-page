"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logoImg from "@/public/logotwitch2.png";
import {
  Home,
  User,
  FolderGit2,
  Mail,
  FileText,
} from "lucide-react";

const routes = [
  {
    label: "Accueil",
    href: "/",
    icon: Home,
    color: "text-blue-400",
  },
  {
    label: "À propos",
    href: "/about",
    icon: User,
    color: "text-emerald-400",
  },
  {
    label: "Projets",
    href: "/project",
    icon: FolderGit2,
    color: "text-amber-400",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
    color: "text-rose-400",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/95 backdrop-blur shadow-md text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-3">
        <Link
          href="/"
          className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md p-1"
          aria-label="Accueil Jay Wayne Fairey"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-800 border border-gray-700 flex items-center justify-center">
            <Image
              src={logoImg}
              alt="Logo Jay Wayne Fairey"
              width={36}
              height={36}
              priority
              className="object-contain"
            />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-wide group-hover:text-blue-400 transition-colors">
            Jay Wayne Fairey
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="flex items-center space-x-1 sm:space-x-2 mt-2 sm:mt-0">
          {routes.map((route) => {
            const isActive =
              mounted &&
              (pathname === route.href ||
                (route.href !== "/" && pathname.startsWith(route.href)));
            const Icon = route.icon;

            return (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-gray-800 text-white shadow-inner border border-gray-700 font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/60"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className={`w-4 h-4 mr-1.5 ${route.color}`} aria-hidden="true" />
                <span>{route.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
