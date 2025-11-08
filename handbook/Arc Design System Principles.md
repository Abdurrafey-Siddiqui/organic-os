# Web Agency Design System Principles (Tailwind + ShadCN Style)

**Version:** 1.0
**Audience:** Designers, Developers, AI Assistants
**Purpose:** Define a unified design and layout philosophy for building consistent, scalable UI blocks in Tailwind CSS.

---

## 🌐 Core Philosophy

Our design system is **compositional, semantic, and predictable**.

> “Each layer has one job.
> Layout defines boundaries, content defines meaning, components define behavior.”

We follow ShadCN-inspired principles that prioritize:

- **Container Discipline** for layout consistency
- **Vertical Rhythm** for spatial harmony
- **Semantic Tokens** for theme alignment
- **Minimal Responsiveness** for clarity

---

## 🧭 1. Container Discipline

### Overview

Container discipline defines how every section of the page is spatially structured.
It ensures **consistent horizontal alignment**, **readable widths**, and **predictable spacing**.

### Three-Layer Layout Pattern

```tsx
<section className="py-20 md:py-32 border-b border-border">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <!-- Content -->
    </div>
  </div>
</section>
```

| Layer                   | Responsibility                               | Typical Classes           |
| ----------------------- | -------------------------------------------- | ------------------------- |
| **Section**             | Defines vertical rhythm and background       | `py-20 md:py-32 border-b` |
| **Container**           | Aligns content to global grid; adds gutters  | `container mx-auto px-4`  |
| **Content (Max-Width)** | Constrains reading width; centers main block | `max-w-4xl mx-auto`       |

### Core Rules

1. **Always center via `mx-auto`**, not via flex alignment.

   - Keeps document flow natural and spacing predictable.
   - Prevents flex context from breaking vertical spacing utilities.

2. **Apply horizontal padding (`px-4`) only at the container level.**

   - Sections manage vertical space (`py-*`), not horizontal gutters.

3. **Use `max-w-*` for readable content.**

   - Typical:

     - `max-w-3xl` → text-heavy content
     - `max-w-4xl` → FAQ / body sections
     - `max-w-6xl` → hero or wide visuals

4. **Never nest `.container` inside another `.container`.**

   - Avoids doubled gutters and layout drift.

### Example: FAQ Section

```tsx
<section className="py-20 md:py-32 border-b border-border">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center space-y-8 mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
      </div>
      <Accordion type="single" collapsible>
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="font-semibold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>
```

---

## 🧭 2. Container Discipline Blueprint

To make this pattern enforceable, use semantic wrappers:

```tsx
// Layout primitives
<section className="section">
  <div className="container">
    <div className="content">{children}</div>
  </div>
</section>
```

### Tailwind Layers (Global CSS)

```css
.section {
  @apply py-20 md:py-32 border-b border-border;
}

.container {
  @apply container mx-auto px-4;
}

.content {
  @apply max-w-4xl mx-auto;
}
```

This ensures uniform section spacing and readable line lengths across all pages.

---

## 🪜 3. Vertical Rhythm

### Purpose

Establish a consistent tempo between sections — creating harmony and flow.

### Rules

- Use fixed vertical padding scales:

  - `py-12` → compact
  - `py-20` → standard
  - `py-32` → large hero

- Never mix arbitrary top/bottom margins between sections; sections should “breathe” evenly.

### Example

```tsx
<section className="py-20 md:py-32"> ... </section>
<section className="py-20 md:py-32 bg-muted"> ... </section>
```

---

## 🎨 4. Semantic Design Tokens

### Purpose

All color and typography classes map to theme variables, never raw values.

| Token                                       | Description           | Example                 |
| ------------------------------------------- | --------------------- | ----------------------- |
| `text-foreground`                           | Default readable text | `text-foreground`       |
| `text-muted-foreground`                     | Secondary text        | `text-muted-foreground` |
| `text-primary`                              | Brand highlight       | `text-primary`          |
| `border-border`                             | Standard border       | `border-border`         |
| All design tokens are found in `global.css` |                       |                         |

---

## 🧩 4.1 Iconography Guidelines

### Purpose

Icons provide visual cues and hierarchy across the interface. We use **Phosphor Icons** as our unified icon library.

### Rules

- **Always use Phosphor Icons React package:**

  ```bash
  npm install @phosphor-icons/react
  ```

- **Import from the correct path** depending on the component type:

  - For **Server Components**, import from:

    ```tsx
    import { IconName } from "@phosphor-icons/react/dist/ssr";
    ```

  - For **Client Components**, import from:

    ```tsx
    import { IconName } from "@phosphor-icons/react";
    ```

- Maintain consistent icon sizing using utility classes:

