import React from 'react';
import { GraduationCap, Briefcase, Target, Award, Code, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging full-stack software engineering with modern data science and algorithmic intelligence.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Holographic Framed Profile Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Glowing Background Backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              
              {/* Inner 3D Glass Frame */}
              <div className="relative rounded-2xl overflow-hidden glass-panel p-2.5 border border-cyan-500/30">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-900">
                  <picture>
                    <source srcSet={personalInfo.profileImage} type="image/webp" />
                    <img
                      src={personalInfo.profileImagePng}
                      alt={personalInfo.fullName}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = personalInfo.profileImagePng;
                      }}
                    />
                  </picture>
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  
                  {/* Photo Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/30">
                    <div className="text-white font-bold text-base flex items-center justify-between">
                      <span>{personalInfo.fullName}</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-xs text-cyan-300 font-mono mt-0.5">MCA Student &bull; Bengaluru</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Professional Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl glass-panel-hover border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Education</h4>
                <p className="text-xs text-slate-400 mt-1">MCA (In Progress) &bull; BCA Completed (8.78 CGPA)</p>
              </div>

              <div className="p-4 rounded-xl glass-panel-hover border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Internship</h4>
                <p className="text-xs text-slate-400 mt-1">LYD Technologies &bull; Algorithmic Trading & Full Stack</p>
              </div>

              <div className="p-4 rounded-xl glass-panel-hover border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Career Goal</h4>
                <p className="text-xs text-slate-400 mt-1">Building intelligent, robust, cloud-scale web architectures</p>
              </div>
            </div>

            {/* Quick Contact Chips */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
