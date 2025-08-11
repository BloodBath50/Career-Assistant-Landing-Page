import { ArrowLeft, Building2, Star, Users, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { Logo } from '../Logo';

export function TopCompaniesPage() {
  const { goBack } = useRouter();

  const topCompanies = [
    {
      name: "Google",
      rating: 4.8,
      employees: "156,000+",
      location: "Mountain View, CA",
      salaryRange: "$120,000 - $350,000",
      benefits: ["Stock options", "Free meals", "20% time", "Global offices"],
      openRoles: 1250
    },
    {
      name: "Microsoft",
      rating: 4.7,
      employees: "221,000+",
      location: "Redmond, WA",
      salaryRange: "$115,000 - $320,000",
      benefits: ["Comprehensive health", "Flexible work", "Learning budget", "Parental leave"],
      openRoles: 980
    },
    {
      name: "Apple",
      rating: 4.6,
      employees: "164,000+",
      location: "Cupertino, CA",
      salaryRange: "$125,000 - $380,000",
      benefits: ["Employee discounts", "Health programs", "Stock purchase", "Tuition assistance"],
      openRoles: 750
    },
    {
      name: "Amazon",
      rating: 4.5,
      employees: "1,541,000+",
      location: "Seattle, WA",
      salaryRange: "$110,000 - $290,000",
      benefits: ["Career development", "Health coverage", "401k matching", "Flexible schedules"],
      openRoles: 2100
    },
    {
      name: "Meta",
      rating: 4.4,
      employees: "87,000+",
      location: "Menlo Park, CA",
      salaryRange: "$130,000 - $400,000",
      benefits: ["Equity compensation", "Wellness programs", "Free transport", "Professional development"],
      openRoles: 450
    },
    {
      name: "Netflix",
      rating: 4.6,
      employees: "12,800+",
      location: "Los Gatos, CA",
      salaryRange: "$140,000 - $450,000",
      benefits: ["Unlimited PTO", "Top of market pay", "Freedom & responsibility", "Travel stipend"],
      openRoles: 180
    }
  ];

  const startups = [
    { name: "OpenAI", funding: "$10B+", stage: "Late Stage", focus: "AI/ML" },
    { name: "Stripe", funding: "$6.5B+", stage: "Late Stage", focus: "Fintech" },
    { name: "Figma", funding: "$400M+", stage: "Growth", focus: "Design Tools" },
    { name: "Notion", funding: "$340M+", stage: "Growth", focus: "Productivity" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100"
    >
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <Logo />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-gray-800 mb-2">Top Companies & Employers</h1>
              <p className="text-gray-600">Leading organizations actively hiring in this field</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-gray-800 mb-6">Fortune 500 Companies</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {topCompanies.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl text-gray-800 mb-1">{company.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            {company.rating}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {company.employees}
                          </div>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="rounded-xl"
                        onClick={() => {
                          const companyUrls: Record<string, string> = {
                            'Google': 'https://careers.google.com/',
                            'Microsoft': 'https://careers.microsoft.com/',
                            'Apple': 'https://jobs.apple.com/',
                            'Amazon': 'https://www.amazon.jobs/',
                            'Meta': 'https://www.metacareers.com/',
                            'Netflix': 'https://jobs.netflix.com/'
                          };
                          const url = companyUrls[company.name] || `https://www.linkedin.com/company/${company.name.toLowerCase()}/jobs/`;
                          window.open(url, '_blank');
                        }}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Jobs
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">{company.location}</span>
                      </div>

                      <div>
                        <span className="text-sm text-gray-500">Salary Range: </span>
                        <span className="text-sm text-gray-800">{company.salaryRange}</span>
                      </div>

                      <div>
                        <span className="text-sm text-gray-500">Open Roles: </span>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-lg">
                          {company.openRoles} positions
                        </span>
                      </div>

                      <div>
                        <span className="text-sm text-gray-500 block mb-2">Top Benefits:</span>
                        <div className="flex flex-wrap gap-2">
                          {company.benefits.map((benefit, idx) => (
                            <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-lg">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl text-gray-800 mb-6">High-Growth Startups</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {startups.map((startup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-white/30"
                  >
                    <h4 className="text-lg text-gray-800 mb-2">{startup.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">Funding: </span>
                        <span className="text-gray-800">{startup.funding}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Stage: </span>
                        <span className="text-gray-800">{startup.stage}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Focus: </span>
                        <span className="text-gray-800">{startup.focus}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-xl text-gray-800 mb-4">Application Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tailor your resume to highlight relevant experience and skills</li>
                <li>• Build a strong online presence (GitHub, LinkedIn, portfolio)</li>
                <li>• Practice technical interviews and system design problems</li>
                <li>• Network with current employees through professional platforms</li>
                <li>• Stay updated with company culture and recent developments</li>
                <li>• Prepare for behavioral questions that demonstrate cultural fit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}