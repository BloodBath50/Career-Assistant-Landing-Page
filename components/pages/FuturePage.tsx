import { ArrowLeft, TrendingUp, Target, Zap, Rocket } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { Logo } from '../Logo';

export function FuturePage() {
  const { goBack } = useRouter();

  const careerPaths = [
    {
      title: "Technical Leadership",
      description: "Lead technical teams and architecture decisions",
      timeline: "5-7 years",
      salary: "$150,000 - $250,000",
      icon: Target
    },
    {
      title: "Product Management",
      description: "Drive product strategy and market success",
      timeline: "4-6 years",
      salary: "$140,000 - $220,000",
      icon: Rocket
    },
    {
      title: "Entrepreneurship",
      description: "Start your own company or join early-stage startups",
      timeline: "3-8 years",
      salary: "Equity-based",
      icon: Zap
    }
  ];

  const growthFactors = [
    "Industry is growing at 15% annually",
    "High demand for skilled professionals",
    "Remote work opportunities expanding globally",
    "Continuous learning and skill development required",
    "Strong job security and market stability"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-100"
    >
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <Logo />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={goBack}
          className="mb-8 hover:bg-white/50 rounded-xl"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-gray-800 mb-2">Future Prospects & Growth</h1>
              <p className="text-gray-600">Career advancement opportunities and industry outlook</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-gray-800 mb-6">Career Advancement Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {careerPaths.map((path, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                      <path.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg text-gray-800 mb-2">{path.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm">{path.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Timeline:</span>
                        <span className="text-gray-700">{path.timeline}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Salary:</span>
                        <span className="text-gray-700">{path.salary}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl text-gray-800 mb-4">Industry Growth Factors</h3>
                <ul className="space-y-3">
                  {growthFactors.map((factor, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 mb-4">Market Trends (2025-2030)</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                    <h4 className="text-gray-800 mb-2">AI & Machine Learning</h4>
                    <p className="text-gray-600 text-sm">Expected 40% growth in AI-related roles</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                    <h4 className="text-gray-800 mb-2">Remote-First Culture</h4>
                    <p className="text-gray-600 text-sm">70% of companies adopting remote work</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                    <h4 className="text-gray-800 mb-2">Sustainability Tech</h4>
                    <p className="text-gray-600 text-sm">Green technology sector expanding rapidly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl text-gray-800 mb-4">5-Year Outlook</h3>
              <p className="text-gray-700 leading-relaxed">
                The career outlook for this field is exceptionally positive. With digital transformation accelerating 
                across all industries, professionals in this space are positioned for significant growth. The convergence 
                of AI, cloud computing, and emerging technologies creates numerous opportunities for career advancement 
                and specialization. Companies are increasingly investing in talent development, offering clear paths 
                to leadership roles and competitive compensation packages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}