import { ArrowLeft, HelpCircle, Search, Plus, Minus, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { useState } from 'react';
import { SupportContact } from '../SupportContact';
import { Logo } from '../Logo';

export function FAQPage() {
  const { goBack } = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [showSupportContact, setShowSupportContact] = useState(false);

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is Career Assistant?",
          answer: "Career Assistant is a comprehensive platform designed to help students and professionals navigate their career journeys. We provide career roadmaps, salary insights, company information, learning resources, and AI-powered guidance to help you make informed career decisions."
        },
        {
          question: "Is the platform free to use?",
          answer: "Yes! Career Assistant is completely free to use. All our features including career roadmaps, company insights, salary information, and the AI chatbot are available at no cost. We believe career guidance should be accessible to everyone."
        },
        {
          question: "Who can use Career Assistant?",
          answer: "Our platform is designed for three main audiences: Students looking to plan their career path, Working professionals seeking career advancement or transition, and Curious individuals exploring different career options. Whether you're a beginner or experienced professional, we have resources for you."
        },
        {
          question: "How accurate is the salary information?",
          answer: "Our salary data is compiled from multiple reliable sources including job portals, company reports, and industry surveys. We update this information regularly to ensure accuracy. However, actual salaries may vary based on location, experience, company size, and individual negotiations."
        }
      ]
    },
    {
      category: "Features",
      questions: [
        {
          question: "What career roadmaps do you offer?",
          answer: "We offer detailed roadmaps for various tech careers including Software Development, Data Science, Machine Learning, Cybersecurity, Product Management, and more. Each roadmap includes learning paths, required skills, project ideas, certifications, and timeline estimates."
        },
        {
          question: "How does the AI chatbot work?",
          answer: "Our AI chatbot is trained on career-related data and can answer questions about different career paths, skills requirements, learning resources, and provide personalized guidance. It's available 24/7 to help with your career-related queries."
        },
        {
          question: "Can I get internship recommendations?",
          answer: "Yes! Our platform includes a comprehensive internship section with opportunities from top tech companies, application deadlines, requirements, and tips for landing internships. We regularly update this information with new opportunities."
        },
        {
          question: "Do you provide company-specific information?",
          answer: "Absolutely! We provide detailed information about top companies including their work culture, hiring processes, salary ranges, required skills, and employee reviews. This helps you prepare better for applications and interviews."
        }
      ]
    },
    {
      category: "Learning Resources",
      questions: [
        {
          question: "What types of learning resources do you provide?",
          answer: "We curate various learning resources including YouTube playlists, GitHub repositories, online courses, certification programs, project templates, and study materials. All resources are carefully selected to ensure quality and relevance."
        },
        {
          question: "Are the courses and certifications free?",
          answer: "We include both free and paid resources in our recommendations. Many high-quality free courses and certifications are available from platforms like Coursera, edX, and YouTube. We clearly mark which resources are free and which require payment."
        },
        {
          question: "How do you select learning resources?",
          answer: "Our team regularly reviews and curates learning resources based on industry relevance, user ratings, content quality, and feedback from our community. We prioritize practical, up-to-date content that aligns with current industry standards."
        },
        {
          question: "Can I suggest new resources?",
          answer: "Yes! We welcome suggestions from our community. You can contact us through our contact form or email us directly with resource recommendations. We review all suggestions and add valuable resources to our platform."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "Do I need to create an account?",
          answer: "Currently, no account creation is required to access our platform. All features are available without registration. However, we're working on user accounts that will allow you to save your progress, bookmark resources, and get personalized recommendations."
        },
        {
          question: "Is the platform mobile-friendly?",
          answer: "Yes! Our platform is fully responsive and works seamlessly on mobile devices, tablets, and desktops. You can access all features and resources on any device with an internet connection."
        },
        {
          question: "What browsers are supported?",
          answer: "Career Assistant works on all modern web browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience."
        },
        {
          question: "How can I report bugs or issues?",
          answer: "If you encounter any bugs or technical issues, please contact us through our contact form or email us at support@lnmiitunderdogs.com. Include details about the issue, your browser, and device information to help us resolve it quickly."
        }
      ]
    },
    {
      category: "Support",
      questions: [
        {
          question: "How can I contact support?",
          answer: "You can reach our support team through multiple channels: email us at support@lnmiitunderdogs.com, use our contact form, or connect with individual team members. We typically respond within 24 hours."
        },
        {
          question: "Do you offer career counseling sessions?",
          answer: "While our platform provides comprehensive guidance, we're working on offering one-on-one career counseling sessions. Currently, you can get personalized advice through our AI chatbot and by contacting our team directly."
        },
        {
          question: "Can I contribute to the platform?",
          answer: "We welcome contributions! You can help by suggesting resources, providing feedback, sharing your career experiences, or even joining our development team. Contact us to discuss how you can contribute to our mission."
        },
        {
          question: "How do you ensure data privacy?",
          answer: "We take data privacy seriously. We don't collect personal information without consent, don't share user data with third parties, and implement security measures to protect any information you provide through our contact forms."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      id: categoryIndex * 100 + questionIndex,
      category: category.category
    }))
  );

  const filteredQuestions = allQuestions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  if (showSupportContact) {
    return <SupportContact onBack={() => setShowSupportContact(false)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-100"
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
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl text-gray-800 mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to common questions about Career Assistant, our features, and how we can help you on your career journey.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-xl bg-white/80 border-white/30"
              />
            </div>
          </div>

          {/* FAQ Content */}
          <div className="space-y-4">
            {searchTerm ? (
              // Show filtered results when searching
              <>
                <p className="text-gray-600 mb-6 text-center">
                  Found {filteredQuestions.length} result(s) for "{searchTerm}"
                </p>
                {filteredQuestions.map((question) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Card className="bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleExpanded(question.id)}
                          className="w-full text-left p-6 flex items-center justify-between hover:bg-white/20 transition-colors duration-200"
                        >
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <span className="text-xs text-teal-600 bg-teal-100 px-2 py-1 rounded-lg mr-2">
                                {question.category}
                              </span>
                            </div>
                            <h3 className="text-lg text-gray-800">{question.question}</h3>
                          </div>
                          {expandedItems.includes(question.id) ? (
                            <Minus className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                          ) : (
                            <Plus className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                          )}
                        </button>
                        {expandedItems.includes(question.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-6 pb-6"
                          >
                            <p className="text-gray-600 leading-relaxed">{question.answer}</p>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </>
            ) : (
              // Show by categories when not searching
              faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <h2 className="text-2xl text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">{categoryIndex + 1}</span>
                    </div>
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((question, questionIndex) => {
                      const questionId = categoryIndex * 100 + questionIndex;
                      return (
                        <motion.div
                          key={questionId}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: questionIndex * 0.1 }}
                        >
                          <Card className="bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-0">
                              <button
                                onClick={() => toggleExpanded(questionId)}
                                className="w-full text-left p-4 flex items-center justify-between hover:bg-white/20 transition-colors duration-200"
                              >
                                <h3 className="text-lg text-gray-800 flex-1">{question.question}</h3>
                                {expandedItems.includes(questionId) ? (
                                  <Minus className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                                ) : (
                                  <Plus className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                                )}
                              </button>
                              {expandedItems.includes(questionId) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="px-4 pb-4"
                                >
                                  <p className="text-gray-600 leading-relaxed">{question.answer}</p>
                                </motion.div>
                              )}
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Contact Support */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 text-center">
              <h3 className="text-xl text-gray-800 mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Our team is here to help!
              </p>
              <Button 
                onClick={() => setShowSupportContact(true)}
                className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}