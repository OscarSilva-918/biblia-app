import { useState, useCallback } from 'react';
import { quizQuestions } from '../data/quizQuestions';
import type { Question } from '../types/quiz';

export function useQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion: Question = quizQuestions[currentQuestionIndex];

  const checkAnswer = useCallback((answerId: number): boolean => {
    const isCorrect = currentQuestion.answers.find(a => a.id === answerId)?.isCorrect ?? false;
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      setScore(prev => prev + 100);
    }
    return isCorrect;
  }, [currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setScore(0);
  }, []);

  const progress = Math.round((currentQuestionIndex / quizQuestions.length) * 100);

  return {
    currentQuestion,
    checkAnswer,
    nextQuestion,
    resetQuiz,
    progress,
    score,
    isFinished: currentQuestionIndex === quizQuestions.length - 1,
  };
}