export type PageType = 'work' | 'case-studies' | 'about' | 'skills' | 'contact';

export type ProjectCategory = 'all' | '2d' | '3d' | 'digital' | 'motion';

export interface Project {
  id: string;
  code: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  subCategory: string;
  year: string;
  description: string;
  tools: string[];
  image: string;
  fullImage?: string;
  details?: string;
}

export interface SoftwareTool {
  id: string;
  name: string;
  badge: string;
  badgeType: 'primary' | 'secondary';
  versionSubtitle: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface Milestone {
  period: string;
  isCurrent?: boolean;
  role: string;
  company: string;
  description: string;
  location: string;
}

export interface FaqItem {
  id: string;
  num: string;
  question: string;
  answerEn: string;
  answerZh: string;
  deliverables?: {
    category: string;
    items: string;
    type: 'primary' | 'secondary' | 'neutral';
  }[];
}
