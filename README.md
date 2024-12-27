# Academic Portfolio Website

A modern, responsive academic portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Nathaniyell/yunhee-academic-portfolio.git
cd yunhee-academic-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

### Constants and Data
All website content is centralized in `/src/lib/data.ts`. This includes:

- `navigation`: Main navigation menu items
- `theme`: Global theme settings (colors, spacing, layout)
- `animations`: Framer Motion animation presets
- `resumeData`: Professional experience and qualifications
- `publications`: Academic publications
- `news`: Recent news and updates
- `teachingData`: Course information and materials
- `blogArticles`: Blog posts and articles

To customize the content, edit the corresponding objects in `data.ts`. For example:

```typescript
// Update navigation items
export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // Add or modify navigation items...
]

// Update theme settings
export const theme = {
  colors: {
    primary: 'blue-600',
    // Modify color schemes...
  },
  // Update other theme properties...
}
```

### Key Features

- Responsive design
- Dark/light mode support
- Smooth page transitions
- SEO optimized
- Type-safe data management
- Accessible UI components

### Page Structure

- `/`: Home page with hero section
- `/about`: About page with research interests
- `/resume`: Interactive resume with tabs
- `/publications`: Academic publications
- `/teaching`: Teaching portfolio
- `/blog`: Blog articles
- `/contact`: Contact information

## Making Changes

1. **Content Updates**: Modify the data objects in `/src/lib/data.ts`
2. **Styling**: Update theme settings in the same file or modify Tailwind classes
3. **Layout**: Edit page components in `/src/app/[page]/page.tsx`
4. **Components**: Modify or create new components in `/src/components`

## Built With

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn UI](https://ui.shadcn.com/)

## Deployment

The site can be deployed on [Vercel](https://vercel.com) with zero configuration:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy

## License

This project is licensed under the MIT License - see the LICENSE file for details.
