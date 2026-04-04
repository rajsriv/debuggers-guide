import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Sections.css';

// Importing sections
import HeroSection from './sections/HeroSection';
import HelloSection from './sections/HelloSection';
import ApproachSection from './sections/ApproachSection';
import WorkSection from './sections/WorkSection';
import TalentSection from './sections/TalentSection';
import CareersSection from './sections/CareersSection';
import ContactSection from './sections/ContactSection';

const SectionWrapper = ({ sections, isFirstLoad }) => {
  const renderSectionContent = (section) => {
    switch (section.id) {
      case '00': return <HeroSection isFirstLoad={isFirstLoad} sectionData={section} />;
      case '01': return <HelloSection sectionData={section} />;
      case '02': return <ApproachSection sectionData={section} />;
      case '03': return <WorkSection sectionData={section} />;
      case '04': return <TalentSection sectionData={section} />;
      case '05': return <CareersSection sectionData={section} />;
      case '06': return <ContactSection sectionData={section} />;
      case '07': return (
        <div id={`section-${section.id}`} className="section-capsule" style={{ backgroundColor: section.color }}>
          <div className="section-motion-wrapper">
            <div className="section-content unusual-index">
              <h1 className="section-number">07</h1>
              <h2 className="section-title">Analytics</h2>
              <p className="section-subtitle">REAL-TIME GITHUB & WAKATIME ACTIVITY.</p>
              
              <div className="content-grid" style={{ marginTop: '80px', gridTemplateColumns: '1fr' }}>
                <div className="content-item" style={{ fontFamily: 'monospace', fontSize: '1.2rem', lineHeight: '1.8' }}>
                  <p style={{ color: '#000', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '1px' }}>&gt; WAKATIME EDITOR STATS</p>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <span style={{ width: '120px' }}>VS Code</span>
                    <span>85%</span>
                    <span style={{ letterSpacing: '2px', opacity: 0.8 }}>████████████████░░░░</span>
                  </div>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <span style={{ width: '120px' }}>Vim</span>
                    <span>10%</span>
                    <span style={{ letterSpacing: '2px', opacity: 0.8 }}>██░░░░░░░░░░░░░░░░░░</span>
                  </div>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <span style={{ width: '120px' }}>Terminal</span>
                    <span>05%</span>
                    <span style={{ letterSpacing: '2px', opacity: 0.8 }}>█░░░░░░░░░░░░░░░░░░░</span>
                  </div>

                  <p style={{ color: '#000', fontWeight: 'bold', marginTop: '60px', marginBottom: '20px', letterSpacing: '1px' }}>&gt; LANGUAGES THIS WEEK</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px', borderBottom: '1px dashed rgba(0,0,0,0.2)', paddingBottom: '8px', marginBottom: '8px' }}>
                    <span>Python</span><span>12 hrs 45 mins</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px', borderBottom: '1px dashed rgba(0,0,0,0.2)', paddingBottom: '8px', marginBottom: '8px' }}>
                    <span>JavaScript</span><span>8 hrs 30 mins</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px', borderBottom: '1px dashed rgba(0,0,0,0.2)', paddingBottom: '8px', marginBottom: '8px' }}>
                    <span>TypeScript</span><span>3 hrs 20 mins</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px', paddingBottom: '8px' }}>
                    <span>SQL</span><span>2 hrs 15 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <div className="section-container">
      {sections.map((section) => (
        <React.Fragment key={section.id}>
          {renderSectionContent(section)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SectionWrapper;
