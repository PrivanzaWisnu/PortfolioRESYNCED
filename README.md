This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Features

### 1. Internationalization & Localization (i18n)

- **Bilingual Support:** Fully supports English (`en`) and Indonesian (`id`) language toggle natively managed via a lightweight global state (`useSettingsStore`).
- **Dynamic Content Adaptation:** Seamless translation across all view modules, including Home, Skills, Projects, Certifications, Contact, and Beyond the Codes pages.

### 2. Advanced Aesthetic & Personalization Panel

- **Live Theme Color Picker:** Features an interactive real-time hex theme color injector that overrides the application's CSS variables to dynamically change the primary accent color.
- **Dynamic Font Injection:** Includes live font switching between highly optimized web typography presets (_Poppins_, _Quicksand_, _Roboto_, and _Playfair Display_) by streaming `@import` layers onto the document body head safely inside a React lifecycle.
- **Font Scaling System:** Provides absolute control over micro-typography layouts with text viewport options (`small`, `default`, `large`, and `extra-large`).
- **Flexible Dark & Light Modes:** Tailored dark/light mode switching hooked smoothly to `next-themes` with a reliable system-default fallback integration.

### 3. User Experience & Accessibility (a11y)

- **Motion Reduction Guard:** Built with an active native media-query tracker (`prefers-reduced-motion: reduce`) that force-reduces scaling and translates animations if specified by the user's OS settings, or toggled manually via preferences.
- **Adaptive Sidebar Shell:** High-performance dashboard dashboard layout structure that switches seamlessly between an icon-only setup and full disclosure tracking based on standard grid view break-points.
- **Instant Filtering & Tags Interaction:** Client-side live project filtering on titles, descriptions, and structural arrays with interactive badge toggling inside the Project catalog.

### 4. Interactive Components & Modules

- **Native Document Frame Viewer:** Embedded `iframe` configuration optimized for zero-border responsive CV rendering across both mobile viewports and desktop resolutions.
- **Formspree Dynamic Hookup:** Form processing built into the contact layout supporting dynamic loader feedback transitions and native context tracking for error/success alerts.
- **Modal Overlay Image Previewer:** Controlled preview dialog wrapper utilizing Radix/Shadcn structure layer providing isolated static rendering context with zero-drag image security.

---

## Tech Stack & Architecture

- **Framework:** Next.js (App Router, Client-side view layouts)
- **Styling & Themeing:** Tailwind CSS, Radix UI Primitive structures, Class Variance Authority (`cva`)
- **Animation Config:** Framer Motion (Optimized with standard `user` context boundaries)
- **State Management:** Zustand (Custom hook implementations via `useSettingsStore` and `useSidebar`)
- **Icons Package:** Lucide React
