'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Trophy, BookOpen } from 'lucide-react';

const LearningCard = ({ 
  title, 
  description, 
  modules, 
  icon: Icon, 
  delay = 0 
}: {
  title: string;
  description: string;
  modules: string[];
  icon: React.ComponentType<any>;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      className="glass rounded-3xl p-8 h-full flex flex-col justify-between neon-border hover:neon-glow transition-all duration-500"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-full glass neon-glow"
          >
            <Icon className="h-8 w-8 text-[var(--neon-green)]" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold neon-text">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold neon-text">Modules Include:</h4>
          <ul className="space-y-2">
            {modules.map((module, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: delay + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full neon-glow" />
                <span className="text-gray-300">{module}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Start Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-8 py-4 px-6 rounded-2xl glass neon-border hover:neon-glow transition-all duration-300 flex items-center justify-center space-x-2 group"
      >
        <Play className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        <span className="font-semibold neon-text">Start Learning</span>
      </motion.button>
    </motion.div>
  );
};

const HowYouLearnSection = () => {
  const beginnerModules = [
    'Stock Market Basics',
    'Understanding Financial Statements',
    'Introduction to Trading',
    'Risk Management Fundamentals',
    'Building Your First Portfolio'
  ];

  const intermediateModules = [
    'Advanced Technical Analysis',
    'Options Trading Strategies',
    'Sector Analysis & Rotation',
    'Portfolio Optimization',
    'Market Psychology & Sentiment'
  ];

  return (
    <section id="how-you-learn" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">
            How Will You Learn
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose your learning path and start your journey to becoming a successful investor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <LearningCard
            title="Beginner"
            description="Perfect for those new to investing"
            modules={beginnerModules}
            icon={BookOpen}
            delay={0.2}
          />
          <LearningCard
            title="Intermediate"
            description="For those ready to take the next step"
            modules={intermediateModules}
            icon={Trophy}
            delay={0.4}
          />
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full glass neon-glow mb-4"
                >
                  <Play className="h-8 w-8 text-[var(--neon-green)]" />
                </motion.div>
                <h3 className="text-xl font-semibold neon-text mb-2">Video Lectures</h3>
                <p className="text-gray-300">Learn from industry experts with high-quality video content</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full glass neon-glow mb-4"
                >
                  <Star className="h-8 w-8 text-[var(--neon-green)]" />
                </motion.div>
                <h3 className="text-xl font-semibold neon-text mb-2">Interactive Quizzes</h3>
                <p className="text-gray-300">Test your knowledge with engaging quizzes and assessments</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full glass neon-glow mb-4"
                >
                  <Trophy className="h-8 w-8 text-[var(--neon-green)]" />
                </motion.div>
                <h3 className="text-xl font-semibold neon-text mb-2">Gamification</h3>
                <p className="text-gray-300">Earn points, badges, and compete with other learners</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowYouLearnSection;
