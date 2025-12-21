# Tasks Document

## Phase 1: Project Setup

- [x] 1. Initialize Astro project

  - Create new Astro project with TypeScript
  - Configure astro.config.mjs with i18n and static output
  - Set up project structure as defined in design.md
  - _Leverage: None (new project)_
  - _Requirements: All_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Astro Developer specializing in project setup | Task: Initialize new Astro project with TypeScript, configure i18n (en/ja), static output, and create the folder structure defined in design.md | Restrictions: Do not install React or any UI framework, use Astro native components only, follow exact folder structure from design.md | Success: Project builds successfully, i18n routing works (/ja/ prefix), folder structure matches design.md | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion with all created files, then mark as [x]_

- [x] 2. Set up Tailwind CSS v4

  - File: src/styles/global.css, tailwind.config.mjs
  - Install and configure Tailwind CSS with Vite plugin
  - Define CSS variables for theming (light/dark)
  - Configure custom colors and fonts
  - _Leverage: design.md CSS Variables section_
  - _Requirements: NFR-Performance_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: CSS Developer specializing in Tailwind CSS | Task: Set up Tailwind CSS v4 with Vite plugin, create global.css with CSS variables for light/dark themes, configure tailwind.config.mjs with custom colors and fonts from design.md | Restrictions: No `<style>` tags allowed, use @import 'tailwindcss' syntax, follow exact color tokens from design.md | Success: Tailwind classes work, dark mode toggles via .dark class, fonts load correctly | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [x] 3. Install and configure dependencies
  - File: package.json
  - Install GSAP, Three.js, and required Astro integrations
  - Configure TypeScript strict mode
  - Set up ESLint and Prettier
  - _Leverage: Current project's ESLint/Prettier config_
  - _Requirements: NFR-Code Architecture_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: DevOps Engineer specializing in JavaScript tooling | Task: Install gsap, three, @types/three, configure TypeScript strict mode in tsconfig.json, set up ESLint and Prettier with existing config patterns | Restrictions: Do not install React-related packages, keep dependencies minimal | Success: All packages install without errors, TypeScript compiles in strict mode, lint/format scripts work | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

## Phase 2: Core Infrastructure

- [ ] 4. Create BaseLayout component

  - File: src/layouts/BaseLayout.astro
  - Implement base HTML structure with View Transitions
  - Add meta tags, SEO configuration, and structured data
  - Include theme initialization script
  - _Leverage: Current app/layout.tsx metadata_
  - _Requirements: 8, NFR-SEO_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Astro Developer specializing in layouts | Task: Create BaseLayout.astro with View Transitions (ClientRouter), meta tags from current layout.tsx, SEO structured data, theme initialization script for dark mode | Restrictions: Use Astro native syntax only, no React, include suppressHydrationWarning equivalent | Success: Layout renders with correct meta tags, View Transitions enabled, theme persists on reload | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 5. Implement i18n utility functions

  - File: src/i18n/utils.ts, src/i18n/en.json, src/i18n/ja.json
  - Create useTranslation helper function
  - Create getLocaleFromUrl helper
  - Migrate and brush up translation files
  - _Leverage: Current locales/en.json, locales/ja.json_
  - _Requirements: 2_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: i18n Specialist | Task: Create i18n utility functions (useTranslation, getLocaleFromUrl) in TypeScript, migrate translations from current locales/\*.json, brush up Japanese text for more natural expressions | Restrictions: Type-safe implementation, return key as fallback for missing translations | Success: Translation helper works with dot notation keys, Japanese text sounds natural, TypeScript types are correct | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 6. Create ThemeToggle component

  - File: src/components/common/ThemeToggle.astro
  - Implement light/dark theme switching
  - Add localStorage persistence
  - Respect system preference (prefers-color-scheme)
  - _Leverage: Current components/theme-toggle.tsx logic_
  - _Requirements: 8_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Frontend Developer specializing in theming | Task: Create ThemeToggle.astro component with sun/moon icons, localStorage persistence, system preference detection using prefers-color-scheme | Restrictions: Use inline script for theme initialization to prevent flash, Tailwind classes only | Success: Theme toggles correctly, persists on reload, respects system preference on first visit | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 7. Create LanguageToggle component
  - File: src/components/common/LanguageToggle.astro
  - Implement language switching UI
  - Handle URL-based locale switching
  - _Leverage: Current components/language-toggle.tsx_
  - _Requirements: 2_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Frontend Developer | Task: Create LanguageToggle.astro component that switches between /en and /ja URLs, shows current language, uses Astro's getRelativeLocaleUrl | Restrictions: Use Tailwind classes only, ensure proper a11y with aria-label | Success: Language switches correctly, URL updates, current language is highlighted | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

