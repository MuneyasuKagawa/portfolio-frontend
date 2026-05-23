import { gsap, prefersReducedMotion } from "./init";

export function animateHero() {
  if (prefersReducedMotion) {
    gsap.set(".hero-text, .hero-subtitle, .hero-cta", { opacity: 1 });
    return;
  }

  const tl = gsap.timeline();

  tl.from(".hero-text", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })
    .from(
      ".hero-subtitle",
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .from(
      ".hero-cta",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      },
      "-=0.3"
    );

  return tl;
}
