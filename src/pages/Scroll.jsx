

"use client";
import React, { useRef, useEffect, useState } from "react";

export default function ScrollGallery() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollDuration = 3000; // 3 seconds per scroll
  const imageWidth = 400;
  const imageMargin = 24; // m-3 on both sides = 12px each = 24px total
  const scrollStep = (imageWidth + imageMargin) * 2; // scroll 2 images at a time

  const images = [
    "Baggit.png",
    "Boon.png",
    "CloudMoyo.png",
    "Icertics.png",
    "JetFight.png",
    "Pepsico.png",
    "Regoal.png",
    "Rolex.png",
    "Sony.png",
    "Tata.png",
    "U.png",
    "Vero.png",
    "Yarn.png",
  ];

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    let currentScroll = 0;

    const scroll = () => {
      if (!isPaused) {
        currentScroll += 1;

        // Calculate the width of one set of images
        const singleSetWidth = images.length * (imageWidth + imageMargin);

        // Reset scroll position when reaching the end of first set
        if (currentScroll >= singleSetWidth) {
          currentScroll = 0;
          container.scrollLeft = 0;
        }

        container.scrollLeft = currentScroll;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, images.length]);

  return (
    <div className="w-full flex justify-center mt-8 mb-24 px-4">
      <div className="w-full max-w-7xl">
        <div
          ref={scrollRef}
          className="overflow-x-hidden whitespace-nowrap py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {duplicatedImages.map((img, index) => (
            <img
              key={`${img}-${index}`}
              src={`/Scroll/${img}`}
              alt={img.replace(".png", "")}
              className="inline-block w-[400px] h-[250px] object-contain bg-white rounded-xl m-3 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
