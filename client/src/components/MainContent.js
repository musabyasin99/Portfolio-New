import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Introduction from './sections/Introduction';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './MainContent.css';

const sectionComponents = {
  introduction: Introduction,
  experience: Experience,
  skills: Skills,
  projects: Projects,
  contact: Contact,
};

const MainContent = ({ activeSection }) => {
  const ActiveComponent = sectionComponents[activeSection] || Introduction;

  return (
    <main className="main-content">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default MainContent;
