# Portfolio Data Management Guide

This guide explains how to easily manage and update your portfolio data using the structured TypeScript files.

## 📁 File Structure

```
src/data/
├── certificates.ts  # All certificate data and helpers
├── projects.ts     # All project data and helpers
└── portfolio.ts    # Legacy file (being phased out)
```

## 🏆 Certificates Management (`certificates.ts`)

### Adding New Certificates

1. **Copy the template** from the bottom of `certificates.ts`
2. **Update the fields** with your certificate information
3. **Add to the array** with a unique ID

```typescript
// Example: Adding a new certificate
{
  id: 7, // Next available ID
  title: "AWS Cloud Practitioner",
  issuer: "Amazon Web Services",
  date: "2024",
  credentialId: "AWS-CP-2024",
  description: "Cloud fundamentals and AWS services certification.",
  skills: [
    CertificateSkills.CLOUD_COMPUTING,
    CertificateSkills.AWS,
    CertificateSkills.TECHNICAL_SKILLS
  ],
  credentialUrl: "https://aws.amazon.com/verification/your-cert",
  image: "/images/certificates/aws-cert.png",
  verified: true,
  featured: true // Set to true to show in featured section
}
```

### Available Certificate Skills

Use the `CertificateSkills` enum for consistency:
- `PROGRAMMING`
- `WEB_DEVELOPMENT`
- `COMPETITIVE_PROGRAMMING`
- `DATA_STRUCTURES`
- `ALGORITHMS`
- And many more...

### Helper Functions

```typescript
getFeaturedCertificates()     // Get only featured certificates
getCertificatesByCategory()   // Filter by category
getVerifiedCertificates()     // Get verified certificates only
getAllSkills()                // Get unique skills list
getCertificateStats()         // Get statistics
```

## 🚀 Projects Management (`projects.ts`)

### Adding New Projects

1. **Copy the template** from the bottom of `projects.ts`
2. **Update all fields** with your project information
3. **Add to the array** with a unique ID

```typescript
// Example: Adding a new project
{
  id: 10, // Next available ID
  title: "Chat Application",
  description: "Real-time chat app with modern features.",
  tech: [TechStack.REACT, TechStack.NODE_JS, TechStack.MONGODB],
  image: "/images/chat-app.png",
  liveUrl: "https://my-chat-app.com",
  githubUrl: "https://github.com/username/chat-app",
  category: "Fullstack",
  status: "Completed",
  featured: true
}
```

### Available Tech Stack

Use the `TechStack` enum for consistency:
- `REACT`, `NEXT_JS`, `VUE`, `ANGULAR`
- `NODE_JS`, `EXPRESS`, `PYTHON`, `DJANGO`
- `MONGODB`, `POSTGRESQL`, `FIREBASE`
- `TAILWIND_CSS`, `SASS`, `STYLED_COMPONENTS`
- And many more...

### Project Categories

- `"Frontend"` - Frontend-only projects
- `"Fullstack"` - Full-stack applications
- `"AI/ML"` - AI/Machine Learning projects
- `"Web App"` - Web applications
- `"Landing Page"` - Static landing pages
- `"Mobile App"` - Mobile applications
- `"Desktop App"` - Desktop applications

### Project Status

- `"Completed"` - Finished projects
- `"In Progress"` - Currently working on
- `"Planned"` - Future projects
- `"Maintenance"` - Ongoing maintenance

### Helper Functions

```typescript
getFeaturedProjects()         // Get only featured projects
getProjectsByCategory()       // Filter by category
getCompletedProjects()        // Get completed projects
getProjectsByTech()           // Filter by technology
getAllTechnologies()          // Get unique tech list
getProjectStats()             // Get statistics
```

## 📸 Image Management

### Certificate Images
Place certificate images in: `/public/images/certificates/`

### Project Images
Place project images in: `/public/images/`

### Image Naming Convention
- Use descriptive names
- Use hyphens for spaces: `my-project.png`
- Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`

## 🔧 Quick Update Workflow

### For Certificates:
1. Add image to `/public/images/certificates/`
2. Open `src/data/certificates.ts`
3. Copy the `CERTIFICATE_TEMPLATE`
4. Update all fields
5. Add to `certificates` array with new ID
6. Save file

### For Projects:
1. Add image to `/public/images/`
2. Open `src/data/projects.ts`
3. Copy the `PROJECT_TEMPLATE`
4. Update all fields
5. Add to `projects` array with new ID
6. Save file

## ✅ Best Practices

1. **Always use the provided enums** (`CertificateSkills`, `TechStack`) for consistency
2. **Increment IDs properly** - use the next available number
3. **Optimize images** before adding them (recommended: under 500KB)
4. **Use descriptive descriptions** that highlight key features
5. **Add actual URLs** for `credentialUrl`, `liveUrl`, and `githubUrl`
6. **Mark important items as featured** to highlight them
7. **Keep skills relevant** to each certificate/project

## 🎯 TypeScript Benefits

- **Type Safety**: Catch errors before runtime
- **Auto-completion**: Better development experience
- **Consistency**: Enforced data structure
- **Maintainability**: Easy to refactor and update
- **Documentation**: Self-documenting code

## 🔍 Troubleshooting

### Common Issues:

1. **Image not showing**: Check file path and ensure image exists
2. **TypeScript errors**: Ensure you're using the correct types
3. **Missing in UI**: Check if `featured: true` for featured sections

### Getting Help:

- Check TypeScript errors in your editor
- Ensure all required fields are filled
- Verify image paths are correct
- Make sure IDs are unique

---

This structure makes it super easy to maintain your portfolio data while keeping everything organized and type-safe! 🚀