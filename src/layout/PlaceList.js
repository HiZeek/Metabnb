import React from "react";
import "../style/PlaceList.css";


import Star from "../assets/Star.png";

const PlaceList = (props) => {


  const places = props.places.map((place) => (
    <div key={place.id} className='placelist-container'>
      <img src={place.img} alt="places" />
      <div className="placelist-title">
        <p>Desert king</p>
        <p>1MBT per night</p>
      </div>
      <div className="placelist-distance">
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <img src={Star} alt="Rating" className="placelist-rating" />
    </div>
  ));
  return (
    <div className="placelist">
      {places}
    </div>
  );
};

export default PlaceList;
