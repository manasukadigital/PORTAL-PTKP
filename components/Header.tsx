import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-10 bg-slate-900/60 backdrop-blur-lg border-b border-white/10">
      <div className="flex items-center justify-between md:justify-start p-4">
        {/* Hamburger Menu Button - Mobile Only */}
        <button 
          onClick={onMenuClick}
          className="p-1 text-slate-300 hover:text-white md:hidden"
          aria-label="Open menu"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
        
        <div className="flex items-center">
            <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          <h1 className="text-xl font-semibold text-slate-200 ml-3">PT. Kharisma Printex Portal</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;