import React from 'react';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <h2>Featured Projects</h2>
      
      <div className="project-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div className="project-card" style={{ padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
          <h3>Flagship Instrument Modernization</h3>
          <p><strong>Technologies:</strong> C, C++</p>
          <p>
            Currently leading a project to update a flagship commercial instrument's 
            codebase to utilize modern C and C++ libraries, improving system reliability 
            and performance.
          </p>
        </div>

        <div className="project-card" style={{ padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
          <h3>Machine Learning & Data Classification</h3>
          <p><strong>Technologies:</strong> Weka, Ubuntu Virtual Machines</p>
          <p>
            Executed complex machine learning labs using Weka within an Ubuntu VM environment, 
            focusing on data preparation, model training, and performance analysis.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;