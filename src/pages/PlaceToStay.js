import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import PlaceList from "../layout/PlaceList";
import "../style/PlaceToStay.css";

// Images
import Place1 from "../assets/Place1.png";
import Place2 from "../assets/Place2.png";
import Place3 from "../assets/Place3.png";
import Place4 from "../assets/Place4.png";
import Place5 from "../assets/Place5.png";
import Place6 from "../assets/Place6.png";
import Place7 from "../assets/Place7.png";
import Place8 from "../assets/Place8.png";
import Place9 from "../assets/Place9.png";
import Place10 from "../assets/Place10.png";
import Place11 from "../assets/Place11.png";
import Place12 from "../assets/Place12.png";
import Place13 from "../assets/Place13.png";
import Place14 from "../assets/Place14.png";
import Place15 from "../assets/Place15.png";
import Place16 from "../assets/Place16.png";
import setting from "../assets/setting.png";

const PlaceToStay = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const placeList = [
      {
        id: "pl16",
        img: Place16,
      },
      {
        id: "pl1",
        img: Place1,
      },
      {
        id: "pl2",
        img: Place2,
      },
      {
        id: "pl3",
        img: Place3,
      },
      {
        id: "pl4",
        img: Place4,
      },
      {
        id: "pl5",
        img: Place5,
      },
      {
        id: "pl6",
        img: Place6,
      },
      {
        id: "pl7",
        img: Place7,
      },
      {
        id: "pl8",
        img: Place8,
      },
      {
        id: "pl9",
        img: Place9,
      },
      {
        id: "pl10",
        img: Place10,
      },
      {
        id: "pl11",
        img: Place11,
      },
      {
        id: "pl12",
        img: Place12,
      },
      {
        id: "pl13",
        img: Place13,
      },
      {
        id: "pl14",
        img: Place14,
      },
      {
        id: "pl15",
        img: Place15,
      },
    ];
    setPlaces(placeList);
  }, []);

  return (
    <section className="place-to-stay-section">
      <Container>
        <div className="place-to-stay-locations">
          <div>
            <p>Resturant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>fantast city</p>
            <p>beach</p>
            <p>Carbins</p>
            <p>Off-grid</p>
            <p>Farm</p>
          </div>
          <div>
            <p>Location</p>
            <img src={setting} alt="settings" />
          </div>
        </div>
        <div className="place-to-stay-locations-mobile">
          <select
            id="Location"
            name="Location"
            className="place-to-stay-locations-dropdown"
          >
            <option value="none" selected disabled hidden>
              Location
            </option>
            <option value="resturant">Resturant</option>
            <option value="cottage">Cottage</option>
            <option value="castle">Castle</option>
            <option value="fantast city">Fantast city</option>
            <option value="beach">Beach</option>
            <option value="carbins">Carbins</option>
            <option value="off-grid">Off-grid</option>
            <option value="farm">Farm</option>
          </select>
        </div>
        <PlaceList places={places} />
      </Container>
    </section>
  );
};

export default PlaceToStay;
