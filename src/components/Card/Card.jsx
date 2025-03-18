import React from "react";

const Card = ({
  image,
  title,
  description,
  backgroundColor = "#FF6B6B",
  textColor = "white",
  imageSize = "medium",
  children,
}) => {
  // Dynamic styles based on props
  const cardStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    transition: "all 0.3s ease",
  };

  // Image size mapping
  const imageSizeClasses = {
    small: "w-24 h-24",
    medium: "w-32 h-32",
    large: "w-40 h-40",
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center text-center p-6 transform hover:scale-105 hover:z-10 card-parallax"
      style={cardStyle}
    >
      {image && (
        <div className="relative mb-4">
          <div
            className="absolute inset-0 border-2 border-dashed border-white rounded-full"
            style={{ transform: "scale(1.1)" }}
          ></div>
          <img
            className={`${
              imageSizeClasses[imageSize] || imageSizeClasses.medium
            } rounded-full object-cover`}
            src={image}
            alt={title || "Card Image"}
          />
        </div>
      )}

      {title && <h2 className="font-bold text-2xl mb-3">{title}</h2>}

      {description && <p className="mb-4">{description}</p>}

      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Card;
