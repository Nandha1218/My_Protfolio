
import { Code, Database, Brain, BarChart3, Wrench, Cpu } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL", "JavaScript", "HTML & CSS"]
    },
    {
      icon: <Brain size={24} />,
      title: "Machine Learning",
      skills: ["Supervised & Unsupervised Learning", "Model Evaluation", "K-means Algorithm", "Predictive Analysis"]
    },
    {
      icon: <Database size={24} />,
      title: "Tools & Frameworks",
      skills: ["VS Code", "Jupyter Notebook", "Git", "PostgreSQL", "PowerBI"]
    },
    {
      icon: <Cpu size={24} />,
      title: "AI Tools",
      skills: ["Cursor", "GPT", "Claude", "Copilot Agent"]
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Data Analytics",
      skills: ["Data Modeling", "Statistical Analysis", "Data Visualization", "Algorithm Development"]
    },
    {
      icon: <Wrench size={24} />,
      title: "Additional Skills",
      skills: ["Problem Solving", "Teamwork", "Fast Learning", "Self-driven", "Logical Thinking"]
    }
  ];

  const [ref, visibleItems] = useStaggeredAnimation(skillCategories.length, 150);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">
            Technical Skills
          </span>
        </h2>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift transform ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-400 to-teal-500 text-white rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className={`text-gray-600 text-sm transition-all duration-300 ${
                      visibleItems.includes(index) 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-4'
                    }`}
                    style={{
                      transitionDelay: `${(index * 150) + (skillIndex * 100)}ms`
                    }}
                  >
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
