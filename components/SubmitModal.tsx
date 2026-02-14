'use client';

import { useState } from 'react';
import type { Category } from '@/lib/types';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function SubmitModal({ isOpen, onClose, onSuccess }: SubmitModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    creator: '',
    category: '' as Category | '',
    description: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const categories: Category[] = ['Home', 'Game', 'Health', 'Work', 'Creative', 'Utility'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (!formData.name || !formData.url || !formData.creator || !formData.category || !formData.description) {
      setError('All fields are required');
      return;
    }

    // Validate URL format
    try {
      new URL(formData.url);
    } catch {
      setError('Please enter a valid URL (include https://)');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit project');
      }

      // Reset form
      setFormData({
        name: '',
        url: '',
        creator: '',
        category: '',
        description: '',
      });

      onSuccess();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit project');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">
          Submit Your Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Name */}
          <div>
            <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
              Project Name *
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-dark-lighter/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-electric-blue/50 focus:outline-none transition-colors"
              placeholder="My Awesome Project"
              disabled={isLoading}
            />
          </div>

          {/* URL */}
          <div>
            <label htmlFor="url" className="block text-white/80 text-sm font-medium mb-2">
              Project URL *
            </label>
            <input
              id="url"
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full px-4 py-3 bg-dark-lighter/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-electric-blue/50 focus:outline-none transition-colors"
              placeholder="https://myproject.com"
              disabled={isLoading}
            />
          </div>

          {/* Creator */}
          <div>
            <label htmlFor="creator" className="block text-white/80 text-sm font-medium mb-2">
              Your Name *
            </label>
            <input
              id="creator"
              type="text"
              value={formData.creator}
              onChange={(e) => setFormData({ ...formData, creator: e.target.value })}
              className="w-full px-4 py-3 bg-dark-lighter/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-electric-blue/50 focus:outline-none transition-colors"
              placeholder="Your name"
              disabled={isLoading}
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-white/80 text-sm font-medium mb-2">
              Category *
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as Category })}
              className="w-full px-4 py-3 bg-dark-lighter/50 border border-white/10 rounded-lg text-white focus:border-electric-blue/50 focus:outline-none transition-colors"
              disabled={isLoading}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-white/80 text-sm font-medium mb-2">
              Description *
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-dark-lighter/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-electric-blue/50 focus:outline-none transition-colors resize-none"
              placeholder="Brief description of your project..."
              rows={4}
              disabled={isLoading}
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-dark-lighter/50 border border-white/10 rounded-lg text-white/80 hover:border-white/30 transition-all duration-300 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-electric-blue/20 border border-electric-blue/50 rounded-lg text-electric-blue font-semibold hover:bg-electric-blue/30 hover:shadow-glow-blue transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Submitting...' : 'Submit Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
