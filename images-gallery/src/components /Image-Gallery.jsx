import React, { useState } from "react";
import images from "../data";
import "../style.css";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-gallery">
      <div className="introduction">
        <h1>Welcome to Wanderlust Gallery</h1>
        <p>
          Explore stunning destinations around the world through our curated
          collection of breathtaking images. Click on any thumbnail to view the
          full-size image and learn more about each enchanting location.
        </p>
      </div>
      <div className="full-size-image-container">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="full-size-image"
        />
        <div className="image-description">
          <h2>{selectedImage.title}</h2>
          <p>{selectedImage.description}</p>
        </div>
      </div>
      <div className="thumbnail-container">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`thumbnail-image ${
              selectedImage.src === image.src ? "selected" : ""
            }`}
            onClick={() => handleThumbnailClick(image)}
            onMouseEnter={() => console.log("Hovered over image:", image.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
