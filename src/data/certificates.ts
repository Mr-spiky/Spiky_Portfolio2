// Types for Certificate data
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  credentialUrl: string;
  image: string;
  verified: boolean;
  featured: boolean;
}

// Certificate Categories for easy filtering
export const CertificateCategories = {
  PROGRAMMING: "Programming",
  WEB_DEVELOPMENT: "Web Development", 
  COMPETITIVE_CODING: "Competitive Coding",
  COMPUTER_APPLICATIONS: "Computer Applications",
  PROFESSIONAL_DEVELOPMENT: "Professional Development",
  GOVERNMENT_TRAINING: "Government Training"
} as const;

// Skills taxonomy for consistency
export const CertificateSkills = {
  // Programming & Development
  PROGRAMMING: "Programming",
  WEB_DEVELOPMENT: "Web Development",
  SOFTWARE_DEVELOPMENT: "Software Development",
  JAVASCRIPT: "JavaScript",
  REACT: "React",
  NODEJS: "Node.js",
  TYPESCRIPT: "TypeScript",
  
  // Computer Applications
  COMPUTER_APPLICATIONS: "Computer Applications",
  MS_OFFICE: "MS Office",
  DATABASE_MANAGEMENT: "Database Management",
  
  // Competitive Programming
  COMPETITIVE_PROGRAMMING: "Competitive Programming",
  DATA_STRUCTURES: "Data Structures",
  ALGORITHMS: "Algorithms",
  PROBLEM_SOLVING: "Problem Solving",
  CODING_CHALLENGES: "Coding Challenges",
  
  // Professional Skills
  COMMUNITY_LEADERSHIP: "Community Leadership",
  MENTORING: "Mentoring",
  TECHNICAL_WRITING: "Technical Writing",
  CAREER_GROWTH: "Career Growth",
  PROFESSIONAL_DEVELOPMENT: "Professional Development",
  
  // Industry & Standards
  BEST_PRACTICES: "Best Practices",
  INDUSTRY_STANDARDS: "Industry Standards",
  INDUSTRY_KNOWLEDGE: "Industry Knowledge",
  
  // Other
  PROJECT_IMPLEMENTATION: "Project Implementation",
  SKILL_ASSESSMENT: "Skill Assessment",
  MODERN_FRAMEWORKS: "Modern Frameworks",
  ADMINISTRATIVE_SKILLS: "Administrative Skills",
  PUBLIC_SERVICE: "Public Service",
  MUNICIPAL_OPERATIONS: "Municipal Operations",
  CIVIC_KNOWLEDGE: "Civic Knowledge"
} as const;

