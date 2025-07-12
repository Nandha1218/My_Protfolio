
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';

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
          
          <div className="flex justify-center gap-6 items-stretch mb-8">
            {/* ...existing code... */}
            
            <a
              href="tel:+919790454161"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center flex flex-col justify-between min-h-[260px]"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-sm text-gray-600">+91 9790454161</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nandha-m-38681b250"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center flex flex-col justify-between min-h-[260px]"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600">Connect with me</p>
            </a>
            
            <a
              href="https://github.com/Nandha1218"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center flex flex-col justify-between min-h-[260px]"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
              <p className="text-sm text-gray-600">View my projects</p>
            </a>
            {/* ...existing code... */}
          </div>
          <div className="flex justify-center mt-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center min-w-[220px] min-h-[220px] max-w-[350px] w-full flex flex-col justify-between">
              <div className="text-xl font-bold mb-4 text-blue-600">Contact Me</div>
              <ContactForm />
            </div>
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
