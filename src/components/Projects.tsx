import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

const projects = [
  {
    title: "Dravya",
    description: "A Streamlit-based application powered by Ekacare MCP tools for finding medicine information, alternatives, and generic options tailored for the Indian healthcare context.",
    tech: ["Python", "Streamlit", "Ekacare MCP", "LLM", "AI Agents"],
    github: "https://github.com/HardikChhallani/Dravya",
    category: "Healthcare",
    featured: true
  },
  {
    title: "LLMArche: LLM from Scratch for Law Dataset",
    description: "A large language model (LLM) built from scratch, fine-tuned on legal datasets to provide domain-specific NLP capabilities for law-related tasks.",
    tech: ["Python", "NLP", "Transformers", "Law Dataset", "Multi head Attention"],
    github: "https://github.com/HardikChhallani/LLMArche-LLM-from-Scratch",
    category: "AI",
    featured: true
  },
  {
    title: "Neural Network from Scratch (Python)",
    description: "A complete neural network implementation from scratch in Python, demonstrating core deep learning concepts without using high-level libraries.",
    tech: ["Python", "NumPy", "Deep Learning", "Tensorflow"],
    github: "https://github.com/HardikChhallani/Neural-Network-from-scratch-Python",
    category: "AI",
    featured: true
  },
  {
    title: "Doctor FastAPI Endpoint",
    description: "A FastAPI-based backend for searching, evaluating, and booking doctors, featuring RESTful endpoints and robust deployment.",
    tech: ["Python", "FastAPI", "REST API"],
    github: "https://github.com/HardikChhallani/Doctor_fastapi_deploy",
    category: "Healthcare",
    featured: false
  },
  {
    title: "MCP Transport Protocols with Auth",
    description: "Implemented multiple map transport protocols with authentication for secure and efficient data transfer in healthcare applications.",
    tech: ["Python","MCP"],
    github: "https://github.com/HardikChhallani/MCP-Transport-Protocols-with-Auth",
    category: "Healthcare",
    featured: false
  },
  {
    title: "AuraDetect – Real-time Object Detection Hub",
    description: "A real-time object detection platform leveraging deep learning for fast and accurate detection across multiple video streams.",
    tech: ["Python", "Deep Learning", "Object Detection", "Streamlit", "YOLO"],
    github: "https://github.com/HardikChhallani/Aura-Detect",
    category: "AI",
    featured: false
  },
  {
    title: "Price Prediction Pipeline Demo",
    description: "A machine learning pipeline for price prediction, featuring data preprocessing, model training, and evaluation with reproducible results.",
    tech: ["Python", "ML Pipeline", "Regression", "scikit-learn"],
    github: "https://github.com/HardikChhallani/Price_Prediction_Pipeline_Demo",
    category: "ML",
    featured: false
  },
  {
    title: "VIT Library Website Web Scraping",
    description: "A web scraping tool to extract and analyze data from the VIT library website, automating information retrieval for research and reporting.",
    tech: ["Python", "Web Scraping", "BeautifulSoup", "Requests"],
    github: "https://github.com/HardikChhallani/VIT-library-website-web-scrapping",
    category: "Web",
    featured: false
  },
  {
    title: "MailSender Webapp",
    description: "A user-friendly web application for sending bulk emails with attachments, supporting multiple recipients and customizable templates.",
    tech: ["Python", "Flask", "SMTP", "Webapp"],
    github: "https://github.com/HardikChhallani/MailSender-webapp",
    category: "Web",
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
                <div></div>
              )}

              {/* Enhanced Project Content */}
              <div className="p-6 space-y-4 flex flex-col h-full justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 p-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                      title="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
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