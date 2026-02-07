import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent activeSection={activeSection} />
    </div>
  );
}

export default App;
