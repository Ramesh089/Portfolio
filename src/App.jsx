import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ProjectModal from './components/ProjectModal';
import CertificateModal from './components/CertificateModal';
import BackgroundParticles from './three/BackgroundParticles';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ExperienceTimeline from './sections/ExperienceTimeline';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D Global Background Particle Constellation */}
      <BackgroundParticles />

      {/* Sleek Custom Pointer */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <ExperienceTimeline />
        <Certifications onSelectCert={(c) => setSelectedCert(c)} />
        <Contact />
      </main>

      {/* Terminal Themed Cyber Footer */}
      <Footer />

      {/* Interactive Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
}
