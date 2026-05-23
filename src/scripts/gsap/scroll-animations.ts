import { gsap, ScrollTrigger, prefersReducedMotion } from "./init";

export function initScrollAnimations() {
  if (prefersReducedMotion) {
    gsap.set(".section-animate, .project-card, .skill-item", { opacity: 1 });
    return;
  }

  gsap.utils.toArray<HTMLElement>(".section-animate").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  const projectCards = gsap.utils.toArray<HTMLElement>(".project-card");
  if (projectCards.length > 0) {
    gsap.from(projectCards, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }

  const skillItems = gsap.utils.toArray<HTMLElement>(".skill-item");
  if (skillItems.length > 0) {
    gsap.from(skillItems, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }
}

export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}
