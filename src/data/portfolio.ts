export const featuredProjects = [
  {
    id: 1,
    title: "Twitter UI Clone",
    description: "A fully responsive replica of Twitter's home UI built with modern web technologies. Features real-time interactions and mobile-first design.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
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
    tech: ["Next.js", "RedisAI", "Node.js", "Machine Learning"],
    image: "/images/career-finder.png",
    liveUrl: "https://careerfinder.spiky.dev",
    githubUrl: "https://github.com/Mr-spiky/CareerFinder",
    category: "AI/ML",
    status: "In Progress",
    featured: true
  },
  {
    id: 3,
    title: "G1Technologies Studio Website",
    description: "A comprehensive company website for G1Technologies featuring digital solutions, services showcase, AI-powered recommendations, awards recognition, client testimonials, and blog section with modern design.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "AI Integration"],
    image: "/images/G1_Techsite.png",
    liveUrl: "https://studio-ruby-eta.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/studio",
    category: "Fullstack",
    status: "Completed",
    featured: true
  },
  {
    id: 4,
    title: "NexWork Platform",
    description: "A Employee desktop to enhance daily workflow with modern UI/UX. Features daily updates, Quick Poll, and Upcoming events and more.",
    tech: ["React", "Context API", "Tailwind CSS", "Firebase"],
    image: "/images/nexwork.png",
    liveUrl: "https://nexwork-project.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/nexwork-project",
    category: "Fullstack",
    status: "Completed",
    featured: true
  },
  {
    id: 5,
    title: "passOP",
    description: "Your Own Password Manager. A secure and user-friendly password manager to store and manage your passwords safely.",
    tech: ["React+Vite", "Node.js", "Tailwind CSS"],
    image: "/images/passop.png",
    liveUrl: "https://pass-op-gamma.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/passOP",
    category: "Web App",
    status: "Completed",
    featured: false
  },
  {
    id: 6,
    title: "Netflix UI Clone",
    description: "A static Netflix landing page clone built with pure HTML and CSS, showcasing clean code and UI design skills.",
    tech: ["HTML", "CSS"],
    image: "/images/netflix-ui.png",
    liveUrl: "https://netflix-ui-gamma-rust.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/Netflix-UI",
    category: "Frontend",
    status: "Completed",
    featured: false
  },
  {
    id: 7,
    title: "Spotify UI Clone",
    description: "A static Spotify landing page clone built with pure HTML and CSS, showcasing clean code and UI design skills.",
    tech: ["CSS", "JavaScript", "HTML"],
    image: "/images/spotify.png",
    liveUrl: "https://spotify-version.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/spotify-version",
    category: "Frontend",
    status: "Completed",
    featured: false
  },
  {
    id: 8,
    title: "Todo App",
    description: "A simple and responsive Todo application for managing daily tasks, built with modern web technologies.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    image: "/images/todo-app.png",
    liveUrl: "https://todo-app-seven-kappa-25.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/Todo-app",
    category: "Web App",
    status: "Completed",
    featured: false
  },
  {
    id: 9,
    title: "G1Tech Landing Page",
    description: "A responsive and modern landing page for G1Technology, showcasing services, case studies, and client testimonials with a clean UI/UX design.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "UI/UX"],
    image: "/images/g1technology.png",
    liveUrl: "https://g1-tech-landingpage.vercel.app/",
    githubUrl: "https://github.com/Mr-spiky/G1Tech-landingpage",
    category: "Landing Page",
    status: "Completed",
    featured: false
  }
];

export const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "🔺" },
      { name: "TypeScript", level: 85, icon: "📘" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "HTML5", level: 98, icon: "🌐" },
      { name: "CSS3", level: 95, icon: "💄" },
      { name: "JavaScript", level: 90, icon: "⚡" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 85, icon: "🚀" },
      { name: "Express.js", level: 80, icon: "⚡" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "Firebase", level: 80, icon: "🔥" },
      { name: "PostgreSQL", level: 70, icon: "🐘" }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", level: 90, icon: "🌿" },
      { name: "GitHub", level: 95, icon: "🐙" },
      { name: "VS Code", level: 98, icon: "💻" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "Figma", level: 75, icon: "🎨" },
      { name: "AI/ML", level: 70, icon: "🤖" }
    ]
  }
];

export const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "G1 Technologies",
    period: "2024 - Present",
    description: "Leading development of modern web applications using React, Next.js, and cutting-edge technologies.",
    achievements: [
      "Built 5+ production-ready applications",
      "Implemented AI-powered features",
      "Optimized app performance by 40%"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Freelance",
    period: "2023 - 2024",
    description: "Developed responsive web applications and landing pages for various clients.",
    achievements: [
      "Delivered 10+ client projects",
      "Maintained 98% client satisfaction",
      "Specialized in modern UI/UX design"
    ]
  }
];