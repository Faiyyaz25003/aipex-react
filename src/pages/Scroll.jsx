
"use client";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ScrollGallery() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useTranslation();

  const imageWidth = 400;
  const imageMargin = 24;

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

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    let currentScroll = 0;

    const scroll = () => {
      if (!isPaused) {
        currentScroll += 1;

        const singleSetWidth = images.length * (imageWidth + imageMargin);

        if (currentScroll >= singleSetWidth) {
          currentScroll = 0;
          container.scrollLeft = 0;
        }

        container.scrollLeft = currentScroll;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => animationId && cancelAnimationFrame(animationId);
  }, [isPaused, images.length]);

  return (
    <>
      {/* ---- Heading ---- */}
      <div className="flex justify-start px-10">
        <div className="inline-block">
          <h2 className="text-3xl font-bold bg-black bg-clip-text text-transparent mb-3 ml-40">
            {t("ourClients")}
          </h2>
        </div>
      </div>

      {/* ---- Gallery ---- */}
      <div className="w-full flex flex-col items-center mt-8 mb-24 px-4">
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
    </>
  );
}