## Phase 3: GSAP and Three.js Setup

- [ ] 8. Set up GSAP initialization

  - File: src/scripts/gsap/init.ts
  - Register GSAP plugins (ScrollTrigger)
  - Add prefers-reduced-motion check
  - Export configured GSAP instance
  - _Leverage: design.md GSAP Initialization section_
  - _Requirements: 4, NFR-Usability_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Animation Developer specializing in GSAP | Task: Create GSAP initialization module, register ScrollTrigger plugin, implement prefers-reduced-motion check, export configured gsap and ScrollTrigger | Restrictions: Check reduced motion before any animation, make exports tree-shakeable | Success: GSAP initializes correctly, ScrollTrigger registered, reduced motion disables animations | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 9. Create Three.js hero scene

  - File: src/scripts/three/hero-scene.ts
  - Implement TorusKnot geometry with wireframe material
  - Add mouse tracking interaction
  - Include resize handler and cleanup function
  - _Leverage: design.md Three.js Scene section_
  - _Requirements: 3_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: WebGL Developer specializing in Three.js | Task: Create hero-scene.ts with TorusKnot geometry, wireframe material (primary color), mouse tracking, resize handler, proper cleanup function for memory management | Restrictions: Use alpha: true for transparent background, implement cleanup to prevent memory leaks | Success: 3D object renders, follows mouse, resizes correctly, no memory leaks on cleanup | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 10. Create GSAP hero animations

  - File: src/scripts/gsap/hero-animations.ts
  - Implement text reveal animation
  - Add staggered subtitle animation
  - Respect reduced motion preference
  - _Leverage: design.md Hero Animation section_
  - _Requirements: 4_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Animation Developer | Task: Create hero-animations.ts with text reveal (y: 100, opacity: 0), staggered subtitle animation, check prefersReducedMotion before animating | Restrictions: Use gsap.set() for reduced motion fallback, follow exact easing from design.md | Success: Hero text animates on load, respects reduced motion, smooth power4.out easing | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 11. Create GSAP scroll animations
  - File: src/scripts/gsap/scroll-animations.ts
  - Implement section fade-in on scroll
  - Add project cards stagger animation
  - Add skills reveal animation
  - _Leverage: design.md Animation Strategy section_
  - _Requirements: 4, 6_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Animation Developer | Task: Create scroll-animations.ts with ScrollTrigger-based section fade-in, project cards stagger (0.2s), skills reveal with back.out easing | Restrictions: Use toggleActions for reversible animations, respect reduced motion | Success: Sections animate on scroll, cards stagger correctly, skills pop in with bounce | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

## Phase 4: Common Components

