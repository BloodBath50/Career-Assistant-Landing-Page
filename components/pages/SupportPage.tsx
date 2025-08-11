import { ArrowLeft, Heart, QrCode, Wallet, CreditCard, Bitcoin, Gift, Smartphone, Globe, Shield, Star, Users, Target, Briefcase, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../../contexts/RouterContext';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Logo } from '../Logo';

export function SupportPage() {
  const { goBack } = useRouter();

  const paymentMethods = [
    {
      title: "UPI Payment",
      description: "Quick and secure payment using UPI",
      icon: Smartphone,
      method: "upi",
      details: "carrierassistant@upi",
      color: "from-green-500 to-emerald-600",
      popular: true,
      apps: ["PhonePe", "Google Pay", "Paytm", "BHIM"]
    },
    {
      title: "Cryptocurrency",
      description: "Support us with Bitcoin or Ethereum",
      icon: Bitcoin,
      method: "crypto",
      details: "Multiple cryptocurrencies accepted",
      color: "from-orange-500 to-yellow-600",
      popular: false,
      wallets: ["Bitcoin", "Ethereum", "USDT", "BNB"]
    },
    {
      title: "Credit/Debit Card",
      description: "International cards via Razorpay",
      icon: CreditCard,
      method: "card",
      details: "Visa, Mastercard, Rupay accepted",
      color: "from-blue-500 to-cyan-600",
      popular: false,
      features: ["One-time", "Monthly", "Yearly"]
    },
    {
      title: "Digital Wallet",
      description: "International payment methods",
      icon: Wallet,
      method: "wallet",
      details: "PayPal, Apple Pay, Google Wallet",
      color: "from-purple-500 to-pink-600",
      popular: false,
      international: true
    }
  ];

  const supportTiers = [
    {
      name: "Coffee Supporter",
      amount: "₹50",
      description: "Buy us a coffee to keep us motivated!",
      perks: ["Our heartfelt gratitude", "Name in supporters list", "Discord access"],
      icon: Gift,
      color: "from-green-400 to-blue-500",
      recommended: false
    },
    {
      name: "Growth Supporter", 
      amount: "₹200",
      description: "Help us add new features and resources",
      perks: ["All Coffee perks", "Early access to features", "Direct feedback channel", "Monthly newsletter"],
      icon: Target,
      color: "from-blue-400 to-purple-500",
      recommended: false
    },
    {
      name: "Premium Supporter",
      amount: "₹500",
      description: "Become a key part of our journey",
      perks: ["All Growth perks", "Monthly progress updates", "Feature request priority", "30-min career session", "LinkedIn connection"],
      icon: Star,
      color: "from-purple-400 to-pink-500",
      recommended: true
    },
    {
      name: "Enterprise Supporter",
      amount: "₹1000+",
      description: "Partner with us for the long term",
      perks: ["All Premium perks", "Custom features discussion", "Partnership opportunities", "Quarterly strategy calls", "Co-marketing opportunities"],
      icon: Users,
      color: "from-pink-400 to-orange-500",
      recommended: false
    }
  ];

  const impactStats = [
    { number: "25,000+", label: "Students Helped", icon: Users },
    { number: "500+", label: "Career Roadmaps", icon: Target },
    { number: "1000+", label: "Job Placements", icon: Briefcase },
    { number: "95%", label: "Success Rate", icon: Star }
  ];

  const usageFunds = [
    { category: "Server & Infrastructure", percentage: 40, color: "bg-blue-500" },
    { category: "Development & Maintenance", percentage: 30, color: "bg-purple-500" },
    { category: "Content Creation", percentage: 20, color: "bg-green-500" },
    { category: "Team Support", percentage: 10, color: "bg-orange-500" }
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
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl text-gray-800 mb-4">Support Our Mission</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Help us continue building amazing career guidance tools for students and professionals. 
              Your support keeps us motivated and helps us add new features!
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/60 backdrop-blur-sm border-white/30 text-center">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl text-purple-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-800 mb-8 text-center">Choose Your Payment Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <Card className={`bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full ${method.popular ? 'ring-2 ring-green-500' : ''}`}>
                    {method.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className="bg-green-500 text-white">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-gray-600 mb-4">{method.details}</p>
                      
                      {/* Additional info based on method */}
                      {method.apps && (
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-2">Supported Apps:</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {method.apps.map((app, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">{app}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {method.wallets && (
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-2">Supported Crypto:</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {method.wallets.map((wallet, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">{wallet}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {method.features && (
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-2">Payment Options:</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {method.features.map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">{feature}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <Button className={`w-full bg-gradient-to-r ${method.color} text-white rounded-xl`}>
                        {method.method === 'upi' && 'Show QR Code'}
                        {method.method === 'crypto' && 'View Addresses'}
                        {method.method === 'card' && 'Pay Securely'}
                        {method.method === 'wallet' && 'Pay International'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* UPI QR Code Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-xl text-gray-800 mb-6">Quick UPI Payment</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-48 h-48 bg-gray-100 rounded-xl flex flex-col items-center justify-center mb-4">
                    <QrCode className="h-24 w-24 text-gray-400 mb-2" />
                    <div className="text-xs text-gray-600">Scan QR Code</div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">Scan to pay with any UPI app</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg text-gray-800 mb-2">Or use UPI ID</h4>
                  <div className="bg-white/80 rounded-xl p-4 mb-4">
                    <p className="text-2xl text-green-600">carrierassistant@upi</p>
                  </div>
                  <Button 
                    onClick={() => navigator.clipboard.writeText('carrierassistant@upi')}
                    variant="outline" 
                    className="rounded-xl"
                  >
                    Copy UPI ID
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Support Tiers */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-800 mb-8 text-center">Support Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-xl transition-all duration-300 h-full ${
                    tier.recommended ? 'ring-2 ring-purple-500 relative' : ''
                  }`}>
                    {tier.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-500 text-white">Recommended</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <tier.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{tier.name}</CardTitle>
                      <div className="text-3xl text-purple-600 mb-2">{tier.amount}</div>
                      <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {tier.perks.map((perk, perkIndex) => (
                          <li key={perkIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                            {perk}
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full bg-gradient-to-r ${tier.color} text-white rounded-xl`}>
                        Support Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fund Usage */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-800 mb-8 text-center">How We Use Your Support</h2>
            <Card className="bg-white/60 backdrop-blur-sm border-white/30">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {usageFunds.map((fund, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700">{fund.category}</span>
                        <span className="text-gray-600">{fund.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`${fund.color} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: `${fund.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Support Us */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl text-gray-800 mb-6 text-center">Why Support Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-gray-800 mb-2">Free for Everyone</h4>
                <p className="text-gray-600 text-sm">We keep our platform completely free for all students and professionals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-gray-800 mb-2">Community Driven</h4>
                <p className="text-gray-600 text-sm">Built by students, for students and working professionals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-gray-800 mb-2">Continuous Innovation</h4>
                <p className="text-gray-600 text-sm">Your support helps us add new features and improve existing ones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}