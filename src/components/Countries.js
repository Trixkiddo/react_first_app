import React, { useEffect, useState } from 'react'; //HOOKS
import axios from "axios";


const Countries = () => {
  // [état initial, fonction de mise à jour de cet état] = retourne un array à 2 entrées
  const [data, setData] = useState([]);

// On va chercher la donnée de l'API
  useEffect(() => { //useEffect se joue lorsque le composant est monté
    axios
      .get('https://restcountries.com/v3.1/all') //Va chercher l'API
      .then((result) => setData(result.data)); //et affiche le résultat de cette API (.data = uniquement l'array des 250 pays)
  }, []) //callback

  return (
    <div className='countries'>
      <h1>Countries</h1>
      <ul>
          {data.map((country, index) => ( // Itération sur array des 250 pays.
            <li key={index}>{country.translations.fra.common}</li> //{} pour interpoler en React
          /* /!\ donner une clef unique à chaque élément listé dans le .map grâce à l'index */
          ))}
      </ul>
    </div>
  );
};

export default Countries;
