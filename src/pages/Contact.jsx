import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-[50vh] flex bg-white">
      {/* Left Image Section */}
      <div className="hidden md:flex md:w-1/2">
        <img
          src="/Contact.png"
          alt="Tablet"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 py-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Request a Free Quote
        </h2>
        <p className="text-gray-500 mb-6 text-base">
          We will get back to you as soon as possible
        </p>

        {/* Form */}
        <form className="space-y-5 w-full max-w-2xl">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 text-sm focus:outline-none focus:border-gray-400"
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 text-sm focus:outline-none focus:border-gray-400"
            />
          </div>

          {/* Phone & Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex space-x-2">
              <select className="border border-gray-300 rounded-md p-3 bg-gray-50 text-sm focus:outline-none">
                <option>India (🇮🇳)</option>
              </select>
              <input
                type="tel"
                placeholder="+91"
                required
                className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 text-sm focus:outline-none focus:border-gray-400"
              />
            </div>

            <select
              required
              className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 text-sm focus:outline-none focus:border-gray-400"
            >
              <option value="">Choose Services*</option>
              <option>International Shipping</option>
              <option>Liquid Courier Service</option>
              <option>Medicine Shipping</option>
              <option>Dangerous Goods Courier Service</option>
              <option>University Documents Delivery</option>
              <option>Corporate Gifting Shipping Service</option>
              <option>Warehousing & Fulfillment</option>
              <option>Events & Exhibition Logistics</option>
              <option>Custom Clearing Service</option>
            </select>
          </div>

          {/* Message Box */}
          <textarea
            required
            placeholder="Message*"
            className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 text-sm h-28 focus:outline-none focus:border-gray-400"
          ></textarea>

          {/* reCAPTCHA Placeholder */}

          <div className="flex flex-col items-left">
            <img src="Captcha.png" alt="Captcha" className="w-65 h-15"></img>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md py-3 px-10"
          >
            Submit
          </button>
        </form>

        {/* Footer Info */}
        <div className="mt-8 text-gray-700 text-sm">
          <p>
            <span className="text-orange-500 font-semibold">
              Create your own free forms
            </span>{" "}
            to generate leads from your website.
          </p>

          <h3 className="font-bold text-lg mt-4">Alternately</h3>
          <p className="mt-2">
            Call or Whatsapp us at{" "}
            <span className="text-blue-600 font-semibold">+91-90225-55633</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
