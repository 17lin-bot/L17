import React from 'react';
import { MILESTONES } from '../data/portfolioData';
import { PageType } from '../types';

interface AboutViewProps {
  onNavigate: (page: PageType) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-secondary-container/20 blur-[130px] pointer-events-none"></div>
        <div className="absolute top-1/3 -right-24 w-[32rem] h-[32rem] rounded-full bg-primary-container/10 blur-[150px] pointer-events-none"></div>

        <section className="w-full px-4 md:px-margin-desktop py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-center">
            {/* Left: Portrait Frame & Cyber Glass Halo */}
            <div className="lg:col-span-5 relative group max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-secondary via-primary-container/40 to-transparent rounded-full opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative aspect-square w-full rounded-full overflow-hidden bg-surface-container-lowest shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-surface-container-highest">
                <img
                  alt="Creative Designer Portrait"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3jSKugiXvDx7jGflCPm9MAJLEEvLBhkGAnLiT3wa3-Esj8PWc99uwT5e3mAjML1AhWPyupb0g8OK2qzt9uFbkxGJWUuduF2vmgO00k-0RX_neukAmdFywJqXuDAegwSzYC3oIS4YS4Qpl6ZNjqLskGseMXc7i3nPXvN82wXLqU9tqTu7-4HOFzCil6mj4glsRwKw_MuDOhp7yQ5PJzM-dBV3ShLmV_BzzCmsaatE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-40"></div>
              </div>

              {/* Floating Telemetry Capsule */}
              <div className="absolute -bottom-4 right-4 md:right-8 bg-surface-container-high/90 backdrop-blur-xl px-space-md py-space-sm rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-space-sm border border-surface-container-highest">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                <span className="font-label-mono text-label-mono text-primary tracking-wider uppercase">
                  ARCHETYPE: 2D/3D DIR
                </span>
              </div>
            </div>

            {/* Right: Bio Statement & Typography Hierarchy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-space-sm mb-space-sm">
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                  SECTION 4.4 / ABOUT PROFILE
                </span>
                <div className="h-px w-16 bg-surface-container-highest"></div>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  INIT_01 // 關於我
                </span>
              </div>
              <h2 className="font-headline-lg md:font-headline-xl text-3xl md:text-headline-xl text-on-surface uppercase mb-space-xs tracking-tight">
                Creative Designer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-secondary">
                  &amp; 2D / 3D Artist
                </span>
              </h2>
              <p className="font-body-xl text-body-xl text-on-surface-variant mb-space-lg leading-relaxed font-light">
                A multidisciplinary Creative Designer &amp; 3D Artist pushing boundaries across dimension and sensory design.
              </p>

              {/* Bilingual Core Philosophy Block */}
              <div className="relative bg-surface-container/60 backdrop-blur-md p-space-lg rounded-xl mb-space-lg shadow-xl border border-surface-container-highest">
                <div className="absolute -left-1 top-4 bottom-4 w-1 bg-gradient-to-b from-primary-container to-secondary-container rounded-full"></div>
                <p className="font-body-md text-body-md text-on-surface leading-loose tracking-wide">
                  我是一位專注於視覺設計與數位創作的 Creative Designer，致力於探索 2D 平面設計與 3D 視覺藝術之間的可能性。透過不同媒材、設計技術與創作方式，將想法轉化為具有視覺張力與獨特風格的作品。我相信設計不只是視覺呈現，更是一種傳遞想法、情感與故事的方式。
                </p>
              </div>

