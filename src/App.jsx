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
          <div className="bg-white p-6 rounded shadow-sm space-y-8">
            {/* Delivery Location */}
            <div>
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
              </select>
              {renderError("deliveryLocation")}
            </div>

            {/* Destination Details */}
            <div>
              <label className="block text-red-500 text-sm mb-4">
                Destination Details
              </label>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      placeholder="Enter Delivery Pin Code"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    />
                    {renderError("pinCode")}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    />
                    {renderError("city")}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    />
                    {renderError("state")}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter Full Name"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    />
                    {renderError("fullName")}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Email Address"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    />
                    {renderError("email")}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    />
                    {renderError("phone")}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleInputChange}
                      placeholder="Enter Address Line 1"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    />
                    {renderError("addressLine1")}
                  </div>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    placeholder="Enter Address Line 2"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                  <input
                    type="text"
                    name="addressLine3"
                    value={formData.addressLine3}
                    onChange={handleInputChange}
                    placeholder="Enter Address Line 3"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div>
              <label className="block text-red-500 text-sm mb-4">
                Shipment Details
              </label>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <select
                      name="productDescription"
                      value={formData.productDescription}
                      onChange={handleInputChange}
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-600 bg-white focus:outline-none focus:border-gray-400 w-full"
                    >
                      <option value="">Select Product Description</option>
                      <option value="Apparel">Apparel</option>
                      <option value="Auto Parts">Auto Parts</option>
                      <option value="Beauty Products">Beauty Products</option>
                      <option value="Books">Books</option>
                      <option value="Cables">Cables</option>
                      <option value="Camera Accessories">
                        Camera Accessories
                      </option>
                      <option value="Clothing">Clothing</option>
                      <option value="Cosmetics">Cosmetics</option>
                      <option value="Crafts">Crafts</option>
                      <option value="Documents">Documents</option>
                      <option value="Electronic Items">Electronic Items</option>
                      <option value="Fashion Accessories">
                        Fashion Accessories
                      </option>
                      <option value="Footwear">Footwear</option>
                      <option value="Gadgets">Gadgets</option>
                      <option value="Gift Items">Gift Items</option>
                      <option value="Grocery Items">Grocery Items</option>
                      <option value="Health Products">Health Products</option>
                      <option value="Home Appliances">Home Appliances</option>
                      <option value="Household Items">Household Items</option>
                      <option value="Jewellery">Jewellery</option>
                      <option value="Kitchen Appliances">
                        Kitchen Appliances
                      </option>
                      <option value="Laptops">Laptops</option>
                      <option value="Medical Items">Medical Items</option>
                      <option value="Mobile Accessories">
                        Mobile Accessories
                      </option>
                      <option value="Mobile Phones">Mobile Phones</option>
                      <option value="Musical Instruments">
                        Musical Instruments
                      </option>
                      <option value="Office Stationery">
                        Office Stationery
                      </option>
                      <option value="Personal Care">Personal Care</option>
                      <option value="Sports Equipment">Sports Equipment</option>
                      <option value="Toys">Toys</option>
                      <option value="Watches">Watches</option>
                      <option value="Other">Other</option>
                    </select>
                    {renderError("productDescription")}
                  </div>
                  <input
                    type="text"
                    name="clientReference"
                    value={formData.clientReference}
                    onChange={handleInputChange}
                    placeholder="Client reference id/Order id"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="subProductDescription"
                    value={formData.subProductDescription}
                    onChange={handleInputChange}
                    placeholder="Sub Product Description"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  />
                  <div>
                    <input
                      type="text"
                      name="invoiceValue"
                      value={formData.invoiceValue}
                      onChange={handleInputChange}
                      placeholder="Invoice Value"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    />
                    {renderError("invoiceValue")}
                  </div>
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div>
              <label className="block text-red-500 text-sm mb-4">
                Dimensions
              </label>
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <input
                    type="text"
                    name="length"
                    value={formData.length}
                    onChange={handleInputChange}
                    placeholder="Length in cm"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                  {renderError("length")}
                </div>
                <div>
                  <input
                    type="text"
                    name="width"
                    value={formData.width}
                    onChange={handleInputChange}
                    placeholder="Width in cm"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                  {renderError("width")}
                </div>
                <div>
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    placeholder="Height in cm"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm w-full placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                  {renderError("height")}
                </div>
                <div>
                  <select
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-600 bg-white focus:outline-none focus:border-gray-400 w-full"
                  >
                    <option value="">Select Actual Weight</option>
                    <option value="0.5">0.5 kg</option>
                    <option value="1">1 kg</option>
                    <option value="2">2 kg</option>
                    <option value="5">5 kg</option>
                    <option value="10">10 kg</option>
                  </select>
                  {renderError("weight")}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex">
              <button
                onClick={handleSubmit}
                className="px-12 py-3 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 transition-colors"
              >
                Search Carrier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
