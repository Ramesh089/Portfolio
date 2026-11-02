import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, Sparkles, Milestone } from 'lucide-react';
import { educationAndExperience } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Milestone className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified academic foundations, software engineering internships, and professional accreditations.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {educationAndExperience.map((item, idx) => {
            const isEdu = item.type === 'education';
            const Icon = isEdu ? GraduationCap : Briefcase;
            const badgeBg = isEdu ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'bg-violet-500/10 text-violet-400 border-violet-500/30';

            return (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                {/* Node on Line */}
                <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 ${isEdu ? 'border-cyan-400' : 'border-violet-400'} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-125 shadow-lg shadow-cyan-950/50`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Period Badge on the left (on desktop) */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                  <span className="text-xs font-mono text-cyan-300 font-semibold block">
                    {item.period}
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase font-mono block">
                    {item.type}
                  </span>
                </div>

                {/* Content Box */}
                <div className="glass-panel-hover rounded-2xl p-6 border border-slate-800 space-y-3">
                  {/* Mobile Date indicator */}
                  <div className="md:hidden flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                    <span>&bull;</span>
                    <span className="uppercase">{item.type}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className={`self-start sm:self-auto px-2.5 py-0.5 rounded text-[11px] font-mono border ${badgeBg}`}>
                      {item.institution}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>

                  {/* Skill/Domain Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
