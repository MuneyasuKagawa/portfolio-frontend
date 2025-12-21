# Astro Portfolio Redesign - Design Document

## 設計方針

### アーキテクチャ概要

```
src/
├── components/           # Astroコンポーネント
│   ├── common/          # 共通コンポーネント
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── LanguageToggle.astro
│   ├── sections/        # ページセクション
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   └── Contact.astro
│   ├── three/           # Three.js関連（クライアントスクリプト）
│   │   └── HeroScene.ts
│   └── ui/              # UIコンポーネント
│       ├── Button.astro
│       ├── Card.astro
│       └── Badge.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro      # デフォルト（en）
│   ├── ja/
│   │   ├── index.astro
│   │   └── projects/
│   │       └── [slug].astro
│   └── projects/
│       └── [slug].astro
├── i18n/
│   ├── ui.ts            # 翻訳ヘルパー
│   ├── en.json
│   └── ja.json
├── scripts/
│   ├── gsap-init.ts     # GSAP初期化
│   ├── scroll-animations.ts
│   └── three-scene.ts
├── styles/
│   └── global.css
├── content/
│   └── projects/        # Content Collections
│       ├── project-1.md
│       └── project-2.md
└── data/
    └── projects.ts      # プロジェクトデータ
```

## Styling方針

### 使用技術
- **Tailwind CSS**: ユーティリティクラスのみ使用
- **`<style>` タグは使用禁止**: 全てTailwindクラスで実装
- **CSS Variables**: カスタムプロパティでテーマ管理

### Design Tokens

```css
/* colors */
--color-primary: #6366f1;      /* Indigo */
--color-secondary: #ec4899;    /* Pink */
--color-accent: #14b8a6;       /* Teal */

/* Light theme */
--color-background: #fafafa;
--color-foreground: #0a0a0a;
--color-muted: #737373;
--color-card: #ffffff;
--color-border: #e5e5e5;

/* Dark theme */
--color-background-dark: #0a0a0a;
--color-foreground-dark: #fafafa;
--color-muted-dark: #a3a3a3;
--color-card-dark: #171717;
--color-border-dark: #262626;

/* spacing */
--space-section: 6rem;         /* セクション間隔 */
--space-container: 1.5rem;     /* コンテナパディング */

/* typography */
--font-display: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* animation */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

### Tailwind拡張設定

```typescript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
    },
  },
};
```

## コンポーネント設計

### 1. Hero Section

**視覚的特徴:**
- フルスクリーン表示
- Three.js 3Dオブジェクト（抽象的なジオメトリ）
- グラデーション背景
- 大きなタイポグラフィ
- GSAPテキストアニメーション

**構成:**
```astro
<!-- Hero.astro -->
<section class="relative h-screen flex items-center justify-center overflow-hidden">
  <!-- 3D Canvas (Three.js) -->
  <canvas id="hero-canvas" class="absolute inset-0 -z-10"></canvas>

  <!-- Content -->
  <div class="container mx-auto px-6 text-center">
    <h1 class="font-display text-6xl md:text-8xl font-bold">
      <span class="hero-text">Muneyasu Kagawa</span>
    </h1>
    <p class="hero-subtitle text-xl md:text-2xl text-muted mt-6">
      Frontend Developer & UI/UX Designer
    </p>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
    <div class="scroll-indicator w-6 h-10 border-2 border-foreground/30 rounded-full">
      <div class="w-1 h-2 bg-foreground/50 rounded-full mx-auto mt-2"></div>
    </div>
  </div>
</section>

<script>
  import { initHeroScene } from '../scripts/three-scene';
  import { animateHeroText } from '../scripts/gsap-init';

  initHeroScene();
  animateHeroText();
</script>
```

### 2. Three.js Scene設計

```typescript
// scripts/three-scene.ts
import * as THREE from 'three';

