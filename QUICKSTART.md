# Vibe Directory - Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Verify Installation
```bash
cd /Users/homebase/vibe-directory
npm run dev
```

The app should start at **http://localhost:3000** (or 3001 if 3000 is taken)

### Step 2: Test in Browser

Open the URL and verify:
- ✅ Six seed projects display in a grid
- ✅ Category filter buttons work
- ✅ "Submit a Project" button opens modal
- ✅ Glassmorphism design loads properly
- ✅ Responsive design (resize browser)

### Step 3: Get ScreenshotOne API Key

1. Go to https://screenshotone.com
2. Sign up for free account (1000 screenshots/month)
3. Copy your API key
4. Update `.env.local`:
   ```bash
   SCREENSHOTONE_ACCESS_KEY=YOUR_ACTUAL_KEY_HERE
   ```
5. Restart dev server: `npm run dev`

### Step 4: Test Submission

1. Click "Submit a Project"
2. Fill out the form:
   - Name: Your Project Name
   - URL: https://yourproject.com
   - Creator: Your Name
   - Category: (select one)
   - Description: Brief description
3. Click "Submit Project"
4. Verify new project appears in grid

### Step 5: Build for Production

```bash
npm run build
npm run start
```

Visit http://localhost:3000 to test production build.

---

## 📋 Pre-Deployment Checklist

Before deploying to production:

### Required
- [ ] Replace ScreenshotOne API key in `.env.local`
- [ ] Test all features work locally
- [ ] Run production build successfully
- [ ] Choose deployment platform (Vercel/Netlify/Railway)

### Important
- [ ] Plan database migration (JSON won't persist in production!)
- [ ] Set up Git remote repository
- [ ] Configure environment variables on platform
- [ ] Add custom domain (optional)

### Recommended
- [ ] Enable analytics
- [ ] Set up error monitoring
- [ ] Configure SEO meta tags
- [ ] Add robots.txt and sitemap

---

## 🎯 Common Tasks

### Add a New Project Manually
Edit `data/projects.json`:
```json
{
  "id": "7",
  "name": "New Project",
  "url": "https://newproject.com",
  "creator": "Creator Name",
  "category": "Utility",
  "description": "Project description",
  "screenshotUrl": "https://api.screenshotone.com/...",
  "createdAt": "2024-01-21T10:00:00Z",
  "approved": true
}
```

### Change Category Colors
Edit `tailwind.config.ts`:
```typescript
category: {
  home: '#4caf50',    // Change these hex colors
  game: '#9c27b0',
  // ...
}
```

### Add New Category
1. Update `lib/types.ts`:
   ```typescript
   export type Category = 'Home' | 'Game' | ... | 'NewCategory';
   ```
2. Add color in `tailwind.config.ts`
3. Update `components/CategoryFilter.tsx` if needed

### Customize Branding
- **Logo/Title**: Edit `components/Header.tsx`
- **Colors**: Edit `tailwind.config.ts`
- **Fonts**: Edit `app/layout.tsx`

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
The server will automatically use port 3001. Or stop other process:
```bash
lsof -ti:3000 | xargs kill
```

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Screenshots Not Loading
1. Check API key is set in `.env.local`
2. Verify key is valid at screenshotone.com
3. Check browser console for errors
4. Verify URL is accessible publicly

### Projects Not Saving
- Check file permissions on `data/projects.json`
- Verify API endpoint is working: `curl http://localhost:3000/api/projects`
- Check browser console for errors

---

## 📚 Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main page logic |
| `app/globals.css` | Styling and animations |
| `components/SubmitModal.tsx` | Submission form |
| `app/api/projects/route.ts` | API endpoints |
| `data/projects.json` | Data storage |
| `lib/types.ts` | TypeScript types |

---

## 🎨 Customization Quick Reference

### Colors
**File**: `tailwind.config.ts`
- Primary: `electric.blue` (#00d4ff)
- Secondary: `accent.purple` (#a78bfa)
- Background: `dark.DEFAULT` (#0a0a0f)

### Typography
**File**: `app/layout.tsx`
- Current: Inter
- Change: Import different Google Font

### Animations
**File**: `app/globals.css`
- Card hover: `.card-hover-glow`
- Glass effect: `.glass-card`
- Loading: `.shimmer`

---

## 🚀 Deploy Now

Choose your platform:

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

### Railway
Go to railway.app → New Project → Deploy from GitHub

**Remember**: Set `SCREENSHOTONE_ACCESS_KEY` in platform environment variables!

---

## 📞 Need Help?

1. **Setup Issues**: Check README.md
2. **Deployment**: See DEPLOYMENT.md
3. **Architecture**: Read IMPLEMENTATION_SUMMARY.md
4. **Next.js**: https://nextjs.org/docs
5. **Tailwind CSS**: https://tailwindcss.com/docs

---

## ✨ You're Ready!

The Vibe Directory is fully functional and ready to showcase amazing projects. Have fun building! 🎉
