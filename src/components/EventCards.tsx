import React from "react";
import events from "../data/events.json";
import Cards from "./Cards";

const EventCards = () => {
  return (
    <Cards
      data={events}
      dataDescription={"Featured Events"}
      style={{ background: "#040e05" }}
      cardClass="event-card"
    />
  );
};

export default EventCards;
