
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Fever Variant Prediction Model",
      description: "Created a model using Linear Algorithm to predict fever types using Flask-based ML model that gives 80% above accuracy with health symptom data.",
      technologies: ["Python", "Flask", "Machine Learning", "Linear Algorithm"],
      github: "#",
      demo: "#"
    },
    {
      title: "Chat Analyser ML Model",
      description: "Trained and fine-tuned an Random Forest Algorithm model to predict chat among WhatsApp group and give structured chat analysis.",
      technologies: ["Python", "Flask", "Random Forest", "NLP"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center px-4 py-2 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-50 transition-all duration-200"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
