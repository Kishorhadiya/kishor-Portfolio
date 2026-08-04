import React from 'react';
import { ArrowUp, Code, Github, Linkedin, Mail } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2 text-lg font-bold font-mono text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center shadow-md">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span>
              &lt;<span className="text-cyan-400">Kishor</span>
              <span className="text-violet-400">.dev</span> /&gt;
            </span>
          </div>

          {/* Copyright Text */}
          <p className="text-slate-400 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} {personalDetails.name}. Built with React.js & Tailwind CSS.
          </p>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a href={personalDetails.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalDetails.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalDetails.email}`} className="text-slate-400 hover:text-cyan-400 transition">
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
