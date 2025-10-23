// File: src/components/OperationsNetwork.jsx
import React from "react";

const stats = [
  { value: "5+", label: "BRANCHES PAN INDIA" },
  { value: "75+", label: "STRONG WORKFORCE" },
  { value: "6000+", label: "SHIPMENTS PER DAY" },
  { value: "5000+", label: "HAPPY CUSTOMERS" },
];

export default function OperationsNetwork() {
  return (
    <section className="bg-[#223377] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Operations & Network
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
