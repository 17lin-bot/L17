import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WorkView } from './views/WorkView';
import { CaseStudiesView } from './views/CaseStudiesView';
import { AboutView } from './views/AboutView';
import { SkillsView } from './views/SkillsView';
import { ContactView } from './views/ContactView';
import { PageType } from './types';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('work');

  // Handle URL hash sync
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      if (['work', 'case-studies', 'about', 'skills', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="w-full pt-20 flex-1 bg-background">
        {currentPage === 'work' && <WorkView onNavigate={handleNavigate} />}
        {currentPage === 'case-studies' && <CaseStudiesView onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutView onNavigate={handleNavigate} />}
        {currentPage === 'skills' && <SkillsView />}
        {currentPage === 'contact' && <ContactView />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
