import React from "react";

const MovieTailer = ({ embedId }) => (
  
  <div>
     <iframe
      width="560" 
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
   
  </div>
);

export default MovieTailer;
