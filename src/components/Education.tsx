
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "CK College of Engineering and Technology",
      period: "2022 - Present",
      grade: "CGPA - 8.04"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "HSLC - 70.8%",
      period: "2021 - 2022",
      grade: "70.8%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Vels Public School",
      period: "2019 - 2020",
      grade: "79%"
    }
  ];

  const courses = [
    {
      title: "Udemy ML Course",
      description: "Covered core ML concepts including supervised and unsupervised learning",
      skills: "Interactive modules, quizzes, and hands-on projects focused on real-world datasets"
    },
    {
      title: "Coursera ML Foundation",
      description: "Gained foundational knowledge of machine learning through Coursera's beginner-friendly program",
      skills: "Linear regression, classification, clustering, feature selection, and model evaluation techniques"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Education & Courses
          </span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center lg:justify-start">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-lg"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{edu.degree}</h4>
                  <p className="text-blue-600 font-semibold mb-1">{edu.institution}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{edu.period}</span>
                    <span className="font-semibold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center lg:justify-start">
              <Award className="mr-3 text-blue-600" size={28} />
              Courses
            </h3>
            
            <div className="space-y-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-lg"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h4>
                  <p className="text-gray-700 mb-3">{course.description}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{course.skills}</p>
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
