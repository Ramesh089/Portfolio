import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  BarChart3, 
  Wrench, 
  CheckCircle, 
  Sparkles,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  programming: Code2,
  frontend: Layers,
  backend: Server,
  database: Database,
  datascience: BarChart3,
  tools: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const displayedCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified technologies, frameworks, and analytics pipelines applied in production and academic engineering.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-semibold'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-semibold'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const IconComponent = categoryIcons[category.id] || Code2;
            return (
              <div
                key={category.id}
                className="glass-panel-hover rounded-2xl p-6 border border-slate-800/80 relative flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                      <p className="text-xs text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-cyan-500/30 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-white text-sm tracking-wide">{skill.name}</span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                            {skill.level}
                          </span>
                        </div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{category.skills.length} verified technologies</span>
                  <span className="text-cyan-400 font-semibold">Active &bull; Practical</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
