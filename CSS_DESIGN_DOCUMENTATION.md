# CSS Design Documentation - Coffee Shop Landing Page

## Overview
A comprehensive, production-ready CSS stylesheet with professional styling, responsive design, and a cohesive coffee shop theme.

## Color Palette

### Primary Colors
- **Primary Brown (Espresso)**: `#6F4E37` - Main accent color for headings and interactive elements
- **Secondary Brown**: `#A0826D` - Secondary tone for gradient backgrounds
- **Dark Espresso**: `#2C1810` - Deep color for header and footer
- **Caramel/Accent**: `#D4A574` - Warm accent for buttons and highlights

### Background Colors
- **Off-White**: `#FAF7F0` - Light section backgrounds
- **Cream**: `#F5E6D3` - Warm cream for card backgrounds
- **White**: `#FFFFFF` - Clean white for content areas

### Text Colors
- **Dark Text**: `#333333` - Primary text
- **Light Text**: `#666666` - Secondary text
- **White**: `#FFFFFF` - Text on dark backgrounds

### Utility Colors
- **Border**: `#E8DCC8` - Subtle borders
- **Success**: `#2E7D32` - Success states
- **Error**: `#C62828` - Error/required field indicators

## Typography System

### Font Stack
- **Primary Font**: 'Segoe UI', Tahoma, Geneva, Verdana (Sans-serif for body)
- **Secondary Font**: 'Georgia', 'Times New Roman' (Serif for headings)

### Font Sizes
- **Base**: 1rem (16px)
- **Small**: 0.875rem (14px)
- **Large**: 1.125rem (18px)
- **Extra Large**: 1.5rem (24px)
- **2XL**: 2rem (32px)
- **3XL**: 2.5rem (40px) - Hero headings

### Font Weights
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Line Height
- **Standard**: 1.6 (body text)
- **Compact**: 1.2 (headings)

## Spacing System

Consistent 8px-based spacing scale:
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px)
- **MD**: 1rem (16px)
- **LG**: 1.5rem (24px)
- **XL**: 2rem (32px)
- **2XL**: 3rem (48px)
- **3XL**: 4rem (64px)

## Component Styles

### Header & Navigation
- ✅ Sticky navigation bar with gradient background
- ✅ Logo with hover effects
- ✅ Smooth underline animation on nav links
- ✅ Responsive flexbox layout
- ✅ Professional shadow and elevation

### Hero Section
- ✅ Eye-catching gradient background
- ✅ Animated background pattern (drift animation)
- ✅ Centered content with text shadows for readability
- ✅ Large, impactful typography
- ✅ CTA button with hover states
- ✅ 600px minimum height (responsive)

### About Section
- ✅ Soft cream background for visual separation
- ✅ Feature cards with:
  - Left border accent (4px solid color)
  - White background for contrast
  - Smooth hover effects (elevation & transform)
  - Grid layout that responds to screen size
  - Box shadows for depth

### Menu Section
- ✅ Responsive grid (3 columns → 1 column on mobile)
- ✅ Menu item cards with:
  - Subtle gradient background
  - Smooth shine effect on hover
  - Price styling in primary color
  - Description and details text hierarchy
  - Hover animations (elevation & transform)

### Contact Section
- ✅ Two-column layout (contact info + form)
- ✅ Responsive single column on mobile
- ✅ Contact Information Card:
  - Professional address formatting
  - Clickable email and phone links
  - Business hours display
- ✅ Contact Form with:
  - All standard form elements (input, select, textarea)
  - Label styling with required indicators (*)
  - Focus states with color and shadow
  - Checkbox group layout
  - Submit button with hover effects
  - Helper text below submit

### Footer
- ✅ Gradient dark background matching header
- ✅ Multi-column layout (3 sections)
- ✅ Footer links with hover effects
- ✅ Bottom footer with copyright and policy links
- ✅ Responsive collapse on mobile

## Responsive Design

### Breakpoints

**Tablet (max-width: 768px)**
- Reduced font sizes (maintains hierarchy)
- Reduced spacing for more compact layouts
- Hero section height adjusted to 450px
- Menu items stack to single column
- Contact sections stack to single column
- Navigation spacing optimized

**Mobile (max-width: 480px)**
- Further reduced font sizes
- Hero section height 350px
- Navigation stacks vertically
- Single-column layouts throughout
- Reduced padding and margins
- Checkbox groups stack vertically
- Footer sections stack with reduced gaps

**Large Screens (min-width: 1400px)**
- Increased font sizes for larger displays
- Container width extends to 1400px
- More spacious layouts

### Responsive Features
- ✅ Mobile-first approach
- ✅ CSS variables for easy scaling
- ✅ Flexible grid layouts (auto-fit, minmax)
- ✅ Viewport meta tag implementation
- ✅ Touch-friendly button sizes
- ✅ Readable text on all devices

