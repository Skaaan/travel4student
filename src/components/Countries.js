import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';



const Countires = () => {
    const [data, setData] = useState([])
    const radios = ["Afrika", "Amerika", "Asien", "Europa", "Australien"]
    const [selectedRadio, setSelectedRadio] = useState("");
    // Le useEffect se joue lorsque le composant est monté     le callback dans []
    // quand le composant est monté je veux que tuy me joue axios
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")     // setData pour stocker le resultat
            .then((res) => setData(res.data));  // resultat que je cherche je le met dans un array (Axios transforme le fichier json en objet js )
    }, []);                                   // setData je te passe mes data (les pays)  

    return (
        <div className="countries" >
            <h1>COUNTRIES</h1>
            <ul className="radio-container">
                {radios.map((continent) =>
                    <li>
                        <input
                            type="radio"
                            id={continent}
                            name="continentRadio"
                            onChange={(e) => setSelectedRadio(e.target.id)}
                        />
                        <label htmlFor="">{continent} </label>
                    </li>
                )}
            </ul>

            <ul>
                {data
                    // .filter((country) => country.continents[0].includes(selectedRadio))
                    .map((country, index) => (
                        <Card key={index} country={country} />          //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
                    ))}
            </ul>
        </div>
    );
};

export default Countires;