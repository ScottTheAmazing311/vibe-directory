import { NextRequest, NextResponse } from 'next/server';
import { getAllProjects, addProject } from '@/lib/data';
import type { Category } from '@/lib/types';

export async function GET() {
  try {
    const projects = await getAllProjects();
    // Filter to only return approved projects
    const approvedProjects = projects.filter(p => p.approved);
    return NextResponse.json({ projects: approvedProjects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, url, creator, category, description } = body;

    if (!name || !url || !creator || !category || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Validate category
    const validCategories: Category[] = ['Home', 'Game', 'Health', 'Work', 'Creative', 'Utility', 'Entertainment'];
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: 'Invalid category' },
        { status: 400 }
      );
    }

    // Generate screenshot URL using ScreenshotOne API
    const screenshotUrl = new URL('https://api.screenshotone.com/take');
    screenshotUrl.searchParams.set('url', url);
    screenshotUrl.searchParams.set('access_key', process.env.SCREENSHOTONE_ACCESS_KEY || 'demo');
    screenshotUrl.searchParams.set('viewport_width', '1280');
    screenshotUrl.searchParams.set('viewport_height', '720');
    screenshotUrl.searchParams.set('format', 'webp');
    screenshotUrl.searchParams.set('cache', 'true');

    // Create new project
    const newProject = await addProject({
      name,
      url,
      creator,
      category,
      description,
      screenshotUrl: screenshotUrl.toString(),
    });

    return NextResponse.json({ project: newProject }, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create project';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
