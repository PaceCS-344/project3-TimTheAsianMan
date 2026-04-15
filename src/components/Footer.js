import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" style={{ padding: '30px 20px', textAlign: 'center', backgroundColor: '#282c34', color: 'white', marginTop: '40px' }}>
      <h2>Let's Connect</h2>
      <p>I am always open to discussing new opportunities in software engineering and cybersecurity.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '15px', fontSize: '1.2rem' }}>
        {/* Replace these href values with your actual links */}
        <a href="mailto:tf28801p@pace.edu" style={{ color: '#61dafb', textDecoration: 'none' }}>
          Email
        </a>
        <a href="https://www.linkedin.com/in/timothy-fan-953422387/" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb', textDecoration: 'none' }}>
          LinkedIn
        </a>
        <a href="https://github.com/TimTheAsianMan" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb', textDecoration: 'none' }}>
          GitHub
        </a>
      </div>
      
      <p style={{ marginTop: '30px', fontSize: '0.8rem', color: '#aaa' }}>
        &copy; {new Date().getFullYear()} My Portfolio. Built with React.
      </p>
    </footer>
  );
};

export default Footer;