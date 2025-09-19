import React , {useState} from 'react';
import './country.css'


const Country = ({country , handleVisitedCountries}) => {

    const [visited,setVisited] = useState(false);
    const handleVisited = () => {
        // console.log("button clicked");
        // basic
        // if(!visited) setVisited(true);
        // else  setVisited(false);

        // second system
        // setVisited(visited ? false : true); 

        // third system
        setVisited(!visited); 
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <p>Name: {country.name.common}</p>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} , {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{visited ? "Vosited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;