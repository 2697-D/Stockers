'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, LogIn, User, LogOut } from 'lucide-react';
import { useTheme } from './theme-provider';
import { useAuth } from './auth-provider';
import LoginModal from './login-modal';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Front page' },
    { id: 'what-we-do', label: 'What we do' },
    { id: 'how-you-learn', label: 'How will you learn' },
    { id: 'legends', label: 'Legends' },
    { id: 'stalk-us', label: 'Stalk us' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 glass rounded-b-3xl mx-4 mt-4"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <img
                src="/stockers.svg"
                alt="Stockers"
                className="h-8 w-auto neon-text"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-[var(--neon-green)] transition-colors duration-300 neon-text"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full glass hover:neon-glow transition-all duration-300"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-[var(--neon-green)]" />
                ) : (
                  <Moon className="h-5 w-5 text-[var(--neon-green)]" />
                )}
              </motion.button>

              {/* User Menu */}
              {user ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-full glass neon-border">
                    <User className="h-4 w-4 text-[var(--neon-green)]" />
                    <span className="text-sm font-medium neon-text">
                      {user.name || user.email.split('@')[0]}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={signOut}
                    className="p-2 rounded-full glass hover:neon-glow transition-all duration-300"
                  >
                    <LogOut className="h-4 w-4 text-[var(--neon-green)]" />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLoginOpen(true)}
                  className="px-6 py-2 rounded-full glass neon-border hover:neon-glow transition-all duration-300 flex items-center space-x-2"
                >
                  <LogIn className="h-4 w-4" />
                  <span className="text-sm font-medium">Login</span>
                </motion.button>
              )}

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full glass hover:neon-glow transition-all duration-300"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className={`h-0.5 bg-[var(--neon-green)] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <div className={`h-0.5 bg-[var(--neon-green)] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <div className={`h-0.5 bg-[var(--neon-green)] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium hover:text-[var(--neon-green)] transition-colors duration-300 neon-text"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;
