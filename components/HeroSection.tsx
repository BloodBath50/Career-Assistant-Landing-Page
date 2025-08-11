import { Search, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { useSearch } from '../contexts/SearchContext';
import { Logo } from './Logo';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { setSearchQuery: setGlobalSearchQuery, setSearchResults, setIsSearchActive } = useSearch();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Animated wavy background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      // Create multiple wave layers with navy blue gradient
      for (let layer = 0; layer < 4; layer++) {
        ctx.beginPath();
        
        const opacity = 0.08 - layer * 0.015;
        const frequency = 0.002 + layer * 0.0005;
        const amplitude = 30 + layer * 10;
        const speed = 0.01 + layer * 0.005;
        
        // Create navy blue gradient
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, `rgba(30, 64, 175, ${opacity})`); // Navy blue
        gradient.addColorStop(0.5, `rgba(37, 99, 235, ${opacity})`); // Blue
        gradient.addColorStop(1, `rgba(29, 78, 216, ${opacity})`); // Dark blue
        
        ctx.fillStyle = gradient;
        
        // Draw wave
        ctx.moveTo(0, height / 2);
        for (let x = 0; x <= width; x += 2) {
          const y = height / 2 + 
            Math.sin((x * frequency) + (time * speed)) * amplitude + 
            Math.sin((x * frequency * 0.5) + (time * speed * 1.5)) * amplitude * 0.5;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
      }
      
      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const generateJobData = (query: string) => {
    const jobTitle = query.toLowerCase();
    
    // Comprehensive job database with more roles
    const jobDatabase: Record<string, any> = {
      'software engineer': {
        title: 'Software Engineer',
        description: 'Design, develop, and maintain software applications and systems. Work with various programming languages and frameworks to create solutions that meet user needs.',
        averageSalary: { fresher: '₹4-8 LPA', experienced: '₹15-35 LPA', senior: '₹35-80+ LPA' },
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
        learningPath: ['Master programming fundamentals', 'Learn data structures and algorithms', 'Build full-stack projects', 'Understand system design', 'Practice coding interviews'],
        futureProspects: 'Excellent growth potential with opportunities in AI/ML, cloud computing, and emerging technologies. High demand across all industries.',
        category: 'Engineering'
      },
      'data scientist': {
        title: 'Data Scientist',
        description: 'Analyze complex data to extract insights and build predictive models. Use statistical analysis and machine learning to solve business problems.',
        averageSalary: { fresher: '₹6-12 LPA', experienced: '₹18-40 LPA', senior: '₹40-100+ LPA' },
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
        learningPath: ['Learn Python and statistics', 'Master pandas and numpy', 'Study machine learning algorithms', 'Work on real datasets', 'Build portfolio projects'],
        futureProspects: 'Explosive growth expected with AI/ML adoption. High demand across finance, healthcare, e-commerce, and tech sectors.',
        category: 'Analytics'
      },
      'product manager': {
        title: 'Product Manager',
        description: 'Drive product strategy and execution. Work with engineering, design, and business teams to build products that meet user needs and business goals.',
        averageSalary: { fresher: '₹8-15 LPA', experienced: '₹20-45 LPA', senior: '₹45-120+ LPA' },
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
        learningPath: ['Understand product fundamentals', 'Learn market research techniques', 'Practice data analysis', 'Study successful products', 'Build product portfolio'],
        futureProspects: 'Strong growth as companies focus on user-centric products. Opportunities in fintech, edtech, and emerging technologies.',
        category: 'Product'
      },
      'devops engineer': {
        title: 'DevOps Engineer',
        description: 'Bridge development and operations teams. Automate deployment pipelines, manage cloud infrastructure, and ensure system reliability.',
        averageSalary: { fresher: '₹5-10 LPA', experienced: '₹12-25 LPA', senior: '₹25-50+ LPA' },
        skills: ['Docker', 'Kubernetes', 'AWS/Azure/GCP', 'CI/CD', 'Linux', 'Monitoring Tools', 'Infrastructure as Code'],
        growthRate: '+30%',
        jobOpenings: '20,000+',
        topCompanies: [
          { name: 'AWS', logo: '☁️', employees: '800+', rating: 4.4 },
          { name: 'Microsoft', logo: '💻', employees: '600+', rating: 4.3 },
          { name: 'Red Hat', logo: '🎩', employees: '300+', rating: 4.5 },
          { name: 'Atlassian', logo: '⚡', employees: '200+', rating: 4.4 },
          { name: 'HashiCorp', logo: '🔧', employees: '150+', rating: 4.6 }
        ],
        learningPath: ['Learn Linux and scripting', 'Master containerization', 'Study cloud platforms', 'Practice CI/CD', 'Understand monitoring'],
        futureProspects: 'Critical role in digital transformation. High demand as companies move to cloud and adopt DevOps practices.',
        category: 'Engineering'
      },
      'ux designer': {
        title: 'UX Designer',
        description: 'Design user experiences for digital products. Conduct user research, create wireframes, and test usability to ensure products are intuitive.',
        averageSalary: { fresher: '₹4-8 LPA', experienced: '₹10-20 LPA', senior: '₹20-40+ LPA' },
        skills: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Figma/Sketch', 'Usability Testing', 'Psychology'],
        growthRate: '+25%',
        jobOpenings: '12,000+',
        topCompanies: [
          { name: 'Adobe', logo: '🎨', employees: '400+', rating: 4.5 },
          { name: 'Airbnb', logo: '🏠', employees: '200+', rating: 4.4 },
          { name: 'Zomato', logo: '🍕', employees: '150+', rating: 4.3 },
          { name: 'Myntra', logo: '👗', employees: '120+', rating: 4.2 },
          { name: 'Ola', logo: '🚕', employees: '100+', rating: 4.1 }
        ],
        learningPath: ['Learn design fundamentals', 'Study user psychology', 'Practice with design tools', 'Build portfolio projects', 'Conduct user research'],
        futureProspects: 'Growing importance as companies prioritize user experience. Opportunities in emerging technologies like AR/VR.',
        category: 'Design'
      },
      'cybersecurity analyst': {
        title: 'Cybersecurity Analyst',
        description: 'Protect organizations from cyber threats. Monitor security systems, investigate incidents, and implement security measures.',
        averageSalary: { fresher: '₹4-8 LPA', experienced: '₹12-25 LPA', senior: '₹25-60+ LPA' },
        skills: ['Network Security', 'Incident Response', 'Risk Assessment', 'Compliance', 'Ethical Hacking', 'Security Tools', 'Forensics'],
        growthRate: '+35%',
        jobOpenings: '18,000+',
        topCompanies: [
          { name: 'CyberArk', logo: '🔒', employees: '300+', rating: 4.3 },
          { name: 'Palo Alto', logo: '🛡️', employees: '250+', rating: 4.4 },
          { name: 'Fortinet', logo: '🔐', employees: '200+', rating: 4.2 },
          { name: 'McAfee', logo: '🛡️', employees: '180+', rating: 4.1 },
          { name: 'Symantec', logo: '🔒', employees: '150+', rating: 4.0 }
        ],
        learningPath: ['Learn networking basics', 'Study security frameworks', 'Practice ethical hacking', 'Get security certifications', 'Gain hands-on experience'],
        futureProspects: 'Critical field with increasing cyber threats. High demand across all industries for security professionals.',
        category: 'Security'
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
      averageSalary: { fresher: '₹4-10 LPA', experienced: '₹12-30 LPA', senior: '₹30-60+ LPA' },
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
      learningPath: ['Build foundational knowledge', 'Develop relevant skills', 'Gain practical experience', 'Build professional network', 'Stay updated with trends'],
      futureProspects: 'Good growth potential with increasing digital transformation across industries.',
      category: 'General'
    };
  };

  const handleSearch = async () => {
    if (!searchQuery.trim() || isLoading) return;

    setIsLoading(true);
    setIsSearchFocused(false);
    
    try {
      // Simulate search processing
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const jobData = generateJobData(searchQuery.trim());
      
      // Update global search state
      setGlobalSearchQuery(searchQuery.trim());
      setSearchResults(jobData);
      setIsSearchActive(true);
      
      setIsLoading(false);
    } catch (error) {
      console.error('Search error:', error);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated wavy background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)' }}
      />
      
      {/* Additional gradient overlay with navy tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-blue-50/70 to-slate-100/80" />
      
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <Logo />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced title with more visual impact */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight"
              style={{ 
                background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 30%, #2563eb 60%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(30, 64, 175, 0.3)'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ENTER YOUR
            </motion.h1>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black"
              style={{ 
                background: 'linear-gradient(135deg, #3730a3 0%, #4338ca 30%, #4f46e5 60%, #3730a3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(67, 56, 202, 0.4)'
              }}
              animate={{
                backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              DREAM CAREER
            </motion.h1>
            
            {/* Animated underline */}
            <motion.div 
              className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 rounded-full mt-6 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.2, delay: 1 }}
            />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl font-bold text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            and let us guide you through your journey to success
          </motion.p>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="flex gap-3 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/50"
              animate={{ 
                scale: isSearchFocused ? 1.02 : 1,
                boxShadow: isSearchFocused 
                  ? "0 25px 50px rgba(30, 64, 175, 0.25)" 
                  : "0 15px 35px rgba(30, 64, 175, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Input
                type="text"
                placeholder="e.g., Software Engineer, Data Scientist, Product Manager..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="flex-1 border-0 bg-transparent text-xl font-medium placeholder:text-slate-500 focus:ring-0 px-8 py-5"
              />
              <Button
                onClick={handleSearch}
                disabled={isLoading || !searchQuery.trim()}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-xl px-10 py-5 disabled:opacity-50 transition-all duration-300 group text-lg font-bold"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <>
                    <Search className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                    Explore
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <span className="text-slate-600 font-semibold text-lg">Popular searches:</span>
            {['Software Engineer', 'Data Scientist', 'Product Manager', 'UX Designer'].map((term, index) => (
              <motion.button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-6 py-3 bg-white/70 hover:bg-white/90 text-slate-700 font-medium rounded-full backdrop-blur-sm border border-slate-200/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                {term}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}