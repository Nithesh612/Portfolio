'use client';

/**
 * Common entry point to initialize all vendor libraries,
 * GSAP plugins, and custom animation scripts in correct sequence.
 */
export async function initAllScripts() {
  if (typeof window === 'undefined') return;

  try {
    // Phase 1: Load jQuery & all GSAP core modules in parallel
    const [
      jq,
      gsapModule,
      scrollTriggerModule,
      scrollSmootherModule,
      scrollToModule,
      splitTextModule,
    ] = await Promise.all([
      import('jquery'),
      import('./gsap/gsap.js'),
      import('./gsap/gsap-scroll-trigger.js'),
      import('./gsap/gsap-scroll-smoother.js'),
      import('./gsap/gsap-scroll-to-plugin.js'),
      import('./gsap/gsap-split-text.js'),
      import('./gsap/chroma.min.js'),
    ]);

    // Setup global window properties
    window.$ = window.jQuery = jq.default || jq;
    window.gsap = gsapModule.default || gsapModule.gsap || window.gsap;
    window.ScrollTrigger = scrollTriggerModule.default || scrollTriggerModule.ScrollTrigger || window.ScrollTrigger;
    window.ScrollSmoother = scrollSmootherModule.default || scrollSmootherModule.ScrollSmoother || window.ScrollSmoother;
    window.ScrollToPlugin = scrollToModule.default || scrollToModule.ScrollToPlugin || window.ScrollToPlugin;
    window.SplitText = splitTextModule.default || splitTextModule.SplitText || window.SplitText;

    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(
        window.ScrollTrigger,
        window.ScrollSmoother,
        window.ScrollToPlugin,
        window.SplitText
      );
      window.gsap.config({ nullTargetWarn: false });
    }

    // Phase 2: Load all vendor libraries in parallel
    const [
      swiperModule,
      pureCounterModule,
      aosModule,
    ] = await Promise.all([
      import('./gsap2/swiper-bundle.min.js'),
      import('./gsap2/purecounter.js'),
      import('./gsap2/aos.js'),
      import('./gsap2/boostrap.bundle.min.js'),
      import('./gsap2/jquery.marquee.min.js'),
      import('./gsap2/magnific-popup.min.js'),
      import('./gsap2/phosphor-icon.js'),
    ]);

    window.Swiper = swiperModule.default || swiperModule.Swiper || window.Swiper;
    window.PureCounter = pureCounterModule.default || pureCounterModule.PureCounter || window.PureCounter;
    window.AOS = aosModule.default || aosModule.AOS || window.AOS;

    // Phase 3: Load & run custom animation and interaction scripts
    await Promise.all([
      import('./gsap2/tw-cursor.js'),
      import('../landing-page/Services/slider-active.js'),
      import('../landing-page/main.js'),
      import('./gsap2/custom-gsap.js'),
    ]);

    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
      requestAnimationFrame(() => {
        window.ScrollTrigger?.refresh();
      });
    }
  } catch (error) {
    console.error('Error initializing scripts:', error);
  }
}

export default function SmoothScrollPage() {
  return null;
}
