
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceCard: React.FC<{ exp: typeof EXPERIENCES[0], index: number }> = ({ exp, index }) => {
  return (
    <div className="relative pl-12 pb-12 border-l-2 border-slate-200 dark:border-slate-800 last:border-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-50 dark:border-slate-950"></div>
      
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</p>
          </div>
          <span className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
            {exp.period}
          </span>
        </div>
        
        <ul className="space-y-2 mb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {exp.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span key={tech} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Professional Journey</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
