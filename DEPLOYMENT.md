# Deployment Guide

Complete guide to deploying your Asad Bangash portfolio website to production.

## Recommended: Vercel Deployment

### Step 1: Prepare Your Repository

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial portfolio commit"

# Push to GitHub/GitLab/Bitbucket
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "Add New..." → "Project"
4. Import your portfolio repository
5. Select project configuration:
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Configure Environment Variables

In Vercel Project Settings → Environment Variables:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = your-email@gmail.com
SMTP_PASSWORD = your-app-password
SMTP_FROM = noreply@yourdomain.com
CONTACT_EMAIL = your-email@gmail.com
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
```

### Step 4: Set Custom Domain (Optional)

1. In Vercel Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` with your domain

### Step 5: Deploy

```bash
git push origin main
```

Vercel automatically builds and deploys on push!

---

## Alternative Platforms

### Netlify Deployment

#### Prerequisites
- Netlify account
- Git repository

#### Setup

1. Connect repository at [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Set environment variables in Site settings → Build & deploy

#### Deploy Command
```bash
npm run build
npm start
```

---

### AWS Amplify

#### Setup

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Deploy
amplify publish
```

#### Configuration
- Framework: Next.js
- Build command: `npm run build`
- Start command: `npm start`

---

### Railway

#### Setup

1. Create account at [railway.app](https://railway.app)
2. Create new project
3. Connect GitHub repository
4. Set environment variables
5. Deploy automatically

#### Environment Variables
Add all SMTP and site configuration variables.

---

## Post-Deployment Checklist

### 1. Verify Email Configuration

Send a test email using the contact form:
- [ ] Form submission successful
- [ ] Developer receives notification email
- [ ] User receives confirmation email
- [ ] No errors in Vercel logs

### 2. Check SEO

```bash
# Check sitemap
https://yourdomain.com/sitemap.xml

# Check robots.txt
https://yourdomain.com/robots.txt

# Verify in Google Search Console
1. Go to google.com/search-console
2. Add property with your domain
3. Submit sitemap
4. Check for crawl errors
```

### 3. Performance Testing

```bash
# PageSpeed Insights
https://pagespeed.web.dev/

# Lighthouse Audit (Chrome DevTools)
- Press F12
- Audits tab
- Generate report

# WebPageTest
https://www.webpagetest.org/
```

### 4. Security Check

```bash
# SSL/TLS Certificate
https://www.ssllabs.com/ssltest/

# Security Headers
https://securityheaders.com/

# Check headers added in next.config.js
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
```

### 5. Mobile Testing

- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Check responsive breakpoints
- [ ] Verify touch interactions
- [ ] Test form submission

### 6. Analytics Setup

Add Google Analytics:

```typescript
// app/layout.tsx
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
  }}
/>
```

---

## Monitoring & Maintenance

### 1. Set Up Error Monitoring

#### Vercel Analytics
- Built-in monitoring dashboard
- Real-time error tracking
- Performance metrics

#### Sentry Integration (Optional)

```bash
npm install @sentry/nextjs
```

### 2. Regular Maintenance

- [ ] Update dependencies monthly: `npm update`
- [ ] Check for security vulnerabilities: `npm audit`
- [ ] Review and respond to portfolio form submissions
- [ ] Update portfolio content as needed
- [ ] Monitor email deliverability
- [ ] Check SEO rankings

### 3. Backup Strategy

```bash
# Clone repository regularly
git clone <your-repo-url> backup-$(date +%Y%m%d)