## Interactive Features

### Transitions & Animations
- **Fast Transitions**: 0.2s ease (hover states)
- **Normal Transitions**: 0.3s ease (standard interactions)
- **Slow Transitions**: 0.5s ease (emphasis effects)
- **Drift Animation**: Infinite background animation in hero (20s loop)

### Hover Effects
- **Navigation Links**: Color change + underline animation
- **Buttons**: Lift effect (translateY) + shadow enhancement
- **Cards**: Elevation + slight upward movement
- **Links**: Color transition to accent color

### Focus States
- **Form Inputs**: Border color change + glow effect
- **All Interactive Elements**: Clear visual feedback

## Accessibility Features

### Implemented
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1 → h6)
- ✅ Color contrast ratios meet WCAG standards
- ✅ Focus states visible on all interactive elements
- ✅ Labels associated with form inputs
- ✅ Required field indicators
- ✅ Reduced motion media query (@media prefers-reduced-motion)
- ✅ Dark mode support (@media prefers-color-scheme: dark)

### Dark Mode Support
- Automatically adjusts colors when user prefers dark scheme
- Maintains readability and contrast
- Preserves brand colors where appropriate

## Box Shadows (Elevation System)

- **Small**: `0 1px 2px rgba(0, 0, 0, 0.05)` - Subtle depth
- **Medium**: `0 4px 6px rgba(0, 0, 0, 0.1)` - Cards & default
- **Large**: `0 10px 15px rgba(0, 0, 0, 0.15)` - Hover states
- **Extra Large**: `0 20px 25px rgba(0, 0, 0, 0.2)` - Maximum emphasis

## Border Radius

- **Small**: 4px - Minimal curve
- **Medium**: 8px - Standard inputs
- **Large**: 12px - Cards and buttons
- **Full**: 50% - Circles

## CSS Variables Usage

All colors, fonts, spacing, and transitions are defined as CSS custom properties (:root) for:
- ✅ Easy maintenance and updates
- ✅ Consistent design system
- ✅ Quick theme changes
- ✅ Media query adjustments
- ✅ Dark mode overrides

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ CSS Grid & Flexbox support
- ✅ CSS Variables support
- ✅ Gradient backgrounds
- ✅ CSS animations
- ✅ Media queries

## Performance

- ✅ Optimized CSS (single stylesheet)
- ✅ Efficient selectors
- ✅ Hardware-accelerated animations (transform, opacity)
- ✅ Minimal repaints and reflows
- ✅ No external dependencies

## File Structure

```
css/
└── styles.css (762 lines)
    ├── Root Variables & Resets
    ├── Typography
    ├── Container & Layout
    ├── Header & Navigation
    ├── Hero Section
    ├── Buttons & CTA
    ├── About Section
    ├── Menu Section
    ├── Contact Section
    ├── Contact Form
    ├── Footer
    ├── Responsive Design (3 breakpoints)
    ├── Utility Classes
    └── Accessibility & Dark Mode
```

## Usage Example

```html
<!-- Link in HTML head -->
<link rel="stylesheet" href="css/styles.css">

<!-- Use semantic structure -->
<header class="header">
    <nav class="navbar">
        <div class="container">
            <!-- Navigation content -->
        </div>
    </nav>
</header>

<!-- Responsive containers -->
<section class="about">
    <div class="container">
        <!-- Content automatically centers and constrains width -->
    </div>
</section>

<!-- Use CSS variables via inline styles if needed -->
<div style="background-color: var(--color-primary);">
    <!-- Content -->
</div>
```

## Customization Guide

To change the color scheme:
1. Edit the color variables in `:root` section
2. All components automatically update
3. Example: Change `--color-primary: #6F4E37;` to your brand color

To adjust spacing:
1. Modify spacing variables in `:root`
2. All layouts automatically adjust
3. Scale example: Change `--spacing-md: 1rem;` to `1.2rem;`

To modify typography:
1. Update font families in `:root`
2. Adjust font sizes for different breakpoints
3. Change font weights as needed

## Summary

This CSS stylesheet provides:
- ✅ **Professional Design** - Coffee shop themed with warm, inviting colors
- ✅ **Responsive Layout** - Works beautifully on all device sizes
- ✅ **Consistent System** - CSS variables for easy maintenance
- ✅ **Interactive Elements** - Smooth animations and hover effects
- ✅ **Accessibility** - WCAG compliant with dark mode support
- ✅ **Performance** - Optimized for fast loading and rendering
- ✅ **Production Ready** - Comprehensive and well-structured

**Total CSS**: 762 lines of well-organized, commented code
