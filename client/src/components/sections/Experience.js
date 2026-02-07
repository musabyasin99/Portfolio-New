import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Section.css';

const experiences = [
  {
    title: 'Software Development Engineer II',
    company: 'BQE Software Inc.',
    location: 'Srinagar, India',
    period: 'May 2025 - Present',
    description: [
      'Specialized in backend technologies using C# and .NET, focusing on SQL Server updates, optimizations, and maintenance',
      'Designed and enhanced RESTful APIs to ensure reliable data flow across distributed systems',
      'Supported core business processes by developing efficient, secure, and scalable backend services',
      'Collaborated with product teams to deliver new features and improve existing functionality',
    ],
  },
  {
    title: 'Software Development Engineer I',
    company: 'BQE Software Inc.',
    location: 'Srinagar, India',
    period: 'July 2023 - May 2025',
    description: [
      'Developed backend services and APIs using .NET Framework/Core and SQL Server',
      'Enhanced web applications built with Razor Pages, improving user experience and maintainability',
      'Contributed to third-party system integrations and API-based communication workflows',
      'Participated in requirement analysis, code reviews, and deployment cycles',
      'Recognized for multiple high-impact contributions and teamwork excellence',
      'Awarded Employee of the Month three times for exceptional performance and collaboration',
    ],
  },
];

const Experience = () => {
  return (
    <div className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">Experience</h1>
        <p className="section-description">
          My professional journey and the roles I've held
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <h4 className="experience-company">{exp.company}</h4>
              <div className="experience-meta">
                <span className="experience-period">
                  <FaCalendarAlt /> {exp.period}
                </span>
                <span className="experience-location">
                  <FaMapMarkerAlt /> {exp.location}
                </span>
              </div>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
