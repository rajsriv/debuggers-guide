import React from 'react';

const WorkSection = ({ sectionData }) => {
  return (

    

    <div id={`section-${sectionData.id}`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
      <div className="section-motion-wrapper">
        <div className="section-content section-work">
          <h1 className="section-number">03</h1>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">CURRENT PURSUITS REQUIRING CODE & CONCENTRATION.</p>

          <div className="content-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
            <div className="project-card">
              <div className="category">MACHINE LEARNING • 35% ALLOCATION</div>
              <h3>AI BIAS RESEARCH</h3>
            </div>
            <div className="project-card">
              <div className="category">WEB DEVELOPMENT • 28% ALLOCATION</div>
              <h3>FULL-STACK DASHBOARD</h3>
            </div>
            <div className="project-card">
              <div className="category">COMMUNITY FORGE • 22% ALLOCATION</div>
              <h3>THE DEBUGGERS CLUB WEB</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
