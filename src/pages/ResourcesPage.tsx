import { useState } from 'react';
import { LessonContent } from '../components/LessonContent';
import { lessons } from '../data/lessons';

export function ResourcesPage() {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [lessonProgress, setLessonProgress] = useState<Record<number, number>>({});

  const handleProgressUpdate = (lessonId: number, progress: number) => {
    setLessonProgress(prev => ({
      ...prev,
      [lessonId]: progress
    }));
  };

  const currentLesson = selectedLesson !== null ? lessons.find(l => l.id === selectedLesson) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recursos de Estudio</h1>
      
      {currentLesson ? (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedLesson(null)}
            className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
          >
            ← Volver a recursos
          </button>
          
          <LessonContent
            lesson={currentLesson}
            onProgressUpdate={(progress) => handleProgressUpdate(currentLesson.id, progress)}
          />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map(lesson => (
            <div
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson.id)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
              <p className="text-gray-600 mb-4">{lesson.description}</p>
              
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Progreso</span>
                  <span className="text-sm font-medium text-purple-600">
                    {lessonProgress[lesson.id] || 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${lessonProgress[lesson.id] || 0}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}