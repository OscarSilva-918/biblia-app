import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { QuizModal } from '../components/QuizModal';

export function QuizPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Quiz Bíblico</h1>
        <p className="text-lg text-gray-600 mb-8">
          Pon a prueba tu conocimiento bíblico con nuestro quiz interactivo.
          ¡Tienes 30 segundos para responder cada pregunta!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Brain className="w-5 h-5" />
          Comenzar Quiz
        </motion.button>
      </div>

      <QuizModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}