# Viewport & Responsive Design Reference Guide

## Quick Reference: Responsive Breakpoints

### Device Categories & Breakpoints

```
┌─────────────────────────────────────────────────────────────────┐
│                    RESPONSIVE BREAKPOINTS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  MOBILE                TABLET              DESKTOP               │
│  320px - 480px         481px - 1199px      1200px+              │
│  ┌──────────────┐      ┌────────────┐      ┌──────────────┐     │
│  │ Small Phone  │      │ Tablet     │      │ Desktop      │     │
│  │ iPhone SE    │      │ iPad       │      │ Laptop       │     │
│  │ Pixel 4a     │      │ Galaxy Tab │      │ Desktop PC   │     │
│  └──────────────┘      └────────────┘      └──────────────┘     │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Detailed Viewport Guide

### 1. MOBILE PHONES (320px - 480px)

**Devices:**
- iPhone SE (375px)
- iPhone 12 mini (375px)
- Samsung Galaxy S20 (360px)
- Google Pixel 4a (393px)
- OnePlus 8 (412px)

**Layout Changes:**
```
Navigation:
  Logo
  [Menu items stacked vertically]

Hero:
  - Height: 350px
  - Font: Scaled down
  - Button: Full width ready

Content:
  - Grid: 1 column
  - Sections: Single column
  - Cards: Full width

Forms:
  - Input: Full width, 16px font
  - Touch targets: 44px minimum
  - Spacing: Compact but usable
```

**Font Sizes:**
- Base: 0.95rem (15px)
- h2: 1.35rem
- h3: 1.15rem
- Small: 0.8rem

**Spacing:**
- Padding: 0.75rem (12px)
- Gap: 1rem (16px)
- Section: 1.5rem (24px)

---

### 2. LARGE PHONES & SMALL TABLETS (481px - 768px)

**Devices:**
- iPhone 12/13 (390px)
- Samsung Galaxy A52 (412px)
- iPad mini (768px in landscape)
- Kindle Fire (600px)

**Layout Changes:**
```
Navigation:
  Logo (horizontal) | Menu items (horizontal)

Hero:
  - Height: 450px
  - Font: Optimized for tablet
  - Better visual hierarchy

Content:
  - Grid: 2 columns for menus
  - Cards: 2-column layout
  - Better space utilization

Forms:
  - Input: Full width
  - Better padding and spacing
  - Improved readability
```

**Font Sizes:**
- Base: 0.975rem
- h2: 1.75rem
- h3: 1.35rem

**Spacing:**
- Padding: 1rem (16px)
- Gap: 1.5rem (24px)
- Section: 2rem (32px)

---

### 3. TABLETS (769px - 1199px)

**Devices:**
- iPad (10.2") - 768px
- iPad Air - 820px
- Samsung Galaxy Tab S7 - 800px
- Surface Go - 912px

**Layout Changes:**
```
Navigation:
  Full horizontal layout
  Logo left, menu right

Hero:
  - Height: 550px
  - Optimized typography
  - Good visual impact

Content:
  - Grid: 2-3 columns
  - Menu: 2 columns
  - Features: 3 columns

Forms:
  - Proper spacing
  - Touch-friendly
  - Two-column ready
```

**Font Sizes:**
- Base: 0.98rem
- h2: 1.75rem
- h3: 1.4rem

**Spacing:**
- Padding: 1.25rem
- Gap: 2rem
- Section: 2rem

---

### 4. DESKTOPS (1200px - 1399px)

**Devices:**
- MacBook Air (1440px)
- Dell XPS 13 (1920px)
- Standard Laptop (1366px)
- Desktop Monitor (1920px)

**Layout Changes:**
```
Navigation:
  Full horizontal layout
  Professional spacing

Hero:
  - Height: 600px
  - Full visual impact
  - Large typography

Content:
  - Grid: 3 columns
  - Menu: 3 items per row
  - Features: 3 columns
  - Contact: 2 columns

Forms:
  - Spacious layout
  - Professional appearance
  - Optimal readability
```

**Font Sizes:**
- Base: 1rem (16px)
- h2: 2rem
- h3: 1.5rem

**Spacing:**
- Padding: 1.5rem (24px)
- Gap: 3rem (48px)
- Section: 4rem (64px)

**Container:**
- Max-width: 1200px
- Centered with auto margins

---

### 5. LARGE DESKTOPS (1400px+)

**Devices:**
- 4K Monitors (3840px)
- Ultra-wide (3440px)
- Large desktop setups (2560px+)

**Enhancements:**
```
Typography:
  - h1: 3rem
  - h2: 2.25rem
  - Enhanced presence

Spacing:
  - Breathable layouts
  - More white space
  - Professional feel

Container:
  - Max-width: 1400px
  - Extra padding
  - Optimal readability
```

---

## CSS Media Query Roadmap

```css
/* Mobile First Approach */

/* Base Styles (Desktop) */
/* All properties default to 1200px+ viewport */

/* Large Desktop */
@media (min-width: 1400px) {
    /* Enhancements for ultra-wide screens */
}

/* Desktop */
@media (min-width: 1200px) {
    /* Desktop-optimized layouts */
}

/* Large Tablet */
@media (min-width: 769px) and (max-width: 1199px) {
    /* Tablet optimizations */
}

/* Small Tablet / Large Phone */
@media (max-width: 768px) and (min-width: 481px) {
    /* Two-column layouts */
}

