import React from 'react';
import Navigation from './components/Navigation.js';
import AboutMe from './components/AboutMe.js';
import Profile from './components/Profile.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Hobbies from './components/Hobbies.js';
import Contact from './components/Contact.js';
import Snake from './components/Snake.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutMe />
      <Profile />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <Snake />
    </div>
  );
}

export default App;
