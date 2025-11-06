// Types for Project data
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
}

// Project Categories
export type ProjectCategory = 
  | "Frontend" 
  | "Fullstack" 
  | "AI/ML" 
  | "Web App" 
  | "Landing Page"
  | "Mobile App"
  | "Desktop App";

// Project Status
export type ProjectStatus = 
  | "Completed" 
  | "In Progress" 
  | "Planned" 
  | "Maintenance";

// Tech Stack taxonomy for consistency
export const TechStack = {
  // Frontend
  HTML: "HTML",
  CSS: "CSS",
  JAVASCRIPT: "JavaScript",
  TYPESCRIPT: "TypeScript",
  REACT: "React",
  NEXT_JS: "Next.js",
  VUE: "Vue.js",
  ANGULAR: "Angular",
  
  // Styling
  TAILWIND_CSS: "Tailwind CSS",
  SASS: "Sass",
  STYLED_COMPONENTS: "Styled Components",
  
  // Backend
  NODE_JS: "Node.js",
  EXPRESS: "Express",
  NEST_JS: "NestJS",
  PYTHON: "Python",
  DJANGO: "Django",
  FLASK: "Flask",
  
  // Database
  MONGODB: "MongoDB",
  POSTGRESQL: "PostgreSQL",
  MYSQL: "MySQL",
  FIREBASE: "Firebase",
  REDIS: "Redis",
  
  // State Management
  REDUX: "Redux",
  CONTEXT_API: "Context API",
  ZUSTAND: "Zustand",
  
  // Other
  MACHINE_LEARNING: "Machine Learning",
  AI_INTEGRATION: "AI Integration",
  REDIS_AI: "RedisAI",
  VITE: "Vite"
} as const;

// Your Projects Data - Easy to maintain and update
export const projects: Project[] = [
  {
    id: 1,
    title: "Twitter UI Clone",
    description: "A fully responsive replica of Twitter's home UI built with modern web technologies. Features real-time interactions and mobile-first design.",
    tech: [TechStack.REACT, TechStack.NEXT_JS, TechStack.TAILWIND_CSS, TechStack.TYPESCRIPT],
    image: "/images/twitter-clone.png",
    liveUrl: "https://mr-spiky.github.io/Twitter-clone/",
    githubUrl: "https://github.com/Mr-spiky/Twitter-clone",
    category: "Frontend",
    status: "Completed",
    featured: true
  },
  {
    id: 2,
    title: "CareerFinder AI",
    description: "AI-powered career suggestion tool that analyzes user skills and preferences to recommend optimal career paths using machine learning.",
    tech: [TechStack.NEXT_JS, TechStack.REDIS_AI, TechStack.NODE_JS, TechStack.MACHINE_LEARNING],
    image: "/images/career-finder.png",
    liveUrl: "https://careerfinder.spiky.dev",
    githubUrl: "https://github.com/Mr-spiky/CareerFinder",
    category: "AI/ML",
    status: "In Progress",
    featured: true
  },
  {
    id: 3,
    title: "Spotify UI Clone",
    description: "A static Spotify landing page clone built with pure HTML and CSS, showcasing clean code and UI design skills.",
    tech: [TechStack.CSS, TechStack.JAVASCRIPT, TechStack.HTML],
    image: "/images/spotify.png",
    liveUrl: "https://spotify-version.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/spotify-version",
    category: "Frontend",
    status: "Completed",
    featured: true
  },
  {
    id: 4,
    title: "Netflix UI Clone",
    description: "A static Netflix landing page clone built with pure HTML and CSS, showcasing clean code and UI design skills.",
    tech: [TechStack.HTML, TechStack.CSS],
    image: "/images/netflix-ui.png",
    liveUrl: "https://netflix-ui-gamma-rust.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/Netflix-UI",
    category: "Frontend",
    status: "Completed",
    featured: false
  },
  {
    id: 5,
    title: "NexWork Platform",
    description: "A Employee desktop to enhance daily workflow with modern UI/UX. Features daily updates, Quick Poll, and Upcoming events and more.",
    tech: [TechStack.REACT, TechStack.CONTEXT_API, TechStack.TAILWIND_CSS, TechStack.FIREBASE],
    image: "/images/nexwork.png",
    liveUrl: "https://nexwork-project.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/nexwork-project",
    category: "Fullstack",
    status: "Completed",
    featured: true
  },
  {
    id: 6,
    title: "passOP",
    description: "Your Own Password Manager. A secure and user-friendly password manager to store and manage your passwords safely.",
    tech: [`${TechStack.REACT}+${TechStack.VITE}`, TechStack.NODE_JS, TechStack.TAILWIND_CSS],
    image: "/images/passop.png",
    liveUrl: "https://pass-op-gamma.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/passOP",
    category: "Web App",
    status: "Completed",
    featured: false
  },
  {
    id: 7,
    title: "Todo App",
    description: "A simple and responsive Todo application for managing daily tasks, built with modern web technologies.",
    tech: [TechStack.REACT, TechStack.NODE_JS, TechStack.TAILWIND_CSS],
    image: "/images/todo-app.png",
    liveUrl: "https://todo-app-seven-kappa-25.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/Todo-app",
    category: "Web App",
    status: "Completed",
    featured: false
  },
  {
    id: 8,
    title: "G1Tech Landing Page",
    description: "A responsive and modern landing page for G1Technology, showcasing services, case studies, and client testimonials with a clean UI/UX design.",
    tech: ["HTML5", TechStack.TAILWIND_CSS, TechStack.JAVASCRIPT, "UI/UX"],
    image: "/images/g1technology.png",
    liveUrl: "https://g1-tech-landingpage.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/G1Tech-landingpage",
    category: "Landing Page",
    status: "Completed",
    featured: false
  },
  {
    id: 9,
    title: "G1Technologies Studio Website",
    description: "A comprehensive company website for G1Technologies featuring digital solutions, services showcase, AI-powered recommendations, awards recognition, client testimonials, and blog section with modern design.",
    tech: [TechStack.NEXT_JS, TechStack.REACT, TechStack.TAILWIND_CSS, TechStack.TYPESCRIPT, TechStack.AI_INTEGRATION],
    image: "/images/G1_Techsite.png",
    liveUrl: "https://studio-ruby-eta.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/studio",
    category: "Fullstack",
    status: "Completed",
    featured: true
  }
];