/* Mobile */
@media (max-width: 480px) {
    /* Single column, mobile-optimized */
}
```

---

## Responsive Element Guide

### Navigation
```
320px:  [Logo]
        [Menu 1]
        [Menu 2]
        [Menu 3]
        [Menu 4]

768px:  [Logo] [Menu 1] [Menu 2] [Menu 3] [Menu 4]

1200px: [Logo] ................... [Menu 1] [Menu 2] [Menu 3] [Menu 4]
```

### Menu Items Grid
```
320px: [Item 1]
       [Item 2]
       [Item 3]
       [Item 4]
       [Item 5]
       [Item 6]

768px: [Item 1] [Item 2]
       [Item 3] [Item 4]
       [Item 5] [Item 6]

1200px: [Item 1] [Item 2] [Item 3]
        [Item 4] [Item 5] [Item 6]
```

### Contact Section
```
320px: [Info]
       [Form]

768px: [Info] [Form]

1200px: [............. Info .............] [........... Form ...........]
```

---

## Testing Viewport Sizes

### Test These Exact Widths
```
✓ 320px  - Smallest mobile
✓ 375px  - iPhone standard
✓ 480px  - Larger mobile breakpoint
✓ 768px  - iPad portrait/tablet
✓ 1024px - iPad landscape
✓ 1200px - Desktop minimum
✓ 1920px - Full HD
✓ 2560px - QHD
```

### Chrome DevTools Testing
```
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Select device or custom dimensions
4. Test these sizes:
   - iPhone SE (375x667)
   - iPhone 12 (390x844)
   - iPad (768x1024)
   - Laptop (1366x768)
   - Desktop (1920x1080)
```

---

## Key Responsive Behaviors

### Navigation Behavior
```
≤480px:  Stacked, centered
481-768px: Horizontal, flex
≥769px:  Full horizontal with spacing
```

### Grid Behavior
```
≤480px:  grid-template-columns: 1fr
481-768px: grid-template-columns: repeat(2, 1fr)
≥1200px: grid-template-columns: repeat(3, 1fr)
```

### Hero Behavior
```
≤480px:  height: 350px, padding reduced
481-768px: height: 450px, balanced padding
≥1200px: height: 600px, full visual impact
```

### Contact Behavior
```
≤768px:  grid-template-columns: 1fr (stacked)
≥769px:  grid-template-columns: repeat(2, 1fr)
```

---

## Common Responsive Patterns Used

### Pattern 1: Auto-fit Grid
```css
.menu-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-2xl);
}
```
**Result:** Automatically adjusts columns based on available space

### Pattern 2: Flex Wrap Navigation
```css
.nav-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
}
```
**Result:** Items wrap when space is limited

### Pattern 3: Breakpoint-Specific Columns
```css
@media (max-width: 480px) {
    .menu-items {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .menu-items {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1200px) {
    .menu-items {
        grid-template-columns: repeat(3, 1fr);
    }
}
```
**Result:** Explicit control at key breakpoints

---

## Overflow Prevention Techniques

### 1. Width Constraints
```css
html, body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
}
```

### 2. Flexible Content
```css
p {
    word-wrap: break-word;
    overflow-wrap: break-word;
}
```

### 3. Container Width
```css
.container {
    max-width: var(--container-width);
    padding: 0 var(--container-padding);
    /* Padding prevents edge touching */
}
```

### 4. Section Width
```css
section {
    width: 100%;
    /* Explicit 100% width of parent */
}
```

---

## Performance Considerations

### CSS Performance
- ✓ Grouped media queries by breakpoint
- ✓ Efficient selectors (avoid deep nesting)
- ✓ CSS Grid and Flexbox (GPU accelerated)
- ✓ Hardware-accelerated transforms

### JavaScript Performance
- ✓ Minimal DOM manipulation
- ✓ Efficient event listeners
- ✓ Debounced resize handler
- ✓ No heavy computations

### Image Performance
- ✓ All images responsive
- ✓ No fixed dimensions that overflow
- ✓ Proper aspect ratios maintained
- ✓ Optimized for mobile delivery

---

## Validation Checklist

When testing responsive design, verify:

### Mobile (320px)
- [ ] No horizontal scrolling
- [ ] Text readable at 16px+ minimum
- [ ] Touch targets 44x44px minimum
- [ ] Navigation accessible
- [ ] All content visible without pinching
- [ ] Forms usable with thumbs
- [ ] Buttons tappable easily

### Tablet (768px)
- [ ] Two-column layouts working
- [ ] Proper spacing utilization
- [ ] Navigation displays well
- [ ] Content not cramped
- [ ] Forms properly formatted
- [ ] Images scale correctly

### Desktop (1200px+)
- [ ] Three-column layouts active
- [ ] Container width 1200px (or 1400px)
- [ ] Full typography implemented
- [ ] Professional spacing
- [ ] All features visible
- [ ] No unused space

---

## Quick Copy-Paste CSS Rules

### Responsive Container
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--container-padding);
    width: 100%;
}
```

### Responsive Grid
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-2xl);
    width: 100%;
}
```

### Responsive Text
```css
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
    /* Scales between 1.5rem and 3rem */
}
```

### Overflow Prevention
```css
html, body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
}
```

---

## Resources

- [MDN: Responsive Web Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS Grid Responsive](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox Responsive](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)

---

## Summary

The Coffee Shop landing page is fully responsive across:
- ✅ **320px** - Mobile phones
- ✅ **768px** - Tablets
- ✅ **1200px** - Desktops
- ✅ **1400px+** - Large displays

With **zero horizontal scrolling** at any viewport size.
