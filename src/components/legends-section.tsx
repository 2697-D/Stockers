'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Award, Target } from 'lucide-react';

const LegendCard = ({ 
  name, 
  description, 
  achievement, 
  icon: Icon, 
  delay = 0 
}: {
  name: string;
  description: string;
  achievement: string;
  icon: React.ComponentType<any>;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50,
      }}
      className="glass rounded-3xl p-6 neon-border hover:neon-glow transition-all duration-500 group"
    >
      {/* Profile Image Placeholder */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-20 h-20 rounded-full glass neon-glow mx-auto mb-4 flex items-center justify-center"
      >
        <Icon className="h-10 w-10 text-[var(--neon-green)]" />
      </motion.div>

      {/* Content */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-bold neon-text">{name}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        
        {/* Achievement Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          viewport={{ once: true }}
          className="inline-block glass rounded-full px-4 py-2"
        >
          <span className="text-sm font-semibold neon-text">{achievement}</span>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--neon-green)] rounded-full opacity-30"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const LegendsSection = () => {
  const legends = [
    {
      name: "Sarah Chen",
      description: "Portfolio Manager at Goldman Sachs",
      achievement: "300% Portfolio Growth",
      icon: TrendingUp,
    },
    {
      name: "Marcus Johnson",
      description: "Day Trader & Educator",
      achievement: "$2M+ Trading Profits",
      icon: DollarSign,
    },
    {
      name: "Elena Rodriguez",
      description: "Quantitative Analyst",
      achievement: "Top 1% Returns",
      icon: Award,
    },
    {
      name: "David Kim",
      description: "Investment Strategist",
      achievement: "15 Years Experience",
      icon: Target,
    },
  ];

  return (
    <section id="legends" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">
            Legends
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Learn from the best in the industry. Our instructors are successful investors, 
            traders, and financial experts who have achieved remarkable results.
          </p>
        </motion.div>

        {/* Legends Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {legends.map((legend, index) => (
            <LegendCard
              key={legend.name}
              name={legend.name}
              description={legend.description}
              achievement={legend.achievement}
              icon={legend.icon}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass rounded-3xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold neon-text text-center mb-8">
              Our Impact
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold neon-text">10K+</div>
                <div className="text-gray-300">Students Taught</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold neon-text">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold neon-text">$50M+</div>
                <div className="text-gray-300">Profits Generated</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold neon-text">4.9★</div>
                <div className="text-gray-300">Average Rating</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegendsSection;
