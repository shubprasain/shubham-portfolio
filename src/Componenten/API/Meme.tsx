import React from 'react';
import {useState,useEffect} from "react";


interface Meme {
    postlink : string,
    subreddit : string,
    title : string,
    url : string
  }

const Meme = () => {
    const [meme,setMeme] = useState<Meme>();


    useEffect(() => {
        const getMeme = async () => {
          let response = await fetch('https://meme-api.com/gimme');
          let json = await response.json()
          setMeme(json)
        }
        getMeme()
      },[])
    return (
        <div>
            <p className='API'> Title : {meme?.title} <img src={meme?.url} />  </p>
        </div>
    );
};

export default Meme;