import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        <div className="flex gap-6 mb-5">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.platform} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-600 transition-colors
                         motion-safe:hover:-translate-y-1 transform duration-300"
              aria-label={link.platform}
            >
              <link.icon size={22} aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="text-slate-500 text-sm text-center">
          © {currentYear} Khushi Rajora. Made with{" "}
          <span className="text-red-500 animate-pulse">❤</span> by Khushi.
        </p>

        <address className="not-italic mt-2">
          <a 
            href="mailto:krajora322@gmail.com" 
            className="text-slate-400 text-xs hover:text-primary-600 transition-colors"
          >
            krajora322@gmail.com
          </a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
