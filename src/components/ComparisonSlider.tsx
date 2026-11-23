import React, { useState, useRef, useEffect, useCallback } from 'react';

export const ComparisonSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percentage = (offsetX / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      updatePosition(e.clientX);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      if (e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [updatePosition]);

  return (
    <div className="flex flex-col gap-space-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div>
          <span className="font-label-mono text-label-mono text-primary uppercase">
            05 // INTERACTIVE INSPECTION
          </span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mt-space-xs">
            WIREFRAME CLAY VS. FINAL RAYTRACED SHADER
          </h3>
        </div>
        <div className="flex items-center gap-space-xs text-on-surface-variant font-label-mono text-label-mono">
          <span className="material-symbols-outlined text-primary-fixed-dim text-sm">swipe</span>
          <span>DRAG SLIDER HORIZONTALLY TO COMPARE</span>
        </div>
      </div>

      {/* Comparison Slider Component */}
      <div
        ref={containerRef}
        className="relative w-full h-[520px] rounded-xl overflow-hidden shadow-2xl select-none bg-surface-container-lowest border border-surface-container-highest cursor-ew-resize"
        onMouseDown={(e) => {
          isDraggingRef.current = true;
          updatePosition(e.clientX);
        }}
        onTouchStart={(e) => {
          isDraggingRef.current = true;
          if (e.touches[0]) updatePosition(e.touches[0].clientX);
        }}
      >
        {/* Background Layer: Final Rendered Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAznH5aZTU3Y4b8fafD1HCt5Kjk41qsEWS2G3LTltW1szNwg7S8ZzCEiSwqW_NDAWdmPhL8fWBu_lHmz_-xZr4HH9x7bJM-ECy5WNLB1BOuyA5b9w-g8ux4CfTs9jUQeaSywMoRAvip5kjfccYVSpCuSIwSdzWv-eoD8IwmGJhkmQ04TUByUUl3FVAke4uh2_JqXWTR9_2ZlCFIJNAsllHN974Kivvc3xXWteDNraU')`,
          }}
        >
          <div className="absolute top-space-md right-space-md bg-surface-container-lowest/80 px-space-md py-space-xs rounded-full font-label-caps text-label-caps text-primary shadow-md backdrop-blur-md">
            FINAL RAYTRACED (OCTANE X)
          </div>
        </div>

        {/* Foreground Layer (Clipped): Wireframe Clay Render */}
        <div
          className="absolute inset-0 h-full overflow-hidden border-r-0 pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center min-w-[100vw] lg:min-w-full"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWhFDM8SlXKXMTmSGpooQq9f019cfOxzBJYsiXbOe6K8ZKmRNMrI2if0_JZeePtcHGx637me0DC1tGocNHgZilR9q_9AMfKYzqFsEfQnOpP2jHMXZTSlNRLw1zt5RUplsBwpp6ENYk3hRT_LAeyPwYm3NclPEBT-M-YD_2UjUC0cH2nO2KMLdLm7JBwQVpPmsxFC-12DrK4eSkqA3osKiT6CVBsEY5Y7XiT5BkYSs')`,
            }}
          >
            <div className="absolute top-space-md left-space-md bg-surface-container-lowest/80 px-space-md py-space-xs rounded-full font-label-caps text-label-caps text-secondary shadow-md backdrop-blur-md">
              WIREFRAME CLAY TOPOLOGY
            </div>
          </div>
        </div>

        {/* Draggable Handle Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize flex items-center justify-center -ml-0.5 shadow-[0_0_16px_rgba(0,240,255,0.6)] z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg transition-transform hover:scale-110">
            <span className="material-symbols-outlined text-sm font-bold">drag_handle</span>
          </div>
        </div>
      </div>

      {/* Telemetry Bar */}
      <div className="w-full bg-surface-container-high p-space-sm rounded-lg flex flex-wrap items-center justify-between gap-space-sm font-label-mono text-label-mono text-on-surface-variant">
        <div className="flex items-center gap-space-md">
          <span>GEOMETRY: <strong className="text-on-surface">SUB-D QUAD MESH</strong></span>
          <span className="w-1 h-1 rounded-full bg-outline"></span>
          <span>SAMPLES: <strong className="text-on-surface">16,384 SPP</strong></span>
          <span className="w-1 h-1 rounded-full bg-outline"></span>
          <span>DENOISER: <strong className="text-on-surface">OCTANE SPECTRAL AI</strong></span>
        </div>
        <div className="text-primary font-bold">
          CONVERGENCE: 99.89%
        </div>
      </div>
    </div>
  );
};
