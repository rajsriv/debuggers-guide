import React from 'react';

const HeroSection = ({ isFirstLoad, sectionData }) => {
  return (
    <div id={`section-${sectionData.id}`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
      <div className="section-motion-wrapper">
        <div className="section-content hero-content">
          <div className="hero-logo-container">
            <h1 className={`hero-logo-main ${isFirstLoad ? 'animate-logo-text' : ''}`}>
                <span>R</span>
                <span>A</span>
                <span>J</span>
            </h1>
            <div className="hero-description">
                <p>MACHINE LEARNING ENGINEER | FULL-STACK ARCHITECT</p>
                <p>ARCH LINUX RICER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
