import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block border-b-4 border-primary-600 pb-1.5">
            Skills & Tech
          </h2>
          <p className="text-slate-600">
            The core stack powering my development process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/50 rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-sm font-extrabold text-primary-600 mb-5 text-center uppercase tracking-widest border-b border-slate-200 pb-3">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex flex-col items-center justify-center p-2.5 bg-white rounded-lg shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-primary-300 transition-colors group">
                    <skill.icon size={22} className="text-slate-400 group-hover:text-primary-600 transition-colors mb-2" />
                    <span className="text-[10px] font-bold text-slate-600 uppercase text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;