- [ ] 12. Create Header component

  - File: src/components/common/Header.astro
  - Implement navigation with logo
  - Include ThemeToggle and LanguageToggle
  - Add responsive mobile menu
  - _Leverage: Current components/header.tsx_
  - _Requirements: 2, 8_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Frontend Developer | Task: Create Header.astro with logo, navigation links (About, Projects, Skills, Contact), ThemeToggle, LanguageToggle, responsive hamburger menu for mobile | Restrictions: Tailwind classes only, use semantic HTML (nav, ul, li), proper a11y | Success: Header renders correctly, navigation works, mobile menu toggles, theme/language switches work | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 13. Create Footer component

  - File: src/components/common/Footer.astro
  - Implement footer with social links
  - Add copyright and credits
  - _Leverage: Current components/footer.tsx_
  - _Requirements: 7_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Frontend Developer | Task: Create Footer.astro with social links (GitHub, Twitter, LinkedIn), copyright with current year, credits section | Restrictions: Tailwind classes only, use target="\_blank" rel="noopener" for external links | Success: Footer renders with all links, copyright year is dynamic | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 14. Create UI components (Button, Card, Badge)

  - File: src/components/ui/Button.astro, Card.astro, Badge.astro
  - Implement reusable UI primitives
  - Support variants and sizes
  - _Leverage: Current components/ui/ patterns_
  - _Requirements: NFR-Code Architecture_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: UI Developer | Task: Create Button.astro (primary/secondary/ghost variants, sm/md/lg sizes), Card.astro (with hover effect), Badge.astro (for tags) as reusable components | Restrictions: Tailwind classes only, use Props interface for type safety, support className prop for customization | Success: Components render with correct variants, hover states work, types are correct | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 15. Create ProjectCard component
  - File: src/components/ui/ProjectCard.astro
  - Implement project card with image, title, description
  - Add category badge and tech stack tags
  - Include link to detail page
  - _Leverage: design.md Project data model_
  - _Requirements: 1, 5_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Frontend Developer | Task: Create ProjectCard.astro with image, title, description, category badge (development/design), tech stack tags, link to /projects/[slug] | Restrictions: Tailwind classes only, use Picture component for optimized images, add hover animation class for GSAP | Success: Card displays all project info, links work, image loads optimized | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

## Phase 5: Section Components

- [ ] 16. Create Hero section

  - File: src/components/sections/Hero.astro
  - Implement full-screen hero with 3D canvas
  - Add animated text with i18n
  - Include scroll indicator
  - _Leverage: design.md Hero section, Three.js scene_
  - _Requirements: 3, 4_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Full-stack Developer | Task: Create Hero.astro with full-screen layout, canvas element for Three.js, hero text with i18n, subtitle, scroll indicator, inline script to initialize Three.js scene and GSAP animations | Restrictions: Use Intersection Observer for lazy Three.js init, Tailwind classes only | Success: Hero displays full-screen, 3D animates, text animates on load, scroll indicator visible | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 17. Create About section

  - File: src/components/sections/About.astro
  - Implement about section with profile info
  - Add professional summary (Developer + Designer unified)
  - _Leverage: Current developer/about.tsx, designer/about.tsx_
  - _Requirements: 1_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Frontend Developer | Task: Create About.astro combining Developer and Designer about content into unified professional summary, include profile image, bio text with i18n | Restrictions: Tailwind classes only, add section class for GSAP scroll animation | Success: About section displays unified content, responds to scroll animation trigger | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 18. Create Projects section

  - File: src/components/sections/Projects.astro
  - Display project cards grid
  - Include both development and design projects
  - Integrate GSAP scroll animations
  - _Leverage: ProjectCard component, gsap/scroll-animations.ts_
  - _Requirements: 1, 5_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Frontend Developer | Task: Create Projects.astro with responsive grid of ProjectCard components, fetch projects from data, section title with i18n, add projects-grid class for GSAP stagger animation | Restrictions: Tailwind classes only, show both development and design projects in unified grid | Success: Projects display in grid, stagger animation works, links to detail pages | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 19. Create Skills section

  - File: src/components/sections/Skills.astro
  - Display skills with categories (Frontend, Backend, Design, Tools)
  - Integrate GSAP reveal animations
  - _Leverage: Current developer/skills.tsx, designer/skills.tsx_
  - _Requirements: 1, 6_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Frontend Developer | Task: Create Skills.astro combining Developer and Designer skills into categorized display (Frontend, Backend, Design, Tools), skill items with icons, add skills-section and skill-item classes for GSAP animation | Restrictions: Tailwind classes only, use Badge component for skill items | Success: Skills display in categories, reveal animation works with back.out easing | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 20. Create Contact section
  - File: src/components/sections/Contact.astro
  - Display contact info with social links
  - Add email link and call-to-action
  - _Leverage: Current components/contact.tsx_
  - _Requirements: 7_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Frontend Developer | Task: Create Contact.astro with section title, description, email link (mailto:), social links (GitHub, Twitter, LinkedIn) with icons, CTA button | Restrictions: Tailwind classes only, use Button component, external links open in new tab | Success: Contact section displays, email link works, social links open correctly | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

