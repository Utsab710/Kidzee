import React from "react";

const Card = ({
  src,
  title,
  description,
  backgroundColor = "#FF6B6B",
  textColor = "white",
  imageSize = "medium",
  children,
  className,
}) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
    transition: "all 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const imageSizeClasses = {
    small: "h-32",
    medium: "h-48",
    large: "h-64",
  };

  const textStyles =
    textColor === "custom"
      ? {
          titleColor: "#1A1A1A",
          ageColor: "#FFD700",
          descColor: "#333333",
        }
      : {
          titleColor: textColor,
          ageColor: textColor,
          descColor: textColor,
        };

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg flex flex-col text-center card-parallax ${className}`}
      style={cardStyle}
    >
      {src && (
        <div className="w-full">
          <img
            className={`${
              imageSizeClasses[imageSize] || imageSizeClasses.medium
            } w-full object-cover pointer-events-none`} // Prevent image interaction
            src={src}
            alt={title || "Card Image"}
            draggable="false" // Prevent image drag
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow justify-center">
        {title && (
          <h2
            className="font-bold text-xl mb-2"
            style={{ color: textStyles.titleColor }}
          >
            {title}
          </h2>
        )}
        {description && (
          <div className="text-sm">
            <p
              className="font-semibold mb-1"
              style={{ color: textStyles.ageColor }}
            >
              {description.split("|")[0]}
            </p>
            <p style={{ color: textStyles.descColor }}>
              {description.split("|")[1]}
            </p>
          </div>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
