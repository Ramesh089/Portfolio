import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Code2, Database, Cpu } from 'lucide-react';
import Hero3DCanvas from '../three/Hero3DCanvas';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>MCA Post Graduate &bull; Available for Opportunities</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-cyan-400 font-mono tracking-wide pt-1">
                {personalInfo.title}
              </p>
            </div>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Ramesh_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white gradient-text-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">{stat.label}</div>
                  <div className="text-[11px] text-slate-400">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Interactive Canvas & Floating Tech Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* 3D Canvas */}
            <div className="w-full relative z-10">
              <Hero3DCanvas />
            </div>

            {/* Floating Tech Badges */}
            <div className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel shadow-lg animate-float-slow">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-medium text-slate-200">Full Stack &bull; React &bull; Node</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel shadow-lg animate-float-slow" style={{ animationDelay: '3s' }}>
              <Cpu className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-mono font-medium text-slate-200">Data Science &bull; Python &bull; ML</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-slate-400 hover:text-cyan-400 transition-colors"
        aria-label="Scroll down to About"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
