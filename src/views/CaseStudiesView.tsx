import React from 'react';
import { ComparisonSlider } from '../components/ComparisonSlider';
import { Turntable3D } from '../components/Turntable3D';
import { PageType } from '../types';

interface CaseStudiesViewProps {
  onNavigate: (page: PageType) => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Intro Ribbon & Case Study Header */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl flex flex-col gap-space-lg relative overflow-hidden">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md z-10">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">
                ARCHIVE // CASE STUDY #04
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                DEEP DIVE PROCESS
              </span>
            </div>
            <h1 className="font-headline-xl text-3xl md:text-headline-xl text-on-surface uppercase tracking-tight">
              CASE STUDIES / <span className="text-primary-fixed-dim">深入案例解析</span>
            </h1>
            <p className="font-body-xl text-lg md:text-body-xl text-on-surface-variant">
              Complete creative process, algorithmic topology, and photon-accurate raytracing from initial micro-sketches to definitive kinetic horology.
            </p>
          </div>
          <div className="flex items-center gap-space-sm self-start lg:self-auto bg-surface-container-low px-space-md py-space-sm rounded-xl shadow-md border border-surface-container-highest">
            <span className="material-symbols-outlined text-primary text-sm">terminal</span>
            <span className="font-label-mono text-label-mono text-on-surface-variant">
              DOCUMENTATION CODE: <strong className="text-on-surface">KZ-CHR-2024-V3</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Section 1: Project Cover & Metadata Bar */}
      <section className="w-full px-4 md:px-margin-desktop pb-space-xl relative">
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-surface-container-lowest group border border-surface-container-highest">
          <div
            className="w-full h-[65vh] min-h-[500px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlsc98Tfhpl6XDAsc_VwIqewlPLzfhZ9aMistHRd_wkxrQXmTqaqBLTYW-e38VHrntTnHIixU1ClanZzHonv6RroVkr3GU0Jw3UuFb6SQIuKamSloCVWRuWzjta3COlqPjYcBKuA9GJB1YuWonEK9Jk22zSIcDLwvSV13xMB9qKnjHDnZZOicjRq8TrIsYDb29o7KqXsBW9zenpmw7usmImtIf89tR_SWxUei4XCI')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-space-md md:p-space-xl">
            <div className="flex flex-col gap-space-md max-w-4xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-space-sm py-space-xs rounded-full bg-secondary-container/50 text-secondary font-label-caps text-label-caps uppercase border border-secondary/30">
                  FEATURED TIMEPIECE
                </span>
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container-highest text-primary-fixed font-label-caps text-label-caps uppercase">
                  3,400 ASSEMBLED PARTS
                </span>
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps uppercase">
                  8K UDIM ASSETS
                </span>
              </div>
              <h2 className="font-display-hero text-4xl sm:text-6xl md:text-display-hero text-on-surface uppercase leading-none tracking-tighter">
                CHRONOS METALLIC
              </h2>
              <p className="font-headline-sm text-headline-sm text-primary-fixed-dim uppercase tracking-wider -mt-space-xs">
                Kinetic Luxury Timepiece Atelier
              </p>
            </div>
          </div>
        </div>

        {/* Metadata Floating Pill Tray */}
        <div className="w-full mt-space-md bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-space-md shadow-xl grid grid-cols-2 md:grid-cols-4 gap-space-md border border-surface-container-highest">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Client / 委託方</span>
            <span className="font-headline-sm text-headline-sm text-on-surface">Independent Art Direction</span>
            <span className="font-label-mono text-label-mono text-outline">Self-Initiated R&amp;D</span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Role / 執掌範疇</span>
            <span className="font-headline-sm text-headline-sm text-on-surface">3D Modeling &amp; Shading</span>
            <span className="font-label-mono text-label-mono text-outline">Kinetic Rigging &amp; Lighting</span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Timeline / 年度</span>
            <span className="font-headline-sm text-headline-sm text-primary">2024 / Q1 - Q3</span>
            <span className="font-label-mono text-label-mono text-outline">8-Month Incubation</span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Discipline / 項目領域</span>
            <span className="font-headline-sm text-headline-sm text-secondary">3D Art &amp; Motion CGI</span>
            <span className="font-label-mono text-label-mono text-outline">Virtual Horology</span>
          </div>
        </div>
      </section>

      {/* Section 2: Overview & Inception */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-low/40 border-y border-surface-container-high/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-mono text-label-mono text-primary uppercase">01 // PRELUDE</span>
              <span className="w-6 h-px bg-surface-container-highest"></span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase">
              PROJECT OVERVIEW &amp; INCEPTION
            </h3>
            <p className="font-label-mono text-label-mono text-on-surface-variant">
              探索虛擬空間中的超寫實機械微型時計學。
            </p>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            <p className="font-body-xl text-body-xl text-on-surface leading-relaxed">
              Chronos Metallic is an exhaustive study into virtual haute horlogerie. The creative imperative was to translate the micro-tolerances, physical weight, and light transmission of grand astronomical timepieces into an uncompromised virtual manifestation.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Traditional watch visualization often abstracts microscopic engineering to optimize rendering budgets. In this production, every pinion, escapement lever, balance spring, and anti-reflective synthetic sapphire crystal facet was engineered to 0.001mm tolerance. By cross-examining bespoke celestial orbits and the stark geometry of high-tech aero-metals, the result exists at the junction of high-precision computational mechanics and visceral kinetic sculpture.
            </p>

            {/* Quick Insight Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-md">
              <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs border border-surface-container-highest">
                <span className="font-label-caps text-label-caps text-primary uppercase">TOLERANCE PRECISION</span>
                <span className="font-headline-lg text-headline-lg text-on-surface">0.001<span className="text-primary-fixed-dim text-headline-sm">mm</span></span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">Micron-accurate CAD alignments</span>
              </div>
              <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs border border-surface-container-highest">
                <span className="font-label-caps text-label-caps text-secondary uppercase">POLYGON DENSITY</span>
                <span className="font-headline-lg text-headline-lg text-on-surface">18.4<span className="text-secondary text-headline-sm">M</span></span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">Non-destructive Sub-D geometry</span>
              </div>
              <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs border border-surface-container-highest">
                <span className="font-label-caps text-label-caps text-primary uppercase">RENDER ENGINE</span>
                <span className="font-headline-lg text-headline-lg text-on-surface">Octane<span className="text-primary-fixed-dim text-headline-sm">X</span></span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">Spectral Path-Tracing with Thin-Film</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Concept & Moodboard */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl">
        <div className="flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-mono text-label-mono text-secondary uppercase">02 // INSPIRATION ARCHIVE</span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mt-space-xs">
                CONCEPT PHILOSOPHY &amp; MOODBOARD
              </h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Symbiosis of 17th-century astronomical armillary spheres and dark titanium hypercar monocoques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
            {/* Main Feature Mood Tile */}
            <div className="md:col-span-7 bg-surface-container-low rounded-xl overflow-hidden shadow-lg relative min-h-[380px] group border border-surface-container-highest">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-zBQdDSX4FjX9IN4IAbpwD24nI_cUPv8OUL2iVd1l-1_ntWQ074u6YxCal46ROb4UXFbCZimKmslpXYF4bci9aRZi4jCN2MkGn4ut9VSTGoihO_AMEM2Z_kRoutTWJapqXoYKdd6gU5gkRAlIwMrkKkL_DwefQhA9fyb8qSf3DyjOp2gPj3LQenY3zvXdbYsK4Ma1lFhR2paOfQKi6ckNh6R3zKDRhAHvnCs87p4')`,
                }}
              ></div>
              <div className="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent">
                <span className="font-label-caps text-label-caps text-primary uppercase">REF. 01 // CELESTIAL HOROLOGY</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Astronomical Armillary Core</h4>
              </div>
            </div>

            {/* Secondary Mood Tiles */}
            <div className="md:col-span-5 grid grid-rows-2 gap-space-md">
              <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-lg relative min-h-[180px] group border border-surface-container-highest">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMbCxNrhNXZMVvVpRqvpoWYXvtQRJIKKV_Y1Sr95HD6YZLZb-At4jMkwyVY0c0z0YJPmkyPDNX12omvosXeaNrdUcgnEJxrOqWw1x-e5Z1Z6ljAuqwRoeH6I6g91wkY1uvtNgXpNydmTq450_yPhOhSFzYLNkIAdiOPdzpujWX4KDs9MykY75-YfKlz-RnUq6s5Hlkk5jzv5nENFese8B5A1iZT7cqfeMAUNobtL0')`,
                  }}
                ></div>
                <div className="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-surface-container-lowest to-transparent">
                  <span className="font-label-caps text-label-caps text-secondary uppercase">REF. 02 // AEROSPACE TITANIUM</span>
                  <p className="font-label-mono text-label-mono text-on-surface">Grade-5 Specular Roughness</p>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-lg relative min-h-[180px] group border border-surface-container-highest">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeEyYkxDGvNPO-t6l5ZnXawyBWb6aweJ7e83vT8lInu-KlyRPma1KPxWrtcGLYXym638MEOYvZRCOvyGStjvWmHaMwBCeQuvnbbGNlEfCEsvQ9mb4RcEQjKQglKs4QqSacUy7vHhK5Dh7ZPkzhrQ54v0d5mmfV4dImfjYQXCmaLsGKNsmmFWvniU8MK0-wnSyJNQIxI7KfSCcJByvoyQJ1V7l19xU7KS1HyXNZZls')`,
                  }}
                ></div>
                <div className="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-surface-container-lowest to-transparent">
                  <span className="font-label-caps text-label-caps text-primary uppercase">REF. 03 // SAPPHIRE CAUSTICS</span>
                  <p className="font-label-mono text-label-mono text-on-surface">Thin-Film Optical Dispersion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Material Science & Micro-specularity */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-lowest border-t border-surface-container-high/40">
        <div className="flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono text-label-mono text-primary-fixed-dim uppercase">03 // MATERIAL SCIENCE</span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase">
              VISUAL RESEARCH &amp; MICRO-SPECULARITY
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Empirical testing of micro-faceted finishes, anisotropic brush paths, and high-frequency tactile engraving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-lg flex flex-col gap-space-md border border-surface-container-highest">
              <div className="h-48 rounded-lg overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLgMUADSjw44-qaCdpGADgNNzCp_ZvO0fmsR5HUoRvoA5ormwGmNC1YgFw6oXEphMpLwhRFGwIztlqxdRFcevFtVGdoeEtkyzfRvQY4pR6fg-u4OrZAhaZR-vehWIHVF7kuyUvSCcYxN_vDgW-1X3P2gXoEIxMigwHQLUOmGdPgo-QD_qpc6xi9OcidT6NMehNShNtl1SqB7704LfuCmordeiK-r03NSy-zQUn2HA')`,
                  }}
                ></div>
                <span className="absolute top-space-xs right-space-xs bg-surface-container-lowest/80 px-space-xs py-0.5 rounded font-label-mono text-label-mono text-primary">MAP: ANISO_DIR_08</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps text-primary uppercase">STUDY A</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Radial Anisotropic Brushing</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Simulating continuous mechanical lathe abrasions. Tangent orientation maps dictate elliptical specular stretch along concentric gear paths.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-lg flex flex-col gap-space-md border border-surface-container-highest">
              <div className="h-48 rounded-lg overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBzAf1klOuUQQoQIMSyYl9VT2b7Bi8czruy5E6h8YYGZKiVlMofQc7NQanGcKzzbpmm-u-MupLnJ-qpf0XmQFVPgbDR9aX6dExJbK1rU26urqmggR0g3BaGoAWErfN5Ho1cVJ7Wvg9Q3Ut-bAjzm89MvC4s5T0lDiAujJFOCcv2TTUKrLaVI6dJOoKd0A-8DkKSCB2FUnKLHCsCJ4aVMVDbftAG5yz_8Z0pBBx5xo')`,
                  }}
                ></div>
                <span className="absolute top-space-xs right-space-xs bg-surface-container-lowest/80 px-space-xs py-0.5 rounded font-label-mono text-label-mono text-secondary">DISP: 32-BIT EXR</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps text-secondary uppercase">STUDY B</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Sub-Micron Laser Etching</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Sub-millimeter indices etched into DLC (Diamond-Like Carbon) coatings using customized floating-point 32-bit vector displacement fields.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-lg flex flex-col gap-space-md border border-surface-container-highest">
              <div className="h-48 rounded-lg overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBs0ibRvRVXOCWOBGRgRjgbY0GUceXXZxwOsqXBDQBmFsfjKagNZnJzhQgIlhD0p0weYWwC2NEMat5dQrIDWX3aJYfiyj3BAjvKCbwrUPs_M0d9xpDZEnnPfCsFJVHrHLtyPwyGAI98M_ymQvQVblDUHTiUATIG0gAfu1XqCw2N37pOl-bEfneQcvNeYxHkGADenxLvEKEFelQ1IjnvkohTtqemW_aqmcij-jod7i8')`,
                  }}
                ></div>
                <span className="absolute top-space-xs right-space-xs bg-surface-container-lowest/80 px-space-xs py-0.5 rounded font-label-mono text-label-mono text-primary">IOR: 1.770 SAPPHIRE</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps text-primary uppercase">STUDY C</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Sapphire Caustic Refraction</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Index of refraction calibrated to synthetic corundum (1.770) combined with a dual-sided thin-film nanometer anti-reflective interference shader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Process & Development Stages */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl">
        <div className="flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono text-label-mono text-primary uppercase">04 // PRODUCTION PIPELINE</span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase">
              PROCESS &amp; DEVELOPMENT STAGES
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Comprehensive four-phase technical progression from foundational CAD topology to spectral illumination.
            </p>
          </div>

          <div className="flex flex-col gap-space-lg">
            {/* Stage 01 */}
            <div className="bg-surface-container-low rounded-xl p-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center shadow-lg border border-surface-container-highest">
              <div className="lg:col-span-5 flex flex-col gap-space-sm">
                <span className="font-label-mono text-label-mono text-primary">STAGE 01 / TOPOLOGY FOUNDATION</span>
                <h4 className="font-headline-md text-headline-md text-on-surface uppercase">Draft &amp; Wireframe Blueprints</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Constructed strictly with pure quad geometry. Initial technical blueprints were drafted according to ISO horological standards to guarantee that gear ratios and intermeshing tooth pitches translate with mechanical fidelity.
                </p>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-mono text-label-mono">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>100% Manifold Quads, Zero N-gons</span>
                </div>
              </div>
              <div className="lg:col-span-7 h-64 md:h-80 rounded-lg overflow-hidden bg-surface-container-highest">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi902xBpDPyqrHvpdi-5i9w3G7hZW15aQ_EpoHgYia7R1aU3_Fv1WgxsV_luyu8rtF4kRXVeuH4jv4mfkrTHgBAIRnisjIoiooJ7OMGVO4T8GdPerTArSAcTZA0ioyuWcXsOU25SbQnugNLfBPHb6j4PjBulV_dG6huDB6UPKXt4sR0PWptvmwgd-c7Hanacae23U1kEnF_ZrKwFt-PDOB9Kmw2P_dQsQ55pb32AY')`,
                  }}
                ></div>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="bg-surface-container-low rounded-xl p-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center shadow-lg border border-surface-container-highest">
              <div className="lg:col-span-7 h-64 md:h-80 rounded-lg overflow-hidden bg-surface-container-highest order-2 lg:order-1">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-vS5yIUoP9uBjz-G9S9NkfmtyC_isyU7UDDwXdEeMPkw-gT0kb3nCTVJBpdtebKo9R5qdAEb9PBzhI8jh2BcU0drLMHJAU_e0XxylwR09cOk8AnPj1D0dJ90WrSMWJMcNQUd8VPRTE8P8tM_tn6iCXhg7oAQTFPaIceKpRjp-T_U8mU2yQlCTLIRqSDXYJnQFs4g1CCjKUhPSy-9eV6_xy6nm5clzE6hITFDTDys')`,
                  }}
                ></div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-space-sm order-1 lg:order-2">
                <span className="font-label-mono text-label-mono text-secondary">STAGE 02 / MECHANICAL FABRICATION</span>
                <h4 className="font-headline-md text-headline-md text-on-surface uppercase">Sub-D Modeling &amp; Assembly</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Every screw thread, jewel bearing socket, and bevel was modeled in high-resolution subdivision surfaces. The master assembly comprises 3,400 individual mechanical instances connected through dynamic constraint rigs.
                </p>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-mono text-label-mono">
                  <span className="material-symbols-outlined text-secondary text-base">layers</span>
                  <span>Dynamic Kinematic Constraints &amp; Gearing Rigs</span>
                </div>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="bg-surface-container-low rounded-xl p-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center shadow-lg border border-surface-container-highest">
              <div className="lg:col-span-5 flex flex-col gap-space-sm">
                <span className="font-label-mono text-label-mono text-primary">STAGE 03 / PROCEDURAL SHADING</span>
                <h4 className="font-headline-md text-headline-md text-on-surface uppercase">Custom PBR Textures &amp; UDIM Maps</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Authored across 42 distinct 8K UDIM tiles in Substance 3D Painter. Procedural dust micro-scratches, fingerprint grease layers, and hand-rubbed edge wear were carefully modulated to evoke authentic haute horlogerie craft.
                </p>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-mono text-label-mono">
                  <span className="material-symbols-outlined text-primary text-base">palette</span>
                  <span>42x 8K UDIM Sets in 32-bit Float</span>
                </div>
              </div>
              <div className="lg:col-span-7 h-64 md:h-80 rounded-lg overflow-hidden bg-surface-container-highest">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuASE25CnjhCuLjRQi1kCerac1Kuj7fHhJji4nBibYYlbdDLy-QgrXXvjHAIi2ZZ3k_mb27iJ9kC5T5ebikgmFPxZMrY9z_suwMndL9HNPFn1z_QS-fpnKrH_cBNQEaTe8nSKkJQvYShGlCI4DtJ9p5ga2HOdX87rQJ1shqBRhCqC3g12enbkCGVFgdipvVm-94ZTOoAcFvm_BOBgnSqLQzKd07GoHMdsyDoyCjASFc')`,
                  }}
                ></div>
              </div>
            </div>

            {/* Stage 04 */}
            <div className="bg-surface-container-low rounded-xl p-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center shadow-lg border border-surface-container-highest">
              <div className="lg:col-span-7 h-64 md:h-80 rounded-lg overflow-hidden bg-surface-container-highest order-2 lg:order-1">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7okIGxJgh3DDIetGlKlWb_nMA1G2Ambb0IyKlxcQPlte3tXSO3qJNY8k4JiLyD-wVKkZdefM0gYym4FrVXOWgSmA1cvEmdKEJxdfjWNFM_Q0vZ3C_aGXa0jw1aEJ-tG-Le0fybWG8wJkj-NU9lYTQ2Mf6uGILCE2bkfcsokXWwrFtNJHOc4zfgNs_7ZgXLW325z_68Mm7RDlDYka-ZZpU2MJlOA_xPkPc-IP9hXo')`,
                  }}
                ></div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-space-sm order-1 lg:order-2">
                <span className="font-label-mono text-label-mono text-secondary">STAGE 04 / SPECTRAL COMPOSITING</span>
                <h4 className="font-headline-md text-headline-md text-on-surface uppercase">Octane Studio Lighting &amp; Volumetrics</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  A bespoke virtual studio was assembled using 7 isolated mesh emitters, customized HDRI soft-boxes with true gradient falls, and micro-particulate atmospheric scattering to create cinematic depth and edge definition.
                </p>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-mono text-label-mono">
                  <span className="material-symbols-outlined text-secondary text-base">wb_iridescent</span>
                  <span>Spectral Path-Tracing with 16,000 Max Samples</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Interactive Before/After Slider */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-low/60 border-y border-surface-container-high/40">
        <ComparisonSlider />
      </section>

      {/* Section 7: 3D Model GLB / GLTF Inspection Viewport */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl">
        <div className="flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-mono text-label-mono text-primary uppercase">06 // SPATIAL ASSET VIEWPORT</span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mt-space-xs">
                GLB / GLTF 3D REAL-TIME INSPECTION
              </h3>
            </div>
            <span className="px-space-md py-space-xs rounded-full bg-primary-container/20 text-primary-fixed-dim font-label-caps text-label-caps uppercase self-start md:self-auto border border-primary-container/30">
              WEBGL 2.0 / PBR ENGINE ACTIVE
            </span>
          </div>

          <Turntable3D />
        </div>
      </section>

      {/* Section 8: Tools Architecture */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-low/40 border-y border-surface-container-high/40">
        <div className="flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono text-label-mono text-secondary uppercase">07 // DIGITAL ARSENAL</span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase">
              TOOLS &amp; SOFTWARE ARCHITECTURE
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Multi-software interop pipeline orchestrated through OpenUSD and ACEScg color-managed environments.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-space-md">
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm shadow-md hover:bg-surface-container-high transition-colors group border border-surface-container-highest">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">category</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">Blender 4.2</span>
                <span className="font-label-caps text-label-caps text-primary uppercase mt-space-xs">GEOMETRY CAD</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Sub-D topology &amp; micro-mechanical gearing constraints.</span>
              </div>
            </div>

            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm shadow-md hover:bg-surface-container-high transition-colors group border border-surface-container-highest">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">motion_photos_on</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">Cinema 4D</span>
                <span className="font-label-caps text-label-caps text-secondary uppercase mt-space-xs">RIG &amp; MOGRAPH</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Procedural kinetic linkages and camera choreography.</span>
              </div>
            </div>

            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm shadow-md hover:bg-surface-container-high transition-colors group border border-surface-container-highest">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">filter_tilt_shift</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">Octane X</span>
                <span className="font-label-caps text-label-caps text-primary uppercase mt-space-xs">SPECTRAL RENDER</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Unbiased GPU raytracing with thin-film dispersion shaders.</span>
              </div>
            </div>

            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm shadow-md hover:bg-surface-container-high transition-colors group border border-surface-container-highest">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary-fixed group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">texture</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">Substance 3D</span>
                <span className="font-label-caps text-label-caps text-secondary uppercase mt-space-xs">PBR TEXTURING</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Multi-tile UDIM authoring and custom anisotropic maps.</span>
              </div>
            </div>

            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm shadow-md hover:bg-surface-container-high transition-colors group col-span-2 md:col-span-1 border border-surface-container-highest">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">movie_filter</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">Resolve Studio</span>
                <span className="font-label-caps text-label-caps text-tertiary uppercase mt-space-xs">ACEScg COLOR</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">32-bit floating point grading, glow diffusion &amp; optics.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Reflection & Honors */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <span className="font-label-mono text-label-mono text-primary uppercase">08 // POST-MORTEM &amp; KEY TAKEAWAYS</span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase">
              TECHNICAL OUTCOMES &amp; REFLECTION
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The major breakthrough on Chronos Metallic was solving micro-facet noise in deep reflections without aggressive AI blurring that destroys hair-thin chamfers. By designing a custom importance-sampling shader for brushed anisotropic metals, render times per 4K frame dropped by 44% while preserving specular crispness.
            </p>
            <div className="flex flex-col gap-space-sm pt-space-xs">
              <div className="flex items-start gap-space-sm bg-surface-container-low p-space-md rounded-lg border border-surface-container-highest">
                <span className="material-symbols-outlined text-primary text-xl">speed</span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Rendering Optimization Benchmark</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Reduced memory consumption from 26GB to 14.2GB VRAM via aggressive instance grouping and custom mesh compression.</p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm bg-surface-container-low p-space-md rounded-lg border border-surface-container-highest">
                <span className="material-symbols-outlined text-secondary text-xl">verified</span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Horological Authenticity</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Consulted with Swiss master watchmakers to guarantee escapement tooth ratios and inertia wheel balance match real-world chronometer standards.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-md bg-surface-container-low p-space-lg rounded-xl shadow-xl border border-surface-container-highest">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-lg">military_tech</span>
              <span className="font-label-mono text-label-mono text-primary uppercase">CURATED HONORS</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface uppercase">
              INTERNATIONAL RECOGNITION
            </h4>
            <div className="flex flex-col divide-y divide-surface-container-highest">
              <div className="py-space-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Behance Curated</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">Motion Graphics &amp; 3D Modeling Editorial</span>
                </div>
                <span className="px-space-sm py-space-xs rounded bg-primary-container/20 text-primary-fixed-dim font-label-caps text-label-caps">2024</span>
              </div>
              <div className="py-space-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">ArtStation Trending #1</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">Global 3D Hard-Surface Category</span>
                </div>
                <span className="px-space-sm py-space-xs rounded bg-secondary-container/40 text-secondary font-label-caps text-label-caps">WEEK 34</span>
              </div>
              <div className="py-space-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Render Weekly Feature</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">Grand Master Challenge Winner</span>
                </div>
                <span className="px-space-sm py-space-xs rounded bg-surface-container-highest text-on-surface font-label-caps text-label-caps">WINNER</span>
              </div>
            </div>
            <div className="mt-auto pt-space-md">
              <button 
                onClick={() => alert("Full Press Kit is packaged in the client archive.")}
                className="w-full py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-space-xs text-on-surface font-label-mono text-label-mono uppercase shadow-sm border border-surface-container-high"
              >
                <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
                <span>View Full Press Coverage Kit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Previous / Next Project Navigation */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-lowest border-t border-surface-container-high/40">
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">CYCLE PORTFOLIO ARCHIVE</span>
            <button
              onClick={() => {
                onNavigate('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-label-caps text-label-caps text-primary hover:underline uppercase flex items-center gap-space-xs focus:outline-none"
            >
              <span>All Projects</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <button
              onClick={() => {
                onNavigate('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative rounded-xl overflow-hidden bg-surface-container-low p-space-lg shadow-lg flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:bg-surface-container-high border border-surface-container-highest text-left"
            >
              <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                <span className="flex items-center gap-space-xs text-primary group-hover:-translate-x-1 transition-transform">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  <span>PREVIOUS PROJECT // 01</span>
                </span>
                <span className="font-label-caps text-label-caps uppercase text-outline">CYBERNETICS</span>
              </div>
              <div className="flex flex-col gap-space-xs mt-space-md">
                <h4 className="font-headline-lg text-headline-lg text-on-surface uppercase group-hover:text-primary transition-colors">
                  NEO-TOKYO 2099
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Atmospheric Cyberpunk Megacity World-Building &amp; Procedural Architecture.
                </p>
              </div>
              <div className="mt-space-md flex items-center gap-space-xs font-label-caps text-label-caps text-outline group-hover:text-on-surface uppercase">
                <span>EXPLORE PROCESS</span>
                <span className="w-8 h-px bg-surface-container-highest group-hover:w-12 transition-all"></span>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigate('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative rounded-xl overflow-hidden bg-surface-container-low p-space-lg shadow-lg flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:bg-surface-container-high border border-surface-container-highest text-left"
            >
              <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                <span className="font-label-caps text-label-caps uppercase text-outline">NEURO-VISUAL ART</span>
                <span className="flex items-center gap-space-xs text-secondary group-hover:translate-x-1 transition-transform">
                  <span>NEXT PROJECT // 03</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
              <div className="flex flex-col gap-space-xs mt-space-md">
                <h4 className="font-headline-lg text-headline-lg text-on-surface uppercase group-hover:text-secondary transition-colors">
                  SYNAPSE ECHOES
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Bio-Mechanical Synaptic Data Visuals &amp; Audio-Reactive Generative Canvas.
                </p>
              </div>
              <div className="mt-space-md flex items-center justify-end gap-space-xs font-label-caps text-label-caps text-outline group-hover:text-on-surface uppercase">
                <span className="w-8 h-px bg-surface-container-highest group-hover:w-12 transition-all"></span>
                <span>EXPLORE PROCESS</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
