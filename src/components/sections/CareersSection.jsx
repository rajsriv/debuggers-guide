import React from 'react';

const CareersSection = ({ sectionData }) => {
  return (
    <div id={`section-${sectionData.id}`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
      <div className="section-motion-wrapper">
        <div className="section-content section-careers">
          <h1 className="section-number">05</h1>
          <h2 className="section-title">Learning Path</h2>
          <p className="section-subtitle">SECTION 5: RECOMMENDED ORDER FOR STUDENTS</p>
          
          <div className="roles-list" style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
            <div className="role-item">
              <h3 style={{ fontSize: '2rem', borderBottom: '2px solid', paddingBottom: '10px', marginBottom: '30px' }}>Classes 6–8</h3>
              <ol style={{ fontSize: '1.5rem', lineHeight: '2', paddingLeft: '40px' }}>
                <li>Start with Scratch</li>
                <li>Move to Code.org</li>
                <li>Try Blockly Games</li>
                <li>Learn basic Python concepts</li>
              </ol>
            </div>
            
            <div className="role-item">
              <h3 style={{ fontSize: '2rem', borderBottom: '2px solid', paddingBottom: '10px', marginBottom: '30px' }}>Classes 9–12</h3>
              <ol style={{ fontSize: '1.5rem', lineHeight: '2', paddingLeft: '40px' }}>
                <li>Install Python</li>
                <li>Learn Python basics</li>
                <li>Learn Linux commands</li>
                <li>Learn Git and GitHub</li>
                <li>Start web development (HTML/CSS)</li>
                <li>Practice coding problems</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersSection;
