import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from 'react-icons/fa';
import './Sidebar.css';

const menuItems = [
  { id: 'introduction', label: 'Introduction', icon: FaUser },
  { id: 'experience', label: 'Experience', icon: FaBriefcase },
  { id: 'skills', label: 'Skills', icon: FaCode },
  { id: 'projects', label: 'Projects', icon: FaFolderOpen },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sidebar-header">
        <h1 className="sidebar-title">Musab Yasin</h1>
        <p className="sidebar-subtitle">Full-Stack Developer | C# & MERN Stack</p>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <p>&copy; 2024 Portfolio</p>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
