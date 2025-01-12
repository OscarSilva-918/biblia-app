import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
}

export function Timer({ duration, onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      setTimeLeft(duration);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, duration, onTimeUp]);

  const percentage = (timeLeft / duration) * 100;

  return (
    <div className="flex items-center gap-2">
      <Clock className="w-5 h-5 text-blue-600" />
      <div className="relative w-16 h-6 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: `${percentage}%` }}
          className="absolute inset-0 bg-blue-600"
        />
        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
          {timeLeft}s
        </span>
      </div>
    </div>
  );
}