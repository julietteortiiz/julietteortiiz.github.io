import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Zap } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Data Engineering for Google Ads Benchmark Report",
      description: "Analyzed CTR and CPC data across South African businesses to define performance benchmarks, categorizing by industry for actionable insights.",
      tech: ["Python", "Pandas", "Data Analysis", "Statistical Modeling"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "GAM Digital Archive",
      description: "Enhanced website design and user experience for Grupo de Apoyo Mutuo, improving accessibility and creating documentation for future initiatives.",
      tech: ["Django", "Git", "GitHub", "Web Development"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
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
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
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
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop" 
            alt="Campus trees" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Hi, I'm{' '}
                <span className="text-blue-400">
                  Juliette Ortiz
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-2">
                Computer Science Student at Haverford College
              </p>
              <p className="text-base text-gray-400 mb-6">
                Seeking internships in data science, marketing tech, UX, and tech for social impact
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View My Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-2 border border-gray-300 text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>
            
            {/* Photo Section */}
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border-4 border-white/10 flex items-center justify-center backdrop-blur-sm">
                {/* Placeholder for photo - replace with actual image */}
                <div className="text-center text-gray-300">
                  <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">📸</span>
                  </div>
                  <p className="text-sm">Your Photo Here</p>
                </div>
                {/* Uncomment and use this when you have a photo:
                <img 
                  src="/path-to-your-photo.jpg" 
                  alt="Juliette Ortiz"
                  className="w-full h-full object-cover rounded-full"
                />
                */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-300 space-y-4">
              <p className="text-base leading-relaxed">
                I'm a Computer Science student at Haverford College, currently in my third year. 
                This fall, I'll be studying abroad at Freiburg University through the IES 
                Environmental & Sustainability Studies program.
              </p>
              <p className="text-base leading-relaxed">
                Through internships in South Africa and Guatemala, I've gained hands-on experience 
                in data analysis, web development, and working with nonprofits and startups. I'm passionate about 
                using technology to create positive social impact.
              </p>
              <p className="text-base leading-relaxed">
                I'm currently seeking internship opportunities in data science, marketing technology, 
                UX design, and tech for social good for summer 2026.
              </p>
            </div>
            
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-blue-400">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
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
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-blue-400/30 transition-all duration-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 text-sm">
                    <a 
                      href={project.github}
                      className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={14} />
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Interested in data science, marketing tech, UX, or tech for good opportunities? Let's connect!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a 
              href="mailto:jaortiz@haverford.edu"
              className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-200 text-center"
            >
              <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="text-base font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-300 text-sm">jaortiz@haverford.edu</p>
            </a>
            
            <a 
              href="https://github.com/julietteortiiz"
              className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-200 text-center"
            >
              <Github className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="text-base font-semibold text-white mb-1">GitHub</h3>
              <p className="text-gray-300 text-sm">@julietteoortiz</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/juliette-ortiz"
              className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-200 text-center"
            >
              <Linkedin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="text-base font-semibold text-white mb-1">LinkedIn</h3>
              <p className="text-gray-300 text-sm">Juliette Ortiz</p>
            </a>
          </div>
          
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Download Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Juliette Ortiz. Computer Science Student at Haverford College.
          </p>
        </div>
      </footer>
    </div>
  );
}
