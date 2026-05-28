# One-Global-Logistics Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Installation & Setup](#installation--setup)
5. [Development](#development)
6. [Build & Deployment](#build--deployment)
7. [Components](#components)
8. [Styling](#styling)
9. [Configuration](#configuration)
10. [Features](#features)
11. [Contributing](#contributing)
12. [Troubleshooting](#troubleshooting)

---

## Project Overview

**One-Global-Logistics** is a modern, responsive web application for a logistics company built with React and Vite. The website showcases the company's services, values, and provides a contact form for customer inquiries.

### Key Information

- **Website**: https://one-global-logistics.vercel.app
- **Repository**: AlNerdyy/One-Global-Logistics
- **Language**: JavaScript (React)
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Status**: Active Development

---

## Tech Stack

### Frontend Framework
- **React** (^19.2.4) - UI library for building interactive components
- **React DOM** (^19.2.4) - React rendering library for web

### Build Tools
- **Vite** (^8.0.4) - Next-generation frontend build tool for fast development and optimized builds
- **@vitejs/plugin-react** (^6.0.1) - React plugin for Vite using Oxc

### Code Quality
- **ESLint** (^9.39.4) - JavaScript linter for code quality
  - @eslint/js (^9.39.4)
  - eslint-plugin-react-hooks (^7.0.1)
  - eslint-plugin-react-refresh (^0.5.2)
- **globals** (^17.4.0) - Global object definitions

### Type Support
- **@types/react** (^19.2.14) - TypeScript types for React
- **@types/react-dom** (^19.2.3) - TypeScript types for React DOM

---

## Project Structure

```
One-Global-Logistics/
├── public/                 # Static assets (served as-is)
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx    # Navigation header with smooth scrolling
│   │   ├── Hero.jsx      # Hero section with call-to-action
│   │   ├── About.jsx     # Company about section
│   │   ├── Services.jsx  # Services showcase
│   │   ├── WhyChooseUs.jsx # Differentiation section
│   │   ├── CoreValues.jsx # Company core values
│   │   ├── Contact.jsx   # Contact form with Formspree integration
│   │   └── Footer.jsx    # Footer information
│   ├── assets/           # Images and media
│   │   └── OneGlobalLogo.png # Company logo
│   ├── App.jsx          # Main App component
│   ├── App.css          # Global and component styles
│   ├── index.css        # Base styles
│   └── main.jsx         # React entry point
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Locked dependency versions
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── .env                 # Environment variables (not tracked)
├── .gitignore          # Git ignore rules
└── README.md           # Basic project template info
```

---

## Installation & Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher) or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AlNerdyy/One-Global-Logistics.git
   cd One-Global-Logistics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   ```bash
   # Create .env file in project root
   # Add Formspree endpoint for contact form
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

---

## Development

### Available Scripts

```bash
# Start development server with hot module replacement (HMR)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

### Development Workflow

1. Make changes to components in `src/components/`
2. Vite will automatically refresh the browser (HMR)
3. Check code quality with `npm run lint`
4. Test all features before committing

### Best Practices

- Keep components focused on a single responsibility
- Use consistent naming conventions (PascalCase for components)
- Add comments for complex logic
- Test components across different screen sizes
- Follow ESLint rules

---

## Build & Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deployment

The project is currently deployed on **Vercel**:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `VITE_FORMSPREE_ENDPOINT`
3. Vercel automatically deploys on every push to main branch

### Vercel Configuration

- **Live URL**: https://one-global-logistics.vercel.app
- **Auto-deploy**: Enabled for main branch
- **Build command**: `npm run build`
- **Output directory**: `dist`

---

## Components

### 1. **Header Component** (`src/components/Header.jsx`)

**Purpose**: Navigation header with sticky positioning and scroll detection

**Features**:
- Fixed header that changes appearance on scroll
- Smooth navigation to page sections
- Mobile-responsive hamburger menu
- Active section highlighting in navigation
- Logo/branding display

**Key State**:
- `scrolled` - Tracks if page is scrolled
- `activeSection` - Current visible section
- `menuOpen` - Mobile menu open/close state

**Props**: None (uses local state)

**Example Navigation Items**:
- Home
- About Us
- Services
- Why Choose Us
- Contact Us

---

### 2. **Hero Component** (`src/components/Hero.jsx`)

**Purpose**: Large banner section with main call-to-action

**Features**:
- Full-height hero section
- Background image with overlay
- Bold headline and description
- Call-to-action buttons
- Responsive typography

---

### 3. **About Component** (`src/components/About.jsx`)

**Purpose**: Company background, vision, and mission

**Features**:
- Company description
- Vision statement
- Mission statement
- Two-column layout on desktop

---

### 4. **Services Component** (`src/components/Services.jsx`)

**Purpose**: Showcase of company services

**Features**:
- Grid of service cards
- Service descriptions
- Hover effects
- Responsive grid (3 columns desktop, 2 mobile, 1 tablet)

**Services Offered**:
- Freight Handling
- Cargo Coordination
- Transport Planning
- Delivery Management
- Warehousing Support
- Documentation Support
- General Inquiry

---

### 5. **WhyChooseUs Component** (`src/components/WhyChooseUs.jsx`)

**Purpose**: Differentiation and key advantages

**Features**:
- Side-by-side layout (image + text)
- Feature highlights
- Image gallery
- Competitive advantages

---

### 6. **CoreValues Component** (`src/components/CoreValues.jsx`)

**Purpose**: Display company core values

**Features**:
- 4-column grid (responsive)
- Value cards with titles and descriptions
- Consistent styling

---

### 7. **Contact Component** (`src/components/Contact.jsx`)

**Purpose**: Contact information and inquiry form

**Features**:
- Contact details (phone, email, address, hours)
- Contact form with validation
- Service dropdown selector
- Form submission via Formspree
- Success/error messages
- Loading state during submission

**Form Fields**:
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- Service Needed (required)
- Message (required)

**Integration**: Uses Formspree for form submission
- Environment variable: `VITE_FORMSPREE_ENDPOINT`

**Status Messages**:
- Success: Green background, confirmation message
- Error: Red background, error message
- Submitting: Button state changes to "Sending..."

---

### 8. **Footer Component** (`src/components/Footer.jsx`)

**Purpose**: Footer with company info and links

**Features**:
- Company information
- Quick links
- Additional resources
- Copyright notice
- Responsive layout

---

## Styling

### Design System

The project uses a cohesive design system defined in `src/App.css`:

#### Color Palette

```css
--primary: #2f5397          /* Main brand color (blue) */
--primary-dark: #223f73     /* Darker blue for hover states */
--accent: #cf1f2e           /* Red accent color */
--bg: #f3f3f3              /* Light background */
--surface: #ffffff         /* White surface */
--text: #1f2a3a           /* Dark text */
--muted: #5b6677          /* Muted text color */
--border: #d8dbe2         /* Border color */
--hero-overlay: rgba(4, 10, 24, 0.55)  /* Hero section overlay */
--shadow: 0 10px 30px rgba(0, 0, 0, 0.08)  /* Drop shadow */
```

#### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400, 500, 600, 700, 800
- **Base Font Size**: 1rem
- **Line Height**: 1.6

#### Responsive Breakpoints

```css
@media (max-width: 1024px) {
  /* Tablet styles */
  Grid layouts change from 3 cols to 2 cols
}

@media (max-width: 780px) {
  /* Mobile styles */
  Grid layouts stack to 1 column
  Menu becomes hamburger
  Typography scales down
}
```

#### Key CSS Classes

**Buttons**:
- `.btn` - Base button style
- `.btn-primary` - Primary button (blue background)
- `.btn-secondary` - Secondary button (lighter blue)

**Containers**:
- `.container` - Max-width container with margins
- `.section-white` - Light background section
- `.contact-wrap` - Contact section wrapper

**Forms**:
- `.form-group` - Form field wrapper
- `.form-success` - Success message styling
- `.form-error` - Error message styling
- `.form-submit` - Submit button styling

---

## Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Formspree form endpoint for contact form submissions
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### Vite Configuration (`vite.config.js`)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- Enables React plugin with Oxc for fast compilation
- No additional configuration needed for basic setup

### ESLint Configuration (`eslint.config.js`)

The project includes ESLint for code quality:
- React specific rules
- React Hooks best practices
- Fast refresh support

### HTML Entry Point (`index.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>onegloballogistics</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## Features

### 1. **Responsive Design**
- Mobile-first approach
- Three breakpoint system (1024px, 780px)
- Flexible grid layouts
- Responsive typography

### 2. **Smooth Scrolling Navigation**
- Smooth scroll behavior (CSS)
- Active section highlighting
- Fixed header navigation
- Hash-based routing (#sections)

### 3. **Sticky Header**
- Changes appearance on scroll
- Logo display
- Mobile hamburger menu
- Navigation link highlighting

### 4. **Contact Form**
- Form validation
- Formspree integration
- Error handling
- Success feedback
- Loading states

### 5. **Mobile Menu**
- Hamburger toggle button
- Smooth animations
- Closes on link click
- Accessible (aria labels)

### 6. **Performance**
- Optimized with Vite
- Fast HMR in development
- Optimized production build
- Image optimization

---

## Contributing

### Guidelines

1. **Branching**
   - Create feature branches from `main`
   - Use descriptive branch names: `feature/component-name`

2. **Code Style**
   - Follow ESLint rules
   - Run `npm run lint` before committing
   - Use consistent formatting

3. **Components**
   - Keep components small and focused
   - Export as default
   - Use functional components with hooks

4. **Commits**
   - Write clear, descriptive commit messages
   - Use conventional commit format when possible

5. **Testing**
   - Test on multiple screen sizes
   - Test cross-browser compatibility
   - Verify form submissions

---

## Troubleshooting

### Common Issues

#### 1. **Development Server Won't Start**

**Problem**: `npm run dev` fails
**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### 2. **Environment Variables Not Loading**

**Problem**: `VITE_FORMSPREE_ENDPOINT` is undefined
**Solution**:
- Create `.env` file in project root (not in src)
- Environment variables must start with `VITE_` prefix
- Restart dev server after changing .env
- Check that endpoint is correct in Formspree dashboard

#### 3. **Contact Form Not Submitting**

**Problem**: Form submission fails silently
**Debug Steps**:
- Check browser console for errors
- Verify `VITE_FORMSPREE_ENDPOINT` is set correctly
- Test with valid email address
- Check Formspree dashboard for error logs

#### 4. **Styling Issues After Build**

**Problem**: Styles look different in production
**Solution**:
- Check that all CSS imports are correct
- Ensure CSS files are in src directory
- Verify no CSS is being stripped out
- Test with `npm run preview`

#### 5. **Mobile Menu Not Closing**

**Problem**: Hamburger menu stays open on mobile
**Solution**:
- Check if JavaScript is enabled
- Verify `setMenuOpen(false)` is called on link click
- Check z-index and modal backdrop issues

#### 6. **Navigation Not Highlighting Correctly**

**Problem**: Active section indicator doesn't update
**Solution**:
- Verify section IDs match navigation link hashes
- Check scroll offset calculation (currently 140px)
- Test scroll event listener is attached
- Inspect element to verify active class is applied

### Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ❌ Not supported

### Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images before adding
   - Use appropriate image sizes

2. **Code Splitting**
   - Vite handles this automatically
   - Monitor build size with `npm run build`

3. **Lighthouse Audits**
   - Run Lighthouse in DevTools
   - Aim for 90+ scores
   - Check Core Web Vitals

---

## Support & Resources

### Documentation Links

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Formspree Documentation](https://formspree.io)
- [MDN Web Docs](https://developer.mozilla.org)

### Contact

For questions about the project:
- GitHub Issues: [Create an issue](https://github.com/AlNerdyy/One-Global-Logistics/issues)
- Repository: https://github.com/AlNerdyy/One-Global-Logistics

### License

Please check the repository for license information.

---

**Last Updated**: 2026-05-28
**Version**: 0.0.0 (Development)
