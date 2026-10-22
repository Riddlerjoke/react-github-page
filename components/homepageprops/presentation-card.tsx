import React from "react";
import { CardProps } from "@/types";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Card: React.FC<CardProps> = ({ name, description, link, tags = [], github, category }) => {
  const repoUrl = github || link;

  return (
    <article className="flex flex-col justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-700">
      <div>
        {category && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full mb-3">
            {category}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700/60">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label={`Voir le code GitHub du projet ${name} (nouvelle fenêtre)`}
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>Dépôt GitHub</span>
            </a>
          )}
          {link && link !== repoUrl && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline ml-auto"
              aria-label={`Voir la démo en ligne de ${name} (nouvelle fenêtre)`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Démo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;