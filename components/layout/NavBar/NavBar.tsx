'use client';

import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import bell from '@/public/assets/Notification.svg';
import profile from '@/public/images/profile.png';
import { ChevronDown, LogOut, Settings } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex items-center gap-5 justify-between bg-[#110D15] px-4 md:px-6 py-3 shadow-lg flex-wrap">
      <div className="flex items-center space-x-4 w-full md:w-auto ml-10 md:m-0">
        <Tabs.Root
          defaultValue="user-groups"
          className="flex items-center space-x-2 md:space-x-4 bg-white text-black p-1 rounded-lg w-full md:w-auto overflow-auto"
        >
          <Tabs.List className="flex space-x-1 md:space-x-2">
            <Tabs.Trigger
              value="user-groups"
              className="px-3 md:px-4 py-2 text-md font-medium rounded-lg focus:outline-none transition-colors 
                data-[state=active]:bg-[#F5BE4A] data-[state=active]:text-black"
            >
              User Groups
            </Tabs.Trigger>
            <Tabs.Trigger
              value="org-groups"
              className="px-3 md:px-4 py-2 text-md font-medium rounded-lg focus:outline-none transition-colors 
                data-[state=active]:bg-[#F5BE4A] data-[state=active]:text-black"
            >
              Org Groups
            </Tabs.Trigger>
            <Tabs.Trigger
              value="open-saving-groups"
              className="px-3 md:px-4 py-2 text-md font-medium rounded-lg focus:outline-none transition-colors 
                data-[state=active]:bg-[#F5BE4A] data-[state=active]:text-black"
            >
              Open Saving Groups
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4 md:space-x-6 mt-2 md:mt-0 flex-shrink-0 ml-auto">
        {/* Notification Bell */}
        <div className="relative bg-white w-8 h-8 md:w-10 md:h-10 rounded-full flex justify-center items-center">
          <Image src={bell} alt="bell-icon" />
          <span className="absolute -top-1 -right-1 bg-[#F5BE4A] text-black text-[10px] md:text-xs font-bold rounded-full w-4 md:w-5 h-4 md:h-5 flex items-center justify-center">
            12
          </span>
        </div>

        {/* User Profile with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <div className="relative w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden">
              <Image
                src={profile}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 w-2 md:w-3 h-2 md:h-3 rounded-full border-[1.5px] border-[#110D15]"></span>
            </div>
            <div className="hidden md:block text-white text-md">
              <p className="font-medium">Bryan Adams</p>
              <p className="text-xs text-gray-400">Manager</p>
            </div>
            <ChevronDown className="text-white w-4 h-4" />
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-md z-50">
              <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                <Settings className="w-4 h-4 mr-2" />
                Profile Settings
              </button>
              <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
