
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-teal-50/80">
      {/* Modern floating background elements with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-200/25 to-blue-200/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-teal-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-500"></div>
        
        {/* Additional floating elements for modern look */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-teal-400/40 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-300/50 rounded-full animate-ping delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with fade-in animation */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-500 bg-clip-text text-transparent animate-gradient bg-300% hover:scale-105 transition-transform duration-300">
                Nandha M
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light mb-6 animate-fade-in delay-200">
              AI & Data Science Student | Machine Learning Developer
            </h2>
          </div>
          
          {/* Description with staggered animation */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in delay-300">
            Currently pursuing B.Tech in Artificial Intelligence and Data Science at Ramco Institute of Technology. 
            Passionate about developing AI-driven solutions and implementing complex algorithms with real-world applications.
          </p>
          
          {/* Single action button with modern hover effects */}
          <div className="flex justify-center items-center mb-12 animate-fade-in delay-400">
            <button 
              onClick={scrollToAbout}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Social links with enhanced animations */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-500">
            <a 
              href="mailto:nandhamarikannan2004@gmail.com" 
              className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} className="text-blue-500 group-hover:text-teal-500 transition-colors group-hover:rotate-12" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nandha-m-38681b250" 
              className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} className="text-blue-500 group-hover:text-teal-500 transition-colors group-hover:rotate-12" />
            </a>
            <a 
              href="https://github.com/Nandha1218" 
              className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Github size={24} className="text-blue-500 group-hover:text-teal-500 transition-colors group-hover:rotate-12" />
            </a>
          </div>
          
          {/* Smooth scroll indicator with gentle float animation */}
          <div className="animate-fade-in delay-600">
            <button
              onClick={scrollToAbout}
              className="p-3 text-blue-500 hover:text-teal-500 transition-colors duration-300 animate-float"
            >
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
