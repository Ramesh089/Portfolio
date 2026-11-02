import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-900 bg-slate-950/80 pt-16 pb-12 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-flex items-center space-x-2 text-xl font-bold tracking-tight text-white">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono text-slate-950 font-black text-sm">
                R
              </span>
              <span>Ramesh<span className="text-cyan-400 font-mono">.dev</span></span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Full Stack Developer & Data Science Enthusiast. Pursuing MCA at Kristu Jayanti University. Designing high-performance 3D web applications and data solutions.
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-time Roles & Internships</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Project Showcase</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience & Education</a></li>
              <li><a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect & Terminal note */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">Connect</h4>
            <div className="flex items-center space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 flex items-center justify-center transition-all"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-all"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono text-slate-400 space-y-1">
              <div className="flex items-center space-x-1.5 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>stack_meta //</span>
              </div>
              <div>React 18 &bull; Three.js &bull; R3F &bull; Tailwind</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Ramesh Korabar &bull; All Rights Reserved
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