              {/* Quick Metric Badges */}
              <div className="grid grid-cols-3 gap-space-sm text-left">
                <div className="bg-surface-container-low p-space-sm rounded-lg border border-surface-container-highest">
                  <span className="font-label-mono text-label-mono text-primary block">EXP_RUNNING</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">8+ YRS</span>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-lg border border-surface-container-highest">
                  <span className="font-label-mono text-label-mono text-secondary block">DOMAINS</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">2D / 3D / TECH</span>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-lg border border-surface-container-highest">
                  <span className="font-label-mono text-label-mono text-primary-fixed-dim block">STUDIO_LOC</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">TAIPEI / GLOBAL</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Asymmetric Bento Grid (Philosophy & Directions) */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-lowest/50 border-y border-surface-container-high/40">
        <div className="mb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
              THE PARADIGM
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase mt-space-xs">
              Philosophy &amp; Directions / 核心思維與創作向度
            </h3>
          </div>
          <p className="font-label-mono text-label-mono text-on-surface-variant">
            DIMENSIONAL SYNCHRONICITY // 02
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
          {/* Philosophy Card 1 */}
          <div className="md:col-span-4 bg-surface-container-low hover:bg-surface-container p-space-lg rounded-xl shadow-lg transition-all duration-300 flex flex-col justify-between group border border-surface-container-highest">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-space-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-headline-sm">architecture</span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface-variant block mb-space-xs">
                01 / DISCIPLINE
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                Precision Craft / 嚴謹工藝
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Obsessive attention to topological fidelity, procedural UV unrolls, and optical realism. Transforming micro-details into monumental digital presence.
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-space-xs text-primary font-label-mono text-label-mono">
              <span>MICRON-LEVEL RIGOR</span>
              <span className="material-symbols-outlined text-body-sm">arrow_forward</span>
            </div>
          </div>

          {/* Philosophy Card 2 */}
          <div className="md:col-span-4 bg-surface-container-low hover:bg-surface-container p-space-lg rounded-xl shadow-lg transition-all duration-300 flex flex-col justify-between group border border-surface-container-highest">
            <div>
              <div className="w-10 h-10 rounded-lg bg-secondary-container/50 flex items-center justify-center text-secondary mb-space-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-headline-sm">all_inclusive</span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface-variant block mb-space-xs">
                02 / CONTINUUM
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                Cross-Dimensional / 維度敘事
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Dissolving the barrier separating planar print typography from dynamic spatial computing environments. Seamless transitions between flat graphic and spatial light.
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-space-xs text-secondary font-label-mono text-label-mono">
              <span>HYBRID METRIC FORM</span>
              <span className="material-symbols-outlined text-body-sm">arrow_forward</span>
            </div>
          </div>

          {/* Philosophy Card 3 */}
          <div className="md:col-span-4 bg-surface-container-low hover:bg-surface-container p-space-lg rounded-xl shadow-lg transition-all duration-300 flex flex-col justify-between group border border-surface-container-highest">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary mb-space-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-headline-sm">code_blocks</span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface-variant block mb-space-xs">
                03 / REDUCTION
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                Generative Minimalism / 極簡生成
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Stripping away superfluous digital clutter to empower monolithic forms, procedural geometry, and intentional dark space that breathes with visual tension.
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-space-xs text-primary font-label-mono text-label-mono">
              <span>MAXIMUM MASS &amp; VOID</span>
              <span className="material-symbols-outlined text-body-sm">arrow_forward</span>
            </div>
          </div>

