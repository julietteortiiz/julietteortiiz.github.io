import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Leaf, Heart, Users } from 'lucide-react';

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
      description: "Analyzed CTR and CPC data across South African businesses to define performance benchmarks, creating actionable insights for digital marketing strategies.",
      tech: ["Python", "Pandas", "Data Analysis", "Statistical Modeling"],
      impact: "Performance insights for emerging markets",
      github: "#",
      live: "#"
    },
    {
      title: "GAM Digital Archive",
      description: "Enhanced website accessibility and user experience for Grupo de Apoyo Mutuo, improving digital documentation and creating better user workflows.",
      tech: ["Django", "Git", "GitHub", "UX Design"],
      impact: "Improved digital accessibility",
      github: "#",
      live: "#"
    }
  ];

  const values = [
    { 
      name: "Learning & Growth", 
      icon: <Leaf className="w-6 h-6" />, 
      description: "Combining CS and Environmental Studies to understand complex challenges"
    },
    { 
      name: "Meaningful Impact", 
      icon: <Heart className="w-6 h-6" />, 
      description: "Drawn to technology that solves real problems and improves lives"
    },
    { 
      name: "Global Perspective", 
      icon: <Users className="w-6 h-6" />, 
      description: "Experience working with diverse communities and organizations internationally"
    }
  ];

  const skills = [
    { category: "Data & Analysis", items: ["Python", "Pandas", "Statistical Modeling", "Data Visualization"] },
    { category: "Development", items: ["Django", "Git/GitHub", "Web Development", "UX Design"] },
    { category: "Research & Analysis", items: ["Environmental Studies", "Statistical Analysis", "Research Methods"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-mint-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-md border-b border-sage-200 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-light text-sage-800 tracking-wide">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-light tracking-wide transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-sage-700 border-b-2 border-sage-400' 
                      : 'text-sage-600 hover:text-sage-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-sage-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-sage-200">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-sage-700 hover:text-sage-800 transition-colors font-light"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-sage-800 mb-6 tracking-tight">
                Hi, I'm Juliette
              </h1>
              
              <p className="text-xl text-sage-600 mb-4 font-light">
                Computer Science & Environmental Studies
              </p>
              <p className="text-lg text-sage-500 mb-6 font-light">
                Haverford College • IES Freiburg
              </p>
              
              <div className="max-w-lg mb-10">
                <p className="text-sage-600 leading-relaxed font-light">
                  Interested in technology that creates meaningful impact. 
                  Seeking opportunities in data science, UX design, and mission-driven tech.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-all duration-300 font-light tracking-wide"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border border-sage-400 text-sage-700 rounded-full hover:bg-sage-50 transition-all duration-300 font-light tracking-wide"
                >
                  Get in Touch
                </button>
              </div>
            </div>
            
            {/* Photo Section */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-sage-100 to-mint-100 border-4 border-white shadow-xl overflow-hidden">
                  {/* Placeholder for your photo */}
                  <div className="w-full h-full bg-gradient-to-br from-sage-200 to-mint-200 flex items-center justify-center">
                    <div className="text-center text-sage-600">
                      <div className="w-24 h-24 bg-white bg-opacity-30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl">📸</span>
                      </div>
                      <p className="text-sm font-light">Your Photo Here</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-sage-300 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-mint-200 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-sage-400 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-sage-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-light text-center text-sage-800 mb-16 tracking-tight">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-sage-600 leading-relaxed font-light">
                I'm a Computer Science major and Environmental Studies minor at Haverford College. 
                Currently studying sustainability and environmental policy at Freiburg University in Germany.
              </p>
              <p className="text-sage-600 leading-relaxed font-light">
                Through internships in South Africa and Guatemala, I've gained experience in 
                data analysis and web development while working with diverse organizations. 
                I'm interested in roles where technology creates tangible value.
              </p>
              <p className="text-sage-600 leading-relaxed font-light">
                Looking for 2026 summer opportunities where I can apply my technical skills 
                to solve interesting problems in data science, UX design, or product development.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light text-sage-800 mb-4">What Drives Me</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={value.name} className="flex items-start gap-4 p-4 rounded-lg bg-sage-50">
                      <div className="text-sage-600 mt-1">{value.icon}</div>
                      <div>
                        <h4 className="font-medium text-sage-800 mb-1">{value.name}</h4>
                        <p className="text-sm text-sage-600 font-light leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-light text-sage-800 mb-8 text-center">Skills & Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={skillGroup.category} className="text-center">
                  <h4 className="font-medium text-sage-800 mb-4">{skillGroup.category}</h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="px-3 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-light">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 bg-sage-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-light text-center text-sage-800 mb-16 tracking-tight">
            Featured Work
          </h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-medium text-sage-800 mb-3">{project.title}</h3>
                    <p className="text-sage-600 mb-4 leading-relaxed font-light">{project.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Leaf className="w-4 h-4 text-sage-500" />
                        <span className="text-sm font-medium text-sage-700">Impact</span>
                      </div>
                      <p className="text-sm text-sage-600 font-light">{project.impact}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-sage-100 text-sage-600 rounded-full text-xs font-light">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a 
                      href={project.github}
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-sage-300 text-sage-700 rounded-lg hover:bg-sage-50 transition-colors text-sm font-light"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors text-sm font-light"
                    >
                      <ExternalLink size={16} />
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
      <section id="contact" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-sage-800 mb-8 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-sage-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Interested in opportunities where technology solves interesting problems and creates value. 
            I'd love to learn more about your work.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:jaortiz@haverford.edu"
              className="bg-sage-50 rounded-xl p-6 border border-sage-100 hover:border-sage-300 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-sage-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-medium text-sage-800 mb-2">Email</h3>
              <p className="text-sage-600 text-sm font-light">jaortiz@haverford.edu</p>
            </a>
            
            <a 
              href="https://github.com/julietteortiiz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sage-50 rounded-xl p-6 border border-sage-100 hover:border-sage-300 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-sage-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-medium text-sage-800 mb-2">GitHub</h3>
              <p className="text-sage-600 text-sm font-light">@julietteortiiz</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/juliette-ortiz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sage-50 rounded-xl p-6 border border-sage-100 hover:border-sage-300 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-sage-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-medium text-sage-800 mb-2">LinkedIn</h3>
              <p className="text-sage-600 text-sm font-light">Juliette Ortiz</p>
            </a>
          </div>
          
          <button className="px-8 py-3 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-all duration-300 font-light tracking-wide">
            Download Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-sage-200 bg-sage-50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sage-500 font-light text-sm">
            © 2025 Juliette Ortiz • Computer Science & Environmental Studies • Haverford College
          </p>
        </div>
      </footer>

      <style jsx>{`
        .from-sage-50 { background: linear-gradient(to bottom right, #f7f9f7, #ffffff, #f0f5f0); }
        .bg-sage-50 { background-color: #f7f9f7; }
        .bg-sage-100 { background-color: #e8f2e8; }
        .bg-sage-200 { background-color: #d1e7d1; }
        .bg-sage-300 { background-color: #b8d4b8; }
        .bg-sage-400 { background-color: #9bc09b; }
        .bg-sage-500 { background-color: #7ea87e; }
        .bg-sage-600 { background-color: #618f61; }
        .bg-sage-700 { background-color: #4a6b4a; }
        .bg-sage-800 { background-color: #365436; }
        
        .text-sage-400 { color: #9bc09b; }
        .text-sage-500 { color: #7ea87e; }
        .text-sage-600 { color: #618f61; }
        .text-sage-700 { color: #4a6b4a; }
        .text-sage-800 { color: #365436; }
        
        .border-sage-100 { border-color: #e8f2e8; }
        .border-sage-200 { border-color: #d1e7d1; }
        .border-sage-300 { border-color: #b8d4b8; }
        .border-sage-400 { border-color: #9bc09b; }
        
        .hover\\:bg-sage-50:hover { background-color: #f7f9f7; }
        .hover\\:bg-sage-700:hover { background-color: #4a6b4a; }
        .hover\\:text-sage-700:hover { color: #4a6b4a; }
        .hover\\:text-sage-800:hover { color: #365436; }
        .hover\\:border-sage-300:hover { border-color: #b8d4b8; }
        
        .from-mint-50 { background: #f0f9f4; }
        .to-mint-50 { background: #f0f9f4; }
        .from-mint-200 { background: #c6e7d0; }
        .to-mint-200 { background: #c6e7d0; }
      `}</style>
    </div>
  );
}