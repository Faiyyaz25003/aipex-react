"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaMap,
  FaUsers,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaLocationArrow,
} from "react-icons/fa";

export default function Benifit() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const benefits = [
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-3xl mb-3" />,
      title: t("benefit1"),
    },
    {
      icon: <FaMap className="text-red-500 text-3xl mb-3" />,
      title: t("benefit2"),
    },
    {
      icon: <FaUsers className="text-red-500 text-3xl mb-3" />,
      title: t("benefit3"),
    },
    {
      icon: <FaTools className="text-red-500 text-3xl mb-3" />,
      title: t("benefit4"),
    },
    {
      icon: <FaShieldAlt className="text-red-500 text-3xl mb-3" />,
      title: t("benefit5"),
    },
    {
      icon: <FaClock className="text-red-500 text-3xl mb-3" />,
      title: t("benefit6"),
    },
    {
      icon: <FaLocationArrow className="text-red-500 text-3xl mb-3" />,
      title: t("benefit7"),
    },
  ];

  return (
    <section
      className={`py-16 px-6 md:px-20 bg-white text-gray-800 ${
        isRTL ? "text-right" : "text-left"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* === Header === */}
        <div className="mb-12">
          <p className="text-red-500 font-semibold mb-2 text-lg">
            {t("isoCertified")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("aipexBenefitTitle")}
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed text-base">
            {t("aipexBenefitDesc")}
          </p>
        </div>

        {/* === Benefits Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <h4 className="font-medium text-base text-gray-800 leading-snug">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
