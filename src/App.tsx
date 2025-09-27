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
  User
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
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      text: "Successfully generated more than 5 cr revenue for our clients"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      text: "Generated more than 10,000 business enquiries"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      text: "Built more than 50 websites & e-commerce platforms"
    },
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      text: "Handling clients from India, Singapore, Germany, UAE, US and Bangladesh"
    }
  ];

  const countries = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'US', flag: '🇺🇸' },
    { name: 'Bangladesh', flag: '🇧🇩' }
  ];

  const brands = [
    'Tata', 'Yamaha', 'TVS Motors', 'First Abu Dhabi Bank', 
    'Amazon', 'Myntra', 'Flipkart', 'Dermanext', 
    'Bene Cleed', 'Minto Bay'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Want to build your website at a{' '}
            <span className="text-blue-600">very affordable price</span>?
          </h1>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
            <p className="text-xl sm:text-2xl font-semibold">
              Build your website in just cost of one cup of coffee per day
            </p>
            <p className="text-3xl sm:text-4xl font-bold mt-2">₹33/Day*</p>
          </div>
          <div className="animate-bounce">
            <ArrowRight className="w-8 h-8 mx-auto text-blue-600" />
          </div>
        </div>
      </section>

      {/* Why Trust LTABai.in Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Why trust <span className="text-blue-600">LTABai.in</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  {achievement.icon}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Country Flags */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Trusted by clients worldwide
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {countries.map((country, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className="text-sm font-medium text-gray-700">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Worked with Top Brands Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Worked with <span className="text-yellow-400">Top Brands</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-white font-bold text-lg">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Projects Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Examples of our <span className="text-blue-600">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div 
                key={project}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <p className="text-white font-semibold">Project Screenshot #{project}</p>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Project Title {project}</h3>
                  <p className="text-gray-600">Brief description of the project and its key features.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Form Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              If you want a website that can generate profit for you
            </h2>
            <p className="text-xl opacity-90">Provide your details here</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your business name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your city/location"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get My Website Quote Now!
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">LTABai.in</p>
          <p className="text-gray-400">Building profitable websites for businesses worldwide</p>
        </div>
      </footer>
    </div>
  );
}

export default App;