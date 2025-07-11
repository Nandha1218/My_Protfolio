
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations in AI and Data Science. 
              Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:nandhamarikannan2004@gmail.com"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-sm text-gray-600 break-words">nandhamarikannan2004@gmail.com</p>
            </a>
            
            <a
              href="tel:+919790454161"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-sm text-gray-600">+91 9790454161</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nandha-m-38681b250"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600">Connect with me</p>
            </a>
            
            <a
              href="https://github.com/Nandha1218"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
              <p className="text-sm text-gray-600">View my projects</p>
            </a>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-blue-500 mr-2" size={20} />
              <span className="text-gray-700">Tamil Nadu, India</span>
            </div>
            
            <p className="text-gray-600">
              © 2024 Nandha M. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
