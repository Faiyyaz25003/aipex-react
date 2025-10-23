"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-screen h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/HeroImage.jpg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text content */}
      <div className="relative text-center text-white px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {t("heroTitle")}
        </h1>
        <p className="text-lg md:text-2xl">{t("heroSubtitle")}</p>
      </div>
    </section>
  );
}
