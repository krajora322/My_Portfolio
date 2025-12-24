import React from 'react';
import { Download, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center pt-24 pb-16 relative overflow-hidden bg-white"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
          
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200">
            Available for work
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Hi, I'm <br />
            <span className="gradient-text">Khushi Rajora</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-700 font-semibold tracking-tight">
            Software Developer & Full-Stack Developer
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
            Passionate about crafting seamless and intuitive digital experiences.
            Transforming complex ideas into scalable, modern, and user-focused web
            applications using
            <span className="font-semibold text-primary-600"> React</span>,
            <span className="font-semibold text-primary-600"> Node.js</span>, and
            <span className="font-semibold text-primary-600"> MongoDB</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="px-8 py-3 bg-primary-600 text-white rounded-xl font-semibold text-base
                         hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30
                         flex items-center gap-2 group"
            >
              <Send
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
              Contact Me
            </a>

            <a
              href="https://drive.google.com/file/d/19opV1h4pRcwGDgpSmJ_4YEc9OjJb-5_o/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-slate-800 border-2 border-slate-100 rounded-xl
                         font-semibold text-base hover:border-primary-600 hover:text-primary-600
                         transition-all shadow-sm flex items-center gap-2"
            >
              <Download size={20} />
              View Resume
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center md:justify-end animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative w-full max-w-xl">

            {/* Code Window */}
            <div className="bg-[#0b0e14] rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.3)]
                            overflow-hidden border border-slate-800
                            transform hover:rotate-1 transition-transform duration-500">
              
              {/* Header */}
              <div className="flex items-center gap-2 px-6 py-3 bg-[#12161f] border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 text-center text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] font-bold">
                  PORTFOLIO.CONFIG.JS
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
                <pre>
{`const coder = {
  name: 'Khushi Rajora',
  role: 'Full Stack Developer',
  skills: ['React', 'Node', 'Python'],
  hardWorker: true,
  quickLearner: true,
  hireable() {
    return this.hardWorker && this.quickLearner;
  }
};`}
                </pre>
              </div>
            </div>

            {/* Floating Badge (Moved below code window for no overlap) */}
            {/* Floating Badge (Moved further below code window) */}
<div className="absolute -bottom-10 md:-bottom-12 -right-4 z-20 bg-white px-5 py-2.5 rounded-2xl
                shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100
                flex items-center gap-3">
  <div className="relative flex h-3.5 w-3.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500" />
  </div>
  <span className="text-sm font-semibold text-slate-800">
    Open to offers
  </span>
</div>


            {/* Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
