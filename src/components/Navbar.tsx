"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Home, User, Briefcase, Mail, Sun, Moon, Award, Sparkles, Zap, Download } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Fix hydration issue by ensuring theme is only used after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Close mobile menu on scroll
    const handleScrollClose = () => {
      if (isOpen && window.scrollY > 100) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScrollClose, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollClose);
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/", icon: Home, type: "route", color: "from-blue-500 to-cyan-500" },
    { name: "About", href: "#about", icon: User, type: "section", color: "from-green-500 to-emerald-500" },
    { name: "Projects", href: "/projects", icon: Briefcase, type: "route", color: "from-purple-500 to-pink-500" },
    { name: "Certificates", href: "/certificates", icon: Award, type: "route", color: "from-orange-500 to-red-500" },
    { name: "Contact", href: "#contact", icon: Mail, type: "section", color: "from-indigo-500 to-purple-500" },
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.type === "section") {
      // Handle section scrolling for home page
      if (pathname === "/") {
        const element = document.getElementById(item.href.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If not on home page, navigate to home first then scroll
        window.location.href = `/${item.href}`;
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Enhanced animated background gradient */}
      <AnimatePresence>
        {scrolled && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
      
      {/* Subtle floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
        {[
          { left: 20, top: 30 },
          { left: 50, top: 50 },
          { left: 80, top: 70 }
        ].map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {/* Multiple rotating rings */}
                <motion.div
                  className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-1 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-30"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                
                {/* Main icon with gradient */}
                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-shadow duration-300">
                  <Code className="w-6 h-6 text-white" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 dark:from-white dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Spiky
                </motion.span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">DEVELOPER</span>
              </div>
            </motion.div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Navigation Links with Creative Hover Effects */}
            <div className="flex items-center space-x-1 bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20 dark:border-gray-700/20">
              {navItems.map((item) => {
                const isActive = item.type === "route" ? pathname === item.href : false;
                return item.type === "route" ? (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className={`relative px-4 py-2 rounded-xl font-medium cursor-pointer transition-all duration-300 group ${
                        isActive 
                          ? "text-white shadow-lg" 
                          : "text-gray-700 dark:text-gray-300 hover:text-white"
                      }`}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Animated background for active/hover state */}
                      <AnimatePresence>
                        {(isActive || hoveredItem === item.name) && (
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl shadow-lg`}
                            layoutId="navbar-pill"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          />
                        )}
                      </AnimatePresence>
                      
                      {/* Icon and text */}
                      <div className="relative z-10 flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm">{item.name}</span>
                      </div>
                      
                      {/* Sparkle effect on hover */}
                      {hoveredItem === item.name && (
                        <motion.div
                          className="absolute -top-1 -right-1 z-20"
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: 180 }}
                          exit={{ scale: 0, rotate: 360 }}
                        >
                          <Sparkles className="w-3 h-3 text-yellow-300" />
                        </motion.div>
                      )}
                    </motion.div>
                  </Link>
                ) : (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`relative px-4 py-2 rounded-xl font-medium cursor-pointer transition-all duration-300 group ${
                      hoveredItem === item.name 
                        ? "text-white" 
                        : "text-gray-700 dark:text-gray-300 hover:text-white"
                    }`}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Animated background for hover state */}
                    <AnimatePresence>
                      {hoveredItem === item.name && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl shadow-lg`}
                          layoutId="navbar-pill"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </AnimatePresence>
                    
                    {/* Icon and text */}
                    <div className="relative z-10 flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    
                    {/* Sparkle effect on hover */}
                    {hoveredItem === item.name && (
                      <motion.div
                        className="absolute -top-1 -right-1 z-20"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 180 }}
                        exit={{ scale: 0, rotate: 360 }}
                      >
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
            
            {/* Enhanced Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-3 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              suppressHydrationWarning
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              {/* Icon with rotation animation */}
              <motion.div
                className="relative z-10"
                animate={{ rotate: mounted && theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                suppressHydrationWarning
              >
                {mounted ? (
                  theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              suppressHydrationWarning
            >
              <motion.div
                animate={{ rotate: mounted && theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.5 }}
                suppressHydrationWarning
              >
                {mounted ? (
                  theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
            
            {/* Animated Hamburger Menu */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              {/* Hamburger Icon with custom animation */}
              <div className="relative z-10 w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="block w-5 h-0.5 bg-current mb-1 origin-center"
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-current mb-1"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-current origin-center"
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20 shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5"></div>
              
              <div className="relative px-6 py-6 space-y-2">
                {navItems.map((item, index) => (
                  item.type === "route" ? (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        className={`flex items-center space-x-4 w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                          pathname === item.href 
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" 
                            : "text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsOpen(false)}
                      >
                        {/* Icon with gradient background */}
                        <div className={`p-2 rounded-lg ${
                          pathname === item.href 
                            ? "bg-white/20" 
                            : "bg-gradient-to-r " + item.color + " bg-opacity-20"
                        }`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        
                        <div className="flex-1">
                          <span className="font-medium">{item.name}</span>
                          {pathname === item.href && (
                            <motion.div
                              className="flex items-center gap-1 mt-1"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-xs text-white/80">Current Page</span>
                            </motion.div>
                          )}
                        </div>
                        
                        {/* Arrow indicator */}
                        <motion.div
                          className="text-current opacity-50"
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.div>
                      </motion.div>
                    </Link>
                  ) : (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavigation(item)}
                      className="flex items-center space-x-4 w-full text-left p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Icon with gradient background */}
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-20`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1">
                        <span className="font-medium">{item.name}</span>
                      </div>
                      
                      {/* Arrow indicator */}
                      <motion.div
                        className="text-current opacity-50"
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.div>
                    </motion.button>
                  )
                ))}
                
                {/* Mobile Menu Footer */}
                <motion.div
                  className="pt-4 mt-4 border-t border-gray-200/20 dark:border-gray-700/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Zap className="w-4 h-4" />
                    <span>Built with Next.js & Framer Motion</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}