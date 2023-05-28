"use client";
import { WiCelsius, WiDaySunny } from 'weather-icons-react';
import { Weather } from '../../types';

interface Props {
    weather : Weather;
}

const CurrentTemp = ( { weather } : Props ) => {

    if(!weather){
        return null;
    }

    return (
        
       <div style={{border: "solid black 3px", margin : "80px"}}>
            <h2> { weather.name } </h2>
            <p>Chance of rain: 0%</p>

            <div style={{border: "solid red 3px"}}>
                <h1>31 <WiCelsius size={50} color='#000' style={{ margin : "-15px"}} /></h1>
            </div>

            <div style={{border: "solid blue 3px"}}>
                <h1><WiDaySunny size={200} color='#ffbb11b8' style={{float: 'right'}} /></h1>
            </div>

       </div>
    );
}

export default CurrentTemp;