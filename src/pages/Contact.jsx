import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden max-w-6xl w-full">
        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img
            src="/Contact.png"
            alt="Tablet"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-2">Request a Free Quote</h2>
          <p className="text-gray-500 mb-6">
            We will get back to you as soon as possible
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <input
                type="email"
                placeholder="Email*"
                className="border border-gray-300 rounded-md p-2 w-full mt-4 md:mt-0"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4">
              <select className="border border-gray-300 rounded-md p-2 w-full">
                <option>India (🇮🇳)</option>
                {/* Add other countries here */}
              </select>
              <input
                type="tel"
                placeholder="Phone number*"
                className="border border-gray-300 rounded-md p-2 w-full mt-4 md:mt-0"
                required
              />
            </div>

            <select
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            >
              <option value="">Choose Services*</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>

            <textarea
              placeholder="Message*"
              className="border border-gray-300 rounded-md p-2 w-full h-32"
              required
            ></textarea>

            {/* reCAPTCHA placeholder */}
            <div className="border border-gray-300 p-2 rounded-md w-full text-center text-gray-500">
              protected by reCAPTCHA
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white p-2 rounded-md w-full mt-2"
            >
              Submit
            </button>
          </form>

          <p className="mt-6 text-gray-600">
            Alternately <br />
            Call or Whatsapp us at{" "}
            <span className="font-semibold text-blue-600">+91-90225-55633</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
