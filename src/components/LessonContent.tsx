import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, CheckCircle } from 'lucide-react';
import { QuizModal } from './QuizModal';
import type { Lesson } from '../types/lesson';
import ReactMarkdown from 'react-markdown';

interface LessonContentProps {
  lesson: Lesson;
  onProgressUpdate: (progress: number) => void;
}

export function LessonContent({ lesson, onProgressUpdate }: LessonContentProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [hasFinishedReading, setHasFinishedReading] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const percentRead = (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100;
    
    if (percentRead > 90 && !hasFinishedReading) {
      setHasFinishedReading(true);
      onProgressUpdate(100);
    } else {
      onProgressUpdate(Math.round(percentRead));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-purple-100 rounded-lg">
          <Book className="w-6 h-6 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{lesson.title}</h2>
      </div>

      <div 
        className="prose max-w-none mb-8 h-[60vh] overflow-y-auto pr-4"
        onScroll={handleScroll}
      >
        <ReactMarkdown>{lesson.content}</ReactMarkdown>
      </div>

      {hasFinishedReading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">¡Lección completada!</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuiz(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Comenzar Quiz
          </motion.button>
        </motion.div>
      )}

      <QuizModal
        isOpen={showQuiz}
        onClose={() => setShowQuiz(false)}
        questions={lesson.quiz.questions}
      />
    </div>
  );
}