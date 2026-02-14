'use client';

import { useState, useEffect } from 'react';
import type { Project, Category } from '@/lib/types';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import ProjectGrid from '@/components/ProjectGrid';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import EmptyState from '@/components/EmptyState';
import SubmitModal from '@/components/SubmitModal';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleSubmitSuccess = () => {
    // Refresh projects after successful submission
    fetchProjects();
  };

  return (
    <div className="min-h-screen">
      <Header onSubmitClick={() => setIsModalOpen(true)} />

      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="max-w-7xl mx-auto">
        {isLoading ? (
          <LoadingSkeleton />
        ) : filteredProjects.length > 0 ? (
          <ProjectGrid projects={filteredProjects} />
        ) : (
          <EmptyState activeFilter={activeCategory} />
        )}
      </main>

      <SubmitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSubmitSuccess}
      />
    </div>
  );
}
