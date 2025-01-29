'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import girtAlt from '@/public/assets/grid.png';
import people from '@/public/assets/people.svg';
import wallet from '@/public/assets/wallet-3.svg';
import clipboard from '@/public/assets/clipboard-text.svg';
import trend from '@/public/assets/trend-down.svg';
import money from '@/public/assets/money-change.svg';
import group from '@/public/assets/group.svg';
import emptyWallet from '@/public/assets/empty-wallet-change.svg';
import rocket from '@/public/assets/rocket.svg';
import notificationStatus from '@/public/assets/notification-status.svg';
import user from '@/public/assets/user-octagon.svg';
import arrow from '@/public/assets/arrow.svg';

const Sidebar: React.FC<{ setSidebarOpen: (isOpen: boolean) => void }> = ({ setSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(true); 
  const pathname = usePathname();


  const links = [
    { name: 'Dashboard', icon: girtAlt, href: '/Dashboard' },
    { name: 'Groups', icon: people, href: '/Dashboard/groups' },
    {
      name: 'Loans',
      icon: wallet,
      children: [
        { name: 'Requests', href: '/Dashboard/loans/requests', icon: clipboard },
        { name: 'Distressed', href: '/Dashboard/loans/distressed', icon: trend },
        { name: 'Reimbursement', href: '/Dashboard/loans/reimbursement', icon: money },
      ],
    },
    { name: 'Reimbursement', icon: group, href: '#' },
    { name: 'Transactions', icon: emptyWallet, href: '#' },
    { name: 'TrustScore', icon: rocket, href: '/Dashboard/trustScore' },
    { name: 'Notifications', icon: notificationStatus, href: '/Dashboard/notifications' },
    { name: 'Supervisors', icon: user, href: '/Dashboard/supervisors' },
  ];

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    setSidebarOpen(newState);
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
        setSidebarOpen(false);
      } else {
        setIsOpen(true);
        setSidebarOpen(true);
      }
    };
  
    handleResize();
  
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
      setSidebarOpen(false);
    }
  };
  

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#F5BE4A] border-2 border-black text-white p-2 rounded-full shadow-lg"
        aria-label="Toggle Sidebar"
      >
        <Image src={arrow} alt="toggle button" className={`${isOpen ? '' : 'rotate-180'}`} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-screen bg-[#F5BE4A] z-[999] m:z-0 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:flex flex-col ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className={`text-[#110D15] font-semibold text-xl ${!isOpen && 'hidden'}`}>
            Ohana
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-[#110D15] focus:outline-none ml-2"
            aria-label="Close Sidebar"
          >
            <Image src={arrow} alt="arrow icon" className={`${isOpen ? '' : 'rotate-180'}`} />
          </button>
        </div>

        <nav className={`flex-grow mt-8 ${isOpen ? 'px-3' : ''}`}>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                {link.children ? (
                  <>
                    <Link
                      onClick={() => handleLinkClick()}
                      href="/Dashboard/loans"
                      className={`group flex items-center w-full px-4 py-3 hover:bg-[#110D15] hover:text-white ${
                        isOpen ? 'rounded-lg' : ''
                      } ${
                        pathname === '/Dashboard/loans'
                          ? 'bg-[#110D15] text-white'
                          : 'text-[#110D15]'
                      } transition-all duration-200 ${
                        isOpen ? 'justify-start space-x-4' : 'justify-center'
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={link.name}
                        width={24}
                        height={24}
                        className={`transition-all duration-200 group-hover:filter group-hover:invert ${
                          pathname === '/Dashboard/loans' ? 'filter invert' : ''
                        }`}
                      />
                      {isOpen && <span>{link.name}</span>}
                    </Link>
                    {(
                      <ul className={`space-y-2 mt-2 ${isOpen ? 'block' : 'hidden'}`}>
                        {link.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              onClick={() => handleLinkClick()}
                              href={child.href}
                              className={`pl-12 group flex items-center space-x-4 px-4 py-2 hover:bg-[#110D15] hover:text-white ${
                                isOpen ? 'rounded-lg' : ''
                              } ${
                                pathname === child.href
                                  ? 'bg-[#110D15] text-white'
                                  : 'text-[#110D15]'
                              } transition-all duration-200`}
                            >
                              <Image
                                src={child.icon}
                                alt={child.name}
                                width={20}
                                height={20}
                                className={`transition-all duration-200 group-hover:filter group-hover:invert ${
                                  pathname === child.href ? 'filter invert' : ''
                                }`}
                              />
                              <span>{child.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => handleLinkClick()}
                    className={`group flex items-center px-4 py-3 hover:bg-[#110D15] hover:text-white ${
                      isOpen ? 'rounded-lg' : ''
                    } ${
                      pathname === link.href
                        ? 'bg-[#110D15] text-white'
                        : 'text-[#110D15]'
                    } transition-all duration-200 ${
                      isOpen ? 'justify-start space-x-4' : 'justify-center'
                    }`}
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={24}
                      height={24}
                      className={`transition-all duration-200 group-hover:filter group-hover:invert ${
                        pathname === link.href ? 'filter invert' : ''
                      }`}
                    />
                    {isOpen && <span>{link.name}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
