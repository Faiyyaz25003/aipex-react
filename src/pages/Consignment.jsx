

import React, { useState } from "react";

export default function Consignment() {
  const [shipmentClass, setShipmentClass] = useState("document");
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
    quantity: "",
  });

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for that field when user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Shipment class logic
  const handleShipmentClassChange = (value) => {
    setShipmentClass(value);
    if (value === "document") {
      setPaymentMethod("prepaid");
    }
  };

  // Validate all required fields
  const validateForm = () => {
    let newErrors = {};

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
      "clientReference",
      "quantity",
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

  // Submit Handler
  const handleSubmit = () => {
    if (!validateForm()) {
      // alert("Please fill all required fields before searching for carrier.");
      return;
    }

    console.log("Form Data:", { ...formData, shipmentClass, paymentMethod });
    alert("Searching for carrier...");
  };

  // Helper for error text
  const renderError = (field) =>
    errors[field] && (
      <p className="text-xs text-red-500 mt-1">{errors[field]}</p>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-[1fr_2fr] gap-6">
          {/* LEFT CONTAINER */}
          <div className="p-6 space-y-4">
            {/* Pickup Location */}
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

            {/* Shipment Class + Payment Method */}
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
                      className="w-4 h-4 text-blue-600"
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
                      className="w-4 h-4 text-blue-600"
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
                      className="w-4 h-4 text-blue-600"
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
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">COD</span>
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTAINER */}
          <div className="p-6 space-y-4 min-h-[500px] overflow-auto">
            {/* Delivery Location */}
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
                <div>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    placeholder="Delivery Pin Code"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
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
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
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
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                  />
                  {renderError("state")}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                  />
                  {renderError("fullName")}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                  />
                  {renderError("email")}
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                  />
                  {renderError("phone")}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    placeholder="Address Line 1"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                  />
                  {renderError("addressLine1")}
                </div>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  placeholder="Address Line 2"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                />
                <input
                  type="text"
                  name="addressLine3"
                  value={formData.addressLine3}
                  onChange={handleInputChange}
                  placeholder="Address Line 3"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                />
              </div>
            </div>

            {/* Shipment Details */}
            <div className="bg-white p-4 rounded border border-gray-300 space-y-4">
              <label className="block text-red-500 text-sm mb-3">
                Shipment Details
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <select
                    name="productDescription"
                    value={formData.productDescription}
                    onChange={handleInputChange}
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-600 bg-white w-full"
                  >
                    <option value="">Select Product Description</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Books">Books</option>
                    <option value="Other">Other</option>
                  </select>
                  {renderError("productDescription")}
                </div>

                <div>
                  <input
                    type="text"
                    name="clientReference"
                    value={formData.clientReference}
                    onChange={handleInputChange}
                    placeholder="Client Reference ID / Order ID"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                  />
                  {renderError("clientReference")}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <input
                  type="text"
                  name="subProductDescription"
                  value={formData.subProductDescription}
                  onChange={handleInputChange}
                  placeholder="Sub Product Description"
                  className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                />

                <div>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="Quantity / Number"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                  />
                  {renderError("quantity")}
                </div>
              </div>

              {/* Dimensions */}
              <div>
                <label className="block text-red-500 text-sm mb-2">
                  Dimensions
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <input
                      type="text"
                      name="length"
                      value={formData.length}
                      onChange={handleInputChange}
                      placeholder="Length (cm)"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                    />
                    {renderError("length")}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="width"
                      value={formData.width}
                      onChange={handleInputChange}
                      placeholder="Width (cm)"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                    />
                    {renderError("width")}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      placeholder="Height (cm)"
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                    />
                    {renderError("height")}
                  </div>
                  <div>
                    <select
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-600 bg-white w-full"
                    >
                      <option value="">Weight</option>
                      <option value="0.5">0.5 kg</option>
                      <option value="1">1 kg</option>
                      <option value="2">2 kg</option>
                    </select>
                    {renderError("weight")}
                  </div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:w-[200px]">
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-800 text-white py-2 text-sm rounded hover:bg-gray-700 transition-colors"
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
