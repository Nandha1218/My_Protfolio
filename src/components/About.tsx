
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a motivated and detail-oriented aspiring Machine Learning Developer with a strong foundation in Python, data analysis, and core ML concepts. I have completed hands-on projects involving model training, evaluation, and basic deployment using libraries like Scikit-learn, and Pandas.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am familiar with supervised and unsupervised learning techniques, and passionate about solving real-world problems using data-driven approaches. I am eager to contribute to innovative AI projects and continuously learn from industry professionals.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-violet-600 mb-3">Location</h3>
                <p className="text-gray-700">Tamil Nadu, India</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-violet-600 mb-3">Phone</h3>
                <p className="text-gray-700">+91 9363214089</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
