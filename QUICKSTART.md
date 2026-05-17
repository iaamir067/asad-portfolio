# Quick Start Guide

Get your Asad Bangash portfolio up and running in 5 minutes!

## 1. Installation (30 seconds)

```bash
npm install
```

## 2. Configuration (2 minutes)

### Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your information:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@yourdomain.com
CONTACT_EMAIL=your-email@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Gmail Setup**: If using Gmail:
1. Enable 2-factor authentication
2. Generate [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password above

## 3. Update Your Content (2 minutes)

Edit `constants/portfolio.ts`:

```typescript
// Update personal info
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  // ... more fields
};

// Add your projects
export const PROJECTS = [
  // ... your projects
];

// Add your experience
export const EXPERIENCE = [
  // ... your experience
];

// Add your skills
export const SKILLS = [
  // ... your skills
];
```

## 4. Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 5. Deploy to Vercel

### Option A: Automatic (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New..." → "Project"
4. Select your repository
5. Add environment variables
6. Deploy!

### Option B: Via CLI

```bash
npm i -g vercel
vercel
```

---

## What to Update First

### Priority 1: Personal Information

```typescript
// constants/portfolio.ts
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  shortBio: 'Your short bio',
  email: 'your@email.com',
  phone: 'Your phone',
  location: 'Your location',
};
```

### Priority 2: Social Links

```typescript
// constants/portfolio.ts
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/your-username',
    icon: 'Github',
  },
  // ... more links
];
```

### Priority 3: Skills

```typescript
// constants/portfolio.ts
export const SKILLS = [
  {
    category: 'Your Category',
    skills: [
      { name: 'Skill 1', proficiency: 90 },
      { name: 'Skill 2', proficiency: 85 },
    ],
  },
];
```

### Priority 4: Experience

```typescript
// constants/portfolio.ts
export const EXPERIENCE = [
  {
    company: 'Company Name',
    position: 'Your Position',
    startDate: 'Month Year',
    endDate: 'Present',
    // ... details
  },
];
```

### Priority 5: Projects

```typescript
// constants/portfolio.ts
export const PROJECTS = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    // ... details
  },
];
```

---

## Common Customizations

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 0 189 212; /* Cyan - RGB */
  --secondary: 37 99 235; /* Blue - RGB */
}
```

Or modify Tailwind colors in `tailwind.config.ts`.

### Add Your Logo

1. Add logo to `public/logo.png`
2. Update Navbar component:

```typescript
// components/Navbar.tsx
<img src="/logo.png" alt="Logo" width={32} height={32} />
```

### Change Font

In `app/layout.tsx`:

```typescript
import { Geist, JetBrains_Mono } from 'next/font/google';

const geist = Geist({ subsets: ['latin'] });
```

### Add Resume

1. Add resume PDF to `public/resume.pdf`
2. Update `constants/portfolio.ts`:

```typescript
export const PERSONAL_INFO = {
  resumeUrl: '/resume.pdf',
};
```

---

## Testing Checklist

Before deploying:

- [ ] Update all personal information
- [ ] Add all social links
- [ ] Verify contact form works
- [ ] Test on mobile device
- [ ] Check for typos
- [ ] Verify all links work
- [ ] Test animations smooth

---

## Troubleshooting

### Contact Form Not Working

1. Check `.env.local` has correct SMTP settings
2. Verify Gmail app password (not regular password)
3. Check console for errors (F12)
4. Test with different email address

### Website Won't Start

```bash
# Clear cache
rm -rf .next
npm run dev
```

### Build Fails

```bash
# Check for type errors
npm run typecheck

# Rebuild
npm run build
```

---

## Next Steps

After setup, consider:

1. **Blog**: Add MDX blog system
2. **Analytics**: Add Google Analytics
3. **Comments**: Add testimonials system
4. **CMS**: Connect Contentful or Sanity for content management
5. **Forms**: Advanced form validation
6. **Images**: Replace placeholder images
7. **Testimonials**: Add client testimonials

---

## File Structure Quick Reference

```
project/
├── app/                    # Next.js app
│   ├── api/contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   └── sections/          # Page sections
├── constants/
│   └── portfolio.ts       # ← EDIT THIS FOR CONTENT
├── lib/
│   ├── animations.ts      # Animation utilities
│   └── seo.ts            # SEO utilities
├── public/                # Static files
└── .env.local            # ← ADD YOUR SETTINGS
```

---

## Useful Links

- **Documentation**: See `README.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion

---

## Support

Need help?

1. Check the full `README.md`
2. Check `DEPLOYMENT.md` for production issues
3. Review code comments
4. Check Next.js documentation

---

**That's it! Your portfolio is ready. Happy coding!**
