import React from 'react';

const ApproachSection = ({ sectionData }) => {
  return (
    <>
      <div 
        id={`section-${sectionData.id}-part1`} 
        className="section-capsule" 
        style={{ 
          border: `1px solid ${sectionData.color}`,
          backgroundColor: 'transparent', 
          minHeight: '5vh',
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          color: sectionData.color
        }}
      >
        <h2 style={{ padding: '5px 5px 0 10px', fontSize: '1rem', letterSpacing: '2px', fontWeight: 'bold' }}>Let's Level Up &nbsp; &hearts;</h2>
      </div>

      <div id={`section-${sectionData.id}-part2`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
        <div className="section-motion-wrapper">
        <div className="section-content section-approach">
          <h1 className="section-number">02</h1>
          <h2 className="section-title">Intermediate Level</h2>
          <p className="section-subtitle">SECTION 2: FOR STUDENTS OF CLASSES 9–12</p>
          
          <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '60px' }}>
            Students in this group can start learning real programming languages and development tools.
          </p>

          <div className="content-grid">
            <div className="content-item">
              <h3>1. Python Official Website</h3>
              <p><a href="https://www.python.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://www.python.org</a><br/>Download Python, Official tutorials, Documentation and beginner guides.</p>
            </div>
            <div className="content-item">
              <h3>2. Python Official Documentation</h3>
              <p><a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://docs.python.org/3/tutorial/</a><br/>Step-by-step Python tutorial created by Python developers.</p>
            </div>
            <div className="content-item">
              <h3>3. Linux Journey</h3>
              <p><a href="https://linuxjourney.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://linuxjourney.com</a><br/>Learn Linux from basics. Terminal commands and system concepts.</p>
            </div>
            <div className="content-item">
              <h3>4. Ubuntu Official Documentation</h3>
              <p><a href="https://ubuntu.com/tutorials" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://ubuntu.com/tutorials</a><br/>Learn Linux using Ubuntu. Installation and usage guides.</p>
            </div>
            <div className="content-item">
              <h3>5. GitHub Learning Lab</h3>
              <p><a href="https://skills.github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://skills.github.com</a><br/>Learn Git and version control. Real-world coding workflow.</p>
            </div>
            <div className="content-item">
              <h3>6. W3C Web Development Learning</h3>
              <p><a href="https://www.w3.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://www.w3.org</a><br/>Official standards for web development. HTML, CSS, and web technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ApproachSection;
