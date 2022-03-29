import React, { useEffect, useState } from 'react'; //HOOKS
import axios from "axios";
import Card from "./Card";

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
      <ul className='radio-container'>
          {data.map((country, index) => ( // Itération sur array des 250 pays.
            <Card key={index} country={country} /> /* une clef pour chaque pays, on passe la donnée country (à l'enfant Card) qui correspond à chaque tour de .map */
          //{} pour interpoler en React
          /* /!\ donner une clef unique à chaque élément listé dans le .map grâce à l'index */
          ))}
      </ul>
    </div>
  );
};

export default Countries;
