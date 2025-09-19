import React , {useState} from 'react';
import { use }  from 'react';
import Country from '../Country/Country'
import './countries.css'

const Countries = ({ countriesPromise }) => {
    let [visitedCountries , setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log('handle Visited Countries' , country);
        const newVisitedCountries = [...visitedCountries,country];
        visitedCountries = newVisitedCountries;
        setVisitedCountries(visitedCountries);
        console.log(visitedCountries);
        // ignone -> push , unshift , pop , shift , splice , reverse , sort 
    }

    const countrys = (use(countriesPromise)).countries;
    console.log(countrys);
    return (
        <div>
            <h1>In Total countries: {countrys.length}</h1>
            <h1>Total Country Visited: {visitedCountries.length}</h1>
            <ol>
                {
                    // visitedCountries.map(visit => <li key={visit.cca3.cca3}>{visit.name.common}</li>)
                    visitedCountries.map((visit,index) => <li key={index}>{visit.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countrys.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries = {handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
















// function Countries() {
//     return (
//         <div>

//         </div>
//     )
// }


// ----------------
// const Countries = () => {
//     return (
//         <div>

//         </div>
//     )
// }