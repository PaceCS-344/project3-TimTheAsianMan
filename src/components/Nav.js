import React from 'react';

// 1. Accept the props we passed down from App.js
const Nav = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      
      {/*Search Bar*/}
      <input 
        type="text" 
        placeholder="Search projects, skills, or tech..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Updates state instantly as you type
        style={{
          padding: '10px 15px',
          width: '300px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          outline: 'none'
        }}
      />

      <ul style={{ 
        listStyleType: 'none', 
        padding: 0, 
        margin: 0,
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px',
        fontSize: '1.2rem'
      }}>
        <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="#skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</a></li>
        <li><a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;