export function initHeroScene() {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

  // Geometry: Abstract shapes (Torus, Icosahedron, etc.)
  const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
  const material = new THREE.MeshStandardMaterial({
    color: 0x6366f1,
    metalness: 0.7,
    roughness: 0.2,
    wireframe: true,
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const pointLight = new THREE.PointLight(0xec4899, 1);
  pointLight.position.set(5, 5, 5);
  scene.add(ambientLight, pointLight);

  camera.position.z = 5;

  // Mouse interaction
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
    mesh.position.x = mouseX * 0.5;
    mesh.position.y = mouseY * 0.5;
    renderer.render(scene, camera);
  }
  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
```

### 3. GSAP Animation設計

```typescript
// scripts/gsap-init.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateHeroText() {
  const heroText = document.querySelector('.hero-text');
  const heroSubtitle = document.querySelector('.hero-subtitle');

  const tl = gsap.timeline();

  tl.from(heroText, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
  })
  .from(heroSubtitle, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.5');
}

export function initScrollAnimations() {
  // Section fade-in
  gsap.utils.toArray('.section').forEach((section: Element) => {
    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  // Project cards stagger
  gsap.from('.project-card', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 70%',
    },
  });

  // Skills reveal
  gsap.from('.skill-item', {
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top 60%',
    },
  });
}
```

### 4. View Transitions

```astro
<!-- BaseLayout.astro -->
---
import { ClientRouter } from 'astro:transitions';
---
<html lang={Astro.currentLocale || 'en'}>
  <head>
    <ClientRouter />
    <!-- ... -->
  </head>
  <body>
    <slot />
  </body>
</html>
```

### 5. i18n設計

```typescript
// i18n/ui.ts
import en from './en.json';
import ja from './ja.json';

const translations = { en, ja };

export function useTranslation(locale: string) {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[locale as keyof typeof translations];

    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = (value as Record<string, unknown>)[k];
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t };
}
```

```json
// i18n/ja.json
{
  "hero": {
    "title": "Muneyasu Kagawa",
    "subtitle": "フロントエンドエンジニア & UI/UXデザイナー",
    "cta": "プロジェクトを見る"
  },
  "about": {
    "title": "About",
    "description": "東京を拠点に活動するフロントエンドエンジニア。ユーザー体験を重視した、美しく機能的なWebアプリケーションの開発を得意としています。"
  },
  "projects": {
    "title": "Projects",
    "viewDetails": "詳細を見る"
  },
  "skills": {
    "title": "Skills",
    "development": "開発",
    "design": "デザイン"
  },
  "contact": {
    "title": "Contact",
    "description": "お仕事のご依頼やご質問はお気軽にどうぞ"
  }
}
```

## レスポンシブ設計

### ブレークポイント

| Name | Min Width | 用途 |
|------|-----------|------|
| sm   | 640px     | モバイル横向き |
| md   | 768px     | タブレット |
| lg   | 1024px    | デスクトップ |
| xl   | 1280px    | 大画面 |
| 2xl  | 1536px    | ワイドスクリーン |

### モバイルファースト

- 基本スタイルはモバイル向け
- `md:` `lg:` で大画面対応を追加
- 3D要素はデバイス性能に応じて簡略化

## アクセシビリティ

### prefers-reduced-motion対応

```typescript
// scripts/gsap-init.ts
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(0);
  // または簡素なフェードのみに
}
```

### フォーカス管理

```css
/* Tailwind utility */
.focus-visible:ring-2
.focus-visible:ring-primary
.focus-visible:ring-offset-2
```

## パフォーマンス最適化

### 1. Three.js遅延ロード

```astro
<script>
  // Intersection Observer で可視時のみ初期化
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        import('../scripts/three-scene').then(({ initHeroScene }) => {
          initHeroScene();
        });
        observer.disconnect();
      }
    });
  });

  observer.observe(document.getElementById('hero-canvas')!);
</script>
```

### 2. 画像最適化

- Astro Image コンポーネント使用
- WebP/AVIF フォーマット
- srcset によるレスポンシブ画像

### 3. フォント最適化

```astro
<!-- BaseLayout.astro -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
```

## ダークモード実装

```astro
<!-- ThemeToggle.astro -->
<button
  id="theme-toggle"
  class="p-2 rounded-full hover:bg-foreground/10 transition-colors"
  aria-label="Toggle theme"
>
  <svg class="dark:hidden w-5 h-5" ...><!-- Sun icon --></svg>
  <svg class="hidden dark:block w-5 h-5" ...><!-- Moon icon --></svg>
</button>

<script>
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Initialize from localStorage or system preference
  const theme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  html.classList.toggle('dark', theme === 'dark');

  toggle?.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
</script>
```

## ビルド設定

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mun-k.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
```
