import { notFound } from "next/navigation"
import ProjectDetail from "@/components/project-detail"

// プロジェクトデータ（実際のプロジェクトでは外部データソースから取得）
const projectsData = {
  "automatic-update-system": {
    title: "Automatic update system",
    subtitle: "Web Application Development",
    description:
      "A web application that centralizes store information management and automatically updates multiple portal sites on a scheduled basis, saving businesses time while ensuring consistent online presence.",
    image: "/mrvenrey.svg",
    imagePadding: "px-16",
    tags: ["C#.NET", "Angular", "NgRx", "SQL Server", "Jenkins", "Azure"],
    duration: "6 months",
    role: "Full Stack Developer",
    team: "Team of 4 developers",
    tools: ["C#.NET", "Angular", "NgRx", "SQL Server", "Jenkins", "Azure", "Visual Studio"],
    liveUrl: "https://mr.venrey.jp/",
    overview: {
      problem: "Businesses struggle to maintain consistent information across multiple portal sites, leading to outdated listings and missed opportunities. Manual updates are time-consuming and error-prone.",
      purpose: "To create a centralized system that automates the process of updating store information across multiple portal sites, ensuring consistency and saving time.",
      goal: [
        "Reduce manual work by 80% for store information updates",
        "Ensure data consistency across all portal sites",
        "Provide real-time monitoring and error handling"
      ],
      solution: "Built a web application with automated scheduling system that connects to multiple portal APIs, manages data centrally, and provides monitoring dashboards for businesses."
    },
    features: [
      "Centralized store information management dashboard",
      "Automated scheduling system for updates across multiple portals",
      "Real-time synchronization status monitoring",
      "Error handling and notification system",
      "Bulk data import/export functionality",
      "User role-based access control"
    ],
    challenges: [
      "Integrating with multiple third-party portal APIs with different data formats",
      "Implementing robust error handling for network failures and API rate limits",
      "Designing a scalable architecture to handle multiple concurrent updates",
      "Creating an intuitive UI for managing complex scheduling rules"
    ],
    results: {
      finalWork: "Successfully deployed system serving 50+ businesses with 95% uptime and 80% reduction in manual update time.",
      learnings: [
        "Gained expertise in .NET Core web API development and Angular frontend architecture",
        "Learned to design resilient systems with proper error handling and retry mechanisms",
        "Experienced working with CI/CD pipelines using Jenkins and Azure DevOps",
        "Developed skills in API integration and data synchronization patterns"
      ],
      nextSteps: [
        "Add support for more portal sites based on client requests",
        "Implement machine learning for intelligent scheduling optimization",
        "Develop mobile app for on-the-go management"
      ]
    }
  },
  "mirai-translator-plus": {
    title: "Mirai Translator Plus",
    subtitle: "Translation Service Development",
    description:
      "I created a translation service for consumers using React and Chakra-UI. This service lets users easily translate text into multiple languages using machine translation technology.",
    image: "/mirai.svg", 
    imagePadding: "px-16",
    tags: ["React", "Chakra-UI", "Jest", "Cypress", "StoryBook", "Docker", "AWS"],
    duration: "4 months",
    role: "Frontend Developer",
    team: "Team of 6 developers",
    tools: ["React", "Chakra-UI", "Jest", "Cypress", "StoryBook", "Docker", "AWS", "TypeScript"],
    liveUrl: "https://plus.miraitranslate.com/",
    overview: {
      problem: "Users need a reliable, easy-to-use translation service that supports multiple languages and provides high-quality translations for various content types.",
      purpose: "To develop a user-friendly web application that provides accurate translations using advanced machine translation technology.",
      goal: [
        "Create an intuitive interface for seamless translation experience",
        "Support 20+ languages with high translation accuracy",
        "Ensure responsive design across all devices"
      ],
      solution: "Built a modern React application with component-based architecture, comprehensive testing, and cloud deployment for scalable translation services."
    },
    features: [
      "Multi-language translation support (20+ languages)",
      "Real-time text translation with instant results",
      "Document upload and translation functionality",
      "Translation history and favorites management",
      "Responsive design for mobile and desktop",
      "User account management and preferences"
    ],
    challenges: [
      "Implementing efficient state management for complex translation workflows",
      "Ensuring consistent UI/UX across different browsers and devices",
      "Optimizing performance for large document translations",
      "Setting up comprehensive testing suite with Jest and Cypress"
    ],
    results: {
      finalWork: "Delivered a production-ready translation service with 99.9% uptime and positive user feedback on usability.",
      learnings: [
        "Mastered React component lifecycle and modern hooks patterns",
        "Gained expertise in Chakra-UI component library and responsive design",
        "Learned advanced testing strategies with Jest and end-to-end Cypress testing",
        "Experienced containerization with Docker and AWS cloud deployment"
      ],
      nextSteps: [
        "Add voice translation capabilities",
        "Implement offline translation mode",
        "Expand support for specialized domain translations"
      ]
    }
  },
  "sumi-technology": {
    title: "Sumi Technology",
    subtitle: "Corporate Website Development", 
    description:
      "I built a company website using Next.js and Tailwind CSS, creating a fast, user-friendly site with clean design and easy navigation.",
    image: "/sumi.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "PHP", "reCAPTCHA", "Github Actions"],
    duration: "2 months",
    role: "Full Stack Developer",
    team: "Solo Project",
    tools: ["Next.js", "React", "Tailwind CSS", "PHP", "reCAPTCHA", "Github Actions", "Vercel"],
    liveUrl: "https://sumitechnology.jp/",
    overview: {
      problem: "The company needed a modern, professional website to establish online presence and showcase their technology services effectively.",
      purpose: "To create a fast-loading, SEO-optimized corporate website that represents the company's technical expertise and attracts potential clients.",
      goal: [
        "Achieve 95+ PageSpeed Insights score for optimal performance",
        "Implement responsive design for all device types",
        "Create an effective contact system with spam protection"
      ],
      solution: "Developed a static site using Next.js with Tailwind CSS for styling, integrated contact forms with PHP backend and reCAPTCHA protection."
    },
    features: [
      "Modern, responsive design with mobile-first approach",
      "Fast loading times with Next.js static generation",
      "Contact form with reCAPTCHA spam protection",
      "SEO optimization with meta tags and structured data",
      "Automated deployment with GitHub Actions",
      "Clean, professional layout showcasing company services"
    ],
    challenges: [
      "Optimizing images and assets for maximum loading speed",
      "Implementing effective contact form with proper validation",
      "Setting up automated deployment pipeline with GitHub Actions",
      "Ensuring cross-browser compatibility and accessibility"
    ],
    results: {
      finalWork: "Delivered a high-performance corporate website with 98 PageSpeed score and seamless user experience.",
      learnings: [
        "Gained expertise in Next.js static site generation and optimization techniques",
        "Mastered Tailwind CSS utility-first approach for rapid UI development",
        "Learned to implement secure contact forms with proper validation",
        "Experienced setting up CI/CD pipelines with GitHub Actions"
      ],
      nextSteps: [
        "Add blog functionality for content marketing",
        "Implement analytics dashboard for traffic monitoring",
        "Add multi-language support for international clients"
      ]
    }
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }))
}