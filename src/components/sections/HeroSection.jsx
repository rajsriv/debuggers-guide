import React from 'react';

const HeroSection = ({ isFirstLoad, sectionData }) => {
  return (
    <div id={`section-${sectionData.id}`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
      <div className="section-motion-wrapper">
        <div className="section-content hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className="hero-logo-container">
            <h1 className={`hero-logo-main ${isFirstLoad ? 'animate-logo-text' : ''}`} style={{ fontSize: '4rem', marginBottom: '2rem' }}>
                <span>B</span>
                <span>H</span>
                <span>U</span>
            </h1>
            <div className="hero-description" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>The Debuggers Coding Club</h2>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', opacity: 0.8 }}>Programming Resource Guide for School Students (Classes 6–12)</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                  This guide is designed for school students to begin their programming journey using official and authentic learning resources. The content is divided into two groups:<br/><br/>
                  • Classes 6–8 (Beginner Level)<br/>
                  • Classes 9–12 (Intermediate Level)<br/><br/>
                  Students can scan the QR code to access this guide and explore the resources.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
