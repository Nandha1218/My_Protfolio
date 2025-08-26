
import { Github, ExternalLink } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const handleComingSoon = () => {
    alert('Coming Soon');
  };
  const projects = [
    {
      title: "WhatsApp Group Chat Analyzer",
      description: "Trained and fine-tuned ML model using K-means algorithm to analyze group chat patterns. Built structured frontend with user-friendly UI and modernized AI tools integration.",
      technologies: ["Python", "K-means Algorithm", "Frontend Development", "AI Tools"],
      github: "https://github.com/Nandha1218/Chat__analyzer.git",
      demo: "https://drive.google.com/file/d/1-EPVIgpjN_Wr7c0e222Dys77PyQO6wvn/view?usp=sharing"
    },
    {
      title: "Resume Ranker",
      description: "AI-powered resume screening tool that automatically scans, analyzes, and ranks candidates using smart keyword matching and compatibility scoring. Features Google Cloud Vision API for scanned resume processing.",
      technologies: ["React", "TypeScript", "AI/ML", "Google Cloud Vision"],
      github: "https://github.com/Nandha1218/resume_ranker1.git",
      demo: "https://resume-ranker1.vercel.app/"
    },
    {
      title: "Cine Search",
      description: "React-based movie discovery platform powered by TMDB API. Features search, filtering, sorting, trending sections, and detailed movie info with modern dark theme and glassmorphism design.",
      technologies: ["React", "TMDB API", "Responsive Design", "Movie Discovery"],
      github: "https://github.com/Nandha1218/movie-app.git",
      demo: "https://movie-app-projectf.vercel.app/"
    },
    {
      title: "Voice Cloning System",
      description: "Idea-based prototype for voice synthesis and cloning technology using advanced AI models and deep learning techniques.",
      technologies: ["Python", "Deep Learning", "Audio Processing", "AI Models"],
      github: "#",
      demo: "#"
    }
  ];

  const [ref, visibleItems] = useStaggeredAnimation(projects.length, 200);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">
            Featured Projects
          </span>
        </h2>
        
        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift transform ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.title === "Voice Cloning System" ? (
                  <>
                    <button
                      onClick={handleComingSoon}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </button>
                    <button
                      onClick={handleComingSoon}
                      className="flex items-center px-4 py-2 border border-blue-400 text-blue-500 rounded-lg hover:bg-blue-50 transition-all duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </button>
                  </>
                ) : (
                  <>
                    <a
                      href={project.github}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center px-4 py-2 border border-blue-400 text-blue-500 rounded-lg hover:bg-blue-50 transition-all duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
