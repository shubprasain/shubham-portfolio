import React from 'react';
import {useState, useEffect} from "react";

interface Weer {
    location : {
      name : string,
      country : string,
      localtime : string
      
    }
    current : {
      temp_c: Number,
     
    }
  }

const Weer = () => {
    const [weer,setWeer] = useState<Weer>();
 
  
    const colors = ["red", "green", "blue", "yellow","purple","pink","white","grey"];
    const [color, setColor] = React.useState(colors[0]);
  
    const nextColor = () => {
        const index = colors.indexOf(color);
        const nextIndex = index + 1 === colors.length ? 0 : index + 1;
        setColor(colors[nextIndex]);
    };
  
    useEffect(() => {
      const getWeer = async () => {
          let response = await fetch ("https://api.weatherapi.com/v1/current.json?key=99152cdacdd84e81840122920222812&q=Antwerp&aqi=no");
          let json = await response.json()
          setWeer(json)
          
        }
        getWeer();
      },[])
    return (
        <div>
            <button onClick={() => nextColor()}>Change Color</button>
          <p className='API' style={{backgroundColor : color}}> Datum & tijd: {weer?.location.localtime} | Het is momenteel  {weer?.current.temp_c.toString()}  °C in {weer?.location.name},{weer?.location.country} </p>  
        </div>
    );
};

export default Weer;