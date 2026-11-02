import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Download, Sparkles } from 'lucide-react';
import { certifications, personalInfo } from '../data/portfolioData';

export default function Certifications({ onSelectCert }) {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Award className="w-3.5 h-3.5" />
            <span>Accreditations & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Verified <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Industry and government-recognized certifications in Cloud Computing, Business Intelligence, and Data Science.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-800 relative flex flex-col justify-between group"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-900 text-cyan-300 border border-slate-800">
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-1 flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Covered Pills */}
                {cert.skillsCovered && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skillsCovered.slice(0, 3).map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{cert.status}</span>
                </span>

                <button
                  onClick={() => onSelectCert(cert)}
                  className="inline-flex items-center space-x-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global NASSCOM / Capgemini Highlight Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Government & Industry Aligned Standards</h4>
              <p className="text-xs text-slate-400">
                Data Science with Python Assessment cleared under IT-ITeS Sector Skills Council NASSCOM & Capgemini (Cert ID: FSP/2026/9/10378473).
              </p>
            </div>
          </div>
          <a
            href={personalInfo.certPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono hover:bg-cyan-500/20 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Certificate PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
