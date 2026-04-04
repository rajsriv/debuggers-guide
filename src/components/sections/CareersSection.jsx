import React from 'react';

const CareersSection = () => {
  return (
    <div className="section-content section-careers">
      <h1 className="section-number">05</h1>
      <h2 className="section-title">System</h2>
      <p className="section-subtitle">"I USE ARCH, BTW."</p>
      
      <div className="content-item" style={{ marginTop: '60px' }}>
        <p style={{ fontSize: '1.5rem', maxWidth: '800px', marginBottom: '40px', lineHeight: '1.8' }}>
          <strong>Distribution:</strong> Arch Linux<br/>
          <strong>Window Manager:</strong> Hyprland (Wayland)<br/>
          <strong>Shell:</strong> Zsh with custom Caelestia shell configuration<br/>
          <strong>Expertise:</strong> Kernel optimization, custom scripts, and system-level performance tuning.
        </p>
      </div>

      <div style={{ marginTop: '80px' }}>
        <h3 className="contact-label">BEYOND THE TERMINAL</h3>
        <div className="content-grid" style={{ marginTop: '20px' }}>
           <div className="content-item">
             <h3>HINDI POETRY</h3>
             <p>Exploring the intersection of human emotion and societal structures.</p>
           </div>
           <div className="content-item">
             <h3>CHESS</h3>
             <p>Analyzing patterns and hunting for "Brilliant Moves".</p>
           </div>
           <div className="content-item">
             <h3>LITERATURE</h3>
             <p>Deep-diving into works like Tagore’s Chaturanga.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CareersSection;
