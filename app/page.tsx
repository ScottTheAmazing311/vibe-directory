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
    <div className="min-h-screen bg-retro-white">
      <Header onSubmitClick={() => setIsModalOpen(true)} />

      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main>
        {isLoading ? (
          <LoadingSkeleton />
        ) : filteredProjects.length > 0 ? (
          <ProjectGrid projects={filteredProjects} />
        ) : (
          <EmptyState activeFilter={activeCategory} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-retro-black bg-retro-black text-retro-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-retro-yellow flex items-center justify-center">
                  <div className="w-4 h-4 bg-retro-black"></div>
                </div>
                <span className="font-mono text-sm font-bold tracking-wider">VIBE.DIRECTORY</span>
              </div>
              <p className="font-mono text-xs text-retro-gray-300">
                Showcasing projects built on pure vibes
              </p>
            </div>
            <div className="font-mono text-xs text-retro-gray-300">
              © 2026 — Built with intention
            </div>
          </div>
        </div>
      </footer>

      <SubmitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSubmitSuccess}
      />
    </div>
  );
}
