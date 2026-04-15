import React from 'react';

const Nav = () => {
  return (
    <nav style={{ marginTop: '15px' }}>
      <ul style={{ 
        listStyleType: 'none', 
        padding: 0, 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px',
        fontSize: '1.2rem'
      }}>
        <li>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
        </li>
        <li>
          <a href="#skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</a>
        </li>
        <li>
          <a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
        </li>
        <li>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;