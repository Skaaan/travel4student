import React from 'react';


const Card = ({ country }) => {

    return (
        <div>
            <li className="card">
                <img
                    src={country.flags.svg}
                    alt={"flag" + country.translations.deu.common} />
                <div className="infos">
                    <h2>{country.translations.deu.common}</h2>
                    <h4>{country.capital}</h4>
                    <p>Bevölkerung: {country.population} </p>
                </div>
            </li>
        </div>
    );
};

export default Card;