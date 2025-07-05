
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-800 bg-clip-text text-transparent">
              Manoj Kumar M
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Machine Learning Developer
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about solving real-world problems using data-driven approaches. 
            Specializing in Python, machine learning, and innovative AI solutions.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:manojkumarm2705@gmail.com" className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-200">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manoj-kumar-m-4b336a254" className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-200">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Manojkumarm2005" className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-200">
              <Github size={24} />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 text-violet-600 hover:text-purple-600 transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
