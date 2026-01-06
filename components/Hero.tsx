
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="relative inline-block mb-6">
          <img 
            src="https://picsum.photos/200/200?grayscale" 
            alt={PERSONAL_INFO.name}
            className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-xl object-cover"
          />
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-8 code-font">
          &gt; {PERSONAL_INFO.role}
        </h2>
        
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all shadow-sm hover:shadow-md"
          >
            <i className="fa-brands fa-linkedin text-[#0077b5]"></i>
            <span className="font-medium">LinkedIn</span>
          </a>
          <a 
            href={PERSONAL_INFO.github}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all shadow-sm hover:shadow-md"
          >
            <i className="fa-brands fa-github"></i>
            <span className="font-medium">GitHub</span>
          </a>
          <a 
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30"
          >
            <span className="font-medium">View Projects</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
