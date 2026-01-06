
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-100 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Selected Projects</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="p-6 pt-0 mt-auto flex justify-between items-center">
                <a 
                  href={project.github} 
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-semibold hover:text-indigo-600 transition-colors"
                >
                  <i className="fa-brands fa-github text-lg"></i>
                  Code
                </a>
                <a 
                  href="#"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