          {/* Creative Vector Channels Hub */}
          <div className="md:col-span-12 bg-surface-container p-space-lg md:p-space-xl rounded-xl shadow-xl mt-space-sm border border-surface-container-highest">
            <div className="flex items-center gap-space-xs mb-space-md">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                CREATIVE VECTOR CHANNELS / 創作方向
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              <div className="p-space-md bg-surface-container-high rounded-lg flex flex-col justify-between border border-surface-container-highest">
                <div>
                  <span className="font-label-mono text-label-mono text-secondary mb-space-xs block">VECTOR // A</span>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Procedural 3D Aesthetics</h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Subdivision modeling, Houdini procedural nodes, intricate photorealistic surfacing.</p>
                </div>
                <span className="mt-space-md font-label-mono text-label-mono text-on-surface-variant">C4D / OCTANE / BLENDER</span>
              </div>
              <div className="p-space-md bg-surface-container-high rounded-lg flex flex-col justify-between border border-surface-container-highest">
                <div>
                  <span className="font-label-mono text-label-mono text-primary mb-space-xs block">VECTOR // B</span>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Avant-Garde Typography</h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Editorial systems, structural bilingual typesetting, bespoke display letterforms.</p>
                </div>
                <span className="mt-space-md font-label-mono text-label-mono text-on-surface-variant">GLYPHS / SWISS GRID</span>
              </div>
              <div className="p-space-md bg-surface-container-high rounded-lg flex flex-col justify-between border border-surface-container-highest">
                <div>
                  <span className="font-label-mono text-label-mono text-secondary mb-space-xs block">VECTOR // C</span>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Kinetic Identities</h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Dynamic motion systems, procedural brand behaviors, liquid physics branding.</p>
                </div>
                <span className="mt-space-md font-label-mono text-label-mono text-on-surface-variant">AFTER EFFECTS / TOUCHDESIGNER</span>
              </div>
              <div className="p-space-md bg-surface-container-high rounded-lg flex flex-col justify-between border border-surface-container-highest">
                <div>
                  <span className="font-label-mono text-label-mono text-primary mb-space-xs block">VECTOR // D</span>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Real-Time Spatial Displays</h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Interactive projection mapping, architectural LED tunnels, immersive canvas rigs.</p>
                </div>
                <span className="mt-space-md font-label-mono text-label-mono text-on-surface-variant">UNREAL ENGINE 5 / WEBGL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background & Milestones */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop">
          {/* Left Title & Summary */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                TRACK RECORD
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mt-space-xs mb-space-md">
                Professional Background / 經歷里程碑
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                8+ years directing visual narratives and spatial branding across cutting-edge digital ateliers, design agencies, and global technology partnerships.
              </p>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-xl border border-surface-container-highest">
              <span className="font-label-caps text-label-caps text-secondary uppercase block mb-space-xs">
                EXHIBITIONS &amp; ACCREDITATIONS
              </span>
              <ul className="space-y-space-xs font-label-mono text-label-mono text-on-surface-variant">
                <li className="flex items-center justify-between">
                  <span>[2024] Ars Electronica Nominee</span> <span className="text-primary">Linz, AT</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>[2023] Tokyo Digital Art Salon</span> <span className="text-primary">Tokyo, JP</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>[2022] Taipei Digital Art Fest</span> <span className="text-primary">Taipei, TW</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>[2021] Awwwards Site of The Day</span> <span className="text-primary">Online</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Timeline Stream */}
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            {MILESTONES.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low hover:bg-surface-container p-space-lg rounded-xl shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-space-md border border-surface-container-highest"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-space-sm mb-space-xs">
                    {item.isCurrent && (
                      <span className="px-space-xs py-0.5 rounded bg-primary-container/20 text-primary-container font-label-caps text-label-caps border border-primary-container/40">
                        PRESENT
                      </span>
                    )}
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    {item.role}
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary mb-space-xs">
                    {item.company}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
                <div className="font-label-mono text-label-mono text-on-surface-variant shrink-0">
                  {item.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirations & Studio Equipment Matrix */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl bg-surface-container-lowest border-t border-surface-container-high/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop">
          {/* Inspirations */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="material-symbols-outlined text-secondary text-headline-sm">neurology</span>
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
                INSPIRATIONS / 靈感之源
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-space-md">
              Subcultures &amp; Cross-Disciplines
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
              Ideas germinate at the collision of raw architectural gravity, mechanical horology, and synthesis frequencies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm border border-surface-container-highest">
                <span className="material-symbols-outlined text-primary-container text-headline-sm">apartment</span>
                <div>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface text-body-md">Brutalist Architecture</h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Raw concrete textures, monolithic scale, geometric permanence.</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm border border-surface-container-highest">
                <span className="material-symbols-outlined text-secondary text-headline-sm">precision_manufacturing</span>
                <div>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface text-body-md">Mechanical Watchmaking</h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Tourbillon escapements, gear meshing, horological micro-engineering.</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm border border-surface-container-highest">
                <span className="material-symbols-outlined text-primary text-headline-sm">equalizer</span>
                <div>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface text-body-md">Modular Synthesis</h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Eurorack control voltages, harmonic distortion, patch cable tactile loops.</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm border border-surface-container-highest">
                <span className="material-symbols-outlined text-secondary text-headline-sm">movie_filter</span>
                <div>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface text-body-md">Sci-Fi &amp; Cyberpunk</h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Dark retrofuturism, neo-noir luminance, speculative hardware interfaces.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Workstation Rig Deck */}
          <div className="lg:col-span-6 flex flex-col justify-between mt-space-lg lg:mt-0">
            <div>
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="material-symbols-outlined text-primary-container text-headline-sm">memory</span>
                <span className="font-label-caps text-label-caps text-primary-container tracking-widest uppercase">
                  HARDWARE RIG / 創作環境
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-space-md">
                Workstation &amp; Compute Spec
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                Engineered for uncompromised real-time viewport simulation, 8K multi-UDIM rendering, and fluid pen tracking.
              </p>
            </div>

            <div className="bg-surface-container p-space-lg rounded-xl shadow-xl space-y-space-md border border-surface-container-highest">
              <div className="flex items-center justify-between pb-space-sm bg-surface-container-high/40 p-space-sm rounded border border-surface-container-high">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-headline-sm">desktop_windows</span>
                  <div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">PRIMARY WORKSTATION</span>
                    <span className="font-body-md text-body-md text-on-surface font-semibold">AMD Threadripper PRO 5975WX // 128GB ECC</span>
                  </div>
                </div>
                <span className="font-label-mono text-label-mono text-primary font-bold">64 THREADS</span>
              </div>

              <div className="flex items-center justify-between pb-space-sm bg-surface-container-high/40 p-space-sm rounded border border-surface-container-high">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-headline-sm">developer_board</span>
                  <div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">GPU ACCELERATION</span>
                    <span className="font-body-md text-body-md text-on-surface font-semibold">Dual NVIDIA RTX 4090 (48GB Total VRAM)</span>
                  </div>
                </div>
                <span className="font-label-mono text-label-mono text-secondary font-bold">CUDA / OPTIX</span>
              </div>

              <div className="flex items-center justify-between pb-space-sm bg-surface-container-high/40 p-space-sm rounded border border-surface-container-high">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-headline-sm">draw</span>
                  <div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">SURFACE INPUT</span>
                    <span className="font-body-md text-body-md text-on-surface font-semibold">Wacom Cintiq Pro 27 &amp; Color Calibrated DCI-P3 4K</span>
                  </div>
                </div>
                <span className="font-label-mono text-label-mono text-primary-fixed-dim font-bold">99% ADOBE RGB</span>
              </div>

              <div className="flex items-center justify-between bg-surface-container-high/40 p-space-sm rounded border border-surface-container-high">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-tertiary-fixed text-headline-sm">dns</span>
                  <div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">DISTRIBUTED LOCAL CLUSTER</span>
                    <span className="font-body-md text-body-md text-on-surface font-semibold">10GbE Synology NAS (120TB RAID-6 Array)</span>
                  </div>
                </div>
                <span className="font-label-mono text-label-mono text-on-surface-variant font-bold">NVME CACHE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Horizon CTA */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-space-lg md:p-space-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg border border-surface-container-highest">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                READY FOR HIGH-DIMENSION PROJECTS
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-space-xs">
              Let's collaborate on your next vision
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Available for selected visionary commissions, spatial visual identity, and technical art direction worldwide.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap items-center gap-space-md shrink-0">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase hover:shadow-[0_0_24px_rgba(0,240,255,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-space-xs"
            >
              <span>Initiate Contact</span>
              <span className="material-symbols-outlined text-body-xl">arrow_forward</span>
            </button>
            <button
              onClick={() => alert("CV download is prepared in PDF format.")}
              className="px-space-md py-space-sm rounded-lg bg-surface-container-highest text-on-surface hover:text-primary hover:bg-surface-bright transition-all font-body-md text-body-md flex items-center gap-space-xs border border-surface-container-high"
            >
              <span className="material-symbols-outlined text-body-md">download</span>
              <span>Download CV [PDF]</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
