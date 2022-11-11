import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import "../style/Places.css";
import PlaceList from "./PlaceList";

// Images
import Place1 from "../assets/Place1.png";
import Place2 from "../assets/Place2.png";
import Place3 from "../assets/Place3.png";
import Place4 from "../assets/Place4.png";
import Place5 from "../assets/Place5.png";
import Place6 from "../assets/Place6.png";
import Place7 from "../assets/Place7.png";
import Place16 from "../assets/Place16.png";

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const placeList = [
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
    ];
    setPlaces(placeList);
  }, []);

  return (
    <section className="places-section">
      <Container className="places-container">
        <h2>Inspiration for your next adventure</h2>
        <PlaceList places={places} />
      </Container>
    </section>
  );
};

export default Places;
