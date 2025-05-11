# Encord Website

## 🚀 Technologies Used

- **React / Next.js**
- **Prismic CMS**
- **Tailwind CSS**
- **TypeScript**
- **Ant Design Icons**
- **Vercel**

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18.17.0 or later
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kad1kad/encord-kad.git
   cd encord-kad
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 🏗️ Development Approach

### Accelerated Development with aider.nvim

This project leveraged [aider.nvim](https://github.com/joshuavial/aider.nvim), an AI-powered coding assistant, to significantly speed up development.

I've utilised Claude-3.7-sonnet and Qwen3 235B A22B as a cheaper alternative :-)
This workflow enabled rapid iteration and refinement of components.

Aider helped with:

- Rapid boilerplate generation for Prismic slices
- Automating repetitive refactoring tasks
- Accelerating debugging cycles

This allowed me to focus on:

- Pixel-perfect design implementation
- User experience refinements
- Performance optimizations
- Custom animations and interactions

### 👨‍💻 Development Process & Timeline

Day 1 (5-6 hours)

- Project setup and configuration
- Prismic CMS integration and content modeling
- Navigation bar and hero section implementation
- Feature highlight section development

Day 2 (5 hours)

- Additional Prismic content schema development
- Implementation of all remaining sections
- Carousel functionality
- Vercel deployment setup

Day 3 (3-4 hours)

- Mobile nav implementation
- Performance optimisations
- Code cleanup and documentation
- README creation

## 📐 Architecture

### Component Structure

The project follows a modular reusable component architecture influenced by Prismic's slice-based content model:

```
├── app/                  # Next.js App Router
├── components/           # Reusable components
│   ├── EmailForm.tsx     # Email subscription component
│   └── Carousel.tsx      # Reusable carousel component
├── slices/               # Prismic slice components
│   ├── NavigationBar/    # Navigation component
│   ├── HeroCta/          # Hero section with CTA
│   ├── FeatureHighlight/ # Feature showcase components
│   └── ...               # Other slice components
└── prismicio-types.d.ts  # TypeScript definitions for Prismic content
```

### Prismic Integration

This project marked my first experience with Prismic CMS.
I rapidly familiarized myself with the platform and successfully implemented a complete integration, enabling full content management for all copy and images throughout the site.

1. **Slice-Based Structure**: Each major section of the site is a "slice" that can be arranged in any order in Prismic
2. **Type Safety**: Using TypeScript definitions generated from Prismic's schema
3. **Component Reusability**: Common UI patterns extracted into shared components
4. **Content Flexibility**: Editors can modify content without developer intervention

## 🧩 Key Features

- **Smooth Animations**: Mobile nav + Carousel
- **Optimised Images**: Responsive images with proper loading strategies (Optimised Next.js image component, lazy loading, eager loading above the fold)
- **Accessibility**: Semantic HTML and ARIA attributes for screen readers, Site can be navigated with TAB
- **Performance**: Sub second initial page load, 100 Lighthouse Performance score
- **CMS**: The copy, images and section order can be updated via Prismic

## 📦 Deployment

The site is deployed on Vercel with continuous integration from GitHub:

1. Push changes to the main branch.
2. Vercel automatically builds and deploys the site
3. Preview deployments are created for pull requests
