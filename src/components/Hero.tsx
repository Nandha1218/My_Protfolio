
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-teal-50/50">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/10 to-teal-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-200/10 to-blue-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/10 to-teal-100/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading - clean and simple */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-500 bg-clip-text text-transparent">
                Nandha M
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 font-light mb-8 leading-relaxed">
              AI & Data Science Student | Machine Learning Developer
            </h2>
          </div>
          
          {/* Description with perfect spacing */}
          <div className="mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Currently pursuing B.Tech in Artificial Intelligence and Data Science at Ramco Institute of Technology. 
              <br className="hidden sm:block" />
              Passionate about developing AI-driven solutions and implementing complex algorithms with real-world applications.
            </p>
          </div>
          
          {/* Call to action button */}
          <div className="flex justify-center items-center mb-16">
            <button 
              onClick={scrollToAbout}
              className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Social links with perfect alignment */}
          <div className="flex justify-center items-center space-x-8 mb-16">
            <a 
              href="mailto:nandhamarikannan2004@gmail.com" 
              className="group p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-blue-100/50"
            >
              <Mail size={28} className="text-blue-500 group-hover:text-teal-500 transition-colors duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nandha-m-38681b250" 
              className="group p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-blue-100/50"
            >
              <Linkedin size={28} className="text-blue-500 group-hover:text-teal-500 transition-colors duration-300" />
            </a>
            <a 
              href="https://github.com/Nandha1218" 
              className="group p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-blue-100/50"
            >
              <Github size={28} className="text-blue-500 group-hover:text-teal-500 transition-colors duration-300" />
            </a>
          </div>
          
          {/* Simple scroll indicator */}
          <div className="flex justify-center">
            <button
              onClick={scrollToAbout}
              className="p-4 text-blue-500 hover:text-teal-500 transition-colors duration-300"
            >
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative">
                <div className="w-1 h-3 bg-current rounded-full mt-2"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
