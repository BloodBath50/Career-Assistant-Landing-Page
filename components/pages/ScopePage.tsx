import { ArrowLeft, Target, CheckCircle, Users, Briefcase } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { Logo } from '../Logo';

export function ScopePage() {
  const { goBack } = useRouter();

  const responsibilities = [
    "Define project requirements and technical specifications",
    "Collaborate with cross-functional teams to deliver solutions",
    "Analyze user needs and translate them into technical requirements",
    "Ensure quality standards and best practices are maintained",
    "Mentor junior team members and provide technical guidance",
    "Stay updated with industry trends and emerging technologies"
  ];

  const skills = [
    "Technical expertise in relevant programming languages",
    "Problem-solving and analytical thinking",
    "Communication and collaboration skills",
    "Project management and leadership abilities",
    "Continuous learning and adaptability"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100"
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-gray-800 mb-2">Job Scope & Responsibilities</h1>
              <p className="text-gray-600">Comprehensive overview of role expectations and requirements</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-4">
                  <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-xl text-gray-800">Key Responsibilities</h3>
                </div>
                <ul className="space-y-3">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-4">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  <h3 className="text-xl text-gray-800">Required Skills</h3>
                </div>
                <ul className="space-y-3">
                  {skills.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
            <h3 className="text-xl text-gray-800 mb-4">Career Impact</h3>
            <p className="text-gray-700 leading-relaxed">
              This role offers significant opportunities for professional growth and impact. You'll be at the forefront of 
              innovation, working on challenging projects that shape the future of technology. The scope includes both 
              technical and leadership responsibilities, making it an excellent stepping stone for senior positions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}