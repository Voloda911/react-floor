import React, { useState, useRef, useEffect } from "react";
import EcoDarck from "./img/pexels-max-rahubovskiy-6585761 (1).jpg";

import corouselImg1 from "./img/pexels-cocarinne-7260267.jpg";
import corouselImg2 from "./img/pexels-cottonbro-studio-7492882.jpg";
import corouselImg3 from "./img/pexels-digital-buggu-218564.jpg";
import corouselImg4 from "./img/pexels-max-rahubovskiy-7031723.jpg";
import corouselImg6 from "./img/pexels-max-rahubovskiy-6447388.jpg";
import corouselImg7 from "./img/pexels-rachel-claire-4993081.jpg";
import corouselImg8 from "./img/pexels-max-rahubovskiy-6492397.jpg";
import corouselImg9 from "./img/pexels-max-rahubovskiy-6636293.jpg";
import corouselImg10 from "./img/pexels-rachel-claire-4846106.jpg";
import corouselImg12 from "./img/pexels-jill-burrow-6681856.jpg";
import corouselImg13 from "./img/pexels-max-rahubovskiy-7018824.jpg";
import corouselImg14 from "./img/pexels-max-rahubovskiy-7214467.jpg";
import corouselImg15 from "./img/pexels-skylar-kang-6046819.jpg";
import corouselImg16 from "./img/pexels-max-rahubovskiy-7045844.jpg";
import corouselImg18 from "./img/pexels-max-rahubovskiy-6447390.jpg";

function Eco() {
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef(0);
  const scrollLeft = useRef(0);
  const scrollContainer = useRef(null);

  const startDragging = (e) => {
    setIsDragging(true);
    startPos.current = e.pageX - scrollContainer.current.offsetLeft;
    scrollLeft.current = scrollContainer.current.scrollLeft;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startPos.current) * 3;
    scrollContainer.current.scrollLeft = scrollLeft.current - walk;
  };

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const images = [
    corouselImg1,
    corouselImg2,
    corouselImg3,
    corouselImg4,
    corouselImg6,
    corouselImg7,
    corouselImg8,
    corouselImg9,
    corouselImg10,
    corouselImg12,
    corouselImg13,
    corouselImg14,
    corouselImg15,
    corouselImg16,
    corouselImg18,
  ];
  const nextSlide = () => {
    setCurrentStartIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentStartIndex((currentIndex) =>
      currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const selectImage = (index) => {
    setCurrentStartIndex(index);
  };

  const visibleImage = images[currentStartIndex];
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && scrollContainer.current) {
        let newScrollPosition = scrollContainer.current.scrollLeft + 1; // Скорость скролла
        scrollContainer.current.scrollLeft = newScrollPosition;
      }
    }, 20); // Регулируйте скорость изменением этого значения

    return () => clearInterval(interval);
  }, [isDragging]);
  return (
    <div className="eco">
      <img className="ecoPhoto" src={EcoDarck} alt="" />
      <div className="slider_imager">
        <button className="arrow-button prev-button" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="corousel">
          <img
            src={visibleImage}
            alt="Eco-friendly product"
            className="carousel-image"
          />
        </div>

        <div
          className={`all-picture ${isDragging ? "active" : ""}`}
          ref={scrollContainer}
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={handleDragging}
          onTouchStart={startDragging}
          onTouchEnd={stopDragging}
          onTouchMove={handleDragging}
        >
          {images.map((image, index) => (
            <img
              className="img_all"
              key={index}
              src={image}
              alt={`Image ${index}`}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>

        <button className="arrow-button next-button" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Eco;
