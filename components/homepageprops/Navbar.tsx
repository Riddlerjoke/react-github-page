"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Home,
  User,
  Folder,
  Mail,
  LayoutDashboard,
} from "lucide-react"; // Remplacez ces icônes par celles que vous préférez.

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Home",
    href: "/homepage",
    icon: Home,
    color: "text-blue-500",
  },
  {
    label: "About",
    href: "/about",
    icon: User,
    color: "text-green-500",
  },
  {
    label: "Projects",
    href: "/project",
    icon: Folder,
    color: "text-yellow-500",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
    color: "text-red-500",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="sticky top-0 z-50 flex flex-col w-full bg-gray-900 text-white">
      <div className="flex justify-between items-center px-6 py-4">
        <Link href="/homepage.html">
            <a className="flex items-center space-x-2">
                <Image
                src="logojwfwhite1.png"
                alt="Logo"
                width={40}
                height={40}
                />
                <span className="text-xl font-semibold">Riddlerjoke</span>
            </a>
        </Link>
        <nav className="flex space-x-4">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={`flex items-center p-2 transition-colors duration-200 ${
                pathname === route.href
                  ? "bg-white text-black dark:bg-black dark:text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <route.icon className={`mr-2 ${route.color}`} />
              <span>{route.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
