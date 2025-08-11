import { ArrowLeft, Mail, MapPin, Phone, Send, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { useState } from 'react';
import { Logo } from '../Logo';

export function ContactPage() {
  const { goBack } = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["team@lnmiitunderdogs.com", "support@lnmiitunderdogs.com"],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["The LNM Institute of Information Technology", "Jaipur, Rajasthan, India"],
      description: "Visit us at our campus or connect with us online"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Call us during business hours (9 AM - 6 PM IST)"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const mailtoLink = `mailto:lnmunderdogs@gmail.com,24dcs032@lnmiit.ac.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Simulate submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset submitted state after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      }, 1000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100"
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
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl text-gray-800 mb-4">Get in Touch</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have questions, feedback, or suggestions? We'd love to hear from you! 
              Reach out to us using any of the methods below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl text-gray-800 mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg text-gray-800 mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-700 mb-1">{detail}</p>
                            ))}
                            <p className="text-gray-600 text-sm mt-2">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="mt-8">
                <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-cyan-800">Quick Response</CardTitle>
                    <CardDescription>
                      For urgent queries, email us directly at support@lnmiitunderdogs.com
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• General queries: 24-48 hours</p>
                      <p>• Technical support: 12-24 hours</p>
                      <p>• Partnership inquiries: 2-3 business days</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl text-gray-800 mb-8">Send us a Message</h2>
              <Card className="bg-white/60 backdrop-blur-sm border-white/30">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
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
                        <Label htmlFor="email">Email Address *</Label>
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
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1 rounded-xl bg-white/80"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1 rounded-xl bg-white/80 resize-none"
                        placeholder="Tell us more about your query or feedback..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="mt-6">
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="text-lg text-blue-800 mb-2">What happens next?</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>1. We'll review your message within 24 hours</li>
                      <li>2. Our team will respond to your email address</li>
                      <li>3. For complex queries, we might schedule a call</li>
                      <li>4. We'll follow up to ensure your query is resolved</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Team Contact */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl text-gray-800 mb-6 text-center">Direct Team Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Hardik Singhal", role: "Lead Developer & Project Manager", email: "hardiksinghal@outlook.in" },
                { name: "Arjun Mukherjee", role: "Frontend Developer & UI/UX Designer", email: "arjunm7906@gmail.com" },
                { name: "Divyansh Singh", role: "Backend Developer & DevOps Engineer", email: "24dcs032@lnmiit.ac.in" },
                { name: "Dhruv Mittal", role: "Data Scientist & AI Engineer", email: "24ucs064@lnmiit.ac.in" }
              ].map((member, index) => (
                <Card key={index} className="bg-white/50 backdrop-blur-sm border-white/30 text-center">
                  <CardContent className="p-4">
                    <h4 className="text-gray-800 mb-1">{member.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-blue-600 text-xs hover:underline"
                    >
                      {member.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}