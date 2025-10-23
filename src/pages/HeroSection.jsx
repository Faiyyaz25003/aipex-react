"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-light min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-h1 font-bold mb-4">{t("welcome")}</h1>
        <p className="text-body mb-6">{t("about")}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="my-button">{t("getStarted")}</button>
          <button className="my-button bg-secondary hover:bg-primary">
            {t("learnMore")}
          </button>
        </div>
      </div>
    </section>
  );
}