## Phase 6: Pages

- [ ] 21. Create index page (English)

  - File: src/pages/index.astro
  - Compose all sections into home page
  - Initialize scroll animations
  - _Leverage: All section components, GSAP scroll-animations_
  - _Requirements: All_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Astro Developer | Task: Create index.astro composing BaseLayout with Header, Hero, About, Projects, Skills, Contact, Footer sections, inline script to initialize GSAP scroll animations after DOM load | Restrictions: Pass locale="en" to components, use Astro.currentLocale | Success: Home page renders all sections, scroll animations work, SEO meta tags present | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 22. Create index page (Japanese)

  - File: src/pages/ja/index.astro
  - Mirror English index with Japanese locale
  - _Leverage: index.astro structure_
  - _Requirements: 2_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Astro Developer | Task: Create ja/index.astro mirroring English index structure, pass locale="ja" to all components, update meta tags for Japanese | Restrictions: Exact same structure as index.astro, only locale differs | Success: Japanese page renders with Japanese content, URL is /ja/ | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 23. Set up Content Collections for projects

  - File: src/content/config.ts, src/content/projects/en/_.md, src/content/projects/ja/_.md
  - Define project schema with Zod
  - Create project content files for both languages
  - _Leverage: Current project data, design.md Project model_
  - _Requirements: 5_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Astro Developer specializing in Content Collections | Task: Define content collection schema in config.ts with Zod for Project type from design.md, create 3-4 project markdown files in en/ and ja/ folders with frontmatter and case study content | Restrictions: Use exact Project interface from design.md, include all required fields | Success: Content collection loads without errors, projects accessible via getCollection | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 24. Create project detail page (English)

  - File: src/pages/projects/[slug].astro
  - Implement dynamic route with getStaticPaths
  - Display case study content (problem, solution, results)
  - _Leverage: Content Collections, current project-detail.tsx_
  - _Requirements: 5_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Astro Developer | Task: Create [slug].astro with getStaticPaths from content collection, display project title, image, overview (problem, solution, results), tech stack, back link to projects | Restrictions: Use BaseLayout, Tailwind classes only, render markdown content | Success: Project detail pages generate for all projects, content displays correctly | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 25. Create project detail page (Japanese)
  - File: src/pages/ja/projects/[slug].astro
  - Mirror English project detail with Japanese locale
  - _Leverage: projects/[slug].astro structure_
  - _Requirements: 2, 5_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Astro Developer | Task: Create ja/projects/[slug].astro mirroring English structure, fetch from ja content collection, pass locale="ja" | Restrictions: Same structure as English version, fetch Japanese content | Success: Japanese project pages generate, Japanese content displays | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

## Phase 7: Data and Assets

- [ ] 26. Create skills data

  - File: src/data/skills.ts
  - Define skills array with categories
  - Combine Developer and Designer skills
  - _Leverage: Current developer/skills.tsx, designer/skills.tsx data_
  - _Requirements: 1, 6_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Data Engineer | Task: Create skills.ts exporting typed skills array combining Developer skills (React, TypeScript, Next.js, etc.) and Designer skills (Figma, UI/UX, etc.) with category, icon, level properties | Restrictions: Use Skill interface from design.md, include icon names for lucide-react | Success: Skills data exports correctly, TypeScript types are correct | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 27. Create social links data

  - File: src/data/social-links.ts
  - Define social links array
  - _Leverage: Current footer social links_
  - _Requirements: 7_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Data Engineer | Task: Create social-links.ts exporting typed array of social links (GitHub, Twitter, LinkedIn, Email) with name, url, icon properties | Restrictions: Use SocialLink interface from design.md | Success: Social links data exports correctly | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 28. Migrate public assets
  - Copy images and static files from current public/
  - Optimize images if needed
  - _Leverage: Current public/ folder_
  - _Requirements: NFR-Performance_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: DevOps Engineer | Task: Copy all images and static files from current public/ to new project public/, verify favicon, icons, and project images are present | Restrictions: Keep original file names for consistency, add manifest.json if missing | Success: All assets copied, images load correctly in dev server | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

