import React, {Dispatch, FormEvent, ReactNode, SetStateAction} from 'react';

// Interface pour les propriétés de mise en page (layout)
export interface LayoutProps {
  children?: ReactNode; // Contenu enfant à afficher dans le layout
  params?: Record<string, any>; // Paramètres optionnels passés au layout
}


 export interface CardProps {
  name: string;
  description: string;
  link: string;
}







