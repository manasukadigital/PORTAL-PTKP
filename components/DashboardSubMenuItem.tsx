import React, { useState } from 'react';
import type { MenuItemType } from '../types';

const ExternalLinkIcon: React.FC<{className?: string}> = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const ChevronIcon: React.FC<{isOpen: boolean}> = ({ isOpen }) => (
     <svg className={`w-5 h-5 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
);


interface DashboardSubMenuItemProps {
  item: MenuItemType;
  level: number;
}

const DashboardSubMenuItem: React.FC<DashboardSubMenuItemProps> = ({ item, level }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const baseClasses = "w-full text-left flex items-center justify-between p-3 rounded-lg transition-all duration-200 glass-card border-none bg-white/5 hover:bg-white/10";
  const textClasses = "text-slate-200 text-lg flex-grow pr-2";
  
  let mainElement;

  if (hasChildren) {
    // If it has children, it's always a button that toggles state
    mainElement = (
      <button onClick={() => setIsOpen(!isOpen)} className={baseClasses}>
        <span className={textClasses}>{item.label}</span>
        <div className="flex items-center flex-shrink-0 space-x-3">
          {/* If it's also a link, show a separate link icon that is clickable */}
          {item.link && (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()} 
              className="p-1 text-slate-400 hover:text-teal-300" 
              aria-label={`Open link for ${item.label}`}
            >
              <ExternalLinkIcon />
            </a>
          )}
          {/* Chevron for expanding */}
          <ChevronIcon isOpen={isOpen} />
        </div>
      </button>
    );
  } else if (item.link) {
    // If it's just a link (no children), it's a full anchor tag button
    mainElement = (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        <span className={textClasses}>{item.label}</span>
        <ExternalLinkIcon className="text-slate-400 flex-shrink-0" />
      </a>
    );
  } else {
    // If it's just a label (e.g., "Analisa SWOT" without a link)
    mainElement = (
      <div className={`${baseClasses} hover:bg-transparent cursor-default`}>
        <span className="text-slate-300 opacity-80 text-lg">{item.label}</span>
      </div>
    );
  }

  return (
    <li>
      {mainElement}
      {hasChildren && isOpen && (
        <div className="pt-2 pl-4 md:pl-6"> {/* Indentation for children */}
          <ul className="space-y-2">
            {item.children.map((child, index) => (
              <DashboardSubMenuItem key={index} item={child} level={level + 1} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default DashboardSubMenuItem;