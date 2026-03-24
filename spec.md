# Suruchi Hotel & Restaurant Website

## Current State
New project with no existing application files.

## Requested Changes (Diff)

### Add
- Full single-page restaurant website with 10 sections
- Sticky navbar with smooth scroll and gold hover states
- Hero section: full-screen background image, gold title, tagline, "Since 1967" badge, "Order Now" CTA
- About section: two-column layout with image and family legacy story since 1967
- Menu section: Veg/Non-Veg tabs, categories (Biryani, Chinese, Starters, Drinks), styled item cards with hover effects and "Order Now" buttons
- Special Dishes Highlight: signature dishes showcased in bordered gold cards
- Image Gallery: grid layout with hover zoom/overlay effects
- Testimonials: 4-5 fake customer reviews with star ratings and avatars
- Contact section: phone, WhatsApp button, address, embedded Google Map
- Footer: links, social icons (Facebook/Instagram/Twitter), copyright
- Floating WhatsApp button (bottom-right corner)
- Framer Motion animations: fade-in, slide-up, stagger throughout
- Google Fonts: Playfair Display (headings) + Poppins (body)

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Backend: expose getMenuItems, getTestimonials, getSpecialDishes queries returning typed records
2. Frontend: build all 10 sections as React components with Framer Motion animations
3. Wire backend data to Menu, Special Dishes, and Testimonials sections
4. Add floating WhatsApp button, Google Map iframe, responsive layout
5. Apply Playfair Display + Poppins via Google Fonts, gold/orange color tokens
