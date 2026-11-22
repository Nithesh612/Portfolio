"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import 'lenis/dist/lenis.css';

function LenisRouteHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      if (typeof window !== "undefined") {
        window.lenis = lenis;
      }

      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash;
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            lenis.scrollTo(target, { offset: -70, immediate: false });
          }, 200);
          return;
        }
      }

      lenis.scrollTo(0, { immediate: true });
      const timer = setTimeout(() => {
        lenis.resize();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <LenisRouteHandler />
      {children}
    </ReactLenis>
  );
}
