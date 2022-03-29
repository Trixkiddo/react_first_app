import React from 'react';

// Données récupérées du composant parent

const Card = ({ country }) => {
  return (
    <div className='card-container'>
      <li className="card">
        <img
          src={country.flags.svg}
          alt={"drapeau " + country.translations.fra.common}
        />
        <div className="infos">
          <h3>{country.translations.fra.common}</h3>
          <h4>{country.capital}</h4>
          <p>Population {country.population.toLocaleString()}</p> {/* toLocaleString formate l'affichage du nombre */}
        </div>
      </li>
    </div>
  );
};

export default Card;
