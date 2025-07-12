
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Who I Am
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-10 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am currently pursuing a B.Tech in Artificial Intelligence and Data Science at Ramco Institute of Technology, 
              with an expected graduation in 2026. This program is equipping me with a strong foundation in machine 
              learning, data analytics, and AI technologies.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I am gaining hands-on experience working with real-world data, developing AI-driven solutions, and implementing 
              complex algorithms. Through my studies, I am enhancing my problem-solving abilities, programming expertise, 
              and data modeling skills, preparing me to tackle challenges in the evolving fields of AI and data science.
            </p>
            
            <div className="relative mt-8 pb-2">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-blue-500 mb-3">Location</h3>
                <p className="text-gray-700">Tamil Nadu, India</p>
              </div>
              <div className="absolute bottom-2 right-0 text-right">
                <h3 className="text-xl font-semibold text-blue-500 mb-3">Phone</h3>
                <p className="text-gray-700">+91 9790454161</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
