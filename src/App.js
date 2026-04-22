import React, { useState } from 'react';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = {
    backgroundColor: '#e0f7fa', 
    color: '#333',
    minHeight: '100vh',
    transition: 'all 0.3s ease' 
  };

  const darkTheme = {
    backgroundColor: '#121212', 
    color: '#f4f4f4',
    minHeight: '100vh',
    transition: 'all 0.3s ease'
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App" style={isDarkMode ? darkTheme : lightTheme}>
      
      <header style={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign: 'center', position: 'relative' }}>
        <h1>My Professional Portfolio</h1>
        <Nav />
        
        <button 
          onClick={toggleTheme} 
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px 16px',
            cursor: 'pointer',
            backgroundColor: isDarkMode ? '#444' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      
      <main>
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;