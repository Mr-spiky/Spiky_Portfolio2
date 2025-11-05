"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Coffee, Code2, Heart, Sparkles } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 dark:opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 dark:opacity-10"></div>
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
            <Heart className="w-6 h-6 text-purple-600" />
            <span className="text-lg text-purple-600 font-semibold">Get to Know Me</span>
            <Heart className="w-6 h-6 text-purple-600" />
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Personal Info */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              className="relative w-64 h-64 mx-auto lg:mx-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 className="w-6 h-6 text-purple-600" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Coffee className="w-6 h-6 text-pink-600" />
              </motion.div>
            </motion.div>

            {/* Personal Details */}
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                whileHover={{ x: 10 }}
              >
                <MapPin className="w-5 h-5 text-purple-600" />
                <span>Based in India</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                whileHover={{ x: 10 }}
              >
                <Calendar className="w-5 h-5 text-purple-600" />
                <span>Available for Freelance</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                whileHover={{ x: 10 }}
              >
                <Coffee className="w-5 h-5 text-purple-600" />
                <span>Fueled by Coffee & Code</span>
              </motion.div>
            </div>

            {/* Download Resume Button */}
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>
          </motion.div>

          {/* Right Side - Description & Experience */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Description */}
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                Hi there! I'm <span className="font-semibold text-purple-600">Shivam Kumar</span>, 
                a passionate Full Stack Developer with a love for creating exceptional digital experiences. 
                I specialize in modern web technologies and have a knack for turning complex problems 
                into simple, elegant solutions.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or enjoying a good cup of coffee while brainstorming the next big idea. 
                I believe in writing clean, maintainable code and creating user experiences that delight.
              </motion.p>
            </div>

            {/* What I Do */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: "🎨", title: "Frontend Development", desc: "React, Next.js, TypeScript" },
                  { icon: "⚙️", title: "Backend Development", desc: "Node.js, Express, APIs" },
                  { icon: "📱", title: "Responsive Design", desc: "Mobile-first approach" },
                  { icon: "🚀", title: "Performance Optimization", desc: "Fast, efficient applications" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          className="mt-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Here's a glimpse of my professional experience</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                      <p className="text-purple-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                        {achievement}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}