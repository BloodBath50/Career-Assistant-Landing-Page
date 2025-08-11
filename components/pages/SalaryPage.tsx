import { ArrowLeft, DollarSign, TrendingUp, MapPin, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { Logo } from '../Logo';

export function SalaryPage() {
  const { goBack } = useRouter();

  const salaryRanges = [
    { level: "Entry Level (0-2 years)", range: "$65,000 - $85,000", color: "from-green-400 to-blue-500" },
    { level: "Mid Level (3-5 years)", range: "$85,000 - $120,000", color: "from-blue-400 to-purple-500" },
    { level: "Senior Level (6+ years)", range: "$120,000 - $180,000", color: "from-purple-400 to-pink-500" },
    { level: "Lead/Principal (8+ years)", range: "$180,000 - $250,000+", color: "from-pink-400 to-red-500" }
  ];

  const locationFactors = [
    { location: "San Francisco, CA", multiplier: "1.8x", salary: "$140,000 - $200,000" },
    { location: "New York, NY", multiplier: "1.6x", salary: "$130,000 - $185,000" },
    { location: "Seattle, WA", multiplier: "1.5x", salary: "$125,000 - $175,000" },
    { location: "Austin, TX", multiplier: "1.2x", salary: "$100,000 - $140,000" },
    { location: "Remote", multiplier: "1.0x", salary: "$85,000 - $120,000" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-100"
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-gray-800 mb-2">Salary Insights & Compensation</h1>
              <p className="text-gray-600">Market-rate compensation data and earning potential</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-xl text-gray-800">Salary by Experience Level</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {salaryRanges.map((range, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-r ${range.color} p-6 rounded-2xl text-white shadow-lg`}
                  >
                    <h4 className="text-lg mb-2">{range.level}</h4>
                    <p className="text-2xl opacity-90">{range.range}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-xl text-gray-800">Location-Based Salary Adjustments</h3>
              </div>
              <div className="space-y-4">
                {locationFactors.map((location, index) => (
                  <div key={index} className="bg-white/50 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-gray-800">{location.location}</h4>
                      <p className="text-gray-600 text-sm">Market multiplier: {location.multiplier}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-800">{location.salary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-orange-600 mr-2" />
                <h3 className="text-xl text-gray-800">Additional Benefits & Compensation</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Stock options and equity participation (10-25% of base salary value)</li>
                <li>• Performance bonuses (5-20% of annual salary)</li>
                <li>• Comprehensive health insurance and dental coverage</li>
                <li>• 401(k) matching up to 6% of salary</li>
                <li>• Professional development budget ($2,000-$5,000 annually)</li>
                <li>• Flexible PTO and sabbatical opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}