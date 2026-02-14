export type Category = 'Home' | 'Game' | 'Health' | 'Work' | 'Creative' | 'Utility' | 'Entertainment';

export interface Project {
  id: string;
  name: string;
  url: string;
  creator: string;
  category: Category;
  description: string;
  screenshotUrl: string;
  createdAt: string;
  approved: boolean;
}
