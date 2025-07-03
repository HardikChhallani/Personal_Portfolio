import React from 'react';
import { Github, Linkedin, Download, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
                <span className="block relative">
                  Hardik
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl rounded-lg"></div>
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                  Chhallani
                </span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl text-gray-300 font-light tracking-wide">
                Enthusiast | Eager
              </p>
              
              <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                "Building innovative solutions with Python, and cutting-edge technologies. 
                Passionate about AI, automation, and creating impactful digital experiences."
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a href="/resources/Resume.pdf" download>
              <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Download size={22} />
                <span className="relative z-10">Download Resume</span>
              </button>
            </a>
            
            {/* Enhanced Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/HardikChhallani"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-gray-700/50 hover:border-purple-500/50"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hardik-chhallani/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-gray-700/50 hover:border-blue-500/50"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/HardikJain8071"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-gray-700/50 hover:border-cyan-500/50"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;