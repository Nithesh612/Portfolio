'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAllScripts } from '@/app/SmoothScroll/page';

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    initAllScripts();
  }, [pathname]);

  return null;
}
