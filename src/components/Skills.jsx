import React, { useState } from 'react';
import { skillsCategories, skillsData } from '../data/portfolioData';
import { Atom, FileCode, Palette, Layers, Globe, Layout, Cpu, Database } from 'lucide-react';

const iconMap = {
  Atom,
  FileCode,
  Palette,
  Layers,
  Globe,
  Layout,
  Cpu,
  Database
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <Atom className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tech Stack & <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="text-slate-400 text-base">
            MERN stack technologies and core web development skills I utilize to craft full-stack applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-slate-800/80 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Atom;

            return (
              <div
                key={index}
                className="glass-panel p-6 rounded-3xl border border-white/10 glass-panel-hover group relative overflow-hidden"
              >
                {/* Top Skill Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${skill.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">{skill.category}</span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-800 text-cyan-300 border border-cyan-500/20">
                    {skill.level}
                  </span>
                </div>

                {/* Skill Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {skill.desc}
                </p>

                {/* Animated Progress Bar */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-cyan-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.percentage}%` }}
                    />
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
