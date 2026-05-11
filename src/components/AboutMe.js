import React, { useState, useEffect } from 'react';

const AboutMe = () => {
  // State to hold your profile data
  const [githubProfile, setGithubProfile] = useState(null);

  //Fetch my user data
  useEffect(() => {
    fetch('https://api.github.com/users/TimTheAsianMan')
      .then(response => response.json())
      .then(data => {
        //Check for rate limit error
        if (data && !data.message) {
          setGithubProfile(data);
        }
      })
      .catch(error => console.error("Error fetching GitHub profile:", error));
  }, []);

  return (
    <section id="about" style={{ padding: '60px 20px', textAlign: 'center', borderBottom: '1px solid #ccc' }}>
      <h2 style={{ marginBottom: '20px' }}>About Me</h2>
      
      {/*Bio*/}
      <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem' }}>
        I am a Computer Science student passionate about software engineering, data science, and web development. 
        I enjoy bridging the gap between legacy systems and modern standards, whether that involves modernizing 
        C/C++ libraries or building interactive front-end applications.
      </p>

      {/*Dynamic Profile Card */}
      {githubProfile && (
        <div style={{ 
          marginTop: '40px', 
          padding: '25px', 
          backgroundColor: '#ffffff', 
          borderRadius: '15px', 
          display: 'inline-block', 
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
          color: '#333'
        }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px', color: '#222' }}>GitHub Stats</h3>
          
          {/*Dynamically Load PFP*/}
          <img
            src={githubProfile.avatar_url}
            alt="GitHub Avatar"
            style={{ width: '120px', borderRadius: '50%', border: '4px solid #007BFF', marginBottom: '15px' }}
          />
          
          {/*Display Acc Stats*/}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', fontSize: '1rem' }}>
            <p><strong>Followers:</strong> {githubProfile.followers}</p>
            <p><strong>Public Repos:</strong> {githubProfile.public_repos}</p>
            <p><strong>Gists:</strong> {githubProfile.public_gists}</p>
          </div>
          
          <a
            href={githubProfile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block', 
              marginTop: '20px', 
              padding: '10px 20px', 
              backgroundColor: '#24292e',
              color: '#fff', 
              textDecoration: 'none', 
              borderRadius: '8px', 
              fontWeight: 'bold',
              transition: 'background-color 0.2s'
            }}
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </section>
  );
};

export default AboutMe;