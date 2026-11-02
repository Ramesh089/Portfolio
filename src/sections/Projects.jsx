import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const categories = ['All', 'Full Stack & AI', 'Full Stack', 'Data Science & AI', 'Frontend', 'Security & Python'];

  const filteredProjects = filter === 'All' 
    ? otherProjects 
    : otherProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Compass className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified production systems, academic capstones, and intelligent full-stack applications.
          </p>
        </div>

        {/* 1. FEATURED PROJECT HERO BANNER: Tourist AI Hub */}
        {featuredProject && (
          <div className="mb-20">
            <div className="relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-2xl shadow-cyan-950/50">
              <div className="rounded-[22px] bg-slate-950/95 p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-mono font-bold tracking-wider uppercase">
                        ★ Flagship Project
                      </span>
                      <span className="text-xs font-mono text-cyan-300/80">
                        {featuredProject.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                        {featuredProject.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-cyan-400 font-mono mt-1">
                        {featuredProject.headline}
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Highlights bullets */}
                    <div className="space-y-2 pt-1">
                      {featuredProject.highlights.slice(0, 3).map((h, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {featuredProject.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-cyan-300 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelectProject(featuredProject)}
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Project Gallery & Details</span>
                      </button>

                      {featuredProject.github && (
                        <a
                          href={featuredProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-800"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub Code</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Preview Gallery */}
                  <div className="lg:col-span-6">
                    <div
                      className="group cursor-pointer relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-900 aspect-video shadow-2xl transition-all duration-300 hover:border-cyan-400"
                      onClick={() => onSelectProject(featuredProject)}
                    >
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 rounded-xl bg-slate-900/90 text-cyan-300 text-xs font-mono font-medium border border-cyan-500/40 shadow-xl flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>Click to Expand Full Showcase</span>
                        </span>
                      </div>
                    </div>

                    {/* Mini thumbnails */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {featuredProject.gallery.slice(1, 4).map((thumb, idx) => (
                        <div
                          key={idx}
                          onClick={() => onSelectProject(featuredProject)}
                          className="cursor-pointer rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 aspect-video bg-slate-900 transition-all duration-200 hover:scale-[1.02]"
                        >
                          <img src={thumb} alt={`Preview ${idx + 2}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. CATEGORY FILTER BUTTONS */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom effect */}
                <div 
                  className="relative aspect-video overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h4 
                    className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer"
                    onClick={() => onSelectProject(project)}
                  >
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
