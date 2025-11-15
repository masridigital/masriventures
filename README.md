# Masri Ventures

Professional website for Masri Ventures - Private Equity & Acquisitions firm.

## Technology Stack

- **Frontend**: Static HTML, CSS, and JavaScript
- **Hosting**: Cloudflare Pages
- **Contact Form**: Formspree integration
- **Performance**: Optimized caching and security headers

## Cloudflare Pages Deployment

### Quick Deploy

1. **Connect Repository**
   - Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your GitHub repository

2. **Configure Build Settings**
   - **Project name**: masri-ventures (or your preference)
   - **Production branch**: main
   - **Build command**: `npm run build`
   - **Build output directory**: `public`
   - **Root directory**: `/` (leave default)

3. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will build and deploy your site
   - You'll get a `.pages.dev` URL immediately

4. **Custom Domain (Optional)**
   - Go to your project settings
   - Click "Custom domains"
   - Add `masriventures.com`
   - Update your DNS to point to Cloudflare

### Contact Form Setup

The contact form uses Formspree. To enable it:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Replace `YOUR_FORM_ID` in `public/js/main.js` with your actual form ID

```javascript
// Line 109 in public/js/main.js
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## Local Development

### Preview Locally

```bash
# Using npx serve (no install required)
npx serve public -l 3000

# Or with npm script
npm run preview
```

Visit `http://localhost:3000`

## Project Structure

```
masriventures/
├── package.json           # Project metadata
├── .nvmrc                 # Node version (for Cloudflare)
├── .gitignore             # Git ignore rules
├── README.md              # This file
└── public/                # Static site root (Cloudflare serves this)
    ├── index.html         # Main HTML file
    ├── _headers           # Cloudflare security headers
    ├── _redirects         # Cloudflare redirect rules
    ├── css/
    │   └── style.css      # Styles
    └── js/
        └── main.js        # Client-side JavaScript
```

## Features

- **Modern Design**: Professional PE firm aesthetic with gold/navy color scheme
- **Responsive**: Mobile-first, works on all devices
- **Fast**: Static site with optimal caching (100/100 Lighthouse score potential)
- **Secure**: Security headers configured via `_headers`
- **SEO Optimized**: Meta tags and semantic HTML
- **Animations**: Smooth scroll and fade-in effects
- **Contact Form**: Formspree integration for email handling

## Sections

- **Hero**: Main landing with animated statistics
- **About**: Company overview and values
- **Portfolio**: Masri Digital Marketing & Off The Record Events
- **Our Approach**: 4-step value creation process
- **Contact**: Form and contact information

## Customization

### Updating Content
Edit `public/index.html` directly - it's plain HTML.

### Styling Changes
Modify `public/css/style.css` - uses CSS variables for easy theming:

```css
:root {
  --primary: #0a1628;      /* Dark navy */
  --accent: #c9a961;       /* Gold */
  --text: #2d3748;         /* Dark gray */
}
```

### JavaScript
Edit `public/js/main.js` for interactivity changes.

## Performance

Cloudflare Pages provides:
- Global CDN distribution
- Automatic HTTPS
- DDoS protection
- Instant cache invalidation
- Analytics (optional)

## Portfolio Companies

- **Masri Digital Marketing** - Full-service digital marketing agency
- **Off The Record Events** - Event production and experiences

## Contact

For inquiries, visit the website contact form or email info@masriventures.com

---

© 2024 Masri Ventures. All rights reserved. Founded by Joseph Masri.
