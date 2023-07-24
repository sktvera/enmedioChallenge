import React from "react";
import marvelSeries from "./Assets/Img/marvelSeries.jpg";
import "./Assets/styles.css";

const SeriesTitle = () => {
  return (
    <div className="series-title-container">
      <div style={{ width: "100%", height: "30%" }}>
        <img
          src={marvelSeries}
          alt=""
          className="series-background-image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            
          }}
        />
      </div>

      <div className="series-textHome">
        <div className="series-textHome-Father">
          <h2 className="series-textHomeLine">Descubre las series de Marvel!</h2>
        </div>
      </div>
    </div>
  );
};

export default SeriesTitle;
