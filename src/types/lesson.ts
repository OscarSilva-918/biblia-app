import type { Question } from './quiz';

export interface Lesson {
  id: number;
  title: string;
  description: string;
  content: string;
  progress: number;
  quiz: {
    questions: Question[];
  };
}