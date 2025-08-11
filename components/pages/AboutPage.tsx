import { ArrowLeft, Users, Target, Award, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Logo } from '../Logo';

export function AboutPage() {
  const { goBack } = useRouter();

  const teamMembers = [
   {
      name: 'Hardik Singhal',
      role: 'Lead Developer & Project Manager',
      email: 'hardiksinghal@outlook.in',
      avatar: 'HS',
      specialization: ['Full-Stack Development', 'System Architecture', 'Team Leadership'],
      experience: '4+ years',
      bio: 'Passionate about creating scalable web applications and leading development teams. Hardik brings extensive experience in modern web technologies and project management.'
    },
    {
      name: 'Arjun Mukherjee',
      role: 'Frontend Developer & UI/UX Designer',
      email: 'arjunm7906@gmail.com',
      avatar: 'AM',
      specialization: ['React Development', 'User Experience Design', 'Design Systems'],
      experience: '3+ years',
      bio: 'Creative designer and developer who focuses on creating intuitive user experiences. Arjun combines technical skills with design thinking to build beautiful interfaces.'
    },
    {
      name: 'Divyansh Singh',
      role: 'Backend Developer & DevOps Engineer',
      email: '24dcs032@lnmiit.ac.in',
      avatar: 'DS',
      specialization: ['API Development', 'Cloud Infrastructure', 'Database Design'],
      experience: '3+ years',
      bio: 'Expert in building robust backend systems and managing cloud infrastructure. Divyansh ensures our platform is secure, scalable, and performs optimally.'
    },
    {
      name: 'Dhruv Mittal',
      role: 'Data Scientist & AI Engineer',
      email: '24ucs064@lnmiit.ac.in',
      avatar: 'DM',
      specialization: ['Machine Learning', 'Career Analytics', 'Data Processing'],
      experience: '3+ years',
      bio: 'Skilled in leveraging data and AI to provide personalized career insights. Dhruv develops the intelligent features that make our platform truly helpful.'
    }
  ];

  const milestones = [
    {
      date: "January 2025",
      title: "Project Inception",
      description: "Started as a college project to help fellow students with career guidance"
    },
    {
      date: "February 2025",
      title: "MVP Development",
      description: "Built the first version with basic features and career roadmaps"
    },
    {
      date: "March 2025",
      title: "AI Integration",
      description: "Added chatbot functionality and personalized recommendations"
    },
    {
      date: "April 2025",
      title: "Community Launch",
      description: "Launched publicly and started building our user community"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Accessibility",
      description: "Making career guidance free and accessible to everyone, regardless of background"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community where students and professionals help each other"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Using cutting-edge technology to solve real-world career challenges"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for quality in everything we build and every interaction we have"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100"
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
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl text-gray-800 mb-4">About LNMIIT Underdogs</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of students from The LNM Institute of Information Technology (LNMIIT), 
              dedicated to democratizing career guidance and making it accessible to everyone. What started as 
              a college project has evolved into a comprehensive platform helping thousands of students and 
              professionals navigate their career journeys.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To bridge the gap between academic learning and real-world career requirements by providing 
                  comprehensive, AI-powered career guidance that helps individuals make informed decisions about 
                  their professional future.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To become the go-to platform for career guidance in India, empowering millions of students 
                  and professionals with the knowledge, resources, and connections they need to build 
                  successful and fulfilling careers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl text-gray-800 mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
                        {member.avatar}
                      </div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-purple-600">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                      <div className="flex justify-center space-x-3">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="rounded-lg p-2"
                          onClick={() => window.open(`https://www.linkedin.com/in/${member.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="rounded-lg p-2"
                          onClick={() => {
                            if (member.name === 'Hardik Singhal') {
                              window.open('https://github.com/GoldernHaze', '_blank');
                            } else {
                              window.open(`https://github.com/${member.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank');
                            }
                          }}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="rounded-lg p-2"
                          onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl text-gray-800 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl text-gray-800 mb-8 text-center">Our Journey</h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                  <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg text-gray-800">{milestone.title}</h3>
                      <span className="text-sm text-purple-600">{milestone.date}</span>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Whether you have feedback, suggestions, or just want to say hello.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">mail.dsaf</span>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-gray-700">github.com/lnmiit-underdogs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}