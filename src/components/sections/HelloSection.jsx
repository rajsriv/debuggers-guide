import React from 'react';

const HelloSection = () => {
  return (
    <div className="section-content section-hello">
      <h1 className="section-number">01</h1>
      <h2 className="section-title">The Quick Flex</h2>
      <p className="section-subtitle">
        Building Tomorrow's Technology Today. 
        Full Stack Developer | AI & ML Enthusiast.
      </p>
      
      <div className="mock-scroll-content" style={{ marginTop: '100px', paddingBottom: '200px' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>CURRENT MISSION</h3>
          <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '60px' }}>
            Final Year UG & Teaching Assistant for Web Designing.
          </p>

          <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>AI/ML RESEARCH</h3>
          <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '60px' }}>
            Engineering fairness and bias-mitigation in AI models.
          </p>

          <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>SYSTEM AESTHETICS</h3>
          <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '60px' }}>
            Hardcore Arch Linux user with a custom Hyprland setup.
          </p>

          <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>FOUNDER</h3>
          <p style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>
            The Debuggers Coding Club — fostering a culture of logic and creation.
          </p>
      </div>
    </div>
  );
};

export default HelloSection;
