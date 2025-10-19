import React from 'react';
import { menuData } from '../constants';
import MenuItem from './MenuItem';
import type { MenuItemType } from '../types';

interface SidebarProps {
  selectedItem: MenuItemType | null;
  onSelectItem: (item: MenuItemType | null) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedItem, onSelectItem, isOpen }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-30 w-80 bg-black/30 backdrop-blur-xl border-r border-white/10 flex flex-col flex-shrink-0 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-5 border-b border-white/10 flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-br from-teal-500 to-sky-600 rounded-lg shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        </div>
        <div>
            <h2 className="text-xl font-bold text-white">Portal Mutu</h2>
            <p className="text-xs text-slate-400">ISO 9001:2015</p>
        </div>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {menuData.map((item, index) => (
          <MenuItem 
            key={index} 
            item={item}
            level={0}
            selectedItem={selectedItem}
            onSelectItem={onSelectItem}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;