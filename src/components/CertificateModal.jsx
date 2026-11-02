import React from 'react';
import { X, Award, ExternalLink, CheckCircle, Download, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">Verified Credential Details</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono uppercase bg-cyan-950 text-cyan-300 border border-cyan-500/20">
                {cert.year} &bull; {cert.issuer}
              </span>
              <h4 className="text-xl font-bold text-white mt-1.5">{cert.title}</h4>
              <p className="text-sm font-mono text-cyan-400/90 mt-0.5">Credential ID: {cert.code}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
            <h5 className="text-xs font-mono uppercase text-slate-400 mb-2">Credential Summary</h5>
            <p className="text-sm text-slate-300 leading-relaxed">{cert.description}</p>
          </div>

          {cert.skillsCovered && (
            <div>
              <h5 className="text-xs font-mono uppercase text-slate-400 mb-3">Verified Competency Areas</h5>
              <div className="flex flex-wrap gap-2">
                {cert.skillsCovered.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 text-xs rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{s}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            {cert.id === 'nasscom-python-ds' && (
              <a
                href={personalInfo.certPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <Download className="w-4 h-4" />
                <span>View Full Certificate PDF</span>
              </a>
            )}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium text-sm hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Verify on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