# Or use GitHub's built-in backup features
```

---

## Troubleshooting

### Contact Form Not Working

**Issue**: Form submissions fail or emails not received

**Solutions**:
1. Verify SMTP credentials in environment variables
2. Check Gmail App Password is correct (not regular password)
3. Enable "Less secure app access" if using Gmail
4. Check server logs in Vercel dashboard
5. Verify from address matches SMTP_FROM

### Slow Performance

**Issue**: Website loads slowly

**Solutions**:
1. Check bundle size: `npm run build` and review output
2. Enable image optimization in next.config.js
3. Use Vercel Analytics to identify bottlenecks
4. Optimize animations with Framer Motion
5. Implement code splitting

### SEO Not Working

**Issue**: Site not appearing in search results

**Solutions**:
1. Submit sitemap to Google Search Console
2. Verify metadata in layout.tsx
3. Check robots.txt is accessible
4. Wait 24-48 hours for initial indexing
5. Create backlinks from social profiles

### SSL Certificate Issues

**Issue**: HTTPS not working or certificate errors

**Solutions**:
- Vercel handles SSL automatically (free)
- For custom domain, Vercel auto-provisions Let's Encrypt
- Wait up to 24 hours for certificate generation
- Force HTTPS in next.config.js:

```javascript
headers: async () => [
  {
    source: '/:path*',
    headers: [
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains',
      },
    ],
  },
];
```

---

## Production Best Practices

### 1. Environment Variables

✅ **Do**:
- Use .env.local for local development
- Set production variables in platform dashboard
- Never commit .env.local to git
- Use NEXT_PUBLIC_ prefix only for public variables

❌ **Don't**:
- Commit sensitive data to repository
- Use same credentials for dev and prod
- Expose API keys in client code

### 2. Updates & Upgrades

```bash
# Check outdated packages
npm outdated

# Update all packages safely
npm update

# Update Next.js and dependencies
npm upgrade next react react-dom
```

### 3. Database (if needed in future)

If you add database functionality:
- Use Supabase or similar (requires backend)
- Never expose database credentials
- Implement proper authentication
- Use environment variables for connection strings
- Backup data regularly

### 4. Scaling

For high traffic:
- Vercel scales automatically
- Monitor Vercel Analytics
- Consider caching strategies
- Optimize database queries (if added)
- Implement CDN for static assets

---

## Custom Domain Setup

### Vercel Custom Domain

1. Project Settings → Domains
2. Add your domain
3. Update DNS with Vercel nameservers OR
4. Add CNAME record: `<your-subdomain>.vercel.app`

### Domain Registrar Examples

**Namecheap**:
- DNS → Nameserver → Change to Vercel nameservers

**GoDaddy**:
- DNS → Nameservers → Change to Vercel nameservers

**Google Domains**:
- DNS → Custom nameservers → Enter Vercel nameservers

---

## Scaling Guide

### When to Upgrade

Current setup handles:
- Up to 1,000+ concurrent users
- Unlimited portfolio views
- ~100 contact form submissions/day
- Global CDN distribution

If exceeding limits:
1. Contact Vercel support
2. Consider Enterprise plan
3. Implement caching strategies
4. Optimize database queries (if added)

---

## Disaster Recovery

### Backup Strategy

```bash
# Backup to GitHub
git push origin main

# Export database (if applicable)
# Regular incremental backups

# Test recovery monthly
```

### Rollback Process

```bash
# If deployment breaks
git revert <commit-hash>
git push origin main

# Vercel auto-deploys immediately
```

---

## Useful Commands

```bash
# Local development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality

# Analytics
npm run analyze      # Bundle analysis
npm run build --profile  # Detailed build info

# Testing
npm run typecheck    # Type checking
npm test             # Run tests (if configured)
```

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Next.js Discord**: https://discord.gg/nextjs
- **Vercel Support**: https://vercel.com/support

---

## Maintenance Checklist

Use this monthly:

- [ ] Check for security updates: `npm audit`
- [ ] Update dependencies: `npm update`
- [ ] Test contact form submission
- [ ] Review email deliverability
- [ ] Check Google Analytics
- [ ] Monitor Vercel dashboard
- [ ] Test on mobile devices
- [ ] Check SEO rankings
- [ ] Update portfolio content
- [ ] Review and respond to inquiries

---

**Deployment and maintenance are easier than ever with modern platforms like Vercel. Focus on your portfolio content and let the platform handle the infrastructure!**