// Your Certificates Data - Easy to maintain and update
export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Advanced Diploma in Computer Applications (ADCA)",
    issuer: "Computer Training Institute",
    date: "2024",
    credentialId: "ADCA-2024-001",
    description: "Comprehensive certification covering computer applications, programming fundamentals, and modern software development practices.",
    skills: [
      CertificateSkills.COMPUTER_APPLICATIONS,
      CertificateSkills.PROGRAMMING,
      CertificateSkills.SOFTWARE_DEVELOPMENT,
      CertificateSkills.MS_OFFICE,
      CertificateSkills.DATABASE_MANAGEMENT
    ],
    credentialUrl: "#", // TODO: Add actual credential URL
    image: "/images/certificates/ADCA certificate.jpg",
    verified: true,
    featured: true
  },
  {
    id: 2,
    title: "CodeSlayer Ambassador",
    issuer: "CodeSlayer Platform",
    date: "2024",
    credentialId: "CS-AMB-2024-002",
    description: "Recognition as a CodeSlayer Ambassador for exceptional coding skills and community contribution.",
    skills: [
      CertificateSkills.PROGRAMMING,
      CertificateSkills.COMMUNITY_LEADERSHIP,
      CertificateSkills.PROBLEM_SOLVING,
      CertificateSkills.MENTORING,
      CertificateSkills.TECHNICAL_WRITING
    ],
    credentialUrl: "#", // TODO: Add actual credential URL
    image: "/images/certificates/CodeSlayerAmbassador.png",
    verified: true,
    featured: true
  },
  {
    id: 3,
    title: "CodeSlayer Unstop Certification",
    issuer: "Unstop (formerly Dare2Compete)",
    date: "2024",
    credentialId: "CS-UNSTOP-2024-003",
    description: "Certification from Unstop platform recognizing coding excellence and competitive programming skills.",
    skills: [
      CertificateSkills.COMPETITIVE_PROGRAMMING,
      CertificateSkills.DATA_STRUCTURES,
      CertificateSkills.ALGORITHMS,
      CertificateSkills.PROBLEM_SOLVING,
      CertificateSkills.CODING_CHALLENGES
    ],
    credentialUrl: "#", // TODO: Add actual credential URL
    image: "/images/certificates/CodeSlayerUnstop.png",
    verified: true,
    featured: true
  },
  {
    id: 4,
    title: "Labmentrix Training Certification",
    issuer: "Labmentrix",
    date: "2024",
    credentialId: "LAB-2024-004",
    description: "Professional training certification in modern web development technologies and practical implementation.",
    skills: [
      CertificateSkills.WEB_DEVELOPMENT,
      CertificateSkills.MODERN_FRAMEWORKS,
      CertificateSkills.PROJECT_IMPLEMENTATION,
      CertificateSkills.BEST_PRACTICES,
      CertificateSkills.INDUSTRY_STANDARDS
    ],
    credentialUrl: "#", // TODO: Add actual credential URL
    image: "/images/certificates/Labmentrix.png",
    verified: true,
    featured: false
  },
  {
    id: 5,
    title: "OutSkill Certification",
    issuer: "OutSkill Platform",
    date: "2024",
    credentialId: "OS-2024-005",
    description: "Certification recognizing proficiency in technical skills and professional development through OutSkill platform.",
    skills: [
      CertificateSkills.PROGRAMMING,
      CertificateSkills.PROFESSIONAL_DEVELOPMENT,
      CertificateSkills.CAREER_GROWTH,
      CertificateSkills.SKILL_ASSESSMENT,
      CertificateSkills.INDUSTRY_KNOWLEDGE
    ],
    credentialUrl: "#", // TODO: Add actual credential URL
    image: "/images/certificates/OutSkill.png",
    verified: true,
    featured: false
  },
  {
    id: 6,
    title: "New Delhi Municipal Corporation Certificate",
    issuer: "New Delhi Municipal Corporation",
    date: "2023",
    credentialId: "NDMC-2023-006",
    description: "Official certificate from New Delhi Municipal Corporation for completion of specialized training program.",
    skills: [
      CertificateSkills.ADMINISTRATIVE_SKILLS,
      CertificateSkills.PUBLIC_SERVICE,
      CertificateSkills.MUNICIPAL_OPERATIONS,
      CertificateSkills.CIVIC_KNOWLEDGE
    ],
    credentialUrl: "#", // TODO: Add actual credential URL
    image: "/images/certificates/New delhi mucipal certificate.jpg",
    verified: true,
    featured: false
  }
];

// Helper functions for easy data access
export const getFeaturedCertificates = (): Certificate[] => {
  return certificates.filter(cert => cert.featured);
};

export const getCertificatesByCategory = (category: string): Certificate[] => {
  return certificates.filter(cert => 
    cert.skills.some(skill => skill.toLowerCase().includes(category.toLowerCase()))
  );
};

export const getVerifiedCertificates = (): Certificate[] => {
  return certificates.filter(cert => cert.verified);
};

export const getAllSkills = (): string[] => {
  const allSkills = certificates.flatMap(cert => cert.skills);
  return [...new Set(allSkills)]; // Remove duplicates
};

export const getCertificateStats = () => {
  return {
    total: certificates.length,
    verified: getVerifiedCertificates().length,
    featured: getFeaturedCertificates().length,
    uniqueSkills: getAllSkills().length,
    latestYear: Math.max(...certificates.map(cert => parseInt(cert.date)))
  };
};

// Template for adding new certificates - copy and modify this
export const CERTIFICATE_TEMPLATE: Omit<Certificate, 'id'> = {
  title: "Certificate Title",
  issuer: "Issuing Organization",
  date: "2024",
  credentialId: "CREDENTIAL-ID-HERE",
  description: "Description of what this certificate covers and validates.",
  skills: [
    // Add relevant skills from CertificateSkills enum
    CertificateSkills.PROGRAMMING,
    // Add more skills...
  ],
  credentialUrl: "#", // Add actual URL
  image: "/images/certificates/certificate-image.jpg", // Add image path
  verified: true,
  featured: false // Set to true for featured certificates
};

/*
HOW TO ADD NEW CERTIFICATES:

1. Copy the CERTIFICATE_TEMPLATE above
2. Update all fields with your certificate information
3. Add a unique ID (increment from the last certificate)
4. Add the certificate to the certificates array
5. Make sure the image exists in /public/images/certificates/
6. Update credentialUrl with the actual verification link

Example:
{
  id: 7, // Next available ID
  title: "React Developer Certification",
  issuer: "Meta",
  date: "2024",
  credentialId: "META-REACT-2024",
  description: "Advanced React certification covering hooks, context, and performance optimization.",
  skills: [
    CertificateSkills.REACT,
    CertificateSkills.JAVASCRIPT,
    CertificateSkills.WEB_DEVELOPMENT
  ],
  credentialUrl: "https://coursera.org/verify/your-certificate",
  image: "/images/certificates/meta-react.png",
  verified: true,
  featured: true
}
*/