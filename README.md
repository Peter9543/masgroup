# MAS Group Website

A professional website for MAS Group built with React, Tailwind CSS, and Shadcn UI.

## Features

- Responsive design for all device sizes
- Modern UI components using Shadcn UI
- Complete routing for all pages
- Professional layout with header and footer
- Dark theme implementation
- Interactive navigation with dropdown menus
- Background video in hero section
- Service icons with image support

## Pages

1. **Home** - Main landing page with company overview
2. **About Us** - Company history, vision, and mission
3. **Services** - Detailed information about all services
4. **Projects** - Portfolio of completed projects
5. **Safety** - Safety policies and approach
6. **Contact** - Contact form and office locations

## Technologies Used

- React.js
- Tailwind CSS
- Shadcn UI
- React Router DOM

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Add background video:
   - Place a video file named `hero-background.mp4` in the `public/videos/` directory
   - See `public/videos/README.md` for video specifications
4. Add service images (optional):
   - Place service icon images in `src/assets/services/` with appropriate naming
   - See `src/assets/services/README.md` for image specifications
5. Start the development server:
   ```
   npm run dev
   ```
6. Open your browser to http://localhost:5173 (or the port shown in the terminal)

## Folder Structure

```
src/
├── components/
│   ├── layout/     # Header, Footer, and ThemeProvider components
│   └── ui/         # Shadcn UI components
├── pages/          # Page components
├── assets/         # Images and other assets
│   └── services/   # Service icon images
└── lib/            # Utility functions
```

## Dark Theme

The website features a professional dark theme that is used consistently throughout all pages. The theme is implemented using Tailwind CSS dark mode classes.

## Background Video

The hero section on the Home page includes a background video. To use this feature:

1. Add a video file named `hero-background.mp4` to the `public/videos/` directory
2. The video will automatically play, loop, and be muted
3. The video is set to 20% opacity to blend with the background gradient

## Service Images

The Core Services section supports custom images for each service:

1. Add service images to `src/assets/services/` with the naming convention:
   - manpower-support.png
   - contracting-engineering.png
   - trading-supply.png
   - transportation-limousine.png
   - corporate-real-estate.png
   - facility-management.png
2. Images should be 48x48 pixels for best results
3. Uncomment the image import code in Home.jsx to use actual images instead of placeholders

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the production version
- `npm run preview` - Previews the production build

## Customization

To customize the website:

1. Update content in the page components in `src/pages/`
2. Modify styles using Tailwind CSS classes
3. Update navigation links in `src/components/layout/Header.jsx`
4. Update contact information in `src/components/layout/Footer.jsx`

## Deployment

To deploy the website, build the project and serve the contents of the `dist/` folder:

```
npm run build
```