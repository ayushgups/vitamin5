import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import NotHome from './pages/NotHome';


function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/nothome" element={<NotHome />} />
      </Routes>
    </main>
  );
}

export default App;