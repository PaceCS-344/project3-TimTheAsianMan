import React, { useState } from 'react';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //Search State
  //Should stay pinned to the top of the page
  const [searchTerm, setSearchTerm] = useState('');

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
      
      {/* Set position to sticky so the nav and search stay visible while scrolling */}
      <header style={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1>My Professional Portfolio</h1>
        
        {/* 2. Pass the state and the updater function to the Nav */}
        <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
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
        {/* 3. Pass the search term down to the components that need to be filtered */}
        <Skills searchTerm={searchTerm} />
        <Projects searchTerm={searchTerm} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;