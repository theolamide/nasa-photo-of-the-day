import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";

export default function ImageList() {
    const [image, setImage] = useState([]);

useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        console.log(response.data);
        setImage(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);


  return (
    <div className = 'container'>
        <ImageCard 
            title = {image.title}
            explanation = {image.explanation}
            image = {image.hdurl}
            copyright = {image.copyright}            
        />
    </div>
  )


}