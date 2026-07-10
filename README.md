# German Mechatronics – Premium Automotive Website

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom gold/dark theme)
- **Framer Motion** (page & component animations)
- **Three.js** (3D hero particle scene)
- **GSAP** (scroll animations – add via `useEffect` where needed)
- **react-hot-toast** (notifications)

## Getting Started

```bash
cd german-mechatronics
npm install
npm run dev
```
Open http://localhost:3000

## Build & Deploy

```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod
```

## Project Structure

```
app/
├── page.tsx                    # Home page (all sections)
├── layout.tsx                  # Root layout (Navbar + Footer)
├── globals.css                 # Global styles + Tailwind
├── lib/
│   └── data.ts                 # All content data
└── components/
    ├── layout/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    └── sections/
        ├── Hero.tsx            # Three.js particle hero
        ├── BrandsSection.tsx
        ├── ServicesSection.tsx
        ├── BookingSection.tsx  # Multi-step booking form
        ├── CarsSection.tsx     # Filterable car listings
        ├── PartsSection.tsx    # Spare parts store
        ├── DiagnosticSection.tsx
        ├── AboutSection.tsx
        ├── ReviewsSection.tsx
        ├── FAQSection.tsx
        ├── ContactSection.tsx
        └── NewsletterSection.tsx
```

## Customisation
- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **Content**: Edit `app/lib/data.ts`
- **Contact details**: Edit `ContactSection.tsx`
- **WhatsApp number**: Update the `href` in `ContactSection.tsx`
- **Google Maps**: Replace the placeholder div in `ContactSection.tsx` with an `<iframe>` embed
