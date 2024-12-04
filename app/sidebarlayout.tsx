'use client';

import { useState, useEffect, ReactNode } from 'react';

interface SidebarLayoutProps {
  children: ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const sections = ['about', 'experience', 'skills', 'projects'];
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-lg font-bold">PRABHAT PORTFOLIO</h1>
          <ul className="flex space-x-4">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeSection === section
                      ? 'bg-gray-200 text-black border-b-2 border-blue-500'
                      : 'hover:bg-gray-200 hover:text-black hover:border-b-2 hover:border-blue-500'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto flex flex-col items-center space-y-2">
          <p>© 2024 Prabhat </p>
        </div>
      </footer>
    </div>
  );
}
