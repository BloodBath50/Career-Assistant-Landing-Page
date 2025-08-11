import { MessageCircle, X, Send, Loader2, Sparkles, HelpCircle, Lightbulb } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion, AnimatePresence } from 'motion/react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your AI Career Assistant powered by Career Pilot. I can help you with career planning, skill development, job search strategies, and more. What would you like to know?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const exampleQuestions = [
    "How do I start a career in software development?",
    "What skills are needed for data science?",
    "How much can I expect to earn as a product manager?",
    "What are the best programming languages to learn?",
    "How do I prepare for technical interviews?"
  ];

  const websiteTips = [
    "💡 Use the search bar to explore any career path",
    "🎯 Click on feature cards to get detailed insights",
    "📚 Check our Students section for learning roadmaps",
    "💼 Explore salary data in the Salary section",
    "🏢 Find top companies in your field"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // AI-powered response using OpenAI API
  const getIntelligentResponse = async (userMessage: string) => {
    try {
      const response = await fetch('https://chatgpt-42.p.rapidapi.com/aitohuman', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
          'x-rapidapi-key': 'your-rapidapi-key-here' // You'll need to replace this with your actual key
        },
        body: JSON.stringify({
          text: `You are a Career Assistant AI specialized in helping students and professionals with career guidance in India. Please provide helpful, accurate, and practical advice about: career planning, skill development, job search strategies, interview preparation, salary insights, company information, learning resources, and professional growth. 

User question: ${userMessage}

Please provide a comprehensive, helpful response focused on career guidance, keeping in mind the Indian job market, companies like TCS, Infosys, Flipkart, etc., and include practical next steps when relevant.`
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.text || getFallbackResponse(userMessage);
      } else {
        return getFallbackResponse(userMessage);
      }
    } catch (error) {
      console.error('AI API Error:', error);
      return getFallbackResponse(userMessage);
    }
  };

  // Fallback responses for when API is unavailable
  const getFallbackResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    // Greetings and general help
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('help')) {
      return "Hello! I'm here to help you navigate your career journey. I can assist with career planning, skill development, salary insights, job search strategies, interview preparation, and much more. What specific area would you like guidance on?";
    }
    
    // Software Development Career Path
    if (message.includes('software') || message.includes('developer') || message.includes('programming') || message.includes('coding')) {
      if (message.includes('start') || message.includes('begin') || message.includes('how')) {
        return "Great choice! Here's a roadmap to start your software development career:\n\n1. **Learn the Basics**: Start with HTML, CSS, and JavaScript\n2. **Choose Your Path**: Frontend, Backend, or Full-stack\n3. **Build Projects**: Create a portfolio with 3-5 projects\n4. **Learn Tools**: Git, databases, frameworks\n5. **Apply for Jobs**: Start with internships or entry-level positions\n\nCheck our Students roadmap section for a detailed 12-month plan with resources and project ideas!";
      }
      return "Software development offers excellent career prospects! Popular paths include Frontend (React, Angular), Backend (Node.js, Python, Java), Mobile (React Native, Flutter), and DevOps. Salaries range from ₹3-8 LPA for freshers to ₹18-40+ LPA for experienced developers. Would you like specific guidance on any particular area?";
    }
    
    // Data Science and AI/ML
    if (message.includes('data science') || message.includes('data scientist') || message.includes('machine learning') || message.includes('ai') || message.includes('ml')) {
      return "Data Science is one of the hottest career fields! Here's what you need:\n\n**Essential Skills:**\n• Programming: Python/R\n• Statistics & Mathematics\n• SQL and databases\n• Data visualization (Matplotlib, Seaborn)\n• ML libraries (Scikit-learn, TensorFlow)\n\n**Career Path:**\n1. Learn Python basics\n2. Master pandas and numpy\n3. Study statistics and probability\n4. Work on real projects\n5. Build a portfolio on GitHub\n\nSalary range: ₹6-12 LPA (fresher) to ₹25-50+ LPA (experienced). Check our detailed roadmaps for step-by-step guidance!";
    }
    
    // Product Management
    if (message.includes('product manager') || message.includes('pm') || message.includes('product management')) {
      return "Product Management is a strategic and rewarding career! Here's what you need to know:\n\n**Key Skills:**\n• Market research and user empathy\n• Data analysis and metrics\n• Communication and leadership\n• Technical understanding (helpful but not required)\n• Business strategy\n\n**How to Start:**\n1. Learn PM fundamentals online\n2. Practice case studies\n3. Build or contribute to products\n4. Network with current PMs\n5. Consider APM programs\n\nSalary: ₹8-15 LPA (APM) to ₹25-60+ LPA (Senior PM). Many companies offer Associate PM programs for freshers!";
    }
    
    // Skills and Learning
    if (message.includes('skill') || message.includes('learn') || message.includes('study') || message.includes('course')) {
      if (message.includes('programming') || message.includes('language')) {
        return "Here are the most in-demand programming languages in 2025:\n\n**For Beginners:**\n• Python - Great for AI/ML, web development\n• JavaScript - Essential for web development\n• Java - Enterprise applications, Android\n\n**Trending:**\n• TypeScript - Enhanced JavaScript\n• Go - Cloud and backend systems\n• Rust - Systems programming\n\n**Advice:** Start with Python or JavaScript based on your interests. Focus on mastering one language deeply before learning others. Practice with real projects, not just tutorials!";
      }
      return "The most valuable tech skills for 2025:\n\n**High Demand:**\n• Cloud Computing (AWS, Azure, GCP)\n• AI/Machine Learning\n• Cybersecurity\n• DevOps and automation\n• Mobile development\n\n**Always Relevant:**\n• Data structures & algorithms\n• System design\n• Database management\n• Problem-solving\n\nFocus on fundamentals first, then specialize. Our platform has detailed skill roadmaps with learning resources and timelines!";
    }
    
    // Salary and Compensation
    if (message.includes('salary') || message.includes('pay') || message.includes('earn') || message.includes('money') || message.includes('package')) {
      return "Here are typical salary ranges in Indian tech industry (2025):\n\n**Software Development:**\n• Fresher: ₹3-8 LPA\n• 2-4 years: ₹8-18 LPA\n• 5+ years: ₹18-40+ LPA\n\n**Data Science:**\n• Entry: ₹6-12 LPA\n• Mid-level: ₹15-30 LPA\n• Senior: ₹30-60+ LPA\n\n**Product Management:**\n• APM: ₹8-15 LPA\n• PM: ₹15-35 LPA\n• Senior PM: ₹35-80+ LPA\n\n**Factors:** Location, company tier, skills, and negotiation skills significantly impact salaries. Check our Salary section for detailed company-wise breakdowns!";
    }
    
    // Interview Preparation
    if (message.includes('interview') || message.includes('prepare') || message.includes('crack') || message.includes('job application')) {
      return "Interview preparation is crucial! Here's a comprehensive approach:\n\n**Technical Preparation:**\n• Practice coding problems (LeetCode, HackerRank)\n• Study system design (for senior roles)\n• Review your projects thoroughly\n• Mock interviews with friends/platforms\n\n**Behavioral Preparation:**\n• Prepare STAR format stories\n• Research the company thoroughly\n• Prepare thoughtful questions to ask\n• Practice explaining complex concepts simply\n\n**Timeline:** Start preparing 2-3 months before applying. Consistency beats intensity. Our Professionals section has detailed interview guides and common questions for different roles!";
    }
    
    // Career Change/Transition
    if (message.includes('change') || message.includes('switch') || message.includes('transition') || message.includes('career change')) {
      return "Career transitions are absolutely possible! Here's how to approach it:\n\n**Steps for Successful Transition:**\n1. **Assess Transferable Skills** - Identify what carries over\n2. **Fill Skill Gaps** - Take courses, build projects\n3. **Network Actively** - Connect with people in your target field\n4. **Start Side Projects** - Build evidence of your new skills\n5. **Consider Bridge Roles** - Roles that combine old and new skills\n\n**Timeline:** Expect 6-18 months depending on your target field. Many professionals successfully transition to tech from non-tech backgrounds. Our Working Professionals section has detailed transition strategies!";
    }
    
    // Company and Job Search
    if (message.includes('company') || message.includes('job') || message.includes('hiring') || message.includes('apply')) {
      return "Job search strategy is key to landing your dream role:\n\n**Top Tech Companies Hiring:**\n• FAANG (Facebook, Apple, Amazon, Netflix, Google)\n• Indian Unicorns (Flipkart, Zomato, Swiggy, etc.)\n• Product Companies (Microsoft, Adobe, Salesforce)\n• Consulting (Deloitte, PwC, EY)\n\n**Application Tips:**\n• Tailor your resume for each role\n• Apply through referrals when possible\n• Follow up professionally\n• Prepare for company-specific interview processes\n\nOur Top Companies section has detailed insights about work culture, hiring processes, and salary ranges for 50+ companies!";
    }
    
    // Internships
    if (message.includes('internship') || message.includes('intern') || message.includes('student')) {
      return "Internships are excellent for gaining experience! Here's your guide:\n\n**When to Apply:**\n• Summer Internships: Apply Sep-Jan\n• Winter Internships: Apply Jul-Sep\n• Off-season: Apply anytime for startups\n\n**Top Programs:**\n• Google Summer of Code\n• Microsoft internships\n• Amazon internships\n• Flipkart, Zomato, Swiggy programs\n\n**Application Tips:**\n• Build projects relevant to the role\n• Contribute to open source\n• Network with current interns\n• Apply early and follow up\n\nOur Students section has comprehensive internship guides with application deadlines, requirements, and tips!";
    }
    
    // Specific Technologies/Frameworks
    if (message.includes('react') || message.includes('javascript') || message.includes('python') || message.includes('java') || message.includes('node')) {
      if (message.includes('react')) {
        return "React is one of the most popular frontend frameworks! Here's a learning path:\n\n**Prerequisites:**\n• HTML, CSS, JavaScript fundamentals\n• ES6+ features\n\n**React Learning Path:**\n1. JSX and components\n2. Props and state\n3. Event handling\n4. Hooks (useState, useEffect)\n5. Context API\n6. Routing with React Router\n7. State management (Redux/Zustand)\n\n**Projects to Build:**\n• Todo app, Weather app, E-commerce frontend\n\nReact developers earn ₹4-8 LPA (fresher) to ₹15-30+ LPA (experienced). Great choice for frontend development!";
      }
      return "Technology-specific guidance is crucial! Whether you're interested in React, Python, Java, or any other technology, the key is to:\n\n1. **Master Fundamentals** first\n2. **Build Real Projects** - not just tutorials\n3. **Understand the Ecosystem** - related tools and libraries\n4. **Join Communities** - Discord, Reddit, Stack Overflow\n5. **Stay Updated** - follow tech blogs and updates\n\nWhich specific technology would you like detailed guidance on?";
    }
    
    // Resume and Portfolio
    if (message.includes('resume') || message.includes('cv') || message.includes('portfolio')) {
      return "Strong resume and portfolio are essential! Here's how to build them:\n\n**Resume Tips:**\n• Keep it 1-2 pages max\n• Quantify achievements with numbers\n• Use action verbs (built, developed, improved)\n• Tailor for each application\n• Include relevant keywords\n\n**Portfolio Must-Haves:**\n• 3-5 quality projects\n• Clean, professional design\n• Live demos and source code\n• Clear project descriptions\n• Contact information\n\n**For Developers:**\n• GitHub with regular commits\n• Personal website/blog\n• Technical writing samples\n\nWould you like specific templates or examples for your field?";
    }
    
    // Networking
    if (message.includes('network') || message.includes('connect') || message.includes('linkedin') || message.includes('community')) {
      return "Networking is crucial for career growth! Here's how to build your network:\n\n**Online Networking:**\n• Optimize your LinkedIn profile\n• Join relevant Discord/Slack communities\n• Engage with industry content\n• Share your learnings and projects\n\n**Offline Networking:**\n• Attend tech meetups and conferences\n• Join local developer communities\n• Participate in hackathons\n• Connect with college alumni\n\n**Networking Tips:**\n• Give value before asking for help\n• Be genuine in your interactions\n• Follow up with new connections\n• Maintain relationships over time\n\nNetworking can lead to job opportunities, mentorship, and collaboration opportunities!";
    }
    
    // Work-Life Balance
    if (message.includes('work life') || message.includes('balance') || message.includes('stress') || message.includes('burnout')) {
      return "Work-life balance is crucial for long-term success! Here's how to maintain it:\n\n**Setting Boundaries:**\n• Define work hours and stick to them\n• Create a dedicated workspace\n• Turn off work notifications after hours\n• Learn to say no to excessive demands\n\n**Managing Stress:**\n• Take regular breaks during work\n• Exercise regularly\n• Maintain hobbies outside work\n• Practice mindfulness or meditation\n\n**Career Choices:**\n• Research company culture before joining\n• Ask about work-life balance in interviews\n• Consider remote work options\n• Prioritize mental health\n\nRemember: A sustainable career is a marathon, not a sprint!";
    }
    
    // Remote Work
    if (message.includes('remote') || message.includes('work from home') || message.includes('wfh')) {
      return "Remote work is increasingly common in tech! Here's what you need to know:\n\n**Remote Work Skills:**\n• Self-discipline and time management\n• Strong communication skills\n• Proficiency with collaboration tools\n• Ability to work independently\n\n**Popular Remote-First Companies:**\n• GitLab, Buffer, Automattic\n• Many Indian startups offer remote options\n• International companies hiring in India\n\n**Tips for Remote Work Success:**\n• Set up a dedicated workspace\n• Maintain regular schedules\n• Over-communicate with team members\n• Take care of your physical and mental health\n\nRemote positions often offer better work-life balance and can expand your job opportunities globally!";
    }
    
    // Freelancing
    if (message.includes('freelance') || message.includes('freelancing') || message.includes('self employed') || message.includes('independent')) {
      return "Freelancing can be a great career path! Here's how to get started:\n\n**Prerequisites:**\n• Strong skills in your domain\n• Portfolio of completed projects\n• Basic business knowledge\n• Self-discipline and time management\n\n**Getting Started:**\n1. Build a strong portfolio\n2. Set competitive but fair rates\n3. Start on platforms like Upwork, Freelancer\n4. Network and get referrals\n5. Deliver quality work consistently\n\n**Challenges & Solutions:**\n• Irregular income → Build emergency fund\n• Finding clients → Network actively\n• Scope creep → Clear contracts\n• Isolation → Join freelancer communities\n\nFreelancing offers flexibility but requires discipline. Start part-time while employed to test the waters!";
    }
    
    // Career Growth and Advancement
    if (message.includes('grow') || message.includes('advance') || message.includes('promotion') || message.includes('senior') || message.includes('lead')) {
      return "Career advancement requires strategic planning! Here's your growth roadmap:\n\n**Technical Growth:**\n• Master advanced concepts in your domain\n• Learn system design and architecture\n• Stay updated with industry trends\n• Contribute to open source projects\n\n**Leadership Skills:**\n• Learn to mentor junior colleagues\n• Improve communication and presentation skills\n• Take ownership of larger projects\n• Develop business understanding\n\n**Career Progression:**\n• Set clear goals with your manager\n• Seek feedback regularly\n• Document your achievements\n• Build relationships across teams\n• Consider lateral moves for broader experience\n\nTypical progression: Junior → Mid → Senior → Lead → Manager/Architect. Each level requires different skills!";
    }
    
    // Startup vs Corporate
    if (message.includes('startup') || message.includes('corporate') || message.includes('company size') || message.includes('which company')) {
      return "Choosing between startup and corporate depends on your goals:\n\n**Startups (Pros):**\n• Faster learning and growth\n• More responsibility early on\n• Direct impact on business\n• Flexible work environment\n• Potential equity upside\n\n**Startups (Cons):**\n• Higher risk, less job security\n• Limited resources and benefits\n• Longer work hours\n• Less structured processes\n\n**Corporations (Pros):**\n• Better job security and benefits\n• Structured learning programs\n• Clear career progression\n• Work-life balance\n• Brand recognition\n\n**Corporations (Cons):**\n• Slower decision making\n• Less individual impact\n• More bureaucracy\n\n**Recommendation:** Start with corporate for foundation, then consider startups for growth!";
    }
    
    // Education and Certifications
    if (message.includes('degree') || message.includes('education') || message.includes('college') || message.includes('certificate') || message.includes('certification')) {
      return "Education and certifications can boost your career! Here's what matters:\n\n**Formal Education:**\n• CS degree helpful but not always required\n• Focus on practical skills over just grades\n• Participate in coding competitions and hackathons\n• Build projects beyond coursework\n\n**Online Certifications (Valuable):**\n• AWS/Azure/GCP cloud certifications\n• Google/Meta/Microsoft technical certifications\n• Coursera/edX specializations\n• Industry-specific certifications\n\n**Self-Learning Resources:**\n• YouTube channels and tutorials\n• GitHub projects and open source\n• Technical blogs and documentation\n• Coding bootcamps and intensive programs\n\n**Remember:** Skills and projects matter more than certificates. Use education to build a strong foundation!";
    }
    
    // Age and Career Concerns
    if (message.includes('age') || message.includes('late start') || message.includes('older') || message.includes('30') || message.includes('40')) {
      return "It's never too late to start or change your career in tech! Here's encouragement and advice:\n\n**Advantages of Starting Later:**\n• Life experience and maturity\n• Better communication and soft skills\n• Stronger work ethic and focus\n• Existing professional network\n• Financial stability for learning investments\n\n**Success Stories:**\n• Many successful developers started after 30\n• Career changers often become excellent tech professionals\n• Diverse backgrounds bring valuable perspectives\n\n**Practical Advice:**\n• Focus on in-demand skills quickly\n• Leverage your existing experience\n• Network with other career changers\n• Consider intensive bootcamps\n• Be patient but persistent\n\nAge is just a number in tech. Your dedication and skills matter most!";
    }
    
    // Women in Tech
    if (message.includes('women') || message.includes('female') || message.includes('girl') || message.includes('diversity')) {
      return "Women in tech face unique challenges but have great opportunities! Here's supportive guidance:\n\n**Growing Opportunities:**\n• Many companies actively promoting diversity\n• Women-focused scholarships and programs\n• Mentorship networks and communities\n• Leadership opportunities in inclusive companies\n\n**Supportive Communities:**\n• Women Who Code\n• Girls in Tech\n• AnitaB.org (Grace Hopper Conference)\n• Local women in tech meetups\n\n**Career Advice:**\n• Build a strong support network\n• Find mentors and sponsors\n• Negotiate confidently for salary and roles\n• Share your achievements and learnings\n• Support other women in tech\n\n**Remember:** Your perspective and skills are valuable. The tech industry needs more diverse voices and leadership!";
    }
    
    // Default response for unmatched queries
    return "That's an interesting question! While I can provide guidance on most career-related topics, I'd recommend exploring our platform for comprehensive resources:\n\n• **Career Roadmaps** - Detailed paths for different roles\n• **Salary Insights** - Compensation data across companies\n• **Company Information** - Culture, hiring processes, reviews\n• **Learning Resources** - Curated courses, tutorials, and guides\n\nIs there a specific career topic you'd like to explore? I can help with career planning, skill development, job search strategies, interview preparation, or any other professional guidance you need!";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { id: Date.now(), text: inputMessage, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    try {
      // Get AI response
      const response = await getIntelligentResponse(currentInput);
      const botResponse = {
        id: Date.now() + 1,
        text: response,
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorResponse = {
        id: Date.now() + 1,
        text: "I apologize, but I'm having trouble processing your request right now. Please try asking your question again, or explore our platform sections for comprehensive career guidance.",
        isBot: true
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0,
              borderRadius: "50%",
              width: 56,
              height: 56,
              x: 24,
              y: 24
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              borderRadius: "1rem",
              width: 320,
              height: 400,
              x: 0,
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0,
              borderRadius: "50%",
              width: 56,
              height: 56,
              x: 24,
              y: 24
            }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            className="fixed bottom-24 right-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40 z-40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <motion.div 
              className="flex items-center justify-between p-4 border-b border-gray-200/50 bg-gradient-to-r from-blue-50 to-purple-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                  animate={{ 
                    boxShadow: ["0 0 0 0px rgba(59, 130, 246, 0.4)", "0 0 0 8px rgba(59, 130, 246, 0)", "0 0 0 0px rgba(59, 130, 246, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg text-gray-800 font-semibold">Career Assistant</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-gradient-to-r from-green-400 to-green-500 text-white px-2 py-1 rounded-full">
                      AI Powered
                    </span>
                    <span className="text-xs text-green-600">● Online</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="rounded-full h-8 w-8 p-0 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <X className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-blue-100 text-gray-800'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Example questions and website tips - show only when there's just the initial message */}
              {messages.length === 1 && !isLoading && (
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <HelpCircle className="h-3 w-3 text-blue-500" />
                      <p className="text-xs text-gray-500">Quick Questions:</p>
                    </div>
                    {exampleQuestions.slice(0, 2).map((question, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setInputMessage(question)}
                        className="block w-full text-left p-2 text-xs text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg transition-all duration-200 border border-blue-200/50"
                        whileHover={{ scale: 1.02, x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Lightbulb className="h-3 w-3 text-purple-500" />
                      <p className="text-xs text-gray-500">Website Tips:</p>
                    </div>
                    {websiteTips.slice(0, 2).map((tip, index) => (
                      <motion.div
                        key={index}
                        className="p-2 text-xs text-purple-700 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200/50"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        {tip}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-blue-100 text-gray-800 p-3 rounded-2xl flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200/50">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your question..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="flex-1 rounded-xl bg-gray-50/50"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  size="sm"
                  className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Pulsing ring animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="relative h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-xl border-2 border-white/20 transition-all duration-300"
          >
            <motion.div
              animate={{ rotateY: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <>
                  <MessageCircle className="h-6 w-6 text-white" />
                  {/* Notification badge */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span className="text-white text-xs">!</span>
                  </motion.div>
                </>
              )}
            </motion.div>
          </Button>
        </div>
      </motion.div>
    </>
  );
}