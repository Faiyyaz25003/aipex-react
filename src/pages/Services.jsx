"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./i18n"; // make sure this path points to your i18n config

export default function ServicesLayout() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto py-16 px-8">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          {t("Services We offer")}
        </h1>
        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
          {t(
            "The success and scale of your business is dependent on how well your product reaches your customer. With Aipex Worldwide as your partner, you can be rest assured of safe, secure and quick delivery."
          )}
        </p>
      </div>

      {/* Services Grid - 2x2 Layout */}
      <div className="grid grid-cols-2 gap-0">
        {/* Domestic Couriers - Top Left */}
        <div className="border border-gray-200 flex">
          <div className="w-1/2">
            <img
              src="service1.jpg"
              className="w-full h-full object-cover"
              alt="Domestic Courier"
            />
          </div>
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
              {t("domesticCourier")}
              <ArrowRight className="w-5 h-5" />
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("domesticCourierDesc")}
            </p>
          </div>
        </div>

        {/* International Couriers - Top Right */}
        <div className="border border-gray-200 flex">
          <div className="w-1/2">
            <img
              src="service2.jpg"
              className="w-full h-full object-cover"
              alt="International Courier"
            />
          </div>
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
              {t("internationalCourier")}
              <ArrowRight className="w-5 h-5" />
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("internationalCourierDesc")}
            </p>
          </div>
        </div>

        {/* Customs Clearing - Bottom Left */}
        <div className="border border-gray-200 flex">
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
              {t("customsClearing")}
              <ArrowRight className="w-5 h-5" />
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("customsClearingDesc")}
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="service3.jpg"
              className="w-full h-full object-cover"
              alt="Customs Clearing"
            />
          </div>
        </div>

        {/* Warehousing & Fulfillment - Bottom Right */}
        <div className="border border-gray-200 flex">
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
              {t("warehousing")}
              <ArrowRight className="w-5 h-5" />
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("warehousingDesc")}
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="service4.jpg"
              className="w-full h-full object-cover"
              alt="Warehousing & Fulfillment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
