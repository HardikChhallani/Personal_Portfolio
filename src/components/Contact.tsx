import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Added missing subject field
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - ADD YOUR CREDENTIALS HERE
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        name: formData.name,  
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'hardikchhallani04@gmail.com'
      };

      // Uncomment the line below when you have your EmailJS credentials
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Remove this simulation when using real EmailJS
      // await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "hardikchhallani04@gmail.com",
      href: "mailto:hardikchhallani04@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/HardikChhallani",
      href: "https://github.com/HardikChhallani",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/hardik-chhallani",
      href: "https://www.linkedin.com/in/hardik-chhallani/",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      value: "x.com/HardikJain8071",
      href: "https://x.com/HardikJain8071",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/40">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:scale-100 disabled:shadow-none flex items-center justify-center gap-3 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={22} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Enhanced Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-6 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-4 animate-fade-in">
                <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-green-400 font-semibold mb-1">Message sent successfully!</h4>
                  <p className="text-green-300 text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-6 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-4 animate-fade-in">
                <AlertCircle className="text-red-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-red-400 font-semibold mb-1">Failed to send message</h4>
                  <p className="text-red-300 text-sm">Please try again or contact me directly via email.</p>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">
                Let's Connect
              </h3>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{info.label}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h4 className="text-white font-semibold text-xl mb-4">Quick Response</h4>
              <p className="text-gray-300 leading-relaxed">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to reach out via LinkedIn or Twitter for faster communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;