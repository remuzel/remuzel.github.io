# Remi Uzel | Personal Portfolio

Welcome to my personal portfolio website, showcasing my work as a Software Development Engineer at Amazon Alexa.

## Portfolio Website Overview

This is a modern, responsive portfolio website built using Next.js, Tailwind CSS, and Framer Motion, with an Alexa-inspired design theme.

## Project Structure

```
remuzel.github.io/
├── public/                 # Static assets
│   └── images/             # Images including your logo and photos
├── src/
│   ├── app/                # Next.js app router pages
│   │   ├── projects/       # Projects section with dynamic routing
│   │   │   ├── [id]/       # Individual project page
│   │   │   └── page.tsx    # Projects listing page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout with metadata
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   └── ui/             # UI components
│   │       ├── about.tsx   # About section
│   │       ├── experience.tsx # Experience timeline
│   │       ├── footer.tsx  # Footer component
│   │       ├── hero.tsx    # Hero section with Alexa animations
│   │       ├── navbar.tsx  # Navigation component
│   │       └── projects.tsx # Projects showcase section
│   └── data/               # Data files
│       └── projects.ts     # Projects data and helper functions
```

## Key Features

1. **Alexa-Themed Design**
   - Custom color scheme matching Alexa's branding
   - Animated rings in the hero section
   - Pulsing animations reminiscent of Alexa's voice UI

2. **Responsive Layout**
   - Mobile-first design that adapts to all screen sizes
   - Hamburger menu for mobile navigation
   - Grid layouts that reflow based on screen width

3. **Interactive Elements**
   - Social icons that grow and glow on hover
   - Smooth scroll navigation
   - Animated sections that appear as you scroll

4. **Projects System**
   - Modular data structure in `src/data/projects.ts`
   - Dynamic project pages with [id] route parameters
   - Easily add new projects by updating the data file

5. **Animations**
   - Page elements animate in as you scroll
   - Subtle hover animations
   - Voice visualization in the hero

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

### Updating Experience

1. Edit `src/components/ui/experience.tsx`
2. Modify the `experiences` array to update job history

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

## Running the Site

- Development: `npm run dev`
- Build: `npm run build`
- Start (production): `npm start`
- Deploy to GitHub Pages: Set up GitHub Actions or run `npm run build && npm run export`

## Visit the Site

[remuzel.github.io](https://remuzel.github.io)