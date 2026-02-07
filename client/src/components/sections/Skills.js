import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaTools,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiAmazonaws,
  SiCsharp,
  SiDotnet,
} from 'react-icons/si';
import './Section.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: FaCode,
    skills: [
      { name: 'C#', icon: SiCsharp, level: 88 },
      { name: 'JavaScript', icon: SiJavascript, level: 80 },
      { name: 'TypeScript', icon: SiTypescript, level: 75 },
      { name: 'SQL', icon: FaDatabase, level: 85 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: SiDotnet,
    skills: [
      { name: '.NET', icon: SiDotnet, level: 87 },
      { name: '.NET Core', icon: SiDotnet, level: 86 },
      { name: 'Entity Framework', icon: FaCode, level: 84 },
      { name: 'Razor Pages', icon: FaCode, level: 82 },
      { name: 'React', icon: FaReact, level: 78 },
      { name: 'Express', icon: SiExpress, level: 76 },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: [
      { name: 'SQL Server', icon: FaDatabase, level: 88 },
      { name: 'MySQL', icon: SiMysql, level: 80 },
      { name: 'MongoDB', icon: SiMongodb, level: 78 },
      { name: 'GraphQL', icon: FaCode, level: 72 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: FaReact,
    skills: [
      { name: 'REST APIs', icon: FaCode, level: 86 },
      { name: 'HTML', icon: SiHtml5, level: 85 },
      { name: 'CSS', icon: SiCss3, level: 82 },
      { name: 'Node.js', icon: FaNodeJs, level: 76 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: FaTools,
    skills: [
      { name: 'Git/GitHub', icon: SiGit, level: 88 },
      { name: 'Visual Studio', icon: FaCode, level: 89 },
      { name: 'VS Code', icon: FaCode, level: 85 },
      { name: 'Postman', icon: FaCode, level: 84 },
      { name: 'Azure DevOps', icon: SiAmazonaws, level: 80 },
    ],
  },
  {
    title: 'Core Strengths',
    icon: FaCode,
    skills: [
      { name: 'Problem Solving', icon: FaCode, level: 90 },
      { name: 'Critical Thinking', icon: FaCode, level: 88 },
      { name: 'Collaboration', icon: FaCode, level: 87 },
      { name: 'Communication', icon: FaCode, level: 86 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">Skills</h1>
        <p className="section-description">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div
              key={catIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="skill-category-header">
                <CategoryIcon className="category-icon" />
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <SkillIcon className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        />
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
