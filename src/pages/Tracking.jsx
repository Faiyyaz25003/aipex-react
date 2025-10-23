// File: src/App.jsx
import React from "react";

function Tracking() {
  return (
    <div
      className="w-screen h-80 bg-cover bg-center flex justify-end items-center"
      style={{ backgroundImage: "url('/tracking.jpg')" }}
    >
      <div className="bg-[#1E3175] text-white p-10 rounded-md w-[750px] h-[350px] mr-16 shadow-lg mb-8 mr-[17px]">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-red-500 text-2xl">📍</span>
          <h2 className="text-2xl font-bold">Quick Tracking Service</h2>
        </div>
        <p className="text-gray-200 mb-6 text-sm leading-relaxed">
          *Please enter your (AWB) Air Waybill number or B/L number to track
          your shipment.
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Your AWB Number"
            className="w-2/3 p-3 rounded-l-md focus:outline-none text-gray-800"
          />
          <button className="bg-[#E53935] hover:bg-[#c62828] text-white font-semibold px-6 rounded-r-md">
            TRACK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tracking;
