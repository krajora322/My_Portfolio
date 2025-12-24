import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-slate-50 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100/30 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block border-b-4 border-primary-600 pb-1.5">
            Get in Touch
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            I'm currently looking for new opportunities. Feel free to reach out if you have a project or just want to connect!
          </p>
        </div>

        <div className="max-w-md mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 text-primary-600 rounded-2xl flex items-center justify-center mb-5">
                    <Mail size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2">Hire Me?</h3>
                <p className="text-slate-500 text-sm mb-6">
                    Drop a line if you're interested in collaborating.
                </p>
                
                <a 
                    href="mailto:krajora322@gmail.com"
                    className="w-full group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 active:scale-[0.98]"
                >
                    krajora322@gmail.com
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <p className="mt-6 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                    Response time: ~24 hours
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;