import React from "react";
import images from "../data/lounge.json";
import Img from "../components/Img";

const LoungePage = () => {
  return (
    <section
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#e5e8eb",
        backgroundColor: "#2b2b3b",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        The Latino Cultural Center Lounge
      </h2>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            maxWidth: "600px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
          <p
            style={{
              marginTop: "8px",
              fontSize: "16px",
              fontStyle: "italic",
            }}
          >
            {image.caption}
          </p>
        </div>
      ))}
    </section>
  );
};

export default LoungePage;
