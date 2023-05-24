"use client";
import { WiCelsius, WiDaySunny } from 'weather-icons-react';

interface Props {
    city : String;
}

const SearchBar = ({ city } : Props) => {

    return (
        
       <div>
            <h2>Madrid</h2>
            <p>Chance of rain: 0%</p>

            <div>
                <h1>31 <WiCelsius size={50} color='#000' style={{ margin : "-15px"}} /></h1>
            </div>

            <div>
                <h1><WiDaySunny size={200} color='#ffbb11b8' style={{float: 'right'}} /></h1>
            </div>

       </div>
    );
}

export default SearchBar;