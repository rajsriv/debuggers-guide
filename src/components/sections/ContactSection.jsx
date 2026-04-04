import React from 'react';

const ContactSection = ({ sectionData }) => {
  return (
    <div id={`section-${sectionData.id}`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
      <div className="section-motion-wrapper">
        <div className="section-content section-contact">
          <h1 className="section-number">06</h1>
          <h2 className="section-title">Guidelines</h2>
          <p className="section-subtitle">IMPORTANT GUIDELINES FOR STUDENTS</p>
          
          <div className="contact-info" style={{ marginTop: '100px' }}>
            <ul style={{ fontSize: '1.8rem', lineHeight: '2.5', listStyleType: 'square', paddingLeft: '40px' }}>
              <li>Start with small programs</li>
              <li>Practice daily for 20–30 minutes</li>
              <li>Focus on understanding logic</li>
              <li>Build small projects</li>
              <li>Do not memorize, understand concept</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
