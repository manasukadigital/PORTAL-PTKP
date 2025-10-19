import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import type { MenuItemType } from './types';
import { menuData } from './constants';
import DashboardCard from './components/DashboardCard';

// Helper to find the first L1 item to be the default selection
const findInitialSelectedItem = (): MenuItemType | null => {
  for (const l0 of menuData) {
    if (l0.children && l0.children.length > 0) {
      // Return the first child of the first parent that has children
      return l0.children[0];
    }
  }
  return null;
};

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(findInitialSelectedItem());
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
              <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-50"></div>
                <div className="relative">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight gradient-text">
                        Selamat Datang di Portal
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-slate-300">
                        Pilih item dari menu di sebelah kiri untuk menampilkan dokumen.
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