
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "V3 Analytics Madurai",
      role: "Machine Learning",
      period: "Present",
      location: "Madurai",
      achievements: [
        "Improved Skills In Python And Data Science",
        "Gained Hands-On Experience With ML Algorithms",
        "Trained Models And Developed Skills In Predictive Analysis"
      ]
    },
    {
      company: "Gateway Software Solutions",
      role: "Machine Learning",
      period: "Previous",
      location: "Remote",
      achievements: [
        "Gained ML Model Training And Fine-Tuning Experience",
        "Built Fine-Tuned ML Models By Using Random Forest Model"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
                
                <div className="ml-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 md:p-8 shadow-lg w-full">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                      <h4 className="text-lg font-semibold text-blue-500 mb-2">{exp.company}</h4>
                    </div>
                    
                    <div className="flex flex-col lg:items-end text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
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
