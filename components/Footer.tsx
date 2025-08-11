import { motion } from 'motion/react';
import { useRouter } from '../contexts/RouterContext';

export function Footer() {
  const { navigateTo } = useRouter();

  return (
    <footer className="py-12 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <button 
              onClick={() => navigateTo('about')}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
            >
              About
            </button>
            <span className="text-gray-600 hidden md:block">|</span>
            <button 
              onClick={() => navigateTo('contact')}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
            >
              Contact
            </button>
            <span className="text-gray-600 hidden md:block">|</span>
            <button 
              onClick={() => navigateTo('faq')}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
            >
              FAQ
            </button>
            <span className="text-gray-600 hidden md:block">|</span>
            <button 
              onClick={() => navigateTo('support')}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
            >
              Support Us
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500">
              © 2025 Career Assistant. Empowering your career journey with AI.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}