import { useState, useEffect } from 'react';
import { ArrowLeft, Search, TrendingUp, DollarSign, Building2, Users, MapPin, ExternalLink, Briefcase, GraduationCap, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useRouter } from '../contexts/RouterContext';
import { motion } from 'motion/react';
import { JobListings } from './JobListings';
import { YouTubePlaylist } from './YouTubePlaylist';

const GOOGLE_API_KEY = 'AIzaSyAiMFhdlUDFSFa15ps4FzYG5uJFf_rKE4o';

interface SearchResultsProps {
  searchQuery: string;
}

export function SearchResults({ searchQuery }: SearchResultsProps) {
  const { goBack } = useRouter();
  const [jobData, setJobData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchQuery) {
      fetchJobInformation();
    }
  }, [searchQuery]);

  const fetchJobInformation = async () => {
    setLoading(true);
    try {
      // Simulate search time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Use comprehensive mock data based on the search query
      const mockData = generateJobData(searchQuery);
      setJobData(mockData);
    } catch (error) {
      console.error('Error generating job data:', error);
      setJobData(generateJobData(searchQuery));
    } finally {
      setLoading(false);
    }
  };

  const generateJobData = (query: string) => {
    const jobTitle = query.toLowerCase();
    
    // Comprehensive job database
    const jobDatabase: Record<string, any> = {
      'software engineer': {
        title: 'Software Engineer',
        description: 'Design, develop, and maintain software applications and systems. Work with various programming languages and frameworks to create solutions that meet user needs.',
        averageSalary: {
          fresher: '₹4-8 LPA',
          experienced: '₹15-35 LPA',
          senior: '₹35-80+ LPA'
        },
        skills: ['Programming Languages', 'Data Structures & Algorithms', 'System Design', 'Version Control (Git)', 'Database Management', 'Web Technologies', 'Problem Solving'],
        growthRate: '+22%',
        jobOpenings: '50,000+',
        topCompanies: [
          { name: 'Google', logo: '🔍', employees: '2000+', rating: 4.5 },
          { name: 'Microsoft', logo: '💻', employees: '1800+', rating: 4.4 },
          { name: 'Amazon', logo: '📦', employees: '3000+', rating: 4.2 },
          { name: 'Flipkart', logo: '🛒', employees: '1500+', rating: 4.3 },
          { name: 'TCS', logo: '🏢', employees: '5000+', rating: 4.1 }
        ],
        learningPath: [
          'Master programming fundamentals',
          'Learn data structures and algorithms', 
          'Build full-stack projects',
          'Understand system design',
          'Practice coding interviews'
        ],
        futureProspects: 'Excellent growth potential with opportunities in AI/ML, cloud computing, and emerging technologies. High demand across all industries.'
      },
      'data scientist': {
        title: 'Data Scientist',
        description: 'Analyze complex data to extract insights and build predictive models. Use statistical analysis and machine learning to solve business problems.',
        averageSalary: {
          fresher: '₹6-12 LPA',
          experienced: '₹18-40 LPA',
          senior: '₹40-100+ LPA'
        },
        skills: ['Python/R Programming', 'Statistics & Mathematics', 'Machine Learning', 'Data Visualization', 'SQL', 'Big Data Technologies', 'Business Acumen'],
        growthRate: '+35%',
        jobOpenings: '25,000+',
        topCompanies: [
          { name: 'Netflix', logo: '🎬', employees: '500+', rating: 4.6 },
          { name: 'Uber', logo: '🚗', employees: '800+', rating: 4.3 },
          { name: 'Swiggy', logo: '🍔', employees: '400+', rating: 4.4 },
          { name: 'Paytm', logo: '💳', employees: '600+', rating: 4.2 },
          { name: 'Zomato', logo: '🍕', employees: '300+', rating: 4.3 }
        ],
        learningPath: [
          'Learn Python and statistics',
          'Master pandas and numpy',
          'Study machine learning algorithms',
          'Work on real datasets',
          'Build portfolio projects'
        ],
        futureProspects: 'Explosive growth expected with AI/ML adoption. High demand across finance, healthcare, e-commerce, and tech sectors.'
      },
      'product manager': {
        title: 'Product Manager',
        description: 'Drive product strategy and execution. Work with engineering, design, and business teams to build products that meet user needs and business goals.',
        averageSalary: {
          fresher: '₹8-15 LPA',
          experienced: '₹20-45 LPA',
          senior: '₹45-120+ LPA'
        },
        skills: ['Product Strategy', 'Market Research', 'User Experience', 'Data Analysis', 'Communication', 'Leadership', 'Technical Understanding'],
        growthRate: '+28%',
        jobOpenings: '15,000+',
        topCompanies: [
          { name: 'Meta', logo: '📘', employees: '400+', rating: 4.4 },
          { name: 'Google', logo: '🔍', employees: '600+', rating: 4.5 },
          { name: 'Flipkart', logo: '🛒', employees: '300+', rating: 4.3 },
          { name: 'PhonePe', logo: '📱', employees: '200+', rating: 4.4 },
          { name: 'Razorpay', logo: '💰', employees: '150+', rating: 4.5 }
        ],
        learningPath: [
          'Understand product fundamentals',
          'Learn market research techniques',
          'Practice data analysis',
          'Study successful products',
          'Build product portfolio'
        ],
        futureProspects: 'Strong growth as companies focus on user-centric products. Opportunities in fintech, edtech, and emerging technologies.'
      }
    };

    // Try to match the search query to our database
    const matchedJob = Object.keys(jobDatabase).find(key => 
      jobTitle.includes(key) || key.includes(jobTitle)
    );

    if (matchedJob) {
      return jobDatabase[matchedJob];
    }

    // Default fallback for unmatched queries
    return {
      title: query,
      description: `Explore career opportunities in ${query}. This role involves working with cutting-edge technologies and collaborating with talented teams to create impactful solutions.`,
      averageSalary: {
        fresher: '₹4-10 LPA',
        experienced: '₹12-30 LPA',
        senior: '₹30-60+ LPA'
      },
      skills: ['Domain Knowledge', 'Problem Solving', 'Communication', 'Teamwork', 'Technical Skills', 'Continuous Learning'],
      growthRate: '+20%',
      jobOpenings: '10,000+',
      topCompanies: [
        { name: 'TCS', logo: '🏢', employees: '1000+', rating: 4.1 },
        { name: 'Infosys', logo: '💼', employees: '800+', rating: 4.2 },
        { name: 'Wipro', logo: '🔧', employees: '600+', rating: 4.0 },
        { name: 'HCL', logo: '⚡', employees: '500+', rating: 4.1 },
        { name: 'Tech Mahindra', logo: '🚀', employees: '400+', rating: 4.0 }
      ],
      learningPath: [
        'Build foundational knowledge',
        'Develop relevant skills',
        'Gain practical experience',
        'Build professional network',
        'Stay updated with trends'
      ],
      futureProspects: 'Good growth potential with increasing digital transformation across industries.'
    };
  };

  if (loading || !jobData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Searching for career information...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={goBack}
          className="mb-8 hover:bg-white/50 rounded-xl"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Search
        </Button>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30">
          {/* Header */}
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
              <Search className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-gray-800 mb-2">{jobData.title}</h1>
              <p className="text-gray-600">{jobData.description}</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg text-gray-800 mb-2">Average Salary</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Fresher: {jobData.averageSalary.fresher}</div>
                  <div>Experienced: {jobData.averageSalary.experienced}</div>
                  <div>Senior: {jobData.averageSalary.senior}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg text-gray-800 mb-2">Growth Rate</h3>
                <p className="text-2xl text-blue-600">{jobData.growthRate}</p>
                <p className="text-sm text-gray-600">Year over year</p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-6 text-center">
                <Briefcase className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg text-gray-800 mb-2">Job Openings</h3>
                <p className="text-2xl text-purple-600">{jobData.jobOpenings}</p>
                <p className="text-sm text-gray-600">Active positions</p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-6 text-center">
                <Building2 className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="text-lg text-gray-800 mb-2">Top Companies</h3>
                <p className="text-2xl text-orange-600">{jobData.topCompanies.length}+</p>
                <p className="text-sm text-gray-600">Hiring actively</p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-800 mb-6">Required Skills</h2>
            <div className="flex flex-wrap gap-3">
              {jobData.skills.map((skill: string, index: number) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Top Companies */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-800 mb-6">Top Hiring Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobData.topCompanies.map((company: any, index: number) => (
                <Card key={index} className="bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-xl mr-3">
                          {company.logo}
                        </div>
                        <div>
                          <h4 className="text-gray-800">{company.name}</h4>
                          <p className="text-sm text-gray-600">{company.employees} employees</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-700">{company.rating}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(`https://www.linkedin.com/company/${company.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Jobs
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* YouTube Learning Resources */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-800 mb-6">Learning Resources</h2>
            <div className="space-y-6">
              <YouTubePlaylist
                searchQuery={`${jobData.title} tutorial beginner guide`}
                title="🎯 Getting Started Guide"
                maxResults={4}
              />
              <YouTubePlaylist
                searchQuery={`${jobData.title} interview preparation questions`}
                title="💼 Interview Preparation"
                maxResults={4}
              />
              <YouTubePlaylist
                searchQuery={`${jobData.title} career path roadmap`}
                title="🚀 Career Roadmap"
                maxResults={4}
              />
            </div>
          </div>

          {/* Job Opportunities */}
          <div className="mb-12">
            <JobListings
              category="curious"
              title={`🌟 Current ${jobData.title} Opportunities`}
              maxResults={6}
            />
          </div>

          {/* Learning Path */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-800 mb-6">Learning Path</h2>
            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {jobData.learningPath.map((step: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm mr-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Prospects */}
          <div>
            <h2 className="text-2xl text-gray-800 mb-6">Future Prospects</h2>
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{jobData.futureProspects}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}