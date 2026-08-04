import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Github, Linkedin, Mail, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Hero() {
  const [heroCounter, setHeroCounter] = useState(1);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
      {/* Background Ambient Glow Lights */}
      <div className="bg-glow-cyan top-10 left-1/4 -translate-x-1/2 blur-3xl opacity-60"></div>
      <div className="bg-glow-violet bottom-10 right-10 blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Open to Opportunities Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs sm:text-sm font-medium text-cyan-300 shadow-lg shadow-cyan-500/10 animate-bounce">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{personalDetails.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-gradient-cyan">{personalDetails.name}</span> 👋
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-violet-200 to-cyan-400">
                MERN Stack Developer
              </span>
            </h1>

            {/* MERN Stack Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personalDetails.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-base font-bold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-base font-semibold text-slate-200 glass-panel hover:bg-slate-800/80 border border-white/10 hover:border-violet-500/40 hover:text-white shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5 text-violet-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Social Link Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Connect:</span>
              <a href={personalDetails.socials.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalDetails.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalDetails.email}`} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Live Interactive Code Preview Window */}
          <div className="lg:col-span-5">
            <div className="relative group">
              
              {/* Glowing Background aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-violet-600 opacity-30 group-hover:opacity-60 blur-xl transition duration-500"></div>

              {/* Glass Code Editor Window */}
              <div className="relative glass-panel rounded-3xl p-5 border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                
                {/* Editor Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="text-slate-400 text-xs font-sans ml-2 font-medium">server.js / MERNApp.jsx</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                    <Sparkles className="w-3 h-3" /> Full-Stack MERN
                  </div>
                </div>

                {/* Simulated Code Body */}
                <div className="space-y-1.5 text-slate-300 leading-relaxed font-mono">
                  <p><span className="code-keyword">import</span> express <span className="code-keyword">from</span> <span className="code-string">'express'</span>;</p>
                  <p><span className="code-keyword">import</span> mongoose <span className="code-keyword">from</span> <span className="code-string">'mongoose'</span>;</p>
                  <p className="pt-2"><span className="code-comment">// MERN Full-Stack Controller</span></p>
                  <p><span className="code-keyword">const</span> app = <span className="code-component">express</span>();</p>
                  <p>app.<span className="code-component">get</span>(<span className="code-string">'/api/status'</span>, (req, res) =&gt; &#123;</p>
                  <p className="pl-4">res.<span className="code-component">json</span>(&#123; stack: <span className="code-string">'MERN'</span>, status: <span className="text-emerald-400">'Online'</span>, hits: <span className="text-amber-400">{heroCounter}</span> &#125;);</p>
                  <p>&#125;);</p>
                  <br />
                  <p className="text-cyan-300">&lt;<span className="code-component">ReactMERNApp</span> <span className="code-prop">developer</span>=<span className="code-string">"Kishor Hadiya"</span> /&gt;</p>
                </div>

                {/* Live Output Widget Preview Box */}
                <div className="mt-5 p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30 text-sans space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>MERN Server Output:</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Full-Stack Active
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-md">
                        MERN
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">MongoDB + Express + React + Node</h4>
                        <p className="text-xs text-slate-400">API Requests Handled: <span className="text-cyan-400 font-bold">{heroCounter}</span></p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setHeroCounter(prev => prev + 1)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 text-xs font-semibold active:scale-95 transition"
                    >
                      <RefreshCw className="w-3 h-3 animate-spin-slow" />
                      API Hit
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
