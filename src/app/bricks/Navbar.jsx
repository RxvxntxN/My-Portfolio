'use client';
import React, { useState } from 'react';
import { NavMenu } from '@/app/data/NavMenu';
import Link from 'next/link';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const NavbarMenuComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Separate primary (name) and other navigation items
  const primaryItem = NavMenu.filter(
    (item) => item.name === 'Muhammad Musabbir'
  );
  const otherItems = NavMenu.filter(
    (item) => item.name !== 'Muhammad Musabbir'
  );

  // Render navigation item with scroll for "About Me"
  const renderNavItem = (item, isMobile = false) => {
    const baseClasses = `hover:text-teal-500 font-bold cursor-pointer ${
      isMobile ? 'block py-3 text-center' : ''
    }`;

    // Special handling for Muhammad Musabbir item
    if (item.name === 'Muhammad Musabbir') {
      return (
        <div className={`flex ${isMobile ? 'justify-center' : ''}`}>
          <Link
            href={item.link || '/'}
            className={`text-lg font-bold font-alegreya ${
              isMobile ? 'inline-block' : ''
            }`}
          >
            <span className="text-white">Muhammad</span>
            <span className="text-stone-400 ml-1">Musabbir</span>
          </Link>
        </div>
      );
    }

    if (item.name === 'About Me' || item.name === 'Contact') {
      return (
        <ScrollLink
          to={item.link.toLowerCase()}
          smooth={true}
          duration={500}
          offset={-70}
          className={baseClasses}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.name}
        </ScrollLink>
      );
    }

    return (
      <Link
        href={item.link || '/'}
        className={baseClasses}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <div className="top-0 sticky z-50">
      <Navbar className="bg-stone-800 text-white p-4" maxWidth="full">
        <NavbarContent className="flex justify-between items-center w-full">
          {/* Left Section */}
          {primaryItem.map((item, index) => (
            <NavbarItem key={index}>{renderNavItem(item)}</NavbarItem>
          ))}

          {/* Right Section */}
          <NavbarContent className="flex justify-end space-x-8">
            <div className="sm:hidden">
              <button
                className="p-2 text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="hidden sm:flex gap-12">
              {otherItems.map((item, index) => (
                <NavbarItem key={index}>{renderNavItem(item)}</NavbarItem>
              ))}
            </div>
          </NavbarContent>
        </NavbarContent>
      </Navbar>

      {/* Mobile Navbar Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-3/4 h-full bg-stone-800 shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-stone-800 flex justify-between items-center">
              {/* Muhammad Musabbir in Mobile Menu */}
              {primaryItem.map((item, index) => (
                <div key={index} className="w-full text-center">
                  {renderNavItem(item, true)}
                </div>
              ))}
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            {otherItems.map((item, index) => (
              <div key={index} className="px-4 py-3 text-white text-center">
                {renderNavItem(item, true)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMenuComponent;
