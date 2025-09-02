# Mirrorly Landing Page

A beautiful, responsive landing page for the Mirrorly Chrome extension built with Next.js and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Clean, professional design with amber/stone color scheme
- **SEO Optimized** - Proper meta tags and structured data
- **Fast Loading** - Optimized for performance
- **Static Export** - Ready for deployment on any hosting platform

## 📁 Structure

```
landing-page/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   ├── privacy/
│   │   └── page.tsx         # Privacy policy page
│   └── terms/
│       └── page.tsx         # Terms of service page
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
└── README.md               # This file
```

## 🛠 Setup & Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to the landing page directory:**
   ```bash
   cd landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Mirrorly landing page"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Static Export

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder** to any static hosting service:
   - Netlify
   - GitHub Pages
   - AWS S3
   - Any web server

## 🎨 Customization

### Colors
The landing page uses a custom color scheme defined in `tailwind.config.js`:
- **Amber**: Primary brand color (buttons, accents)
- **Stone**: Neutral colors (text, backgrounds)

### Content
Update the following files to customize content:
- `app/page.tsx` - Main landing page content
- `app/privacy/page.tsx` - Privacy policy
- `app/terms/page.tsx` - Terms of service

### Styling
- Global styles: `app/globals.css`
- Component styles: Inline Tailwind classes
- Custom components: Use the `.btn-primary` and `.btn-secondary` classes

## 📱 Sections

1. **Hero** - Main headline and CTA buttons
2. **Features** - Why choose Mirrorly
3. **Demo** - Video/screenshot showcase
4. **Pricing** - Subscription plans
5. **CTA** - Final call-to-action
6. **Footer** - Links and contact info

## 🔗 Links to Update

Before deployment, update these links in `app/page.tsx`:

- **Chrome Store**: Replace `https://chrome.google.com/webstore` with your actual Chrome Web Store URL
- **Demo Video**: Replace the placeholder with your actual demo video
- **Contact Email**: Update `hello@mirrorly.ai` with your actual email
- **Social Links**: Update Twitter and other social media links

## 📊 SEO & Analytics

The landing page includes:
- **Meta tags** for social sharing
- **Open Graph** tags for Facebook/LinkedIn
- **Twitter Card** tags
- **Structured data** ready for Google

Add your analytics tracking code in `app/layout.tsx` if needed.

## 🎯 Chrome Store Integration

This landing page is designed to work seamlessly with your Chrome extension:

1. **"Add to Chrome" buttons** link to your Chrome Web Store listing
2. **Privacy Policy** and **Terms of Service** pages are required for Chrome Store submission
3. **Pricing information** matches your Stripe subscription plans
4. **Demo section** showcases your extension's features

## 📞 Support

For questions about this landing page, contact:
- Email: hello@mirrorly.ai
- Twitter: @mirrorly

---

**Ready to launch! 🚀**
