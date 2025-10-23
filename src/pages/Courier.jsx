

// File: src/components/Courier.jsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Courier = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">
        {t(
          "courierServicesHeading",
          "We provide courier services across the globe"
        )}
      </h2>
      <p className="text-gray-600 max-w-3xl mb-12 text-left">
        {t(
          "courierServicesDescription",
          "As a business owner, ensuring your recipients get their shipments on time is vital. We’ll provide you with the performance, pricing and value you need to satisfy your customers and stay ahead of the competition."
        )}
      </p>

      {/* Icons + Texts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/* Fast Service */}
        <div className="flex flex-col items-start text-left">
          <img
            src="/Courier1.png"
            alt={t("fastServiceTitle", "Fast Service")}
            className="w-24 h-24 mb-6"
          />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t("fastServiceTitle", "Fast Service")}
          </h3>
          <p className="text-gray-600 text-base max-w-xs">
            {t(
              "fastServiceDesc",
              "With over 15 years experience and real focus on customer satisfaction, you can rely on us for quick delivery of your parcel."
            )}
          </p>
        </div>

        {/* Safe Delivery */}
        <div className="flex flex-col items-start text-left">
          <img
            src="/Courier2.png"
            alt={t("safeDeliveryTitle", "Safe Delivery")}
            className="w-24 h-24 mb-6"
          />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t("safeDeliveryTitle", "Safe Delivery")}
          </h3>
          <p className="text-gray-600 text-base max-w-xs">
            {t(
              "safeDeliveryDesc",
              "Our integrated network backed by a strong workforce ensures that your shipment is delivered with utmost care and safety."
            )}
          </p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-start text-left">
          <img
            src="/Courier3.png"
            alt={t("supportTitle", "24/7 Support")}
            className="w-24 h-24 mb-6"
          />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t("supportTitle", "24/7 Support")}
          </h3>
          <p className="text-gray-600 text-base max-w-xs">
            {t(
              "supportDesc",
              "Customer service and satisfaction is one of the main pillars we have built our business upon. We have zero compromise policy on it."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courier;
