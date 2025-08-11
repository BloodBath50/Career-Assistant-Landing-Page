import { Target, DollarSign, TrendingUp, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { FeatureModal } from './FeatureModal';
import { useRouter } from '../contexts/RouterContext';
import { useSearch } from '../contexts/SearchContext';

const features = [
  {
    icon: Target,
    title: 'Scope',
    description: 'Detailed job responsibilities and requirements',
    briefInfo: 'Understand the complete scope of your target role including daily responsibilities, required skills, and career progression opportunities.',
    detailedDescription: 'Get comprehensive insights into job responsibilities, required qualifications, skill requirements, growth potential, and detailed analysis of what the role entails.'
  },
  {
    icon: DollarSign,
    title: 'Salary',
    description: 'Market-rate compensation insights',
    briefInfo: 'Explore salary ranges, compensation packages, and market trends for your target role across different experience levels and locations.',
    detailedDescription: 'Access detailed salary data including base compensation, bonuses, equity, benefits, and location-based adjustments for informed career decisions.'
  },
  {
    icon: TrendingUp,
    title: 'Future',
    description: 'Career growth and advancement opportunities',
    briefInfo: 'Discover future career prospects, advancement paths, industry growth trends, and long-term opportunities in your chosen field.',
    detailedDescription: 'Analyze career progression opportunities, industry outlook, growth potential, and strategic planning for long-term success in your field.'
  },
  {
    icon: Building2,
    title: 'Top Companies',
    description: 'Leading employers in your field',
    briefInfo: 'Find the best companies hiring in your field, including Fortune 500 companies, startups, and remote opportunities.',
    detailedDescription: 'Explore top employers, company cultures, hiring trends, application processes, and networking opportunities with industry leaders.'
  }
];

export function FeatureSection() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { navigateTo } = useRouter();
  const { isSearchActive, searchResults, searchQuery } = useSearch();

  const handleFeatureClick = (feature: any) => {
    // If search is active, use search-specific data
    if (isSearchActive && searchResults) {
      const searchSpecificFeature = {
        ...feature,
        briefInfo: getSearchSpecificInfo(feature.title),
        detailedDescription: getSearchSpecificDescription(feature.title)
      };
      setSelectedFeature(searchSpecificFeature);
    } else {
      setSelectedFeature(feature);
    }
    setIsModalOpen(true);
  };

  const getSearchSpecificInfo = (featureTitle: string) => {
    if (!searchResults) return '';
    
    switch (featureTitle) {
      case 'Scope':
        return `${searchResults.title}: ${searchResults.description}. Key skills include: ${searchResults.skills.slice(0, 3).join(', ')}.`;
      case 'Salary':
        return `${searchResults.title} salary ranges: Fresher ${searchResults.averageSalary.fresher}, Experienced ${searchResults.averageSalary.experienced}, Senior ${searchResults.averageSalary.senior}.`;
      case 'Future':
        return `${searchResults.title} growth outlook: ${searchResults.growthRate} annual growth with ${searchResults.jobOpenings} active positions. ${searchResults.futureProspects}`;
      case 'Top Companies':
        return `Top companies hiring for ${searchResults.title}: ${searchResults.topCompanies.slice(0, 3).map((c: any) => c.name).join(', ')} and more.`;
      default:
        return '';
    }
  };

  const getSearchSpecificDescription = (featureTitle: string) => {
    if (!searchResults) return '';
    
    switch (featureTitle) {
      case 'Scope':
        return `Complete scope analysis for ${searchResults.title} role including responsibilities, required skills (${searchResults.skills.join(', ')}), and career progression opportunities in ${searchResults.category} field.`;
      case 'Salary':
        return `Detailed salary analysis for ${searchResults.title}: Entry-level positions start at ${searchResults.averageSalary.fresher}, experienced professionals earn ${searchResults.averageSalary.experienced}, and senior roles command ${searchResults.averageSalary.senior}. Market shows ${searchResults.growthRate} annual growth.`;
      case 'Future':
        return `Future prospects for ${searchResults.title}: ${searchResults.futureProspects} Career path includes: ${searchResults.learningPath.join(' → ')}.`;
      case 'Top Companies':
        return `Leading employers for ${searchResults.title}: ${searchResults.topCompanies.map((c: any) => `${c.name} (${c.employees} employees, ${c.rating}★)`).join(', ')}. These companies offer excellent growth opportunities and competitive packages.`;
      default:
        return '';
    }
  };

  const handleKnowMore = () => {
    setIsModalOpen(false);
    if (selectedFeature) {
      const pageMap: { [key: string]: any } = {
        'Scope': 'scope',
        'Salary': 'salary',
        'Future': 'future',
        'Top Companies': 'top-companies'
      };
      navigateTo(pageMap[selectedFeature.title]);
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 mb-6 leading-tight">
            {isSearchActive && searchQuery ? 
              `${searchQuery} - Complete Career Analysis` : 
              'AI will give details of the job like scope, salary, future, top companies'
            }
          </h2>
          {isSearchActive && searchResults && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto font-medium"
            >
              Explore comprehensive insights for {searchResults.title} including market trends, salary data, and career opportunities.
            </motion.p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer perspective-1000"
              onClick={() => handleFeatureClick(feature)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:bg-white/95 transform group-hover:shadow-blue-500/25 h-full">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-3xl flex items-center justify-center relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.15,
                    rotateZ: 5,
                    rotateY: 8,
                    boxShadow: "0 25px 50px rgba(30, 64, 175, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Enhanced shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{
                      filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))"
                    }}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </motion.div>
                </motion.div>
                <h3 className="text-2xl font-black text-slate-800 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-center leading-relaxed font-semibold">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedFeature && (
          <FeatureModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onKnowMore={handleKnowMore}
            title={selectedFeature.title}
            briefInfo={selectedFeature.briefInfo}
            detailedDescription={selectedFeature.detailedDescription}
          />
        )}
      </div>
    </section>
  );
}