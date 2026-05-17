# Asad Bangash - Premium Portfolio Website

A world-class, production-ready portfolio website for Flutter Developer and Mobile Application Engineer Asad Bangash. Built with Next.js 13+, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## Features

- **Premium Design**: Apple-inspired dark theme with gradient accents, glassmorphism, and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **High Performance**: Optimized animations, lazy loading, and efficient code splitting
- **SEO Optimized**: Comprehensive metadata, Open Graph, Twitter cards, schema markup
- **Contact Form**: Nodemailer integration for secure email handling
- **Smooth Scrolling**: Section-based animations and scroll reveals
- **Accessibility**: Semantic HTML and WCAG guidelines compliance
- **Dark Mode**: Premium dark theme by default with smooth transitions
- **Editable Content**: All portfolio content managed in `constants/portfolio.ts`

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Deployment**: Vercel (recommended)

## Project Structure

```
project/
├── app/
│   ├── api/
│   │   └── contact/route.ts          # Contact form API endpoint
│   ├── layout.tsx                    # Root layout with providers
│   ├── page.tsx                      # Home page
│   ├── robots.ts                     # SEO robots.txt
│   ├── sitemap.ts                    # SEO sitemap
│   └── globals.css                   # Global styles
├── components/
│   ├── Navbar.tsx                    # Navigation component
│   ├── Footer.tsx                    # Footer component
│   ├── Providers.tsx                 # Theme & providers
│   └── sections/
│       ├── Hero.tsx                  # Hero section
│       ├── About.tsx                 # About section
│       ├── Skills.tsx                # Skills section
│       ├── Experience.tsx            # Experience timeline
│       ├── Projects.tsx              # Projects showcase
│       └── Contact.tsx               # Contact form
├── constants/
│   └── portfolio.ts                  # ALL EDITABLE CONTENT HERE
├── lib/
│   ├── animations.ts                 # Framer Motion variants
│   └── seo.ts                        # SEO utilities
└── public/
    └── manifest.json                 # PWA manifest
```

## Getting Started

### 1. Clone or Create the Project

```bash
npm install
```

### 2. Environment Setup

Copy `.env.local.example` to `.env.local` and configure:

```bash
cp .env.local.example .env.local
```

Update with your email configuration:

```env
# Gmail Example
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password  # Use App Password, not regular password
SMTP_FROM=noreply@yourdomain.com
CONTACT_EMAIL=your-email@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Gmail Setup**:
- Enable 2-factor authentication
- Generate an [App Password](https://myaccount.google.com/apppasswords)
- Use the app password in `SMTP_PASSWORD`

### 3. Update Portfolio Content

Edit `constants/portfolio.ts` to customize:
- Personal information
- Skills and expertise
- Work experience
- Projects
- Social links
- Navigation items

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### Update Personal Information

```typescript
// constants/portfolio.ts
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  // ... more fields
};
```

### Add Projects

```typescript
// constants/portfolio.ts
export const PROJECTS = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    image: '/images/projects/project.jpg',
    technologies: ['Flutter', 'Firebase'],
    // ... more fields
  },
];
```

### Modify Skills

```typescript
// constants/portfolio.ts
export const SKILLS = [
  {
    category: 'Mobile Development',
    skills: [
      { name: 'Flutter', proficiency: 95 },
      // ... more skills
    ],
  },
];
```

### Add Experience

```typescript
// constants/portfolio.ts
export const EXPERIENCE = [
  {
    company: 'Company Name',
    position: 'Job Title',
    startDate: 'Month Year',
    endDate: 'Present',
    // ... more fields
  },
];
```

## Styling & Theme

### Color Palette

The site uses a premium dark theme with:
- **Background**: `#0f0f0f` (zinc-950)
- **Primary Accent**: Cyan (`#06b6d4`)
- **Secondary Accent**: Blue (`#2563eb`)
- **Surface**: `#18181b` (zinc-900)
- **Text**: `#ffffff` (white) and `#a1a1aa` (zinc-400)

### Customizing Colors

Edit Tailwind config in `tailwind.config.ts` or modify CSS variables in `app/globals.css`.

## Performance Optimization

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Using Next.js Image component
- **Font Loading**: Optimized with next/font
- **Animation Performance**: Framer Motion GPU accelerated
- **SEO**: Comprehensive metadata and schema markup

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

```bash
# Or deploy manually
npm run build
npm start
```

### Environment Variables on Vercel

Add these in Vercel Project Settings → Environment Variables:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

### Deploy to Other Platforms

The project is compatible with:
- **Netlify**: Uses Next.js plugin configured in `netlify.toml`
- **AWS Amplify**: Works with SSR
- **Railway**: Easy Node.js deployment
- **Heroku**: Requires `Procfile` configuration

## SEO Configuration

### Metadata

Edit `app/layout-metadata.ts` to customize:
- Title and description
- Open Graph image
- Twitter card
- Canonical URL

### Schema Markup

The site includes:
- Person schema for author
- BreadcrumbList for navigation
- Article schema for blog posts (if added)

### Sitemap & Robots

Automatically generated:
- `sitemap.xml` - SEO sitemap
- `robots.txt` - Search engine crawling rules

## Contact Form

### How It Works

1. User submits form on `/contact` section
2. Data is validated and sanitized
3. Two emails are sent:
   - Notification to developer
   - Confirmation to user
4. Success toast notification appears

### Troubleshooting

**Emails not sending?**
- Check SMTP credentials
- Verify email account allows app access
- Check spam folder
- Review console errors

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Alt text on images

## Analytics Setup (Optional)

Add Google Analytics or other tracking:

```typescript
// Add to app/layout.tsx
import Script from 'next/script';

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
```

## Common Issues & Solutions

### Contact Form Not Working

1. Check environment variables are set
2. Verify SMTP credentials
3. Check browser console for errors
4. Review Next.js server logs

### Animations Laggy

1. Reduce animation duration
2. Enable GPU acceleration (default)
3. Reduce number of animated elements
4. Check browser performance

### Images Not Loading

1. Verify image paths in `public/`
2. Check Next.js Image optimization
3. Use absolute paths with `/`

## Future Enhancements

- Blog section with MDX
- Dark/Light theme toggle
- Project filtering
- Testimonials section
- Case study pages
- Newsletter signup
- Analytics dashboard

## License

This project is personal portfolio for Asad Bangash. Use as reference but customize for your own portfolio.

## Support & Questions

For issues or questions:
1. Check documentation
2. Review the code comments
3. Contact developer

---

**Built with ❤️ using Next.js, React, and modern web technologies**
