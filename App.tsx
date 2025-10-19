import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import type { MenuItemType } from './types';
import { menuData } from './constants';
import DashboardCard from './components/DashboardCard';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectItem = (item: MenuItemType | null) => {
    setSelectedItem(item);
    // Always close the sidebar on selection, which is mainly for the mobile view
    setIsSidebarOpen(false);
  };

  // Check if there is any content to display in the dashboard
  const hasContentToDisplay = selectedItem && (selectedItem.children || selectedItem.link);

  return (
    <div className="flex h-screen font-sans text-white">
      {/* Backdrop overlay for mobile */}
      {isSidebarOpen && (
        <div 
            className="fixed inset-0 bg-black opacity-60 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <Sidebar 
        selectedItem={selectedItem}
        onSelectItem={handleSelectItem}
        isOpen={isSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 lg:p-8">
          {hasContentToDisplay ? (
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
                {selectedItem.label}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Render a card for each child (Level 2 and deeper) */}
                {selectedItem.children?.map((child, index) => (
                  <DashboardCard key={index} item={child} />
                ))}
              </div>
            </div>
          ) : (
            // Default Welcome View
            <div className="h-full flex items-center justify-center p-4">
              <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden max-w-3xl mx-auto">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-50"></div>
                <div className="relative">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-sky-600 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight gradient-text">
                        Selamat Datang di Portal Mutu PT. Kharisma Printex
                    </h1>
                    <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
                        Portal ini dirancang untuk menjadi pusat informasi terpadu Anda, memastikan akses yang <strong>cepat, mudah, dan terorganisir</strong> ke seluruh dokumen dan rekaman mutu ISO 9001:2015.
                    </p>
                    <p className="mt-4 text-sm sm:text-base text-slate-400">
                        Jelajahi berbagai sumber daya penting mulai dari Manual Mutu, Prosedur Kerja, hingga Rekaman Mutu spesifik untuk setiap departemen.
                    </p>
                    <div className="mt-8 pt-6 border-t border-white/10">
                        <p className="text-md md:text-lg text-slate-300 font-medium">
                            Untuk memulai, silakan gunakan <strong>menu navigasi</strong> di sisi kiri layar Anda.
                        </p>
                    </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;