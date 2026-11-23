import React, { useState, useEffect, useRef } from 'react';

export const Turntable3D: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isAutoOrbit, setIsAutoOrbit] = useState(true);
  const [isWireframe, setIsWireframe] = useState(false);
  const [fps, setFps] = useState('60.0');

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const animFrameRef = useRef<number>();

  // Continuous auto-orbit animation
  useEffect(() => {
    const loop = () => {
      if (isAutoOrbit && !isDraggingRef.current) {
        setRotation((prev) => (prev + 0.25) % 360);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };
    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isAutoOrbit]);

  // Live FPS Jitter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const jitter = (59.4 + Math.random() * 0.9).toFixed(1);
      setFps(jitter);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    setIsAutoOrbit(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    startXRef.current = e.clientX;
    setRotation((prev) => (prev + deltaX * 0.5) % 360);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="w-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl relative flex flex-col min-h-[580px] border border-surface-container-highest">
      {/* Top HUD Telemetry Ribbon */}
      <div className="w-full bg-surface-container-low/90 backdrop-blur-md px-space-md py-space-sm flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono z-20 border-b border-surface-container-high/40">
        <div className="flex items-center gap-space-sm flex-wrap">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
          <span className="text-on-surface font-bold uppercase">VIEWPORT: PERSPECTIVE (50MM)</span>
          <span className="text-outline">|</span>
          <span>FPS: <strong className="text-primary">{fps}</strong></span>
          <span className="text-outline">|</span>
          <span>VERTS: <strong className="text-on-surface">1,842,910</strong></span>
        </div>
        <div className="hidden sm:flex items-center gap-space-sm">
          <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface">SHADING: PBR METALLIC-ROUGH</span>
          <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface">AA: FXAA 4X</span>
        </div>
      </div>

      {/* Central Interactive Canvas Stage */}
      <div
        className="relative flex-1 w-full min-h-[460px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-center transition-transform duration-100 ease-out pointer-events-none"
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            filter: isWireframe ? 'invert(1) hue-rotate(180deg) contrast(150%)' : 'none',
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2rtw8xDlSJzyMKOCYNa2RtO33IOL5oSpKjMdCK9NDC6ytZpq2I42Tdl2agKg1OIfQ6xdfcqvF2pDShb74MkbXsanLo3hngfvtrHZYEV4uJLQLcuJJJ3-D62qBFEAoXNen_O9MtusyucqgCofv2Ku7V72hrE1lIC8cuGx5zBpBozD0v_hS77ptk5NtqQ5lGD_xQoYVhoVMSxMCF_i1WlAHiCLTmdP3RnicEETAe_w')`,
          }}
        />

        {/* Spatial Grid Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-comp" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-outline" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-comp)" />
          <circle cx="50%" cy="50%" r="180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,6" className="text-primary/40" />
          <circle cx="50%" cy="50%" r="240" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2,8" className="text-secondary/30" />
        </svg>

        {/* Hotspot Annotation 1 */}
        <div className="absolute top-[38%] left-[45%] flex items-center gap-space-xs group pointer-events-auto cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-[10px] font-bold shadow-[0_0_12px_rgba(0,240,255,0.8)]">
            1
          </div>
          <div className="bg-surface-container-highest/90 backdrop-blur-md px-space-sm py-space-xs rounded text-on-surface font-label-mono text-label-mono shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            Flying Tourbillon Cage (Grade 5 Ti)
          </div>
        </div>

        {/* Hotspot Annotation 2 */}
        <div className="absolute bottom-[35%] right-[38%] flex items-center gap-space-xs group pointer-events-auto cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-secondary-container text-secondary flex items-center justify-center text-[10px] font-bold shadow-[0_0_12px_rgba(220,184,255,0.8)]">
            2
          </div>
          <div className="bg-surface-container-highest/90 backdrop-blur-md px-space-sm py-space-xs rounded text-on-surface font-label-mono text-label-mono shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            Sapphire Planetary Ring Gear
          </div>
        </div>
      </div>

      {/* Floating Viewport Controls Toolbar */}
      <div className="absolute bottom-space-md left-1/2 -translate-x-1/2 bg-surface-container-high/90 backdrop-blur-xl px-space-md py-space-xs rounded-full shadow-2xl flex items-center gap-space-sm z-30 border border-surface-container-highest">
        <button
          onClick={() => setIsAutoOrbit(!isAutoOrbit)}
          className={`flex items-center gap-space-xs px-space-sm py-space-xs rounded-full font-label-caps text-label-caps transition-colors ${
            isAutoOrbit
              ? 'bg-primary-container text-on-primary-container'
              : 'bg-surface-container-highest hover:bg-surface-container text-on-surface'
          }`}
          title="Toggle Auto-Orbit"
        >
          <span className="material-symbols-outlined text-sm">360</span>
          <span>{isAutoOrbit ? 'AUTO-ORBIT: ON' : 'AUTO-ORBIT: PAUSED'}</span>
        </button>

        <div className="h-4 w-px bg-surface-container-highest"></div>

        <button
          onClick={() => setIsWireframe(!isWireframe)}
          className={`flex items-center gap-space-xs px-space-sm py-space-xs rounded-full font-label-caps text-label-caps transition-colors ${
            isWireframe
              ? 'bg-secondary-container text-on-secondary-container'
              : 'bg-surface-container-highest hover:bg-surface-container text-on-surface'
          }`}
          title="Toggle Wireframe Mode"
        >
          <span className="material-symbols-outlined text-sm">grid_4x4</span>
          <span>WIREFRAME</span>
        </button>

        <div className="h-4 w-px bg-surface-container-highest"></div>

        <button
          onClick={() => setScale((prev) => Math.min(prev + 0.15, 2.2))}
          className="w-8 h-8 rounded-full bg-surface-container-highest hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors"
          title="Zoom In"
        >
          <span className="material-symbols-outlined text-sm">add</span>
        </button>

        <button
          onClick={() => setScale((prev) => Math.max(prev - 0.15, 0.7))}
          className="w-8 h-8 rounded-full bg-surface-container-highest hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors"
          title="Zoom Out"
        >
          <span className="material-symbols-outlined text-sm">remove</span>
        </button>

        <button
          onClick={() => {
            setScale(1);
            setRotation(0);
          }}
          className="w-8 h-8 rounded-full bg-surface-container-highest hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors"
          title="Reset View"
        >
          <span className="material-symbols-outlined text-sm">restart_alt</span>
        </button>
      </div>
    </div>
  );
};
