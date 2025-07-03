import React from 'react';
import { Code, Brain, Zap, Smartphone, Globe, Database } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Brain size={18} />,
      title: "Artificial Intelligence & ML",
      description: "Exploring cutting-edge AI technologies, machine learning algorithms, and their practical applications in solving real-world problems"
    },
    {
      icon: <Globe size={18} />,
      title: "Web Development",
      description: "Creating end-to-end web solutions with modern frameworks, APIs, and cloud technologies"
    },
    {
      icon: <Database size={18} />,
      title: "Data Engineering",
      description: "Designing efficient data pipelines, working with databases, and implementing scalable backend architectures"
    },
    {
      icon: <Code size={18} />,
      title: "Open Source",
      description: "Contributing to the developer community through open-source projects and knowledge sharing"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about technology and innovation, I strive to create solutions that make a meaningful impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Text Content */}
          <div className="space-y-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Hey there! I’m Hardik Chhallani, a curious technologist with a passion for crafting intelligent, impactful, and scalable solutions. My journey began with a fascination for how things work and evolved into a deep dive into Artificial Intelligence, Machine Learning, and Web Development.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Currently, I’m a Data Science Intern at Eka.Care, where I work on extracting real-world value from healthcare data and integrating cutting-edge AI into meaningful user experiences. Prior to this, I interned at the Aeronautical Development Agency (ADA), where I had the opportunity to work on data systems related to fighter jet technologies—yes, it was as cool as it sounds! 
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="text-3xl font-bold text-white mb-2">6+</div>
                <div className="text-gray-400">Months Experience</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Enhanced Interests Grid */}
          <div className="grid gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/40 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl text-white group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    {interest.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {interest.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;