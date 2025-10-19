import React from 'react';
import type { MenuItemType } from '../types';
import DashboardSubMenuItem from './DashboardSubMenuItem';

const ExternalLinkIcon: React.FC<{className?: string}> = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ml-2 text-slate-400 group-hover:text-teal-300 transition-colors flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

interface DashboardCardProps {
  item: MenuItemType;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ item }) => {
    const hasChildren = item.children && item.children.length > 0;

  const titleContent = item.link ? (
    <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-start justify-between group gap-2 w-full"
    >
        <span className="flex-grow font-bold text-xl text-slate-100 group-hover:gradient-text transition-colors">{item.label}</span>
        <ExternalLinkIcon className="mt-1" />
    </a>
  ) : (
    <h3 className="font-bold text-xl text-slate-100">{item.label}</h3>
  );

  return (
    <div className="glass-card rounded-2xl flex flex-col transition-all duration-300 min-h-[120px] hover:border-white/30">
        <div className="p-5 border-b border-white/10">
           {titleContent}
        </div>
        {hasChildren && (
            <div className="p-5 flex-grow">
                <ul className="space-y-2">
                    {item.children.map((child, index) => (
                        <DashboardSubMenuItem key={index} item={child} level={0} />
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
};

export default DashboardCard;