import { useEffect } from 'react';

/**
 * Reveal elements with a simple fade+slide animation when they enter the viewport.
 * This replaces DOM-based "scroll animation" code from plain JS with a React hook.
 */
export default function useRevealOnScroll(selector, options = {}) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;

    // Initial state
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      },
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, options]);
}

