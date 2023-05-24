"use client";
import { WiCelsius } from 'weather-icons-react';

interface Props {
    city : String;
}

const SearchBar = ({ city } : Props) => {

    return (
       <div>
        <h2>Madrid</h2>
        <p>Chance of rain: 0%</p>

        <div>
            <h1>31</h1>
        </div>

        <div>
            <h1>31 <WiCelsius size={25} color='#000' /></h1>
        </div>

       </div>
    );
}

export default SearchBar;