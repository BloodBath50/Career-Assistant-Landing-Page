import { useState, useEffect } from 'react';
import { Building2, MapPin, IndianRupee, Clock, ExternalLink, Loader2, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  skills: string[];
  postedDate: string;
  description: string;
  applyUrl?: string;
}

interface JobListingsProps {
  category: 'student' | 'professional' | 'curious';
  title: string;
  maxResults?: number;
}

export function JobListings({ category, title, maxResults = 8 }: JobListingsProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
  }, [category]);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API loading time for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Use comprehensive mock data directly
      const mockJobs = getMockJobs(category);
      setJobs(mockJobs);
      setError('Showing sample opportunities from top Indian companies');
    } catch (err) {
      console.error('Jobs loading error:', err);
      setError('Error loading job listings');
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const getMockJobs = (jobCategory: string): Job[] => {
    const indianCompanies = {
      student: [
        {
          id: '1',
          title: 'Software Development Intern',
          company: 'Tata Consultancy Services (TCS)',
          location: 'Bangalore, Karnataka',
          salary: '₹15,000 - ₹25,000/month',
          type: 'Internship',
          experience: '0-1 years',
          skills: ['Java', 'Python', 'SQL', 'Web Development'],
          postedDate: '2 days ago',
          description: 'Join TCS as a Software Development Intern and work on real-world projects with cutting-edge technologies.',
          applyUrl: 'https://careers.tcs.com'
        },
        {
          id: '2', 
          title: 'Frontend Developer Intern',
          company: 'Flipkart',
          location: 'Hyderabad, Telangana',
          salary: '₹20,000 - ₹30,000/month',
          type: 'Internship',
          experience: '0-1 years',
          skills: ['React', 'JavaScript', 'CSS', 'HTML'],
          postedDate: '1 week ago',
          description: 'Build user-friendly interfaces for millions of Flipkart users. Learn from industry experts.',
          applyUrl: 'https://www.flipkartcareers.com'
        },
        {
          id: '3',
          title: 'Data Science Trainee',
          company: 'Infosys',
          location: 'Pune, Maharashtra',
          salary: '₹18,000 - ₹28,000/month',
          type: 'Trainee',
          experience: '0-1 years',
          skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
          postedDate: '3 days ago',
          description: 'Join Infosys Mysore training program and become a certified data scientist with hands-on projects.',
          applyUrl: 'https://careers.infosys.com'
        },
        {
          id: '4',
          title: 'Mobile App Development Intern',
          company: 'Zomato',
          location: 'Gurgaon, Haryana',
          salary: '₹22,000 - ₹32,000/month',
          type: 'Internship',
          experience: '0-1 years',
          skills: ['React Native', 'Flutter', 'Android', 'iOS'],
          postedDate: '5 days ago',
          description: 'Develop mobile features used by millions of food lovers across India.',
          applyUrl: 'https://www.zomato.com/careers'
        }
      ],
      professional: [
        {
          id: '5',
          title: 'Senior Software Engineer',
          company: 'Wipro',
          location: 'Bangalore, Karnataka',
          salary: '₹12,00,000 - ₹18,00,000/year',
          type: 'Full-time',
          experience: '3-5 years',
          skills: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
          postedDate: '1 day ago',
          description: 'Lead development of enterprise applications for global clients. Remote work options available.',
          applyUrl: 'https://careers.wipro.com'
        },
        {
          id: '6',
          title: 'Product Manager',
          company: 'Paytm',
          location: 'Noida, Uttar Pradesh',
          salary: '₹15,00,000 - ₹25,00,000/year',
          type: 'Full-time',
          experience: '4-6 years',
          skills: ['Product Strategy', 'Analytics', 'User Research', 'Agile'],
          postedDate: '4 days ago',
          description: 'Drive product innovation in India\'s leading fintech company. Shape the future of digital payments.',
          applyUrl: 'https://careers.paytm.com'
        },
        {
          id: '7',
          title: 'DevOps Engineer',
          company: 'HCL Technologies',
          location: 'Chennai, Tamil Nadu',
          salary: '₹10,00,000 - ₹16,00,000/year',
          type: 'Full-time',
          experience: '2-4 years',
          skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
          postedDate: '1 week ago',
          description: 'Build and maintain cloud infrastructure for Fortune 500 companies.',
          applyUrl: 'https://www.hcltech.com/careers'
        },
        {
          id: '8',
          title: 'Data Scientist',
          company: 'Swiggy',
          location: 'Bangalore, Karnataka',
          salary: '₹14,00,000 - ₹22,00,000/year',
          type: 'Full-time',
          experience: '3-5 years',
          skills: ['Python', 'Machine Learning', 'Deep Learning', 'SQL'],
          postedDate: '3 days ago',
          description: 'Use data science to optimize food delivery and improve customer experience.',
          applyUrl: 'https://careers.swiggy.com'
        }
      ],
      curious: [
        {
          id: '9',
          title: 'Associate Software Engineer',
          company: 'Tech Mahindra',
          location: 'Mumbai, Maharashtra',
          salary: '₹4,50,000 - ₹7,00,000/year',
          type: 'Full-time',
          experience: '0-2 years',
          skills: ['Java', 'Python', 'JavaScript', 'SQL'],
          postedDate: '2 days ago',
          description: 'Perfect entry-level role for fresh graduates. Comprehensive training provided.',
          applyUrl: 'https://careers.techmahindra.com'
        },
        {
          id: '10',
          title: 'Junior Frontend Developer',
          company: 'Freshworks',
          location: 'Chennai, Tamil Nadu',
          salary: '₹5,00,000 - ₹8,50,000/year',
          type: 'Full-time',
          experience: '1-2 years',
          skills: ['React', 'Vue.js', 'JavaScript', 'CSS'],
          postedDate: '1 week ago',
          description: 'Join a fast-growing SaaS company and work on products used by thousands of businesses.',
          applyUrl: 'https://www.freshworks.com/careers'
        },
        {
          id: '11',
          title: 'Business Analyst Trainee',
          company: 'Deloitte',
          location: 'Delhi NCR',
          salary: '₹6,00,000 - ₹9,00,000/year',
          type: 'Full-time',
          experience: '0-1 years',
          skills: ['Excel', 'SQL', 'Business Intelligence', 'Communication'],
          postedDate: '5 days ago',
          description: 'Start your consulting career with one of the Big Four. Excellent learning opportunities.',
          applyUrl: 'https://careers.deloitte.com'
        },
        {
          id: '12',
          title: 'Quality Assurance Engineer',
          company: 'Cognizant',
          location: 'Kolkata, West Bengal',
          salary: '₹4,00,000 - ₹6,50,000/year',
          type: 'Full-time',
          experience: '1-3 years',
          skills: ['Testing', 'Selenium', 'API Testing', 'Automation'],
          postedDate: '6 days ago',
          description: 'Ensure software quality for global clients. Great stepping stone for tech career.',
          applyUrl: 'https://careers.cognizant.com'
        }
      ]
    };

    return indianCompanies[jobCategory] || [];
  };

  if (loading) {
    return (
      <Card className="bg-white/60 backdrop-blur-sm border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-blue-600 mr-2" />
            <span className="text-gray-600">Loading job opportunities...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/60 backdrop-blur-sm border-white/30">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
          {title}
        </CardTitle>
        <CardDescription>
          {error ? 
            error : 
            "Latest opportunities from top Indian companies"
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg text-gray-800 mb-1">{job.title}</h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building2 className="h-4 w-4 mr-1" />
                        <span className="text-sm">{job.company}</span>
                      </div>
                    </div>
                    <Badge variant={job.type === 'Internship' ? 'secondary' : 'default'} className="ml-2">
                      {job.type}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <IndianRupee className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.experience} • {job.postedDate}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {job.skills.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{job.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <Button
                    onClick={() => job.applyUrl && window.open(job.applyUrl, '_blank')}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => window.open('https://www.linkedin.com/jobs/search/?keywords=software%20engineer&location=India', '_blank')}
            className="rounded-xl border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View More Jobs on LinkedIn
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}