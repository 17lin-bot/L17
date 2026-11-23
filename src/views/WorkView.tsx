import React, { useState } from 'react';
import { HeroThreeScene } from '../components/HeroThreeScene';
import { ProjectModal } from '../components/ProjectModal';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory, PageType } from '../types';

interface WorkViewProps {
  onNavigate: (page: PageType) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest -mt-20 pt-28 pb-space-xl">
        {/* Ambient Lighting & Atmospheric Grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-primary-container/15 rounded-full blur-[160px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(219,252,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
        </div>

        <div className="relative w-full px-4 md:px-margin-desktop z-10 flex flex-col items-center">
          {/* Top Meta Eyebrow & Status Bar */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-space-sm mb-space-md border-b-0 pb-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                KAIZEN / KAI SHEN // ARCHIVE v4.2
              </span>
            </div>
            <div className="flex items-center gap-space-md font-label-mono text-label-mono text-on-surface-variant">
              <span>LAT 25.0330° N / LON 121.5654° E</span>
              <span className="hidden sm:inline text-surface-container-highest">|</span>
              <span className="text-primary-fixed">OCTANE • UNREAL 5 • HOUDINI</span>
            </div>
          </div>

          {/* Main Dual Headline */}
          <div className="text-center w-full max-w-6xl mx-auto flex flex-col items-center select-none">
            <h1 className="font-display-hero text-4xl sm:text-6xl md:text-display-hero uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-primary via-on-surface to-on-surface-variant drop-shadow-[0_0_35px_rgba(0,240,255,0.2)]">
              CREATIVE DESIGNER
            </h1>
            <div className="flex items-center justify-center gap-space-md -mt-1 md:-mt-4">
              <span className="h-px w-8 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-secondary to-transparent"></span>
              <span className="font-display-hero text-4xl sm:text-6xl md:text-display-hero uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed via-primary-container to-secondary drop-shadow-[0_0_30px_rgba(220,184,255,0.3)]">
                2D &amp; 3D ARTIST
              </span>
              <span className="h-px w-8 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-primary-container to-transparent"></span>
            </div>
          </div>

          {/* Core Concept & Bilingual Manifesto */}
          <div className="mt-space-md max-w-3xl text-center flex flex-col items-center gap-space-xs">
            <p className="font-headline-md text-xl md:text-headline-md text-primary tracking-tight font-medium">
              Transforming Ideas Into Visual Experiences.
            </p>
            <p className="font-body-xl text-lg md:text-body-xl text-on-surface-variant font-light">
              將創意轉化為具有獨特風格的視覺體驗。
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-space-xs">
              Synthesizing avant-garde graphic brutalism with cinematic procedural 3D aesthetics. Crafting visceral digital artifacts, spatial brand architecture, and hyper-real interactive environments.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md">
            <a
              href="#featured-works"
              className="group relative px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_28px_rgba(0,240,255,0.6)] hover:-translate-y-0.5 flex items-center gap-space-xs"
            >
              <span>View My Work</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-y-0.5">
                arrow_downward
              </span>
            </a>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-space-lg py-space-sm rounded-lg bg-surface-container-high/80 text-on-surface hover:text-primary hover:bg-surface-container-highest transition-all duration-300 backdrop-blur-md font-headline-sm text-headline-sm tracking-wide uppercase flex items-center gap-space-xs border border-surface-container-highest"
            >
              <span>Contact Me</span>
              <span className="material-symbols-outlined text-secondary">terminal</span>
            </button>
          </div>

          {/* 3D Interactive Sculpture Centerpiece */}
          <div className="relative w-full max-w-6xl mt-space-md rounded-xl bg-surface-container-low/60 backdrop-blur-xl p-space-xs shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden border border-surface-container-highest">
            <div className="absolute top-space-md left-space-md z-20 flex flex-col gap-1 font-label-mono text-label-mono text-on-surface-variant/80 bg-surface-container-lowest/80 px-space-sm py-space-xs rounded-lg backdrop-blur-md pointer-events-none border border-surface-container-high">
              <div className="flex items-center gap-space-xs text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                <span>THREE.JS REALTIME VIEWPORT</span>
              </div>
              <span className="text-tertiary-fixed-dim">VERTICES: 1,420,800 • 60 FPS</span>
              <span className="text-secondary">SHADER: KINETIC_REFRACTION_V2</span>
            </div>
            <div className="absolute bottom-space-md right-space-md z-20 flex items-center gap-space-xs font-label-caps text-label-caps text-on-surface-variant/70 bg-surface-container-lowest/70 px-space-sm py-space-xs rounded backdrop-blur-md pointer-events-none">
              <span className="material-symbols-outlined text-sm text-primary">drag_pan</span>
              <span>ORBIT / DRAG TO ROTATE SCULPTURE</span>
            </div>

            <HeroThreeScene />
          </div>

          {/* Animated Mouse Scroll Indicator */}
          <a
            href="#featured-works"
            className="mt-space-lg flex flex-col items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors cursor-pointer group"
          >
            <span className="font-label-caps text-label-caps tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-9 rounded-full bg-surface-container-high flex justify-center pt-2 relative border border-surface-container-highest">
              <div className="w-1.5 h-2.5 rounded-full bg-primary-container animate-bounce"></div>
            </div>
          </a>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="w-full bg-surface-container-lowest py-space-xl relative z-10" id="featured-works">
        <div className="w-full px-4 md:px-margin-desktop flex flex-col">
          {/* Section Header & Filter Toolbar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-sm">
                <span className="font-label-mono text-label-mono text-primary uppercase">CATALOG // 01</span>
                <div className="h-1.5 w-12 bg-secondary-container"></div>
              </div>
              <div className="flex items-baseline gap-space-md flex-wrap">
                <h2 className="font-headline-xl text-3xl md:text-headline-xl text-on-surface uppercase tracking-tight">
                  FEATURED WORKS
                </h2>
                <span className="font-headline-lg text-xl md:text-headline-lg text-on-surface-variant font-light">
                  / 精選作品
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                A curated portfolio spanning speculative 2D typography, high-precision cinematic 3D renders, algorithmic visual synthesis, and kinetic sequencing.
              </p>
            </div>

            {/* Filter Chips Bar */}
            <div className="flex flex-wrap items-center gap-space-xs bg-surface-container-low p-space-xs rounded-xl shadow-inner border border-surface-container-highest">
              {(
                [
                  { key: 'all', label: 'All (12)' },
                  { key: '2d', label: '2D Design (平面/海報/品牌)' },
                  { key: '3d', label: '3D Art (建模/材質/燈光)' },
                  { key: 'digital', label: 'Digital Art (數位藝術/實驗)' },
                  { key: 'motion', label: 'Motion Design (動態/特效)' },
                ] as const
              ).map((btn) => {
                const isActive = filter === btn.key;
                return (
                  <button
                    key={btn.key}
                    onClick={() => setFilter(btn.key)}
                    className={`px-space-md py-space-xs rounded-lg font-label-caps text-label-caps uppercase transition-all duration-200 ${
                      isActive
                        ? 'bg-secondary-container text-primary-container shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-500 hover:-translate-y-1.5 border border-surface-container-high/40"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-80"></div>
                  <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
                    <span className="px-space-xs py-0.5 rounded bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-mono text-label-mono">
                      {project.year}
                    </span>
                    <span className="px-space-xs py-0.5 rounded bg-secondary-container/70 backdrop-blur-md text-secondary font-label-mono text-label-mono">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute top-space-sm right-space-sm w-9 h-9 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none"
                    title="Fullscreen Preview"
                  >
                    <span className="material-symbols-outlined text-sm">fullscreen</span>
                  </button>
                </div>

                <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">
                        {project.subCategory}
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        {project.code}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-space-sm">
                    <div className="flex flex-wrap gap-space-xs">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-space-xs py-0.5 bg-surface-container-highest rounded text-on-surface-variant font-label-mono text-label-mono"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="h-px w-full bg-surface-container-highest"></div>
                    <button
                      onClick={() => {
                        onNavigate('case-studies');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center justify-between text-on-surface group-hover:text-primary transition-colors font-headline-sm text-headline-sm text-left focus:outline-none"
                    >
                      <span>View Project Case Study</span>
                      <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Discover Archive Banner */}
          <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container-high/60 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-space-md shadow-2xl border border-surface-container-highest">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                <span className="material-symbols-outlined text-2xl">folder_special</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Seeking More Tailored Explorations?
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Access complete breakdown decks, raw wireframes, and production 4K turnarounds.
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                onNavigate('case-studies');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-space-lg py-space-sm rounded-lg bg-surface-container-highest text-primary hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 font-headline-sm text-headline-sm tracking-wide uppercase flex items-center gap-space-xs whitespace-nowrap"
            >
              <span>Explore All Case Studies</span>
              <span className="material-symbols-outlined">launch</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onNavigate={onNavigate}
      />
    </div>
  );
};
