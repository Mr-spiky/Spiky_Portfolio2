"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle, CheckCircle, Sparkles, Download, AlertCircle } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/utils";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
        throw new Error("Please fill in all required fields");
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Shivam Kumar", // Your name
        reply_to: formData.email,
      };

      // Send email using EmailJS
      // You'll need to replace these with your actual EmailJS credentials
      // For now, we'll use a fallback method
      try {
        const result = await emailjs.send(
          'service_your_id', // Replace with your EmailJS service ID
          'template_your_id', // Replace with your EmailJS template ID
          templateParams,
          'your_public_key' // Replace with your EmailJS public key
        );
        console.log('Email sent successfully:', result);
      } catch (emailError) {
        console.log('EmailJS not configured, using fallback method');
        // Fallback: Open default email client
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
          `Hi Shivam,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your portfolio contact form.`
        );
        const mailtoLink = `mailto:shivamkr1710@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
      }
      
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 8 seconds
      setTimeout(() => setSubmitted(false), 8000);
      
    } catch (error: any) {
      console.error('Error sending email:', error);
      setError(error.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  type ContactInfo = {
    icon: any;
    title: string;
    content: string;
    href: string;
    color: string;
    download?: string;
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Email",
      content: "shivamkr1710@gmail.com",
      href: "mailto:shivamkr1710@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 XXX-XXX-XXXX",
      href: "tel:+91XXXXXXXXXX",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "India",
      href: "#",
      color: "text-blue-500"
    },
    {
      icon: Download,
      title: "Resume",
      content: "Download CV",
      href: "/resume.pdf",
      color: "text-purple-500",
      download: "Shivam_Kumar_Resume.pdf"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/Mr-spiky",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/shivam-kumar",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/mrspiky",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 dark:opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 dark:opacity-10"></div>
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
            <MessageCircle className="w-6 h-6 text-purple-600" />
            <span className="text-lg text-purple-600 font-semibold">Let's Work Together</span>
            <MessageCircle className="w-6 h-6 text-purple-600" />
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Get In <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send Message</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and I'll get back to you within 24 hours! ✨
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                💡 <strong>Note:</strong> If EmailJS is not configured, clicking send will open your default email client.
              </p>
            </div>

            {/* Success Message */}
            {submitted && (
              <motion.div
                className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-500 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-700 dark:text-green-300">
                  Message sent successfully! I'll get back to you within 24 hours. 🎉
                </span>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-700 dark:text-red-300">{error}</span>
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500"
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 resize-none hover:border-purple-400 dark:hover:border-purple-500"
                  placeholder="Tell me about your project, ask a question, or just say hi! I'd love to hear from you. 🚀"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`group relative w-full px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 overflow-hidden ${
                  isSubmitting || submitted
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/25'
                }`}
                variants={fadeInUp}
                whileHover={!isSubmitting && !submitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !submitted ? { scale: 0.98 } : {}}
              >
                {/* Animated background */}
                {!isSubmitting && !submitted && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
                
                {/* Content */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending Message...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                      <span>Send Message</span>
                      <Sparkles className="w-4 h-4 ml-1 opacity-75" />
                    </>
                  )}
                </div>
                
                {/* Glow effect */}
                {!isSubmitting && !submitted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  download={info.download || undefined}
                  className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ x: 10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${info.color} group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                  </div>
                  {info.download && (
                    <motion.div
                      className="ml-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="w-5 h-5 text-purple-500" />
                    </motion.div>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun Quote */}
            <motion.div
              className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-200 dark:border-purple-800"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                    "The best way to predict the future is to create it."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">- Let's build something amazing together!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}