import type { Metadata } from "next";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects - Shivam Kumar | Full Stack Developer Portfolio",
  description: "Explore my portfolio of web development projects including React, Next.js, and full-stack applications. See my latest work and technical skills in action.",
  keywords: ["projects", "portfolio", "React", "Next.js", "web development", "Shivam Kumar"],
  openGraph: {
    title: "Projects - Shivam Kumar",
    description: "Explore my portfolio of web development projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}