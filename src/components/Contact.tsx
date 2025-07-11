
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50/60 via-white to-teal-50/60 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-teal-200/15 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-200/20 to-blue-200/25 rounded-full filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              I'm always interested in new opportunities, collaborations, and innovative projects in AI and Data Science. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you!
            </p>
          </div>
          
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href="mailto:nandhamarikannan2004@gmail.com"
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-blue-100/50"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Email</h3>
              <p className="text-sm text-gray-600 break-words leading-relaxed">nandhamarikannan2004@gmail.com</p>
              <div className="mt-3 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Send Message →
              </div>
            </a>
            
            <a
              href="tel:+919790454161"
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-blue-100/50"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Phone</h3>
              <p className="text-sm text-gray-600">+91 9790454161</p>
              <div className="mt-3 text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Call Now →
              </div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nandha-m-38681b250"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-blue-100/50"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">LinkedIn</h3>
              <p className="text-sm text-gray-600">Professional Network</p>
              <div className="mt-3 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Connect →
              </div>
            </a>
            
            <a
              href="https://github.com/Nandha1218"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-blue-100/50"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">GitHub</h3>
              <p className="text-sm text-gray-600">View Projects</p>
              <div className="mt-3 text-gray-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore →
              </div>
            </a>
          </div>
          
          {/* CTA section */}
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-lg border border-blue-100/50">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <MessageSquare className="text-blue-500 mr-3" size={32} />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Ready to Collaborate?</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
                I'm actively seeking opportunities in AI/ML development, data science projects, and innovative tech solutions. 
                Let's discuss how we can work together to create something amazing!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:nandhamarikannan2004@gmail.com?subject=Collaboration Opportunity"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Start a Conversation
                </a>
                <div className="flex items-center text-gray-600">
                  <MapPin className="mr-2" size={18} />
                  <span className="text-sm sm:text-base">Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-blue-100/50">
            <p className="text-gray-600 text-sm sm:text-base">
              © 2024 Nandha M. Crafted with passion using modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
