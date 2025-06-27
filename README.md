# Mun's Portfolio

A modern, responsive portfolio website showcasing both development and design skills. Built with Next.js 15 and deployed on AWS.

🌐 **Live Site:** [mun-k.com](https://mun-k.com)

📖 **日本語版:** [README_ja.md](./README_ja.md)

## ✨ Features

### Dual Portfolio Mode
- **Developer Mode**: Showcases frontend/fullstack development projects and technical skills
- **Designer Mode**: Highlights UI/UX design work and case studies
- Smooth transitions between modes with Framer Motion animations

### Modern Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for smooth interactions
- **State Management**: Jotai with localStorage persistence
- **Internationalization**: Custom i18n system (English/Japanese)
- **Theme**: Dark/light mode support with next-themes

### Performance & Deployment
- Static site generation for optimal performance
- AWS S3 + CloudFront deployment
- Infrastructure as Code with Terraform
- Automated deployment pipeline

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production (static export to /out directory)
npm run build

# Start production server (after build)
npm run start

# Format code with Prettier (includes Tailwind CSS class sorting)
npm run format

# Lint code with ESLint
npm run lint

# Deploy to AWS (builds, uploads to S3, and invalidates CloudFront)
# Requires CLOUDFRONT_DISTRIBUTION_ID in .env
npm run deploy

# Invalidate CloudFront cache only
npm run disable-cache
```

## 🏗️ Project Structure

```
portfolio-frontend/
├── app/                    # Next.js App Router pages
│   ├── projects/[slug]/   # Dynamic project detail pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui component library (40+ components)
│   ├── developer/        # Developer mode specific components
│   ├── designer/         # Designer mode specific components
│   └── ...               # Shared components
├── lib/                  # Utility functions and configurations
│   ├── atoms.ts          # Jotai state atoms
│   ├── use-portfolio-mode.ts  # Portfolio mode hook
│   └── use-translation.ts     # i18n hook
├── locales/              # Translation files
│   ├── en.json          # English translations
│   └── ja.json          # Japanese translations
├── public/               # Static assets
├── terraform/            # Infrastructure as Code
└── out/                  # Static export output (generated)
```

## 🎨 Key Features Explained

### Portfolio Mode System
The application features a unique dual-mode system allowing users to switch between developer and designer portfolios:

- **State Management**: Uses Jotai with `portfolioModeAtom`
- **URL Integration**: Supports `?want=developer|designer` query parameters
- **Smooth Transitions**: Framer Motion animations between modes
- **Persistent Preference**: Mode preference saved in localStorage

### Internationalization
Custom i18n implementation supporting English and Japanese:

- **Translation Hook**: `useTranslation()` with dot notation key access
- **Language State**: Managed via Jotai with `languageAtom`
- **Client-side Persistence**: Language preference stored in localStorage
- **Dynamic Content**: All UI text and content localized

### Component Architecture
- **Server Components**: Default for optimal performance
- **Client Components**: Used only when interactivity is required
- **shadcn/ui Integration**: 40+ UI components for consistent design
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 🚀 Deployment

### AWS Infrastructure
The site is deployed using AWS services:

- **S3**: Static website hosting
- **CloudFront**: CDN for global content delivery
- **Route53**: DNS management
- **ACM**: SSL certificate management

### Deployment Process

1. **Configure AWS credentials**
   ```bash
   export AWS_ACCESS_KEY_ID="your-access-key"
   export AWS_SECRET_ACCESS_KEY="your-secret-key"
   ```

2. **Set up Terraform**
   ```bash
   cd terraform
   cp terraform.tfvars.sample terraform.tfvars
   # Edit terraform.tfvars with your configuration
   terraform init
   terraform plan
   terraform apply
   ```

3. **Deploy the site**
   ```bash
   npm run deploy
   ```

## 🛠️ Development

### Code Style
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **ESLint**: Code linting with Next.js recommended rules
- **Prettier**: Code formatting with Tailwind CSS class sorting
- **Path Aliases**: `@/*` maps to project root for clean imports

### Theme System
- **CSS Variables**: Custom properties for theming
- **Dark/Light Mode**: Automatic system preference detection
- **Theme Toggle**: User preference override
- **Consistent Styling**: Tailwind design tokens across components

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Muneyasu Kagawa**
- Website: [mun-k.com](https://mun-k.com)
- Email: muneyasu.kagawa@gmail.com
- LinkedIn: [muneyasu-kagawa](https://www.linkedin.com/in/muneyasu-kagawa/)
- Twitter: [@m_kagawa_](https://twitter.com/m_kagawa_)

---

⭐ If you found this project helpful, please consider giving it a star!