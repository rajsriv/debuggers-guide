import React from 'react';

const ApproachSection = () => {
  return (
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
  );
};

export default ApproachSection;
