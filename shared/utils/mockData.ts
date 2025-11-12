import { PersonalDetails, Project, Company } from './types';

export const mockPersonalDetails: PersonalDetails = {
  name: 'Aditya Singh',
  logo: '/images/logo.svg',
  about: 'Passionate developer creating amazing web experiences',
  profile_img: '/images/bob.png',
  resume: 'https://drive.google.com/file/d/1mftSjtmYZl1MtqdYuLqK8IVjAv94IqCY/view?usp=drive_link',
  calendyUrl: 'https://calendly.com/Aditya',
  work: {
    company: 'Vellore Institute of Technology',
    designation: 'B.Tech Student (Final Year)',
    logo: '/images/logo.svg'
  },
  socialMedia: [
    {
      link: 'https://github.com/AdminAdi',
      image_file: '/images/icons/github.svg',
      alt_text: 'GitHub'
    },
    {
      link: 'https://www.linkedin.com/in/aditya-singh-sde/',
      image_file: '/images/icons/linkedin.svg',
      alt_text: 'LinkedIn'
    },
    {
      link: 'https://instagram.com/cove9851', 
      image_file: '/images/icons/instagram.svg',
      alt_text: 'Twitter'
    }
  ]
};

export const mockProjects: Project[] = [
  {
    slug: 'blogs',
    name: 'Blogs Platform',
    tagline: 'A modern platform for sharing and reading blogs',
    description: 'A full-stack blog platform with user authentication and rich text editing',
    img: '/images/projects/Blogs.webp',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/AdminAdi/Aditya-Blogs',
    category: ['Development'],
    featured: true,
    url: '#'
  },
  {
    slug: 'tomato-timer',
    name: 'Tomato Timer',
    tagline: 'A productivity timer based on Pomodoro technique',
    description: 'A clean and intuitive Pomodoro timer to boost your productivity with customizable work/break intervals',
    img: '/images/projects/tomato.webp',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/AdminAdi/Tomato',
    category: ['Development', 'Productivity'],
    featured: true,
    url: '#'
  },
  {
    slug: 'job-portal',
    name: 'Job Portal',
    tagline: 'Find your dream job with ease',
    description: 'A comprehensive job search and application platform connecting employers with top talent',
    img: '/images/projects/Job.webp',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/AdminAdi/JobSearch',
    category: ['Development', 'Job Board'],
    featured: true,
    url: '#'
  },
  {
    slug: 'crowd-funding',
    name: 'Crowd Funding',
    tagline: 'Bring your ideas to life with community support',
    description: 'A crowdfunding platform where creators can showcase their projects and backers can support innovative ideas',
    img: '/images/projects/crowd.webp',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    github: 'https://github.com/AdminAdi/Crowd-Funding-',
    category: ['Development', 'Finance'],
    featured: true,
    url: '#'
  }
];

export const mockCompanies: Company[] = [
  {
    name: 'Vaishnav Technologies',
    logo_url: '',
    position: 'React Developer',
    startDate: '2024-04-01',
    endDate: '2024-06-12',
    responsibilities: [
      'Developed and maintained responsive web applications using React',
      'Collaborated with cross-functional teams to deliver high-quality features',
      'Implemented reusable components and front-end libraries for future use',
      'Optimized components for maximum performance across various devices',
      'Participated in code reviews and provided constructive feedback'
    ]
  }
];
