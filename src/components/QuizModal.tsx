import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { QuizCard } from './QuizCard';
import { Timer } from './Timer';
import { useState } from 'react';
import type { Question } from '../types/quiz';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
}

export function QuizModal({ isOpen, onClose, questions }: QuizModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = Math.round((currentQuestionIndex / questions.length) * 100);

  const handleAnswer = (answerId: number) => {
    if (isCorrect !== null) return;
    
    setSelectedAnswer(answerId);
    const correct = currentQuestion.answers.find(a => a.id === answerId)?.isCorrect ?? false;
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 100);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        // Quiz finished
        setTimeout(onClose, 1500);
      }
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl relative w-full max-w-2xl bg-white rounded-xl shadow-2xl max-h-[98vh] overflow-y-auto"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Quiz de la Lección</h2>
                <Timer duration={30} onTimeUp={() => handleAnswer(-1)} />
              </div>
              
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="bg-blue-600 h-2 rounded-full"
                  />
                </div>
              </div>

              {currentQuestion && (
                <QuizCard
                  question={currentQuestion.question}
                  answers={currentQuestion.answers}
                  onAnswerSelect={handleAnswer}
                  selectedAnswer={selectedAnswer}
                  isCorrect={isCorrect}
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}