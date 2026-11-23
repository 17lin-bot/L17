import React, { useState } from 'react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { path: PageType; labelEn: string; labelZh: string }[] = [
    { path: 'work', labelEn: 'Work', labelZh: '精選作品' },
    { path: 'case-studies', labelEn: 'Case Studies', labelZh: '案例' },
    { path: 'about', labelEn: 'About', labelZh: '關於' },
    { path: 'skills', labelEn: 'Skills', labelZh: '技能' },
    { path: 'contact', labelEn: 'Contact', labelZh: '聯絡' },
  ];

  const handleNavClick = (path: PageType) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.4)] border-b border-surface-container-high/40">
      <div className="h-20 w-full px-4 md:px-margin-desktop flex items-center justify-between">
        {/* Brand Monogram */}
        <button 
          onClick={() => handleNavClick('work')} 
          className="flex items-center gap-space-md text-left focus:outline-none group"
        >
          <img
            alt="Kaizen Studio Monogram Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/ALJJyrB_X7IowaSVZSkmTr-Rh4S4gmZOaUK-KZq1DiD5QsOoFUdn4dDxz572xw07CitdKC-Ev-FutvwRNqSwF8SC78iWZ2MRPAANVZScZOHB91iNycZmJQJL2O1AEG27SfqGjFoRjrjPbUFgx9Wq6jEBQPDQ2bca7ZSkSNjpwpV2hQerS5d_MItwVe26RjTxJUNQmYqdlVREgwQKxDIgJO7p3NrsPky9-NDKKikHxtBWJ3En"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase group-hover:text-primary transition-colors">
              Kaizen Studio
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
              2D / 3D Visual Atelier
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navLinks.map((link) => {
            const isActive = currentPage === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-space-md py-space-sm rounded-lg transition-all text-body-md font-body-md ${
                  isActive
                    ? 'bg-surface-container-highest text-primary font-bold shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {link.labelEn} / {link.labelZh}
              </button>
            );
          })}
        </nav>

        {/* Status indicator & Avatar & Mobile toggle */}
        <div className="flex items-center gap-space-md">
          <div className="hidden sm:flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container/40 border border-secondary-container/60">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
              AVAILABLE FOR COMMISSIONS
            </span>
          </div>
          <div className="h-8 w-px bg-surface-container-highest mx-space-xs hidden sm:block"></div>
          <img
            alt="Kaizen Profile"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-variant ring-offset-2 ring-offset-background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3jSKugiXvDx7jGflCPm9MAJLEEvLBhkGAnLiT3wa3-Esj8PWc99uwT5e3mAjML1AhWPyupb0g8OK2qzt9uFbkxGJWUuduF2vmgO00k-0RX_neukAmdFywJqXuDAegwSzYC3oIS4YS4Qpl6ZNjqLskGseMXc7i3nPXvN82wXLqU9tqTu7-4HOFzCil6mj4glsRwKw_MuDOhp7yQ5PJzM-dBV3ShLmV_BzzCmsaatE"
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-t border-surface-container-highest p-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`w-full text-left px-4 py-3 rounded-lg text-body-md transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-surface-container-highest text-primary font-bold shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span>{link.labelEn} / {link.labelZh}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-surface-container-high flex items-center gap-2 text-label-caps text-secondary font-label-caps">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            AVAILABLE FOR COMMISSIONS
          </div>
        </div>
      )}
    </header>
  );
};
