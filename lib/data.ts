import { supabase } from './supabase';
import type { Project } from './types';

export async function getAllProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) {
      console.error('Error fetching projects:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

export async function addProject(project: Omit<Project, 'id' | 'createdAt' | 'approved'>): Promise<Project> {
  const newProject = {
    ...project,
    createdAt: new Date().toISOString(),
    approved: true, // Auto-approve for MVP
  };

  const { data, error } = await supabase
    .from('projects')
    .insert(newProject)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to add project: ${error.message}`);
  }

  return data;
}
