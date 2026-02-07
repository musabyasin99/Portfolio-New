import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Section.css';

const Introduction = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/musabyasin', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/musab-yasin', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:musab.yasin@example.com', label: 'Email' },
  ];

  return (
    <div className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">Hello, I'm</h1>
        <h2 className="section-subtitle">Musab Yasin</h2>
        <p className="section-description">
          Full-Stack Developer | C# & MERN Stack Specialist | Building Scalable Web Applications
        </p>
      </motion.div>

      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="intro-card">
          <h3>About Me</h3>
          <p>
            I'm Musab Yasin, a passionate Full-Stack Developer with 3+ years of experience building scalable web applications using modern technologies.
            I specialize in C#/.NET for backend development and the MERN stack (MongoDB, Express.js, React, Node.js) for full-stack solutions.
          </p>
          <p>
            My expertise includes developing high-performance applications, architecting microservices, and creating intuitive user interfaces.
            I'm committed to writing clean, maintainable code and staying current with industry best practices and emerging technologies.
          </p>
          <p>
            I thrive in collaborative environments and am passionate about solving complex technical challenges. When not coding, 
            I enjoy exploring new technologies and contributing to the developer community.
          </p>
        </div>

        <div className="social-links">
          <h3>Connect With Me</h3>
          <div className="social-icons">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;
