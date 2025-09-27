import React, { useState } from 'react';
import { 
  CheckCircle, 
  Users, 
  Globe, 
  TrendingUp, 
  Star,
  ArrowRight,
  Phone,
  MapPin,
  Building,
  User,
  Zap,
  Target,
  Award,
  Rocket,
  Shield,
  Heart,
  Coffee,
  DollarSign,
  Calendar,
  Clock,
  Mail,
  MessageCircle,
  Briefcase,
  Code,
  Palette,
  Monitor,
  Smartphone
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    location: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const achievements = [
    {
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      text: "Successfully generated more than 5 cr revenue for our clients",
      bgColor: "bg-green-500",
      accentColor: "border-green-300"
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      text: "Generated more than 10,000 business enquiries",
      bgColor: "bg-blue-500",
      accentColor: "border-blue-300"
    },
    {
      icon: <Globe className="w-12 h-12 text-white" />,
      text: "Built more than 50 websites & e-commerce platforms",
      bgColor: "bg-purple-500",
      accentColor: "border-purple-300"
    },
    {
      icon: <Star className="w-12 h-12 text-white" />,
      text: "Handling clients from India, Singapore, Germany, UAE, US and Bangladesh",
      bgColor: "bg-orange-500",
      accentColor: "border-orange-300"
    }
  ];

  const countries = [
    { name: 'India', flag: '🇮🇳', color: 'bg-orange-100 border-orange-300' },
    { name: 'Singapore', flag: '🇸🇬', color: 'bg-red-100 border-red-300' },
    { name: 'Germany', flag: '🇩🇪', color: 'bg-yellow-100 border-yellow-300' },
    { name: 'UAE', flag: '🇦🇪', color: 'bg-green-100 border-green-300' },
    { name: 'US', flag: '🇺🇸', color: 'bg-blue-100 border-blue-300' },
    { name: 'Bangladesh', flag: '🇧🇩', color: 'bg-emerald-100 border-emerald-300' }
  ];

  const brands = [
    { name: 'Tata', color: 'bg-blue-600', icon: <Building className="w-8 h-8 text-white" /> },
    { name: 'Yamaha', color: 'bg-red-600', icon: <Zap className="w-8 h-8 text-white" /> },
    { name: 'TVS Motors', color: 'bg-green-600', icon: <Target className="w-8 h-8 text-white" /> },
    { name: 'First Abu Dhabi Bank', color: 'bg-purple-600', icon: <Shield className="w-8 h-8 text-white" /> },
    { name: 'Amazon', color: 'bg-orange-600', icon: <Award className="w-8 h-8 text-white" /> },
    { name: 'Myntra', color: 'bg-pink-600', icon: <Heart className="w-8 h-8 text-white" /> },
    { name: 'Flipkart', color: 'bg-indigo-600', icon: <Rocket className="w-8 h-8 text-white" /> },
    { name: 'Dermanext', color: 'bg-teal-600', icon: <Star className="w-8 h-8 text-white" /> },
    { name: 'Bene Cleed', color: 'bg-cyan-600', icon: <Globe className="w-8 h-8 text-white" /> },
    { name: 'Minto Bay', color: 'bg-emerald-600', icon: <Users className="w-8 h-8 text-white" /> }
  ];

  const projectTypes = [
    { 
      title: 'E-commerce Platform', 
      icon: <Monitor className="w-8 h-8 text-white" />, 
      color: 'bg-blue-500',
      features: ['Payment Gateway', 'Inventory Management', 'Mobile Responsive']
    },
    { 
      title: 'Business Website', 
      icon: <Briefcase className="w-8 h-8 text-white" />, 
      color: 'bg-green-500',
      features: ['Professional Design', 'SEO Optimized', 'Contact Forms']
    },
    { 
      title: 'Mobile App', 
      icon: <Smartphone className="w-8 h-8 text-white" />, 
      color: 'bg-purple-500',
      features: ['iOS & Android', 'Push Notifications', 'Offline Support']
    },
    { 
      title: 'Custom Development', 
      icon: <Code className="w-8 h-8 text-white" />, 
      color: 'bg-orange-500',
      features: ['Custom Features', 'API Integration', 'Database Design']
    },
    { 
      title: 'UI/UX Design', 
      icon: <Palette className="w-8 h-8 text-white" />, 
      color: 'bg-pink-500',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    { 
      title: 'Digital Marketing', 
      icon: <TrendingUp className="w-8 h-8 text-white" />, 
      color: 'bg-indigo-500',
      features: ['SEO', 'Social Media', 'PPC Campaigns']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:py-20 bg-white relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10">
            <Rocket className="w-32 h-32 text-blue-500 transform rotate-12" />
          </div>
          <div className="absolute top-20 right-20">
            <Star className="w-24 h-24 text-yellow-500 transform -rotate-12" />
          </div>
          <div className="absolute bottom-20 left-1/4">
            <Globe className="w-28 h-28 text-green-500 transform rotate-45" />
          </div>
          <div className="absolute bottom-10 right-1/3">
            <Zap className="w-20 h-20 text-purple-500 transform -rotate-45" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500 p-4 rounded-full">
              <Globe className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Want to build your website at a{' '}
            <span className="text-blue-600 relative">
              very affordable price
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded"></div>
            </span>?
          </h1>
          
          <div className="bg-orange-500 text-white p-8 rounded-3xl shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-300 border-4 border-orange-300">
            <div className="flex items-center justify-center mb-4">
              <Coffee className="w-8 h-8 mr-3" />
              <span className="text-xl font-semibold">Daily Coffee Cost</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold mb-2">
              Build your website in just cost of one cup of coffee per day
            </p>
            <div className="flex items-center justify-center">
              <DollarSign className="w-8 h-8 mr-2" />
              <span className="text-4xl sm:text-5xl font-bold">₹33/Day*</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <div className="bg-green-500 p-3 rounded-full animate-bounce">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="bg-blue-500 p-3 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}>
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="bg-purple-500 p-3 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}>
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust LTABai.in Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500 p-4 rounded-full">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why trust <span className="text-blue-600">LTABai.in</span>?
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-8 ${achievement.accentColor}`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`${achievement.bgColor} p-4 rounded-2xl shadow-lg`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {achievement.text}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Country Flags */}
          <div className="mt-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-500 p-4 rounded-full">
                <Globe className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Trusted by clients <span className="text-green-600">worldwide</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {countries.map((country, index) => (
                <div 
                  key={index}
                  className={`${country.color} border-2 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <div className="text-sm font-bold text-gray-700">{country.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Worked with Top Brands Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-500 p-4 rounded-full">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Worked with <span className="text-yellow-400">Top Brands</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className={`${brand.color} p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border-4 border-white border-opacity-20`}
              >
                <div className="mb-3">
                  {brand.icon}
                </div>
                <div className="text-white font-bold text-sm leading-tight">{brand.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Projects Section */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-500 p-4 rounded-full">
                <Rocket className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Examples of our <span className="text-purple-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-gray-100"
              >
                <div className={`${project.color} p-8 text-center relative`}>
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 text-white opacity-50" />
                  </div>
                  {project.icon}
                  <h3 className="text-white font-bold text-xl mt-4">{project.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Form Section */}
      <section className="py-16 px-4 bg-green-500 relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Target className="w-24 h-24 text-white transform rotate-12" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Rocket className="w-32 h-32 text-white transform -rotate-12" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center text-white mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full">
                <Target className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              If you want a website that can <span className="text-yellow-300">generate profit</span> for you
            </h2>
            <p className="text-xl opacity-90 font-medium">Provide your details here</p>
            <div className="flex justify-center mt-4 space-x-2">
              <Clock className="w-6 h-6" />
              <span className="font-semibold">Quick Response Guaranteed!</span>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-8 border-green-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                    <div className="flex items-center">
                      <div className="bg-blue-500 p-2 rounded-lg mr-3">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      Name *
                    </div>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 font-medium"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                    <div className="flex items-center">
                      <div className="bg-green-500 p-2 rounded-lg mr-3">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      Phone Number *
                    </div>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-300 font-medium"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-bold text-gray-700 mb-3">
                    <div className="flex items-center">
                      <div className="bg-purple-500 p-2 rounded-lg mr-3">
                        <Building className="w-4 h-4 text-white" />
                      </div>
                      Business Name *
                    </div>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 font-medium"
                    placeholder="Enter your business name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-bold text-gray-700 mb-3">
                    <div className="flex items-center">
                      <div className="bg-orange-500 p-2 rounded-lg mr-3">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      Location *
                    </div>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 font-medium"
                    placeholder="Enter your city/location"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl border-4 border-orange-300 text-xl"
              >
                <div className="flex items-center justify-center">
                  <Rocket className="w-6 h-6 mr-3" />
                  Get My Website Quote Now!
                  <ArrowRight className="w-6 h-6 ml-3" />
                </div>
              </button>
              
              <div className="text-center mt-6">
                <div className="flex items-center justify-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-medium">100% Secure</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="font-medium">Quick Response</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 text-purple-500 mr-2" />
                    <span className="font-medium">Free Consultation</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-2xl font-bold mb-2">LTABai.in</p>
          <p className="text-gray-400 text-lg">Building profitable websites for businesses worldwide</p>
          <div className="flex justify-center mt-6 space-x-4">
            <div className="bg-green-500 p-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="bg-blue-500 p-2 rounded-full">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="bg-purple-500 p-2 rounded-full">
              <Award className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;