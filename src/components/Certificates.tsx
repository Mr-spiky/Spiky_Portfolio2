"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, Download, Star, CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { 
  certificates, 
  getFeaturedCertificates, 
  getCertificateStats,
  type Certificate 
} from "@/data/certificates";

export default function Certificates() {
  const featuredCertificates = getFeaturedCertificates();
  const allCertificates = certificates;
  const stats = getCertificateStats();

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 dark:opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 dark:opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-blue-600" />
            <span className="text-lg text-blue-600 font-semibold">Professional Certifications</span>
            <Award className="w-6 h-6 text-blue-600" />
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            My <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Certifications</span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A showcase of my professional certifications and achievements in web development, 
            cloud computing, and modern technologies.
          </motion.p>
        </motion.div>

        {/* Featured Certifications */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Featured Certifications
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Certificate Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-green-500 overflow-hidden">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Award className="w-16 h-16 text-white opacity-70" />
                    </div>
                  )}
                  
                  {/* Verified Badge */}
                  {cert.verified && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </div>
                  )}

                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-blue-600 font-semibold">{cert.issuer}</span>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
                        +{cert.skills.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </a>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Certifications */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            All Certifications
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm">{cert.issuer}</p>
                  </div>
                  {cert.verified && (
                    <CheckCircle className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
                  )}
                </div>
                
                <div className="flex items-center gap-1 text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{cert.date}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    ID: {cert.credentialId}
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{stats.total}</div>
              <div className="text-blue-100">Total Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{stats.verified}</div>
              <div className="text-blue-100">Verified Credentials</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{stats.uniqueSkills}</div>
              <div className="text-blue-100">Skills Covered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}