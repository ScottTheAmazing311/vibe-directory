# Deployment Guide

## Prerequisites

1. **ScreenshotOne API Key**
   - Sign up at [screenshotone.com](https://screenshotone.com/)
   - Get your free API key (1000 screenshots/month free tier)
   - Note: The demo key works for testing but has rate limits

2. **Git Repository**
   - Push your code to GitHub, GitLab, or Bitbucket

## Deploy to Vercel (Recommended)

Vercel is the easiest platform for Next.js deployment.

### Method 1: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Configure the project:
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add Environment Variable:
   - Key: `SCREENSHOTONE_ACCESS_KEY`
   - Value: Your ScreenshotOne API key
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /Users/homebase/vibe-directory
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? vibe-directory
# - Directory? ./
# - Override settings? N

# Add environment variable
vercel env add SCREENSHOTONE_ACCESS_KEY

# Redeploy to pick up env var
vercel --prod
```

## Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to your Git provider
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables:
     - `SCREENSHOTONE_ACCESS_KEY`: Your API key
5. Click "Deploy site"

## Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variable:
   - `SCREENSHOTONE_ACCESS_KEY`: Your API key
5. Railway will auto-detect Next.js and deploy

## Important Notes

### Data Persistence

⚠️ **The current JSON storage will NOT persist on Vercel/Netlify serverless deployments!**

The `data/projects.json` file will reset on each deployment because serverless functions are stateless.

**For production, you MUST upgrade to a database:**

#### Quick Database Setup (Vercel Postgres)

1. In Vercel dashboard, go to Storage → Create Database
2. Select Postgres → Create
3. Update `lib/data.ts` to use database queries:

```typescript
import { sql } from '@vercel/postgres';

export async function getAllProjects(): Promise<Project[]> {
  const { rows } = await sql`SELECT * FROM projects WHERE approved = true ORDER BY created_at DESC`;
  return rows;
}

export async function addProject(project: Omit<Project, 'id' | 'createdAt' | 'approved'>): Promise<Project> {
  const id = uuidv4();
  const createdAt = new Date().toISOString();

  await sql`
    INSERT INTO projects (id, name, url, creator, category, description, screenshot_url, created_at, approved)
    VALUES (${id}, ${project.name}, ${project.url}, ${project.creator}, ${project.category}, ${project.description}, ${project.screenshotUrl}, ${createdAt}, true)
  `;

  return { ...project, id, createdAt, approved: true };
}
```

4. Create table:

```sql
CREATE TABLE projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  creator TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  screenshot_url TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  approved BOOLEAN DEFAULT true
);
```

### Alternative: Use Vercel KV or Supabase

- **Vercel KV**: Simple key-value store, good for small datasets
- **Supabase**: Full PostgreSQL database with auth, realtime, storage

## Custom Domain

### Vercel

1. Go to project settings → Domains
2. Add your domain
3. Configure DNS:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or A record to Vercel's IP

### Netlify

1. Go to Domain settings
2. Add custom domain
3. Follow DNS configuration instructions

## Environment Variables

Make sure these are set in production:

| Variable | Required | Description |
|----------|----------|-------------|
| `SCREENSHOTONE_ACCESS_KEY` | Yes | Your ScreenshotOne API key |

## Post-Deployment Checklist

- [ ] Environment variables configured
- [ ] Site loads correctly
- [ ] Project submission works
- [ ] Screenshots generate properly
- [ ] Category filtering functional
- [ ] Responsive on mobile/tablet/desktop
- [ ] Custom domain configured (optional)
- [ ] Analytics added (optional)

## Monitoring

### Vercel Analytics

Enable in project settings → Analytics (free tier available)

### Error Tracking

Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Posthog for product analytics

## Scaling Considerations

For high traffic:

1. **Screenshot API**: Upgrade ScreenshotOne plan or cache screenshots
2. **Database**: Use connection pooling (built into Vercel Postgres)
3. **CDN**: Vercel/Netlify include CDN by default
4. **Caching**: Enable ISR (Incremental Static Regeneration)

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### Screenshots Not Loading

- Verify `SCREENSHOTONE_ACCESS_KEY` is set
- Check API key is valid
- Monitor rate limits (1000/month on free tier)

### Projects Not Persisting

- Upgrade to database (see Data Persistence section)
- Cannot use JSON file storage in production

## Cost Estimate

**Free Tier (Good for MVP):**
- Vercel Hosting: Free
- ScreenshotOne: 1000 screenshots/month free
- Vercel Postgres: 256 MB storage free

**Total: $0/month**

**Paid (For Production):**
- Vercel Pro: $20/month
- ScreenshotOne Pro: $29/month (10k screenshots)
- Vercel Postgres: $10/month (512 MB)

**Total: ~$60/month**

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [ScreenshotOne Docs](https://screenshotone.com/docs)
