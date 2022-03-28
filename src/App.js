import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'; // autoimport de toutes les routes codées ci-dessous
import About from './pages/About';

// fonction appelant les routes (pages/url)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        { /* si le chemin n'existe pas, renvoyer à la page d'accueil
        <Route path="*" element={<Home />} />  */ }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
