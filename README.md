# Vibe Directory

A Next.js showcase hub for vibe-coded projects featuring glassmorphism design, category filtering, and automated screenshot generation.

## Features

- **Glassmorphism UI**: Beautiful frosted glass cards with gradient accents
- **Category Filtering**: Browse projects by Home, Game, Health, Work, Creative, or Utility
- **Screenshot Generation**: Automatic project screenshots via ScreenshotOne API
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Real-time Updates**: Projects appear immediately after submission
- **Smooth Animations**: Framer Motion-powered transitions and hover effects

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Screenshot API**: ScreenshotOne
- **Data Storage**: JSON file (easily upgradeable to database)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vibe-directory
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.local` and add your ScreenshotOne API key
   - Get a free API key at [ScreenshotOne.com](https://screenshotone.com/)

```bash
# .env.local
SCREENSHOTONE_ACCESS_KEY=your_key_here
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
vibe-directory/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Main page with state management
│   ├── globals.css         # Global styles + glassmorphism
│   └── api/
│       └── projects/
│           └── route.ts    # GET/POST /api/projects
├── components/
│   ├── Header.tsx          # Logo, tagline, submit button
│   ├── ProjectCard.tsx     # Glassmorphism card component
│   ├── ProjectGrid.tsx     # Responsive grid with animations
│   ├── CategoryFilter.tsx  # Category filter pills
│   ├── SubmitModal.tsx     # Project submission form
│   ├── LoadingSkeleton.tsx # Loading state placeholder
│   └── EmptyState.tsx      # No results message
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   ├── data.ts             # JSON file operations
│   └── utils.ts            # Utility functions
└── data/
    └── projects.json       # Project data storage
```

## API Routes

### GET /api/projects

Fetch all approved projects.

**Response:**
```json
{
  "projects": [
    {
      "id": "uuid",
      "name": "Project Name",
      "url": "https://project.com",
      "creator": "Creator Name",
      "category": "Game",
      "description": "Project description",
      "screenshotUrl": "https://...",
      "createdAt": "2024-01-15T10:00:00Z",
      "approved": true
    }
  ]
}
```

### POST /api/projects

Submit a new project.

**Request Body:**
```json
{
  "name": "My Project",
  "url": "https://myproject.com",
  "creator": "Your Name",
  "category": "Utility",
  "description": "Brief project description"
}
```

**Response:**
```json
{
  "project": {
    "id": "generated-uuid",
    "name": "My Project",
    ...
  }
}
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import project in Vercel dashboard

3. Add environment variable:
   - `SCREENSHOTONE_ACCESS_KEY`: Your ScreenshotOne API key

4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization

### Adding Categories

Edit `lib/types.ts`:

```typescript
export type Category = 'Home' | 'Game' | 'Health' | 'Work' | 'Creative' | 'Utility' | 'YourCategory';
```

Update category colors in `tailwind.config.ts`.

### Styling

- Global styles: `app/globals.css`
- Theme configuration: `tailwind.config.ts`
- Component-specific styles: Use Tailwind utility classes

### Data Storage

The current implementation uses a JSON file. To upgrade to a database:

1. Replace `lib/data.ts` with database queries
2. Update API routes in `app/api/projects/route.ts`
3. Common options: Vercel Postgres, Supabase, PlanetScale

## Future Enhancements

- [ ] Migrate to database (Vercel Postgres)
- [ ] Add project moderation queue
- [ ] Implement search functionality
- [ ] Add upvoting/likes
- [ ] Creator profiles
- [ ] Tags/keywords system
- [ ] Screenshot refresh mechanism
- [ ] Analytics integration

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
