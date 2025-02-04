import { ReactNode } from "react";

export const portableTextComponents = {
  types: {},
  block: {
    // Pour les paragraphes
    normal: ({ children }: { children: ReactNode }) => (
      <p className="my-4 text-lg text-gray-700">{children}</p>
    ),
    // Pour les titres de niveau 1
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    // Pour les titres de niveau 2
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="text-3xl font-bold my-4">{children}</h2>
    ),
    // Vous pouvez ajouter d'autres styles pour h3, h4, etc.
  },
  list: {
    bullet: ({ children }: { children: ReactNode }) => (
      <ul className="list-disc ml-5 my-4">{children}</ul>
    ),
    number: ({ children }: { children: ReactNode }) => (
      <ol className="list-decimal ml-5 my-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: ReactNode }) => (
      <li className="my-2">{children}</li>
    ),
    number: ({ children }: { children: ReactNode }) => (
      <li className="my-2">{children}</li>
    ),
  },
  marks: {
    // Exemple de personnalisation pour le marqueur "strong"
    strong: ({ children }: { children: ReactNode }) => (
      <strong className="text-red-600">{children}</strong>
    ),
    // Vous pouvez ajouter d'autres styles pour 'em', 'underline', etc.
  },
};
