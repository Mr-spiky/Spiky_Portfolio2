"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/utils";
import { Sparkles, TrendingUp } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 dark:opacity-10"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 dark:opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <span className="text-lg text-purple-600 font-semibold">Technical Expertise</span>
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills and proficiency levels 
            across different technologies and tools.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={categoryIndex % 2 === 0 ? fadeInLeft : fadeInRight}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {skillCategory.category}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {tech.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: techIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                      
                      {/* Animated shimmer effect */}
                      <motion.div
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category Icon/Decoration */}
              <motion.div
                className="flex justify-center mt-8"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { number: "15+", label: "Projects Completed", icon: "🚀" },
            { number: "3+", label: "Years Experience", icon: "⏱️" },
            { number: "10+", label: "Technologies", icon: "💻" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}