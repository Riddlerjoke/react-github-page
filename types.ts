import { ReactNode } from "react";

export interface LayoutProps {
  children?: ReactNode;
  params?: Record<string, any>;
}

export interface ProjectItem {
  name: string;
  description: string;
  tags?: string[];
  link?: string;
  github?: string;
  category?: string;
  role?: string;
  featured?: boolean;
}

export interface CardProps {
  name: string;
  description: string;
  link: string;
  tags?: string[];
  github?: string;
  category?: string;
}







