import { useState } from 'react';
import { MessageCircle, Send, Loader2, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { motion } from 'motion/react';

interface SupportContactProps {
  onBack: () => void;
}

export function SupportContact({ onBack }: SupportContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:24dcs032@lnmiit.ac.in?subject=Support Request - ${formData.category}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nQuestion:\n${formData.question}`
      )}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Also redirect to chatbot with the question
      setTimeout(() => {
        // This would trigger the chatbot to open with the question
        const chatbotEvent = new CustomEvent('openChatbotWithQuestion', {
          detail: { question: formData.question }
        });
        window.dispatchEvent(chatbotEvent);
      }, 500);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', question: '', category: 'general' });
        
        // Reset submitted state after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      }, 1000);
    } catch (error) {
      console.error('Error sending support request:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100"
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 hover:bg-white/50 rounded-xl"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to FAQ
        </Button>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl text-gray-800 mb-2">Contact Support</h1>
            <p className="text-gray-600">
              Can't find what you're looking for? Ask our support team directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Support Form */}
            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardHeader>
                <CardTitle>Submit Your Question</CardTitle>
                <CardDescription>
                  We'll respond to your email and our AI assistant will also help answer your question.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 rounded-xl bg-white/80"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 rounded-xl bg-white/80"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full rounded-xl bg-white/80 border border-gray-300 px-3 py-2 text-sm"
                    >
                      <option value="general">General Question</option>
                      <option value="technical">Technical Support</option>
                      <option value="career">Career Guidance</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="question">Your Question *</Label>
                    <Textarea
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1 rounded-xl bg-white/80 resize-none"
                      placeholder="Describe your question or issue in detail..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Question Submitted!
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Question
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Info */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">What happens next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">1</div>
                      <div>
                        <h4 className="text-blue-800">Email Sent</h4>
                        <p>Your question will be sent to our support team via email</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">2</div>
                      <div>
                        <h4 className="text-purple-800">AI Assistant</h4>
                        <p>Our chatbot will open to provide immediate assistance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">3</div>
                      <div>
                        <h4 className="text-green-800">Team Response</h4>
                        <p>Our team will respond to your email within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border-white/30">
                <CardHeader>
                  <CardTitle>Response Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">General Questions:</span>
                      <span className="text-gray-800">12-24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Technical Support:</span>
                      <span className="text-gray-800">6-12 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Career Guidance:</span>
                      <span className="text-gray-800">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bug Reports:</span>
                      <span className="text-gray-800">2-6 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Quick Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Be specific about your question or issue</li>
                    <li>• Include relevant details like browser, device, etc.</li>
                    <li>• Check our FAQ first for common questions</li>
                    <li>• Use our AI chatbot for instant answers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}