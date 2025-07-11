
import { Code, Database, Brain, BarChart3, Wrench, Cpu, Cloud, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL", "JavaScript", "HTML & CSS"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain size={24} />,
      title: "Machine Learning",
      skills: ["Supervised & Unsupervised Learning", "Model Evaluation", "K-means Algorithm", "Predictive Analysis"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Database size={24} />,
      title: "Data & Analytics",
      skills: ["Data Modeling", "Statistical Analysis", "Data Visualization", "Algorithm Development"],
      color: "from-blue-600 to-teal-500"
    },
    {
      icon: <Cpu size={24} />,
      title: "AI Tools",
      skills: ["Cursor", "GPT", "Claude", "Copilot Agent", "LovableAI"],
      color: "from-teal-600 to-blue-500"
    },
    {
      icon: <Wrench size={24} />,
      title: "Development Tools",
      skills: ["VS Code", "Jupyter Notebook", "Git", "PostgreSQL", "PowerBI"],
      color: "from-blue-500 to-teal-600"
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud & Platforms",
      skills: ["Microsoft Azure", "Cloud Computing", "Data Management", "Business Intelligence"],
      color: "from-teal-500 to-blue-600"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50/60 via-white to-teal-50/60 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-teal-200/10 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-teal-200/15 to-blue-200/25 rounded-full filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              A comprehensive overview of my technical expertise and capabilities
            </p>
          </div>
          
          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100/50"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
