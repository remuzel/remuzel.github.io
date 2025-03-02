# Remi Uzel | Personal Portfolio

Welcome to my personal portfolio website, showcasing my work as a Software Development Engineer at Amazon Alexa.

## Portfolio Website Overview

This is a modern, responsive portfolio website built using Next.js, Tailwind CSS, and Framer Motion, with an Alexa-inspired design theme.

## Project Structure

```
remuzel.github.io/
├── public/                 # Static assets
│   └── images/             # Images including your logo and photos
│       └── logos/          # Company logos for the timeline
├── src/
│   ├── app/                # Next.js app router pages
│   │   ├── projects/       # Projects section with dynamic routing
│   │   │   ├── [id]/       # Individual project page
│   │   │   └── page.tsx    # Projects listing page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout with metadata
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── common/         # Common UI components
│   │   │   ├── Card.tsx    # Card component for projects
│   │   │   ├── Section.tsx # Section wrapper component
│   │   │   ├── SectionHeader.tsx # Section header component
│   │   │   └── Tag.tsx     # Tag component for technologies
│   │   └── ui/             # UI components
│   │       ├── about.tsx   # About section
│   │       ├── experience.tsx # Experience timeline
│   │       ├── footer.tsx  # Footer component
│   │       ├── hero.tsx    # Hero section with Alexa animations
│   │       ├── navbar.tsx  # Navigation component
│   │       ├── projects.tsx # Projects showcase section
│   │       └── timeline/   # Timeline components
│   │           ├── Timeline.tsx      # Timeline container component
│   │           ├── TimelineItem.tsx  # Individual timeline item
│   │           └── index.ts          # Timeline component exports
│   ├── constants/          # Constants and configuration
│   │   ├── animations.ts   # Animation configurations
│   │   ├── strings.ts      # Text constants
│   │   └── theme.ts        # Theme configuration
│   ├── data/               # Data files
│   │   ├── education.ts    # Education history data
│   │   ├── experiences.ts  # Work experience data
│   │   └── projects.ts     # Projects data and helper functions
│   └── utils/              # Utility functions
│       └── textUtils.tsx   # Text formatting utilities
```

## Key Features

1. **Alexa-Themed Design**
   - Custom color scheme matching Alexa's branding
   - Animated rings in the hero section
   - Pulsing animations reminiscent of Alexa's voice UI
   - Company logos integration in the timeline

2. **Responsive Layout**
   - Mobile-first design that adapts to all screen sizes
   - Hamburger menu for mobile navigation
   - Grid layouts that reflow based on screen width

3. **Interactive Elements**
   - Social icons that grow and glow on hover
   - Smooth scroll navigation
   - Animated sections that appear as you scroll

4. **Projects and Experience System**
   - Modular data structure in `src/data/projects.ts`, `src/data/experiences.ts`, and `src/data/education.ts`
   - Dynamic project pages with [id] route parameters
   - Timeline component for displaying work and education history
   - Consistent interface patterns with the `TimelineItem` interface
   - Easily add new projects and experiences by updating the data files

5. **Animations**
   - Page elements animate in as you scroll
   - Subtle hover animations
   - Voice visualization in the hero
   - Consistent animation patterns defined in `src/constants/animations.ts`

## How to Maintain and Update

### Adding a New Project

1. Open `src/data/projects.ts`
2. Add a new project object to the `projects` array:
   ```typescript
   {
     id: "your-project-id",
     title: "Your Project Title",
     description: "Short description for cards and previews",
     longDescription: `
       Detailed description with
       multiple paragraphs.
     `,
     tags: ["Tag1", "Tag2", "Tag3"],
     date: "2024-03-01", // Use ISO format date
     github: "https://github.com/remuzel/your-project", // Optional
     liveUrl: "https://your-project-demo.com", // Optional
     featured: true // Set to true to highlight it
   }
   ```
3. The project will automatically appear on the home page and projects listing

### Modifying the About Section

1. Edit `src/components/ui/about.tsx`
2. Update the text in the paragraph elements
3. To replace your photo, add a new image to `public/images/` and update the Image component's `src` attribute

### Updating Experience and Education

1. Edit `src/data/experiences.ts` to update work experiences
2. Edit `src/data/education.ts` to update education history
3. Both use the common `TimelineItem` interface for consistent structure

### Adding Custom CSS

1. Global styles are in `src/app/globals.css`
2. Alexa theme colors are defined as CSS variables at the top of this file
3. Component-specific styles are added inline using Tailwind classes

### Adding New Pages

1. Create new files in the `src/app` directory following Next.js App Router conventions
2. For new sections on the homepage, create components in `src/components/ui/`
3. Import and add these components to `src/app/page.tsx`

### Key Files to Know

- `src/app/page.tsx`: Main homepage that imports all section components
- `src/app/layout.tsx`: Root layout with metadata, fonts, and global structure
- `src/app/globals.css`: Global styles and theme variables
- `src/data/projects.ts`: Project data and helper functions
- `src/data/experiences.ts`: Work experience data and interface definitions
- `src/data/education.ts`: Education history data
- `src/constants/animations.ts`: Animation configurations
- `src/constants/strings.ts`: Text constants for the site

## Running the Site

- Development: `npm run dev`
- Build: `npm run build`
- Start (production): `npm start`
- Deploy to GitHub Pages: Set up GitHub Actions or run `npm run build && npm run export`

## Visit the Site

[remuzel.github.io](https://remuzel.github.io)