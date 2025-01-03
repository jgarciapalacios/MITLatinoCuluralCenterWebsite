import React from "react";
import Img from "./Img";
import "./Cards.css";

interface CardProps {
  data: Array<any>;
  dataDescription: string;
  style?: React.CSSProperties;
  cardClass?: string;
}

const Cards: React.FC<CardProps> = ({
  data,
  style,
  cardClass,
  dataDescription,
}) => {
  return (
    <section
      className="cards-section"
      style={{ background: style?.background }}
    >
      <h2>{dataDescription}</h2>
      <div className="cards-container" style={style}>
        {data.map((item, index) => (
          <Card key={index} item={item} cardClass={cardClass} />
        ))}
      </div>
    </section>
  );
};

const Card: React.FC<{
  item: any;
  cardClass?: string;
}> = ({ item, cardClass }) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <div
        className={`card-container ${cardClass}`}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          const image = target.querySelector<HTMLImageElement>("img");
          const overlay = target.querySelector<HTMLDivElement>(".overlay");
          const title = target.querySelector<HTMLDivElement>(".title");

          if (image) image.style.opacity = "0.5";
          if (overlay) overlay.style.opacity = "1";
          if (title) title.style.opacity = "0";
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          const image = target.querySelector<HTMLImageElement>("img");
          const overlay = target.querySelector<HTMLDivElement>(".overlay");
          const title = target.querySelector<HTMLDivElement>(".title");

          if (image) image.style.opacity = "1";
          if (overlay) overlay.style.opacity = "0";
          if (title) title.style.opacity = "1";
        }}
      >
        <Img
          src={item.image}
          alt={item.title}
          fallbackSrc="/images/logos/fallback.jpeg"
        />
        <div className="title">
          <h3>{item.title}</h3>
        </div>
        <div className="overlay">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </a>
  );
};

export default Cards;
