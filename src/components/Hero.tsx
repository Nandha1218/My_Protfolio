
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
      
      {/* Enhanced floating background effects */}
      <div className="absolute top-20 left-16 w-96 h-32 bg-gradient-to-r from-blue-100/20 to-teal-100/20 rounded-[100px] mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-80 h-40 bg-gradient-to-l from-teal-200/15 to-blue-200/15 rounded-[120px] mix-blend-multiply filter blur-3xl opacity-50 animate-float delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-72 h-36 bg-gradient-to-tr from-blue-50/30 to-teal-50/30 rounded-[80px] mix-blend-multiply filter blur-2xl opacity-40 animate-float delay-500"></div>
      <div className="absolute bottom-20 right-1/3 w-64 h-28 bg-gradient-to-bl from-teal-100/25 to-blue-100/25 rounded-[90px] mix-blend-multiply filter blur-3xl opacity-35 animate-float delay-1500"></div>
      
      <div ref={ref} className="container mx-auto px-6 text-center relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">
              Nandha M
            </span>
          </h1>
          <h2 className={`text-2xl md:text-3xl text-gray-700 mb-8 font-light transition-all duration-1000 delay-300 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            AI & Data Science Student
          </h2>
          <p className={`text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            Currently pursuing B.Tech in Artificial Intelligence and Data Science at Ramco Institute of Technology. 
            Passionate about developing AI-driven solutions and implementing complex algorithms with real-world applications.
          </p>
          
          <div className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <a href="mailto:nandhamarikannan2004@gmail.com" className="p-3 bg-gradient-to-r from-blue-400 to-teal-500 text-white rounded-full hover:shadow-xl hover:scale-110 transition-all duration-300 hover-lift animate-pulse-glow" target="_blank" rel="noopener noreferrer">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nandha-m-38681b250" className="p-3 bg-gradient-to-r from-blue-400 to-teal-500 text-white rounded-full hover:shadow-xl hover:scale-110 transition-all duration-300 hover-lift animate-pulse-glow" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Nandha1218" className="p-3 bg-gradient-to-r from-blue-400 to-teal-500 text-white rounded-full hover:shadow-xl hover:scale-110 transition-all duration-300 hover-lift animate-pulse-glow" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className={`animate-bounce p-2 text-blue-500 hover:text-teal-500 transition-all duration-300 hover:scale-110 ${isVisible ? 'animate-fadeInUp delay-1000' : 'opacity-0 translate-y-10'}`}
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
