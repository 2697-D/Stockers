'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const SocialIcon = ({ 
  icon: Icon, 
  href, 
  label, 
  delay = 0 
}: {
  icon: React.ComponentType<any>;
  href: string;
  label: string;
  delay?: number;
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.2,
        rotate: 360,
      }}
      whileTap={{ scale: 0.9 }}
      className="group"
    >
      <div className="w-16 h-16 rounded-full glass neon-border hover:neon-glow transition-all duration-300 flex items-center justify-center">
        <Icon className="h-8 w-8 text-[var(--neon-green)] group-hover:text-white transition-colors duration-300" />
      </div>
      <span className="block text-center mt-2 text-sm text-gray-300 group-hover:text-[var(--neon-green)] transition-colors duration-300">
        {label}
      </span>
    </motion.a>
  );
};

const ContactInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Information */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-2xl font-bold neon-text mb-6">Get in Touch</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <MapPin className="h-5 w-5 text-[var(--neon-green)]" />
            <span className="text-gray-300">
              123 Financial District, New York, NY 10004
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-[var(--neon-green)]" />
            <span className="text-gray-300">+1 (555) 123-4567</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-[var(--neon-green)]" />
            <span className="text-gray-300">hello@stockers.com</span>
          </div>
        </div>
      </div>

      {/* Editable Message */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold neon-text">Leave a Message</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 rounded-lg glass neon-border hover:neon-glow transition-all duration-300 text-sm"
          >
            {isEditing ? 'Save' : 'Edit'}
          </motion.button>
        </div>
        
        {isEditing ? (
          <motion.textarea
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full h-32 p-4 rounded-lg glass border border-[var(--glass-border)] text-gray-300 placeholder-gray-500 focus:outline-none focus:neon-glow resize-none"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-300 min-h-[8rem] p-4 rounded-lg glass border border-[var(--glass-border)]"
          >
            {message || 'Click Edit to leave a message...'}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const StalkUsSection = () => {
  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://twitter.com/stockers',
      label: 'Twitter',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/stockers',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/stockers',
      label: 'Instagram',
    },
  ];

  return (
    <section id="stalk-us" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">
            Stalk Us
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Follow us on social media for daily market insights, tips, and updates. 
            Connect with our community of successful investors.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold neon-text mb-8 text-center">
                Follow Us
              </h3>
              
              <div className="flex justify-center space-x-8">
                {socialLinks.map((social, index) => (
                  <SocialIcon
                    key={social.label}
                    icon={social.icon}
                    href={social.href}
                    label={social.label}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold neon-text mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for weekly market insights and exclusive content.
              </p>
              
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg glass border border-[var(--glass-border)] text-gray-300 placeholder-gray-500 focus:outline-none focus:neon-glow"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-lg glass neon-border hover:neon-glow transition-all duration-300 neon-text font-semibold"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <ContactInfo />
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img
                src="/stockers.svg"
                alt="Stockers"
                className="h-6 w-auto neon-text"
              />
            </div>
            <p className="text-gray-300 mb-4">
              The smarter way to stock. Empowering investors through education and technology.
            </p>
            <div className="text-sm text-gray-400">
              © 2024 Stockers. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StalkUsSection;
