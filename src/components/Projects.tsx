import React, { useState } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: "AI-Powered Code Review Assistant",
      description: "Intelligent code analysis tool that provides automated code reviews, suggests improvements, and identifies potential security vulnerabilities using advanced AI algorithms.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "OpenAI API", "FastAPI", "Docker", "PostgreSQL"],
      github: "https://github.com/HardikChhallani",
      demo: "#",
      category: "AI",
      stars: 45,
      forks: 12,
      featured: true
    },
    {
      title: "Flutter E-Commerce Platform",
      description: "Complete mobile e-commerce solution with real-time inventory management, secure payment processing, user analytics, and admin dashboard.",
      image: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Flutter", "Firebase", "Stripe API", "Dart", "Cloud Functions"],
      github: "https://github.com/HardikChhallani",
      demo: "#",
      category: "Mobile",
      stars: 78,
      forks: 23,
      featured: true
    },
    {
      title: "Smart Automation Dashboard",
      description: "Comprehensive IoT dashboard for monitoring and controlling smart home devices with real-time analytics, scheduling, and voice control integration.",
      image: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "MQTT"],
      github: "https://github.com/HardikChhallani",
      demo: "#",
      category: "Web",
      stars: 34,
      forks: 8,
      featured: false
    },
    {
      title: "Machine Learning Model Deployment Platform",
      description: "Cloud-native platform for deploying, monitoring, and scaling machine learning models with automated CI/CD pipelines and performance tracking.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Docker", "Kubernetes", "MLflow", "AWS"],
      github: "https://github.com/HardikChhallani",
      demo: "#",
      category: "AI",
      stars: 67,
      forks: 19,
      featured: true
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Modern team collaboration platform with real-time document editing, video conferencing, task management, and integrated development tools.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "WebRTC", "Socket.io", "Redis", "PostgreSQL"],
      github: "https://github.com/HardikChhallani",
      demo: "#",
      category: "Web",
      stars: 89,
      forks: 31,
      featured: false
    },
    {
      title: "Blockchain-based Supply Chain Tracker",
      description: "Decentralized application for tracking products through supply chain using blockchain technology, ensuring transparency and authenticity.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
      github: "https://github.com/HardikChhallani",
      demo: "#",
      category: "Blockchain",
      stars: 56,
      forks: 15,
      featured: false
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions built with cutting-edge technologies
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`group relative px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedFilter === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-purple-500/50'
              }`}
            >
              <span className="relative z-10">{category}</span>
              {selectedFilter !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-blue-600/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                project.featured 
                  ? 'border-purple-500/50 shadow-purple-500/20 shadow-lg' 
                  : 'border-gray-700/40 hover:border-purple-500/50'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}

              {/* Enhanced Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 text-xs rounded-full border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/HardikChhallani"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;