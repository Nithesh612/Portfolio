'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAllScripts } from '@/app/SmoothScroll/page';

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasWrapper = !!document.getElementById('smooth-wrapper');
      if (!hasWrapper && window.ScrollSmoother) {
        try {
          const smoother = window.ScrollSmoother.get();
          if (smoother) smoother.kill();
        } catch (e) {}
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        document.body.style.height = "auto";
        document.documentElement.style.height = "auto";
      }
    }
    initAllScripts();
  }, [pathname]);

  return null;
}
