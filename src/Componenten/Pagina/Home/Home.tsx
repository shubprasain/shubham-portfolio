import React, { useEffect, useState } from 'react';
import '../Home/Home.css';
import Meme from '../../API/Meme';








 const Home = () => {
   
 
  return (
   <>
   <body>
    <h5><br />Student Programmeren.</h5>
    <h5 className='Aboutme'><p>This is a website to up to date my Portfolio. On the portfolio page you can see the components that I made during my react typescript classes.</p></h5>
   
    <Meme/>
   </body>
   </>
        
    );
};

export default Home;