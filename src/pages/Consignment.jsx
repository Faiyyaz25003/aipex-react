import React, { useState, useEffect } from "react";
import { User, Building2, Phone } from "lucide-react";

export default function Consignment() {
  const [shipmentClass, setShipmentClass] = useState("document");
  const [paymentMethod, setPaymentMethod] = useState("prepaid");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [pickupLocations, setPickupLocations] = useState([]);

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

  // ✅ Fetch pickup locations from API
useEffect(() => {
  let didFetch = false;

  const fetchPickupLocations = async () => {
    if (didFetch) return; // ✅ Prevent second call
    didFetch = true;

    try {
      setLoading(true);
      const response = await fetch(
        "https://www.aipexworldwide.com/live/V2/config/approve",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "583b3eb00588fff07084b007455c34ef",
          },
        }
      );

      const contentType = response.headers.POST("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("🚫 Non-JSON response:", text);
        throw new Error("Invalid JSON response from API");
      }

      const data = await response.json();
      console.log("✅ Pickup API Response:", data);

      if (data.error) {
        setPickupLocations([]);
      } else if (Array.isArray(data)) {
        setPickupLocations(data);
      } else if (Array.isArray(data.data)) {
        setPickupLocations(data.data);
      } else if (Array.isArray(data.locations)) {
        setPickupLocations(data.locations);
      } else {
        setPickupLocations([]);
      }
    } catch (error) {
      console.error("❌ Error fetching pickup locations:", error);
      setPickupLocations([]);
    } finally {
      setLoading(false);
    }
  };

  fetchPickupLocations();
}, []);


  const selectedLocation =
    pickupLocations.find(
      (loc) => String(loc.Id) === String(formData.pickupLocation)
    ) || null;

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleShipmentClassChange = (value) => {
    setShipmentClass(value);
    if (value === "document") setPaymentMethod("prepaid");
  };

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
    requiredFields.forEach((f) => {
      if (!formData[f]) newErrors[f] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit Handler (POST)
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setApiResponse(null);

    try {
      const payload = {
        email: formData.email,
        shipmentClass,
        paymentMethod,
        fullName: formData.fullName,
        phone: formData.phone,
        pinCode: formData.pinCode,
        city: formData.city,
        state: formData.state,
        address: `${formData.addressLine1}, ${formData.addressLine2}, ${formData.addressLine3}`,
        productDescription: formData.productDescription,
        subProductDescription: formData.subProductDescription,
        clientReference: formData.clientReference,
        invoiceValue: formData.invoiceValue,
        quantity: formData.quantity,
        dimensions: `${formData.length}x${formData.width}x${formData.height} cm`,
        weight: formData.weight,
      };

      const response = await fetch(
        "https://www.aipexworldwide.com/live/V2/config/approve",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      console.log("✅ API Response:", result);
      setApiResponse(result);
      alert("Carrier search successful!");
    } catch (error) {
      console.error("❌ API Error:", error);
      alert("Failed to fetch carrier. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderError = (field) =>
    errors[field] && (
      <p className="text-xs text-red-500 mt-1">{errors[field]}</p>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-[1fr_2fr] gap-6">
          {/* LEFT PANEL */}
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
                disabled={loading}
                className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-600 bg-white"
              >
                <option value="">
                  {loading
                    ? "Loading pickup addresses..."
                    : pickupLocations.length === 0
                    ? "No pickup locations available"
                    : "Select your pickup address"}
                </option>
                {pickupLocations.map((loc) => (
                  <option key={loc.Id} value={loc.Id}>
                    {loc.Name || loc["Pickup Name"] || `Location ${loc.Id}`}
                  </option>
                ))}
              </select>
              {renderError("pickupLocation")}

              {/* Selected location details */}
              {selectedLocation && (
                <div className="mt-4 text-gray-700 space-y-2 text-sm leading-relaxed">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-500" />
                    <span>{selectedLocation.Name}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building2 size={16} className="text-gray-500 mt-1" />
                    <p>
                      {selectedLocation["Address line 1"]},{" "}
                      {selectedLocation["Address line 2"]},{" "}
                      {selectedLocation["Address line 3"]}
                      <br />
                      Pin code - {selectedLocation["Pincode"] || "N/A"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    <span>{selectedLocation["Mobile No"]}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Shipment Class + Payment */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-white p-4 rounded border border-gray-300 flex-1">
                <label className="block text-red-500 text-sm mb-3">
                  Shipment Class
                </label>
                <div className="flex items-center gap-6">
                  {["document", "parcel"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        value={type}
                        checked={shipmentClass === type}
                        onChange={(e) =>
                          handleShipmentClassChange(e.target.value)
                        }
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

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

          {/* RIGHT PANEL */}
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
                className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-600 bg-white"
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
                {["pinCode", "city", "state"].map((field, i) => (
                  <div key={i}>
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      placeholder={
                        field === "pinCode"
                          ? "Delivery Pin Code"
                          : field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                    />
                    {renderError(field)}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                {["fullName", "email", "phone"].map((field, i) => (
                  <div key={i}>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      placeholder={
                        field === "fullName"
                          ? "Full Name"
                          : field === "email"
                          ? "Email Address"
                          : "Phone Number"
                      }
                      className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                    />
                    {renderError(field)}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                {["addressLine1", "addressLine2", "addressLine3"].map(
                  (field, i) => (
                    <div key={i}>
                      <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder={"Address Line " + (i + 1)}
                        className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                      />
                      {renderError(field)}
                    </div>
                  )
                )}
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
                    placeholder="Quantity"
                    className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                  />
                  {renderError("quantity")}
                </div>
              </div>

              <div>
                <label className="block text-red-500 text-sm mb-2">
                  Dimensions
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["length", "width", "height"].map((field, i) => (
                    <div key={i}>
                      <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder={`${
                          field.charAt(0).toUpperCase() + field.slice(1)
                        } (cm)`}
                        className="px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 w-full"
                      />
                      {renderError(field)}
                    </div>
                  ))}
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

            {/* Submit */}
            <div className="md:w-[200px]">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full text-white py-2 text-sm rounded transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {loading ? "Searching..." : "Search Carrier"}
              </button>
            </div>

            {apiResponse && (
              <div className="bg-white p-4 rounded border border-gray-300 mt-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  API Response:
                </h3>
                <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-[300px]">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
