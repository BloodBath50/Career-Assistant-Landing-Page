import { GraduationCap, Briefcase, Compass } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useRouter } from '../contexts/RouterContext';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students',
    subtitle: 'Generate Roadmap',
    buttonText: 'Get Started',
    gradient: 'from-blue-600 to-indigo-700',
    bgGradient: 'from-blue-50/80 to-indigo-50/80',
    iconBg: 'from-blue-600 via-blue-700 to-indigo-700',
    page: 'students'
  },
  {
    icon: Briefcase,
    title: 'Already Working?',
    subtitle: 'Skill Enhancement Plan',
    buttonText: 'Upgrade Skills',
    gradient: 'from-indigo-600 to-blue-700',
    bgGradient: 'from-indigo-50/80 to-blue-50/80',
    iconBg: 'from-indigo-600 via-indigo-700 to-blue-700',
    page: 'professionals'
  },
  {
    icon: Compass,
    title: 'Just Curious?',
    subtitle: 'Get Transition Suggestions',
    buttonText: 'Explore Options',
    gradient: 'from-blue-700 to-slate-700',
    bgGradient: 'from-blue-50/80 to-slate-50/80',
    iconBg: 'from-blue-700 via-slate-600 to-slate-700',
    page: 'curious'
  }
];

export function AudienceSection() {
  const { navigateTo } = useRouter();

  const handleButtonClick = (page: string) => {
    navigateTo(page as any);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 mb-6">
            Choose Your Path
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Select your current stage to get personalized career guidance and roadmaps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group h-full"
            >
              <div className={`bg-gradient-to-br ${audience.bgGradient} backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60 h-full flex flex-col`}>
                <div className="text-center flex-1 flex flex-col">
                  <motion.div 
                    className={`w-24 h-24 mx-auto mb-8 bg-gradient-to-br ${audience.iconBg} rounded-3xl flex items-center justify-center shadow-xl`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotateY: 10,
                      boxShadow: "0 20px 40px rgba(30, 64, 175, 0.3)" 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <audience.icon className="h-12 w-12 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">
                    {audience.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-slate-600 mb-8 leading-relaxed flex-1">
                    {audience.subtitle}
                  </p>
                  
                  <Button 
                    size="lg"
                    onClick={() => handleButtonClick(audience.page)}
                    className={`w-full bg-gradient-to-r ${audience.gradient} hover:shadow-xl text-white shadow-lg rounded-2xl h-14 text-lg font-bold transition-all duration-300 group-hover:scale-105`}
                  >
                    {audience.buttonText}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}