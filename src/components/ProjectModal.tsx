import React, { useEffect } from 'react';
import { Project, PageType } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate: (page: PageType) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-surface-container-lowest/90 backdrop-blur-2xl p-4 md:p-space-xl flex items-center justify-center animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-surface-container-low rounded-xl shadow-[0_24px_64px_rgba(0,0,0,0.9)] p-space-lg flex flex-col gap-space-md overflow-hidden border border-surface-container-highest">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/40">
          <div className="flex flex-col">
            <span className="font-label-mono text-label-mono text-primary uppercase">
              {project.year} // {project.categoryLabel} / {project.subCategory}
            </span>
            <h4 className="font-headline-lg text-headline-lg text-on-surface">
              {project.title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Preview Image */}
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-surface-container relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-space-sm left-space-sm bg-surface-container-lowest/80 px-space-sm py-space-xs rounded font-label-mono text-label-mono text-primary-fixed backdrop-blur-md">
            ORIGINAL FIDELITY // 4096 x 2160 PRORES
          </div>
        </div>

        {/* Modal Body & Metadata */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md pt-space-xs">
          <div className="flex flex-col gap-1 max-w-xl">
            <p className="font-body-md text-body-md text-on-surface">
              {project.description}
            </p>
            <div className="flex items-center gap-space-sm font-label-mono text-label-mono text-on-surface-variant mt-1">
              <span>TECH STACK:</span>
              <span className="text-secondary font-medium">
                {project.tools.join(', ')}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <button
              onClick={() => {
                onClose();
                onNavigate('case-studies');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wide transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              Open Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
