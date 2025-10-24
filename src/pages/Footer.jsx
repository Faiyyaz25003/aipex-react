"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: "USEFUL LINKS",
      key: "usefulLinks",
      links: [
        { key: "home", label: "Home" },
        { key: "aboutUs", label: "About Us" },
        { key: "faqs", label: "FAQs" },
        { key: "contact", label: "Contact" },
        { key: "shippingTerms", label: "Shipping Terms" },
        { key: "privacyPolicy", label: "Privacy Policy" },
      ],
    },
    {
      title: "COURIER SERVICES",
      key: "courierServices",
      links: [
        { key: "domesticCourier", label: "Domestic Courier" },
        { key: "internationalCourier", label: "International Courier" },
        { key: "liquidCourier", label: "Liquid Courier" },
        { key: "ecommerceCourier", label: "E-commerce Courier" },
        { key: "medicineCourier", label: "Medicine Courier" },
        { key: "universityCourier", label: "University Courier" },
        { key: "dangerousGoodsCourier", label: "Dangerous Goods Courier" },
      ],
    },
    {
      title: "OTHER SERVICES",
      key: "otherServices",
      links: [
        { key: "warehousing", label: "Warehousing" },
        { key: "customsClearing", label: "Customs Clearing" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 text-gray-800 relative">
      {/* === MAIN GRID === */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-200">
        {/* WHO WE ARE */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            {t("whoWeAre") || "WHO WE ARE"}
          </h3>
          <p className="text-sm leading-relaxed mb-6">
            {t("whoWeAreDesc") ||
              "We offer innovative logistics solutions across various product types. Our warehousing and fulfillment solutions serve your local + global requirements."}
          </p>

          {/* Social Icons */}
          <h4 className="text-sm font-semibold mb-3">
            {t("followUs") || "FOLLOW US"}
          </h4>
          <div className="flex space-x-4">
            {[
              {
                src: "facebook.png",
                alt: "Facebook",
                color: "hover:text-blue-600",
              },
              {
                src: "instagram.png",
                alt: "Instagram",
                color: "hover:text-pink-600",
              },
              {
                src: "youtube.png",
                alt: "YouTube",
                color: "hover:text-red-600",
              },
              {
                src: "whatsapp.png",
                alt: "WhatsApp",
                color: "hover:text-green-600",
              },
            ].map((icon, i) => (
              <a key={i} href="#" className={`${icon.color} transition`}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-6 h-6 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* SECTIONS (No Box, just links) */}
        {sections.map((section, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              {t(section.key) || section.title}
            </h3>
            <ul className="space-y-1">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition block"
                  >
                    {t(link.key) || link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* === COPYRIGHT === */}
      <div className="text-center py-4 text-xs text-gray-500 bg-gray-100">
        © 2022 - Aipex Worldwide OPC Pvt Ltd,&nbsp;
        {t("allRightsReserved") || "All Rights Reserved."}
      </div>
    </footer>
  );
};

export default Footer;