// Helper functions for easy data access
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getCompletedProjects = (): Project[] => {
  return projects.filter(project => project.status === "Completed");
};

export const getProjectsByTech = (tech: string): Project[] => {
  return projects.filter(project => 
    project.tech.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
};

export const getAllTechnologies = (): string[] => {
  const allTech = projects.flatMap(project => project.tech);
  return [...new Set(allTech)]; // Remove duplicates
};

export const getProjectCategories = (): ProjectCategory[] => {
  const categories = projects.map(project => project.category);
  return [...new Set(categories)]; // Remove duplicates
};

export const getProjectStats = () => {
  return {
    total: projects.length,
    completed: getCompletedProjects().length,
    featured: getFeaturedProjects().length,
    inProgress: projects.filter(p => p.status === "In Progress").length,
    uniqueTechnologies: getAllTechnologies().length,
    categories: getProjectCategories().length
  };
};

// Template for adding new projects - copy and modify this
export const PROJECT_TEMPLATE: Omit<Project, 'id'> = {
  title: "Project Title",
  description: "Detailed description of the project, its features, and what makes it special.",
  tech: [
    // Add relevant technologies from TechStack enum
    TechStack.REACT,
    TechStack.TYPESCRIPT,
    // Add more technologies...
  ],
  image: "/images/project-image.png", // Add image path
  liveUrl: "https://your-project-live-url.com",
  githubUrl: "https://github.com/your-username/project-repo",
  category: "Frontend", // Choose appropriate category
  status: "Completed", // Choose appropriate status
  featured: false // Set to true for featured projects
};

/*
HOW TO ADD NEW PROJECTS:

1. Copy the PROJECT_TEMPLATE above
2. Update all fields with your project information
3. Add a unique ID (increment from the last project)
4. Add the project to the projects array
5. Make sure the image exists in /public/images/
6. Use technologies from the TechStack enum for consistency

Example:
{
  id: 10, // Next available ID
  title: "My Awesome App",
  description: "A revolutionary app that solves real-world problems.",
  tech: [TechStack.REACT, TechStack.NODE_JS, TechStack.MONGODB],
  image: "/images/my-awesome-app.png",
  liveUrl: "https://my-awesome-app.com",
  githubUrl: "https://github.com/username/my-awesome-app",
  category: "Fullstack",
  status: "Completed",
  featured: true
}
*/

// For backward compatibility (remove this after updating components)
export const featuredProjects = projects;