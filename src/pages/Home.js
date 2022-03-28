import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation'; // auto-import

const Home = () => {
  return (
    <div>
    <Logo />
    <Navigation /> {/* appel de navigation.js */}
      <h1>ACCUEIL</h1>
    </div>
  );
};

export default Home;
