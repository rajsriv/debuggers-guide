import React from 'react';

const HelloSection = ({ sectionData }) => {
  return (
    <div id={`section-${sectionData.id}`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
      <div className="section-motion-wrapper">
        <div className="section-content section-hello">
          <h1 className="section-number">01</h1>
          <h2 className="section-title">Beginner Level</h2>
          <p className="section-subtitle">SECTION 1: FOR STUDENTS OF CLASSES 6–8</p>
          
          <div className="mock-scroll-content" style={{ marginTop: '100px', paddingBottom: '100px' }}>
              <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '60px' }}>
                These platforms focus on visual learning, logical thinking, and block-based programming.
              </p>

              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>1. Scratch (Official Website)</h3>
              <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>
                <a href="https://scratch.mit.edu" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://scratch.mit.edu</a><br/>
                Developed by MIT<br/>
                Learn coding using drag-and-drop blocks<br/>
                Create games, animations, and stories
              </p>

              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>2. Code.org (Official Learning Platform)</h3>
              <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>
                <a href="https://code.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://code.org</a><br/>
                Beginner-friendly coding courses<br/>
                Hour of Code activities<br/>
                Game-based learning
              </p>

              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>3. Blockly Games (Official Google Project)</h3>
              <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>
                <a href="https://blockly.games" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://blockly.games</a><br/>
                Learn programming logic through puzzles<br/>
                No installation required
              </p>

              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>4. Khan Academy Computer Programming</h3>
              <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>
                <a href="https://www.khanacademy.org/computing" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://www.khanacademy.org/computing</a><br/>
                Free interactive lessons<br/>
                JavaScript and animation basics
              </p>

              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>5. Python for Kids</h3>
              <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>
                <a href="https://www.python.org/about/gettingstarted/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://www.python.org/about/gettingstarted/</a><br/>
                Official Python Beginner Resources<br/>
                Introduction to Python programming<br/>
                Official beginner guidance
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloSection;
