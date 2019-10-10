import React from "react";

const ImageCard = props => {
  return (

    
    <div className="image-list"> 
        <div>
            <h2> Image Title: {props.title} </h2>            
        </div>     
        
        <img className = "imageContainer"src = {props.image} alt = "from NASA API"></img>
        <p> Image Copyright: {props.copyright} </p>
        <p className = "excerpt"> <strong>Excerpt :</strong>  {props.explanation} </p>
      </div>
  );
};

export default ImageCard;
