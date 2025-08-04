import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Zap } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Data Engineering for Google Ads Benchmark Report",
      description: "Analyzed CTR and CPC data across South African businesses to define performance benchmarks, categorizing by industry for actionable insights.",
      tech: ["Python", "Pandas", "Data Analysis", "Statistical Modeling"],
      github: "#",
      live: "#"
    },
    {
      title: "GAM Digital Archive",
      description: "Enhanced website design and user experience for Grupo de Apoyo Mutuo, improving accessibility and creating documentation for future initiatives.",
      tech: ["Django", "Git", "GitHub", "Web Development"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "Programming", icon: <Code className="w-8 h-8" />, items: ["Python", "Java", "C", "SQL"] },
    { name: "Data Science", icon: <Zap className="w-8 h-8" />, items: ["Pandas", "NumPy", "Matplotlib", "scikit-learn"] },
    { name: "Tools & Frameworks", icon: <Palette className="w-8 h-8" />, items: ["Django", "Git/GitHub", "Jupyter", "Statistical Modeling"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-20 backdrop-blur-lg border-b border-white border-opacity-10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-400">
              Juliette Ortiz
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-white hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-20"></div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hi, I'm{' '}
                <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Juliette Ortiz
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-4">
                Computer Science Student at Haverford College
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-md">
                Seeking internships in data science, marketing tech, UX, and tech for social impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View My Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>
            </div>
            
            {/* Photo Section */}
            <div className="flex justify-center md:justify-end">
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-500 to-purple-600 bg-opacity-20 rounded-full border-4 border-white border-opacity-20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <div className="text-center text-gray-300">
                  <div className="w-32 h-32 bg-white bg-opacity-10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👩‍💻</span>
                  </div>
                  <p className="text-sm font-medium">Computer Science Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-gray-300 space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a Computer Science student at Haverford College, currently in my third year. 
                This fall, I'll be studying abroad at Freiburg University through the IES 
                Environmental & Sustainability Studies program.
              </p>
              <p className="text-lg leading-relaxed">
                Through internships in South Africa and Guatemala, I've gained hands-on experience 
                in data analysis, web development, and working with nonprofits and startups. I'm passionate about 
                using technology to create positive social impact.
              </p>
              <p className="text-lg leading-relaxed">
                I'm currently seeking internship opportunities in data science, marketing technology, 
                UX design, and tech for social good for summer 2026.
              </p>
            </div>
            
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 hover:border-blue-400 hover:border-opacity-50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-blue-400">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-2 bg-blue-500 bg-opacity-20 text-blue-300 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-white bg-opacity-5 rounded-xl overflow-hidden border border-white border-opacity-10 hover:border-blue-400 hover:border-opacity-30 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-600 to-purple-600">
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Code className="w-16 h-16 mx-auto mb-2 opacity-80" />
                      <p className="text-sm font-medium">Project Image</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      <ExternalLink size={18} />
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in data science, marketing tech, UX, or tech for good opportunities? Let's connect!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <a 
              href="mailto:jaortiz@haverford.edu"
              className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 hover:border-blue-400 hover:border-opacity-30 transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">jaortiz@haverford.edu</p>
            </a>
            
            <a 
              href="https://github.com/julietteortiiz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 hover:border-blue-400 hover:border-opacity-30 transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-300">@julietteortiiz</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/juliette-ortiz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 hover:border-blue-400 hover:border-opacity-30 transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-300">Juliette Ortiz</p>
            </a>
          </div>
          
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
            Download Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Juliette Ortiz. Computer Science Student at Haverford College.
          </p>
        </div>
      </footer>
    </div>
  );
}
