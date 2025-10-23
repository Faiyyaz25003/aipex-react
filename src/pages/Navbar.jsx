"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const [dropdownOpen, setDropdownOpen] = useState(null);
  const langDropdownRef = useRef(null);

  const languages = ["en", "mr", "ar"];

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getLanguageLabel = (code) => {
    switch (code) {
      case "en":
        return "English";
      case "mr":
        return "मराठी";
      case "ar":
        return "العربية";
      default:
        return code;
    }
  };

  // Dropdown data
  const courierItems = [
    t("domesticCourier"),
    t("internationalCourier"),
    t("ecommerceCourier"),
    t("liquidCourier"),
    t("medicineCourier"),
    t("universityCourier"),
    t("dangerousGoodsCourier"),
    t("transportService"),
  ];

  const trackItems = [t("singleShipment"), t("multipleShipment")];

  return (
    <nav className="bg-primary text-light font-primary px-6 py-4 flex justify-between items-center relative">
      {/* Logo or Title */}
      <div className="text-h3 font-bold">{t("")}</div>

      {/* Main Navigation */}
      <div className="hidden md:flex space-x-6 text-body font-semibold uppercase relative">
        {/* Courier Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen("courier")}
          onMouseLeave={() => setDropdownOpen(null)}
        >
          <button className="hover:text-secondary flex items-center space-x-1">
            <span>{t("courierServices")}</span>
            <svg
              className={`w-3 h-3 transition-transform ${
                dropdownOpen === "courier" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdownOpen === "courier" && (
            <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg border border-gray-300 z-10 w-56">
              {courierItems.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Other links */}
        <a href="#customs" className="hover:text-secondary">
          {t("customsClearing")}
        </a>
        <a href="#warehousing" className="hover:text-secondary">
          {t("warehousing")}
        </a>
        <a href="#contact" className="hover:text-secondary">
          {t("getInTouch")}
        </a>

        {/* Track Shipment Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen("track")}
          onMouseLeave={() => setDropdownOpen(null)}
        >
          <button className="hover:text-secondary flex items-center space-x-1">
            <span>{t("trackShipment")}</span>
            <svg
              className={`w-3 h-3 transition-transform ${
                dropdownOpen === "track" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdownOpen === "track" && (
            <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg border border-gray-300 z-10 w-48">
              {trackItems.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <a href="#login" className="hover:text-secondary">
          {t("login")}
        </a>
      </div>

      {/* Language Dropdown */}
      <div className="relative" ref={langDropdownRef}>
        <button
          onClick={() =>
            setDropdownOpen(dropdownOpen === "lang" ? null : "lang")
          }
          className="flex items-center space-x-2 bg-light px-3 py-1 rounded font-primary border border-black"
        >
          <span className="text-white">{getLanguageLabel(i18n.language)}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              dropdownOpen === "lang" ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {dropdownOpen === "lang" && (
          <ul className="absolute right-0 mt-2 w-32 bg-white text-black border border-black rounded shadow-lg z-10">
            {languages.map((lang) => (
              <li
                key={lang}
                onClick={() => handleSelect(lang)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {getLanguageLabel(lang)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
