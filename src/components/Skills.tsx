import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "⚡" }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "MCP", icon: "🤖" },
        { name: "TensorFlow", icon: "🧠" },
        { name: "PyTorch", icon: "🔥" },
        { name: "Scikit-learn", icon: "📈" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Material-UI", icon: "🎭" }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI", icon: "⚡" },
        { name: "Flask", icon: "🌶️" },
        { name: "Django", icon: "🚀" },
        { name: "REST APIs", icon: "🔗" }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "SQL", icon: "🐘" },
        { name: "AWS", icon: "☁️" },
        { name: "Google Cloud", icon: "🌤️" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "⚙️" },
        { name: "Vercel", icon: "▲" },
        { name: "Postman", icon: "📮" }
      ]
    }
  ];

  const getSkillColor = (index: number) => {
    const colors = [
      'from-purple-600 to-blue-600',
      'from-blue-600 to-cyan-600',
      'from-cyan-600 to-teal-600',
      'from-teal-600 to-green-600',
      'from-green-600 to-yellow-600',
      'from-yellow-600 to-orange-600'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-24 bg-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable, and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/40 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105"
              style={{
                animationDelay: `${categoryIndex * 100}ms`
              }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 text-center group-hover:text-purple-400 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group/skill flex flex-col items-center p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-600/20 hover:border-purple-500/30"
                  >
                    <div className="text-3xl mb-3 group-hover/skill:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 font-medium text-center text-sm group-hover/skill:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Skills Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30 text-center">
            <h3 className="text-3xl font-semibold text-white mb-8">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed text-lg mb-8">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of development. Currently diving 
              deeper into advanced AI/ML concepts, blockchain technologies, Web3 development, 
              and cloud-native architectures.
            </p>
            
            {/* Current Learning */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Blockchain', icon: '⛓️' },
                { name: 'Web3', icon: '🌐' },
                { name: 'Rust', icon: '🦀' },
                { name: 'Go', icon: '🐹' },
                { name: 'Kubernetes', icon: '☸️' },
                { name: 'Microservices', icon: '🔧' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-purple-300 font-medium hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;