import React from 'react';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({ name, description, link }) => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Repository
      </a>
    </div>
  );
};

export default Card;