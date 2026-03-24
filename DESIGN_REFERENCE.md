# Design Implementation - Visual Reference Guide

## Quick Navigation

### 1. **Sticky Registration Button** 
**Location:** Navbar (Top Right)
- **Always visible** on all pages
- **Prominent CTA** with gradient background
- **Mobile responsive** - full width on small screens
- **Click target:** Links to `/register` page

### 2. **Enhanced Hero Section**
**Location:** Home.vue
- **Background:** Purple gradient matching logo
- **Typography:** Large, bold, white text
- **Subtitle:** Gold accent text
- **Pattern:** Subtle animated dot pattern
- **Call-to-Action:** Two buttons - "Register Now" (primary) and "Learn More" (secondary)

### 3. **Breadcrumb Navigation**
**Pages:** About, Contact, Teaching
- **Purpose:** Show page hierarchy and context
- **Format:** `Home › Current Page`
- **Styling:** Light gradient background with clickable links
- **Mobile:** Responsive font sizing

### 4. **Contact Page Cards**
**Location:** Contact.vue (Contact Information Section)
- **Card 1 - Address:** 📍 Shows physical location
- **Card 2 - Hours:** ⏰ Shows opening times
- **Hover Effect:** Elevates with shadow and color change
- **Icons:** Animated floating motion

### 5. **Contact Information Section**
**Location:** Contact.vue (Below cards)
- **Email:** ✉️ Clickable email link
- **Phone:** 📞 Clickable phone link
- **Facebook:** 👍 Social media link
- **Response Time:** Info box with response timeline

### 6. **Enhanced Sponsor Cards**
**Location:** Home.vue (Bottom section)
- **Hover Effect:** Rises up with shadow
- **Border:** Gradient top border appears on hover
- **Icon:** Floating animation
- **Professional Design:** Better spacing and typography

### 7. **Teaching Staff Section**
**Location:** Teaching.vue
- **Breadcrumb:** Navigation at top
- **Headteacher:** Featured card with larger image
- **Classroom Teachers:** Grid layout with photos
- **Assistant Teachers:** Sidebar layout
- **Online Teachers:** Full-width grid section
- **Cards:** Hover effects with gradient borders

---

## Color Scheme Reference

### Purple Branding
```
Deep Purple:     #590f32
Secondary:       #753856
Dark Purple:     #3d0a23
Light Purple:    #f4e8f0
Accent Gold:     #d4a574
White:           #ffffff
```

