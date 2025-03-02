# Remi Uzel | Personal Portfolio

A modern, responsive personal portfolio website showcasing my work as a Software Development Engineer at Amazon Alexa.

## Overview

This portfolio site highlights my professional background, work experience, and projects in a clean, interactive format with an Alexa-inspired design theme. The website features:

- Professional timeline showing work experience at Amazon Alexa and Prime Video
- Education history from Imperial College London
- Project showcase section (expandable for future projects)
- Mobile-responsive design with smooth animations
- Dark/light mode support

## Technology Stack

The site is built using modern web technologies:

- **Next.js** - React framework with App Router architecture
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **GitHub Pages** - Hosting and deployment

## Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/remuzel/remuzel.github.io.git
   cd remuzel.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at http://localhost:3000

4. **Build for production**
   ```bash
   npm run build
   ```
   This generates static files in the `out` directory

5. **Preview production build**
   ```bash
   npx serve out
   ```

## Maintenance Guide

### Content Updates

All content is stored in TypeScript files for easy updates:

- **Work Experience**: Edit `src/data/experiences.ts`
- **Education**: Edit `src/data/education.ts`
- **Projects**: Edit `src/data/projects.ts`
- **About Me**: Edit `src/constants/strings.ts` (ABOUT section)

### Deploying Changes

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

Manual deployment:
```bash
npm run build && npx serve out
```

### Design Customization

- Global styles: `src/app/globals.css`
- Theme colors are defined as CSS variables at the top of the globals.css file
- Alexa blue theme color: `#00CAFF` (light mode) and `#232F3E` (dark mode)

## Visit the Site

[remuzel.github.io](https://remuzel.github.io)