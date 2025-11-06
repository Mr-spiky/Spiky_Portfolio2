import type { Metadata } from "next";
import Certificates from "@/components/Certificates";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Certifications - Shivam Kumar | Professional Web Development Credentials",
  description: "View my professional certifications in web development, React, Next.js, AWS, and modern technologies. Verified credentials from industry leaders.",
  keywords: ["certifications", "credentials", "React certification", "AWS", "web development", "Shivam Kumar"],
  openGraph: {
    title: "Certifications - Shivam Kumar",
    description: "Professional certifications in web development and modern technologies",
    type: "website",
  },
};

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-20">
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}