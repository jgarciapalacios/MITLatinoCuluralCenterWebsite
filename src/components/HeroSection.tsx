import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url("/images/events/latinx-grad.webp")`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Bienvenidos</h1>
        <h2 className="hero-subtitle">Welcome Home</h2>
        <p className="hero-description">
          Join us in celebrating and promoting Latin American culture at MIT
          through events, workshops, and community gatherings.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
