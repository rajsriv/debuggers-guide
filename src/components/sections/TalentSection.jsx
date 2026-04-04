import React from 'react';

const TalentSection = ({ sectionData }) => {
  return (
    <div id={`section-${sectionData.id}`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
      <div className="section-motion-wrapper">
        <div className="section-content section-talent">
          <h1 className="section-number">04</h1>
          <h2 className="section-title">Arsenal</h2>
          <p className="section-subtitle">TOOLS, TECHNOLOGIES, AND FRAMEWORKS.</p>

          <div className="content-grid">
            <div className="content-item">
              <h3>PROGRAMMING</h3>
              <p>Python • C • C++ • JavaScript • TypeScript • SQL • Bash</p>
            </div>
            <div className="content-item">
              <h3>FRONTEND</h3>
              <p>HTML5 • CSS3 • React.js • Tailwind CSS • Responsive Design</p>
            </div>
            <div className="content-item">
              <h3>BACKEND / FRAMEWORKS</h3>
              <p>Django (ORM) • Flask • FastAPI • Node.js</p>
            </div>
            <div className="content-item">
              <h3>AI & MACHINE LEARNING</h3>
              <p>Scikit-learn • Pandas • NumPy • TensorFlow • Keras • Matplotlib</p>
            </div>
            <div className="content-item">
              <h3>DEVOPS & CLOUD</h3>
              <p>AWS (EC2, S3) • Google Cloud Platform • Docker • CI/CD</p>
            </div>
            <div className="content-item">
              <h3>DATABASES & TOOLS</h3>
              <p>MySQL • PostgreSQL • SQLite • MongoDB • Git/GitHub • VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSection;
