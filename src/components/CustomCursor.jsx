import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer fine devices (desktops)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const clickable = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsPointer(!!clickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out shadow-[0_0_10px_#22d3ee]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      {/* Outer Halo */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/40 pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isPointer ? 1.4 : 1})`,
          backgroundColor: isPointer ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
          borderColor: isPointer ? 'rgba(34, 211, 238, 0.8)' : 'rgba(56, 189, 248, 0.3)',
        }}
      />
    </>
  );
}
