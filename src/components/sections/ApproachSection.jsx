import React from 'react';

const ApproachSection = ({ sectionData }) => {
  return (
    <>
      {/* DEMONSTRATION: Separate Custom Capsule tracking to '02' */}
      <div 
        id={`section-${sectionData.id}-part1`} 
        className="section-capsule" 
        style={{ 
          border: `1px solid ${sectionData.color}`,
          backgroundColor: 'transparent', 
          minHeight: '5vh', /* Smaller height to prove it's a distinct box */
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          color: sectionData.color
        }}
      >
        <h2 style={{ padding: '5px 5px 0 10px', fontSize: '1rem', letterSpacing: '2px', fontWeight: 'bold' }}>Let's Dive in and Learn ABOUT ME &nbsp; &hearts;</h2>
      </div>

      {/* ORIGINAL: Primary Approach Capsule */}
      <div id={`section-${sectionData.id}-part2`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
        <div className="section-motion-wrapper">
        <div className="section-content section-approach">
          <h1 className="section-number">02</h1>
          <h2 className="section-title">R&D Focus</h2>
          <p className="section-subtitle">INVESTIGATING PARITY, STRUCTURING DATA, AND MANAGING SYSTEMS.</p>
          
          <div className="content-grid">
            <div className="content-item">
              <h3>AI ETHICS</h3>
              <p>Investigating demographic parity and disparate impact in classification algorithms to ensure fairness and bias-mitigation in tomorrow's AI.</p>
            </div>
            <div className="content-item">
              <h3>DATA ENGINEERING</h3>
              <p>Expert in handling high-dimensional data using advanced techniques like SMOTE, PCA, and GridSearchCV for optimal model performance.</p>
            </div>
            <div className="content-item">
              <h3>OPERATING SYSTEMS</h3>
              <p>Deep understanding of Schedulers, Banker's Algorithm, and Memory Management, paired with kernel optimization and system-level performance tuning.</p>
            </div>
          </div>

          <div style={{ marginTop: '80px' }}>
            <h3 className="contact-label">SPECIALIZATIONS</h3>
            <div className="locations-list">
              <span className="location-tag">MACHINE LEARNING</span>
              <span className="location-tag">SYSTEM ARCHITECTURE</span>
              <span className="location-tag">FULL-STACK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ApproachSection;
