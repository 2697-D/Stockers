'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveChart = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Generate sample stock data
  const generateData = () => {
    const data = [];
    let value = 100;
    for (let i = 0; i < 30; i++) {
      value += (Math.random() - 0.5) * 10;
      data.push({
        x: i,
        y: Math.max(50, Math.min(150, value)),
      });
    }
    return data;
  };

  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const maxY = Math.max(...data.map(d => d.y));
  const minY = Math.min(...data.map(d => d.y));
  const rangeY = maxY - minY;

  const getPathData = () => {
    return data
      .map((point, index) => {
        const x = (index / (data.length - 1)) * 100;
        const y = 100 - ((point.y - minY) / rangeY) * 80;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  return (
    <motion.div
      className="relative w-full h-64 glass rounded-2xl p-6"
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
    >
      <div className="relative w-full h-full">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 0 10px var(--neon-green))' }}
        >
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="rgba(0, 239, 0, 0.2)"
              strokeWidth="0.5"
            />
          ))}
          {[0, 25, 50, 75, 100].map((x) => (
            <line
              key={x}
              x1={x}
              y1="0"
              x2={x}
              y2="100"
              stroke="rgba(0, 239, 0, 0.2)"
              strokeWidth="0.5"
            />
          ))}

          {/* Chart line */}
          <motion.path
            d={getPathData()}
            fill="none"
            stroke="var(--neon-green)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Data points */}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - ((point.y - minY) / rangeY) * 80;
            const isHovered = hoveredPoint === index;
            
            return (
              <motion.circle
                key={index}
                cx={x}
                cy={y}
                r={isHovered ? 4 : 2}
                fill="var(--neon-green)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.5 }}
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
                style={{
                  filter: isHovered ? 'drop-shadow(0 0 8px var(--neon-green))' : 'none',
                }}
              />
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredPoint !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute glass rounded-lg p-3 pointer-events-none"
            style={{
              left: `${(hoveredPoint / (data.length - 1)) * 100}%`,
              top: '10px',
              transform: 'translateX(-50%)',
            }}
          >
            <div className="text-sm neon-text">
              <div>Day {hoveredPoint + 1}</div>
              <div>Value: ${data[hoveredPoint].y.toFixed(2)}</div>
            </div>
          </motion.div>
        )}

        {/* Zoom indicator */}
        <motion.div
          className="absolute top-2 right-2 text-xs neon-text"
          animate={{ opacity: isZoomed ? 1 : 0.5 }}
        >
          {isZoomed ? 'Zoomed' : 'Hover to zoom'}
        </motion.div>
      </div>
    </motion.div>
  );
};

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Text */}
          <div className="space-y-6">
            <motion.h2
              className="text-4xl md:text-5xl font-bold neon-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What We Do
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We teach the stock market through video lectures, interactive quizzes, 
              and engaging games. Our comprehensive approach makes learning about 
              investments accessible and fun for everyone.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full neon-glow" />
                <span className="text-gray-300">Video lectures from industry experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full neon-glow" />
                <span className="text-gray-300">Interactive quizzes and assessments</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full neon-glow" />
                <span className="text-gray-300">Gamified learning experiences</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full neon-glow" />
                <span className="text-gray-300">Real-time market simulations</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Interactive Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <InteractiveChart />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
