import React from 'react';

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <h2>Technical Skills</h2>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

        <div className="skill-category">
          <h3>Languages & Databases</h3>
          <ul style={{ fontStyle: 'italic' }}>
            <li>C / C++</li>
            <li>PHP</li>
            <li>SQL (MariaDB)</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Web Technologies</h3>
          <ul style={{ fontStyle: 'italic' }}>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML5 / CSS3</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Security & Tools</h3>
          <ul style={{ fontStyle: 'italic' }}>
            <li>Network Security & Traffic Analysis</li>
            <li>Wireshark & Snort IDS</li>
            <li>Kali Linux & Penetration Testing</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;