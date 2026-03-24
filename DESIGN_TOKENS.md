# Design System & CSS Variables

## Color Palette

### Primary Colors
- **Primary Blue** (`--primary-color`): `#0b5ed7` - Main brand color for buttons, links, and primary text
- **Primary Dark** (`--primary-dark`): `#083d8a` - Darker shade for hover states and emphasis
- **Primary Darker** (`--primary-darker`): `#051f3d` - Deepest shade for footer background

### Secondary Colors
- **Secondary Color** (`--secondary-color`): `#0a58ca` - Accent color for highlights
- **Accent Gold** (`--accent-gold`): `#d4a574` - Warm accent for decorative elements
- **Accent Gold Dark** (`--accent-gold-dark`): `#b8944a` - Darker gold for hover states

### Background Colors
- **Primary Light** (`--primary-light`): `#eaf4ff` - Very light blue for backgrounds
- **Background Cream** (`--background-cream`): Same as `--primary-light` for compatibility
- **White** (`--white`): `#ffffff` - Pure white for cards and overlays

### Text Colors
- **Text Dark** (`--text-dark`): `#0b2136` - Main body text (WCAG AA compliant)
- **Text Medium** (`--text-medium`): `#33506b` - Secondary text and descriptions
- **Text Light** (`--text-light`): `#6c757d` - Muted/disabled text
- **Border Color** (`--border-color`): `#cfe2ff` - Light borders

### Semantic Colors
- **Link Color** (`--link-color`): Same as `--primary-color` - Links default state
- **Link Hover** (`--link-hover`): Same as `--primary-dark` - Links hover state
- **Success Green** (`--success-green`): `#2d5a3d` - Accessible green for success states

## Shadow System

### Shadow Values
- **Shadow SM** (`--shadow-sm`): `0 2px 4px rgba(11, 94, 215, 0.1)` - Subtle shadows for cards
- **Shadow MD** (`--shadow-md`): `0 4px 12px rgba(11, 94, 215, 0.15)` - Medium shadows for elevated elements
- **Shadow LG** (`--shadow-lg`): `0 8px 24px rgba(11, 94, 215, 0.2)` - Strong shadows for hover states
- **Shadow XL** (`--shadow-xl`): `0 12px 32px rgba(11, 94, 215, 0.25)` - Maximum depth for important elements

### Usage
```css
.card {
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.button {
  box-shadow: var(--shadow-sm);
}
```

## Spacing Scale

### Recommended Spacing Values
- `0.25rem` - Very small gaps (4px)
- `0.5rem` - Small gaps (8px)
- `0.75rem` - Small margins (12px)
- `1rem` - Standard margin (16px)
- `1.25rem` - Medium margin (20px)
- `1.5rem` - Large margin (24px)
- `2rem` - Extra large margin (32px)
- `2.5rem` - Section spacing (40px)
- `3rem` - Large section spacing (48px)
- `4rem` - Extra large spacing (64px)

## Typography Scale

### Font Family
- **Serif (Display)**: `Georgia, 'Times New Roman', Times, serif`
- **Sans-serif (Body)**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

### Font Sizes (Responsive with clamp())
- **H1**: `clamp(1.75rem, 5vw, 3rem)` (28px-48px)
- **H2**: `clamp(1.5rem, 4vw, 2.5rem)` (24px-40px)
- **H3**: `clamp(1.25rem, 3vw, 2rem)` (20px-32px)
- **H4**: `1.25rem` (20px)
- **H5**: `1.1rem` (17.6px)
- **H6**: `1rem` (16px)
- **Body**: `1rem` (16px)
- **Small**: `0.875rem` (14px)
- **Smaller**: `0.75rem` (12px)

### Font Weights
- **Normal**: `400`
- **Medium**: `500`
- **Semibold**: `600`
- **Bold**: `700`

### Line Heights
- **Tight**: `1.2` - For headings
- **Normal**: `1.3` - For large headings
- **Relaxed**: `1.6` - For body text
- **Very Relaxed**: `1.8-1.9` - For accessibility and readability

### Letter Spacing
- **Tighter**: `-0.5px` - For display headings
- **Normal**: `0px` - Default
- **Loose**: `0.2px` - Body text
- **Looser**: `0.3px` - Headings
- **Very Loose**: `0.5-0.6px` - Section titles and labels

## Border Radius Scale

- `4px` - Very subtle rounding
- `6px` - Small rounding
- `8px` - Standard rounding for cards
- `10px` - Medium rounding
- `12px` - Rounded cards
- `20px` - Pill buttons
- `50%` - Circles

## Animation & Transition

### Timing Functions
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` - Default easing for most animations
- **Ease In**: `cubic-bezier(0.4, 0, 1, 1)`
- **Ease Out**: `cubic-bezier(0, 0, 0.2, 1)`

### Duration Scale
- Fast: `0.2s` - Quick interactions
- Normal: `0.3s` - Default transitions
- Slow: `0.4s` - Entrance animations
- Very Slow: `0.6s-1s` - Complex animations

### Transition Property
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations
```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes driftPattern {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}
```

## Breakpoints

### Responsive Design Breakpoints
- **Mobile (XS)**: `< 576px`
- **Tablet (SM)**: `≥ 576px`
- **Tablet (MD)**: `≥ 768px`
- **Desktop (LG)**: `≥ 991px`
- **Desktop (XL)**: `≥ 1200px`

### Mobile-First Media Queries
```css
/* Mobile-first (applies to all) */
.element { }

