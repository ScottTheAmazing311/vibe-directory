import { type ClassValue, clsx } from "clsx";
import type { Category } from "./types";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getCategoryColor(category: Category): string {
  const colors: Record<Category, string> = {
    Home: 'bg-category-home',
    Game: 'bg-category-game',
    Health: 'bg-category-health',
    Work: 'bg-category-work',
    Creative: 'bg-category-creative',
    Utility: 'bg-category-utility',
  };
  return colors[category] || 'bg-gray-500';
}

export function getCreatorInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}
