"use client";
import { WiCelsius, WiDaySunny } from 'weather-icons-react';

interface Props {
    city : String;
}

const CurrentTemp = ({ city } : Props) => {

    return (
        
       <div style={{border: "solid black 3px"}}>
            <h2>Madrid</h2>
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