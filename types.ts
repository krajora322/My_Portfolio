import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  sourceLink: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon: LucideIcon }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}