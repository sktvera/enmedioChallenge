import React from "react";
import spidermanImage from "./Assets/Img/spidermanImage.jpeg";
import "./Assets/styles.css";

const ComicsHistory = () => {
  return (
    <div  className="comics-history-container">
      <div  className="comics-background-image-container">
        <img
          src={spidermanImage}
          alt="Spiderman"
          className="comics-background-image"
        />
      </div>

      <div className="comics-title-container">
        <h2 className="comics-title">Historia de los cómics de Marvel</h2>
      </div>

      <div className="comics-stan-lee">
        <p>
          Stan Lee fue un famoso escritor y editor de cómics que co-creó muchos
          de los personajes icónicos de Marvel, como Spider-Man, X-Men y Hulk.
          Su trabajo influyó en la cultura pop y su legado perdura en la industria
          del entretenimiento.
        </p>
      </div>
    </div>
  );
};

export default ComicsHistory;
