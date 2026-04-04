import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Sidebar.css';

const Sidebar = ({ sections, activeSection, setActiveSection, isMobile, scrollProgress }) => {
  return (
    <nav className={`sidebar ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="sidebar-inner custom-scrollbar">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          
          return (
            <motion.button
              key={section.id}
              layout
              className={`sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
              style={{ 
                backgroundColor: isActive ? section.color : 'rgba(255,255,255,0.1)'
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="item-content">
                {section.id === '00' ? (
                  <div className="logo-placeholder">
                    <span className="logo-text animate-logo">RAJ</span>
                  </div>
                ) : (
                  <div className="section-labels">
                    <span className="item-number">{section.id}</span>
                    <AnimatePresence>
                      {(isActive || isMobile) && (
                        <motion.span 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="item-title"
                        >
                          {section.title}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                )}
                
                {isActive && !isMobile && section.id !== '00' && (
                  <motion.div 
                    className="progress-dot"
                    style={{ top: `${Math.max(10, Math.min(90, scrollProgress))}%` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
