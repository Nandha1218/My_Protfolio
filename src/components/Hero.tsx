
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-teal-50/80">
      {/* Modern floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-200/25 to-blue-200/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-teal-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-500 bg-clip-text text-transparent">
                Nandha M
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light mb-6">
              AI & Data Science Student | Machine Learning Developer
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Currently pursuing B.Tech in Artificial Intelligence and Data Science at Ramco Institute of Technology. 
            Passionate about developing AI-driven solutions and implementing complex algorithms with real-world applications.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={scrollToAbout}
              className="w-full sm:w-auto px-8 py-4 border-2 border-blue-300 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="mailto:nandhamarikannan2004@gmail.com" 
              className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            >
              <Mail size={24} className="text-blue-500 group-hover:text-teal-500 transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nandha-m-38681b250" 
              className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin size={24} className="text-blue-500 group-hover:text-teal-500 transition-colors" />
            </a>
            <a 
              href="https://github.com/Nandha1218" 
              className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            >
              <Github size={24} className="text-blue-500 group-hover:text-teal-500 transition-colors" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-3 text-blue-500 hover:text-teal-500 transition-colors duration-300"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
