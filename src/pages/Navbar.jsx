
"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [courierOpen, setCourierOpen] = useState(false);
  const [trackOpen, setTrackOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "mr", label: "मराठी" },
    { code: "ar", label: "العربية" },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <section className="w-full">
      {/* Top bar */}
      <div className="flex flex-col md:flex-row items-center justify-between py-3 px-4 md:px-10 bg-white shadow">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src="/aipex-logo.png"
              alt="Aipex Worldwide"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-1 hidden md:block"></div>

        {/* Top-right options */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.aipexworldwide"
            target="_blank"
            className="bg-green-600 text-white px-3 py-1 rounded text-sm flex items-center hover:bg-green-700 transition"
          >
            Download our <i className="lni lni-android-original ml-1"></i>{" "}
            Android App
          </a>

          <div className="flex space-x-2">
            <a href="/" className="text-gray-800 hover:text-gray-600">
              IN
            </a>
            <a href="/uae" className="text-red-600 hover:text-red-400">
              UAE
            </a>
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded hover:bg-gray-300"
            >
              {i18n.language.toUpperCase()}
            </button>
            {langOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded shadow-lg z-20">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-red-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 md:hidden">
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex space-x-6">
                {/* Courier Services Dropdown */}
                <li className="relative">
                  <button
                    onClick={() => setCourierOpen(!courierOpen)}
                    className="hover:text-gray-200 flex items-center"
                  >
                    {t("courierServices")}
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {courierOpen && (
                    <ul className="absolute mt-2 w-56 bg-white text-gray-800 rounded shadow-lg z-20">
                      <li>
                        <a
                          href="/domestic"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {t("domesticCourier")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/international"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {t("internationalCourier")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ecommerce"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {t("ecommerceCourier")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/liquid"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {t("liquidCourier")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/medicine"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {t("medicineCourier")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/university"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {t("universityCourier")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dangerous"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {t("dangerousGoodsCourier")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/transport"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {t("transportService")}
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <a href="/customs" className="hover:text-gray-200">
                    {t("customsClearing")}
                  </a>
                </li>
                <li>
                  <a href="/warehousing" className="hover:text-gray-200">
                    {t("warehousing")}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-200">
                    {t("getInTouch")}
                  </a>
                </li>

                {/* Track Shipment Dropdown */}
                <li className="relative">
                  <button
                    onClick={() => setTrackOpen(!trackOpen)}
                    className="hover:text-gray-200 flex items-center"
                  >
                    {t("trackShipment")}
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {trackOpen && (
                    <ul className="absolute mt-2 w-48 bg-white text-gray-800 rounded shadow-lg z-20">
                      <li>
                        <a
                          href="/track"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {t("singleShipment")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/track-bulk"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {t("multipleShipment")}
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <a
                    href="/login"
                    target="_blank"
                    className="hover:text-gray-200"
                  >
                    {t("login")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          {isNavOpen && (
            <ul className="md:hidden bg-red-600 text-white space-y-2 px-4 pb-4">
              <li>
                <button
                  onClick={() => setCourierOpen(!courierOpen)}
                  className="w-full text-left flex items-center justify-between"
                >
                  {t("courierServices")}
                  <span>{courierOpen ? "-" : "+"}</span>
                </button>
                {courierOpen && (
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="/domestic">{t("domesticCourier")}</a>
                    </li>
                    <li>
                      <a href="/international">{t("internationalCourier")}</a>
                    </li>
                    <li>
                      <a href="/ecommerce">{t("ecommerceCourier")}</a>
                    </li>
                    <li>
                      <a href="/liquid">{t("liquidCourier")}</a>
                    </li>
                    <li>
                      <a href="/medicine">{t("medicineCourier")}</a>
                    </li>
                    <li>
                      <a href="/university">{t("universityCourier")}</a>
                    </li>
                    <li>
                      <a href="/dangerous">{t("dangerousGoodsCourier")}</a>
                    </li>
                    <li>
                      <a href="/transport">{t("transportService")}</a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href="/customs">{t("customsClearing")}</a>
              </li>
              <li>
                <a href="/warehousing">{t("warehousing")}</a>
              </li>
              <li>
                <a href="/contact">{t("getInTouch")}</a>
              </li>

              <li>
                <button
                  onClick={() => setTrackOpen(!trackOpen)}
                  className="w-full text-left flex items-center justify-between"
                >
                  {t("trackShipment")}
                  <span>{trackOpen ? "-" : "+"}</span>
                </button>
                {trackOpen && (
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="/track">{t("singleShipment")}</a>
                    </li>
                    <li>
                      <a href="/track-bulk">{t("multipleShipment")}</a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href="/login" target="_blank">
                  {t("login")}
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
