import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Hardik Chhallani</h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer & AI Enthusiast passionate about building innovative 
                solutions that make a meaningful impact.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:hardikchhallani04@gmail.com"
                className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-400 hover:text-white hover:bg-red-600/20 hover:border-red-500/50 border border-gray-700/50 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/HardikChhallani"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-400 hover:text-white hover:bg-gray-600/20 hover:border-gray-500/50 border border-gray-700/50 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hardik-chhallani/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 border border-gray-700/50 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/HardikJain8071"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-400 hover:text-white hover:bg-cyan-600/20 hover:border-cyan-500/50 border border-gray-700/50 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a 
                  href="mailto:hardikchhallani04@gmail.com"
                  className="text-white hover:text-purple-400 transition-colors duration-200"
                >
                  hardikchhallani04@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white">India</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 flex items-center gap-2">
                © {currentYear} Hardik Chhallani. Made with 
                <Heart size={16} className="text-red-500 animate-pulse" />
                using React & Tailwind CSS
              </p>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;