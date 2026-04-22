# Front-Page.html Structure Documentation

## Overview

This document provides a comprehensive breakdown of the front-page.html file structure, components, and styling for the Pixelean Theme website.

## File Structure

### 1. HTML Document Structure

- **DOCTYPE**: HTML5
- **Language**: English
- **Meta Tags**:
  - Theme color: #EE3E15
  - Viewport: Responsive design enabled
  - Charset: UTF-8

### 2. Head Section

- **Title**: "Sitemap"
- **Font Loading**:
  - Archivo font family from Google Fonts
  - Swiper CSS for slider functionality
- **CSS Files**:
  - `./assets/css/main.css` (Tailwind generated)
  - `./assets/css/custom.css` (Custom styles)
  - `style.css` (Additional styles)
- **SVG Sprite**: Inline SVG icons for reuse

### 3. Body Structure

#### Header Section (Lines 88-121)

```html
<header
  class="header w-full xxl-screen:w-[1880px] mx-auto px-10 py-5 absolute top-5 left-1/2 right-1/2 -translate-x-1/2"
></header>
```

- **Logo**: Left-aligned with SVG logo
- **Navigation**: Center-aligned menu with items:
  - About
  - Services
  - Blog
  - FAQ
- **CTA Button**: "Book a call" with arrow icon

#### Main Content Sections

1. **Banner Section** (Lines 127-207)
   - Background: `banner-bg.png`
   - Layout: Flex with two columns on larger screens
   - Contains:
     - Clutch logo
     - Heading: "We create Digital products for Startups."
     - CTA: "Let's talk now"

2. **About Section** (Lines 214-343)
   - Title: "Pixelean is a global web design agency"
   - Subtitle: "We create clear, modern websites, apps, and SaaS products that users enjoy"
   - Features:
     - Avatar stack showing team members
     - Collaborative Process card
     - Statistics cards (10+ years, 900+ projects, 60+ countries)
     - Customer reviews with star ratings

3. **Video Section** (Lines 344-372)
   - Video player integration area

4. **Service Section** (Lines 373-683)
   - Service cards with icons and descriptions
   - Grid layout for multiple services

5. **Work Section** (Lines 684-862)
   - Portfolio/project showcase
   - Project cards with images and details

6. **Pricing Section** (Lines 863-1135)
   - Pricing tables with different tiers
   - Feature comparisons

7. **Process Section** (Lines 1136-1232)
   - Step-by-step process visualization
   - Workflow explanation

8. **FAQ Section** (Lines 1233-1447)
   - Frequently asked questions
   - Accordion-style expandable answers

9. **Blogs Section** (Lines 1448+)
   - Blog post previews
   - Article listings

## Key Components

### CSS Classes and Utilities

- **Layout Classes**:
  - `xxl-screen:w-[1880px]`: Extra large screen width
  - `px-10`, `py-5`: Padding utilities
  - `flex`, `grid`: Layout systems
  - `gap-10`, `gap-20`: Spacing between elements

- **Typography Classes**:
  - `banner-heading`: Large banner text
  - `text-5xl`, `text-7xl`: Font sizes
  - `font-semibold`: Font weight

- **Button Classes**:
  - `my-btn-primary`: Primary button style
  - `my-btn-secondary`: Secondary button style
  - `my-btn-ghost`: Ghost button style

- **Card Classes**:
  - `rounded-2xl`, `rounded-3xl`: Border radius
  - `p-8`, `p-5`: Padding
  - `bg-white`: Background color

### SVG Icons

The page includes several SVG icons:

- `icon-arrow-up-right`: Right arrow icon
- `clutch-logo`: Company logo
- `icon-star`: Filled star
- `icon-star-outline`: Outline star
- `quote-icon`: Quote mark

### Responsive Design

- Uses Tailwind CSS responsive utilities
- Breakpoints: `tab-sm`, `tab-lg`, `md-screen`, `lg-screen`, `xl-screen`
- Flex layouts that adapt to screen size

### Key Features

1. **Sticky Header**: Fixed position navigation
2. **Hero Banner**: Eye-catching top section with call-to-action
3. **Statistics Display**: Animated counters for achievements
4. **Service Grid**: Organized service presentation
5. **Portfolio Showcase**: Project gallery
6. **Pricing Tables**: Clear service tier comparison
7. **Process Visualization**: Step-by-step workflow
8. **FAQ Accordion**: Expandable Q&A section
9. **Blog Preview**: Latest articles section

### Styling Notes

- Custom color scheme with brand colors
- Box shadows for depth
- Gradient overlays for visual interest
- Smooth transitions and hover effects
- Consistent spacing using Tailwind utilities

### Dependencies

- Tailwind CSS for styling
- Swiper for slider functionality
- Google Fonts (Archivo)
- Custom CSS for additional styling

## File Paths

- Images: `./assets/images/`
- CSS: `./assets/css/`
- Main CSS: `./assets/css/main.css`
- Custom CSS: `./assets/css/custom.css`

This structure represents a modern, responsive web design agency website with multiple sections showcasing services, portfolio, pricing, and company information.
