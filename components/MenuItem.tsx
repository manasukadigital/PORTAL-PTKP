import React, { useState } from 'react';
import type { MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
  level: number;
  selectedItem: MenuItemType | null;
  onSelectItem: (item: MenuItemType | null) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, level, selectedItem, onSelectItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  
  const isSelected = selectedItem?.label === item.label && selectedItem?.link === item.link;

  const paddingLeft = level > 0 ? `${level * 1.5}rem` : `0.75rem`;
  const baseClasses = `w-full text-left flex items-start justify-between rounded-lg transition-all duration-200 py-2.5 px-3`;
  const textClasses = level === 0 ? 'font-semibold text-slate-100' : 'font-normal text-slate-200';
  const hoverClasses = 'hover:bg-white/10';
  
  const externalLinkIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 flex-shrink-0 mt-1 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
  );

  // Level 0 Item (Main Menu in Sidebar)
  if (level === 0) {
    if (hasChildren) {
      return (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${baseClasses} ${textClasses} ${hoverClasses}`}
            style={{ paddingLeft: '0.75rem' }}
          >
            <span className="pr-2">{item.label}</span>
            <svg className={`w-5 h-5 transform transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          {isOpen && (
            <div className="space-y-1 my-1">
              {item.children.map((child, index) => (
                <MenuItem key={index} item={child} level={level + 1} selectedItem={selectedItem} onSelectItem={onSelectItem} />
              ))}
            </div>
          )}
        </>
      );
    }
    // Level 0 Item that is a direct link (e.g. HOME, LOGOUT)
    return (
       <a href={item.link} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${textClasses} ${hoverClasses}`} style={{ paddingLeft: '0.75rem' }}>
        <span className="pr-2">{item.label}</span>
        {externalLinkIcon}
       </a>
    );
  }

  // Level 1 Item (Sub Menu in Sidebar)
  if (level === 1) {
    // These items act as triggers to change the main dashboard content
    const activeClasses = isSelected ? 'bg-gradient-to-r from-teal-500 to-sky-500 text-white shadow-lg' : hoverClasses;
    return (
      <button
        onClick={() => onSelectItem(item)}
        className={`${baseClasses} ${textClasses} ${activeClasses}`}
        style={{ paddingLeft }}
      >
        <span className="pr-2">{item.label}</span>
      </button>
    );
  }

  // Render nothing deeper than Level 1 in the sidebar
  return null; 
};

export default MenuItem;