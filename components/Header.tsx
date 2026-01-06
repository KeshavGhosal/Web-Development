
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed top-0 w-full z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text code-font tracking-tighter">&lt;AR /&gt;</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#experience" className="text-sm font-medium hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium hover:text-indigo-600 transition-colors">Projects</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {isDarkMode ? <i className="fa-solid fa-sun text-yellow-400"></i> : <i className="fa-solid fa-moon text-slate-600"></i>}
            </button>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-500/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
