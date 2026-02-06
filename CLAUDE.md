# CyberFortis Website

## Project Overview

CyberFortis is a **defensive cybersecurity company** website. The site should convey trust, technical expertise, and professionalism while maintaining a modern, approachable feel.
It is a Croatian company, so all of the text needs to be in Croatian language. 

## Tech Stack

- **Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## Design System

### Color Palette

Primary colors extracted from cyberfortis.hr:

```css
/* Backgrounds */
--bg-primary: #0b0e13;      /* Very dark blue-black - main background */
--bg-secondary: #11151b;    /* Slightly lighter dark blue - section backgrounds */
--bg-card: #161b22;         /* Card/component backgrounds */

/* Accent Colors */
--accent-primary: #ed1c24;   /* Bright red - CTAs, important highlights */
--accent-secondary: #00E0FF; /* Cyan/turquoise - cyber glow effects, secondary accents */
--accent-glow: rgba(0, 224, 255, 0.3); /* Cyan glow for subtle effects */

/* Text Colors */
--text-primary: #e6e6e6;    /* Light gray - main text */
--text-secondary: #8a8a8a;  /* Medium gray - muted/secondary text */
--text-white: #ffffff;      /* Pure white - headings, emphasis */

/* Supporting Colors */
--success: #00ff88;         /* Green - success states, security indicators */
--warning: #ffaa00;         /* Amber - warning states */
--border: #2a2f38;          /* Subtle borders */
```

### Tailwind Config Extensions

Add these to `tailwind.config.js`:

```js
colors: {
  cyber: {
    dark: '#0b0e13',
    darker: '#11151b',
    card: '#161b22',
  },
  accent: {
    red: '#ed1c24',
    cyan: '#00E0FF',
  },
  text: {
    primary: '#e6e6e6',
    muted: '#8a8a8a',
  }
}
```

### Design Mood

- **Primary Mood:** Professional, serious, tech-forward, authoritative
- **Secondary Mood:** Trustworthy, protective, modern
- **Avoid:** Playful, casual, cluttered, overly aggressive
- The aesthetic should evoke a **security operations center** - clean, focused, mission-critical

## Website Structure

Inspired by modern tech company websites like Rubicon. The site should feel premium and engaging.

### Navigation

- **Style:** Fixed/sticky header, transparent on hero then solid on scroll
- **Items:** Logo (left), main nav links (center/right), CTA button (right)
- **Mobile:** Hamburger menu with smooth slide-in drawer
- **Suggested Links:**
  - Services
  - Solutions
  - About Us
  - Resources/Blog
  - Contact
  - CTA: "Get Protected" or "Free Assessment"

### Page Sections

#### 1. Hero Section
- **Full-viewport height** with dark background
- Large, impactful headline focusing on protection/security
- Subheadline explaining value proposition
- Primary CTA button (red accent)
- Subtle animated background (particles, grid lines, or shield graphic)
- Consider a subtle cyan glow effect for tech feel

Example headline approaches:
- "Defend Your Digital Assets"
- "Proactive Cybersecurity for Modern Threats"
- "Your Shield Against Cyber Threats"

#### 2. Services/What We Do Section
- **Grid or card layout** (3-4 services)
- Each card: Icon + Title + Brief description + Learn more link
- Hover effects with cyan glow
- Services to highlight:
  - Security Assessments & Audits
  - Penetration Testing
  - Security Operations Center (SOC)
  - Incident Response
  - Compliance & Risk Management
  - Security Awareness Training

#### 3. Why Choose Us / Value Proposition
- **Split layout** or feature list
- Key differentiators with icons
- Stats/numbers if available (e.g., "500+ threats blocked daily")
- Trust indicators

#### 4. How We Work / Process Section
- **Timeline or step-by-step** visualization
- 3-5 steps showing engagement process
- Clean, minimal design with connecting lines

#### 5. Industries We Serve (Optional)
- Logo grid or icon-based list
- Sectors: Finance, Healthcare, Government, Technology, etc.

#### 6. Testimonials / Case Studies
- **Carousel or grid** of client testimonials
- Quote, name, company, optional photo
- Dark cards with subtle border glow

#### 7. CTA Section
- **Full-width banner** with gradient or accent color
- Compelling headline
- Contact form or CTA button
- "Schedule a Free Security Assessment"

#### 8. Footer
- **Multi-column layout**
- Logo + brief description
- Quick links
- Services links
- Contact info
- Social media icons
- Copyright + Privacy Policy + Terms
- Subtle cyber pattern in background

### Additional Pages to Consider

- `/services` - Detailed service pages
- `/about` - Company story, team, mission
- `/contact` - Contact form, location, phone
- `/resources` or `/blog` - Security articles, whitepapers
- `/careers` - Job openings (if applicable)

## Interactions & Animations

- **Scroll animations:** Subtle fade-in and slide-up on section reveal
- **Hover effects:** Cards lift slightly, glow effects on interactive elements
- **Buttons:** Smooth color transitions, subtle pulse on primary CTAs
- **Background:** Consider subtle animated grid, particles, or matrix-like effect (keep performance in mind)
- **Loading:** Minimal, fast-loading - no heavy animations that slow the site

## Typography Guidelines

- **Headings:** Bold, clean sans-serif (e.g., Inter, Outfit, Space Grotesk)
- **Body:** Regular weight, high readability
- **Sizes:**
  - Hero headline: 48-64px (responsive)
  - Section titles: 32-40px
  - Body text: 16-18px
  - Small/caption: 14px

## Component Patterns

### Buttons

```jsx
// Primary (Red accent)
<button className="bg-accent-red hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all">
  Get Started
</button>

// Secondary (Outlined)
<button className="border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 px-6 py-3 rounded-lg transition-all">
  Learn More
</button>
```

### Cards

- Dark background (`bg-cyber-card`)
- Subtle border (`border border-border`)
- Hover: slight lift + cyan border glow
- Rounded corners (`rounded-xl`)

### Icons

- Use outline/line icons for consistency
- Recommended: Lucide React, Heroicons, or Phosphor Icons
- Accent color on hover

## Content Voice & Tone

- **Professional** but not corporate-stiff
- **Confident** without being arrogant
- **Technical** but accessible to non-technical decision makers
- **Reassuring** - emphasize protection and partnership
- Use active voice: "We protect" not "Protection is provided"

### Key Messages to Convey

1. Proactive defense, not just reactive
2. Expert team with real-world experience
3. Tailored solutions, not one-size-fits-all
4. Partnership approach - we're an extension of your team
5. 24/7 monitoring and rapid response

## Performance Guidelines

- Optimize all images (WebP format preferred)
- Lazy load below-the-fold content
- Keep JavaScript bundle minimal
- Target Lighthouse score: 90+
- Mobile-first responsive design

## Accessibility

- Sufficient color contrast (WCAG AA minimum)
- Keyboard navigation support
- Proper heading hierarchy
- Alt text for all images
- Focus indicators on interactive elements

## File Structure Recommendation

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── ...
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── styles/
│   └── index.css
├── assets/
│   ├── images/
│   └── icons/
├── App.tsx
└── main.tsx
```

## Notes for Development

- Start mobile-first, then enhance for desktop
- Test on real devices, not just browser dev tools
- Keep bundle size minimal - avoid heavy animation libraries if possible
- Use CSS animations where possible over JS
- Implement proper SEO meta tags and Open Graph data
