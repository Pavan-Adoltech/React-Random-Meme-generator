import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/271ps6.jpg"
  })

  const [allMemeImages]=React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url=memesArray[randomNumber].url
    setMeme(prevMeme => ({
         ...prevMeme,
         randomImage:url
    }))
  
  }

  function handleChange(event){
    const {name ,value} =event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]:value


    }))
  }
  return (
    <main>
      <div className="form">
        <input 
        type="text"
         placeholder="Top text" 
         className="form--input"
         name="topText"
         value={meme.topText}
         onChange={handleChange}
         
         />



        <input 
        type="text"
         placeholder="Bottom text"
        className="form--input" 
        name="botttomText"
        value={meme.bottomText}
        onChange={handleChange}
        />


        <button
         className="form--button"
          onClick={getMemeImage}>
          Get a new meme image🖼️
        </button>
      </div>

      <img src={meme.randomImage} alt="meme" className="meme--image"/>
      <h2 className="toptext">{meme.topText}</h2>
      <h2 className="bottomtext">{meme.bottomText}</h2>
    </main>
  );
}
