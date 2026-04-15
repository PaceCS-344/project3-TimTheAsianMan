import React from 'react';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    // 1. The main background is back to the light blue color
    <div className="App" style={{ backgroundColor: '#e0f7fa', minHeight: '100vh' }}>
      
      {/* 2. The black background and white text are now isolated strictly to the header */}
      <header style={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>My Professional Portfolio</h1>
        <Nav />
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