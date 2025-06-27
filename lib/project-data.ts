export type BaseProject = {
  title: string;
  description: string;
  image: string;
  imagePadding?: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
};

export type DeveloperProject = BaseProject & {
  slug: string;
};

export type DesignerProject = BaseProject & {
  slug: string;
  // Additional fields for designer projects with detail pages
  subtitle?: string;
  duration?: string;
  role?: string;
  team?: string;
  tools?: string[];
  overview?: {
    problem: string;
    purpose: string;
    goal: string[];
    solution: string;
  };
  features?: string[];
  challenges?: Array<{
    title: string;
    description: string;
    solution: string;
  }>;
  results?: {
    finalWork: string;
    learnings: string[];
    nextSteps: string[];
  };
};

// Developer projects (no detail pages)
export const developerProjects: DeveloperProject[] = [
  {
    title: "Automatic update system",
    description:
      "A web application that centralizes store information management and automatically updates multiple portal sites on a scheduled basis, saving businesses time while ensuring consistent online presence.",
    image: "/mrvenrey.svg",
    imagePadding: "px-16",
    tags: ["C#.NET", "Angular", "NgRx", "SQL Server", "Jenkins", "Azure"],
    liveUrl: "https://mr.venrey.jp/",
    slug: "automatic-update-system",
  },
  {
    title: "Mirai Translator Plus",
    description:
      "I created a translation service for consumers using React and Chakra-UI. This service lets users easily translate text into multiple languages using machine translation technology.",
    image: "/mirai.svg",
    imagePadding: "px-16",
    tags: [
      "React",
      "Chakra-UI",
      "Jest",
      "Cypress",
      "StoryBook",
      "Docker",
      "AWS",
    ],
    liveUrl: "https://plus.miraitranslate.com/",
    slug: "mirai-translator-plus",
  },
  {
    title: "Website for an esthetic salon",
    description:
      "I built a website for an esthetic salon using Next.js 15 App Router. The website features static site generation, optimized performance, responsive design, and dual-mode presentation.",
    image: "/yomogi-emon.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://yomogi-emon.com/",
    slug: "yomogi-emon",
  },
];

// Designer projects (with detail pages)
export const designerProjects: DesignerProject[] = [
  {
    title: "Skillhub - Learning App",
    description:
      "A learning support app that combines skill acquisition with Q&A functionality, designed to help learners systematically develop new skills while getting expert support when needed.",
    image: "/skillhub.png",
    tags: ["Figma", "UI/UX Design", "Mobile App", "Education"],
    liveUrl: "",
    slug: "assignment-learning-app",
    subtitle: "Bridging the gap between self-learning and expert guidance",
    duration: "3 weeks",
    role: "UI/UX Designer",
    team: "Individual Project",
    tools: ["Figma"],
    overview: {
      problem:
        "Learners struggle to find systematic and efficient ways to acquire new skills, and getting expert support is difficult and time-consuming.",
      purpose:
        "Create an environment where users can learn skills systematically while having immediate access to expert support through questions.",
      goal: [
        "Provide a structured learning environment for skill development",
        "Enable easy access to expert support when needed",
        "Create an intuitive and engaging learning experience",
        "Combine the best of learning apps and Q&A platforms",
      ],
      solution:
        "Designed a platform that combines structured learning (like Duolingo) with Q&A functionality (like Quora), using a colorful and friendly design approach.",
    },
    features: [
      "Sign up / Sign in functionality",
      "Password reset flow",
      "Course selection (new and existing courses)",
      "Learning screens with progress tracking",
      "Continuous learning features",
      "Question posting functionality",
      "Answer submission and viewing",
      "Question browsing and answer lists",
      "Account settings (privacy, notifications, language)",
    ],
    challenges: [
      {
        title: "Learning Efficiency",
        description:
          "Users faced inefficient learning processes when trying to acquire new skills independently",
        solution:
          "Created a structured learning path with clear progress indicators and bite-sized lessons",
      },
      {
        title: "Difficulty in Asking Questions",
        description:
          "Learners found it hard to get timely help when stuck on difficult concepts",
        solution:
          "Integrated a seamless Q&A system directly within the learning flow",
      },
      {
        title: "Visual Design Balance",
        description:
          "Needed to create a design that was both professional and approachable",
        solution:
          "Used a colorful palette (#718DBF, #A67FB5, #FFD743, #07BB9C, #DE8CB2) with friendly fonts (Rubik, Poppins)",
      },
    ],
    results: {
      finalWork:
        "Completed prototype with full screen designs and user flows for all major features",
      learnings: [
        "The importance of integrating learning and support features seamlessly",
        "How color and typography choices can make educational apps more approachable",
        "The value of combining different app paradigms to solve complex user needs",
      ],
      nextSteps: [
        "User testing with target audience",
        "Refine the gamification elements",
        "Develop a reward system for active contributors",
      ],
    },
  },
];
