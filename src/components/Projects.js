import React, { useState } from 'react';

//Project Array
const projectsData = [
  {
    title: "Flagship Instrument Modernization",
    category: "Systems",
    tech: "C, C++",
    summary: "Led codebase update to modern C/C++ libraries.",
    details: "Currently leading a project to update a flagship commercial instrument's codebase to utilize modern C and C++ libraries. This migration bridges legacy systems with modern standards, significantly improving system reliability, maintainability, and execution performance."
  },
  {
    title: "Machine Learning Data Classification",
    category: "Data Science",
    tech: "Weka, Ubuntu VMs",
    summary: "Executed complex machine learning labs.",
    details: "Configured and utilized Ubuntu Virtual Machines to execute machine learning classification labs. Used the Weka suite for extensive data preparation, model training, and analyzing classification performance metrics."
  },
  {
    title: "Advanced Network Security Labs",
    category: "Cybersecurity",
    tech: "SEED VMs, Wireshark",
    summary: "Navigated virtual cyber ranges for penetration testing.",
    details: "Configured SEED VM environments to execute advanced network security labs. Tasks involved traffic analysis using Wireshark, configuring Snort IDS rules, and executing penetration testing techniques involving firewall evasion and VPN tunneling."
  }
];

//Expand/Collapsed State
const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ 
      padding: '20px', 
      borderRadius: '12px', 
      backgroundColor: '#ffffff', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)', 
      color: '#333',
      transition: 'all 0.3s ease'
    }}>
      <h3 style={{ marginTop: 0, color: '#222' }}>{project.title}</h3>
      <p style={{ fontSize: '0.9rem', color: '#007BFF', fontWeight: 'bold' }}>Tech: {project.tech}</p>
      
      {/*Short Summary*/}
      <p style={{ fontWeight: '500' }}>{project.summary}</p>

      {/*Detailed Description*/}
      {isExpanded && (
        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #eee' }}>
          <p style={{ lineHeight: '1.6', color: '#555' }}>{project.details}</p>
        </div>
      )}

      {/*Toggle*/}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          marginTop: '15px',
          padding: '8px 12px',
          backgroundColor: isExpanded ? '#007BFF' : 'transparent',
          color: isExpanded ? '#fff' : '#007BFF',
          border: '1px solid #007BFF',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.2s'
        }}
      >
        {isExpanded ? 'Read Less 🔼' : 'Read More 🔽'}
      </button>
    </div>
  );
};

//Filters and Maps for Projects
const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projectsData.map(item => item.category))];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" style={{ padding: '40px 20px', borderBottom: '1px solid #ccc' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Featured Projects</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              backgroundColor: filter === cat ? '#007BFF' : '#f1f1f1',
              color: filter === cat ? 'white' : 'black',
              border: 'none',
              borderRadius: '20px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {/*Project Card*/}
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;