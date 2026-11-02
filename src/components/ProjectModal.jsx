import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Eye } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeImage, setActiveImage] = useState(
    project.gallery && project.gallery.length > 0 ? project.gallery[0] : project.image
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 text-xs font-mono uppercase rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Main Image Showcase */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 aspect-video flex items-center justify-center">
            <img
              src={activeImage}
              alt={project.title}
              className="w-full h-full object-contain object-center"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>

          {/* Screenshot Thumbnails (if multiple exist) */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="flex items-center space-x-3 overflow-x-auto pb-2">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === img
                      ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/30'
                      : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Description & Headline */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-2">{project.headline}</h4>
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="text-xs text-slate-400 uppercase font-mono">{m.label}</div>
                  <div className="text-base font-semibold text-white mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Engineering Highlights */}
          {project.highlights && (
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
                Key System Capabilities & Features
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
              Technologies & Frameworks
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60">
          <div className="text-xs text-slate-400 font-mono">
            Verified Project Repository
          </div>
          <div className="flex items-center space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <Eye className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
