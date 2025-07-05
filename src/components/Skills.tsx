
import { Code, Database, Brain, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL", "HTML & CSS"]
    },
    {
      icon: <Brain size={24} />,
      title: "Machine Learning",
      skills: ["Supervised & Unsupervised Learning", "Model Evaluation", "Feature Engineering"]
    },
    {
      icon: <Database size={24} />,
      title: "Libraries & Frameworks",
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Other Skills",
      skills: ["Data Preprocessing", "Model Development", "Version Control", "Deep Learning Basics"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-700 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 text-sm">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
