import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 inline-block border-b-6 border-primary-600 pb-2">
            Projects
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Recent engineering works showcasing real-world problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-500
                         flex flex-col h-full group"
            >
              <div className="p-8 pb-0 flex justify-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center
                                text-primary-600 group-hover:bg-primary-600 group-hover:text-white
                                transition-all duration-300 transform group-hover:rotate-6">
                  <project.icon size={32} />
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-base mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-[11px]
                                 font-bold uppercase rounded-full border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 bg-primary-600 text-white font-bold rounded-xl
                               hover:bg-primary-700 transition-all
                               flex items-center justify-center gap-2 shadow-md"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>

                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 bg-slate-900 text-white font-bold rounded-xl
                               hover:bg-black transition-all
                               flex items-center justify-center gap-2"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
