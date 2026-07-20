import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation helpers for the website

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Fade in element on scroll
 */
export function fadeInOnScroll(
  selector: string,
  options?: {
    duration?: number;
    delay?: number;
    y?: number;
    x?: number;
    stagger?: number;
  }
) {
  const {
    duration = 1,
    delay = 0,
    y = 30,
    x = 0,
    stagger = 0,
  } = options || {};

  gsap.fromTo(
    selector,
    { opacity: 0, y, x },
    {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      stagger,
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/**
 * Staggered card reveal on scroll
 */
export function staggerReveal(
  selector: string,
  options?: {
    duration?: number;
    delay?: number;
    y?: number;
    stagger?: number;
  }
) {
  const { duration = 0.8, delay = 0, y = 40, stagger = 0.15 } = options || {};

  gsap.fromTo(
    selector,
    { opacity: 0, y, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/**
 * Counter animation on scroll
 */
export function animateCounter(
  selector: string,
  endValue: number,
  options?: {
    duration?: number;
    prefix?: string;
    suffix?: string;
  }
) {
  const { duration = 2, prefix = "", suffix = "" } = options || {};

  const obj = { value: 0 };

  gsap.to(obj, {
    value: endValue,
    duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    onUpdate: () => {
      const el = document.querySelector(selector);
      if (el) {
        el.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
      }
    },
  });
}

/**
 * Progressive line coloring for "Why Choose Us" section
 * with mobile optimization
 */
export function setupWhyChooseUsAnimation() {
  const section = document.querySelector(".why-choose-us");
  if (!section) return;

  // Check for reduced motion preference
  if (prefersReducedMotion()) {
    // Show all elements immediately without animation
    gsap.set(".benefit-item", { opacity: 1, x: 0 });
    gsap.set(".progress-line", { background: "#587FFF" });
    return;
  }

  // Use matchMedia for responsive animations
  ScrollTrigger.matchMedia({
    // Desktop and tablet: pin with progressive line
    "(min-width: 768px)": function () {
      // Pin the section during scroll
      ScrollTrigger.create({
        trigger: section as gsap.DOMTarget,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: true,
      });

      // Animate numbered items
      gsap.utils.toArray(".benefit-item").forEach((item) => {
        gsap.fromTo(
          item as gsap.TweenTarget,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item as gsap.DOMTarget,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      });

      // Progressive line coloring
      gsap.to(".progress-line", {
        background: "#587FFF",
        scrollTrigger: {
          trigger: section as gsap.DOMTarget,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    },
    // Mobile: simple scroll-triggered animations
    "(max-width: 767px)": function () {
      // No pinning on mobile, just fade in items
      gsap.utils.toArray(".benefit-item").forEach((item, i) => {
        gsap.fromTo(
          item as gsap.TweenTarget,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.15,
            scrollTrigger: {
              trigger: item as gsap.DOMTarget,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Show progress line immediately on mobile
      gsap.set(".progress-line", { background: "#587FFF" });
    },
  });
}

/**
 * Parallax effect for hero section
 */
export function parallaxHero(selector: string, speed: number = 0.3) {
  gsap.to(selector, {
    y: () => -window.innerHeight * speed,
    ease: "none",
    scrollTrigger: {
      trigger: selector,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

/**
 * Initialize all animations with mobile optimization
 */
export function initAnimations() {
  // Check for reduced motion preference
  if (prefersReducedMotion()) {
    // Show all elements immediately without animation
    gsap.set(".hero-content h1, .hero-content p, .hero-content .cta-button, .hero-stats .stat-item", {
      opacity: 1,
      y: 0,
    });
    gsap.set(".product-card, .industry-card", { opacity: 1, y: 0, scale: 1 });
    gsap.set(".cta-section-content", { opacity: 1, y: 0 });
    return;
  }

// Hero animations
  gsap.fromTo(
    ".hero-content h1",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.2,
      ease: "power2.out",
    }
  );

  gsap.fromTo(
    ".hero-content p",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    }
  );

  gsap.fromTo(
    ".hero-content .cta-button",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.8,
      ease: "power2.out",
    }
  );

  gsap.fromTo(
    ".hero-stats .stat-item",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      delay: 1,
      ease: "power2.out",
    }
  );

  // Products section
  staggerReveal(".product-card", { stagger: 0.12 });

  // Industries section
  staggerReveal(".industry-card", { stagger: 0.15 });

  // Why Choose Us
  setupWhyChooseUsAnimation();

  // CTA section
  fadeInOnScroll(".cta-section-content", { y: 30, duration: 1 });
}
