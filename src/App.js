import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <nav className="p-4 shadow-md bg-white flex justify-between items-center">
          <div className="text-xl font-bold">Your Name</div>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/resume" className="hover:underline">Resume</Link>
            <Link to="/skills" className="hover:underline">Skills</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Hi, I'm Your Name</h1>
      <p className="text-lg">I'm a [your major] student at [your school] with a passion for [tech, data, UX, etc.]. Welcome to my portfolio!</p>
    </section>
  );
}

function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold">Project Title</h3>
          <p>Description of what it does, what tools you used, and what problem it solves.</p>
          <a href="https://github.com/yourusername/project" className="text-blue-600 hover:underline">GitHub Repo</a>
        </li>
      </ul>
    </section>
  );
}

function Resume() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <p>Download my resume <a href="/resume.pdf" className="text-blue-600 hover:underline">here</a>.</p>
    </section>
  );
}

function Skills() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc ml-5">
        <li>JavaScript, Python, SQL</li>
        <li>React, Node.js, Express</li>
        <li>Tailwind CSS, Git/GitHub</li>
        <li>Figma, UX Design Basics</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Feel free to reach out via <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">email</a> or find me on <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-600 hover:underline">LinkedIn</a>.</p>
    </section>
  );
}

export default App;
