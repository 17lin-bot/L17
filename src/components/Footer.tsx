import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest py-space-xl border-t border-surface-container-high/40 shadow-[0_-1px_8px_rgba(0,0,0,0.3)]">
      <div className="w-full px-4 md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex flex-col items-center md:items-start gap-space-xs text-center md:text-left">
          <span className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight">
            Kaizen Studio
          </span>
          <p className="font-label-mono text-label-mono text-on-surface-variant">
            © 2024 Kaizen Studio. All digital assets &amp; 3D entities reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-space-lg">
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase"
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase"
            href="https://artstation.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ArtStation
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
