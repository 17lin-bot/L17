import React, { useState } from 'react';
import { SOFTWARE_TOOLS } from '../data/portfolioData';

type DomainTab = 'all' | 'd1' | 'd2' | 'd3' | 'd4';

export const SkillsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DomainTab>('all');

  return (
    <div className="flex flex-col w-full">
      {/* Top Atmospheric Glows */}
      <div className="relative w-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[140px]"></div>
        <div className="absolute -top-20 right-1/4 w-[420px] h-[420px] bg-secondary-container/20 rounded-full blur-[160px]"></div>
      </div>

      {/* Header Section */}
      <section className="w-full px-4 md:px-margin-desktop pt-12 pb-16 relative">
        <div className="flex flex-col gap-space-sm max-w-5xl">
          <div className="flex items-center gap-space-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_10px_#00f0ff]"></span>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              SYLLABUS · CORE CAPABILITIES
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant">
              / SYS_VER 4.5.0
            </span>
          </div>
          <h1 className="font-headline-xl text-3xl md:text-headline-xl text-on-surface tracking-tight uppercase">
            Professional Skills &amp; Expertise
            <span className="block text-primary font-light text-headline-lg mt-space-xs">
              專業領域技能體系
            </span>
          </h1>
          <p className="font-body-xl text-lg md:text-body-xl text-on-surface-variant max-w-3xl leading-relaxed mt-space-xs">
            Systematic technical craftsmanship fused with speculative vision. Engineering high-octane 2D editorial systems, hyper-photorealistic 3D dimensions, generative concept visuals, and kinetic procedural motion.
          </p>

          {/* Quick Metrics Telemetry Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md mt-space-lg pt-space-md border-t border-surface-container-highest">
            <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs shadow-sm border border-surface-container-highest">
              <span className="font-label-mono text-label-mono text-on-surface-variant">ENGINE MATRIX</span>
              <span className="font-headline-md text-headline-md text-on-surface">10+ DCCs</span>
              <span className="font-label-caps text-label-caps text-primary">CROSS-DISCIPLINE</span>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs shadow-sm border border-surface-container-highest">
              <span className="font-label-mono text-label-mono text-on-surface-variant">RESOLUTION PIXELAGE</span>
              <span className="font-headline-md text-headline-md text-on-surface">8K / 32bpc</span>
              <span className="font-label-caps text-label-caps text-secondary">ACEScg COLOR PIPELINE</span>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs shadow-sm border border-surface-container-highest">
              <span className="font-label-mono text-label-mono text-on-surface-variant">LIGHTING FIDELITY</span>
              <span className="font-headline-md text-headline-md text-on-surface">Path-Traced</span>
              <span className="font-label-caps text-label-caps text-primary">SPECTRAL ACCURACY</span>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs shadow-sm border border-surface-container-highest">
              <span className="font-label-mono text-label-mono text-on-surface-variant">MOTION RUNTIME</span>
              <span className="font-headline-md text-headline-md text-on-surface">60–120 FPS</span>
              <span className="font-label-caps text-label-caps text-secondary">PHYSICS SIMULATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Domain Filter Navigation */}
      <section className="w-full px-4 md:px-margin-desktop pb-8 sticky top-20 z-40 bg-background/80 backdrop-blur-md">
        <div className="flex items-center gap-space-sm overflow-x-auto pb-2 scrollbar-none">
          {[
            { key: 'all', label: 'All Domains / 全域視圖', icon: 'view_quilt' },
            { key: 'd1', label: '01. 2D Graphic Design', icon: 'auto_stories' },
            { key: 'd2', label: '02. 3D Modeling & Rendering', icon: 'view_in_ar' },
            { key: 'd3', label: '03. Visual Art & Creation', icon: 'draw' },
            { key: 'd4', label: '04. Motion Design & VFX', icon: 'motion_blur' },
          ].map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as DomainTab)}
                className={`px-space-md py-space-sm rounded-lg font-label-caps text-label-caps uppercase transition-all flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-secondary-container/40 text-primary shadow-[0_0_12px_rgba(0,240,255,0.25)] border border-primary-container/40'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-transparent'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 4 Core Domains Showcase Grid */}
      <section className="w-full px-4 md:px-margin-desktop py-space-md flex flex-col gap-16">
        {/* Domain 01: 2D Graphic Design */}
        {(activeTab === 'all' || activeTab === 'd1') && (
          <div className="domain-section grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch animate-fade-in">
            <div className="lg:col-span-4 flex flex-col justify-between p-space-lg bg-surface-container-low rounded-xl shadow-lg border border-surface-container-highest">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-primary uppercase">DOMAIN // 01</span>
                  <span className="font-label-caps text-label-caps px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">TYPO &amp; IDENTITY</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">2D Graphic Design</h2>
                <p className="font-headline-sm text-headline-sm text-secondary font-light">平面與視覺設計體系</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Precision micro-typography meets brutalist layout dynamics. From expansive responsive brand systems to collectible risograph posters and hyper-structural grid books.
                </p>
                <div className="flex flex-col gap-space-sm mt-space-md">
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-primary">01 / 平面設計</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Graphic Design Architecture &amp; Spatial Hierarchy</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-primary">02 / 海報與視覺排版</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Editorial Posters &amp; Parametric Typographic Systems</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-primary">03 / 品牌識別設計</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Brand Identity Guides, Tokens, &amp; Design Systems</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-primary">04 / 色彩與構圖</span>
                    <p className="font-body-sm text-body-sm text-on-surface">High-contrast Color Theory &amp; Harmonic Composition</p>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex flex-wrap gap-2">
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Variable Glyphs</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Swiss Grid</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Vector Math</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Print CMYK/Pantone</span>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="group relative rounded-xl overflow-hidden bg-surface-container min-h-[380px] flex flex-col justify-end p-space-lg shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,240,255,0.2)] border border-surface-container-highest">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPvnQjJuLSR_hczDNRe755Mo6ymj55bs7_uWGHW3HUixqePR6g8hf0z_nXTjKf5CDZabxt-n0_pNhCUBep_WbydYk7DivzvpyqZNvMa3Q9KCCtdYnsdNkwJBX-9NgpKX6AOBsD2XSu8YWrt403fehb47oksoqiyU-zWNRVPOo3lgqsgP65H0mLxlcS3WFlSpRQ7FKfLbnZVIlkSfnO82_wXK0yvaAwZW6Qz2CckPQ')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
                <div className="relative z-10 flex flex-col gap-space-xs">
                  <span className="font-label-caps text-label-caps text-primary uppercase">TYPOGRAPHIC ARTIFACT</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Structural Grid Specimen</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Multi-column avant-garde bilingual catalog typography built with custom monospace glyphs and strict baseline alignments.</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden bg-surface-container min-h-[380px] flex flex-col justify-end p-space-lg shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(220,184,255,0.2)] border border-surface-container-highest">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcOj3-u3O46TooNMl7ylCVVQWc0iDUm_6eOXaVM8PFTeIEuZb8iirICZmwM-2DMyhrH5KZqWH-CtmeO11cqkX-wR1MvRgNF8TZnxhqjG0B_rC_ss36ZyZOoJyS_AgjPFo6A0yI2Crt-rAnAjNVYt3MWKmQzno5ZiwoCPgjJBAZw6ns6x3sujUoSJ6gsq0YZIG9qgMpZtZD_6CXGU0QOi2uR1SXeUlzUuke7af6aNk')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
                <div className="relative z-10 flex flex-col gap-space-xs">
                  <span className="font-label-caps text-label-caps text-secondary uppercase">IDENTITY SYSTEM</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Obsidian Brand Guidelines</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Complete holistic corporate framework covering dynamic responsive wordmarks, print finishes, and digital tokens.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Domain 02: 3D Modeling & Rendering */}
        {(activeTab === 'all' || activeTab === 'd2') && (
          <div className="domain-section grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch animate-fade-in">
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-space-md order-2 lg:order-1">
              <div className="group relative rounded-xl overflow-hidden bg-surface-container min-h-[380px] flex flex-col justify-end p-space-lg shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,240,255,0.25)] border border-surface-container-highest">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4HxIYPd_UCIqo9YVdhpnrXz4H3QbimfvdAbyEwAyFljR5Xm3spFaPxs5scIEsfjiET03eUndLU-_-G-PgsWIuXrxCv4Pa2hQaeAiklentFFyHWEezWogximYHrrMGpzykhc1f-D-AOkzoJNidIz5-vM6CoymzNTCcBg1C3zVjZFszV1vu6d5JKByj3GXV02ZzGPOcD8rdvZU3b7zOWMSRVmiX2iUbu4wS-AeNAB4')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
                <div className="relative z-10 flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-mono text-label-mono text-primary bg-surface-container-highest px-1.5 py-0.5 rounded">8K UDIM</span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">OCTANE RAYTRACE</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Sub-D Hard-Surface Unit</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Micro-engineered mechanical assembly featuring non-destructive procedural boolean topology and clean quad flow.</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden bg-surface-container min-h-[380px] flex flex-col justify-end p-space-lg shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(220,184,255,0.25)] border border-surface-container-highest">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPM_kGQNx3a9a0JCGrsJDN6b8bLFPFdNZdECIlogwmIuZ9xVkJhtCPpdmscrgx5Kh-VE9QRhpITIjSSoSmtl-7CPoueMKd718gBKQcapkHdd8w3sUlpWYP_-fgP8PdeoP0nD0uNWcPSg3IsIEeFSQxgIU6YIpTQZF47E-N0jCj0tZjNf8f7lkDJwpatpEoT9ClaggAVf3nj-1mKVEp72xz3p0ejaE1BL5RH3UDYl0')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
                <div className="relative z-10 flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-mono text-label-mono text-secondary bg-surface-container-highest px-1.5 py-0.5 rounded">PBR COMPLEX</span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">CAUSTIC DISPERSION</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Atmospheric Set Dressing</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Volumetric lighting environment configured with spectral glass absorption, anisotropic micro-roughness, and filmic tonemapping.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between p-space-lg bg-surface-container-low rounded-xl shadow-lg order-1 lg:order-2 border border-surface-container-highest">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-secondary uppercase">DOMAIN // 02</span>
                  <span className="font-label-caps text-label-caps px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">DIMENSIONAL SYNTHESIS</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">3D Modeling &amp; Rendering</h2>
                <p className="font-headline-sm text-headline-sm text-primary font-light">三維建模與光線渲染</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Transforming conceptual topology into tactile digital matter. Mastery over procedural shading trees, physical ray-tracing, volumetric fog densities, and architectural set composition.
                </p>
                <div className="flex flex-col gap-space-sm mt-space-md">
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-secondary">01 / 3D 建模</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Hard-surface Mechanical Rigging &amp; Organic Sculpting</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-secondary">02 / 材質與貼圖</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Procedural Shaders, Multi-tile UDIMs &amp; PBR Texturing</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-secondary">03 / 場景配置</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Spatial Composition, Dressing &amp; Dynamic Camera Lenses</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-secondary">04 / 燈光與渲染</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Cinematic Light Stages &amp; Photorealistic Path Tracing</p>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex flex-wrap gap-2">
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">SubD Meshing</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Redshift/Octane</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Substance PBR</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">ACES Matrix</span>
              </div>
            </div>
          </div>
        )}

        {/* Domain 03: Visual Art & Creation */}
        {(activeTab === 'all' || activeTab === 'd3') && (
          <div className="domain-section grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch animate-fade-in">
            <div className="lg:col-span-4 flex flex-col justify-between p-space-lg bg-surface-container-low rounded-xl shadow-lg border border-surface-container-highest">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-primary uppercase">DOMAIN // 03</span>
                  <span className="font-label-caps text-label-caps px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">SPECULATIVE IMAGERY</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Visual Art &amp; Creation</h2>
                <p className="font-headline-sm text-headline-sm text-secondary font-light">數位藝術與概念創作</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Conjuring uncharted territories through high-fidelity matte painting, generative algorithms, and speculative art direction for entertainment, games, and gallery exhibitions.
                </p>
                <div className="flex flex-col gap-space-sm mt-space-md">
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-primary">01 / 數位藝術</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Digital Artistry &amp; Generative Algorithmic Aesthetics</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-primary">02 / 概念視覺設計</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Concept Keyframes &amp; Speculative Worldbuilding</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-primary">03 / 創意合成</span>
                    <p className="font-body-sm text-body-sm text-on-surface">High-End Matte Painting, Retouching &amp; Photomontage</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-primary">04 / 實驗性創作</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Experimental Mixed Media &amp; Real-time Shader R&amp;D</p>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex flex-wrap gap-2">
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Keyframe Design</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Worldbuilding</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Matte Blending</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Visual Narrative</span>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="group relative rounded-xl overflow-hidden bg-surface-container min-h-[380px] flex flex-col justify-end p-space-lg shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,240,255,0.2)] border border-surface-container-highest">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5AA1aKmZuRi0VJxnEZmean5_yBRJ03tQVyos74JhlbYdAJXONi4sl0Lf0UMQ9KgW83jivxexYqf97B6x3BWQBriFopgXjyYKaWRH3LnibFJi5lCmPy-HupAqaUll6Pz-Qz54xlpR5h326uDUSf4A1WNwNCRKmbvhvKYw4Z3xFnckL4uN9WGLv83TZn4ewhR2zfV7eC80pl45WQX1ZnQmM5GDXw70VrukRgLhlTmI')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
                <div className="relative z-10 flex flex-col gap-space-xs">
                  <span className="font-label-caps text-label-caps text-primary uppercase">CONCEPT KEYFRAME</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Titan Vessel Horizon</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Atmospheric sci-fi mood board illustrating extreme cinematic scale, volumetric dust storms, and industrial hardware.</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden bg-surface-container min-h-[380px] flex flex-col justify-end p-space-lg shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(220,184,255,0.2)] border border-surface-container-highest">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlnjP8FJvoZzSF80Lgce7oNtFy4Pk9DjT1pPDiut10eCCr0YqqyVtj6szbgW2iyKayMtL2rCuiIaqZiyrBgMCa8vaiTJ6h_yatcMPlZ52X0On1myl4gZ2lNOpgTUVAE2yJNA9X2B0KgxaSPWPyxcupKa3_8MNax2-JOmw7S7hdSl3Ubls24JFYJIiDswCQz3XcAtwqOhI0Hib_M7zk4ss-E1Rr-UjKdNMq6hqQHLc')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
                <div className="relative z-10 flex flex-col gap-space-xs">
                  <span className="font-label-caps text-label-caps text-secondary uppercase">GENERATIVE SYMBIOSIS</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Bio-Synthetic Synthesis</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Exploration in algorithmic growth rules, non-Euclidean geometries, and refractive subsurface scatter shaders.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Domain 04: Motion Design & VFX */}
        {(activeTab === 'all' || activeTab === 'd4') && (
          <div className="domain-section grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch animate-fade-in">
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-space-md order-2 lg:order-1">
              <div className="group relative rounded-xl overflow-hidden bg-surface-container min-h-[380px] flex flex-col justify-end p-space-lg shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,240,255,0.25)] border border-surface-container-highest">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8BO0eyias0pijUuiXjkeVPYj2sxlmlMvf2vFdEBjZ6zjBHURC5U0h64TYjVIWGcA8N3_nus0jCV5B-X2JthH35xdXhouZuM9-eu65N1CwMVqNBySj6Jwf7kvs6s99ErSo8Rwt9l7grjI_njSR2xmh4NvjlCy3YMTSj3Y2Idt_ESvFWNRhdbydGiUnxv_tqTVQEBC_PyfXnPek6OugV6ojN8sqoUF8W7ldp5U5Bs0')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
                <div className="relative z-10 flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                    <span className="font-label-mono text-label-mono text-primary">KINETIC ENGINE</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Kinetic Glyphs &amp; Rhythms</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Audio-reactive typography driving 3D spatial transforms synchronized with custom sound design and spatial audio.</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden bg-surface-container min-h-[380px] flex flex-col justify-end p-space-lg shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(220,184,255,0.25)] border border-surface-container-highest">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfCjC9qLkYfnI1489mNyV9l15_xC2z48WdmQE5Kh9-RvHgCYvHi5mdxaDm_s4ZzE4GQXVANuEKDzWXfOQkBhsnj1mc5bfLmIeEw8ISrxnQZX7OBFl8spUdMxEyk_ZbRZzCiB4n6FoHTtU_--0bMGaPtzc-4av9hYYLnYddcX6aiyOcZTqYIjBZ2LycQfhu10K2IR7xvM0EhSelcbs3WQfh7zh54bxLg_k_RjTGx80')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
                <div className="relative z-10 flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-mono text-label-mono text-secondary bg-surface-container-highest px-1.5 py-0.5 rounded">GPU SIM</span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">NIAGARA / EMBERGEN</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Particle Physics Dynamics</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Real-time particle vortex computations using custom vector force fields, curl noise turbulence, and velocity vectors.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between p-space-lg bg-surface-container-low rounded-xl shadow-lg order-1 lg:order-2 border border-surface-container-highest">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-secondary uppercase">DOMAIN // 04</span>
                  <span className="font-label-caps text-label-caps px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">KINETIC &amp; SIMULATION</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Motion Design &amp; VFX</h2>
                <p className="font-headline-sm text-headline-sm text-primary font-light">動態設計與視覺特效</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Infusing static assets with living breath, explosive velocity, and kinetic tension. Advanced motion graphics, camera tracking, seamless compositing, and dynamic physics simulations.
                </p>
                <div className="flex flex-col gap-space-sm mt-space-md">
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-secondary">01 / 動態圖像設計</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Kinetic Motion Systems, Title Sequences &amp; UI Motion</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-secondary">02 / 影像後製</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Node-based Compositing, ACES Grading &amp; Finishing</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-secondary">03 / 動態視覺效果</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Cloth, Rigid Body Dynamics &amp; Fluid Simulations</p>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-lg border border-surface-container-highest">
                    <span className="font-label-caps text-label-caps text-secondary">04 / 視覺特效</span>
                    <p className="font-body-sm text-body-sm text-on-surface">CGI VFX, 3D Camera Tracking &amp; Audio Reactivity</p>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex flex-wrap gap-2">
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Optical Flow</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Multi-pass EXR</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">Unreal Niagara</span>
                <span className="px-space-sm py-1 rounded bg-surface-container-highest text-on-surface font-label-mono text-label-mono">After Effects</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Software Tools Ecosystem */}
      <section className="w-full px-4 md:px-margin-desktop py-20 bg-surface-container-lowest/50 relative border-t border-surface-container-high/40">
        <div className="flex flex-col gap-space-sm mb-12">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-mono text-label-mono text-primary uppercase">DCC SUITE · DIGITAL WEAPONRY</span>
            <span className="h-px w-12 bg-surface-container-highest"></span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight uppercase">
            Software Ecosystem &amp; Tool Mastery
            <span className="block text-secondary font-light text-headline-sm mt-1">
              核心軟體裝備與專業工作棧 (無灌水百分比，展現實戰專精領域)
            </span>
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Every tool is harnessed for its supreme architectural strengths—integrated through seamless Alembic, USD, and ACES pipelines to eliminate production friction.
          </p>
        </div>

        {/* 10 Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {SOFTWARE_TOOLS.map((tool) => (
            <div
              key={tool.id}
              className={`group p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-[0_0_20px_${
                tool.badgeType === 'primary' ? 'rgba(0,240,255,0.2)' : 'rgba(220,184,255,0.2)'
              }] border border-surface-container-highest`}
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className={`w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center ${
                    tool.badgeType === 'primary' ? 'text-primary' : 'text-secondary'
                  } group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-[28px]">{tool.icon}</span>
                  </div>
                  <span className={`font-label-caps text-label-caps bg-surface-container px-2 py-0.5 rounded ${
                    tool.badgeType === 'primary' ? 'text-primary' : 'text-secondary'
                  }`}>
                    {tool.badge}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{tool.name}</h3>
                <p className="font-label-mono text-label-mono text-on-surface-variant mt-1">{tool.versionSubtitle}</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">{tool.description}</p>
              </div>
              <div className="mt-space-md pt-space-sm flex flex-wrap gap-1.5 border-t border-surface-container-high/40">
                {tool.tags.map((tag) => (
                  <span key={tag} className="text-label-caps font-label-caps text-on-surface-variant bg-surface-container-highest px-1.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated Workflow Methodology */}
      <section className="w-full px-4 md:px-margin-desktop py-20 border-t border-surface-container-high/40">
        <div className="flex flex-col gap-space-sm mb-12">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-mono text-label-mono text-secondary uppercase">ENGINEERING PIPELINE</span>
            <span className="h-px w-12 bg-surface-container-highest"></span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight uppercase">
            Integrated Workflow Methodology
            <span className="block text-primary font-light text-headline-sm mt-1">
              概念至終端交付之全流程管線架構
            </span>
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            A seamless 4-stage pipeline calibrated for cinematic precision, rapid iterations, and uncompromising render fidelities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
          <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-md relative group hover:bg-surface-container transition-all border border-surface-container-highest">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-headline-lg text-primary font-extrabold">01</span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">PHASE // DISCOVERY</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Concept &amp; Moodboard</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Speculative narrative sketching, color palette curation, typography pairing, and visual research matrix.
              </p>
              <div className="p-space-xs bg-surface-container rounded font-label-mono text-label-mono text-primary">
                OUTPUT: Art Direction Deck
              </div>
            </div>
            <div className="mt-space-lg flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps">
              <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
              Curated Visual Intent
            </div>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-md relative group hover:bg-surface-container transition-all border border-surface-container-highest">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-headline-lg text-secondary font-extrabold">02</span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">PHASE // BLOCKOUT</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Spatial Topology &amp; 3D</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rough wireframe blockouts, focal length locking, hard-surface sub-D topology, and procedural modifier setups.
              </p>
              <div className="p-space-xs bg-surface-container rounded font-label-mono text-label-mono text-secondary">
                OUTPUT: Graybox 3D Scene (.usd)
              </div>
            </div>
            <div className="mt-space-lg flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps">
              <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
              Mesh Form Approved
            </div>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-md relative group hover:bg-surface-container transition-all border border-surface-container-highest">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-headline-lg text-primary font-extrabold">03</span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">PHASE // LOOKDEV</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">LookDev &amp; Physics</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                PBR substance mapping, path-traced lighting rigs, volumetric atmospheric mist, and kinetic simulation baking.
              </p>
              <div className="p-space-xs bg-surface-container rounded font-label-mono text-label-mono text-primary">
                OUTPUT: Multi-pass EXRs (32-bit)
              </div>
            </div>
            <div className="mt-space-lg flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps">
              <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
              Spectral LookDev Locked
            </div>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-md relative group hover:bg-surface-container transition-all border border-surface-container-highest">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-headline-lg text-headline-lg text-secondary font-extrabold">04</span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">PHASE // MASTER</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Comp &amp; Master Delivery</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                ACES color conformance, optical flares, sound synthesis synchronization, and multi-format master exports.
              </p>
              <div className="p-space-xs bg-surface-container rounded font-label-mono text-label-mono text-secondary">
                OUTPUT: 8K TIFF / ProRes 4444XQ
              </div>
            </div>
            <div className="mt-space-lg flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps">
              <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
              Final Artifact Deployed
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
