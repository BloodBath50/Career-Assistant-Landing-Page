import { ArrowLeft, Compass, Linkedin, Building2, ExternalLink, Users, MapPin, Eye, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { YouTubePlaylist } from '../YouTubePlaylist';
import { JobListings } from '../JobListings';
import { Logo } from '../Logo';

export function CuriousPage() {
  const { goBack } = useRouter();

  const similarRoles = [
    {
      title: "Product Manager",
      similarity: "85%",
      description: "Strategic product planning and market analysis",
      averageSalary: "₹15-25 LPA",
      growthRate: "+18%",
      profileCount: 1250
    },
    {
      title: "UX Designer",
      similarity: "72%",
      description: "User experience design and research",
      averageSalary: "₹8-18 LPA",
      growthRate: "+22%",
      profileCount: 890
    },
    {
      title: "Business Analyst",
      similarity: "68%",
      description: "Data analysis and business process optimization",
      averageSalary: "₹6-15 LPA",
      growthRate: "+15%",
      profileCount: 2100
    },
    {
      title: "Data Scientist",
      similarity: "75%",
      description: "Advanced analytics and machine learning",
      averageSalary: "₹12-28 LPA",
      growthRate: "+35%",
      profileCount: 670
    }
  ];

  const linkedinProfiles = [
    {
      name: "Amit Sharma",
      role: "Senior Product Manager",
      company: "Flipkart",
      location: "Bangalore, India",
      connections: "500+",
      experience: "8 years",
      skills: ["Product Strategy", "Market Research", "Team Leadership"]
    },
    {
      name: "Sneha Gupta",
      role: "Lead UX Designer",
      company: "Zomato",
      location: "Gurgaon, India",
      connections: "1,000+",
      experience: "6 years",
      skills: ["User Research", "Design Systems", "Prototyping"]
    },
    {
      name: "Rohit Kumar",
      role: "Principal Data Scientist",
      company: "Paytm",
      location: "Noida, India",
      connections: "750+",
      experience: "10 years",
      skills: ["Machine Learning", "Python", "Statistical Analysis"]
    }
  ];

  const jobOpenings = [
    {
      company: "Swiggy",
      role: "Product Manager",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹18-25 LPA",
      posted: "2 days ago",
      applicants: 45
    },
    {
      company: "Ola",
      role: "Senior UX Designer",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹12-18 LPA",
      posted: "1 week ago",
      applicants: 32
    },
    {
      company: "PhonePe",
      role: "Data Scientist",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹20-30 LPA",
      posted: "3 days ago",
      applicants: 78
    },
    {
      company: "Razorpay",
      role: "Business Analyst",
      location: "Remote",
      type: "Full-time",
      salary: "₹8-15 LPA",
      posted: "5 days ago",
      applicants: 25
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-100"
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
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
              <Compass className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-gray-800 mb-2">Career Exploration & Transition</h1>
              <p className="text-gray-600">Discover similar roles and networking opportunities</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* YouTube Learning Resources */}
            <div className="space-y-6">
              <YouTubePlaylist
                searchQuery="career change transition tips professional development"
                title="🔍 Career Exploration & Transition"
              />
              <YouTubePlaylist
                searchQuery="how to change career switch jobs interview preparation"
                title="💼 Job Search & Interview Strategies"
              />
              <YouTubePlaylist
                searchQuery="upskill reskill online courses professional growth"
                title="📚 Skill Development & Learning"
              />
            </div>

            {/* Job Opportunities */}
            <JobListings
              category="curious"
              title="🌟 Career Change & Entry Opportunities"
              maxResults={6}
            />

            <div>
              <h3 className="text-xl text-gray-800 mb-6">Similar Career Options</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {similarRoles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg text-gray-800 mb-1">{role.title}</h4>
                        <p className="text-gray-600 text-sm">{role.description}</p>
                      </div>
                      <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {role.similarity} match
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 block">Avg Salary</span>
                        <span className="text-gray-800">{role.averageSalary}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Growth</span>
                        <span className="text-green-600">{role.growthRate}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Professionals</span>
                        <span className="text-gray-800">{role.profileCount}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl">
                      <Users className="h-4 w-4 mr-2" />
                      View Profiles
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Linkedin className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-xl text-gray-800">Professional Network Connections</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {linkedinProfiles.map((profile, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30"
                  >
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                        {profile.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h4 className="text-gray-800">{profile.name}</h4>
                      <p className="text-gray-600 text-sm">{profile.role}</p>
                      <p className="text-gray-500 text-sm">{profile.company}</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">{profile.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Connections:</span>
                        <span className="text-gray-700">{profile.connections}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Experience:</span>
                        <span className="text-gray-700">{profile.experience}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-gray-500 text-sm block mb-2">Top Skills:</span>
                      <div className="flex flex-wrap gap-1">
                        {profile.skills.map((skill, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View LinkedIn
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Building2 className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="text-xl text-gray-800">Current Job Openings</h3>
              </div>
              <div className="space-y-4">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="text-lg text-gray-800 mr-3">{job.role}</h4>
                          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs">
                            {job.type}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{job.company}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500 block">Location</span>
                            <span className="text-gray-700">{job.location}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">Salary</span>
                            <span className="text-gray-700">{job.salary}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">Posted</span>
                            <span className="text-gray-700">{job.posted}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">Applicants</span>
                            <span className="text-gray-700">{job.applicants}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="ml-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Apply
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-2xl p-6">
              <h3 className="text-xl text-gray-800 mb-4">Career Transition Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• Leverage transferable skills from your current role</li>
                  <li>• Build a portfolio showcasing relevant projects</li>
                  <li>• Network with professionals in your target field</li>
                  <li>• Consider taking relevant courses or certifications</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Update your LinkedIn profile with new interests</li>
                  <li>• Attend industry events and workshops</li>
                  <li>• Start with freelance or part-time opportunities</li>
                  <li>• Seek informational interviews with industry experts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}