/* Tablet and up */
@media (min-width: 576px) { }

/* Tablet and up */
@media (min-width: 768px) { }

/* Desktop and up */
@media (min-width: 991px) { }

/* Large desktop and up */
@media (min-width: 1200px) { }
```

## Button States

### State Colors
- **Default**: `--primary-color`
- **Hover**: `--primary-dark` with shadow elevation
- **Active**: Same as hover
- **Focus**: `--primary-color` outline (2px)
- **Disabled**: 0.6 opacity

### Button Sizes
- **Small**: `padding: 0.5rem 1rem; font-size: 0.875rem;`
- **Medium**: `padding: 0.625rem 1.5rem; font-size: 1rem;` (default)
- **Large**: `padding: 0.8rem 2rem; font-size: 1.1rem;`

## Link States

### Default
- Color: `--primary-color`
- Border-bottom: `1px solid transparent`
- No underline

### Hover
- Color: `--primary-dark`
- Border-bottom: `1px solid --primary-dark`

### Focus
- Outline: `2px solid --primary-color`
- Outline-offset: `3px`

### Focus Visible (Keyboard)
- Outline: `2px solid --primary-color`
- Outline-offset: `2px`

## Card Design

### Standard Card
```css
.card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: var(--transition-smooth);
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}
```

### Card with Gradient Header
```css
.card-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 1.25rem;
  font-weight: 600;
}
```

## Container & Grid

### Max Width
- Standard container: `100% - 2rem padding` (responsive)
- Content max-width: `900px`
- Grid gaps: `1rem`, `1.5rem`, or `2rem`

## Z-Index Scale

- `0` - Default
- `1` - Raised elements
- `10` - Dropdowns/tooltips
- `100` - Skip to main content
- `1000` - Modals/overlays (if implemented)
- `9999` - Critical UI (if needed)

## Utility Classes

### Display
- `.d-flex` - Flexbox
- `.d-grid` - CSS Grid
- `.d-block` - Block display
- `.d-inline-block` - Inline-block
- `.d-none` - None
- `.d-none` in responsive: `@media (max-width: 768px)`

### Text
- `.text-center` - Center text
- `.text-justify` - Justified text
- `.text-accent` - Use secondary color
- `.text-gold` - Use accent gold color
- `.text-muted` - Use light text color

### Spacing
- `.py-3` - Padding vertical (Bootstrap compat)
- `.my-5` - Margin vertical (Bootstrap compat)
- `.mb-4` - Margin bottom (Bootstrap compat)
- `.pl-2` - Padding left (Bootstrap compat)

### Shadows
- `.shadow-sm` - Apply small shadow
- `.shadow-md` - Apply medium shadow
- `.shadow-lg` - Apply large shadow
- `.shadow-xl` - Apply extra large shadow

### Borders
- `.border-top-primary` - Blue top border
- `.border-bottom-primary` - Blue bottom border
- `.border-left-primary` - Blue left border
- `.border-accent` - Light border

### Backgrounds
- `.bg-primary` - Blue background
- `.bg-cream` - Light blue background
- `.bg-light-blue` - Very light blue background

### Hover Effects
- `.hover-lift` - Lift on hover with shadow

## Print Styles

```css
@media print {
  body {
    background-color: white;
    font-size: 12pt;
  }

  .no-print {
    display: none;
  }
}
```

## Accessibility Focus Indicators

### Standard Focus State
```css
*:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

### Button Focus State
```css
button:focus-visible {
  outline-offset: 4px;
}
```

---

## Design Token Usage Examples

### Creating a New Component
```vue
<style scoped>
.my-component {
  background: linear-gradient(135deg, var(--primary-light) 0%, #f5f9ff 100%);
  border: 2px solid var(--border-color);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  transition: var(--transition-smooth);
}

.my-component:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.my-component h3 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: var(--primary-color);
  font-weight: 700;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
}

@media (max-width: 768px) {
  .my-component {
    padding: 1.5rem;
  }
}
</style>
```

---

## Notes for Developers

### When to Use Each Color
- **Primary Blue**: Main buttons, active nav links, primary text
- **Primary Dark**: Hover states, secondary headings
- **Secondary Blue**: Card headers, accent borders
- **Accent Gold**: Highlights, section titles, decorative elements
- **Light Blue**: Background fills, subtle accents
- **Text Dark**: All body text
- **Text Medium**: Secondary text, descriptions, metadata

### When to Use Each Shadow
- **Shadow SM**: Subtle elevations, borders around elements
- **Shadow MD**: Standard cards, buttons at rest
- **Shadow LG**: Hover states, elevated cards
- **Shadow XL**: Maximum emphasis, important elements

### Responsive Design Tips
- Use `clamp()` for typography
- Use mobile-first media queries
- Test on actual devices
- Consider touch targets (min 44x44px)
- Always provide keyboard navigation

### Performance Considerations
- Use CSS transforms instead of position changes
- Leverage GPU acceleration with `transform` and `opacity`
- Avoid expensive properties in animations (e.g., `box-shadow`)
- Use hardware-accelerated properties where possible

---

## Version
Design System v1.0 - Leicester Greek School Website
Last Updated: March 2026