### Text Colors
- **Headings:** Deep Purple (#590f32)
- **Body Text:** Dark text (#2a0617)
- **Muted Text:** Medium gray (#5a3d4d)
- **Links:** Deep Purple (#590f32)

---

## Typography Scale

### Headings
- **Page Title:** `clamp(1.75rem, 4vw, 2.5rem)`
- **Section Title:** `clamp(1.25rem, 3vw, 1.75rem)`
- **Hero Title:** `clamp(2.5rem, 7vw, 4rem)`

### Body Text
- **Paragraph:** 1rem
- **Small Text:** 0.95rem
- **Muted Text:** 0.9rem

---

## Responsive Breakpoints

### Desktop (1200px+)
- Full multi-column layouts
- Navbar with all menu items visible
- Full-width images and cards

### Tablet (768px - 991px)
- Adjusted padding and spacing
- Narrower column layouts
- Navbar registers as mobile nav
- Breadcrumbs wrap as needed

### Mobile (< 576px)
- Single column layouts
- Full-width buttons and cards
- Stacked navigation menu
- Navbar CTA is full-width
- Reduced font sizes

---

## Interactive Elements

### Button Hover States
- **Primary Button:** Darker background with elevation
- **Secondary Button:** Color inversion
- **Outline Button:** Background fill on hover

### Card Hover States
- **Elevation:** translateY(-6px to -8px)
- **Shadow:** Enhanced shadow-lg
- **Border:** Primary color highlight
- **Gradient Bar:** Appears on top of card

### Link Hover States
- **Color Change:** Primary color to hover color
- **Underline:** Gold or primary color
- **Smooth Transition:** 0.3s cubic-bezier

---

## Animation Details

### Float Animation
- **Duration:** 3s
- **Direction:** Up and down motion
- **Uses:** Sponsor icons, contact icons

### Drift Pattern
- **Duration:** 25s (hero), 15s (other sections)
- **Effect:** Subtle dot pattern movement
- **Purpose:** Background visual interest

### Slide-In Animation
- **Duration:** 0.8s
- **Easing:** ease-out
- **Direction:** Bottom to top
- **Uses:** Content sections

---

## Accessibility Features

✅ **Semantic HTML**
- Proper heading hierarchy (h1, h2, h3, h4)
- Meaningful link text
- Address elements for contact info

✅ **ARIA Labels**
- Navigation landmarks
- Breadcrumb navigation
- Current page indicators

✅ **Color Contrast**
- WCAG AA compliant
- High contrast text/background
- Color not sole indicator

✅ **Keyboard Navigation**
- All interactive elements accessible
- Focus states visible
- Tab order logical

✅ **Mobile Accessibility**
- Touch targets: 48px minimum
- Readable font sizes
- Sufficient spacing

---

## CSS Custom Properties

All colors and shadows use CSS variables:

```css
:root {
  --primary-color: #590f32;
  --primary-dark: #3d0a23;
  --primary-darker: #2a0617;
  --primary-light: #f4e8f0;
  --secondary-color: #753856;
  --accent-gold: #d4a574;
  --accent-gold-dark: #b8944a;
  --text-dark: #2a0617;
  --text-medium: #5a3d4d;
  --text-light: #8a6d7d;
  --border-color: #e8d6e3;
  --shadow-sm: 0 2px 4px rgba(89, 15, 50, 0.1);
  --shadow-md: 0 4px 12px rgba(89, 15, 50, 0.15);
  --shadow-lg: 0 8px 24px rgba(89, 15, 50, 0.2);
  --shadow-xl: 0 12px 32px rgba(89, 15, 50, 0.25);
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## File Structure Changes

```
src/
├── views/
│   ├── Home.vue           ← Enhanced hero & sponsors
│   ├── About.vue          ← Added breadcrumbs
│   ├── Contact.vue        ← Added cards & breadcrumbs
│   ├── Teaching.vue       ← Added breadcrumbs
│   └── ... (other pages)
├── components/
│   ├── Navbar.vue         ← Sticky + Registration CTA
│   ├── Footer.vue         ← (existing)
│   └── ... (other components)
└── assets/
    ├── styles/
    │   └── main.css       ← Updated variables
    └── images/
```

---

## Testing Checklist

### Visual Testing
- [ ] Hero section displays correctly on all devices
- [ ] Breadcrumbs render on About, Contact, Teaching pages
- [ ] Navbar registration button is visible and sticky
- [ ] Contact cards hover effects work smoothly
- [ ] Sponsor cards display animations

### Functional Testing
- [ ] Registration button links to /register
- [ ] Breadcrumb links navigate correctly
- [ ] All buttons are clickable with proper hover states
- [ ] Forms are accessible and functional

### Responsive Testing
- [ ] Desktop (1920px): All elements display correctly
- [ ] Tablet (768px): Layout adjusts properly
- [ ] Mobile (375px): Touch targets are adequate

### Accessibility Testing
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces all content
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus states are visible

---

## Performance Notes

- ✅ CSS animations use GPU-accelerated properties (transform, opacity)
- ✅ No heavy JavaScript required
- ✅ Smooth scrolling enabled
- ✅ Responsive images and lazy loading ready
- ✅ Optimized shadow and gradient rendering

---

For detailed implementation notes, see: `IMPLEMENTATION_SUMMARY.md`

