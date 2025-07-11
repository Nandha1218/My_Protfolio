
import { GraduationCap, Award, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      specialization: "Artificial Intelligence and Data Science",
      institution: "Ramco Institute of Technology",
      period: "2022 - 2026",
      grade: "CGPA: 7.63",
      location: "Rajapalayam, Tamil Nadu",
      description: "Comprehensive program covering AI, ML, Data Science, and modern programming practices"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      specialization: "Science Stream",
      institution: "Ramco Vidyalaya",
      period: "2021 - 2022",
      grade: "73.4%",
      location: "Tamil Nadu",
      description: "Strong foundation in Mathematics, Physics, Chemistry, and Computer Science"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      specialization: "General Education",
      institution: "Ramco Vidyalaya",
      period: "2019 - 2020",
      grade: "70%",
      location: "Tamil Nadu",
      description: "Comprehensive secondary education with focus on core subjects"
    }
  ];

  const certifications = [
    {
      title: "Microsoft Azure Fundamentals",
      provider: "Microsoft via Coursera",
      description: "Comprehensive certification covering cloud computing fundamentals, Azure services, security, privacy, compliance, and trust",
      skills: ["Cloud Computing", "Azure Services", "Data Management", "Security & Compliance"],
      year: "2024",
      verified: true
    },
    {
      title: "Power BI Data Analytics",
      provider: "ICT Academy",
      description: "Advanced training in business intelligence, data visualization, and dashboard creation using Microsoft Power BI",
      skills: ["Data Visualization", "Business Intelligence", "Dashboard Design", "DAX Functions"],
      year: "2024",
      verified: true
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-teal-100/20 rounded-full filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-teal-100/25 to-blue-100/35 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Academic journey and professional certifications that built my expertise
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl mr-4">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50/80 to-teal-50/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{edu.degree}</h4>
                        {edu.specialization && (
                          <p className="text-blue-600 font-semibold mb-2">{edu.specialization}</p>
                        )}
                        <p className="text-blue-500 font-semibold mb-2">{edu.institution}</p>
                      </div>
                      <div className="flex items-center bg-white/60 px-3 py-1 rounded-full">
                        <TrendingUp size={14} className="text-green-600 mr-1" />
                        <span className="text-sm font-semibold text-gray-700">{edu.grade}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1 text-blue-500" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1 text-teal-500" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl mr-4">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-teal-50/80 to-blue-50/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100/50"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{cert.title}</h4>
                        <p className="text-teal-600 font-semibold mb-2">{cert.provider}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {cert.verified && (
                          <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            Verified
                          </div>
                        )}
                        <span className="text-sm font-semibold text-gray-600">{cert.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{cert.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white/70 text-teal-700 rounded-full text-xs font-medium border border-teal-200/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
