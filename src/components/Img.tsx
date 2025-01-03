import React, { useState } from "react";

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string; // Optional fallback image
}

const Img: React.FC<ImgProps> = ({
  src,
  fallbackSrc = "/images/fallback.jpeg",
  alt,
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const defaultStyle: React.CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <img
      src={src || fallbackSrc}
      alt={alt || "image"}
      style={{ ...defaultStyle, ...style }}
      onLoad={() => setIsLoaded(true)}
      {...props} // Pass any additional props
    />
  );
};

export default Img;
