import React from 'react';

const WorkSection = ({ sectionData }) => {
  return (
    <div id={`section-${sectionData.id}`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
      <div className="section-motion-wrapper">
        <div className="section-content section-work">
          <h1 className="section-number">03</h1>
          <h2 className="section-title">Practice Platforms</h2>
          <p className="section-subtitle">SECTION 3: FREE ONLINE CODING PRACTICE PLATFORMS</p>

          <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '60px' }}>
            These help students practice programming skills.
          </p>

          <div className="content-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="project-card">
              <div className="category">BEGINNER TO ADVANCED</div>
              <h3>1. HackerRank</h3>
              <p style={{ marginTop: '15px', opacity: 0.8 }}>
                <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://www.hackerrank.com</a><br/><br/>
                Practice coding problems across different difficulty levels.
              </p>
            </div>
            <div className="project-card">
              <div className="category">ADVANCED STUDENTS</div>
              <h3>2. LeetCode</h3>
              <p style={{ marginTop: '15px', opacity: 0.8 }}>
                <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://leetcode.com</a><br/><br/>
                Algorithm practice and interview-level problems.
              </p>
            </div>
            <div className="project-card">
              <div className="category">LEARNING & PRACTICE</div>
              <h3>3. GeeksforGeeks</h3>
              <p style={{ marginTop: '15px', opacity: 0.8 }}>
                <a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://www.geeksforgeeks.org</a><br/><br/>
                Extensive tutorials and a dedicated coding practice portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
