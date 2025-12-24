import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Briefcase, 
  ShoppingCart, 
  Github, 
  Linkedin, 
  Mail, 
  FileCode,
  Layers,
  Terminal,
  Cpu,
  Globe,
  Leaf
} from 'lucide-react';
import { NavItem, Project, SkillCategory, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Urban Gardening India',
    description: 'A full-stack urban gardening platform combining e-commerce, service booking, and AI-powered plant diagnosis.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini', 'Context API', 'Full-Stack'],
    demoLink: 'https://urban-gardening-five.vercel.app/',
    sourceLink: 'https://github.com/krajora322/UrbanGardening',
    icon: Leaf
  },
  {
    id: 2,
    title: 'Glowora – Full-Stack E-Commerce Platform',
    description: 'Full-stack e-commerce platform for cosmetics featuring shopping cart, wishlist, order management, and advanced product filtering with 30+ API endpoints.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Material-UI', 'Bootstrap'],
    demoLink: 'https://glowora-app-gamma.vercel.app/',
    sourceLink: 'https://github.com/krajora322/Glowora-App',
    icon: ShoppingCart
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: Code2 },
      { name: 'CSS3', icon: Layout },
      { name: 'React', icon: Globe },
      { name: 'Tailwind CSS', icon: Layers },
      { name: 'Bootstrap', icon: Briefcase }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Terminal },
      { name: 'REST API', icon: Server }
    ]
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'Git', icon: Code2 },
      { name: 'MySQL', icon: Database }
    ]
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: Code2 },
      { name: 'JavaScript', icon: FileCode },
      { name: 'TypeScript', icon: FileCode }
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/khushi-rajora-a305581b4/?skipRedirect=true', icon: Linkedin },
  { platform: 'GitHub', url: 'https://github.com/krajora322', icon: Github },
  { platform: 'Email', url: 'mailto:krajora322@gmail.com', icon: Mail },
];