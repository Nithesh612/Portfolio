'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    // Import jQuery first since other scripts depend on it
    const loadScripts = async () => {
      try {
        // We import the npm jquery so plugins attach to the correct instance
        const jq = await import('jquery');
        window.$ = window.jQuery = jq.default || jq;

        // Import GSAP and attach it to window
        const gsapModule = await import('./js/gsap/gsap.js');
        window.gsap = gsapModule.default || gsapModule.gsap || window.gsap;
        
        const scrollTriggerModule = await import('./js/gsap/gsap-scroll-trigger.js');
        window.ScrollTrigger = scrollTriggerModule.default || scrollTriggerModule.ScrollTrigger || window.ScrollTrigger;
        
        const scrollSmootherModule = await import('./js/gsap/gsap-scroll-smoother.js');
        window.ScrollSmoother = scrollSmootherModule.default || scrollSmootherModule.ScrollSmoother || window.ScrollSmoother;
        
        const scrollToModule = await import('./js/gsap/gsap-scroll-to-plugin.js');
        window.ScrollToPlugin = scrollToModule.default || scrollToModule.ScrollToPlugin || window.ScrollToPlugin;
        
        const splitTextModule = await import('./js/gsap/gsap-split-text.js');
        window.SplitText = splitTextModule.default || splitTextModule.SplitText || window.SplitText;
        
        // Register plugins globally!
        window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother, window.ScrollToPlugin, window.SplitText);
        window.gsap.config({ nullTargetWarn: false });
        
        await import('./js/gsap/chroma.min.js');

        // Import other vendor scripts and attach them if needed
        await import('./js/boostrap.bundle.min.js');
        
        const swiperModule = await import('./js/swiper-bundle.min.js');
        window.Swiper = swiperModule.default || swiperModule.Swiper || window.Swiper;
        
        await import('./js/jquery.marquee.min.js');
        await import('./js/magnific-popup.min.js');
        
        const pureCounterModule = await import('./js/purecounter.js');
        window.PureCounter = pureCounterModule.default || pureCounterModule.PureCounter || window.PureCounter;
        
        await import('./js/tw-cursor.js');
        await import('./js/phosphor-icon.js');
        
        const aosModule = await import('./js/aos.js');
        window.AOS = aosModule.default || aosModule.AOS || window.AOS;
        
        await import('./js/slider-active.js');
        
        // Import custom scripts
        await import('./js/main.js');
        await import('./js/custom-gsap.js');

        if (window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }

        console.log('All custom scripts loaded successfully!');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();
  }, [pathname]);

  return null;
}
