import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: number;
}

const sections = ['Hero', 'About', 'Journey', 'Works', 'Credentials', 'Skills', 'Contact'];

const Navigation = ({ activeSection }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (index: number) => {
    const sectionElements = document.querySelectorAll('section[data-section]');
    sectionElements[index]?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className="group relative flex items-center"
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-[#8B7355] scale-150 shadow-lg shadow-[#8B7355]/50'
                    : 'bg-[#F5F3EF]/30 hover:bg-[#F5F3EF]/50'
                }`}
              />
              <span
                className={`absolute right-full mr-4 px-3 py-1 bg-[#1A1A1A] border border-[#8B7355]/30 rounded text-sm font-mono whitespace-nowrap transition-all duration-300 ${
                  activeSection === index
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {section}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="flex gap-3 px-4 py-3 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#F5F3EF]/10 rounded-full">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className="group relative"
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-[#8B7355] scale-150 shadow-lg shadow-[#8B7355]/50'
                    : 'bg-[#F5F3EF]/30'
                }`}
              />
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop Hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-3 px-4 py-2 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#F5F3EF]/10 rounded-full">
          <span className="text-xs font-mono text-[#F5F3EF]/50">Press</span>
          <kbd className="px-2 py-1 bg-[#0D0D0D] border border-[#F5F3EF]/10 rounded text-xs font-mono text-[#8B7355]">
            ↓
          </kbd>
          <span className="text-xs font-mono text-[#F5F3EF]/50">to explore</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#1A1A1A] z-50">
        <div
          className="h-full bg-gradient-to-r from-[#8B7355] to-[#2D9596] transition-all duration-300"
          style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
        />
      </div>
    </>
  );
};

export default Navigation;