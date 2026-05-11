import React, { useState, useEffect } from 'react';

// 1. The Local Projects Array (This must be at the very top!)
const localProjects = [
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
  },
  {
    title: "E-Commerce Shop Website",
    category: "Web",
    tech: "React, Node.js", 
    summary: "Core contributor to a full-stack e-commerce platform.",
    //Contributions
    details: "Collaborated on a team repository to build a responsive e-commerce site. My specific contributions included designing the user interface, managing state for the shopping cart, and wiring up the front-end components.",
    githubUrl: "https://github.com/PaceCS-344/project1-ian/tree/sql" // Paste Ian's exact link here
  },
  {
    title: "Interactive React Portfolio",
    category: "Web",
    tech: "React, Node.js",
    summary: "Built a modular, interactive single-page application.",
    details: "Developed a professional portfolio utilizing React components, state management (useState), and dynamic data rendering (mapping arrays to UI elements). Implemented features include a light/dark theme switcher, category filtering, and interactive accordion cards."
  }
];

//Highlighter Function
const getHighlightedText = (text, highlight) => {
  if (!highlight) return text;
  
  const escapedHighlight = highlight.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'));
  
  return parts.map((part, index) => 
    part.toLowerCase() === highlight.toLowerCase() ? 
      <span key={index} style={{ backgroundColor: 'yellow', fontWeight: 'bold', color: 'black', padding: '2px', borderRadius: '3px' }}>
        {part}
      </span> 
      : part
  );
};

//Project Card
const ProjectCard = ({ project, searchTerm }) => {
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
      <h3 style={{ marginTop: 0, color: '#222' }}>
        {getHighlightedText(project.title, searchTerm)}
      </h3>
      <p style={{ fontSize: '0.9rem', color: '#007BFF', fontWeight: 'bold' }}>
        Tech: {getHighlightedText(project.tech, searchTerm)}
      </p> 
      <p style={{ fontWeight: '500' }}>
        {getHighlightedText(project.summary, searchTerm)}
      </p>

      {isExpanded && (
        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #eee' }}>
          <p style={{ lineHeight: '1.6', color: '#555' }}>
            {getHighlightedText(project.details, searchTerm)}
          </p>
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
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

        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '8px 12px',
              backgroundColor: '#333',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

//The Main Projects
const Projects = ({ searchTerm = "" }) => {
  const [filter, setFilter] = useState('All');
  const [githubProjects, setGithubProjects] = useState([]);
  
  // NEW: State for the specific GitHub repo filter
  const [repoSearch, setRepoSearch] = useState(''); 

  useEffect(() => {
    fetch('https://api.github.com/users/TimTheAsianMan/repos')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          const formattedRepos = data.map(repo => ({
            title: repo.name, 
            category: 'GitHub', 
            tech: repo.language || 'Multiple Languages', 
            summary: repo.description || 'A public repository hosted on GitHub.', 
            details: `Fetched dynamically from the GitHub API. This repository was last updated on ${new Date(repo.updated_at).toLocaleDateString()}.`,
            githubUrl: repo.html_url 
          }));
          setGithubProjects(formattedRepos);
        } else {
          console.error("GitHub API Error (likely Rate Limited):", data.message);
        }
      })
      .catch(error => console.error("Network error fetching GitHub repos:", error));
  }, []);

  const allProjects = [...localProjects, ...githubProjects];
  const categories = ['All', ...new Set(allProjects.map(item => item.category))];
  
  //Category Button Filter
  let displayedProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  //Global Search Bar Filter
  if (searchTerm) {
    const lowercasedTerm = searchTerm.toLowerCase();
    displayedProjects = displayedProjects.filter(project => 
      project.title.toLowerCase().includes(lowercasedTerm) ||
      project.tech.toLowerCase().includes(lowercasedTerm) ||
      project.details.toLowerCase().includes(lowercasedTerm)
    );
  }

  //GitHUb repo name/language Filter
  if (repoSearch) {
    const lowerRepoSearch = repoSearch.toLowerCase();
    displayedProjects = displayedProjects.filter(project => 
      // This ensures we only apply this strict filter to GitHub projects
      project.category !== 'GitHub' || 
      project.title.toLowerCase().includes(lowerRepoSearch) ||
      project.tech.toLowerCase().includes(lowerRepoSearch)
    );
  }

  return (
    <section id="projects" style={{ padding: '40px 20px', borderBottom: '1px solid #ccc' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Featured Projects</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => {
              setFilter(cat);
              setRepoSearch(''); //Clear when changing categories
            }}
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

      {/*Dedicated GitHub Search Bar*/}
      {filter === 'GitHub' && (
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <input 
            type="text" 
            placeholder="Filter GitHub repos by name or language..." 
            value={repoSearch}
            onChange={(e) => setRepoSearch(e.target.value)}
            style={{
              padding: '10px 15px',
              width: '320px',
              borderRadius: '20px',
              border: '2px solid #007BFF',
              fontSize: '1rem',
              outline: 'none',
              backgroundColor: '#e6f2ff'
            }}
          />
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              searchTerm={searchTerm || repoSearch} //Search bar text highlighter
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%', color: '#888' }}>
            No projects match your search criteria.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;