## Phase 8: Integration and Testing

- [ ] 29. Set up Playwright for E2E testing

  - File: playwright.config.ts, tests/e2e/\*.spec.ts
  - Install and configure Playwright
  - Set up test scripts in package.json
  - _Leverage: Astro Playwright integration_
  - _Requirements: All_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: QA Engineer specializing in E2E testing | Task: Install @playwright/test, create playwright.config.ts with baseURL for dev server, configure projects for chromium/firefox/webkit, add test scripts to package.json (test:e2e, test:e2e:ui) | Restrictions: Use Astro's recommended Playwright setup, configure webServer to auto-start dev server | Success: Playwright installed, config created, npx playwright test runs without config errors | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

- [ ] 30. Write E2E tests for core user journeys

  - File: tests/e2e/home.spec.ts, tests/e2e/navigation.spec.ts, tests/e2e/i18n.spec.ts
  - Test home page rendering and sections
  - Test navigation and page transitions
  - Test language switching
  - Test theme toggle persistence
  - _Leverage: Playwright test utilities_
  - _Requirements: 1, 2, 4, 8_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: QA Engineer | Task: Write E2E tests: (1) home.spec.ts - verify all sections render, animations trigger on scroll; (2) navigation.spec.ts - test header nav, project detail links, back navigation; (3) i18n.spec.ts - test /ja/ switching, content changes; (4) theme.spec.ts - test toggle, localStorage persistence | Restrictions: Use Playwright best practices (locators, assertions), test both locales | Success: All tests pass, cover critical user flows, run in under 60 seconds | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion with test count, then mark as [x]_

- [ ] 31. Integrate all components and manual test

  - Verify all pages render correctly
  - Test i18n switching
  - Test theme switching
  - Verify animations work
  - _Leverage: All created components_
  - _Requirements: All_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: QA Engineer | Task: Run dev server, test all pages (/, /ja/, /projects/*, /ja/projects/*), verify i18n switching, theme toggle, GSAP animations, Three.js scene, responsive layout on mobile/tablet/desktop | Restrictions: Document any issues found, do not modify components in this task | Success: All pages render, no console errors, all features work | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion with test results, then mark as [x]_

- [ ] 32. Build and optimize

  - File: astro.config.mjs
  - Run production build
  - Verify static output
  - Check Lighthouse scores
  - _Leverage: design.md Build Configuration_
  - _Requirements: NFR-Performance_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: DevOps Engineer | Task: Run npm run build, verify output in dist/ folder, serve static files locally, run Lighthouse audit targeting 90+ performance score, fix any critical issues | Restrictions: Do not lower quality for performance, optimize images if needed | Success: Build succeeds, Lighthouse performance 90+, all pages work in production build | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion with Lighthouse scores, then mark as [x]_

- [ ] 33. Update deployment scripts
  - File: package.json
  - Update build and deploy scripts for Astro
  - Verify S3 deployment works
  - _Leverage: Current deploy scripts_
  - _Requirements: NFR-Reliability_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: DevOps Engineer | Task: Update package.json scripts for Astro (build outputs to dist/), update deploy script to sync dist/ to S3, test deployment | Restrictions: Keep CloudFront invalidation, maintain existing S3 bucket | Success: Deploy script works, site is live on S3/CloudFront | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_

## Phase 9: Cleanup

- [ ] 34. Final cleanup and documentation
  - Remove old Next.js files
  - Update README.md
  - Update CLAUDE.md for Astro project
  - _Leverage: Current documentation_
  - _Requirements: All_
  - _Prompt: Implement the task for spec astro-portfolio-redesign, first run spec-workflow-guide to get the workflow guide then implement the task: Role: Technical Writer | Task: Remove old Next.js files (app/, components/, lib/ - after backing up if needed), update README.md for Astro commands, update CLAUDE.md with new tech stack and architecture | Restrictions: Backup before deleting, keep useful documentation | Success: Old files removed, documentation updated, project is clean | Instructions: Mark this task as [-] in tasks.md before starting, use log-implementation tool after completion, then mark as [x]_
