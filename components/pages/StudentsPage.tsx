import { ArrowLeft, GraduationCap, Youtube, Github, FileText, Award, ExternalLink, Briefcase, MapPin, Clock, Calendar, Target, TrendingUp, Users, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { YouTubePlaylist } from '../YouTubePlaylist';
import { JobListings } from '../JobListings';
import { ProgressTracker } from '../ProgressTracker';
import { GitHubRepos } from '../GitHubRepos';
import { UdemyCourses } from '../UdemyCourses';
import { useSearch } from '../../contexts/SearchContext';
import { Logo } from '../Logo';

export function StudentsPage() {
  const { goBack } = useRouter();
  const { isSearchActive, searchQuery } = useSearch();

  const roadmapSteps = [
    {
      phase: "Foundation (Months 1-3)",
      skills: ["Programming fundamentals", "Data structures", "Basic algorithms"],
      resources: [
        { type: "youtube", title: "CS50 Harvard Course", url: "#" },
        { type: "github", title: "Algorithm Practice Repo", url: "#" },
        { type: "course", title: "Codecademy Basics", url: "#" }
      ]
    },
    {
      phase: "Intermediate (Months 4-8)",
      skills: ["Web development", "Database management", "Version control"],
      resources: [
        { type: "youtube", title: "Full Stack Development", url: "#" },
        { type: "github", title: "Project Templates", url: "#" },
        { type: "course", title: "FreeCodeCamp Certification", url: "#" }
      ]
    },
    {
      phase: "Advanced (Months 9-12)",
      skills: ["System design", "Cloud platforms", "DevOps practices"],
      resources: [
        { type: "youtube", title: "System Design Primer", url: "#" },
        { type: "github", title: "Cloud Projects Collection", url: "#" },
        { type: "course", title: "AWS Certification Prep", url: "#" }
      ]
    }
  ];

  const internshipPrograms = [
    {
      company: "Google",
      program: "Google Summer of Code",
      duration: "12 weeks",
      type: "Remote",
      deadline: "March 31, 2025",
      stipend: "$6,000",
      requirements: ["Enrolled student", "Programming experience", "Open source contribution"],
      focus: "Open Source Development"
    },
    {
      company: "Microsoft",
      program: "Software Engineering Intern",
      duration: "12 weeks",
      type: "Hybrid",
      deadline: "February 15, 2025",
      stipend: "$8,500/month",
      requirements: ["CS/related major", "Data structures knowledge", "Problem solving skills"],
      focus: "Product Development"
    },
    {
      company: "Meta",
      program: "Meta University",
      duration: "10 weeks",
      type: "On-site",
      deadline: "January 31, 2025",
      stipend: "$9,000/month",
      requirements: ["Underrepresented minority", "Sophomore/Junior", "3.0+ GPA"],
      focus: "Mobile/Web Development"
    },
    {
      company: "Amazon",
      program: "SDE Intern",
      duration: "12 weeks",
      type: "On-site/Remote",
      deadline: "March 1, 2025",
      stipend: "$8,000/month",
      requirements: ["CS fundamentals", "Programming languages", "System design basics"],
      focus: "Cloud Computing"
    },
    {
      company: "Apple",
      program: "Software Engineering Intern",
      duration: "12 weeks",
      type: "On-site",
      deadline: "February 28, 2025",
      stipend: "$9,500/month",
      requirements: ["Strong academic record", "iOS/macOS interest", "Swift/Objective-C"],
      focus: "iOS/macOS Development"
    },
    {
      company: "Netflix",
      program: "Software Engineer Intern",
      duration: "12 weeks",
      type: "Hybrid",
      deadline: "January 15, 2025",
      stipend: "$10,000/month",
      requirements: ["Junior/Senior level", "Full-stack experience", "Streaming tech interest"],
      focus: "Streaming Technology"
    }
  ];

  const applicationTips = [
    {
      title: "Start Early",
      description: "Begin applications 6-9 months in advance. Most tech companies open applications in August-October for summer internships.",
      icon: Clock
    },
    {
      title: "Build Projects",
      description: "Create 3-5 substantial projects showcasing different technologies and problem-solving skills.",
      icon: Github
    },
    {
      title: "Network Actively",
      description: "Attend career fairs, tech meetups, and connect with employees on LinkedIn for referrals.",
      icon: Briefcase
    },
    {
      title: "Practice Interviews",
      description: "Master data structures, algorithms, and system design concepts through consistent practice.",
      icon: Award
    }
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", provider: "Amazon", duration: "2-3 months", difficulty: "Beginner" },
    { name: "Google Cloud Associate", provider: "Google", duration: "3-4 months", difficulty: "Intermediate" },
    { name: "Microsoft Azure Fundamentals", provider: "Microsoft", duration: "2-3 months", difficulty: "Beginner" },
    { name: "CompTIA Security+", provider: "CompTIA", duration: "4-6 months", difficulty: "Intermediate" }
  ];

  const projects = [
    { title: "Personal Portfolio Website", tech: "HTML, CSS, JavaScript", difficulty: "Beginner" },
    { title: "Task Management App", tech: "React, Node.js, MongoDB", difficulty: "Intermediate" },
    { title: "E-commerce Platform", tech: "React, Express, PostgreSQL", difficulty: "Advanced" },
    { title: "Real-time Chat Application", tech: "Socket.io, Node.js, Redis", difficulty: "Advanced" }
  ];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'youtube': return Youtube;
      case 'github': return Github;
      case 'course': return Award;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Remote': return 'bg-green-100 text-green-800';
      case 'On-site': return 'bg-blue-100 text-blue-800';
      case 'Hybrid': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100"
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-gray-800 mb-2">Student Career Roadmap</h1>
              <p className="text-gray-600">Comprehensive learning path with resources and milestones</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Progress Tracker */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Progress Tracker</h3>
              <ProgressTracker roadmapSteps={roadmapSteps} />
            </div>

            {/* Learning Path Section */}
            <div>
              <h3 className="text-xl text-gray-800 mb-6">12-Month Learning Path</h3>
              <div className="space-y-6">
                {roadmapSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30"
                  >
                    <h4 className="text-lg text-gray-800 mb-4">{step.phase}</h4>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-gray-700 mb-3">Key Skills to Learn:</h5>
                        <ul className="space-y-2">
                          {step.skills.map((skill, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-gray-700 mb-3">Learning Resources:</h5>
                        <div className="space-y-3">
                          {step.resources.map((resource, idx) => {
                            const IconComponent = getResourceIcon(resource.type);
                            return (
                              <div key={idx} className="flex items-center justify-between bg-white/50 rounded-xl p-3">
                                <div className="flex items-center">
                                  <IconComponent className="h-5 w-5 text-blue-600 mr-3" />
                                  <span className="text-gray-700">{resource.title}</span>
                                </div>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="rounded-lg"
                                  onClick={() => {
                                    // Generate realistic resource URLs based on type
                                    let url = '#';
                                    if (resource.type === 'youtube') {
                                      url = `https://www.youtube.com/results?search_query=${encodeURIComponent(resource.title)}`;
                                    } else if (resource.type === 'github') {
                                      url = `https://github.com/search?q=${encodeURIComponent(resource.title)}`;
                                    } else if (resource.type === 'course') {
                                      url = `https://www.codecademy.com/search?query=${encodeURIComponent(resource.title)}`;
                                    }
                                    window.open(url, '_blank');
                                  }}
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </Button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl text-gray-800 mb-6">Recommended Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30">
                      <h4 className="text-gray-800 mb-2">{cert.name}</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Provider: </span>
                          <span className="text-gray-700">{cert.provider}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Duration: </span>
                          <span className="text-gray-700">{cert.duration}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-500">Difficulty: </span>
                          <span className={`px-2 py-1 rounded-lg text-xs ${
                            cert.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                          }`}>
                            {cert.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 mb-6">Portfolio Projects</h3>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30">
                      <h4 className="text-gray-800 mb-2">{project.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{project.tech}</p>
                      <div className="flex justify-between items-center">
                        <span className={`px-2 py-1 rounded-lg text-xs ${
                          project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {project.difficulty}
                        </span>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="rounded-lg"
                          onClick={() => {
                            // Generate GitHub template URLs based on project type
                            const projectTemplates: Record<string, string> = {
                              'Personal Portfolio Website': 'https://github.com/topics/portfolio-website',
                              'Task Management App': 'https://github.com/topics/task-management',
                              'E-commerce Platform': 'https://github.com/topics/ecommerce',
                              'Real-time Chat Application': 'https://github.com/topics/chat-application'
                            };
                            const url = projectTemplates[project.title] || 'https://github.com/explore';
                            window.open(url, '_blank');
                          }}
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Template
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-xl text-gray-800 mb-4">Success Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">1</div>
                  <h4 className="text-gray-800 text-sm">Month 3</h4>
                  <p className="text-gray-600 text-xs">First project completed</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">2</div>
                  <h4 className="text-gray-800 text-sm">Month 6</h4>
                  <p className="text-gray-600 text-xs">Portfolio website live</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">3</div>
                  <h4 className="text-gray-800 text-sm">Month 9</h4>
                  <p className="text-gray-600 text-xs">First certification earned</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">4</div>
                  <h4 className="text-gray-800 text-sm">Month 12</h4>
                  <p className="text-gray-600 text-xs">Ready for internships</p>
                </div>
              </div>
            </div>

            {/* Learning Resources */}
            <div className="space-y-6">
              <YouTubePlaylist
                searchQuery={isSearchActive && searchQuery ? `${searchQuery} tutorial beginner` : "web development tutorial hindi beginners"}
                title="📚 Foundation Learning Videos"
              />
              
              <GitHubRepos
                searchQuery={isSearchActive && searchQuery ? searchQuery : "programming beginner projects"}
                title="📂 Essential Repositories"
                maxResults={6}
              />
              
              <UdemyCourses
                searchQuery={isSearchActive && searchQuery ? searchQuery : "programming beginner course"}
                title="🎓 Recommended Courses"
                maxResults={6}
              />
              
              <YouTubePlaylist
                searchQuery={isSearchActive && searchQuery ? `${searchQuery} interview preparation` : "data structures algorithms coding interview preparation"}
                title="💻 Programming & Problem Solving"
              />
              
              <YouTubePlaylist
                searchQuery={isSearchActive && searchQuery ? `${searchQuery} advanced projects` : "react node.js full stack projects portfolio"}
                title="🚀 Advanced Project Tutorials"
              />
            </div>

            {/* Job Opportunities */}
            <JobListings
              category="student"
              title="🎯 Internship & Entry-level Opportunities"
              maxResults={6}
            />

            {/* Internship Opportunities Section */}
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="h-5 w-5 text-orange-600 mr-2" />
                <h3 className="text-xl text-gray-800">Premium Internship Programs</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {internshipPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg text-gray-800 mb-1">{program.company}</h4>
                        <p className="text-gray-600 text-sm">{program.program}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-lg text-xs ${getTypeColor(program.type)}`}>
                        {program.type}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-gray-500 block">Duration</span>
                        <span className="text-gray-800">{program.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Stipend</span>
                        <span className="text-gray-800">{program.stipend}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Deadline</span>
                        <span className="text-red-600">{program.deadline}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Focus</span>
                        <span className="text-gray-800">{program.focus}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-gray-500 text-sm block mb-2">Requirements:</span>
                      <ul className="text-xs text-gray-700 space-y-1">
                        {program.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl"
                        onClick={() => window.open(`https://www.linkedin.com/company/${program.company.toLowerCase()}/jobs/`, '_blank')}
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        Apply on LinkedIn
                      </Button>
                      
                      {/* HR Contacts */}
                      <div className="bg-white/50 rounded-xl p-3">
                        <p className="text-xs text-gray-500 mb-2">Connect with Recruiters:</p>
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-xs"
                            onClick={() => window.open(`https://www.linkedin.com/in/${program.company.toLowerCase()}-recruiting`, '_blank')}
                          >
                            <Users className="h-3 w-3 mr-1" />
                            HR Team
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-xs"
                            onClick={() => window.open(`https://www.linkedin.com/in/${program.company.toLowerCase()}-university-recruiting`, '_blank')}
                          >
                            <GraduationCap className="h-3 w-3 mr-1" />
                            University Relations
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Application Tips */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6">
                <h4 className="text-lg text-gray-800 mb-4">Internship Application Tips</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {applicationTips.map((tip, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <tip.icon className="h-6 w-6 text-white" />
                      </div>
                      <h5 className="text-gray-800 mb-2">{tip.title}</h5>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}