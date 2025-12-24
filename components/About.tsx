import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 border-l-6 border-primary-600 pl-5">
              About Me
            </h2>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              I'm a{" "}
              <span className="font-semibold text-primary-600">
                2024 Information Technology graduate
              </span>
              , dedicated to building high-performance web applications with clean architecture.
            </p>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              I enjoy solving complex architectural challenges and turning abstract ideas into
              intuitive digital interfaces. My development philosophy centers on performance,
              maintainability, and exceptional user experience.
            </p>
          </div>

          {/* Code Snippet Visual */}
          <div className="md:w-1/2 w-full">
            <div className="bg-[#0d1117] rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
              
              <div className="flex items-center gap-2 px-6 py-3 bg-[#161b22] border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-4 text-[10px] text-slate-500 font-mono uppercase tracking-widest font-bold">
                  DEVELOPER.JS
                </span>
              </div>

              <div className="p-6 font-mono text-sm md:text-base overflow-x-auto text-gray-300">
                <div className="space-y-2">
                  <p>
                    <span className="text-[#ff7b72]">function</span>{" "}
                    <span className="text-[#d2a8ff]">Developer</span>() {'{'}
                  </p>
                  <p className="pl-6">
                    <span className="text-[#ff7b72]">const</span>{" "}
                    <span className="text-[#79c0ff]">mindset</span> ={" "}
                    <span className="text-[#a5d6ff]">"Eager to learn"</span>;
                  </p>
                  <p className="pl-6">
                    <span className="text-[#ff7b72]">return</span>{" "}
                    <span className="text-[#79c0ff]">passion</span> +{" "}
                    <span className="text-[#79c0ff]">growth</span>;
                  </p>
                  <p>{'}'}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
