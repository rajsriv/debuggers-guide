import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SectionWrapper from './components/SectionWrapper';

const sections = [
  { id: '00', title: 'RAJ', color: 'var(--color-00)', logo: true },
  { id: '01', title: 'About', color: 'var(--color-01)' },
  { id: '02', title: 'R&D Focus', color: 'var(--color-02)' },
  { id: '03', title: 'Projects', color: 'var(--color-03)' },
  { id: '04', title: 'Arsenal', color: 'var(--color-04)' },
  { id: '05', title: 'System', color: 'var(--color-05)' },
  { id: '06', title: 'Contact', color: 'var(--color-06)' },
  { id: '07', title: 'Analytics', color: 'var(--color-07)' },
];

function App() {
  const [activeSection, setActiveSection] = useState('00');
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollTime = useRef(0);
  const contentAreaRef = useRef(null);

  // Smooth scroll handler for sidebar clicks
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(`section-${id}`);
    const container = contentAreaRef.current;
    if (element && container) {
       // Scroll the container so the element is nicely at the top
       container.scrollTo({
         top: element.offsetTop - 10, // Slight offset for the padding 
         behavior: 'smooth'
       });
    }
  };

  // Intersection Observer to detect which capsule is currently dominant
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Trigger active state when a section crosses the center of the viewport
        if (entry.isIntersecting) {
          const id = entry.target.id.replace('section-', '');
          setActiveSection(id);
        }
      });
    }, {
      root: contentAreaRef.current,
      rootMargin: "-40% 0px -40% 0px", // 20% detection band in the center of the screen
      threshold: 0 
    });

    const capsules = document.querySelectorAll('.section-capsule');
    capsules.forEach(c => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  // Handle intra-section scroll progress for the white dot
  useEffect(() => {
    const handleScroll = () => {
      const activeEl = document.getElementById(`section-${activeSection}`);
      const container = contentAreaRef.current;
      
      if (activeEl && container) {
        const rect = activeEl.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // Distance the top of the element has scrolled past the top of the container
        const scrolledDistance = containerRect.top - rect.top; 
        const totalScrollable = rect.height - containerRect.height;
        
        let progress = 0;
        if (totalScrollable > 0) {
           progress = (scrolledDistance / totalScrollable) * 100;
        }
        setScrollProgress(Math.max(0, Math.min(100, progress)));
      }
    };

    const container = contentAreaRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    }
  }, [activeSection]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`app-container ${isMobile ? 'mobile' : 'desktop'}`}>
      <Sidebar 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={scrollToSection} 
        isMobile={isMobile}
        scrollProgress={scrollProgress}
      />
      <main className="content-area" ref={contentAreaRef}>
        <SectionWrapper 
          sections={sections}
          isFirstLoad={isFirstLoad}
        />
      </main>
    </div>
  );
}

export default App;
