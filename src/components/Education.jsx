import React from 'react';
import { educationTimeline } from '../data/portfolioData';
import { GraduationCap, Calendar, Building, Sparkles } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-xs font-semibold text-emerald-300">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & <span className="text-gradient-cyan">Credentials</span>
          </h2>
          <p className="text-slate-400 text-base">
            My formal academic qualification and computer applications background.
          </p>
        </div>

        {/* Credentials Card */}
        <div className="max-w-3xl mx-auto">
          {educationTimeline.map((item, index) => (
            <div 
              key={index}
              className="glass-panel p-8 rounded-3xl border border-white/10 glass-panel-hover space-y-4 relative overflow-hidden"
            >
              {/* Background ambient badge */}
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <GraduationCap className="w-32 h-32 text-cyan-400" />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
                  <Calendar className="w-3.5 h-3.5" /> {item.period}
                </span>
                <span className="text-xs font-bold text-violet-400 bg-violet-950/60 px-3.5 py-1.5 rounded-full border border-violet-500/20">
                  {item.university}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.college}</span>
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed pt-2 border-t border-white/10">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
