
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Geonx Logix",
      role: "Machine Learning Intern",
      period: "June 2024 - August 2024",
      location: "Madurai, Tamil Nadu",
      type: "Internship",
      achievements: [
        "Developed and implemented machine learning algorithms for predictive analysis",
        "Gained hands-on experience with Python and advanced data science libraries",
        "Worked on real-world datasets to solve complex business problems",
        "Improved model accuracy by 15% through feature engineering and optimization"
      ]
    },
    {
      company: "Gateway Software Solutions",
      role: "Software Development Intern",
      period: "March 2024 - May 2024",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Enhanced web development skills through practical project implementation",
        "Collaborated with senior developers on full-stack development projects",
        "Learned industry best practices for code quality and software architecture",
        "Contributed to the development of client-facing web applications"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-teal-100/20 rounded-full filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-gradient-to-tr from-teal-100/25 to-blue-100/35 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Professional experience and internships that shaped my career journey
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-teal-400 to-blue-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:block absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg"></div>
                
                {/* Content card */}
                <div className="md:ml-16 bg-gradient-to-br from-blue-50/80 to-teal-50/60 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center mb-2">
                        <Briefcase size={20} className="text-blue-500 mr-2" />
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{exp.role}</h3>
                      <h4 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
                    </div>
                    
                    <div className="flex flex-col lg:items-end space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-blue-500" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-teal-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
