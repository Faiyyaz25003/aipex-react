
import React from "react";

function Tracking() {
  return (
    <div
      className="w-screen h-70 mt-10 bg-cover bg-center flex justify-end items-center"
      style={{
        backgroundImage: "url('/tracking.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#1E3175] text-white p-10 rounded-md w-[770px] h-[350px] mr-0.5 shadow-lg mt-1 mb-18">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-red-500 text-2xl">📍</span>
          <h2 className="text-2xl font-bold mt-8">Quick Tracking Service</h2>
        </div>

        <p className="text-gray-200 mb-6 text-sm leading-relaxed mt-8">
          *Please enter your (AWB) Air Waybill number or B/L number to track
          your shipment.
        </p>

        {/* Input Section */}
        <div className="flex mt-18">
          <input
            type="text"
            placeholder="Enter Your AWB Number"
            className="w-2/3 p-3 rounded-l-md border border-gray-300 text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E3175]"
          />
          <button className="bg-[#E53935] hover:bg-[#c62828] text-white font-semibold px-6 rounded-r-md transition">
            TRACK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tracking;
