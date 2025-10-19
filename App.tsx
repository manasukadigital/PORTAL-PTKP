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
              <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden max-w-3xl">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-50"></div>
                <div className="relative">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight gradient-text">
                        Selamat Datang di Portal Mutu PT. Kharisma Printex
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-slate-300">
                        Portal ini adalah pusat informasi terpusat untuk Sistem Manajemen Mutu ISO 9001:2015 kami.
                    </p>
                    <p className="mt-4 text-md md:text-lg text-slate-400">
                        Di sini Anda dapat dengan mudah mengakses profil perusahaan, prosedur kerja, rekaman mutu, dan dokumen penting lainnya untuk setiap departemen. Silakan gunakan menu di sebelah kiri untuk memulai navigasi.
                    </p>
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