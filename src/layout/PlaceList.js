import React from "react";
import "../style/PlaceList.css";

// Images
// import Place1 from "../assets/Place1.png";
// import Place2 from "../assets/Place2.png";
// import Place3 from "../assets/Place3.png";
// import Place4 from "../assets/Place4.png";
// import Place5 from "../assets/Place5.png";
// import Place6 from "../assets/Place6.png";
// import Place7 from "../assets/Place7.png";
// import Place8 from "../assets/Place8.png";
// import Place9 from "../assets/Place9.png";
// import Place10 from "../assets/Place10.png";
// import Place11 from "../assets/Place11.png";
// import Place12 from "../assets/Place12.png";
// import Place13 from "../assets/Place13.png";
// import Place14 from "../assets/Place14.png";
// import Place15 from "../assets/Place15.png";
// import Place16 from "../assets/Place16.png";
import Star from "../assets/Star.png";

const PlaceList = (props) => {
//   const placeList = [
//     {
//       id: "pl1",
//       img: Place1,
//     },
//     {
//       id: "pl2",
//       img: Place2,
//     },
//     {
//       id: "pl3",
//       img: Place3,
//     },
//     {
//       id: "pl4",
//       img: Place4,
//     },
//     {
//       id: "pl5",
//       img: Place5,
//     },
//     {
//       id: "pl6",
//       img: Place6,
//     },
//     {
//       id: "pl7",
//       img: Place7,
//     },
//     {
//       id: "pl8",
//       img: Place8,
//     },
//     {
//       id: "pl9",
//       img: Place9,
//     },
//     {
//       id: "pl10",
//       img: Place10,
//     },
//     {
//       id: "pl11",
//       img: Place11,
//     },
//     {
//       id: "pl12",
//       img: Place12,
//     },
//     {
//       id: "pl13",
//       img: Place13,
//     },
//     {
//       id: "pl14",
//       img: Place14,
//     },
//     {
//       id: "pl15",
//       img: Place15,
//     },
//     {
//       id: "pl16",
//       img: Place16,
//     },
//   ];

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
