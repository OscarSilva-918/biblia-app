import type { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Fundamentos de la Fe",
    description: "Aprende los principios básicos del cristianismo",
    content: `
# Fundamentos de la Fe

## Introducción
La fe cristiana se basa en creencias fundamentales que han perdurado por siglos. En esta lección, exploraremos los principios básicos que todo creyente debe conocer.

## La Existencia de Dios
Dios es el creador de todo lo que existe. Es eterno, omnipotente, omnisciente y omnipresente. Su naturaleza es amor y justicia.

## La Biblia
La Biblia es la Palabra inspirada de Dios. Contiene 66 libros divididos en Antiguo y Nuevo Testamento, proporcionando guía para nuestra vida diaria.

## Jesucristo
Jesús es el Hijo de Dios, quien vino al mundo para salvarnos. Su vida, muerte y resurrección son centrales para nuestra fe.
    `,
    progress: 0,
    quiz: {
      questions: [
        {
          id: 1,
          question: "¿Cuáles son los atributos principales de Dios mencionados en la lección?",
          answers: [
            { id: 1, text: "Omnipotente, omnisciente y omnipresente", isCorrect: true },
            { id: 2, text: "Fuerte, sabio y presente", isCorrect: false },
            { id: 3, text: "Grande, poderoso y eterno", isCorrect: false },
            { id: 4, text: "Justo, bueno y misericordioso", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "¿Cuántos libros contiene la Biblia?",
          answers: [
            { id: 1, text: "39", isCorrect: false },
            { id: 2, text: "27", isCorrect: false },
            { id: 3, text: "66", isCorrect: true },
            { id: 4, text: "73", isCorrect: false }
          ]
        }
      ]
    }
  }
];