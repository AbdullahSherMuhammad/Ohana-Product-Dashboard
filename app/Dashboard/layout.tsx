'use client';

import Navbar from '@/components/layout/NavBar/NavBar';
import Sidebar from '@/components/layout/SideBar/SideBar';
import React, { useState } from 'react';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <div className="transition-all duration-300">
        <Sidebar setSidebarOpen={setIsSidebarOpen} />
      </div>
      <div
        className={`w-full transition-all duration-300 ${
          isSidebarOpen ? 'md:pl-64' : 'md:pl-16'
        }`}
      >
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
