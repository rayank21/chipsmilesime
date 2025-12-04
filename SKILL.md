## name: gastronomic-terroir-design description: Specialized frontend design system for high-end artisanal food products. Focuses on sensory web design, conveying texture, taste, and origin through interface. Specifically tailored for the "Chips Millésime" project (Burgundy terroir). Use to build an immersive B2C experience and an efficient, premium B2B ordering platform.

# Gastronomic Frontend Design System: "Chips Millésime"

This skill provides a design system specifically crafted for selling a high-end, vintage artisanal product. It moves away from "SaaS/Tech" aesthetics to embrace "Neo-Terroir" — a blend of rustic tradition and modern luxury.

## Core Philosophy

**The screen must convey the crunch and the aroma.** Since users cannot taste the chips online, the UI must compensate with texture, deep colors, and typography that evokes a wine label.

Before writing code, establish:

1.  **Context**: A 2.50€/40g chip is not a snack, it's a tasting experience. The user is buying a piece of Burgundy.
2.  **Concept**: "The Wine of Chips." Treat the potato chip with the same reverence as a Grand Cru.
3.  **Duality**: The interface must serve two masters — the B2C Gourmet (Storytelling/Emotion) and the B2B Professional (Exclusivity/Efficiency).

## Design Process Workflow

### Phase 1: Discovery & Concept (The "Millésime" Vibe)

Choose ONE primary aesthetic direction suitable for Burgundy Luxury:

  - **Modern Terroir**: Earthy textures, high-definition macro photography, serif typography, elegant whitespace.
  - **Editorial Gastronomy**: Magazine-style layouts, overlapping text on images, bold contrasts between the red wine color and the golden chip.
  - **Craft Luxury**: Focus on the materials—paper textures, gold foil effects, matte finishes, handwriting fonts for the "Artisan" feel.

**The Emotional Palette:**

  - Sophistication (Wine)
  - Warmth (Potato/Cooking)
  - Authenticity (Burgundy region)

### Phase 2: Design System Definition

Define your design tokens to reflect the ingredients:

```css
/* Chips Millésime Design Tokens */
:root {
  /* Typography - The "Wine Label" Approach */
  --font-display: 'Playfair Display', 'Cinzel', serif; /* Elegant, traditional */
  --font-body: 'Lato', 'Work Sans', sans-serif; /* Clean, modern readability */
  --font-accent: 'Pinyon Script', cursive; /* For "Millésime 2023" signatures */
  
  /* Spatial System */
  --space-unit: 0.5rem;
  --container-max: 1200px; /* Tighter container for a boutique feel */
  
  /* Color Philosophy: Burgundy Terroir */
  --color-wine-deep: #4A1A2C; /* Pinot Noir / Côte Chalonnaise base */
  --color-wine-bright: #722F37; /* The ruby reflection */
  --color-chip-gold: #D4AF37; /* The cooked potato / Gold accents */
  --color-paper: #F4F1EA; /* Natural craft paper background */
  --color-ink: #2C2C2C; /* Soft black for text */
  --color-soil: #5D4037; /* Earthy tone for footers */
  
  /* Animation Timing */
  --ease-slow-reveal: cubic-bezier(0.23, 1, 0.32, 1);
  --duration-long: 800ms; /* Slow, luxurious movement */
}
```

### Phase 3: Implementation Patterns

#### Typography Hierarchy

Typography should feel like reading a menu at a Michelin-starred restaurant.

```css
/* Title Styling */
h1 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-wine-deep);
}

/* The "Millésime" Accent */
.vintage-year {
  font-family: var(--font-accent);
  color: var(--color-chip-gold);
  font-size: 1.5em;
  transform: rotate(-5deg); /* Hand-stamped look */
}
```

#### Color & Texture Usage

Avoid flat colors. Use grain and organic gradients to simulate nature.

```css
/* Background: The "Paper" Texture */
body {
  background-color: var(--color-paper);
  background-image: url("path/to/noise-texture.png"); /* Subtle grain */
  color: var(--color-ink);
}

/* The "Wine Stain" Gradient */
.hero-section {
  background: radial-gradient(circle at 80% 20%, var(--color-wine-bright), var(--color-wine-deep));
  /* Represents the depth of the red wine used in the recipe */
}
```

#### Layout Strategies

**For B2C (The Boutique):**
Use large imagery. Show the chip texture, the salt grains, the wine bottle.

```css
.product-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
/* Left: The Story, Right: The Chip Macro Shot */
```

**For B2B (The Pro Portal):**
Clean, tabular, efficient. Focus on "Made to Order" and "Lead Time".

```css
.b2b-order-form {
  border: 1px solid var(--color-wine-deep);
  background: white;
  /* Flux tendu indicator */
  border-left: 4px solid var(--color-chip-gold); 
}
```

### Phase 4: Animation & Interaction

#### Entrance Animations (The "Uncorking")

Animations should be slow and fluid, like wine being poured.

```css
@keyframes floatUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.chip-bag {
  animation: floatUp 1.2s var(--ease-slow-reveal);
}
```

#### Hover States (Sensory Feedback)

```css
.buy-button {
  background: var(--color-wine-deep);
  color: var(--color-paper);
  border: 1px solid var(--color-wine-deep);
  transition: all 0.3s ease;
}

.buy-button:hover {
  background: transparent;
  color: var(--color-wine-deep);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(114, 47, 55, 0.2); /* Red wine shadow */
}
```

## Critical Anti-Patterns to Avoid

### The "Supermarket Snack" Look

NEVER do these:

  - Primary colors (Bright Red/Blue/Yellow) like Lays/Pringles.
  - "Pop" fonts or Comic Sans.
  - Explosion graphics or "NEW\!" bursts.
  - Plastic/Shiny textures.
  - Generic "Add to Cart" icons (Use "Commander le Millésime").

### The "Tech Startup" Look

  - Avoid standard "Inter" font.
  - Avoid excessive rounded corners (chips are organic/irregular shapes).
  - Avoid "Corporate Blue".

## Framework-Specific Guidelines (Vue/React)

### Component: `AvailabilityBadge`

Since there is no stock (Flux tendu), clarity is key.

```jsx
const StockStatus = () => (
  <div className="status-badge" style={{ borderColor: 'var(--color-chip-gold)' }}>
    <span className="icon">⏳</span>
    <span>Production à la commande (4-5 jours)</span>
  </div>
);
```

## Quality Checklist for "Chips Millésime"

### Visual Impact

  - [ ] Does the red look like *Burgundy wine*, not ketchup?
  - [ ] Does the gold look like *fried potato*, not yellow paint?
  - [ ] Do you feel the "Premium" price point (2.50€) just by looking at the page?

### Storytelling

  - [ ] Is the "2023 Côte Chalonnaise" clearly highlighted?
  - [ ] Is the distinction between Professional (Flux tendu) and Personal orders clear?

### Technical Excellence

  - [ ] Are high-res chip textures optimized for web (WebP/AVIF)?
  - [ ] Is the mobile experience smooth for chefs/restaurateurs ordering on the go?

## Final Reminder

## You are not selling a snack. You are selling **Burgundy in a packet**. The design must taste like terroir. Elegant, artisanal, and exclusive.
