// // // import Login from './pages/Login'
// // // import Signup from './pages/Signup'

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       {/* <Login/> */}
// // //       <Signup/>
// // //     </div>
// // //   )
// // // }

// // // export default App

// // // src/App.jsx
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Signup from "./pages/Signup";
// // import Login from "./pages/Login";

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// import React from 'react'

// import Navbar from './pages/Navbar'
// import HeroSection from './pages/HeroSection'
// import Benifit from './pages/Benifit'
// import Operation from './pages/Operation'
// import Service from './pages/Services'
// import Courier from "./pages/Courier";
// import Contact from "./pages/Contact";
// import Tracking from './pages/Tracking'
// import Scroll from './pages/Scroll'
// import Footer from './pages/Footer'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <Benifit />
//       <Operation />
//       <Service />
//       <Courier />
//       <Scroll/>
//       <Tracking />
//       <Contact />
//       <Footer/>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";

export default function ShippingForm() {
  const [shipmentClass, setShipmentClass] = useState("parcel");
  const [paymentMethod, setPaymentMethod] = useState("prepaid");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    pickupLocation: "",
    deliveryLocation: "",
    saveAddress: false,
    pinCode: "",
    city: "",
    state: "",
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    productDescription: "",
    clientReference: "",
    subProductDescription: "",
    invoiceValue: "",
    length: "",
    width: "",
    height: "",
    weight: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleShipmentClassChange = (value) => {
    setShipmentClass(value);
    if (value === "document") {
      setPaymentMethod("prepaid");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "pickupLocation",
      "deliveryLocation",
      "pinCode",
      "city",
      "state",
      "fullName",
      "email",
      "phone",
      "addressLine1",
      "productDescription",
      "invoiceValue",
      "length",
      "width",
      "height",
      "weight",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }
    console.log("Form Data:", { ...formData, shipmentClass, paymentMethod });
    alert("Searching for carrier...");
  };

  const renderError = (field) =>
    errors[field] ? (
      <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
    ) : null;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {/* LEFT CONTAINER */}

          {/* Pickup Location Container */}
          <div className="p-6 space-y-4">
            {/* Pickup Location (Full Width) */}
            <div className="bg-white p-4 rounded border border-gray-300">
              <label className="block text-red-500 text-sm mb-2">
                Pickup Location
              </label>
              <select
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-600 bg-white focus:outline-none focus:border-gray-400"
              >
                <option value="">Select your pickup address</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
              </select>
              {renderError("pickupLocation")}
            </div>

            {/* Shipment Class + Payment Method Side by Side */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Shipment Class */}
              <div className="bg-white p-4 rounded border border-gray-300 flex-1">
                <label className="block text-red-500 text-sm mb-3">
                  Shipment Class
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="document"
                      checked={shipmentClass === "document"}
                      onChange={(e) =>
                        handleShipmentClassChange(e.target.value)
                      }
                      className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Document</span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="parcel"
                      checked={shipmentClass === "parcel"}
                      onChange={(e) =>
                        handleShipmentClassChange(e.target.value)
                      }
                      className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Parcel</span>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-4 rounded border border-gray-300 flex-1">
                <label className="block text-red-500 text-sm mb-3">
                  Payment Method
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="prepaid"
                      checked={paymentMethod === "prepaid"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Prepaid</span>
                  </label>

                  {shipmentClass === "parcel" && (
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">COD</span>
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTAINER */}
          <div className="p-6 space-y-4 min-h-[700px] overflow-auto">
            {/* Select From Existing Delivery Locations */}
            <div className="bg-white p-4 rounded border border-gray-300">
              <label className="block text-red-500 text-sm mb-2">
                Select From Existing Delivery Locations
              </label>
              <select
                name="deliveryLocation"
                value={formData.deliveryLocation}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-600 bg-white focus:outline-none focus:border-gray-400"
              >
                <option value="">Select Delivery Location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
              </select>
              {renderError("deliveryLocation")}
            </div>

            {/* Destination Details */}
            <div className="bg-white p-4 rounded border border-gray-300">
              <label className="block text-red-500 text-sm mb-3">
                Destination Details
              </label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* First Row */}
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleInputChange}
                  placeholder="Delivery Pin Code"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  placeholder="Address Line 1"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  placeholder="Address Line 2"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
                <input
                  type="text"
                  name="addressLine3"
                  value={formData.addressLine3}
                  onChange={handleInputChange}
                  placeholder="Address Line 3"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>

            {/* Shipment Details */}
            <div className="bg-white p-4 rounded border border-gray-300 space-y-4">
              <label className="block text-red-500 text-sm mb-3">
                Shipment Details
              </label>

              {/* First Row: Product Description & Client Reference */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-600 bg-white w-full focus:outline-none focus:border-gray-400"
                >
                  <option value="">Select Product Description</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Books">Books</option>
                  <option value="Other">Other</option>
                </select>

                <input
                  type="text"
                  name="clientReference"
                  value={formData.clientReference}
                  onChange={handleInputChange}
                  placeholder="Client Reference ID / Order ID"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Second Row: Sub Product Description & Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <input
                  type="text"
                  name="subProductDescription"
                  value={formData.subProductDescription}
                  onChange={handleInputChange}
                  placeholder="Sub Product Description"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />

                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="Quantity / Number"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Dimensions */}
              <div>
                <label className="block text-red-500 text-sm mb-2">
                  Dimensions
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <input
                    type="text"
                    name="length"
                    value={formData.length}
                    onChange={handleInputChange}
                    placeholder="Length (cm)"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                  />
                  <input
                    type="text"
                    name="width"
                    value={formData.width}
                    onChange={handleInputChange}
                    placeholder="Width (cm)"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                  />
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    placeholder="Height (cm)"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full focus:outline-none focus:border-gray-400"
                  />
                  <select
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-600 bg-white w-full focus:outline-none focus:border-gray-400"
                  >
                    <option value="">Weight</option>
                    <option value="0.5">0.5 kg</option>
                    <option value="1">1 kg</option>
                    <option value="2">2 kg</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="bg-white p-4 rounded border border-gray-300 w-full md:w-[200px]">
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-800 text-white py-2 text-sm rounded hover:bg-gray-700 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
