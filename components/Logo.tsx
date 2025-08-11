import { motion } from 'motion/react';
import { useRouter } from '../contexts/RouterContext';
import { Plane } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  const { navigateTo } = useRouter();

  return (
    <motion.button
      onClick={() => navigateTo('home')}
      className={`flex items-center space-x-3 group cursor-pointer ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {/* Airplane Symbol */}
      <motion.div 
        className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
      >
        <Plane className="h-4 w-4 text-white rotate-45" />
      </motion.div>
      
      <div className="flex flex-col items-start">
        <motion.h1 
          className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          Career Pilot
        </motion.h1>
        <motion.div
          className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.button>
  );
}