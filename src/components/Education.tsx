
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Ramco Institute of Technology",
      period: "2022 - Present",
      grade: "CGPA - 7.63"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Ramco Vidyalaya",
      period: "2021 - 2022",
      grade: "73.4%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Ramco Vidyalaya",
      period: "2019 - 2020",
      grade: "70%"
    }
  ];

  const certifications = [
    {
      title: "Microsoft Azure Certification",
      description: "Coursera powered certification focusing on cloud computing and Azure services",
      skills: "Cloud Computing, Azure Services, Data Management"
    },
    {
      title: "ICT Academy PowerBI",
      description: "Comprehensive training in business intelligence and data visualization",
      skills: "Data Visualization, Business Intelligence, Dashboard Creation"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Education & Certifications
          </span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center lg:justify-start">
              <GraduationCap className="mr-3 text-blue-500" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-lg"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{edu.degree}</h4>
                  <p className="text-blue-500 font-semibold mb-1">{edu.institution}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{edu.period}</span>
                    <span className="font-semibold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center lg:justify-start">
              <Award className="mr-3 text-blue-500" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-lg"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h4>
                  <p className="text-gray-700 mb-3">{cert.description}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{cert.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
