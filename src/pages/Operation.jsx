

"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n" // make sure path is correct based on your folder structure

export default function Operation() {
  const { t } = useTranslation();

  const stats = [
    { value: "5+", label: t("branchesPanIndia") },
    { value: "75+", label: t("strongWorkforce") },
    { value: "6000+", label: t("shipmentsPerDay") },
    { value: "5000+", label: t("happyCustomers") },
  ];

  return (
    <section className="bg-[#223377] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {t("operationsNetwork")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-extrabold mb-2">
                {item.value}
              </p>
              <p className="text-sm md:text-base font-semibold tracking-wide uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
