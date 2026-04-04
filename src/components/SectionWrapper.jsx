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
