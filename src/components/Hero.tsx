"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Code, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import Link from "next/link";

export default function Hero() {
  // Predefined positions to avoid hydration mismatch
  const particlePositions = [
    { left: 10, top: 20 }, { left: 85, top: 15 }, { left: 25, top: 80 }, { left: 70, top: 75 },
    { left: 45, top: 10 }, { left: 90, top: 50 }, { left: 15, top: 60 }, { left: 60, top: 25 },
    { left: 35, top: 90 }, { left: 80, top: 35 }, { left: 5, top: 45 }, { left: 55, top: 85 },
    { left: 95, top: 70 }, { left: 40, top: 5 }, { left: 20, top: 55 }, { left: 75, top: 95 },
    { left: 65, top: 40 }, { left: 30, top: 70 }, { left: 50, top: 30 }, { left: 85, top: 85 }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0" suppressHydrationWarning>
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Greeting */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-lg text-gray-300 font-medium">
              Hello, I'm
            </span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </motion.div>

          {/* Name with Gradient */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
          >
            Shivam Kumar
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            variants={fadeInUp}
            className="text-2xl md:text-4xl font-semibold mb-8 text-gray-200"
          >
            <motion.span
              className="inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #8B5CF6, #06B6D4, #10B981, #8B5CF6)",
                backgroundSize: "200% 100%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Full Stack Developer
            </motion.span>
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Code className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I craft exceptional digital experiences with cutting-edge technologies. 
            From stunning frontends to robust backends, I bring ideas to life with 
            passion, creativity, and clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/projects">
              <motion.div
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            </Link>

            <motion.a
              href="mailto:shivamkr1710@gmail.com"
              className="group px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold text-lg transition-all duration-300 hover:bg-purple-400 hover:text-white hover:shadow-xl hover:shadow-purple-400/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com/Mr-spiky", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shivam-kumar-58b63b32a/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shivamkr1710@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm mb-4">Scroll to explore</span>
            <motion.button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="p-2 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}