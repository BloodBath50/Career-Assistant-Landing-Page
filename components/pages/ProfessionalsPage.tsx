import { ArrowLeft, Briefcase, Users, BookOpen, MessageCircle, Award, TrendingUp, Building, Zap, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { YouTubePlaylist } from '../YouTubePlaylist';
import { JobListings } from '../JobListings';
import { Logo } from '../Logo';

export function ProfessionalsPage() {
  const { goBack } = useRouter();

  const skillTracks = [
    {
      category: "Leadership & Management",
      skills: ["Team Leadership", "Project Management", "Strategic Planning", "Performance Management"],
      courses: [
        { title: "Executive Leadership Program", provider: "LinkedIn Learning", duration: "6 weeks" },
        { title: "Agile Project Management", provider: "Coursera", duration: "4 weeks" }
      ]
    },
    {
      category: "Technical Advancement",
      skills: ["Cloud Architecture", "AI/ML Integration", "Cybersecurity", "DevOps"],
      courses: [
        { title: "AWS Solutions Architect", provider: "AWS", duration: "8 weeks" },
        { title: "Machine Learning for Professionals", provider: "edX", duration: "10 weeks" }
      ]
    },
    {
      category: "Business Strategy",
      skills: ["Market Analysis", "Product Strategy", "Financial Planning", "Innovation Management"],
      courses: [
        { title: "Business Strategy Specialization", provider: "Wharton", duration: "12 weeks" },
        { title: "Product Management Fundamentals", provider: "Google", duration: "6 weeks" }
      ]
    }
  ];

  const mentors = [
    {
      name: "Rajesh Sharma",
      role: "Senior Engineering Manager",
      company: "TCS",
      experience: "12 years",
      specialties: ["Team Leadership", "Technical Architecture", "Career Growth"],
      rating: 4.9,
      sessions: 150
    },
    {
      name: "Priya Agarwal",
      role: "VP of Product",
      company: "Flipkart",
      experience: "15 years",
      specialties: ["Product Strategy", "Market Analysis", "Innovation"],
      rating: 4.8,
      sessions: 200
    },
    {
      name: "Dr. Ankit Gupta",
      role: "Chief Technology Officer",
      company: "Paytm",
      experience: "18 years",
      specialties: ["Technical Leadership", "Fintech Growth", "AI/ML Strategy"],
      rating: 4.9,
      sessions: 75
    }
  ];

  const networkingEvents = [
    { title: "Tech Leadership Summit", date: "March 15, 2025", location: "Bangalore", type: "Conference" },
    { title: "AI Innovation Workshop", date: "March 22, 2025", location: "Virtual", type: "Workshop" },
    { title: "Product Management Meetup", date: "April 5, 2025", location: "Mumbai", type: "Meetup" },
    { title: "Women in Tech Panel", date: "April 12, 2025", location: "Delhi NCR", type: "Panel" }
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-gray-800 mb-2">Skills Enhancement Plan</h1>
              <p className="text-gray-600">Advanced learning paths and professional mentorship</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* YouTube Learning Resources */}
            <div className="space-y-6">
              <YouTubePlaylist
                searchQuery="leadership management skills professional development hindi"
                title="🎯 Leadership & Management"
              />
              <YouTubePlaylist
                searchQuery="system design architecture senior developer advanced"
                title="⚡ Advanced Technical Skills"
              />
              <YouTubePlaylist
                searchQuery="product management strategy career growth professional"
                title="📈 Strategic Business Skills"
              />
            </div>

            {/* Job Opportunities */}
            <JobListings
              category="professional"
              title="🚀 Senior & Leadership Opportunities"
              maxResults={6}
            />

            <div>
              <h3 className="text-xl text-gray-800 mb-6">Skill Development Tracks</h3>
              <div className="space-y-6">
                {skillTracks.map((track, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30"
                  >
                    <h4 className="text-lg text-gray-800 mb-4">{track.category}</h4>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-gray-700 mb-3">Core Skills:</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {track.skills.map((skill, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-2 rounded-xl text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-gray-700 mb-3">Recommended Courses:</h5>
                        <div className="space-y-3">
                          {track.courses.map((course, idx) => (
                            <div key={idx} className="bg-white/50 rounded-xl p-3">
                              <h6 className="text-gray-800 text-sm">{course.title}</h6>
                              <div className="flex justify-between text-xs text-gray-600 mt-1">
                                <span>{course.provider}</span>
                                <span>{course.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Users className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="text-xl text-gray-800">Connect with Industry Mentors</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {mentors.map((mentor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30"
                  >
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h4 className="text-gray-800">{mentor.name}</h4>
                      <p className="text-gray-600 text-sm">{mentor.role}</p>
                      <p className="text-gray-500 text-sm">{mentor.company}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Experience:</span>
                        <span className="text-gray-700">{mentor.experience}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Rating:</span>
                        <span className="text-gray-700">⭐ {mentor.rating} ({mentor.sessions} sessions)</span>
                      </div>

                      <div>
                        <span className="text-gray-500 text-sm block mb-2">Specialties:</span>
                        <div className="flex flex-wrap gap-1">
                          {mentor.specialties.map((specialty, idx) => (
                            <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <Button 
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl"
                          onClick={() => window.open(`https://www.linkedin.com/in/${mentor.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          Connect on LinkedIn
                        </Button>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => window.open(`https://calendly.com/${mentor.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Book Session
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-2" />
                  <h3 className="text-xl text-gray-800">Upcoming Networking Events</h3>
                </div>
                <div className="space-y-4">
                  {networkingEvents.map((event, index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30">
                      <h4 className="text-gray-800 mb-2">{event.title}</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Date: </span>
                          <span className="text-gray-700">{event.date}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Location: </span>
                          <span className="text-gray-700">{event.location}</span>
                        </div>
                        <div className="col-span-2">
                          <span className={`px-2 py-1 rounded-lg text-xs ${
                            event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                            event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                            event.type === 'Meetup' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="text-xl text-gray-800">Career Growth Metrics</h3>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-gray-800 mb-3">Skill Assessment Progress</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Technical Skills</span>
                            <span className="text-gray-800">78%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Leadership Skills</span>
                            <span className="text-gray-800">65%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full w-2/3"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Business Acumen</span>
                            <span className="text-gray-800">82%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full w-4/5"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-gray-800 mb-3">Next Career Milestones</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center text-gray-700">
                          <Award className="h-4 w-4 text-yellow-500 mr-2" />
                          Complete AWS Certification (3 months)
                        </li>
                        <li className="flex items-center text-gray-700">
                          <Award className="h-4 w-4 text-yellow-500 mr-2" />
                          Lead cross-functional project (6 months)
                        </li>
                        <li className="flex items-center text-gray-700">
                          <Award className="h-4 w-4 text-yellow-500 mr-2" />
                          Senior role promotion (12 months)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}