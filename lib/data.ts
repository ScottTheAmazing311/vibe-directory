import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type { Project } from './types';

const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

export async function getAllProjects(): Promise<Project[]> {
  try {
    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    const data = JSON.parse(fileContent);
    return data.projects || [];
  } catch (error) {
    // If file doesn't exist, return empty array
    console.error('Error reading projects:', error);
    return [];
  }
}

export async function addProject(project: Omit<Project, 'id' | 'createdAt' | 'approved'>): Promise<Project> {
  const projects = await getAllProjects();

  const newProject: Project = {
    ...project,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    approved: true, // Auto-approve for MVP, can add moderation later
  };

  projects.push(newProject);
  await saveProjects(projects);

  return newProject;
}

export async function saveProjects(projects: Project[]): Promise<void> {
  const data = { projects };
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}
