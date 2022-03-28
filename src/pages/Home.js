import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation'; // auto-import

const Home = () => {
  return (
    <div>
    <Logo />
    <Navigation /> {/* appel de navigation.js */}
    <Countries />
      <h1>ACCUEIL</h1>
    </div>
  );
};

export default Home;
