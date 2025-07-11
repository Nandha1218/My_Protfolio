
import { Github, ExternalLink, Star, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "WhatsApp Group Chat Analyzer",
      description: "Advanced ML-powered analytics tool that processes WhatsApp group chat data using K-means clustering algorithm. Features include sentiment analysis, user activity patterns, and interactive visualizations with a modern React frontend.",
      technologies: ["Python", "K-means Algorithm", "React", "Data Visualization", "NLP"],
      github: "#",
      demo: "#",
      status: "Completed",
      featured: true
    },
    {
      title: "Photo Search Intelligence",
      description: "Intelligent photo search and categorization system leveraging computer vision and deep learning. Implements advanced image recognition algorithms for automatic tagging and semantic search capabilities.",
      technologies: ["Python", "Computer Vision", "Deep Learning", "TensorFlow", "OpenCV"],
      github: "#",
      demo: "#",
      status: "Prototype",
      featured: true
    },
    {
      title: "Voice Cloning System",
      description: "State-of-the-art voice synthesis and cloning technology using neural networks. Capable of generating realistic speech from text input while maintaining speaker characteristics and emotional nuances.",
      technologies: ["Python", "Deep Learning", "Audio Processing", "PyTorch", "Neural Networks"],
      github: "#",
      demo: "#",
      status: "Development",
      featured: false
    },
    {
      title: "Resume Ranker Pro",
      description: "AI-powered HR analytics platform that automatically analyzes and ranks candidate resumes. Uses advanced NLP techniques for skill extraction, experience evaluation, and job-fit scoring.",
      technologies: ["Python", "NLP", "Machine Learning", "BERT", "Flask API"],
      github: "#",
      demo: "#",
      status: "In Progress",
      featured: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Development': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Prototype': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50/60 via-white to-teal-50/60 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-teal-200/15 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-teal-200/20 to-blue-200/25 rounded-full filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Showcasing innovative solutions and technical implementations
            </p>
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-blue-100/50 ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      {project.featured && (
                        <div className="flex items-center mr-3">
                          <Star size={16} className="text-yellow-500 fill-current" />
                          <span className="text-xs font-medium text-yellow-600 ml-1">Featured</span>
                        </div>
                      )}
                      <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        <Clock size={12} className="inline mr-1" />
                        {project.status}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100/80 to-teal-100/80 text-blue-700 rounded-full text-xs sm:text-sm font-medium border border-blue-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center px-4 py-3 border-2 border-blue-300 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
