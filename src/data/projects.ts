export interface Project {
  slug: string;
  title: string;
  titleJa?: string;
  description: string;
  descriptionJa?: string;
  category: "development" | "design";
  tags: string[];
  image: string;
  imagePadding?: string;
  link?: string;
  github?: string;
  featured: boolean;
  overview?: {
    problem: string;
    problemJa?: string;
    solution: string;
    solutionJa?: string;
    results: string[];
    resultsJa?: string[];
  };
  techStack?: string[];
}

export const projects: Project[] = [
  {
    slug: "automatic-update-system",
    title: "Automatic update system",
    titleJa: "自動更新システム",
    description:
      "A web application that centralizes store information management and automatically updates multiple portal sites on a scheduled basis, saving businesses time while ensuring consistent online presence.",
    descriptionJa:
      "店舗情報を一元管理し、複数のポータルサイトを定期的に自動更新するWebアプリケーション。ビジネスの時間を節約しながら、一貫したオンラインプレゼンスを確保します。",
    category: "development",
    tags: ["C#.NET", "Angular", "NgRx", "SQL Server", "Jenkins", "Azure"],
    image: "/mrvenrey.svg",
    imagePadding: "px-16",
    link: "https://mr.venrey.jp/",
    featured: true,
    overview: {
      problem:
        "Businesses needed to manually update store information across multiple portal sites, which was time-consuming and error-prone.",
      problemJa:
        "企業は複数のポータルサイトに店舗情報を手動で更新する必要があり、時間がかかりミスが発生しやすかった。",
      solution:
        "Built a centralized management system that automatically synchronizes store information to multiple portal sites on a scheduled basis.",
      solutionJa:
        "店舗情報を複数のポータルサイトに定期的に自動同期する一元管理システムを構築。",
      results: [
        "Reduced manual update time by 80%",
        "Zero inconsistencies across platforms",
        "Automated scheduling",
      ],
      resultsJa: [
        "手動更新時間を80%削減",
        "プラットフォーム間の不整合ゼロ",
        "自動スケジューリング",
      ],
    },
    techStack: ["C#.NET", "Angular", "NgRx", "SQL Server", "Jenkins", "Azure"],
  },
  {
    slug: "mirai-translator-plus",
    title: "Mirai Translator Plus",
    titleJa: "みらい翻訳Plus",
    description:
      "A translation service for consumers using React and Chakra-UI. This service lets users easily translate text into multiple languages using machine translation technology.",
    descriptionJa:
      "ReactとChakra-UIを使用した消費者向け翻訳サービス。機械翻訳技術を使用して、ユーザーがテキストを複数の言語に簡単に翻訳できます。",
    category: "development",
    tags: [
      "React",
      "Chakra-UI",
      "Jest",
      "Cypress",
      "StoryBook",
      "Docker",
      "AWS",
    ],
    image: "/mirai.svg",
    link: "https://plus.miraitranslate.com/",
    featured: true,
    overview: {
      problem:
        "Consumers needed an accessible and user-friendly translation service with high-quality machine translation.",
      problemJa:
        "消費者は高品質な機械翻訳を備えた、アクセスしやすく使いやすい翻訳サービスを必要としていた。",
      solution:
        "Created a modern, responsive translation interface with React and Chakra-UI, integrated with advanced machine translation APIs.",
      solutionJa:
        "ReactとChakra-UIでモダンでレスポンシブな翻訳インターフェースを作成し、高度な機械翻訳APIと統合。",
      results: [
        "Intuitive user interface",
        "High translation accuracy",
        "Full test coverage with Jest and Cypress",
      ],
      resultsJa: [
        "直感的なユーザーインターフェース",
        "高い翻訳精度",
        "JestとCypressによる完全なテストカバレッジ",
      ],
    },
    techStack: [
      "React",
      "Chakra-UI",
      "Jest",
      "Cypress",
      "StoryBook",
      "Docker",
      "AWS",
    ],
  },
  {
    slug: "yomogi-emon",
    title: "Website for an esthetic salon",
    titleJa: "エステサロンのWebサイト",
    description:
      "A website for an esthetic salon using Next.js 15 App Router. Features static site generation, optimized performance, responsive design, and dual-mode presentation.",
    descriptionJa:
      "Next.js 15 App Routerを使用したエステサロンのWebサイト。静的サイト生成、最適化されたパフォーマンス、レスポンシブデザイン、デュアルモード表示を特徴としています。",
    category: "development",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/yomogi-emon.webp",
    link: "https://yomogi-emon.com/",
    featured: true,
    overview: {
      problem:
        "The salon needed a modern, fast-loading website that showcases their services and creates a relaxing first impression.",
      problemJa:
        "サロンは、サービスを紹介し、リラックスした第一印象を与えるモダンで高速なWebサイトを必要としていた。",
      solution:
        "Built a performant static site with Next.js 15, featuring smooth animations and optimized images.",
      solutionJa:
        "Next.js 15でパフォーマンスの高い静的サイトを構築し、スムーズなアニメーションと最適化された画像を実装。",
      results: [
        "Fast page load times",
        "Smooth Framer Motion animations",
        "Mobile-first responsive design",
      ],
      resultsJa: [
        "高速なページ読み込み",
        "スムーズなFramer Motionアニメーション",
        "モバイルファーストのレスポンシブデザイン",
      ],
    },
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    slug: "aimx",
    title: "Website for SME Consultants",
    titleJa: "中小企業コンサルタントのWebサイト",
    description:
      "A website designed for small and medium-sized enterprise (SME) consultants, providing essential tools and information to support their advisory services.",
    descriptionJa:
      "中小企業コンサルタント向けに設計されたWebサイト。コンサルティングサービスをサポートするための重要なツールと情報を提供します。",
    category: "development",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Contentful"],
    image: "/aimx.webp",
    link: "https://aimx.co.jp/",
    featured: false,
    overview: {
      problem:
        "SME consultants needed a professional website to showcase their expertise and manage content easily.",
      problemJa:
        "中小企業コンサルタントは、専門知識を紹介し、コンテンツを簡単に管理できるプロフェッショナルなWebサイトを必要としていた。",
      solution:
        "Created a modern website with Contentful CMS integration for easy content management.",
      solutionJa:
        "コンテンツ管理が容易なContentful CMSを統合したモダンなWebサイトを作成。",
      results: [
        "Easy content management via CMS",
        "Professional online presence",
        "SEO optimized",
      ],
      resultsJa: [
        "CMSによる簡単なコンテンツ管理",
        "プロフェッショナルなオンラインプレゼンス",
        "SEO最適化",
      ],
    },
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Contentful"],
  },
  {
    slug: "assignment-learning-app",
    title: "Skillhub - Learning App",
    titleJa: "Skillhub - 学習アプリ",
    description:
      "A learning support app that combines skill acquisition with Q&A functionality, designed to help learners systematically develop new skills while getting expert support when needed.",
    descriptionJa:
      "スキル習得とQ&A機能を組み合わせた学習支援アプリ。学習者が体系的に新しいスキルを身につけながら、必要な時に専門家のサポートを受けられるように設計されています。",
    category: "design",
    tags: ["Figma", "UI/UX Design", "Mobile App", "Education"],
    image: "/skillhub.png",
    featured: true,
    overview: {
      problem:
        "Learners struggle to find systematic and efficient ways to acquire new skills, and getting expert support is difficult and time-consuming.",
      problemJa:
        "学習者は新しいスキルを体系的かつ効率的に習得する方法を見つけるのに苦労しており、専門家のサポートを得ることも困難で時間がかかる。",
      solution:
        "Designed a platform that combines structured learning with Q&A functionality, using a colorful and friendly design approach.",
      solutionJa:
        "構造化された学習とQ&A機能を組み合わせたプラットフォームをデザインし、カラフルでフレンドリーなデザインアプローチを採用。",
      results: [
        "Complete prototype with full screen designs",
        "Intuitive user flows for all major features",
        "Colorful and engaging visual design",
      ],
      resultsJa: [
        "完全な画面デザインを含む完成したプロトタイプ",
        "すべての主要機能に対する直感的なユーザーフロー",
        "カラフルで魅力的なビジュアルデザイン",
      ],
    },
    techStack: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
  },
];
