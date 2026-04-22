import React from 'react';

// 1. The Data: Separating content from design makes it easy to update later
const skillsData = [
  {
    category: "Languages & Databases",
    items: ["C / C++", "PHP", "SQL (MariaDB)", "Python"],
    bgColor: "#ffebee", // Soft Pink/Red
    borderColor: "#f44336"
  },
  {
    category: "Web Technologies",
    items: ["React", "Node.js", "HTML5 / CSS3"],
    bgColor: "#e3f2fd", // Soft Blue
    borderColor: "#2196f3"
  },
  {
    category: "Security & Tools",
    items: ["Network Security & Traffic Analysis", "Wireshark & Snort IDS", "Kali Linux & Penetration Testing", "Git & GitHub"],
    bgColor: "#e8f5e9", // Soft Green
    borderColor: "#4caf50"
  }
];

// 2. The Modular Component: A reusable card layout
const SkillCard = ({ title, skills, bgColor, borderColor }) => (
  <div style={{
    backgroundColor: bgColor,
    borderTop: `5px solid ${borderColor}`,
    borderRadius: '10px',
    padding: '20px',
    flex: '1',
    minWidth: '250px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    color: '#333', // Forces text to stay readable even in dark mode
    transition: 'transform 0.2s ease-in-out'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <h3 style={{ borderBottom: `2px solid ${borderColor}`, paddingBottom: '10px', marginTop: 0 }}>
      {title}
    </h3>
    <ul style={{ fontStyle: 'italic', paddingLeft: '20px', lineHeight: '1.6' }}>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

// 3. The Main Component: Mapping the data to the cards
const Skills = () => {
  return (
    <section id="skills" style={{ padding: '40px 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Technical Skills</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {skillsData.map((data, index) => (
          <SkillCard 
            key={index} 
            title={data.category} 
            skills={data.items} 
            bgColor={data.bgColor}
            borderColor={data.borderColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;