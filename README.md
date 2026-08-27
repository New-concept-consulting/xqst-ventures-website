# XQST Events and Management Limited

Next.js site for XQST Events and Management Limited — hub page linking to three businesses:
XQST Hotel & Lounge, XQST Car Rentals, XQST Airbnb.

## Setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Before going live

1. **Environment Variables**: Create three separate forms at [formspree.io](https://formspree.io/) (one per business). Instead of hardcoding the IDs, add these keys to your **Netlify Dashboard** (Site settings > Build & deploy > Environment variables):
   - `NEXT_PUBLIC_HOTEL_FORM_ID`
   - `NEXT_PUBLIC_CAR_RENTAL_FORM_ID`
   - `NEXT_PUBLIC_AIRBNB_FORM_ID`
   
   *For local testing, you can create a `.env.local` file in the root directory with these values.*

2. **Replace all `[PLACEHOLDER: ...]` text** with real content — photos,
   prices, amenities, addresses, phone numbers, tagline. Photos go in
   `public/images/` and are referenced with an `<img src="/images/...">`
   or Next's `<Image />` component.

3. **Deploy to Netlify**:
   - **Via Dashboard**: Connect your GitHub/GitLab repository to Netlify. It will automatically detect the settings in `netlify.toml`.
   - **Via CLI**:
     ```bash
     npm install -g netlify-cli
     netlify login
     netlify init
     ```
   Follow the prompts to link your repository and deploy.

## Changes for Netlify Transition

- **`netlify.toml`**: Added to configure the build command (`npm run build`), publish directory (`.next`), and include the `@netlify/plugin-nextjs` for optimal Next.js performance.
- **Environment Variables**: Updated the contact forms to use `process.env.NEXT_PUBLIC_...` variables. This is more secure and flexible than hardcoding IDs in the source code.
- **README**: Updated deployment instructions from Vercel to Netlify.

## Structure

```
app/
  page.jsx              — central hub
  hotel/page.jsx
  car-rentals/page.jsx
  airbnb/page.jsx
components/
  Navbar.jsx
  Footer.jsx
  BusinessCard.jsx
  ContactForm.jsx        — reusable, takes endpoint + fields per business
```
"# xqst-ventures-website" 
