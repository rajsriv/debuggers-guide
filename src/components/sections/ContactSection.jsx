import React from 'react';

const ContactSection = ({ sectionData }) => {
  return (
    <div id={`section-${sectionData.id}`} className="section-capsule" style={{ backgroundColor: sectionData.color }}>
      <div className="section-motion-wrapper">
        <div className="section-content section-contact">
          <h1 className="section-number">06</h1>
          <h2 className="section-title">Contact</h2>
          
          <div className="contact-pathways" style={{ marginTop: '60px' }}>
            <div className="contact-pathway">
              <div className="contact-label">LOCATION</div>
              <div className="contact-name" style={{ fontSize: '2rem' }}>VARANASI / PUNE, INDIA</div>
            </div>

            <div className="contact-pathway">
              <div className="contact-label">PHILOSOPHY</div>
              <div style={{ fontSize: '1.5rem', fontStyle: 'italic', maxWidth: '600px', lineHeight: '1.5' }}>
                "Build what matters. Learn deeply. Leave something meaningful behind."
              </div>
            </div>
          </div>

          <div className="contact-details" style={{ marginTop: '80px' }}>
            <h3 className="contact-label">NETWORK</h3>
            <div className="locations-list" style={{ marginTop: '20px' }}>
                <a href="https://www.linkedin.com/in/raj-sriv2005/" target="_blank" rel="noreferrer" className="location-tag" style={{ textDecoration: 'none', color: 'inherit' }}>LINKEDIN</a>
                <a href="https://rajsriv.github.io/Portfolio-design-minimal/" target="_blank" rel="noreferrer" className="location-tag" style={{ textDecoration: 'none', color: 'inherit' }}>PORTFOLIO</a>
                <a href="https://github.com/rajsriv" target="_blank" rel="noreferrer" className="location-tag" style={{ textDecoration: 'none', color: 'inherit' }}>GITHUB</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
