import React from 'react';
import { Code, Server, Database, Layout, CheckCircle, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      desc: "Building responsive, modern user interfaces with HTML, CSS, JavaScript, Tailwind CSS, and React.js.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Server,
      title: "Backend Engineering",
      desc: "Creating robust RESTful APIs and server-side logic using Node.js and Express.js middleware.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Database Management",
      desc: "Designing and managing NoSQL document databases with MongoDB and Mongoose schema modeling.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Layout,
      title: "Responsive & Scalable UI",
      desc: "Developing web applications tailored for seamless performance across desktop, tablet, and mobile devices.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-violet-500/30 text-xs font-semibold text-violet-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-slate-400 text-base">
            Professional overview of my journey as a MERN Stack Developer.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Card */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              Hello, I am Kishor Hadiya 🚀
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a fresher <strong className="text-cyan-400">MERN Stack Developer</strong> with strong knowledge of both frontend and backend development using modern MERN technologies (<strong className="text-violet-400">MongoDB, Express.js, React.js, and Node.js</strong>).
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              My core passion lies in building scalable, highly responsive, and user-friendly web applications. As a motivated fresher developer, I am eager to apply my technical skillset, write clean maintainable code, and contribute to innovative real-world software projects.
            </p>

            <div className="pt-2 space-y-2.5">
              {[
                "Full-Stack Development using MERN Architecture",
                "Frontend Mastery in React.js, JavaScript (ES6+), and Tailwind CSS",
                "Backend API Development with Node.js & Express.js",
                "Database Operations with MongoDB & RESTful Integration"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div 
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