* Make sure not the import and use deprecated icons, many of Phosphor icons were renamed to have the 'Icon' at the end e.g. 'ClockIcon' instead of 'Clock' and so on.

  - Use `className="size-5"` for small icons
  - Use `className="size-6"` for medium (default)
  - Use `className="size-8"` or larger intentionally for decorative or hero contexts

- Do **not** hardcode SVGs or use external icon sets unless documented exceptions are approved.
- Apply semantic color tokens to icons (`text-foreground`, `text-muted-foreground`, `text-primary`) rather than hardcoded values.

### Example

```tsx
import { CalendarMinus } from "@phosphor-icons/react/dist/ssr";

<Button>
  <CalendarMinus className="size-5 text-primary" />
  Book Now
</Button>;
```

This ensures a consistent iconography experience across both server and client components.

---

## 🧱 5. Composition Rules

### Space Stacking

Use `space-y-*` for vertical stacks between sibling elements, **never individual margins**.

```tsx
<div className="space-y-6">
  <h2>Heading</h2>
  <p>Paragraph text here.</p>
</div>
```

### Alignment

- Use `text-center` for inline text alignment.
- Use `mx-auto` for centering containers or content blocks horizontally.
- Use `flex` or `grid` **inside sections** for legitimate layout composition (e.g., text on the left, image on the right).
- Use `flex justify-center items-center` **only for 2D centering inside self-contained or decorative elements** (e.g., icons, badges, hero overlays).

#### Alignment - Do's and Don'ts

| Flex Usage                                                | Allowed? | Why                            |
| --------------------------------------------------------- | -------- | ------------------------------ |
| `section` uses `flex justify-center` to center everything | 🚫 No    | Breaks container rhythm        |
| Inner wrapper uses `flex flex-col md:flex-row` for layout | ✅ Yes   | Local layout composition       |
| Icon wrapper uses `flex justify-center items-center`      | ✅ Yes   | 2D centering of visual element |
| Global centering via `mx-auto` + `max-w-*`                | ✅ Yes   | Maintains layout flow          |

---

## ⚙️ 6. Responsive Philosophy

Our approach to responsiveness balances **consistency** and **intentional flexibility**.

### 🧭 Core Principle

Typography, padding, and spacing should **generally scale at the `md` and `lg` breakpoints** to maintain visual rhythm and predictable flow across layouts.

However, **additional breakpoints** (`sm`, `xl`, `2xl`) may be introduced **deliberately** for components or sections that require finer control — such as complex hero layouts, dashboards, or editorial-style content.

This ensures that responsiveness is both **systematic** and **context-aware**, not random or overly rigid.

---

### ✅ Guidelines

- Use `md` and `lg` as the **default responsive tiers** for scaling:

  - `md:` for tablet and small laptop adjustments
  - `lg:` for desktop-level refinement

- Only extend to `sm`, `xl`, or `2xl` when a layout specifically demands it.
- Avoid defining new breakpoints arbitrarily across unrelated components.

**Extended Scaling (Intentional Use of `sm` and `xl`)**

```tsx
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
  Editorial Title
</h1>
```

**Section Padding (Controlled Rhythm)**

```tsx
<section className="py-20 md:py-32">
  <div className="container mx-auto px-4">...</div>
</section>
```

---

### 🎯 Philosophy in Practice

> Start simple with `md` and `lg` as your scaling anchors.
> Use smaller or larger breakpoints **only when design intent clearly requires it**,
> and document those exceptions so they remain consistent across the system.

---

## 🤓 7. Do & Don’t Summary

| ✅ Do                                   | ❌ Don’t                                       |
| --------------------------------------- | ---------------------------------------------- |
| Use `mx-auto` to center containers      | Use `flex justify-center` for layout centering |
| Use `space-y-*` for sibling spacing     | Stack arbitrary margins                        |
| Use semantic tokens (`text-foreground`) | Hardcode colors or grays                       |
| Limit max width with `max-w-*`          | Let text stretch full width                    |
| Define section spacing via `py-*`       | Mix `mt-*` and `mb-*` randomly                 |

---

## 📀 8. Example Layout Structure

```tsx
<main>
  <Hero />
  <Features />
  <Testimonials />
  <FAQ />
  <CTA />
</main>
```

Each component internally follows the **section → container → content** pattern, guaranteeing visual consistency across pages.

---

## 💬 9. Quick Reference Snippets

**Centered Section (Standard)**

```tsx
<section className="py-20 md:py-32">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Title <span className="text-primary">Highlight</span>
      </h2>
      <p className="text-muted-foreground">Supporting description text.</p>
    </div>
  </div>
</section>
```

**Grid Section (Feature Cards)**

```tsx
<section className="py-20 md:py-32 border-b border-border">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- Feature cards -->
    </div>
  </div>
</section>
```

---

## ✅ Closing Principle

> **Predictability is design.**
> If a developer or AI can predict how spacing, alignment, and containment will behave — you’ve achieved system maturity.
