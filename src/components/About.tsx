
import { MapPin, Phone, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-teal-100/30 rounded-full filter blur-2xl opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-teal-100/30 to-blue-100/40 rounded-full filter blur-2xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50/80 to-teal-50/60 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-blue-100/50">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  I am currently pursuing a B.Tech in Artificial Intelligence and Data Science at Ramco Institute of Technology, 
                  with an expected graduation in 2026. This program is equipping me with a strong foundation in machine 
                  learning, data analytics, and AI technologies.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  I am gaining hands-on experience working with real-world data, developing AI-driven solutions, and implementing 
                  complex algorithms. Through my studies, I am enhancing my problem-solving abilities, programming expertise, 
                  and data modeling skills, preparing me to tackle challenges in the evolving fields of AI and data science.
                </p>
              </div>
            </div>
            
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100/50">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg mr-3">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                </div>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100/50">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg mr-3">
                    <Phone size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                </div>
                <p className="text-gray-600">+91 9790454161</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100/50">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg mr-3">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Education</h3>
                </div>
                <p className="text-gray-600">B.Tech AI & DS</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100/50">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg mr-3">
                    <Calendar size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Expected Grad</h3>
                </div>
                <p className="text-gray-600">2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
