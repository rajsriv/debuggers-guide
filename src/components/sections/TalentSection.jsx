import React from 'react';

const TalentSection = ({ sectionData }) => {
  return (
    <div id={`section-${sectionData.id}`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
      <div className="section-motion-wrapper">
        <div className="section-content section-talent">
          <h1 className="section-number">04</h1>
          <h2 className="section-title">Installation Guides</h2>
          <p className="section-subtitle">SECTION 4: OFFICIAL INSTALLATION DIRECTORY</p>
          
          <div className="talent-content" style={{ marginTop: '100px' }}>
            <div className="talent-stat" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '30px', marginBottom: '30px' }}>
              <span className="stat-number" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Python Installation</span>
              <p className="stat-label" style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://www.python.org/downloads/</a>
              </p>
            </div>
            <div className="talent-stat" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '30px', marginBottom: '30px' }}>
              <span className="stat-number" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>VS Code (Microsoft Editor)</span>
              <p className="stat-label" style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://code.visualstudio.com</a>
              </p>
            </div>
            <div className="talent-stat" style={{ paddingBottom: '30px' }}>
              <span className="stat-number" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Git Installation</span>
              <p className="stat-label" style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://git-scm.com/downloads</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSection;
